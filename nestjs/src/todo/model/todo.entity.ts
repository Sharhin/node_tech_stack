import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "title" })
  title: string;

  @Column({ name: "description", nullable: true })
  description: string;

  @Column({ name: "users_id" })
  usersId: number
}