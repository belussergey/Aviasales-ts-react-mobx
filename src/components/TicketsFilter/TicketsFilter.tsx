import React from 'react';
import {Checkbox} from 'antd';
import styles from './TicketsFilter.module.scss'
import {observer} from 'mobx-react';
import {ticketsList} from '../../stores/TicketsListStore';
import {ITicketFilter} from './TicketFilter.types';

const options: ITicketFilter[] = [
    {label: 'Все', value: -1},
    {label: 'Без Пересадок', value: 0},
    {label: '1 пересадка', value: 1},
    {label: '2 пересадки', value: 2},
    {label: '3 пересадки', value: 3}
];

const TicketFilter = () => <>
    <Checkbox.Group className={styles.container}
                    options={options}
                    defaultValue={[-1]}
                    onChange={ticketsList.setTransferCount}
    />
</>;

export default observer(TicketFilter);
