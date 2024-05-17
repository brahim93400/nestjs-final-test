import { IsNumberString, IsString, IsUUID } from 'class-validator';

export class AddTaskDto {
    @IsString()
    name: string;

    @IsUUID()
    userId: string;

    @IsNumberString()
    priority: number;
}
