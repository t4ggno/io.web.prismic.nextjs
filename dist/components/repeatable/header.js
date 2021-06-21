"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var link_1 = __importDefault(require("next/link"));
var language_switcher_1 = __importDefault(require("../language-switcher"));
var CategoryType;
(function (CategoryType) {
    CategoryType[CategoryType["url"] = 0] = "url";
    CategoryType[CategoryType["external_url"] = 1] = "external_url";
    CategoryType[CategoryType["none"] = 2] = "none";
})(CategoryType || (CategoryType = {}));
var SubMenu = function (_a) {
    var prismicHelper = _a.prismicHelper, _b = _a.categories, categories = _b === void 0 ? [] : _b;
    if (categories) {
        return react_1.default.createElement(react_1.default.Fragment, null, categories.map(function (category) {
            var type = CategoryType.none;
            if (category.data.url && category.data.url.id)
                type = CategoryType.url;
            else if (category.data.url_external && category.data.url_external.url)
                type = CategoryType.external_url;
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "col-12 col-lg-4", id: category.data.name, key: category.data.name },
                    react_1.default.createElement("div", { className: "megamenu-title" },
                        type == CategoryType.url &&
                            react_1.default.createElement(link_1.default, { href: prismicHelper.getHrefResolver()(category.data.url), passHref: true }, category.data.name),
                        type == CategoryType.external_url &&
                            react_1.default.createElement(link_1.default, { href: category.data.external_url, passHref: true }, category.data.name),
                        type == CategoryType.none &&
                            react_1.default.createElement("span", null, category.data.name)),
                    react_1.default.createElement("ul", { style: { listStyle: "none", padding: 0, margin: 0 } }, category.sub_categories.map(function (category) {
                        return (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement("li", { className: "megamenu-link" },
                                type == CategoryType.url &&
                                    react_1.default.createElement(link_1.default, { href: prismicHelper.getHrefResolver()(category.url), passHref: true, key: category.name },
                                        react_1.default.createElement("a", null, category.name)),
                                type == CategoryType.external_url &&
                                    react_1.default.createElement(link_1.default, { href: category.external_url, passHref: true, key: category.name },
                                        react_1.default.createElement("a", null, category.name)),
                                type == CategoryType.none &&
                                    react_1.default.createElement(link_1.default, { href: "#", key: category.name },
                                        react_1.default.createElement("a", null, category.name)))));
                    })))));
        }));
    }
};
var MenuLinks = function (_a) {
    var prismicHelper = _a.prismicHelper, _b = _a.categories, categories = _b === void 0 ? [] : _b, _c = _a.subcategories, subcategories = _c === void 0 ? [] : _c;
    if (categories) {
        return react_1.default.createElement(react_1.default.Fragment, null, categories.map(function (category) {
            var type = CategoryType.none;
            if (category.url && category.url.id)
                type = CategoryType.url;
            else if (category.url_external && category.url_external.url)
                type = CategoryType.external_url;
            var filteredSubcategories = subcategories.filter(function (element) { return element.data.foreign_id == category.key; });
            if (filteredSubcategories.length > 0) {
                return (react_1.default.createElement(react_bootstrap_1.NavDropdown, { title: category.name, id: category.name, className: "megamenu", key: category.name },
                    react_1.default.createElement("div", { className: "row" },
                        react_1.default.createElement(SubMenu, { prismicHelper: prismicHelper, categories: filteredSubcategories }))));
            }
            else {
                if (type == CategoryType.url) {
                    return react_1.default.createElement(link_1.default, { href: prismicHelper.getHrefResolver()(category.url), passHref: true, key: category.name },
                        react_1.default.createElement("a", null, category.name));
                }
                else if (type == CategoryType.external_url) {
                    return react_1.default.createElement(link_1.default, { href: category.external_url, passHref: true, key: category.name },
                        react_1.default.createElement("a", null, category.name));
                }
                else if (type == CategoryType.none) {
                    return react_1.default.createElement(link_1.default, { href: "#", key: "category.name" },
                        react_1.default.createElement("a", null, category.name));
                }
            }
        }));
    }
};
var Header = function (_a) {
    var prismicHelper = _a.prismicHelper, headerData = _a.headerData, _b = _a.elementsEnd, elementsEnd = _b === void 0 ? [] : _b;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_bootstrap_1.Navbar, { bg: "light", expand: "lg" },
            react_1.default.createElement(react_bootstrap_1.Navbar.Brand, null,
                react_1.default.createElement(link_1.default, { href: '/', passHref: true },
                    react_1.default.createElement("picture", null,
                        react_1.default.createElement("source", { srcSet: headerData.logo.url, media: "(min-width: 600px)" }),
                        react_1.default.createElement("img", { src: headerData.logo.small.url, height: 50, alt: headerData.logo.alt })))),
            react_1.default.createElement(react_bootstrap_1.Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }),
            react_1.default.createElement(react_bootstrap_1.Navbar.Collapse, null,
                react_1.default.createElement(react_bootstrap_1.Nav, { className: "ms-auto me-auto" },
                    react_1.default.createElement(MenuLinks, { prismicHelper: prismicHelper, categories: headerData.categories, subcategories: headerData.body.filter(function (element) { return element.slice_type == "category"; }).map(function (elememt) { return { data: elememt.primary, sub_categories: elememt.items }; }) }))),
            react_1.default.createElement(react_bootstrap_1.Navbar.Collapse, { className: "justify-content-end flex-sm-grow-0" },
                react_1.default.createElement(react_bootstrap_1.Nav, null,
                    react_1.default.createElement(language_switcher_1.default, null))),
            elementsEnd !== null && elementsEnd.length > 0 &&
                react_1.default.createElement(react_bootstrap_1.Navbar.Collapse, { className: "justify-content-end flex-sm-grow-0" },
                    react_1.default.createElement(react_bootstrap_1.Nav, null, elementsEnd.map(function (element) { return element; }))))));
};
exports.default = Header;
