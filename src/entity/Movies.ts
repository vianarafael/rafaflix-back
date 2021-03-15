import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Movies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  movie_id: number;

}
