import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  create(createProjectDto: CreateProjectDto, userId: string) {
    return 'This action adds a new project';
  }

  findAll(userId: string) {
    return `This action returns all projects for user ${userId}`;
  }

  findOne(id: number, userId: string) {
    return `This action returns a #${id} project for user ${userId}`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto, userId: string) {
    return `This action updates a #${id} project for user ${userId}`;
  }

  remove(id: number, userId: string) {
    return `This action removes a #${id} project for user ${userId}`;
  }
}
