import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './model/todo.entity';
import { DataSource, Repository } from 'typeorm';

interface CreateTodo extends Omit<Todo, "id"> { }

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
    private dataSource: DataSource,
  ) { }

  async create(data: Todo): Promise<Todo> {
    const { title, description } = data;
    return await this.todoRepository.save(data)
  }

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.createQueryBuilder("todo").getMany();
  }

  async findOne(id: number): Promise<Todo> {
    return this.todoRepository.findOneBy({ id });
  }


  async save(id: number, data: Todo): Promise<Todo> {
    await this.todoRepository.update(id, data);
    return this.todoRepository.findOneBy({ id });
  }

  async saveProp(id, key, value) {
    return this.dataSource.getRepository(Todo).save({
      id,
      [key]: value
    });
  }

  async remove(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }

}