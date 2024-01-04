'use client';
import { useEffect, useMemo, useState } from 'react';
import { Movie } from '@/app/models/Movie';
import styles from '@/app/styles.module.scss';
import MovieThumbnail from './MovieThumbnail';

interface ThumbnailSliderProps {
  movies: Movie[];
}

const ThumbnailSlider = ({ movies }: ThumbnailSliderProps) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    setWindowWidth(window.innerWidth);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const numThumbnails = useMemo(() => {
    if (windowWidth && windowWidth <= 400) return 2;
    else return 4;
  }, [windowWidth]);

  const handleLeftClick = () => {
    if (activeStep === 0) return;
    setActiveStep((prevState) => prevState - 1);
  };

  const handleRightClick = () => {
    if (activeStep === Math.ceil(movies.length / numThumbnails) - 1) return;
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
