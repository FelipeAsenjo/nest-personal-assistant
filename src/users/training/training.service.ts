import { Injectable } from '@nestjs/common';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';

@Injectable()
export class TrainingService {
  create(createTrainingDto: CreateTrainingDto, userId: string) {
    return 'This action adds a new training';
  }

  findAll(userId: string) {
    return `This action returns all training for the ${userId} user`;
  }

  findOne(id: number, userId: string) {
    return `This action returns a #${id} training for the ${userId} user`;
  }

  update(id: number, updateTrainingDto: UpdateTrainingDto, userId: string) {
    return `This action updates a #${id} training for the ${userId} user`;
  }

  remove(id: number, userId: string) {
    return `This action removes a #${id} training for the ${userId} user`;
  }
}
