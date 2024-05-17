import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: Repository<User>,
    ) {}

    async addUser(email: string): Promise<void> {
        await this.userRepository.save(this.userRepository.create({ email }));
    }

    async getUser(email: string): Promise<unknown> {
        return await this.userRepository.findOne({ where: { email } });
    }

    async resetData(): Promise<void> {
        await this.userRepository.delete({});
    }
}
