"use strict";
var events_dao_1 = require("../dao/events-dao");
var eventsController = (function () {
    function eventsController() {
    }
    eventsController.getAll = function (req, res) {
        events_dao_1.default["getAll"]()
            .then(function (events) { return res.status(200).json(events); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    eventsController.createNew = function (req, res) {
        var _events = req.body;
        events_dao_1.default["createNew"](_events)
            .then(function (events) { return res.status(201).json(events); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    eventsController.removeById = function (req, res) {
        var _id = req.params.id;
        events_dao_1.default["removeById"](_id)
            .then(function () { return res.status(200).end(); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return eventsController;
}());
exports.eventsController = eventsController;
//# sourceMappingURL=events-controller.js.map