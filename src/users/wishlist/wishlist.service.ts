import { Injectable } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';

@Injectable()
export class WishlistService {
  create(createWishlistDto: CreateWishlistDto, userId: string) {
    return 'This action adds a new whishlist';
  }

  findAll(userId: string) {
    return `This action returns all whishlist for the ${userId} user`;
  }

  findOne(id: number, userId: string) {
    return `This action returns a #${id} whishlist for the ${userId} user`;
  }

  update(id: number, updateWishlistDto: UpdateWishlistDto, userId: string) {
    return `This action updates a #${id} whishlist for the ${userId} user`;
  }

  remove(id: number, userId: string) {
    return `This action removes a #${id} whishlist for the ${userId} user`;
  }
}
