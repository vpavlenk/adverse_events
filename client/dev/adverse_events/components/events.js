"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var events_1 = require("../services/events");
var Events = (function () {
    function Events(_eventsService) {
        this._eventsService = _eventsService;
        this.title = "Adverse events list";
        this.events = [];
        this.page = [];
        this.pageIndex = 0;
        this.pageSize = 10;
    }
    Events.prototype.ngOnInit = function () {
        this._getAll();
        console.log();
    };
    Events.prototype.next = function () {
        this.pageIndex += this.pageSize;
        if (this.pageIndex > this.events.length) {
            this.pageIndex -= this.pageSize;
        }
        this.page = this.events.slice(this.pageIndex, this.pageIndex + this.pageSize);
    };
    Events.prototype.prev = function () {
        this.pageIndex -= this.pageSize;
        if (this.pageIndex < 0) {
            this.pageIndex = 0;
        }
        this.page = this.events.slice(this.pageIndex, this.pageIndex + this.pageSize);
    };
    Events.prototype._getAll = function () {
        var _this = this;
        this._eventsService
            .getAll()
            .subscribe(function (events) {
            _this.page = events.slice(_this.pageIndex, _this.pageIndex + _this.pageSize);
            _this.events = events;
        });
    };
    Events.prototype.remove = function (id) {
        var _this = this;
        this._eventsService
            .remove(id)
            .subscribe(function () {
            _this.events.forEach(function (t, i) {
                if (t._id === id)
                    return _this.events.splice(i, 1);
            });
            _this.page = _this.events.slice(_this.pageIndex, _this.pageIndex + _this.pageSize);
        });
    };
    Events = __decorate([
        core_1.Component({
            selector: "events",
            templateUrl: "adverse_events/templates/events.html",
            styleUrls: ["adverse_events/styles/events.css"]
        }), 
        __metadata('design:paramtypes', [events_1.EventsService])
    ], Events);
    return Events;
}());
exports.Events = Events;
//# sourceMappingURL=events.js.map