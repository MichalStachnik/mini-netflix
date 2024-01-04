import Image from 'next/image';
import Link from 'next/link';
import { Movie } from '@/app/models/Movie';
import styles from '@/app/styles.module.scss';

const MovieThumbnail = ({ movie }: { movie: Movie }) => {
  return (
    <li>
      <Link href={`/movie/${movie.imdbID}`}>
        <Image
          src={movie.Poster}
          width={0}
          height={0}
          alt={movie.Title}
          className={styles.thumbnailImg}
          sizes="100vw"
        />
      </Link>
    </li>
  );
};

export default MovieThumbnail;
