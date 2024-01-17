"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Videos = void 0;
var React = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var styled_components_1 = require("styled-components");
var StyledContainer = (0, styled_components_1.default)(react_bootstrap_1.Container)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    cursor: pointer;\n    user-select: none;\n    background-color: gray;\n    height: 240px;\n    object-fit: cover;\n    \n"], ["\n    cursor: pointer;\n    user-select: none;\n    background-color: gray;\n    height: 240px;\n    object-fit: cover;\n    \n"])));
var WarpDiv = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 100%; \n    margin: 0 auto; \n    padding-bottom:67%; \n    border: solid #dadada 1.5px;\n    color: #aaaaaa;\n    position: relative;\n    cursor: pointer;\n    user-select: none;\n"], ["\n    width: 100%; \n    margin: 0 auto; \n    padding-bottom:67%; \n    border: solid #dadada 1.5px;\n    color: #aaaaaa;\n    position: relative;\n    cursor: pointer;\n    user-select: none;\n"])));
var CntsDiv = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    position: absolute;\n    top: 0; \n    left: 0; \n    font-size: 15px;\n    width: 100%; \n    height: 100%; \n    text-align: center;\n"], ["\n    position: absolute;\n    top: 0; \n    left: 0; \n    font-size: 15px;\n    width: 100%; \n    height: 100%; \n    text-align: center;\n"])));
var PlaceHolderDiv = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    padding-top: 24%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n"], ["\n    padding-top: 24%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n"])));
var blind = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    clip: 'rect(0 0 0 0)',
    margin: '-1px',
    overflow: 'hidden'
};
var Videos = function () {
    var _a = React.useState(), imgMainUserSrc = _a[0], setImgMainUserSrc = _a[1];
    var _b = React.useState(new Array()), imgSrcs = _b[0], setImgSrcs = _b[1];
    var _c = React.useState(), imgMainSrc = _c[0], setImgMainSrc = _c[1];
    var _d = React.useState('Click Start to transcode'), message = _d[0], setMessage = _d[1];
    var _e = React.useState(0), time = _e[0], setTime = _e[1];
    var _f = React.useState(false), show = _f[0], setShow = _f[1];
    var mainThumbInput = React.useRef(null);
    React.useEffect(function () {
        setImgMainSrc(imgSrcs[0]);
        if (mainThumbInput && mainThumbInput.current) {
            mainThumbInput.current.value = '';
        }
    }, [imgSrcs]);
    React.useEffect(function () {
        setImgMainSrc(imgMainUserSrc);
        if (mainThumbInput && mainThumbInput.current) {
            mainThumbInput.current.value = '';
        }
    }, [imgMainUserSrc]);
    var doTranscode = function (file) { return __awaiter(void 0, void 0, void 0, function () {
        var cover_1, ex_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getVideoCover(file, time)];
                case 1:
                    cover_1 = _a.sent();
                    // print out the result image blob
                    setImgSrcs(function (srcs) {
                        srcs.forEach(function (src) {
                            URL.revokeObjectURL(src);
                            console.log('remove', src);
                        });
                        return cover_1.map(function (blob) { return URL.createObjectURL(blob); });
                    });
                    return [3 /*break*/, 3];
                case 2:
                    ex_1 = _a.sent();
                    console.log("ERROR: ", ex_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    function getVideoCover(file, seekTo) {
        if (seekTo === void 0) { seekTo = 0.0; }
        console.log("getting video cover for file: ", file);
        return new Promise(function (resolve, reject) {
            var imageBlobs = [];
            var imageCnt = 9;
            var seekTo = 0;
            var seekOffset = 0;
            // load the file to a video player
            var videoPlayer = document.createElement('video');
            videoPlayer.setAttribute('src', URL.createObjectURL(file));
            videoPlayer.load();
            videoPlayer.addEventListener('error', function (ex) {
                reject("error when loading video file");
            });
            // load metadata of the video to get video duration and dimensions
            videoPlayer.addEventListener('loadedmetadata', function () {
                // seek to user defined timestamp (in seconds) if possible
                console.dir(videoPlayer);
                seekOffset = (videoPlayer.duration / (imageCnt + 1));
                seekTo = seekOffset;
                if (videoPlayer.duration < seekTo) {
                    reject("video is too short.");
                    return;
                }
                // delay seeking or else 'seeked' event won't fire on Safari
                setTimeout(function () {
                    videoPlayer.currentTime = seekTo;
                }, 200);
                // extract video thumbnail once seeking is complete
                videoPlayer.addEventListener('seeked', function () {
                    console.log('video is now paused at %ss.', seekTo);
                    // define a canvas to have the same dimension as the video
                    var canvas = document.createElement("canvas");
                    canvas.width = 730; //videoPlayer.videoWidth;
                    canvas.height = 490; //videoPlayer.videoHeight;
                    // draw the video frame to canvas
                    var ctx = canvas.getContext("2d");
                    if (ctx === null)
                        return;
                    ctx.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);
                    // return the canvas image as a blob
                    ctx.canvas.toBlob(function (blob) {
                        imageBlobs.push(blob);
                        if (imageBlobs.length === imageCnt) {
                            URL.revokeObjectURL(videoPlayer.src);
                            console.log('remove', videoPlayer.src);
                            resolve(imageBlobs);
                        }
                        else {
                            seekTo = seekOffset * (imageBlobs.length + 1);
                            videoPlayer.currentTime = seekTo;
                        }
                    }, "image/jpeg", 0.75 /* quality */);
                });
            });
        });
    }
    var onInputTimeChange = function (e) {
        setTime(e.target.value);
    };
    var handleClickMainThumb = function () {
        var _a;
        console.log('click');
        (_a = mainThumbInput === null || mainThumbInput === void 0 ? void 0 : mainThumbInput.current) === null || _a === void 0 ? void 0 : _a.click();
    };
    return (React.createElement(react_bootstrap_1.Container, null,
        React.createElement("input", { value: time, onChange: onInputTimeChange }),
        React.createElement(react_bootstrap_1.Button, { onClick: function () { return setShow(true); } }, "Add Video"),
        React.createElement("p", null, message),
        React.createElement(react_bootstrap_1.Modal, { size: "xl", show: show, centered: true, style: { overflowX: 'hidden' }, onHide: function () {
                setShow(false);
                setImgSrcs(function (srcs) {
                    srcs.forEach(function (src) {
                        URL.revokeObjectURL(src);
                        console.log('remove', src);
                    });
                    return [];
                });
            } },
            React.createElement(react_bootstrap_1.Modal.Header, { closeButton: true },
                React.createElement(react_bootstrap_1.Modal.Title, null, "Please input the video information")),
            React.createElement(react_bootstrap_1.Modal.Body, null,
                React.createElement(react_bootstrap_1.Form, { onReset: function (e) { return console.log('reset'); }, onResetCapture: function (e) { return console.log('reset capture'); } },
                    React.createElement(react_bootstrap_1.Row, { xs: 1, sm: 1, lg: 2 },
                        React.createElement(react_bootstrap_1.Col, null,
                            React.createElement(react_bootstrap_1.Form.Group, { controlId: "formFileSm", className: "mb-3" },
                                React.createElement(react_bootstrap_1.Form.Label, null, "Input video file"),
                                React.createElement(react_bootstrap_1.Form.Control, { type: "file", size: "sm", accept: ".mp4", onChange: function (e) {
                                        var files = (e.target).files;
                                        if (files && files.length > 0)
                                            doTranscode(files[0]);
                                    } })),
                            React.createElement(react_bootstrap_1.Form.Group, { className: "mb-3", controlId: "exampleForm.ControlInput1" },
                                React.createElement(react_bootstrap_1.Form.Label, null, "Main Thubnail"),
                                React.createElement(react_bootstrap_1.Form.Control, { type: "file", size: "sm", accept: ".jpg", ref: mainThumbInput, style: blind, onChange: function (e) {
                                        var files = (e.target).files;
                                        if (files && files.length > 0)
                                            setImgMainUserSrc(function (src) {
                                                if (src && src !== undefined)
                                                    URL.revokeObjectURL(src);
                                                return URL.createObjectURL(files[0]);
                                            });
                                    } }),
                                React.createElement(WarpDiv, { onClick: handleClickMainThumb },
                                    React.createElement(CntsDiv, null, imgMainSrc !== undefined ? React.createElement(react_bootstrap_1.Image, { fluid: true, src: imgMainSrc, height: '100%', width: '100%' }) : React.createElement(PlaceHolderDiv, null, "Choose the image file")))),
                            React.createElement(react_bootstrap_1.Form.Group, { className: "mb-3", controlId: "exampleForm.ControlInput1" },
                                React.createElement(react_bootstrap_1.Form.Label, null, "Thumbnails"),
                                React.createElement(react_bootstrap_1.Stack, { direction: "horizontal", style: { overflowX: 'auto' } }, imgSrcs.map(function (imgSrc, index) {
                                    return React.createElement(react_bootstrap_1.Image, { key: index, fluid: true, width: '240', height: '180', src: imgSrc, onClick: function (e) {
                                            if (imgMainUserSrc && imgMainUserSrc !== undefined)
                                                URL.revokeObjectURL(imgMainUserSrc);
                                            setImgMainSrc(imgSrcs[index]);
                                        } });
                                })))),
                        React.createElement(react_bootstrap_1.Col, null,
                            React.createElement(react_bootstrap_1.Form.Group, { className: "mb-3", controlId: "exampleForm.ControlInput1" },
                                React.createElement(react_bootstrap_1.Form.Label, null, "Title"),
                                React.createElement(react_bootstrap_1.Form.Control, { type: "text" })),
                            React.createElement(react_bootstrap_1.Form.Group, { className: "mb-3", controlId: "exampleForm.ControlInput1" },
                                React.createElement(react_bootstrap_1.Form.Label, null, "Creator"),
                                React.createElement(react_bootstrap_1.Form.Control, { type: "text" })),
                            React.createElement(react_bootstrap_1.Form.Group, { className: "mb-3", controlId: "exampleForm.ControlInput1" },
                                React.createElement(react_bootstrap_1.Form.Label, null, "Actor"),
                                React.createElement(react_bootstrap_1.Form.Control, { type: "text" })),
                            React.createElement(react_bootstrap_1.Form.Group, { className: "mb-3", controlId: "exampleForm.ControlTextarea1" },
                                React.createElement(react_bootstrap_1.Form.Label, null, "Description"),
                                React.createElement(react_bootstrap_1.Form.Control, { as: "textarea", rows: 3 })),
                            React.createElement(react_bootstrap_1.Form.Group, { className: "mb-3", controlId: "exampleForm.ControlInput1" },
                                React.createElement(react_bootstrap_1.Form.Label, null, "Tags"),
                                React.createElement(react_bootstrap_1.Form.Control, { type: "text" })))))),
            React.createElement(react_bootstrap_1.Modal.Footer, null,
                React.createElement(react_bootstrap_1.Button, { variant: "secondary" }, "Close"),
                React.createElement(react_bootstrap_1.Button, { variant: "primary" }, "Save changes")))));
};
exports.Videos = Videos;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Videos.js.map