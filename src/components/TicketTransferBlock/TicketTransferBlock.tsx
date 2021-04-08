import React from 'react';
import Label from '../Label/Label';
import {ITicketTransferBlockProps} from './TicketTransferBlock.types';

const TicketTransferBlock: React.FC<ITicketTransferBlockProps> = ({stops}) => {
    let currentTransfer: string = '';
    if (stops.length > 1 && stops.length < 5) {
        currentTransfer = 'ПЕРЕСАДКИ'
    } else {
        if (stops.length >= 5) {
            currentTransfer = 'ПЕРЕСАДОК'
        } else currentTransfer = 'ПЕРЕСАДКА'
    }

    return <>
        {!!stops.length && <>
            <Label>{`${stops.length} ${currentTransfer}`}</Label>
            <span>{stops.join(', ')}</span>
        </>}
    </>;
};

export default TicketTransferBlock;
