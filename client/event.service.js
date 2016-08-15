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
var _this = this;
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
require('rxjs/add/operator/map');
var EventService = (function () {
    function EventService(http) {
        this.http = http;
        this.eventsUrl = 'api/events'; // URL to web api
        this.events = http.get(this.eventsUrl)
            .map(function (response) { return response.json(); });
    }
    EventService.prototype.getEvents = function () {
        return this.http.get(this.eventsUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    EventService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    EventService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    EventService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EventService);
    return EventService;
}());
exports.EventService = EventService;
constructor(eventService, EventService);
{
    eventService.events.subscribe(function (events) { return _this.events = events; }, function (error) { return console.error('error ' + error); }, function () { return console.log('completed'); });
}
//# sourceMappingURL=event.service.js.map