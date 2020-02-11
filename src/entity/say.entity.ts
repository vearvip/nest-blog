import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Say {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  content: string

}