import { fetchMovies } from '@/app/utils/fetchers';
import ThumbnailSlider from '@/app/components/ThumbnailSlider';
import styles from '@/app/styles.module.scss';

const HomePage = async () => {
  const movies = await fetchMovies('Star Wars');

  if (!movies) return null;
  return (
    <section className={styles.main}>
      <ThumbnailSlider movies={movies.Search} />
    </section>
  );
};

export default HomePage;
