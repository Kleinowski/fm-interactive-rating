import illustration from '../../assets/illustration-thank-you.svg';
import styles from './Rating.module.scss';

interface IRatingSubmittedProps {
  selectedRating: number | undefined;
}

export function RatingSubmitted({ selectedRating }: IRatingSubmittedProps) {
  return (
    <div className={`${styles.card} ${styles.centered}`}>
      <img className={styles.thankYouImg} src={illustration} />
      <p className={styles.ratingInfo}>
        You selected {selectedRating} out of 5
      </p>
      <h1 className={styles.title}>Thank you!</h1>
      <p className={styles.description}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
