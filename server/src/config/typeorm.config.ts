import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: `postgres`,
  host: `localhost`,
  port: 5432,
  username: `postgres`,
  password: `postgres`,
  database: `vidShare`,
  entities: [__dirname + `/../**/*.ts`, __dirname + `/../**/*.js`],
  synchronize: true,
};
