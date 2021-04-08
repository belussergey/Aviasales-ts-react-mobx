import {action, autorun, computed, makeObservable, observable, runInAction} from 'mobx';
import {IResponse, ISearchResponse, ITicket} from './types';
import {CheckboxValueType} from 'antd/lib/checkbox/Group';

export class TicketsListStore {
    constructor() {
        makeObservable(this, {
            data: observable,
            searchId: observable,
            visibleTickets: observable,
            loadingCounter: observable,
            hasError: observable,
            sortBy: observable,
            transferCount: observable,
            loading: computed,
            items: computed,
            getSearch: action,
            getTickets: action,
            setVisibleTicketsCount: action,
            setSortBy: action,
            setSortByPrice: action,
            setSortByTime: action
        });
    }

    data?: IResponse;

    searchId?: string;

    visibleTickets: number = 4;

    hasError: boolean = false;

    loadingCounter: number = 0;

    dataFilter?: ITicket[];

    transferCount: CheckboxValueType[] = [];

    sortBy?: string;

    get loading(): boolean {
        return !!this.loadingCounter;
    }

    get items(): ITicket[] {
        const tickets = this.data?.tickets || [];
        const filteredData = this.transferCount.length && !this.transferCount.includes(-1) ?
            tickets.filter((ticket) => this.transferCount.includes(ticket.segments[0].stops.length)) :
            tickets;

        return [...filteredData].sort((a, b) => {
            if (this.sortBy === 'price') {
                return a.price - b.price;
            }
            if (this.sortBy === 'time') {
                return a.segments[0].duration - b.segments[0].duration;
            }

            return 0;
        }).slice(0, this.visibleTickets);
    }

    setTransferCount = (value: CheckboxValueType[]): void => {
        runInAction(() => {
            this.transferCount = value;
        });
    }

    setSortBy(sortBy: string): void {
        this.sortBy = sortBy;
    }

    setSortByPrice = (): void => {
        this.setSortBy('price');
    }

    setSortByTime = (): void => {
        this.setSortBy('time');
    }

    async getSearch(): Promise<void> {
        runInAction(() => {
            this.hasError = false;
            this.loadingCounter += 1;
        });
        try {
            const url: string = 'https://front-test.beta.aviasales.ru/search';
            const response = await fetch(url);
            const {searchId}: ISearchResponse = await response.json();

            runInAction((): void => {
                this.searchId = searchId;
                this.loadingCounter -= 1;
            });
        } catch (e) {
            runInAction(() => {
                this.hasError = true;
                this.loadingCounter -= 1;
                this.data = undefined;
            });
        }
    }

    async getTickets(id: string): Promise<void> {
        runInAction(() => {
            this.hasError = false;
            this.loadingCounter += 1;
        });
        try {
            const url: string = `https://front-test.beta.aviasales.ru/tickets?searchId=${id}`;
            const response = await fetch(url);
            const data: IResponse = await response.json();

            runInAction(() => {
                this.data = data;
                this.loadingCounter -= 1;
            });
        } catch (e) {
            runInAction(() => {
                this.hasError = true;
                this.loadingCounter -= 1;
                this.data = undefined;
            });
        }
    }

    setVisibleTicketsCount(num: number): void {
        this.visibleTickets = num;
    }
}

export const ticketsList = new TicketsListStore();

autorun((): void => {
    ticketsList.getSearch();
});

autorun((): void => {
    if (ticketsList.searchId) {
        ticketsList.getTickets(ticketsList.searchId);
    }
});
