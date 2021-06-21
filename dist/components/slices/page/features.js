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
            return (react_1.default.createElement(react_awesome_reveal_1.Fade, { cascade: true, triggerOnce: true, direction: this.props.isDescription ? "left" : this.props.isMedia ? "right" : "down" }, this.props.children));
        }
    };
    Effect.defaultProps = {
        isDescription: false,
        isMedia: false,
    };
    return Effect;
}(react_1.default.Component));
var Simple = function (_a) {
    var slice = _a.slice;
    console.log(slice);
    if (slice) {
        return react_1.default.createElement("div", { className: "slice__page__features__simple-container row" }, slice.map(function (feature) {
            var iconPack;
            if (feature.icon_pack.toUpperCase() == "SOLID")
                iconPack = "fas";
            else if (feature.icon_pack.toUpperCase() == "REGULAR")
                iconPack = "far";
            else if (feature.icon_pack.toUpperCase() == "BRANDT")
                iconPack = "fab";
            return react_1.default.createElement("div", { className: "slice__page__features__simple-element-outer col-6 col-lg-4 col-xl-3 d-flex flex-column", key: feature.name },
                react_1.default.createElement("div", { className: "slice__page__features__simple-element-inner d-flex flex-column" },
                    react_1.default.createElement("div", { className: "slice__page__features__simple-icon d-flex justify-content-center align-self-center" },
                        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "", icon: [iconPack, feature.icon_name] })),
                    react_1.default.createElement("div", { className: "slice__page__features__simple-name d-flex align-items-center align-self-center" }, feature.name)));
        }));
    }
};
var Features = function (_a) {
    var _b;
    var slice = _a.slice;
    return (react_1.default.createElement("section", { className: "slice__page__features", style: { backgroundImage: "url(" + ((_b = slice.primary.background) === null || _b === void 0 ? void 0 : _b.url) + ")" } },
        react_1.default.createElement("div", { className: "container" },
            slice.primary.title && slice.primary.title.length > 0 &&
                react_1.default.createElement("div", { className: "slice__page__features__title text-center" }, prismic_reactjs_1.RichText.render(slice.primary.title)),
            slice.primary.type.toUpperCase() == "SIMPLE" &&
                react_1.default.createElement(Simple, { slice: slice.items }))));
};
exports.default = Features;
