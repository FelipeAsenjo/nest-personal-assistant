import { Injectable } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Injectable()
export class InventoryService {
  create(createInventoryDto: CreateInventoryDto, userId: string) {
    return 'This action adds a new inventory';
  }

  findAll(userId: string) {
    return `This action returns all inventory for the ${userId} user`;
  }

  findOne(id: number, userId: string) {
    return `This action returns a #${id} inventory for the ${userId} user`;
  }

  update(id: number, updateInventoryDto: UpdateInventoryDto, userId: string) {
    return `This action updates a #${id} inventory for the ${userId} user`;
  }

  remove(id: number, userId: string) {
    return `This action removes a #${id} inventory for the ${userId} user`;
  }
}
