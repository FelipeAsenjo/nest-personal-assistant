import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';

@Controller('users/:userId/wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post()
  create(
      @Body() createWishlistDto: CreateWishlistDto,
      @Param('userId') userId: string
    ) {
    return this.wishlistService.create(createWishlistDto, userId);
  }

  @Get()
  findAll(@Param('userId') userId: string) {
    return this.wishlistService.findAll(userId);
  }

  @Get(':id')
  findOne(
      @Param('id') id: string,
      @Param('userId') userId: string
    ) {
    return this.wishlistService.findOne(+id, userId);
  }

  @Patch(':id')
  update(
      @Param('id') id: string, 
      @Body() updateWishlistDto: UpdateWishlistDto,
      @Param('userId') userId: string
    ) {
    return this.wishlistService.update(+id, updateWishlistDto, userId);
  }

  @Delete(':id')
  remove(
      @Param('id') id: string,
      @Param('userId') userId: string
    ) {
    return this.wishlistService.remove(+id, userId);
  }
}
