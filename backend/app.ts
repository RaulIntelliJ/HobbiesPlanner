import * as bodyParser from 'body-parser';
import { Server } from '@overnightjs/core';
import { UserController } from './controllers/UserController';
import { PlanController } from './controllers/PlanController';
import { UserPlanController } from './controllers/UserPlanController';
import Cors from './config/Cors'

export class HobbiesPlannerServer extends Server {
    constructor() {
      super(process.env.NODE_ENV === 'development'); // setting showLogs to true
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({extended: true}));
      this.app.use(Cors)
      super.addControllers([new UserController(), new PlanController(), new UserPlanController()]);
    }

  public start() {
      this.app.listen(3000, () => {
          console.log('Server listening on port: ' + '3000');
      })
    }
}
