import React from 'react';
import styles from './Rectangle.module.css';

const Rectangle: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.rectangle}>
                {/* Additional content can be added here */}
            </div>
        </div>
    );
};

export default Rectangle;
