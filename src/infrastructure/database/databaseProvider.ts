import { DataSource } from 'typeorm';
import * as process from 'process';

export const DatabaseProvider = {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
        const dataSource = new DataSource({
            type: 'postgres',
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.DATABASE_PORT as string),
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
            synchronize: true,
        });

        return dataSource.initialize();
    },
};
