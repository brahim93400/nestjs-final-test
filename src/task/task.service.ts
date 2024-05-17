import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
    constructor(
        @Inject('TASK_REPOSITORY')
        private readonly taskRepository: Repository<Task>,
    ) {}

    async addTask(
        name: string,
        userId: string,
        priority: number,
    ): Promise<void> {
        const task = this.taskRepository.create({ name, userId, priority });
        await this.taskRepository.save(task);
    }

    getTaskByName(name: string): Promise<unknown> {
        return this.taskRepository.findOne({ where: { name } });
    }

    async getUserTasks(userId: string): Promise<unknown[]> {
        return this.taskRepository.find({ where: { userId } });
    }

    async resetData(): Promise<void> {
        await this.taskRepository.delete({});
    }
}
