import React from 'react';
import Label from '../Label/Label';
import DepartureTime from '../DepartureTime/DepartureTime';
import {TicketDepartureBlockProps} from './TicketDepartureBlock.types';

const TicketDepartureBlock: React.FC<TicketDepartureBlockProps> = ({
                                                                       origin,
                                                                       destination,
                                                                       date,
                                                                       duration
                                                                   }) =>
    <>
        <Label>{`${origin}-${destination}`}</Label>
        <DepartureTime date={date} duration={duration}/>
    </>

export default TicketDepartureBlock;
