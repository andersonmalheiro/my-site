import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import ReactImage from 'react-image';

const Slider = ({ data, toggleShow }) => {
  const [currentRotation, setCurrentRotation] = useState(0);
  const [index, setIndex] = useState(0);
  const numSlides = data.length;

  const prev = () => {
    console.log('----- prev ------');
    console.group('Params');
    console.log('index', index);
    console.log('slides', numSlides);
    console.log('rotation', currentRotation);
    console.groupEnd();

    if (index === 0) {
      return;
    } else {
      setCurrentRotation(currentRotation - 100);
      setIndex(index - 1);
    }
  };

  const next = () => {
    console.log('----- next -----');
    console.group('Params');
    console.log('index', index);
    console.log('slides', numSlides);
    console.log('rotation', currentRotation);
    console.groupEnd();

    if (index === numSlides - 1) {
      return;
    } else {
      setCurrentRotation(currentRotation + 100);
      setIndex(index + 1);
    }
  };

  /**
   *
   *
  useEffect(() => {
    window.addEventListener('keydown', event => {
      console.log(event.key);
      // event.preventDefault();
      if (event.key === 'ArrowLeft') {
        prev();
      } else if (event.key === 'ArrowRight') {
        next();
      } else if (event.key === 'Escape') {
        toggleShow();
      }
    });

    return function () {
      window.removeEventListener('keydown', () => {});
    }
  }, []);
   */

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
          <img src="/assets/icons/left-arrow.svg" alt="Anterior"/>
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
          <img src="/assets/icons/right-arrow.svg" alt="Próximo"/>
        </div>
      </div>
    </div>
  );
};

export default Slider;
