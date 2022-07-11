import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import MovieServices from './movie.service';
import CreateMovieDto from '../dto/create-movie.dto';

@Controller('movies')
export default class MovieController {
  constructor(private readonly moviesServices: MovieServices) {}

  @Post()
  postMovie(@Body() movie: CreateMovieDto) {
    return this.moviesServices.insert(movie);
  }

  @Get()
  getAll() {
    return this.moviesServices.getAllMovies();
  }

  @Put(':movieId')
  putMovie(@Param('movieId') movieId: number, @Body() movie: CreateMovieDto) {
    return this.moviesServices.update(movie, movieId);
  }

  @Delete(':movieId')
  deleteMovie(@Param('movieId') movieId: number) {
    return this.moviesServices.delete(movieId);
  }
}
