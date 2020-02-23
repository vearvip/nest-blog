import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string

  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column('text')
  introduce: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP'
  })
  addTime: number
  
  @Column({
    type: 'int',
    default: 1
  })
  viewCount: number

}
