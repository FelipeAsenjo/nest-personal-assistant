import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SharedModule } from 'src/shared/shared.module';
import { TasksModule } from './tasks/tasks.module';
import { WhishlistModule } from './wishlist/wishlist.module';
import { InventoryModule } from './inventory/inventory.module';
import { ProjectsModule } from './projects/projects.module';
import { TrainingModule } from './training/training.module';

@Module({
  imports: [SharedModule, TasksModule, WhishlistModule, InventoryModule, ProjectsModule, TrainingModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
