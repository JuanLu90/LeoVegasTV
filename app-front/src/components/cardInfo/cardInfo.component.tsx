import './card.css';

interface Movie {
  movie: {
    id: number;
    original_language: string;
    title: string;
    vote_average: number;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
  };
  key: number;
  //   setShowMovieDetails: any;
}

const CardInfo: React.FC<Movie> = ({ movie, key }) => {
  return (
    <div className="card" key={key}>
      <div className="imageContainer">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
        />
        <div className="details">
          <button onClick={() => console.log('aaa')}>Details</button>
        </div>
      </div>
      <div className="cardInfo">
        <span className="cardTitle" title={movie.title}>
          {movie.title}
        </span>
        <span className="cardDate">{movie.release_date}</span>
      </div>
      <span className="cardVote">{movie.vote_average}</span>
    </div>
  );
};

export default CardInfo;
