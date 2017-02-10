"use strict";
var events_route_1 = require("../api/adverse_events/routes/events-route");
var index_1 = require("../commons/static/index");
var Routes = (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        events_route_1.eventsRoutes.init(router);
        router
            .route("*")
            .get(index_1.StaticDispatcher.sendIndex);
        app.use("/", router);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=index.js.map