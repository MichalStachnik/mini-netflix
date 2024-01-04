import Image from 'next/image';
import Link from 'next/link';
import { fetchMovieById } from '@/app/utils/fetchers';
import { MovieDetails, Rating } from '@/app/models/MovieDetails';
import styles from '@/app/styles.module.scss';

interface MoviePageProps {
  params: {
    id: string;
  };
}

const MoviePage = async ({ params }: MoviePageProps) => {
  const movie: MovieDetails = await fetchMovieById(params.id);
  return (
    <section className={styles.moviePageContainer}>
      <Link href="/" className={styles.linkBtn}>
        Back
      </Link>
      <h2 className={styles.moviePageTitle}>{movie.Title}</h2>
      <Image
        src={movie.Poster}
        width={400}
        height={600}
        alt={movie.Title}
        className={styles.moviePagePoster}
      />
      <h4 className={styles.moviePagePlot}>{movie.Plot}</h4>
      <ul className={styles.moviePageRatings}>
        {movie.Ratings.map((rating: Rating) => (
          <li key={rating.Source}>
            <p>{rating.Source}</p>
            <p>{rating.Value}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MoviePage;
