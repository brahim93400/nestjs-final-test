import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GetUserTasksDto } from './dtos/get-user-tasks.dto';
import { TaskService } from './task.service';
import { AddTaskDto } from './dtos/add-task.dto';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get('/user/:userId')
    async getUserTasks(
        @Param() getUserTaks: GetUserTasksDto,
    ): Promise<unknown[]> {
        return this.taskService.getUserTasks(getUserTaks.userId);
    }

    @Post()
    async addTask(@Body() addTaskDto: AddTaskDto): Promise<void> {
        return this.taskService.addTask(
            addTaskDto.name,
            addTaskDto.userId,
            addTaskDto.priority,
        );
    }
}
