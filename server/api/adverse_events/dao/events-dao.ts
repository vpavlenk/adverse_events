"use strict";

import * as mongoose from "mongoose";
import * as Promise from "bluebird";
import eventsSchema from "../model/events-model";
import * as _ from "lodash";

eventsSchema.static("getAll", () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    events
    .find(_query)
    .exec((err, todos) => {
      err ? reject(err)
      : resolve(todos);
    });
  });
});

eventsSchema.static("createNew", (events) => {
  return new Promise((resolve, reject) => {
      if (!_.isObject(events)) {
        return reject(new TypeError("Todo is not a valid object."));
      }

      let _something = new events(events);

      _something.save((err, saved) => {
        err ? reject(err)
        : resolve(saved);
      });
  });
});

eventsSchema.static("removeById", (id) => {
  return new Promise((resolve, reject) => {
      if (!_.isString(id)) {
        return reject(new TypeError("Id is not a valid string."));
      }

      events
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
        : resolve();
      });
    });
});

let events = mongoose.model("events", eventsSchema,'adverse_events');

export default events;
