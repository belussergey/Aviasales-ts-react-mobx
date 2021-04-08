import React from 'react';
import {IFlightTimeProps} from './FlightTime.types';

const FlightTime: React.FC<IFlightTimeProps> = ({duration}) => {
    let time = new Date(duration * 60 * 1000);
    let hours: string = time.getUTCHours().toString();
    let minutes: string = time.getUTCMinutes().toString();

    minutes = +minutes < 10 ? '0' + minutes : minutes;
    hours = +hours < 10 ? '0' + hours : hours;

    if (duration >= 1440) {
        hours = (+hours + 24).toString();
    }

    return <span>{`${hours}ч ${minutes}м`}</span>;
};

export default FlightTime;
