import star from '../../assets/icon-star.svg';
import styles from './Rating.module.scss';

interface IRatingProps {
  selectedRating: number | undefined;
  onRatingClick: (rating: number) => void;
  onSubmit: () => void;
}

export function Rating({
  selectedRating,
  onRatingClick,
  onSubmit,
}: IRatingProps) {
  return (
    <div className={styles.card}>
      <img className={styles.star} src={star} alt='Star' />

      <h1 className={styles.title}>How did we do?</h1>
      <p className={styles.description}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            onClick={() => onRatingClick(rating)}
            className={`${styles.rating} ${
              selectedRating === rating ? styles.active : ''
            }`}
          >
            {rating}
          </button>
        ))}
      </div>

      <button
        onClick={onSubmit}
        className={styles.submit}
        disabled={selectedRating === undefined}
      >
        Submit
      </button>
    </div>
  );
}
