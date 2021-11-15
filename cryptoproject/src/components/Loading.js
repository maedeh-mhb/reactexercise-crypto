import React from 'react';
import loading from '../gif/loading.gif';
import styles from './Loading.module.css';
const Loading = () => {
    return (
        <div>
            <img className={styles.loading} src={loading} alt="loading" />
        </div>
    );
};

export default Loading;