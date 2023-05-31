import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  create(createTaskDto: CreateTaskDto, userId: string) {
    return 'This action adds a new task';
  }

  findAll(userId: string) {
    return `This action returns all tasks for the ${userId} user`;
  }

  findOne(id: number, userId: string) {
    return `This action returns a #${id} task for the ${userId} user`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto, userId: string) {
    return `This action updates a #${id} task for the ${userId} user`;
  }

  remove(id: number, userId: string) {
    return `This action removes a #${id} task for the ${userId} user`;
  }
}
