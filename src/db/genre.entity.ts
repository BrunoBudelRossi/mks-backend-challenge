import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import MovieEntity from './movie.entity';

@Entity('genres')
export default class GenreEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @OneToMany(() => MovieEntity, (movie) => movie.genre)
  movies: MovieEntity[];
}
