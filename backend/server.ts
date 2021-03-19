import {HobbiesPlannerServer} from "./app";
import {sequelize} from './sequelize';

(async () => {
  await sequelize.sync({force:false})
  let server = new HobbiesPlannerServer();
  server.start();
})();