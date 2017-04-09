import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "forum": {
        "backgroundColor": "#EEE",
        "width": "100%"
    },
    "comments-container": {
        "marginTop": 60,
        "marginRight": "auto",
        "marginBottom": 15,
        "marginLeft": "auto",
        "width": 768
    },
    "comments-container h1": {
        "fontSize": 36,
        "color": "#283035",
        "fontWeight": "400"
    },
    "comments-container h1 a": {
        "fontSize": 18,
        "fontWeight": "700"
    },
    "comments-list": {
        "marginTop": 30,
        "position": "relative"
    },
    "comments-list:after": {
        "content": "''",
        "position": "absolute",
        "background": "#c7cacb",
        "bottom": 0,
        "left": 27,
        "width": 7,
        "height": 7,
        "border": "3px solid #dee1e3",
        "WebkitBorderRadius": "50%",
        "MozBorderRadius": "50%",
        "borderRadius": "50%"
    },
    "reply-list:before": {
        "display": "none"
    },
    "reply-list:after": {
        "display": "none"
    },
    "comments-list li": {
        "marginBottom": 15,
        "display": "block",
        "position": "relative"
    },
    "comments-list li:after": {
        "content": "''",
        "display": "block",
        "clear": "both",
        "height": 0,
        "width": 0
    },
    "reply-list": {
        "paddingLeft": 88,
        "clear": "both",
        "marginTop": 15
    },
    "comments-list comment-avatar": {
        "width": 65,
        "height": 65,
        "position": "relative",
        "zIndex": 99,
        "float": "left",
        "border": "3px solid #FFF",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "WebkitBoxShadow": "0 1px 2px rgba(0,0,0,0.2)",
        "MozBoxShadow": "0 1px 2px rgba(0,0,0,0.2)",
        "boxShadow": "0 1px 2px rgba(0,0,0,0.2)",
        "overflow": "hidden"
    },
    "comments-list comment-avatar img": {
        "width": "100%",
        "height": "100%"
    },
    "reply-list comment-avatar": {
        "width": 50,
        "height": 50
    },
    "comment-main-level:after": {
        "content": "''",
        "width": 0,
        "height": 0,
        "display": "block",
        "clear": "both"
    },
    "comments-list comment-box": {
        "width": 680,
        "float": "right",
        "position": "relative",
        "WebkitBoxShadow": "0 1px 1px rgba(0,0,0,0.15)",
        "MozBoxShadow": "0 1px 1px rgba(0,0,0,0.15)",
        "boxShadow": "0 1px 1px rgba(0,0,0,0.15)"
    },
    "comments-list comment-box:before": {
        "content": "''",
        "height": 0,
        "width": 0,
        "position": "absolute",
        "display": "block",
        "borderWidth": "11px 13px 11px 0",
        "borderStyle": "solid",
        "borderColor": "transparent rgba(0,0,0,0.05)",
        "top": 8,
        "left": -12
    },
    "comments-list comment-box:after": {
        "content": "''",
        "height": 0,
        "width": 0,
        "position": "absolute",
        "display": "block",
        "borderWidth": "10px 12px 10px 0",
        "borderStyle": "solid",
        "borderColor": "transparent #FCFCFC",
        "top": 8,
        "left": -11
    },
    "reply-list comment-box": {
        "width": 610
    },
    "comment-box comment-head": {
        "background": "#FCFCFC",
        "paddingTop": 10,
        "paddingRight": 12,
        "paddingBottom": 10,
        "paddingLeft": 12,
        "borderBottom": "1px solid #E5E5E5",
        "overflow": "hidden",
        "WebkitBorderRadius": "4px 4px 0 0",
        "MozBorderRadius": "4px 4px 0 0",
        "borderRadius": "4px 4px 0 0"
    },
    "comment-box comment-head i": {
        "float": "right",
        "marginLeft": 14,
        "position": "relative",
        "top": 2,
        "color": "#A6A6A6",
        "cursor": "pointer",
        "WebkitTransition": "color 0.3s ease",
        "OTransition": "color 0.3s ease",
        "transition": "color 0.3s ease"
    },
    "comment-box comment-head i:hover": {
        "color": "#1483f7"
    },
    "comment-box comment-name": {
        "color": "#1483f7",
        "fontSize": 14,
        "fontWeight": "700",
        "float": "left",
        "marginRight": 10
    },
    "comment-box comment-name a": {
        "color": "#1483f7"
    },
    "comment-box comment-head span": {
        "float": "left",
        "color": "#999",
        "fontSize": 13,
        "position": "relative",
        "top": 1
    },
    "comment-box comment-content": {
        "background": "#FFF",
        "paddingTop": 12,
        "paddingRight": 12,
        "paddingBottom": 12,
        "paddingLeft": 12,
        "fontSize": 15,
        "color": "#595959",
        "WebkitBorderRadius": "0 0 4px 4px",
        "MozBorderRadius": "0 0 4px 4px",
        "borderRadius": "0 0 4px 4px"
    },
    "comment-box comment-nameby-author": {
        "color": "#1483f7"
    },
    "comment-box comment-nameby-author a": {
        "color": "#1483f7"
    },
    "comment-box comment-nameby-author:after": {
        "content": "'autor'",
        "background": "#1483f7",
        "color": "#FFF",
        "fontSize": 12,
        "paddingTop": 3,
        "paddingRight": 5,
        "paddingBottom": 3,
        "paddingLeft": 5,
        "fontWeight": "700",
        "marginLeft": 10,
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3
    }
});