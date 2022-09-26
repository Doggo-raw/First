import React from 'react';
import styles from './Publisher.module.css';

const Publisher = () => {
    return (

        <div className={styles.container}>

            <label>
                Post name
                <input className={styles.inp} type="text" placeholder={"post name"}/>
            </label>

            <label>
                Description
                <input className={styles.inp} type="text" placeholder={"description"}/>
            </label>

            <div className={styles.buttons}>
                <button>Post</button>
                <button>Cancel</button>
            </div>

        </div>

    );
};

export default Publisher;