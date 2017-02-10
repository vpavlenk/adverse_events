"use strict";

import * as express from "express";
import {eventsController} from "../controller/events-controller";

export class eventsRoutes {
  static init(router:express.Router) {
    router
      .route("/api/events")
      .get(eventsController.getAll)
      .post(eventsController.createNew);

    router
      .route("/api/events/:id")
      .delete(eventsController.removeById);
  }
}
