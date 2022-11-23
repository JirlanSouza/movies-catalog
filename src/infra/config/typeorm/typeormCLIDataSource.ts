import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  entities: [__dirname + './../../models/*.{.ts,.js}'],
  synchronize: false,
  schema: process.env.DATABASE_SCHEMA,
  migrationsRun: true,
  migrations: ['database/migrations/**/*{.ts,.js}'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    console.log(AppDataSource.options);
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default AppDataSource;
