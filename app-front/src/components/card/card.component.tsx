// DEPENDENCIES
import React from 'react';

// STYLED-COMPONENTS
import {
  CardWrapper,
  ImageContainer,
  // CardInfo,
  CardVote,
} from './card.styled';

// FUNCTION
const Card: React.FC<any> = ({ movie, key }) => {
  return (
    <CardWrapper key={key} onClick={() => {}}>
      <ImageContainer>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
        />
      </ImageContainer>
      {/* <CardInfo>
        <span className="cardTitle" title={movie.title}>
          {movie.title}
        </span>
        <span className="cardDate">{movie.release_date}</span>
      </CardInfo> */}
      <CardVote>{movie.vote_average}</CardVote>
    </CardWrapper>
  );
};

export default Card;
