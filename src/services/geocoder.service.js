"use strict";
// Copyright IBM Corp. and LoopBack contributors 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeocoderProvider = void 0;
var service_proxy_1 = require("@loopback/service-proxy");
var datasources_1 = require("../datasources");
var GeocoderProvider = /** @class */ (function () {
    function GeocoderProvider(dataSource) {
        if (dataSource === void 0) { dataSource = new datasources_1.GeocoderDataSource(); }
        this.dataSource = dataSource;
    }
    GeocoderProvider.prototype.value = function () {
        return (0, service_proxy_1.getService)(this.dataSource);
    };
    return GeocoderProvider;
}());
exports.GeocoderProvider = GeocoderProvider;
