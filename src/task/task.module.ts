import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { UserService } from '../user/user.service';

@Module({
    controllers: [TaskController],
    providers: [TaskService, UserService],
})
export class TaskModule {}
