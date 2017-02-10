"use strict";
var events_controller_1 = require("../controller/events-controller");
var eventsRoutes = (function () {
    function eventsRoutes() {
    }
    eventsRoutes.init = function (router) {
        router
            .route("/api/events")
            .get(events_controller_1.eventsController.getAll)
            .post(events_controller_1.eventsController.createNew);
        router
            .route("/api/events/:id")
            .delete(events_controller_1.eventsController.removeById);
    };
    return eventsRoutes;
}());
exports.eventsRoutes = eventsRoutes;
//# sourceMappingURL=events-route.js.map