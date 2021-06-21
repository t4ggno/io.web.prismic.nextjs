"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var head_1 = __importDefault(require("next/head"));
var header_1 = __importDefault(require("./repeatable/header"));
var footer_1 = __importDefault(require("./repeatable/footer"));
var Page = function (_a) {
    var prismicHelper = _a.prismicHelper, title = _a.title, children = _a.children, header = _a.header, footer = _a.footer, _b = _a.headerElementsStart, headerElementsStart = _b === void 0 ? [] : _b, _c = _a.headerElementsEnd, headerElementsEnd = _c === void 0 ? [] : _c;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(head_1.default, null,
            react_1.default.createElement("meta", { charSet: "utf-8" }),
            react_1.default.createElement("link", { rel: "icon", href: "/favicon.png", type: "image/png" }),
            react_1.default.createElement("title", null, title)),
        react_1.default.createElement(header_1.default, { prismicHelper: prismicHelper, headerData: header === null || header === void 0 ? void 0 : header.data, elementsEnd: headerElementsEnd }),
        react_1.default.createElement("main", null, children),
        react_1.default.createElement(footer_1.default, { footer: footer })));
};
exports.default = Page;
