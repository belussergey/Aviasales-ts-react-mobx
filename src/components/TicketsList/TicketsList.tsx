import React from 'react';
import {ticketsList} from '../../stores/TicketsListStore';
import Ticket from '../Ticket/Ticket';
import {observer} from 'mobx-react';

const TicketsList = () => <div>
    {ticketsList.items?.map((ticket, index) => <Ticket key={index} ticket={ticket}/>)}
</div>;

export default observer(TicketsList);
