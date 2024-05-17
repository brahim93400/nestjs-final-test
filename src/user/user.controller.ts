import { Body, ConflictException, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller({
    path: 'user',
})
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/')
    async getUser(@Body() userDto: UserDto): Promise<unknown> {
        const user = await this.userService.getUser(userDto.email);
        if (user) throw new ConflictException('User already exists');
        return await this.userService.addUser(userDto.email);
    }
}
