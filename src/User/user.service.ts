import { Injectable } from '@nestjs/common';
import UserEntity from '../db/user.entity';
import CreateUserDto from '../dto/create-user.dto';
import MovieEntity from '../db/movie.entity';

@Injectable()
export class UserServices {
  async insert(userDetails: CreateUserDto): Promise<UserEntity> {
    const userEntity: UserEntity = UserEntity.create();
    const { name } = userDetails;
    userEntity.name = name;
    await UserEntity.save(userEntity);
    return userEntity;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await UserEntity.find();
  }

  async getMoviesOfUser(userId: number): Promise<MovieEntity[]> {
    const user: UserEntity = await UserEntity.findOne({
      where: { id: userId },
      relations: ['movies'],
    });

    return user.movies;
  }

  async userWatchMovie(userId: number, movieId: number): Promise<UserEntity> {
    const user: UserEntity = await UserEntity.findOne({
      where: { id: userId },
      relations: ['movies'],
    });

    const movieEntity: MovieEntity = await MovieEntity.findOne({
      where: { id: movieId },
    });

    user.movies.push(movieEntity);
    await UserEntity.save(user);
    return user;
  }
}
