import React, { useState } from 'react';
import styles from './styles.module.scss';
import ReactImage from 'react-image';

const Slider = ({ data, toggleShow }) => {
  const [currentRotation, setCurrentRotation] = useState(0);
  const [index, setIndex] = useState(0);
  const numSlides = data.length;

  const prev = () => {
    if (index === 0) {
      return;
    } else {
      setCurrentRotation(currentRotation - 100);
      setIndex(index - 1);
    }
    console.log('rotation ->', currentRotation);
  };

  const next = () => {
    if (index === numSlides - 1) {
      return;
    } else {
      setCurrentRotation(currentRotation + 100);
      setIndex(index + 1);
    }
    console.log('rotation ->', currentRotation);
  };

  return (
    <div className={styles.modalWrapper}>
      <button onClick={toggleShow} className={styles.closeButton}>
        x
      </button>
      <div className={styles.slider}>
        <div
          className={`${styles.action} ${styles.previous}`}
          onClick={() => prev()}
        >
          <i className="gg-chevron-left"></i>
        </div>

        <div className={styles.mask}>
          <div
            className={styles.content}
            style={{ transform: `translate3d(-${currentRotation}%, 0px, 0px)` }}
          >
            {data.map((image, index) => (
              <div className={styles.sliderItem} key={index}>
                <div className={styles.sliderContent}>
                  <ReactImage src={image} className={styles.imageContent} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${styles.action} ${styles.next}`}
          onClick={() => next()}
        >
          <i className="gg-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Slider;
