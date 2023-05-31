import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('users/:userId/projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  create(
      @Body() createProjectDto: CreateProjectDto,
      @Param('userId') userId: string
    ) {
    return this.projectsService.create(createProjectDto, userId);
  }

  @Get()
  findAll(@Param('userId') userId: string) {
    return this.projectsService.findAll(userId);
  }

  @Get(':id')
  findOne(
      @Param('id') id: string,
      @Param('userId') userId: string
    ) {
    return this.projectsService.findOne(+id, userId);
  }

  @Patch(':id')
  update(
      @Param('id') id: string, 
      @Param('userId') userId: string,
      @Body() updateProjectDto: UpdateProjectDto
    ) {
    return this.projectsService.update(+id, updateProjectDto, userId);
  }

  @Delete(':id')
  remove(
      @Param('id') id: string,
      @Param('userId') userId: string,
    ) {
    return this.projectsService.remove(+id, userId);
  }
}
