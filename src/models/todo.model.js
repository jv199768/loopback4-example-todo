"use strict";
// Copyright IBM Corp. and LoopBack contributors 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
var repository_1 = require("@loopback/repository");
var Todo = function () {
    var _classDecorators = [(0, repository_1.model)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = repository_1.Entity;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _desc_decorators;
    var _desc_initializers = [];
    var _desc_extraInitializers = [];
    var _isComplete_decorators;
    var _isComplete_initializers = [];
    var _isComplete_extraInitializers = [];
    var _remindAtAddress_decorators;
    var _remindAtAddress_initializers = [];
    var _remindAtAddress_extraInitializers = [];
    var _remindAtGeo_decorators;
    var _remindAtGeo_initializers = [];
    var _remindAtGeo_extraInitializers = [];
    var _tag_decorators;
    var _tag_initializers = [];
    var _tag_extraInitializers = [];
    var Todo = _classThis = /** @class */ (function (_super) {
        __extends(Todo_1, _super);
        function Todo_1(data) {
            var _this = _super.call(this, data) || this;
            _this.id = __runInitializers(_this, _id_initializers, void 0);
            _this.title = (__runInitializers(_this, _id_extraInitializers), __runInitializers(_this, _title_initializers, void 0));
            _this.desc = (__runInitializers(_this, _title_extraInitializers), __runInitializers(_this, _desc_initializers, void 0));
            _this.isComplete = (__runInitializers(_this, _desc_extraInitializers), __runInitializers(_this, _isComplete_initializers, void 0));
            _this.remindAtAddress = (__runInitializers(_this, _isComplete_extraInitializers), __runInitializers(_this, _remindAtAddress_initializers, void 0)); // address,city,zipcode
            // TODO(bajtos) Use LoopBack's GeoPoint type here
            _this.remindAtGeo = (__runInitializers(_this, _remindAtAddress_extraInitializers), __runInitializers(_this, _remindAtGeo_initializers, void 0)); // latitude,longitude
            _this.tag = (__runInitializers(_this, _remindAtGeo_extraInitializers), __runInitializers(_this, _tag_initializers, void 0));
            __runInitializers(_this, _tag_extraInitializers);
            return _this;
        }
        return Todo_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Todo");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [(0, repository_1.property)({
                type: 'number',
                id: true,
                generated: false,
            })];
        _title_decorators = [(0, repository_1.property)({
                type: 'string',
                required: true,
            })];
        _desc_decorators = [(0, repository_1.property)({
                type: 'string',
            })];
        _isComplete_decorators = [(0, repository_1.property)({
                type: 'boolean',
            })];
        _remindAtAddress_decorators = [(0, repository_1.property)({
                type: 'string',
            })];
        _remindAtGeo_decorators = [(0, repository_1.property)({
                type: 'string',
            })];
        _tag_decorators = [(0, repository_1.property)({
                type: 'any',
            })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _desc_decorators, { kind: "field", name: "desc", static: false, private: false, access: { has: function (obj) { return "desc" in obj; }, get: function (obj) { return obj.desc; }, set: function (obj, value) { obj.desc = value; } }, metadata: _metadata }, _desc_initializers, _desc_extraInitializers);
        __esDecorate(null, null, _isComplete_decorators, { kind: "field", name: "isComplete", static: false, private: false, access: { has: function (obj) { return "isComplete" in obj; }, get: function (obj) { return obj.isComplete; }, set: function (obj, value) { obj.isComplete = value; } }, metadata: _metadata }, _isComplete_initializers, _isComplete_extraInitializers);
        __esDecorate(null, null, _remindAtAddress_decorators, { kind: "field", name: "remindAtAddress", static: false, private: false, access: { has: function (obj) { return "remindAtAddress" in obj; }, get: function (obj) { return obj.remindAtAddress; }, set: function (obj, value) { obj.remindAtAddress = value; } }, metadata: _metadata }, _remindAtAddress_initializers, _remindAtAddress_extraInitializers);
        __esDecorate(null, null, _remindAtGeo_decorators, { kind: "field", name: "remindAtGeo", static: false, private: false, access: { has: function (obj) { return "remindAtGeo" in obj; }, get: function (obj) { return obj.remindAtGeo; }, set: function (obj, value) { obj.remindAtGeo = value; } }, metadata: _metadata }, _remindAtGeo_initializers, _remindAtGeo_extraInitializers);
        __esDecorate(null, null, _tag_decorators, { kind: "field", name: "tag", static: false, private: false, access: { has: function (obj) { return "tag" in obj; }, get: function (obj) { return obj.tag; }, set: function (obj, value) { obj.tag = value; } }, metadata: _metadata }, _tag_initializers, _tag_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Todo = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Todo = _classThis;
}();
exports.Todo = Todo;
