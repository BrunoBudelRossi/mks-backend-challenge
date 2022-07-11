import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserServices } from './user.service';
import CreateUserDto from '../dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly usersServices: UserServices) {}

  @Post('')
  postUser(@Body() user: CreateUserDto) {
    return this.usersServices.insert(user);
  }

  @Get()
  getAll() {
    return this.usersServices.getAllUsers();
  }

  @Get(':userId/movies')
  getMovies(@Param('userId') userId: number) {
    return this.usersServices.getMoviesOfUser(userId);
  }

  @Post(':userId/movies')
  watchMovie(@Body() movieId: number, @Param('userId') userId: number) {
    return this.usersServices.userWatchMovie(userId, movieId);
  }
}
