"use strict";
var mongoose = require("mongoose");
var Promise = require("bluebird");
var events_model_1 = require("../model/events-model");
var _ = require("lodash");
events_model_1.default.static("getAll", function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        events
            .find(_query)
            .exec(function (err, todos) {
            err ? reject(err)
                : resolve(todos);
        });
    });
});
events_model_1.default.static("createNew", function (events) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(events)) {
            return reject(new TypeError("Todo is not a valid object."));
        }
        var _something = new events(events);
        _something.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
events_model_1.default.static("removeById", function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError("Id is not a valid string."));
        }
        events
            .findByIdAndRemove(id)
            .exec(function (err, deleted) {
            err ? reject(err)
                : resolve();
        });
    });
});
var events = mongoose.model("events", events_model_1.default, 'adverse_events');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = events;
//# sourceMappingURL=events-dao.js.map