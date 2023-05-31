import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('users/:userId/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(
      @Body() createTaskDto: CreateTaskDto,
      @Param('userId') userId: string
    ) {
    return this.tasksService.create(createTaskDto, userId);
  }

  @Get()
  findAll(@Param('userId') userId: string) {
    return this.tasksService.findAll(userId);
  }

  @Get(':id')
  findOne(
      @Param('id') id: string,
      @Param('userId') userId: string,
    ) {
    return this.tasksService.findOne(+id, userId);
  }

  @Patch(':id')
  update(
      @Param('id') id: string, 
      @Param('userId') userId: string,
      @Body() updateTaskDto: UpdateTaskDto
    ) {
    return this.tasksService.update(+id, updateTaskDto, userId);
  }

  @Delete(':id')
  remove(
      @Param('id') id: string,
      @Param('userId') userId: string
    ) {
    return this.tasksService.remove(+id, userId);
  }
}
