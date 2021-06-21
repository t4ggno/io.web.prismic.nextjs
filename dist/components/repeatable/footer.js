"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prismic_reactjs_1 = require("prismic-reactjs");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var AdditionalLinks = function (_a) {
    var additionalLinks = _a.additionalLinks;
    return (react_1.default.createElement("div", { className: "col-12 col-sm-6 col-md-4 text-center text-sm-start slice footer-additional-links" },
        react_1.default.createElement("div", { className: "mb-3" }, prismic_reactjs_1.RichText.render(additionalLinks.primary.title || [])),
        react_1.default.createElement("ul", { className: "list-unstyled" }, additionalLinks.items.map(function (additionalLink, index) { return (react_1.default.createElement("li", { className: index > 0 ? "mt-1" : "", key: additionalLink.name },
            react_1.default.createElement("a", { className: "mb-3", href: additionalLink.url }, additionalLink.name))); }))));
};
var SocialMedia = function (_a) {
    var socialMedia = _a.socialMedia;
    return (react_1.default.createElement("div", { className: "col-12 col-sm-6 col-md-4 text-center text-sm-start slice footer-social-media" },
        react_1.default.createElement("div", { className: "mb-3" }, prismic_reactjs_1.RichText.render(socialMedia.primary.title || [])),
        react_1.default.createElement("span", { className: "footer-social-media-icon-container d-flex justify-content-center justify-content-sm-start" },
            socialMedia.primary.linked_in && socialMedia.primary.linked_in.link_type != 'Any' ?
                react_1.default.createElement("a", { href: socialMedia.primary.linked_in.url, className: "footer-social-media-icon" },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faLinkedin, fixedWidth: true }))
                : react_1.default.createElement(react_1.default.Fragment, null),
            socialMedia.primary.facebook && socialMedia.primary.facebook.link_type != 'Any' ?
                react_1.default.createElement("a", { href: socialMedia.primary.facebook.url, className: "footer-social-media-icon" },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faFacebook, fixedWidth: true }))
                : react_1.default.createElement(react_1.default.Fragment, null),
            socialMedia.primary.instagram && socialMedia.primary.instagram.link_type != 'Any' ?
                react_1.default.createElement("a", { href: socialMedia.primary.instagram.url, className: "footer-social-media-icon" },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faInstagram, fixedWidth: true }))
                : react_1.default.createElement(react_1.default.Fragment, null),
            socialMedia.primary.snapchat && socialMedia.primary.snapchat.link_type != 'Any' ?
                react_1.default.createElement("a", { href: socialMedia.primary.snapchat.url, className: "footer-social-media-icon" },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faSnapchat, fixedWidth: true }))
                : react_1.default.createElement(react_1.default.Fragment, null),
            socialMedia.primary.xing && socialMedia.primary.xing.link_type != 'Any' ?
                react_1.default.createElement("a", { href: socialMedia.primary.xing.url, className: "footer-social-media-icon" },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faXing, fixedWidth: true }))
                : react_1.default.createElement(react_1.default.Fragment, null),
            socialMedia.primary.discord && socialMedia.primary.discord.link_type != 'Any' ?
                react_1.default.createElement("a", { href: socialMedia.primary.discord.url, className: "footer-social-media-icon" },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faDiscord, fixedWidth: true }))
                : react_1.default.createElement(react_1.default.Fragment, null))));
};
var OpeningHours = function (_a) {
    var openingHours = _a.openingHours;
    return (react_1.default.createElement("div", { className: "col-12 col-sm-6 col-md-4 text-center text-sm-start slice footer-opening-hours" },
        react_1.default.createElement("div", { className: "mb-3" }, prismic_reactjs_1.RichText.render(openingHours.primary.title || [])),
        react_1.default.createElement("span", { className: "text-secondary small" }, prismic_reactjs_1.RichText.render(openingHours.primary.times || []))));
};
var Slices = function (_a) {
    var slices = _a.slices;
    return (react_1.default.createElement(react_1.default.Fragment, null, slices.map(function (slice, index) {
        switch (slice.slice_type) {
            case 'opening_hours':
                return react_1.default.createElement(OpeningHours, { openingHours: slice, key: "slice-" + index });
            case 'social_media':
                return react_1.default.createElement(SocialMedia, { socialMedia: slice, key: "slice-" + index });
            case 'additional_links':
                return react_1.default.createElement(AdditionalLinks, { additionalLinks: slice, key: "slice-" + index });
            default:
                return null;
        }
    })));
};
var Footer = function (_a) {
    var footer = _a.footer;
    return (react_1.default.createElement("footer", { className: "container" },
        react_1.default.createElement("div", { className: "row" },
            react_1.default.createElement(Slices, { slices: footer.data.body }),
            footer.data.copyright && typeof footer.data.copyright == "string" &&
                react_1.default.createElement("p", { className: "text-center mt-5 text-secondary" }, String(footer.data.copyright).replace("<year>", new Date().getFullYear().toString())))));
};
exports.default = Footer;
