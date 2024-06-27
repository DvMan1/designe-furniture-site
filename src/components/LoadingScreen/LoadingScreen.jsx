import React from 'react';
import styles from './LoadingScreen.module.scss'; 

const LoadingScreen = () => {
    const text = "MEBELSTON";
  return (
    <div className={styles.loading_screen}>
       {text.split('').map((char, index) => (
        <span key={index} className={styles.text_loading} style={{ animationDelay: `${index * 0.2}s` }}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default LoadingScreen;