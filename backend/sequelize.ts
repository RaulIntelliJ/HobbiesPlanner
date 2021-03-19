import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  database: 'hobbiesplanner',
  dialect: 'mysql',
  username: 'root',
  password: '',
  host: '127.0.0.1',
  storage: ':memory:',
  models: [__dirname + '/models'],
});
