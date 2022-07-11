import { Injectable } from '@nestjs/common';
import MovieEntity from '../db/movie.entity';
import CreateMovieDto from '../dto/create-movie.dto';

@Injectable()
export default class MovieServices {
  async insert(movieDetails: CreateMovieDto): Promise<MovieEntity> {
    const movieEntity: MovieEntity = MovieEntity.create();

    const { name, genreId } = movieDetails;
    movieEntity.name = name;
    movieEntity.genre = genreId;

    await MovieEntity.save(movieEntity);
    return movieEntity;
  }

  async getAllMovies(): Promise<MovieEntity[]> {
    return await MovieEntity.find();
  }

  async update(
    movieDetails: CreateMovieDto,
    movieId: number,
  ): Promise<MovieEntity> {
    const movieEntity: MovieEntity = await MovieEntity.findOne({
      where: { id: movieId },
    });

    const { name, genreId } = movieDetails;
    movieEntity.name = name;
    movieEntity.genre = genreId;

    await MovieEntity.save(movieEntity);
    return movieEntity;
  }

  async delete(movieId: number): Promise<MovieEntity> {
    const movieEntity: MovieEntity = await MovieEntity.findOne({
      where: { id: movieId },
    });

    await MovieEntity.remove(movieEntity);
    return movieEntity;
  }
}
