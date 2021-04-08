import React from 'react';
import styles from './Block.module.scss';

const Block: React.FC = ({children}) =>
    <div className={styles.container}>{children}</div>;

export default Block;
