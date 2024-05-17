import { Module } from '@nestjs/common';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { DatabaseModule } from './infrastructure/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { Task } from './task/task.entity';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        DatabaseModule.forRoot([User, Task]),
        UserModule,
        TaskModule,
    ],
})
export class AppModule {}
