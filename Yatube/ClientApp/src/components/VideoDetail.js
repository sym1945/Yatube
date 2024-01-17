"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoDetail = void 0;
var React = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var ActionStack = (0, styled_components_1.default)(react_bootstrap_1.Stack)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    cursor: pointer;\n    user-select: none;\n    transition: 0.3s;\n    &:hover {\n        color: red;\n    }\n"], ["\n    cursor: pointer;\n    user-select: none;\n    transition: 0.3s;\n    &:hover {\n        color: red;\n    }\n"])));
var VideoDetail = function () {
    var id = (0, react_router_dom_1.useParams)().id;
    var _a = React.useState(0), likeCnt = _a[0], setLikeCnt = _a[1];
    var _b = React.useState(0), dislikeCnt = _b[0], setDislikeCnt = _b[1];
    var onClickLike = function () {
        setLikeCnt(function (cnt) { return cnt + 1; });
    };
    var onClickDislike = function () {
        setDislikeCnt(function (cnt) { return cnt + 1; });
    };
    return (React.createElement(react_bootstrap_1.Container, { fluid: true },
        React.createElement(react_bootstrap_1.Row, null,
            React.createElement(react_bootstrap_1.Col, { md: 8 },
                React.createElement("video", { width: '100%', controls: true },
                    React.createElement("source", { src: "staticfiles/test.mp4", type: "video/mp4" })),
                React.createElement(react_bootstrap_1.Stack, { className: "mt-3" },
                    React.createElement("h5", { className: "my-0" }, "FC2-PPV-1234567"),
                    React.createElement(react_bootstrap_1.Stack, { direction: "horizontal", gap: 3 },
                        React.createElement("div", { className: "text-muted me-auto" }, "12345 views"),
                        React.createElement(ActionStack, { direction: 'horizontal', gap: 2, onClick: onClickLike },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faHeart }),
                            React.createElement("div", null, likeCnt)),
                        React.createElement(ActionStack, { direction: 'horizontal', gap: 2, onClick: onClickDislike },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faHeartBroken }),
                            React.createElement("div", null, dislikeCnt)))),
                React.createElement("hr", null),
                React.createElement("dl", { className: "row" },
                    React.createElement("dt", { className: "col-sm-2" }, "Creator"),
                    React.createElement("dd", { className: "col-sm-4" },
                        React.createElement("a", { href: "#" }, "derukin")),
                    React.createElement("dt", { className: "col-sm-1" }, "Actor"),
                    React.createElement("dd", { className: "col-sm-5" },
                        React.createElement("a", { href: "#" }, "unknown")),
                    React.createElement("dt", { className: "col-sm-2 text-truncate" }, "Upload Date"),
                    React.createElement("dd", { className: "col-sm-10" }, "2022-01-11"),
                    React.createElement("dt", { className: "col-sm-2 text-truncate" }, "Description"),
                    React.createElement("dd", { className: "col-sm-10" },
                        React.createElement("p", null, "Definition for the term. And some more placeholder definition text."))),
                React.createElement("hr", null),
                React.createElement(react_bootstrap_1.Stack, { direction: "horizontal", gap: 1 },
                    React.createElement(react_bootstrap_1.Button, { variant: "warning", size: "sm" }, "tag1"),
                    React.createElement(react_bootstrap_1.Button, { variant: "warning", size: "sm" }, "tag2"),
                    React.createElement(react_bootstrap_1.Button, { variant: "warning", size: "sm" }, "tag3"),
                    React.createElement(react_bootstrap_1.Button, { variant: "warning", size: "sm" }, "tag4"),
                    React.createElement(react_bootstrap_1.Button, { variant: "warning", size: "sm" }, "tag5")),
                React.createElement("hr", null)),
            React.createElement(react_bootstrap_1.Col, { md: 4 },
                React.createElement("div", { style: { backgroundColor: 'gray' } }, "Related Videos")))));
};
exports.VideoDetail = VideoDetail;
var templateObject_1;
//# sourceMappingURL=VideoDetail.js.map