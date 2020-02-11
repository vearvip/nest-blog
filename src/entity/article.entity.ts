import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  typeId: number

  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column('text')
  introduce: string;

  @Column('int')
  addTime: number
  
  @Column('int')
  viewCount: number

}
