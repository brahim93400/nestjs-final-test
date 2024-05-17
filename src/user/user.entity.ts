import { Column, Entity, OneToMany } from 'typeorm';
import { EntityStructure } from '../utils/entity.structure';
import { Task } from '../task/task.entity';

@Entity()
export class User extends EntityStructure {
    @Column({
        unique: true,
    })
    email?: string;

    // relation ship with each user has many tasks
    @OneToMany(() => Task, (task) => task.user)
    tasks: Task[];
}
