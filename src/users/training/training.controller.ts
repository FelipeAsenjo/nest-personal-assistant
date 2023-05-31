import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrainingService } from './training.service';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';

@Controller('users/:userId/training')
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  @Post()
  create(
      @Body() createTrainingDto: CreateTrainingDto,
      @Param('userId') userId: string
    ) {
    return this.trainingService.create(createTrainingDto, userId);
  }

  @Get()
  findAll(@Param('userId') userId: string) {
    return this.trainingService.findAll(userId);
  }

  @Get(':id')
  findOne(
      @Param('id') id: string,
      @Param('userId') userId: string
    ) {
    return this.trainingService.findOne(+id, userId);
  }

  @Patch(':id')
  update(
      @Param('id') id: string, 
      @Param('userId') userId: string, 
      @Body() updateTrainingDto: UpdateTrainingDto
    ) {
    return this.trainingService.update(+id, updateTrainingDto, userId);
  }

  @Delete(':id')
  remove(
      @Param('id') id: string,
      @Param('userId') userId: string
    ) {
    return this.trainingService.remove(+id, userId);
  }
}
