import { Controller, Request, Get, Post, Put, Patch, Delete } from '@nestjs/common';
import { Body, Param } from '@nestjs/common';
import { TodoService } from "./todo.service"
import { Todo } from "./model/todo.entity"
import { CreateTodo } from './todo.validation';
import { ApiTags } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';
@ApiTags('todo')
@ApiBearerAuth()
@Controller('todo')
export class TodoController {

  constructor(
    private todoService: TodoService
  ) { }

  @Post()
  async create(
    @Request() req,
    @Body() form: CreateTodo
  ): Promise<Todo> {
    const { id } = req.user;
    const data = { ...form, usersId: id } as Todo;
    console.log("data", data)
    return await this.todoService.create(data)
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return await this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params: any): Promise<Todo> {
    const { id } = params;
    return await this.todoService.findOne(id);
  }

  @Put(':id')
  async put(@Param() params: any, @Body() form: Todo) {
    const { id } = params;
    return await this.todoService.save(id, form);
  }

  @Patch(':id')
  async patch(@Param() params: any, @Body() form: Todo) {
    const { id } = params;
    return await this.todoService.save(id, form);
  }

  @Delete(':id')
  async remove(@Param() params: any): Promise<void> {
    const { id } = params;
    await this.todoService.remove(id);
  }
}