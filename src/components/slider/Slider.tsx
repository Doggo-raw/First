import React from 'react';
import styles from './Slider.module.css';
import Arrow from "./arrow/Arrow";


const Slider = () => {
    return (
        <div className={styles.container}>


                <div className={styles.content}>
                    <Arrow/>

                </div>

        </div>
    );
};

export default Slider;