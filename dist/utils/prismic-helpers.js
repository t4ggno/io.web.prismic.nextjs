"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __importDefault(require("@prismicio/client"));
var PrismicHelper = /** @class */ (function () {
    function PrismicHelper() {
    }
    ;
    PrismicHelper.createInstance = function (instanceName, apiEndpoint, hrefResolver, accessToken, request) {
        if (request === void 0) { request = null; }
        // Create new instance
        var newInstance = new PrismicHelper;
        newInstance.apiEndpoint = apiEndpoint;
        newInstance.hrefResolver = hrefResolver;
        newInstance.client = client_1.default.client(apiEndpoint, PrismicHelper.createClientOptions(request, accessToken));
        // Add instance to list
        PrismicHelper.instances[instanceName] = newInstance;
        // Return new instance
        return newInstance;
    };
    PrismicHelper.getInstance = function (instanceName) {
        return PrismicHelper.instances[instanceName];
    };
    PrismicHelper.prototype.getRepositoryName = function () {
        return this.apiEndpoint.match(/https?:\/\/([^.]+)?\.(cdn\.)?.+/)[1];
    };
    PrismicHelper.prototype.getHrefResolver = function () {
        return this.hrefResolver;
    };
    PrismicHelper.manageLocal = function (Locales, locale) {
        var mainLanguage = Locales[0];
        var currentLang = locale !== undefined ? locale : mainLanguage;
        var isMyMainLanguage = mainLanguage === currentLang;
        return { mainLanguage: mainLanguage, currentLang: currentLang, isMyMainLanguage: isMyMainLanguage };
    };
    PrismicHelper.createClientOptions = function (request, prismicAccessToken) {
        if (request === void 0) { request = null; }
        if (prismicAccessToken === void 0) { prismicAccessToken = null; }
        var reqOption = request ? { request: request } : {};
        var accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};
        return __assign(__assign({}, reqOption), accessTokenOption);
    };
    ;
    PrismicHelper.instances = [];
    return PrismicHelper;
}());
exports.default = PrismicHelper;
