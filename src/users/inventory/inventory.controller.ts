import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Controller('users/:userId/inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  create(
      @Body() createInventoryDto: CreateInventoryDto,
      @Param('userId') userId: string
    ) {
    return this.inventoryService.create(createInventoryDto, userId);
  }

  @Get()
  findAll(@Param('userId') userId: string) {
    return this.inventoryService.findAll(userId);
  }

  @Get(':id')
  findOne(
      @Param('id') id: string,
      @Param('userId') userId: string
    ) {
    return this.inventoryService.findOne(+id, userId);
  }

  @Patch(':id')
  update(
      @Param('id') id: string, 
      @Body() updateInventoryDto: UpdateInventoryDto,
      @Param('userId') userId: string
    ) {
    return this.inventoryService.update(+id, updateInventoryDto, userId);
  }

  @Delete(':id')
  remove(
      @Param('id') id: string,
      @Param('userId') userId: string
    ) {
    return this.inventoryService.remove(+id, userId);
  }
}
