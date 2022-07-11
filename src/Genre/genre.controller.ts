import { Body, Controller, Get, Post } from '@nestjs/common';
import GenreServices from './genre.service';
import CreateGenreDto from '../dto/create-genre.dto';

@Controller('genres')
export default class GenreController {
  constructor(private readonly genreServices: GenreServices) {}

  @Post()
  postGenre(@Body() genre: CreateGenreDto) {
    return this.genreServices.insert(genre);
  }

  @Get()
  getAll() {
    return this.genreServices.getAllGenre();
  }
}
