import React from 'react';
import TicketDepartureBlock from '../TicketDepartureBlock/TicketDepartureBlock';
import {ITicketInfoProps} from './TicketInfo.types';
import TicketTravelTimeBlock from '../TicketTravelTimeBlock/TicketTravelTimeBlock';
import TicketTransferBlock from '../TicketTransferBlock/TicketTransferBlock';
import styles from './TicketInfo.module.scss'
import Block from '../Block/Block';

const TicketInfo: React.FC<ITicketInfoProps> = ({
                                                    data: {
                                                        origin,
                                                        destination,
                                                        date,
                                                        duration,
                                                        stops
                                                    }
                                                }) =>
    <div className={styles.container}>
        <Block>
            <TicketDepartureBlock origin={origin} destination={destination} date={date} duration={duration}/>
        </Block>
        <Block>
            <TicketTravelTimeBlock duration={duration}/>
        </Block>
        <Block>
            <TicketTransferBlock stops={stops}/>
        </Block>
    </div>;

export default TicketInfo;
