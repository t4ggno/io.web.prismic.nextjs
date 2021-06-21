"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var headline_description_image_1 = __importDefault(require("./slices/page/headline-description-image"));
var features_1 = __importDefault(require("./slices/page/features"));
var seperator_1 = __importDefault(require("./slices/page/seperator"));
var SliceZone = function (_a) {
    var sliceZone = _a.sliceZone;
    return (react_1.default.createElement("div", { className: "row" }, sliceZone.map(function (slice, index) {
        switch (slice.slice_type) {
            case 'headline___description___image':
                return react_1.default.createElement(headline_description_image_1.default, { slice: slice, key: "slice-" + index });
            case 'features':
                return react_1.default.createElement(features_1.default, { slice: slice, key: "slice-" + index });
            case 'separator':
                return react_1.default.createElement(seperator_1.default, { slice: slice, key: "slice-" + index });
            default:
                console.log("Slice-Type not found: " + slice.slice_type);
                return null;
        }
    })));
};
exports.default = SliceZone;
