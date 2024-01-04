'use client';
import { useState } from 'react';
import { Movie } from '@/app/models/Movie';
import styles from '@/app/styles.module.scss';
import MovieThumbnail from './MovieThumbnail';

interface ThumbnailSliderProps {
  movies: Movie[];
}

const ThumbnailSlider = ({ movies }: ThumbnailSliderProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const handleLeftClick = () => {
    if (activeStep === 0) return;
    setActiveStep((prevState) => prevState - 1);
  };

  const handleRightClick = () => {
    if (activeStep === movies.length % 4) return;
    setActiveStep((prevState) => prevState + 1);
  };

  return (
    <section className={styles.sliderContainer}>
      <button className={styles.sliderBtn} onClick={handleLeftClick}>
        &#8249;
      </button>
      <ul
        className={styles.slider}
        style={{
          transform: `translateX(calc(-${activeStep} * 100%))`,
        }}
      >
        {movies.map((movie: Movie) => (
          <MovieThumbnail movie={movie} key={movie.imdbID} />
        ))}
      </ul>
      <button className={styles.sliderBtn} onClick={handleRightClick}>
        &#8250;
      </button>
    </section>
  );
};

export default ThumbnailSlider;
