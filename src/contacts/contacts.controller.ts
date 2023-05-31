import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { User } from 'src/users/entities/user.entity';

@Controller('users/:userId/contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  create(
      @Body() createContactDto: CreateContactDto,
      @Param('userId') userId: string
    ) {
    return this.contactsService.create(createContactDto, userId);
  }

  @Get()
  findAll(@Param('userId') userId: string) {
    return this.contactsService.findAll(userId);
  }

  @Get(':id')
  findOne(
        @Param('id') id: string,
        @Param('userId') userId: string,
    ) {
    return this.contactsService.findOne(+id, userId);
  }

  @Patch(':id')
  update(
      @Param('id') id: string, 
      @Param('userId') userId: string,
      @Body() updateContactDto: UpdateContactDto
    ) {
    return this.contactsService.update(+id, updateContactDto, userId);
  }

  @Delete(':id')
  remove(
      @Param('id') id: string,
      @Param('userId') userId: string
    ) {
    return this.contactsService.remove(+id, userId);
  }
}
