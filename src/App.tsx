import { useState } from 'react';
import { Rating } from './components/Rating';
import { RatingSubmitted } from './components/Rating/RatingSubmitted';

export function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number | undefined>();

  function handleRatingClick(rating: number) {
    setSelectedRating(rating);
  }

  function handleSubmit() {
    setIsSubmitted(true);
  }

  return (
    <main>
      {isSubmitted ? (
        <RatingSubmitted selectedRating={selectedRating} />
      ) : (
        <Rating
          selectedRating={selectedRating}
          onRatingClick={handleRatingClick}
          onSubmit={handleSubmit}
        />
      )}
    </main>
  );
}
