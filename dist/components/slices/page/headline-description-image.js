"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prismic_reactjs_1 = require("prismic-reactjs");
var react_awesome_reveal_1 = require("react-awesome-reveal");
var link_1 = __importDefault(require("next/link"));
var image_1 = __importDefault(require("next/image"));
var core_1 = require("@material-ui/core");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var Effect = /** @class */ (function (_super) {
    __extends(Effect, _super);
    function Effect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Effect.prototype.render = function () {
        if (this.props.slice.primary["effect"].toUpperCase() == "NONE") {
            return (react_1.default.createElement(react_1.default.Fragment, null, this.props.children));
        }
        else if (this.props.slice.primary["effect"].toUpperCase() == "FADE") {
            var direction = void 0;
            if (this.props.isDescription) {
                if (this.props.slice.primary["media-position"].toUpperCase() == "LEFT") {
                    direction = "right";
                }
                else if (this.props.slice.primary["media-position"].toUpperCase() == "RIGHT") {
                    direction = "left";
                }
                else {
                    direction = "down";
                }
            }
            else if (this.props.isMedia) {
                if (this.props.slice.primary["media-position"].toUpperCase() == "LEFT") {
                    direction = "left";
                }
                else if (this.props.slice.primary["media-position"].toUpperCase() == "RIGHT") {
                    direction = "right";
                }
                else {
                    direction = "down";
                }
            }
            else {
                direction = "down";
            }
            return (react_1.default.createElement(react_awesome_reveal_1.Fade, { style: { width: "100%" }, damping: 0.2, cascade: true, triggerOnce: true, direction: direction }, this.props.children));
        }
    };
    Effect.defaultProps = {
        isDescription: false,
        isMedia: false,
    };
    return Effect;
}(react_1.default.Component));
var Links = function (_a) {
    var slice = _a.slice;
    var direction, align;
    if (slice.primary["media-position"].toUpperCase() == "LEFT") {
        direction = "left";
        align = "justify-content-center justify-content-lg-start";
    }
    else if (slice.primary["media-position"].toUpperCase() == "RIGHT") {
        direction = "left";
        align = "justify-content-center justify-content-lg-start";
    }
    else if (slice.primary["media-position"].toUpperCase() == "BOTTOM") {
        direction = "bottom";
        align = "justify-content-center";
    }
    return (react_1.default.createElement("div", { className: "slice__page__headline-description-media-background__links-container-outer d-flex flex-row " + align }, slice.items.map(function (link) {
        var _a, _b, _c, _d, _e, _f;
        var buttonType;
        if (((_a = link.type) === null || _a === void 0 ? void 0 : _a.toUpperCase()) == "TEXT") {
            buttonType = "text";
        }
        else if (((_b = link.type) === null || _b === void 0 ? void 0 : _b.toUpperCase()) == "OUTLINED") {
            buttonType = "outlined";
        }
        else if (((_c = link.type) === null || _c === void 0 ? void 0 : _c.toUpperCase()) == "CONTAINED") {
            buttonType = "contained";
        }
        var iconPack;
        if (((_d = link.icon_pack) === null || _d === void 0 ? void 0 : _d.toUpperCase()) == "SOLID")
            iconPack = "fas";
        else if (((_e = link.icon_pack) === null || _e === void 0 ? void 0 : _e.toUpperCase()) == "REGULAR")
            iconPack = "far";
        else if (((_f = link.icon_pack) === null || _f === void 0 ? void 0 : _f.toUpperCase()) == "BRANDT")
            iconPack = "fab";
        console.log(iconPack, link.icon_name);
        return react_1.default.createElement("div", { className: "slice__page__headline-description-media-background__links-container-inner d-flex flex-column " + direction, key: link.name },
            react_1.default.createElement(link_1.default, { href: link.internal_link ? link.internal_link : link.external_link ? link.external_link : "#" },
                react_1.default.createElement(core_1.Button, { className: "slice__page__headline-description-media-background__links-button", variant: buttonType !== null && buttonType !== void 0 ? buttonType : "text", color: "primary" },
                    iconPack && link.icon_name &&
                        react_1.default.createElement("div", { className: "slice__page__headline-description-media-background__links-icon d-flex justify-content-center align-self-center" },
                            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "", icon: [iconPack, link.icon_name] })),
                    react_1.default.createElement("div", { className: "slice__page__headline-description-media-background__links-name d-flex align-items-center align-self-center" }, link.name))));
    })));
};
var Media = function (_a) {
    var slice = _a.slice;
    if (!slice.primary.media.name)
        return null;
    if (slice.primary.media.name.endsWith(".jpg") || slice.primary.media.name.endsWith(".png")) {
        var width = slice.primary.media.width;
        var height = slice.primary.media.height;
        if (width > 2000) {
            height = (2000 / width) * height;
            width = 2000;
        }
        if (height > 2000) {
            width = (2000 / height) * width;
            height = 2000;
        }
        console.log("width: " + width + "; height: " + height);
        return react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "slice__page__headline-description-media-background__media" },
                react_1.default.createElement(image_1.default, { src: slice.primary.media.url, layout: "responsive", width: width, height: height, objectFit: "cover" })));
    }
    else if (slice.primary.media.name.endsWith(".webm") || slice.primary.media.name.endsWith(".mp4")) {
        return react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "slice__page__headline-description-media-background__media" },
                react_1.default.createElement("video", { src: slice.primary.media.url, autoPlay: true, loop: true })));
    }
    else
        return null;
};
var Description = function (_a) {
    var slice = _a.slice;
    return (react_1.default.createElement("div", { className: "slice__page__headline-description-media-background__description " + (slice.primary["media-position"].toUpperCase() == "BOTTOM" ? "text-center" : "text-center text-lg-start"), style: { color: slice.primary["description-color"] == "#000000" ? "white" : slice.primary["title-color"], "textAlign": slice.primary["media-position"].toUpperCase() == "BOTTOM" ? "center" : "left" } }, prismic_reactjs_1.RichText.render(slice.primary.description)));
};
var Title = function (_a) {
    var slice = _a.slice;
    return (react_1.default.createElement("div", { className: "slice__page__headline-description-media-background__title " + (slice.primary["media-position"].toUpperCase() == "BOTTOM" ? "text-center" : "text-center text-lg-start"), style: { color: slice.primary["title-color"] == "#000000" ? "white" : slice.primary["title-color"] } }, prismic_reactjs_1.RichText.render(slice.primary.title)));
};
var HeadlineDescriptionImage = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var slice = _a.slice;
    if (slice.primary["media-position"].toUpperCase() == "BOTTOM") {
        return (react_1.default.createElement("section", { className: "slice__page__headline-description-media-background " + ((_b = slice.primary.css_classes) !== null && _b !== void 0 ? _b : ""), style: { backgroundImage: "url(" + ((_d = (_c = slice.primary.background) === null || _c === void 0 ? void 0 : _c.url) !== null && _d !== void 0 ? _d : '') + ")", backgroundColor: (_e = slice.primary.background_color) !== null && _e !== void 0 ? _e : 'transparent' } },
            react_1.default.createElement("div", { className: "container" },
                react_1.default.createElement("div", { className: "col-12 mb-5 ps-2 pe-2" },
                    react_1.default.createElement(Effect, { slice: slice, isDescription: true },
                        react_1.default.createElement(react_1.default.Fragment, null, slice.primary.title &&
                            react_1.default.createElement(Title, { slice: slice })),
                        react_1.default.createElement(react_1.default.Fragment, null, slice.primary.description &&
                            react_1.default.createElement(Description, { slice: slice })),
                        react_1.default.createElement(react_1.default.Fragment, null, slice.items && slice.items.length > 0 &&
                            react_1.default.createElement(Links, { slice: slice })))),
                react_1.default.createElement(Effect, { slice: slice, isMedia: true },
                    react_1.default.createElement(react_1.default.Fragment, null, slice.primary.media &&
                        react_1.default.createElement("div", null,
                            react_1.default.createElement(Media, { slice: slice })))))));
    }
    else if (slice.primary["media-position"].toUpperCase() == "LEFT") {
        return (react_1.default.createElement("section", { className: "slice__page__headline-description-media-background " + ((_f = slice.primary.css_classes) !== null && _f !== void 0 ? _f : ""), style: { backgroundImage: "url(" + ((_h = (_g = slice.primary.background) === null || _g === void 0 ? void 0 : _g.url) !== null && _h !== void 0 ? _h : '') + ")", backgroundColor: (_j = slice.primary.background_color) !== null && _j !== void 0 ? _j : 'transparent' } },
            react_1.default.createElement("div", { className: "container row" },
                react_1.default.createElement("div", { className: "col-12 col-lg-6 ps-2 pe-2 d-none d-lg-flex" }, slice.primary.media &&
                    react_1.default.createElement(Effect, { slice: slice, isMedia: true },
                        react_1.default.createElement("div", { style: { width: "100%" } },
                            react_1.default.createElement(Media, { slice: slice })))),
                react_1.default.createElement("div", { className: "col-12 col-lg-6 ps-4 pe-4 align-self-center" },
                    react_1.default.createElement(Effect, { slice: slice, isDescription: true },
                        react_1.default.createElement(react_1.default.Fragment, null, slice.primary.title &&
                            react_1.default.createElement(Title, { slice: slice })),
                        react_1.default.createElement(react_1.default.Fragment, null, slice.primary.description &&
                            react_1.default.createElement(Description, { slice: slice })),
                        react_1.default.createElement(react_1.default.Fragment, null, slice.items && slice.items.length > 0 &&
                            react_1.default.createElement(Links, { slice: slice })))),
                react_1.default.createElement("div", { className: "col-12 col-lg-6 ps-2 pe-2 mt-5 mt-lg-0 d-flex d-lg-none" }, slice.primary.media &&
                    react_1.default.createElement(Effect, { slice: slice, isMedia: true },
                        react_1.default.createElement(Media, { slice: slice }))))));
    }
    else if (slice.primary["media-position"].toUpperCase() == "RIGHT") {
        return (react_1.default.createElement("section", { className: "slice__page__headline-description-media-background " + ((_k = slice.primary.css_classes) !== null && _k !== void 0 ? _k : ""), style: { backgroundImage: "url(" + ((_m = (_l = slice.primary.background) === null || _l === void 0 ? void 0 : _l.url) !== null && _m !== void 0 ? _m : '') + ")", backgroundColor: (_o = slice.primary.background_color) !== null && _o !== void 0 ? _o : 'transparent' } },
            react_1.default.createElement("div", { className: "container row" },
                react_1.default.createElement("div", { className: "col-12 col-lg-6 ps-4 pe-4 align-self-center" },
                    react_1.default.createElement(Effect, { slice: slice, isDescription: true },
                        react_1.default.createElement(react_1.default.Fragment, null, slice.primary.title &&
                            react_1.default.createElement(Title, { slice: slice })),
                        react_1.default.createElement(react_1.default.Fragment, null, slice.primary.description &&
                            react_1.default.createElement(Description, { slice: slice })),
                        react_1.default.createElement(react_1.default.Fragment, null, slice.items && slice.items.length > 0 &&
                            react_1.default.createElement(Links, { slice: slice })))),
                react_1.default.createElement("div", { className: "col-12 col-lg-6 ps-2 pe-2 mt-5 mt-lg-0" }, slice.primary.media &&
                    react_1.default.createElement(Effect, { slice: slice, isMedia: true },
                        react_1.default.createElement(Media, { slice: slice }))))));
    }
};
exports.default = HeadlineDescriptionImage;
