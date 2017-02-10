"use strict";

import * as express from "express";
import eventsDAO from "../dao/events-dao";

export class eventsController {
  static getAll(req:express.Request, res:express.Response) {
    eventsDAO
      ["getAll"]()
      .then(events => res.status(200).json(events))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req:express.Request, res:express.Response) {
    let _events = req.body;

    eventsDAO
      ["createNew"](_events)
      .then(events => res.status(201).json(events))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req:express.Request, res:express.Response) {
    let _id = req.params.id;

    eventsDAO
      ["removeById"](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
