import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactsService {
  create(createContactDto: CreateContactDto, userId: string) {
    return 'This action adds a new contact';
  }

  findAll(userId: string) {
    return `This action returns all contacts for the ${userId} user`;
  }

  findOne(id: number, userId: string) {
    return `This action returns a #${id} contact for the ${userId} user`;
  }

  update(id: number, updateContactDto: UpdateContactDto, userId: string) {
    return `This action updates a #${id} contact for the ${userId} user`;
  }

  remove(id: number, userId: string) {
    return `This action removes a #${id} contact for the ${userId} user`;
  }
}
