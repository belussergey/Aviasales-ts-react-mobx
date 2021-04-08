import React, {useCallback} from 'react';
import styles from './InformationPage.module.scss';
import logo from '../../images/logo.png';
import TicketFilter from '../TicketsFilter/TicketsFilter';
import {Button, Spin} from 'antd';
import TicketsList from '../TicketsList/TicketsList';
import {ticketsList} from '../../stores/TicketsListStore';
import {observer} from 'mobx-react';

const InformationPage = () => {
    const openMoreTickets = useCallback((): void => {
        ticketsList.setVisibleTicketsCount(ticketsList.visibleTickets + 5);
    }, []);

    const handleUpdate = useCallback((): void => {
        ticketsList.getSearch();
    }, []);

    return <Spin spinning={ticketsList.loading}>
        <div className={styles.containerLogo}><img src={logo} alt={'logo'}/></div>
        <div className={styles.container}>
            <div className={styles.containerFilter}>
                <h4>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
                <TicketFilter/>
            </div>
            <div className={styles.containerTickets}>
                <div className={styles.containerBtn}>
                    <Button className={styles.LeftBtn} type="primary" onClick={ticketsList.setSortByPrice}>САМЫЙ
                        ДЕШЁВЫЙ</Button>
                    <Button className={styles.RightBtn} type="primary" onClick={ticketsList.setSortByTime}>САМЫЙ
                        БЫСТРЫЙ</Button>
                </div>
                <div className={styles.containerTicketsList}>
                    {ticketsList.hasError && <>
                        <span className={styles.textError}>
                            При загрузке данных произошла ошибка. Проверьте Ваше подключение к сети
                        </span>
                        <Button type="ghost" onClick={handleUpdate}>Обновить</Button>
                    </>}
                    <TicketsList/>
                </div>
                <div className={styles.containerShowTicketsBtn}>
                    <Button type="primary" block onClick={openMoreTickets}>
                        Показать еще 5 билетов!
                    </Button>
                </div>
            </div>
        </div>
    </Spin>;
};

export default observer(InformationPage);
