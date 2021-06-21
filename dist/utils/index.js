"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismicQueries = exports.PrismicHelper = void 0;
var prismic_helpers_1 = require("./prismic-helpers");
Object.defineProperty(exports, "PrismicHelper", { enumerable: true, get: function () { return __importDefault(prismic_helpers_1).default; } });
var queries_1 = require("./queries");
Object.defineProperty(exports, "PrismicQueries", { enumerable: true, get: function () { return __importDefault(queries_1).default; } });
