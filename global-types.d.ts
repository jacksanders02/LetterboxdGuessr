type MovieWorker = {
  name: string;
  link: string;
};

type Movie = {
  id: string;
  title: string;
  year: number;
  genre: string;
  poster: string;
  criticRating: number | null;
  starring: MovieWorker[];
  directedBy: MovieWorker[];
};

type Review = {
  reviewer: string;
  rating: number | null;
  link: string;
  text: string;
  Movie: Movie;
};
