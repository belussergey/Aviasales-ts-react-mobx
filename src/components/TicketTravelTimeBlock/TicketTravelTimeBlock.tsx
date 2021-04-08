import React from 'react';
import {ITicketTravelTimeBlockProps} from './TicketTravelTimeBlock.types';
import Label from '../Label/Label';
import FlightTime from '../FlightTime/FlightTime';

const TicketTravelTimeBlock: React.FC<ITicketTravelTimeBlockProps> = ({duration}) => <><Label>В ПУТИ</Label>
    <FlightTime duration={duration}/>
</>

export default TicketTravelTimeBlock;
