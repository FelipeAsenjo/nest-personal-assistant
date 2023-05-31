import { Module } from '@nestjs/common';
import { PhonesModule } from './phones/phones.module';
import { EmailsModule } from './emails/emails.module';
import { AddressesModule } from './addresses/addresses.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [PhonesModule, EmailsModule, AddressesModule, VehiclesModule, PeopleModule],
  exports: [PhonesModule, EmailsModule, AddressesModule, VehiclesModule, PeopleModule]
})
export class SharedModule {}
