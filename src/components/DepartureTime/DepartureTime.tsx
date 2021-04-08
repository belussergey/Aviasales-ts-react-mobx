import React from 'react';
import {iDepartureTimeProps} from './DepartureTime.types';

const DepartureTime: React.FC<iDepartureTimeProps> = ({date, duration}) => {
    const dateDeparture = new Date(date);
    const dateLanding = new Date(dateDeparture.getTime() + duration * 60 * 1000);

    let hoursDeparture: string = dateDeparture.getUTCHours().toString();
    let minutesDeparture: string = dateDeparture.getUTCMinutes().toString();
    let hoursLanding: string = dateLanding.getUTCHours().toString();
    let minutesLanding: string = dateLanding.getUTCMinutes().toString();

    minutesDeparture = +minutesDeparture < 10 ? '0' + minutesDeparture : minutesDeparture;
    hoursDeparture = +hoursDeparture < 10 ? '0' + hoursDeparture : hoursDeparture;
    minutesLanding = +minutesLanding < 10 ? '0' + minutesLanding : minutesLanding;
    hoursLanding = +hoursLanding < 10 ? '0' + hoursLanding : hoursLanding;

    return <span>{`${hoursDeparture}:${minutesDeparture} - ${hoursLanding}:${minutesLanding}`}</span>;
};

export default DepartureTime;
