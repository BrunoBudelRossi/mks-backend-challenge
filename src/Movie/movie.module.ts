import { Module } from '@nestjs/common';
import MovieServices from './movie.service';
import MovieController from './movie.controller';

@Module({
  imports: [],
  controllers: [MovieController],
  providers: [MovieServices],
})
export default class MoviesModule {}
