import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import GenreEntity from './genre.entity';

@Entity('movies')
export default class MovieEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @ManyToOne(() => GenreEntity, (genre) => genre.movies)
  genre: number;
}
