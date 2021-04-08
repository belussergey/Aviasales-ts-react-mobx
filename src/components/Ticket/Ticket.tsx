import React from 'react';
import {ITicketProps} from './Ticket.types';
import styles from './Ticket.module.scss'
import Price from '../Price/Price';
import Logo from '../Logo/Logo';
import TicketInfo from '../TicketInfo/TicketInfo';

const Ticket: React.FC<ITicketProps> = ({ticket: {price, carrier, segments}}) =>
    <div className={styles.container}>
        <div className={styles.containerPrice}>
            <Price price={price}/>
            <Logo carrier={carrier}/>
        </div>
        <div className={styles.containerInfo}>
            {segments.map((segment) => <TicketInfo data={segment} key={segment.duration}/>)}
        </div>
    </div>;

export default Ticket;
