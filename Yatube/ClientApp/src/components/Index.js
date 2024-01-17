"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var VideoThumbnail_1 = require("./VideoThumbnail");
var dummyDatas = [
    {
        imgSrc: 'staticfiles/test.jpg', title: 'fc2-ppv-111111', viewCount: 1
    },
    {
        imgSrc: 'staticfiles/test.jpg', title: 'fc2-ppv-111111', viewCount: 2
    },
    {
        imgSrc: 'staticfiles/test.jpg', title: 'fc2-ppv-111111', viewCount: 3
    },
    {
        imgSrc: 'staticfiles/test.jpg', title: 'fc2-ppv-111111', viewCount: 4
    },
    {
        imgSrc: 'staticfiles/test.jpg', title: 'fc2-ppv-111111', viewCount: 5
    },
    {
        imgSrc: 'staticfiles/test.jpg', title: 'fc2-ppv-111111', viewCount: 6
    },
    {
        imgSrc: 'staticfiles/test.jpg', title: 'fc2-ppv-111111', viewCount: 7
    },
    {
        imgSrc: 'staticfiles/test.jpg', title: 'fc2-ppv-111111', viewCount: 8
    },
];
var getThumbnailGroups = function (arr, size) {
    var i;
    var j;
    var chunk = size;
    var temparray = [];
    for (i = 0, j = arr.length; i < j; i += chunk) {
        var g = arr.slice(i, i + chunk);
        temparray.push(g);
    }
    return temparray;
};
var Index = function () {
    return (React.createElement(react_bootstrap_1.Container, null, getThumbnailGroups(dummyDatas, 4).map(function (grp) {
        return React.createElement(VideoThumbnail_1.VideoThumbnailGroup, { group: grp });
    })));
};
Index.displayName = Index.name;
exports.default = Index;
//# sourceMappingURL=Index.js.map