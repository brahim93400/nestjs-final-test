import { Column, Entity, ManyToOne } from 'typeorm';
import { EntityStructure } from '../utils/entity.structure';
import { User } from '../user/user.entity';

@Entity()
export class Task extends EntityStructure {
    @Column()
    name: string;
    @Column()
    userId: string;
    @Column()
    priority: number;
    @ManyToOne(() => User, (user) => user.tasks)
    user: User;
}
