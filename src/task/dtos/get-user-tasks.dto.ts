import { IsUUID } from 'class-validator';

export class GetUserTasksDto {
    @IsUUID()
    userId: string;
}
