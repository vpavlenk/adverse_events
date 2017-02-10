import * as express from "express";
import {eventsRoutes} from "../api/adverse_events/routes/events-route";
import {StaticDispatcher} from "../commons/static/index";


export class Routes {
   static init(app: express.Application, router: express.Router) {
     eventsRoutes.init(router);

     router
       .route("*")
       .get(StaticDispatcher.sendIndex);

     app.use("/", router);
   }
}
