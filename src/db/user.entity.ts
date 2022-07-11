import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import GenreEntity from './genre.entity';
import MovieEntity from './movie.entity';

@Entity('users')
export default class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @ManyToMany(() => GenreEntity)
  @JoinTable({ name: 'user_has_movie' })
  movies: MovieEntity[];
}
