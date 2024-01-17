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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoThumbnailGroup = exports.VideoThumbnail = void 0;
var React = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var free_regular_svg_icons_1 = require("@fortawesome/free-regular-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var react_router_dom_1 = require("react-router-dom");
var VideoThumbnail = function (props) {
    var history = (0, react_router_dom_1.useHistory)();
    var handleClick = function () {
        history.push("/videos/".concat(props.viewCount));
    };
    return (React.createElement(react_bootstrap_1.Card, { className: "text-center", onClick: handleClick, style: { cursor: "pointer" } },
        React.createElement(react_bootstrap_1.Card.Img, { variant: "top", src: props.imgSrc }),
        React.createElement(react_bootstrap_1.Card.Body, null,
            React.createElement(react_bootstrap_1.Card.Text, null, props.title)),
        React.createElement(react_bootstrap_1.Card.Footer, null,
            React.createElement(react_bootstrap_1.Stack, { direction: "horizontal", gap: 2, className: "justify-content-center text-muted" },
                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_regular_svg_icons_1.faEye }),
                React.createElement("small", null, props.viewCount)))));
};
exports.VideoThumbnail = VideoThumbnail;
var VideoThumbnailGroup = function (props) {
    return (React.createElement(react_bootstrap_1.CardGroup, null, props.group.map(function (g) { return React.createElement(exports.VideoThumbnail, __assign({}, g)); })));
};
exports.VideoThumbnailGroup = VideoThumbnailGroup;
//# sourceMappingURL=VideoThumbnail.js.map