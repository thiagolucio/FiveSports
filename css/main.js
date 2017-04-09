import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "fontImpact": {
        "fontFamily": "'Impact', Arial Black, \"sans serif\"",
        "fontWeight": "normal",
        "fontStyle": "normal"
    },
    "h1": {
        "fontFamily": "'Impact', Arial Black, \"sans serif\"",
        "fontStyle": "normal",
        "fontVariant": "normal",
        "fontWeight": "500"
    },
    "h3": {
        "fontFamily": "'Impact', Arial Black, \"sans serif\"",
        "fontStyle": "normal",
        "fontVariant": "normal",
        "fontWeight": "500"
    },
    "bgD": {
        "background": "#DDD"
    },
    "row": {
        "paddingTop": 16,
        "paddingRight": 16,
        "paddingBottom": 16,
        "paddingLeft": 16,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "padding0": {
        "paddingTop": "0px!important",
        "paddingRight": "0px!important",
        "paddingBottom": "0px!important",
        "paddingLeft": "0px!important"
    },
    "padding6px": {
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6
    },
    "padding16px": {
        "paddingTop": 16,
        "paddingRight": 16,
        "paddingBottom": 16,
        "paddingLeft": 16
    },
    "margin24": {
        "marginTop": 24,
        "marginRight": 24,
        "marginBottom": 24,
        "marginLeft": 24
    },
    "margintop15p": {
        "marginTop": 15
    },
    "margintop10": {
        "marginTop": 10
    },
    "marginAll10": {
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10
    },
    "margintop10p": {
        "marginTop": "10%"
    },
    "margintop25": {
        "marginTop": 25
    },
    "mtop-16": {
        "marginTop": -16
    },
    "font16": {
        "fontSize": 16,
        "fontWeight": "600"
    },
    "font24": {
        "fontSize": 24
    },
    "color333": {
        "color": "#333333"
    },
    "nodecoration": {
        "textDecoration": "none!important"
    },
    "no-radius": {
        "borderRadius": 0
    },
    "border-none": {
        "border": 0
    },
    "height100": {
        "height": "100%"
    },
    "text-center": {
        "textAlign": "center"
    },
    "text-justify": {
        "textAlign": "justify"
    },
    "cursor-pointer": {
        "cursor": "pointer"
    },
    "min-height": {
        "minHeight": 650
    },
    "line-height2": {
        "lineHeight": 2
    },
    "maxwidth60": {
        "maxWidth": "60%"
    },
    "fieldset": {
        "marginTop": "5%",
        "marginRight": "5%",
        "marginBottom": "5%",
        "marginLeft": "5%"
    },
    "iconDetalhes": {
        "cursor": "pointer"
    },
    "iconDetalhes:hover": {
        "color": "#CDCDCD",
        "WebkitTransition": "all 0.3s ease-in-out",
        "transition": "all 0.3s ease-in-out"
    },
    "centered-horizontal": {
        "position": "relative",
        "left": "50%",
        "WebkitTransform": "translateX(-50%)",
        "MsTransform": "translateX(-50%)",
        "transform": "translateX(-50%)",
        "alignItems": "center",
        "WebkitAlignItems": "center"
    },
    "centered-absolute": {
        "position": "relative!",
        "left": "50%",
        "top": "50%",
        "transform": "translate(-50%,-50%)",
        "alignItems": "center",
        "WebkitAlignItems": "center"
    },
    "iframe-centralize": {
        "position": "relative!important",
        "left": "50%!important",
        "WebkitTransform": "translateX(-50%)!important",
        "MsTransform": "translateX(-50%)!important",
        "transform": "translateX(-50%)!important",
        "alignItems": "center!important",
        "WebkitAlignItems": "center!important"
    },
    "margin-right50p": {
        "marginRight": "15%"
    },
    "navbar-inverse": {
        "height": 60,
        "backgroundColor": "#757577",
        "paddingLeft": 50,
        "paddingRight": "50px !important",
        "boxShadow": "4px -1px 9px 1px #000000",
        "fontFamily": "'impactregular', Arial Black, \"sans serif\"",
        "fontWeight": "normal",
        "borderRadius": 0,
        "border": 0
    },
    "navbar-inverse ul li a": {
        "lineHeight": 20,
        "fontSize": 16,
        "fontFamily": "'Impact', Arial Black, \"sans serif\"",
        "color": "#FFFFFF!important",
        "fontWeight": "100"
    },
    "navbar-inverse nav>li": {
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3
    },
    "navbar-inverse nav>li:hover": {
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3,
        "color": "#fff",
        "backgroundColor": "#FFFFFF",
        "borderBottom": "4px solid #2693FF",
        "background": "rgba(255, 255, 255, 0.23)",
        "WebkitTransition": "all 0.3s ease-in-out",
        "transition": "all 0.3s ease-in-out"
    },
    "navbar-right >lino-link-menu:hover": {
        "background": "transparent!important",
        "border": "none"
    },
    "navbar-inverse navbar-nav>active>a": {
        "color": "#fff",
        "backgroundColor": "#FFFFFF",
        "borderBottom": "3px solid #137ee8",
        "background": "rgba(255, 255, 255, 0.23)"
    },
    "navbar-inverse navbar-nav>active>a:focus": {
        "color": "#fff",
        "backgroundColor": "#FFFFFF",
        "borderBottom": "3px solid #137ee8",
        "background": "rgba(255, 255, 255, 0.23)"
    },
    "navbar-inverse navbar-nav>active>a:hover": {
        "color": "#fff",
        "backgroundColor": "#FFFFFF",
        "borderBottom": "3px solid #137ee8",
        "background": "rgba(255, 255, 255, 0.23)"
    },
    "navbar-bottom": {
        "width": "100%",
        "minHeight": 200,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "border": 0,
        "borderRadius": 0,
        "backgroundColor": "#757577"
    },
    "navbar-bottom navbar-brand": {
        "fontSize": 11,
        "color": "#FFFFFF"
    },
    "navbar-brand img": {
        "marginTop": -10
    },
    "navbar-menu-footer": {
        "fontFamily": "'Impact', Arial Black, \"sans serif\"",
        "borderRadius": 0,
        "paddingTop": 0,
        "paddingRight": 6,
        "paddingBottom": 0,
        "paddingLeft": 6,
        "backgroundColor": "#BBBBBB",
        "border": 0
    },
    "navbar-menu-footer a": {
        "color": "rgba(0, 0, 0, 1)!important",
        "fontSize": 16,
        "fontWeight": "normal"
    },
    "navbar-menu-footer input": {
        "borderRadius": 0,
        "width": 300,
        "height": 45,
        "marginRight": 10,
        "backgroundColor": "#333333",
        "color": "rgb(255, 255, 255)!important",
        "border": 0,
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6
    },
    "navbar-default navbar-nav > li > a:hover": {
        "color": "rgba(255, 255, 255, 1)!important",
        "textDecoration": "underline",
        "backgroundColor": "transparent",
        "WebkitTransition": "all 0.3s ease-in-out",
        "transition": "all 0.3s ease-in-out"
    },
    "navbar-default navbar-nav > active > a": {
        "color": "rgb(255, 255, 255)!important",
        "backgroundColor": "transparent",
        "textDecoration": "underline",
        "WebkitTransition": "all 0.3s ease-in-out",
        "transition": "all 0.3s ease-in-out"
    },
    "navbar-default navbar-nav > active > a:hover": {
        "color": "rgb(255, 255, 255)!important",
        "backgroundColor": "transparent",
        "textDecoration": "underline",
        "WebkitTransition": "all 0.3s ease-in-out",
        "transition": "all 0.3s ease-in-out"
    },
    "navbar-default navbar-nav > active > a:focus": {
        "color": "rgb(255, 255, 255)!important",
        "backgroundColor": "transparent",
        "textDecoration": "underline",
        "WebkitTransition": "all 0.3s ease-in-out",
        "transition": "all 0.3s ease-in-out"
    },
    "socialIcons": {
        "height": 24,
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "marginRight": 10,
        "lineHeight": 40
    },
    "transicao": {
        "WebkitTransition": "all 0.3s ease-in-out",
        "transition": "all 0.3s ease-in-out"
    },
    "socialIcons img": {
        "borderRadius": "50%"
    },
    "socialIcons img:hover": {
        "cursor": "pointer",
        "border": "3px solid #FFFFFF",
        "borderRadius": "50%",
        "WebkitTransition": "all 0.3s ease-in-out",
        "transition": "all 0.3s ease-in-out"
    },
    "btn": {
        "color": "#FFF!important",
        "border": 0,
        "borderRadius": 0,
        "fontSize": 14,
        "paddingTop": 14,
        "paddingRight": 20,
        "paddingBottom": 14,
        "paddingLeft": 20
    },
    "btn:hover": {
        "WebkitTransition": "all ease .5s",
        "OTransition": "all ease .5s",
        "MozTransition": "all ease .5s",
        "MsTransition": "all ease .5s",
        "transition": "all ease .5s"
    },
    "btn-default": {
        "backgroundColor": "#BBBBBB"
    },
    "btn-default:hover": {
        "backgroundColor": "#333333"
    },
    "btn-primary": {
        "backgroundColor": "#137ee8"
    },
    "btn-primary:hover": {
        "backgroundColor": "#205a7a"
    },
    "btn-topmenu": {
        "marginTop": 12,
        "paddingTop": 6,
        "paddingRight": "10px!important",
        "paddingBottom": 6,
        "paddingLeft": "10px!important"
    },
    "btn-dark": {
        "backgroundColor": "#333333",
        "color": "#FFFFFF"
    },
    "btn-configurador": {
        "width": "100%",
        "height": 313,
        "paddingTop": 18,
        "paddingRight": 18,
        "paddingBottom": 18,
        "paddingLeft": 18
    },
    "btn-configurador:hover": {
        "color": "#FFFFFF"
    },
    "imgimg-responsive": {
        "maxWidth": "100%",
        "height": "auto"
    },
    "carousel-inner": {
        "height": "auto",
        "maxHeight": 630,
        "width": "100%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "container-slides": {
        "height": "auto",
        "maxHeight": 630,
        "width": "100%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "imgslide01": {
        "maxWidth": "70%"
    },
    "imgslide02": {
        "maxWidth": "70%"
    },
    "imgslide03": {
        "maxWidth": "70%"
    },
    "imgslide04": {
        "maxWidth": "70%"
    },
    "slide01": {
        "width": 700,
        "position": "absolute",
        "borderRight": "10px solid #FFFFFF",
        "borderBottom": "10px solid #FFFFFF",
        "zIndex": 4
    },
    "slide02": {
        "width": 700,
        "position": "relative",
        "left": "50%",
        "zIndex": 1
    },
    "slide03": {
        "width": 700,
        "left": "50%",
        "position": "absolute",
        "top": "29.7%",
        "zIndex": 2,
        "borderTop": "10px solid #FFFFFF",
        "marginBottom": 0,
        "marginTop": "8%"
    },
    "slide04": {
        "width": 700,
        "position": "relative",
        "float": "left",
        "borderRight": "10px solid #FFFFFF",
        "marginBottom": 0,
        "zIndex": 3
    },
    "carousel-caption": {
        "zIndex": 6
    },
    "carousel-control": {
        "zIndex": 6,
        "height": 100,
        "width": 40,
        "lineHeight": 100,
        "background": "#333",
        "marginTop": 90
    },
    "carousel-caption p": {
        "fontSize": 14,
        "fontWeight": "700"
    },
    "imgslide01 + carousel-caption": {
        "left": 0,
        "top": "48%",
        "width": "40%",
        "textAlign": "left",
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8
    },
    "imgslide02 + carousel-caption": {
        "left": 0,
        "top": "80%",
        "width": "40%",
        "textAlign": "left",
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8
    },
    "imgslide03 + carousel-caption": {
        "left": "68%",
        "top": "75%",
        "width": "30%",
        "textAlign": "right",
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8
    },
    "imgslide04 + carousel-caption": {
        "left": "68%",
        "top": "0%",
        "width": "30%",
        "textAlign": "right",
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8
    },
    "carouselYoutube": {
        "marginBottom": 0,
        "paddingTop": 0,
        "paddingRight": 40,
        "paddingBottom": 30,
        "paddingLeft": 40
    },
    "carousel-controlright": {
        "fontSize": 50,
        "right": -38
    },
    "carousel-controlleft": {
        "fontSize": 50,
        "left": -38
    },
    "carousel-control-slide": {
        "position": "absolute",
        "width": 200,
        "height": "auto",
        "background": "transparent",
        "marginTop": "0px!important"
    },
    "carousel-control-slide >i": {
        "fontSize": 100,
        "fontWeight": "100",
        "marginTop": 230
    },
    "carousel-control-slide >i:hover": {
        "color": "#2693FF"
    },
    "carousel-control-slidecarousel-controlright": {
        "top": 15
    },
    "thumbnail-youtube": {
        "background": "#000000",
        "border": "1px solid #000000",
        "position": "relative",
        "left": "50%",
        "borderRadius": 0,
        "WebkitTransform": "translateX(-50%)",
        "MsTransform": "translateX(-50%)",
        "transform": "translateX(-50%)",
        "alignItems": "center",
        "WebkitAlignItems": "center"
    },
    "navbar-menu-footer ul >li>a": {
        "lineHeight": "30px!important"
    },
    "modal-header": {
        "backgroundColor": "#757577",
        "color": "#FFFFFF"
    },
    "modal-footer": {
        "backgroundColor": "#757577",
        "color": "#FFFFFF"
    },
    "iframe[style]": {
        "width": "100% !important"
    },
    "title-block-novidades": {
        "borderRadius": "0px!important",
        "color": "#464542!important",
        "fontWeight": "bold",
        "fontSize": 18
    },
    "hr-title-block": {
        "width": "100%",
        "height": 3,
        "backgroundColor": "#464542"
    },
    "img-block-novidades": {
        "width": 80,
        "height": 80
    },
    "text-block-novidades": {
        "fontSize": 11,
        "marginLeft": 100,
        "lineHeight": 1,
        "textAlign": "justify",
        "fontWeight": "bold",
        "color": "#636363"
    },
    "data-block-novidades": {
        "fontSize": ": 10px",
        "color": "#989898",
        "fontWeight": "bold"
    },
    "media-heading": {
        "fontSize": 15
    },
    "data-novidades": {
        "fontSize": "11px!important",
        "color": "#989898"
    }
});