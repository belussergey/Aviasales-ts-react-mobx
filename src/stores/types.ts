export interface ISegment {
    origin: string,
    destination: string,
    date: string,
    stops: string[],
    duration: number
}

export interface ITicket {
    price: number,
    carrier: string,
    segments: ISegment[]
}

export interface IResponse {
    tickets: ITicket[]
}

export type ISearchResponse = {
    searchId: string
}
