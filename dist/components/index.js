"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = exports.SliceZone = exports.LanguageSwitcher = void 0;
var language_switcher_1 = require("./language-switcher");
Object.defineProperty(exports, "LanguageSwitcher", { enumerable: true, get: function () { return __importDefault(language_switcher_1).default; } });
var slice_zone_1 = require("./slice-zone");
Object.defineProperty(exports, "SliceZone", { enumerable: true, get: function () { return __importDefault(slice_zone_1).default; } });
var page_1 = require("./page");
Object.defineProperty(exports, "Page", { enumerable: true, get: function () { return __importDefault(page_1).default; } });
__exportStar(require("./repeatable"), exports);
__exportStar(require("./slices/page"), exports);
