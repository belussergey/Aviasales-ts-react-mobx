import React from 'react';
import {IPrice} from './Price.types';
import styles from './Price.module.scss';

const Price: React.FC<IPrice> = ({price}) => {
    return <div className={styles.containerPrice}>
        <span>{price.toString().replace(/(\d{2})/, '$1 ')} ₽</span>
    </div>

};

export default Price;
