import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './User/user.module';
import UserEntity from './db/user.entity';
import MovieModule from './movie/movie.module';
import GenreModule from './Genre/genre.module';
import MovieEntity from './db/movie.entity';
import GenreEntity from './db/genre.entity';

@Module({
  imports: [
    UserModule,
    MovieModule,
    GenreModule,
    TypeOrmModule.forFeature([UserEntity, MovieEntity, GenreEntity]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'movies',
      entities: [UserEntity, MovieEntity, GenreEntity],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
