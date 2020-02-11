import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class ArticleType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  typeName: string;

  @Column('int')
  orderNum: number

}