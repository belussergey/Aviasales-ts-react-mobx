import React from 'react';
import styles from './Label.module.scss';

const Label: React.FC = ({children}) =>
    <span className={styles.label}>{children}</span>

export default Label;
