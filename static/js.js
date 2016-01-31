require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = ".gamestarter{max-width:750px;font-family:sans-serif;transition:1s all}.gamestarter .button_surround,.gamestarter .start_game_row{transition:1s all;margin-bottom:2em;overflow:hidden}.gamestarter .aside{width:50%;display:inline-block;text-align:center}.gamestarter .aside h6{font-size:100%;margin:1em}.gamestarter .aside button{margin:1em}.gamestarter button{color:white;background:black;padding:4px 10px;border-radius:4px;outline:0;border:1px solid black;cursor:pointer;font-weight:bold;transition:.5s all;min-width:75px;text-align:center}.gamestarter button:hover{background:white;color:black}.gamestarter button:focus{border-color:turquoise}.gamestarter .start_game_row{text-align:center}.move_history,.turn_display{font-family:sans-serif;display:inline-block;margin:1em;vertical-align:top}.move_history h6,.turn_display h6{font-size:120%;margin:0;margin-bottom:.5em;font-weight:normal}.turn_display{min-width:5em;text-align:center}.turn_display>div{font-weight:bold}.move_history>div{height:20em;overflow-y:scroll;min-width:10em;border:1px solid black;padding:.5em;font-family:monospace}.chessboard{width:750px;height:750px;position:relative;display:inline-block}.chessboard>.bsquare.odd{background:#ff8037}.chessboard>.bsquare.even{background:#ffffc8}.chessboard>.bsquare{width:12.5%;height:12.5%;position:absolute}.chessboard>.recent_move,.chessboard>.recent_source{width:93.75px;height:93.75px;position:absolute}.chessboard>.recent_move>div,.chessboard>.recent_source>div{border:5px solid green;position:absolute;top:0;bottom:0;left:0;right:0}.chessboard>.recent_source>div{border-color:#0f0}.chessboard>svg{position:absolute;z-index:1;width:11.25%;height:11.25%}.chessboard svg path,.chessboard svg circle,.chessboard svg rect{fill:white;stroke:black}.chessboard svg.black path,.chessboard svg.black circle,.chessboard svg.black rect{fill:black;stroke:white}.chessboard>button{position:absolute;z-index:2;cursor:pointer;padding:0;background:none;border:none;width:12.5%;height:12.5%}.chessboard>button.selectedbutton>div{position:absolute;top:10%;bottom:10%;left:10%;right:10%;border:3px solid black;border-radius:50%}.chessboard>button.selectedbutton.nil{border:3px solid black;width:12.5%;height:12.5%;z-index:3}.chessboard>button.selectedbutton.nil:focus{border-width:6px;outline:0}.chessboard>button.selectedbutton.nil.invalidmove{border-color:red}.chessboard button:focus,.chessboard div[role=\"button\"]:focus{outline:0}.chessboard .promotion{width:50%;position:absolute;background:white;top:37.5%;left:25%;border-radius:5px;border:1px solid black;z-index:-5;padding:1em;font-family:sans-serif}.chessboard .promotion svg{height:3em}.chessboard .promotion .promotray{text-align:center}.chessboard .promotion div[role=\"button\"]{vertical-align:middle;cursor:pointer;display:inline-block;margin:1em;border:1px solid rgba(255,255,255,0);border-radius:5px}.chessboard .promotion div[role=\"button\"]:hover{border-color:black}.chessboard>button[data-coord=\"1x8\"],.chessboard>button.selectedbutton[data-coord=\"1x8\"],.chessboard>.bsquare[data-coord=\"1x8\"],.chessboard>.recent_move[data-coord=\"1x8\"],.chessboard>.recent_source[data-coord=\"1x8\"]{left:0;top:87.5%}.chessboard>svg[data-coord=\"1x8\"]{left:.625%;top:88.125%}.chessboard>button[data-coord=\"1x7\"],.chessboard>button.selectedbutton[data-coord=\"1x7\"],.chessboard>.bsquare[data-coord=\"1x7\"],.chessboard>.recent_move[data-coord=\"1x7\"],.chessboard>.recent_source[data-coord=\"1x7\"]{left:0;top:75%}.chessboard>svg[data-coord=\"1x7\"]{left:.625%;top:75.625%}.chessboard>button[data-coord=\"1x6\"],.chessboard>button.selectedbutton[data-coord=\"1x6\"],.chessboard>.bsquare[data-coord=\"1x6\"],.chessboard>.recent_move[data-coord=\"1x6\"],.chessboard>.recent_source[data-coord=\"1x6\"]{left:0;top:62.5%}.chessboard>svg[data-coord=\"1x6\"]{left:.625%;top:63.125%}.chessboard>button[data-coord=\"1x5\"],.chessboard>button.selectedbutton[data-coord=\"1x5\"],.chessboard>.bsquare[data-coord=\"1x5\"],.chessboard>.recent_move[data-coord=\"1x5\"],.chessboard>.recent_source[data-coord=\"1x5\"]{left:0;top:50%}.chessboard>svg[data-coord=\"1x5\"]{left:.625%;top:50.625%}.chessboard>button[data-coord=\"1x4\"],.chessboard>button.selectedbutton[data-coord=\"1x4\"],.chessboard>.bsquare[data-coord=\"1x4\"],.chessboard>.recent_move[data-coord=\"1x4\"],.chessboard>.recent_source[data-coord=\"1x4\"]{left:0;top:37.5%}.chessboard>svg[data-coord=\"1x4\"]{left:.625%;top:38.125%}.chessboard>button[data-coord=\"1x3\"],.chessboard>button.selectedbutton[data-coord=\"1x3\"],.chessboard>.bsquare[data-coord=\"1x3\"],.chessboard>.recent_move[data-coord=\"1x3\"],.chessboard>.recent_source[data-coord=\"1x3\"]{left:0;top:25%}.chessboard>svg[data-coord=\"1x3\"]{left:.625%;top:25.625%}.chessboard>button[data-coord=\"1x2\"],.chessboard>button.selectedbutton[data-coord=\"1x2\"],.chessboard>.bsquare[data-coord=\"1x2\"],.chessboard>.recent_move[data-coord=\"1x2\"],.chessboard>.recent_source[data-coord=\"1x2\"]{left:0;top:12.5%}.chessboard>svg[data-coord=\"1x2\"]{left:.625%;top:13.125%}.chessboard>button[data-coord=\"1x1\"],.chessboard>button.selectedbutton[data-coord=\"1x1\"],.chessboard>.bsquare[data-coord=\"1x1\"],.chessboard>.recent_move[data-coord=\"1x1\"],.chessboard>.recent_source[data-coord=\"1x1\"]{left:0;top:0}.chessboard>svg[data-coord=\"1x1\"]{left:.625%;top:.625%}.chessboard>button[data-coord=\"2x8\"],.chessboard>button.selectedbutton[data-coord=\"2x8\"],.chessboard>.bsquare[data-coord=\"2x8\"],.chessboard>.recent_move[data-coord=\"2x8\"],.chessboard>.recent_source[data-coord=\"2x8\"]{left:12.5%;top:87.5%}.chessboard>svg[data-coord=\"2x8\"]{left:13.125%;top:88.125%}.chessboard>button[data-coord=\"2x7\"],.chessboard>button.selectedbutton[data-coord=\"2x7\"],.chessboard>.bsquare[data-coord=\"2x7\"],.chessboard>.recent_move[data-coord=\"2x7\"],.chessboard>.recent_source[data-coord=\"2x7\"]{left:12.5%;top:75%}.chessboard>svg[data-coord=\"2x7\"]{left:13.125%;top:75.625%}.chessboard>button[data-coord=\"2x6\"],.chessboard>button.selectedbutton[data-coord=\"2x6\"],.chessboard>.bsquare[data-coord=\"2x6\"],.chessboard>.recent_move[data-coord=\"2x6\"],.chessboard>.recent_source[data-coord=\"2x6\"]{left:12.5%;top:62.5%}.chessboard>svg[data-coord=\"2x6\"]{left:13.125%;top:63.125%}.chessboard>button[data-coord=\"2x5\"],.chessboard>button.selectedbutton[data-coord=\"2x5\"],.chessboard>.bsquare[data-coord=\"2x5\"],.chessboard>.recent_move[data-coord=\"2x5\"],.chessboard>.recent_source[data-coord=\"2x5\"]{left:12.5%;top:50%}.chessboard>svg[data-coord=\"2x5\"]{left:13.125%;top:50.625%}.chessboard>button[data-coord=\"2x4\"],.chessboard>button.selectedbutton[data-coord=\"2x4\"],.chessboard>.bsquare[data-coord=\"2x4\"],.chessboard>.recent_move[data-coord=\"2x4\"],.chessboard>.recent_source[data-coord=\"2x4\"]{left:12.5%;top:37.5%}.chessboard>svg[data-coord=\"2x4\"]{left:13.125%;top:38.125%}.chessboard>button[data-coord=\"2x3\"],.chessboard>button.selectedbutton[data-coord=\"2x3\"],.chessboard>.bsquare[data-coord=\"2x3\"],.chessboard>.recent_move[data-coord=\"2x3\"],.chessboard>.recent_source[data-coord=\"2x3\"]{left:12.5%;top:25%}.chessboard>svg[data-coord=\"2x3\"]{left:13.125%;top:25.625%}.chessboard>button[data-coord=\"2x2\"],.chessboard>button.selectedbutton[data-coord=\"2x2\"],.chessboard>.bsquare[data-coord=\"2x2\"],.chessboard>.recent_move[data-coord=\"2x2\"],.chessboard>.recent_source[data-coord=\"2x2\"]{left:12.5%;top:12.5%}.chessboard>svg[data-coord=\"2x2\"]{left:13.125%;top:13.125%}.chessboard>button[data-coord=\"2x1\"],.chessboard>button.selectedbutton[data-coord=\"2x1\"],.chessboard>.bsquare[data-coord=\"2x1\"],.chessboard>.recent_move[data-coord=\"2x1\"],.chessboard>.recent_source[data-coord=\"2x1\"]{left:12.5%;top:0}.chessboard>svg[data-coord=\"2x1\"]{left:13.125%;top:.625%}.chessboard>button[data-coord=\"3x8\"],.chessboard>button.selectedbutton[data-coord=\"3x8\"],.chessboard>.bsquare[data-coord=\"3x8\"],.chessboard>.recent_move[data-coord=\"3x8\"],.chessboard>.recent_source[data-coord=\"3x8\"]{left:25%;top:87.5%}.chessboard>svg[data-coord=\"3x8\"]{left:25.625%;top:88.125%}.chessboard>button[data-coord=\"3x7\"],.chessboard>button.selectedbutton[data-coord=\"3x7\"],.chessboard>.bsquare[data-coord=\"3x7\"],.chessboard>.recent_move[data-coord=\"3x7\"],.chessboard>.recent_source[data-coord=\"3x7\"]{left:25%;top:75%}.chessboard>svg[data-coord=\"3x7\"]{left:25.625%;top:75.625%}.chessboard>button[data-coord=\"3x6\"],.chessboard>button.selectedbutton[data-coord=\"3x6\"],.chessboard>.bsquare[data-coord=\"3x6\"],.chessboard>.recent_move[data-coord=\"3x6\"],.chessboard>.recent_source[data-coord=\"3x6\"]{left:25%;top:62.5%}.chessboard>svg[data-coord=\"3x6\"]{left:25.625%;top:63.125%}.chessboard>button[data-coord=\"3x5\"],.chessboard>button.selectedbutton[data-coord=\"3x5\"],.chessboard>.bsquare[data-coord=\"3x5\"],.chessboard>.recent_move[data-coord=\"3x5\"],.chessboard>.recent_source[data-coord=\"3x5\"]{left:25%;top:50%}.chessboard>svg[data-coord=\"3x5\"]{left:25.625%;top:50.625%}.chessboard>button[data-coord=\"3x4\"],.chessboard>button.selectedbutton[data-coord=\"3x4\"],.chessboard>.bsquare[data-coord=\"3x4\"],.chessboard>.recent_move[data-coord=\"3x4\"],.chessboard>.recent_source[data-coord=\"3x4\"]{left:25%;top:37.5%}.chessboard>svg[data-coord=\"3x4\"]{left:25.625%;top:38.125%}.chessboard>button[data-coord=\"3x3\"],.chessboard>button.selectedbutton[data-coord=\"3x3\"],.chessboard>.bsquare[data-coord=\"3x3\"],.chessboard>.recent_move[data-coord=\"3x3\"],.chessboard>.recent_source[data-coord=\"3x3\"]{left:25%;top:25%}.chessboard>svg[data-coord=\"3x3\"]{left:25.625%;top:25.625%}.chessboard>button[data-coord=\"3x2\"],.chessboard>button.selectedbutton[data-coord=\"3x2\"],.chessboard>.bsquare[data-coord=\"3x2\"],.chessboard>.recent_move[data-coord=\"3x2\"],.chessboard>.recent_source[data-coord=\"3x2\"]{left:25%;top:12.5%}.chessboard>svg[data-coord=\"3x2\"]{left:25.625%;top:13.125%}.chessboard>button[data-coord=\"3x1\"],.chessboard>button.selectedbutton[data-coord=\"3x1\"],.chessboard>.bsquare[data-coord=\"3x1\"],.chessboard>.recent_move[data-coord=\"3x1\"],.chessboard>.recent_source[data-coord=\"3x1\"]{left:25%;top:0}.chessboard>svg[data-coord=\"3x1\"]{left:25.625%;top:.625%}.chessboard>button[data-coord=\"4x8\"],.chessboard>button.selectedbutton[data-coord=\"4x8\"],.chessboard>.bsquare[data-coord=\"4x8\"],.chessboard>.recent_move[data-coord=\"4x8\"],.chessboard>.recent_source[data-coord=\"4x8\"]{left:37.5%;top:87.5%}.chessboard>svg[data-coord=\"4x8\"]{left:38.125%;top:88.125%}.chessboard>button[data-coord=\"4x7\"],.chessboard>button.selectedbutton[data-coord=\"4x7\"],.chessboard>.bsquare[data-coord=\"4x7\"],.chessboard>.recent_move[data-coord=\"4x7\"],.chessboard>.recent_source[data-coord=\"4x7\"]{left:37.5%;top:75%}.chessboard>svg[data-coord=\"4x7\"]{left:38.125%;top:75.625%}.chessboard>button[data-coord=\"4x6\"],.chessboard>button.selectedbutton[data-coord=\"4x6\"],.chessboard>.bsquare[data-coord=\"4x6\"],.chessboard>.recent_move[data-coord=\"4x6\"],.chessboard>.recent_source[data-coord=\"4x6\"]{left:37.5%;top:62.5%}.chessboard>svg[data-coord=\"4x6\"]{left:38.125%;top:63.125%}.chessboard>button[data-coord=\"4x5\"],.chessboard>button.selectedbutton[data-coord=\"4x5\"],.chessboard>.bsquare[data-coord=\"4x5\"],.chessboard>.recent_move[data-coord=\"4x5\"],.chessboard>.recent_source[data-coord=\"4x5\"]{left:37.5%;top:50%}.chessboard>svg[data-coord=\"4x5\"]{left:38.125%;top:50.625%}.chessboard>button[data-coord=\"4x4\"],.chessboard>button.selectedbutton[data-coord=\"4x4\"],.chessboard>.bsquare[data-coord=\"4x4\"],.chessboard>.recent_move[data-coord=\"4x4\"],.chessboard>.recent_source[data-coord=\"4x4\"]{left:37.5%;top:37.5%}.chessboard>svg[data-coord=\"4x4\"]{left:38.125%;top:38.125%}.chessboard>button[data-coord=\"4x3\"],.chessboard>button.selectedbutton[data-coord=\"4x3\"],.chessboard>.bsquare[data-coord=\"4x3\"],.chessboard>.recent_move[data-coord=\"4x3\"],.chessboard>.recent_source[data-coord=\"4x3\"]{left:37.5%;top:25%}.chessboard>svg[data-coord=\"4x3\"]{left:38.125%;top:25.625%}.chessboard>button[data-coord=\"4x2\"],.chessboard>button.selectedbutton[data-coord=\"4x2\"],.chessboard>.bsquare[data-coord=\"4x2\"],.chessboard>.recent_move[data-coord=\"4x2\"],.chessboard>.recent_source[data-coord=\"4x2\"]{left:37.5%;top:12.5%}.chessboard>svg[data-coord=\"4x2\"]{left:38.125%;top:13.125%}.chessboard>button[data-coord=\"4x1\"],.chessboard>button.selectedbutton[data-coord=\"4x1\"],.chessboard>.bsquare[data-coord=\"4x1\"],.chessboard>.recent_move[data-coord=\"4x1\"],.chessboard>.recent_source[data-coord=\"4x1\"]{left:37.5%;top:0}.chessboard>svg[data-coord=\"4x1\"]{left:38.125%;top:.625%}.chessboard>button[data-coord=\"5x8\"],.chessboard>button.selectedbutton[data-coord=\"5x8\"],.chessboard>.bsquare[data-coord=\"5x8\"],.chessboard>.recent_move[data-coord=\"5x8\"],.chessboard>.recent_source[data-coord=\"5x8\"]{left:50%;top:87.5%}.chessboard>svg[data-coord=\"5x8\"]{left:50.625%;top:88.125%}.chessboard>button[data-coord=\"5x7\"],.chessboard>button.selectedbutton[data-coord=\"5x7\"],.chessboard>.bsquare[data-coord=\"5x7\"],.chessboard>.recent_move[data-coord=\"5x7\"],.chessboard>.recent_source[data-coord=\"5x7\"]{left:50%;top:75%}.chessboard>svg[data-coord=\"5x7\"]{left:50.625%;top:75.625%}.chessboard>button[data-coord=\"5x6\"],.chessboard>button.selectedbutton[data-coord=\"5x6\"],.chessboard>.bsquare[data-coord=\"5x6\"],.chessboard>.recent_move[data-coord=\"5x6\"],.chessboard>.recent_source[data-coord=\"5x6\"]{left:50%;top:62.5%}.chessboard>svg[data-coord=\"5x6\"]{left:50.625%;top:63.125%}.chessboard>button[data-coord=\"5x5\"],.chessboard>button.selectedbutton[data-coord=\"5x5\"],.chessboard>.bsquare[data-coord=\"5x5\"],.chessboard>.recent_move[data-coord=\"5x5\"],.chessboard>.recent_source[data-coord=\"5x5\"]{left:50%;top:50%}.chessboard>svg[data-coord=\"5x5\"]{left:50.625%;top:50.625%}.chessboard>button[data-coord=\"5x4\"],.chessboard>button.selectedbutton[data-coord=\"5x4\"],.chessboard>.bsquare[data-coord=\"5x4\"],.chessboard>.recent_move[data-coord=\"5x4\"],.chessboard>.recent_source[data-coord=\"5x4\"]{left:50%;top:37.5%}.chessboard>svg[data-coord=\"5x4\"]{left:50.625%;top:38.125%}.chessboard>button[data-coord=\"5x3\"],.chessboard>button.selectedbutton[data-coord=\"5x3\"],.chessboard>.bsquare[data-coord=\"5x3\"],.chessboard>.recent_move[data-coord=\"5x3\"],.chessboard>.recent_source[data-coord=\"5x3\"]{left:50%;top:25%}.chessboard>svg[data-coord=\"5x3\"]{left:50.625%;top:25.625%}.chessboard>button[data-coord=\"5x2\"],.chessboard>button.selectedbutton[data-coord=\"5x2\"],.chessboard>.bsquare[data-coord=\"5x2\"],.chessboard>.recent_move[data-coord=\"5x2\"],.chessboard>.recent_source[data-coord=\"5x2\"]{left:50%;top:12.5%}.chessboard>svg[data-coord=\"5x2\"]{left:50.625%;top:13.125%}.chessboard>button[data-coord=\"5x1\"],.chessboard>button.selectedbutton[data-coord=\"5x1\"],.chessboard>.bsquare[data-coord=\"5x1\"],.chessboard>.recent_move[data-coord=\"5x1\"],.chessboard>.recent_source[data-coord=\"5x1\"]{left:50%;top:0}.chessboard>svg[data-coord=\"5x1\"]{left:50.625%;top:.625%}.chessboard>button[data-coord=\"6x8\"],.chessboard>button.selectedbutton[data-coord=\"6x8\"],.chessboard>.bsquare[data-coord=\"6x8\"],.chessboard>.recent_move[data-coord=\"6x8\"],.chessboard>.recent_source[data-coord=\"6x8\"]{left:62.5%;top:87.5%}.chessboard>svg[data-coord=\"6x8\"]{left:63.125%;top:88.125%}.chessboard>button[data-coord=\"6x7\"],.chessboard>button.selectedbutton[data-coord=\"6x7\"],.chessboard>.bsquare[data-coord=\"6x7\"],.chessboard>.recent_move[data-coord=\"6x7\"],.chessboard>.recent_source[data-coord=\"6x7\"]{left:62.5%;top:75%}.chessboard>svg[data-coord=\"6x7\"]{left:63.125%;top:75.625%}.chessboard>button[data-coord=\"6x6\"],.chessboard>button.selectedbutton[data-coord=\"6x6\"],.chessboard>.bsquare[data-coord=\"6x6\"],.chessboard>.recent_move[data-coord=\"6x6\"],.chessboard>.recent_source[data-coord=\"6x6\"]{left:62.5%;top:62.5%}.chessboard>svg[data-coord=\"6x6\"]{left:63.125%;top:63.125%}.chessboard>button[data-coord=\"6x5\"],.chessboard>button.selectedbutton[data-coord=\"6x5\"],.chessboard>.bsquare[data-coord=\"6x5\"],.chessboard>.recent_move[data-coord=\"6x5\"],.chessboard>.recent_source[data-coord=\"6x5\"]{left:62.5%;top:50%}.chessboard>svg[data-coord=\"6x5\"]{left:63.125%;top:50.625%}.chessboard>button[data-coord=\"6x4\"],.chessboard>button.selectedbutton[data-coord=\"6x4\"],.chessboard>.bsquare[data-coord=\"6x4\"],.chessboard>.recent_move[data-coord=\"6x4\"],.chessboard>.recent_source[data-coord=\"6x4\"]{left:62.5%;top:37.5%}.chessboard>svg[data-coord=\"6x4\"]{left:63.125%;top:38.125%}.chessboard>button[data-coord=\"6x3\"],.chessboard>button.selectedbutton[data-coord=\"6x3\"],.chessboard>.bsquare[data-coord=\"6x3\"],.chessboard>.recent_move[data-coord=\"6x3\"],.chessboard>.recent_source[data-coord=\"6x3\"]{left:62.5%;top:25%}.chessboard>svg[data-coord=\"6x3\"]{left:63.125%;top:25.625%}.chessboard>button[data-coord=\"6x2\"],.chessboard>button.selectedbutton[data-coord=\"6x2\"],.chessboard>.bsquare[data-coord=\"6x2\"],.chessboard>.recent_move[data-coord=\"6x2\"],.chessboard>.recent_source[data-coord=\"6x2\"]{left:62.5%;top:12.5%}.chessboard>svg[data-coord=\"6x2\"]{left:63.125%;top:13.125%}.chessboard>button[data-coord=\"6x1\"],.chessboard>button.selectedbutton[data-coord=\"6x1\"],.chessboard>.bsquare[data-coord=\"6x1\"],.chessboard>.recent_move[data-coord=\"6x1\"],.chessboard>.recent_source[data-coord=\"6x1\"]{left:62.5%;top:0}.chessboard>svg[data-coord=\"6x1\"]{left:63.125%;top:.625%}.chessboard>button[data-coord=\"7x8\"],.chessboard>button.selectedbutton[data-coord=\"7x8\"],.chessboard>.bsquare[data-coord=\"7x8\"],.chessboard>.recent_move[data-coord=\"7x8\"],.chessboard>.recent_source[data-coord=\"7x8\"]{left:75%;top:87.5%}.chessboard>svg[data-coord=\"7x8\"]{left:75.625%;top:88.125%}.chessboard>button[data-coord=\"7x7\"],.chessboard>button.selectedbutton[data-coord=\"7x7\"],.chessboard>.bsquare[data-coord=\"7x7\"],.chessboard>.recent_move[data-coord=\"7x7\"],.chessboard>.recent_source[data-coord=\"7x7\"]{left:75%;top:75%}.chessboard>svg[data-coord=\"7x7\"]{left:75.625%;top:75.625%}.chessboard>button[data-coord=\"7x6\"],.chessboard>button.selectedbutton[data-coord=\"7x6\"],.chessboard>.bsquare[data-coord=\"7x6\"],.chessboard>.recent_move[data-coord=\"7x6\"],.chessboard>.recent_source[data-coord=\"7x6\"]{left:75%;top:62.5%}.chessboard>svg[data-coord=\"7x6\"]{left:75.625%;top:63.125%}.chessboard>button[data-coord=\"7x5\"],.chessboard>button.selectedbutton[data-coord=\"7x5\"],.chessboard>.bsquare[data-coord=\"7x5\"],.chessboard>.recent_move[data-coord=\"7x5\"],.chessboard>.recent_source[data-coord=\"7x5\"]{left:75%;top:50%}.chessboard>svg[data-coord=\"7x5\"]{left:75.625%;top:50.625%}.chessboard>button[data-coord=\"7x4\"],.chessboard>button.selectedbutton[data-coord=\"7x4\"],.chessboard>.bsquare[data-coord=\"7x4\"],.chessboard>.recent_move[data-coord=\"7x4\"],.chessboard>.recent_source[data-coord=\"7x4\"]{left:75%;top:37.5%}.chessboard>svg[data-coord=\"7x4\"]{left:75.625%;top:38.125%}.chessboard>button[data-coord=\"7x3\"],.chessboard>button.selectedbutton[data-coord=\"7x3\"],.chessboard>.bsquare[data-coord=\"7x3\"],.chessboard>.recent_move[data-coord=\"7x3\"],.chessboard>.recent_source[data-coord=\"7x3\"]{left:75%;top:25%}.chessboard>svg[data-coord=\"7x3\"]{left:75.625%;top:25.625%}.chessboard>button[data-coord=\"7x2\"],.chessboard>button.selectedbutton[data-coord=\"7x2\"],.chessboard>.bsquare[data-coord=\"7x2\"],.chessboard>.recent_move[data-coord=\"7x2\"],.chessboard>.recent_source[data-coord=\"7x2\"]{left:75%;top:12.5%}.chessboard>svg[data-coord=\"7x2\"]{left:75.625%;top:13.125%}.chessboard>button[data-coord=\"7x1\"],.chessboard>button.selectedbutton[data-coord=\"7x1\"],.chessboard>.bsquare[data-coord=\"7x1\"],.chessboard>.recent_move[data-coord=\"7x1\"],.chessboard>.recent_source[data-coord=\"7x1\"]{left:75%;top:0}.chessboard>svg[data-coord=\"7x1\"]{left:75.625%;top:.625%}.chessboard>button[data-coord=\"8x8\"],.chessboard>button.selectedbutton[data-coord=\"8x8\"],.chessboard>.bsquare[data-coord=\"8x8\"],.chessboard>.recent_move[data-coord=\"8x8\"],.chessboard>.recent_source[data-coord=\"8x8\"]{left:87.5%;top:87.5%}.chessboard>svg[data-coord=\"8x8\"]{left:88.125%;top:88.125%}.chessboard>button[data-coord=\"8x7\"],.chessboard>button.selectedbutton[data-coord=\"8x7\"],.chessboard>.bsquare[data-coord=\"8x7\"],.chessboard>.recent_move[data-coord=\"8x7\"],.chessboard>.recent_source[data-coord=\"8x7\"]{left:87.5%;top:75%}.chessboard>svg[data-coord=\"8x7\"]{left:88.125%;top:75.625%}.chessboard>button[data-coord=\"8x6\"],.chessboard>button.selectedbutton[data-coord=\"8x6\"],.chessboard>.bsquare[data-coord=\"8x6\"],.chessboard>.recent_move[data-coord=\"8x6\"],.chessboard>.recent_source[data-coord=\"8x6\"]{left:87.5%;top:62.5%}.chessboard>svg[data-coord=\"8x6\"]{left:88.125%;top:63.125%}.chessboard>button[data-coord=\"8x5\"],.chessboard>button.selectedbutton[data-coord=\"8x5\"],.chessboard>.bsquare[data-coord=\"8x5\"],.chessboard>.recent_move[data-coord=\"8x5\"],.chessboard>.recent_source[data-coord=\"8x5\"]{left:87.5%;top:50%}.chessboard>svg[data-coord=\"8x5\"]{left:88.125%;top:50.625%}.chessboard>button[data-coord=\"8x4\"],.chessboard>button.selectedbutton[data-coord=\"8x4\"],.chessboard>.bsquare[data-coord=\"8x4\"],.chessboard>.recent_move[data-coord=\"8x4\"],.chessboard>.recent_source[data-coord=\"8x4\"]{left:87.5%;top:37.5%}.chessboard>svg[data-coord=\"8x4\"]{left:88.125%;top:38.125%}.chessboard>button[data-coord=\"8x3\"],.chessboard>button.selectedbutton[data-coord=\"8x3\"],.chessboard>.bsquare[data-coord=\"8x3\"],.chessboard>.recent_move[data-coord=\"8x3\"],.chessboard>.recent_source[data-coord=\"8x3\"]{left:87.5%;top:25%}.chessboard>svg[data-coord=\"8x3\"]{left:88.125%;top:25.625%}.chessboard>button[data-coord=\"8x2\"],.chessboard>button.selectedbutton[data-coord=\"8x2\"],.chessboard>.bsquare[data-coord=\"8x2\"],.chessboard>.recent_move[data-coord=\"8x2\"],.chessboard>.recent_source[data-coord=\"8x2\"]{left:87.5%;top:12.5%}.chessboard>svg[data-coord=\"8x2\"]{left:88.125%;top:13.125%}.chessboard>button[data-coord=\"8x1\"],.chessboard>button.selectedbutton[data-coord=\"8x1\"],.chessboard>.bsquare[data-coord=\"8x1\"],.chessboard>.recent_move[data-coord=\"8x1\"],.chessboard>.recent_source[data-coord=\"8x1\"]{left:87.5%;top:0}.chessboard>svg[data-coord=\"8x1\"]{left:88.125%;top:.625%}";
},{}],2:[function(require,module,exports){

var bc={};


bc.acode="a".charCodeAt()
bc.size=8
bc.options={
  valid_colors:{
    white:true,
    black:true
  },
  valid_names:{
    king:"k",
    knight:"n",
    pawn:"p",
    bishop:"b",
    rook:"r",
    queen:"q",
  }
};

bc.pcodes=(function () {
  var pnames;
  pnames=bc.options.valid_names
  var o={}
  var name,code
  for(name in pnames){
    code=pnames[name]
    o[code]=name
  }
  return o
})()

bc.homerow="rnbkqbnr".split("").map(function (pcode) {
  if(!(pcode in bc.pcodes)){
    throw new Error("no match "+pcode)
  }
  
  return bc.pcodes[pcode]
});

module.exports=bc;

},{}],3:[function(require,module,exports){

var type_checker=require("type_checker")
var assert=require("assert")
var piece=require("./piece.js")

var path=require("path");

var EE=require("events").EventEmitter;
var util=require("util")

var position=require("./position.js")
var dcopy=require("dcopy");

var board_util=require("./board_util.js");
var bconstants=require("./board_constants.js");



var window=(function (){return this;})();

var imgs=piece.imgs;
var indexes="bycolortype,bycolor,bycol,byrow,buttons,bypid".split(",");

var BoardState=function () {
  EE.call(this)
  var me=this;
  this.animating=0;
  this.positions={}
  this.history=[];
  this.bycolor={}
  this.bypid={};
  this["white castled"]=0;
  this["black castled"]=0;
  this.isboard=true;
  this.bytype={}
  this.supressemit=0;
  this.turn="white";
  indexes.forEach(function (pname) {
    me[pname]={};
  });
}
util.inherits(BoardState,EE);
BoardState.prototype.animation_notify=function (t) {
  this.animating++;
  this.emit("animating")
  var me=this;
  setTimeout(function () {
    me.animating--;
    if(!me.animating)
      me.emit("animated")
  },t*1E3);
};

BoardState.prototype.add_piece=function (which,loc) {
  var pcode
  if(typeof loc==typeof "")
    loc=new position(loc);
  if(loc!==null)
    type_checker.object(loc)
  
  var pobj
  if(typeof which==typeof ""){
    which=which.toLowerCase()
    pobj=new piece(which)
  } else{
    pobj=which;
    which=pobj.toString();
  }
  
  if(!pobj.id){
    var tryid=JSON.stringify([which,loc.toString(),this.history.length])
    assert(!(tryid in this.bypid))
    this.bypid[tryid]=pobj;
    pobj.id=tryid;
  }
  if(pobj.id in this.bypid){
    assert(this.bypid[pobj.id]==pobj)
  } else{
    this.bypid[pobj.id]=pobj;
  }
  
  if(loc===null){
    pobj.position=null;
    return pobj;
  }
  
  var where=loc.toString()
  if(where in this.positions && this.positions[where]){
    throw new Error(where+" is occupied by "+this.positions[where])
  }
  this.bycolor[pobj.color][where]=pobj
  this.bytype[pobj.pname][where]=pobj
  this.bycol[loc.x][where]=pobj
  this.byrow[loc.y][where]=pobj
  this.bycolortype[pobj.toString()][where]=pobj
  this.positions[where]=pobj
  pobj.position=loc;
  
  if(!this.supressemit)
    this.emit("add_piece",pobj,loc)
  
  
  return pobj;
}
BoardState.prototype.move_piece=function(pobj, loc){
  
  
  if(typeof loc==typeof "")
    loc=new position(loc);
  
  type_checker.object(loc);
  type_checker.object(pobj)
  
  this.supressemit+=1;
  var from=pobj.position.toString()
  this.remove_piece(pobj);
  this.add_piece(pobj,loc);
  this.supressemit-=1;
  if(!this.supressemit){
    this.emit("move_piece",new position(from),loc,pobj);
  }
};
BoardState.prototype.promote=function(pobj,topiece){
  type_checker.object(pobj);
  type_checker.string(topiece);
  if(pobj.position===null){
    console.log(pobj.id,pobj,bs)
    throw new Error("not on board?")
  }
  
  var pos=pobj.position;
  
  this.remove_piece(pobj);
  var np=pobj.color+" "+topiece;
  var pcopy=new position(pos.toString());
  
  var npobj=this.add_piece(np,pcopy);
  
  npobj.jumped=pobj.jumped;
  npobj.moved=pobj.moved;
  
  return npobj;
};
BoardState.prototype.forget_piece=function (pobj) {
  var rval=this.remove_piece(pobj);
  assert(rval);
  delete this.bypid[pobj.id];
  return true;
}
BoardState.prototype.remove_piece=function(pobj){
  type_checker.object(pobj)
  if(!pobj.position)
    throw new Error("not on board, no position")
  var where=pobj.position.toString()
  var pobj=this.positions[where]
  type_checker.uses_interface(pobj,piece.interface)
  
  window.lastbs=this;
  window.lastpobj=pobj;
  assert(pobj===this.bycolortype[pobj.toString()][where],pobj+" not at "+where)
  assert(pobj===this.bycolor[pobj.color][where]);
  assert(pobj===this.bytype[pobj.pname][where]);
  delete this.bycolor[pobj.color][where];
  delete this.bycolortype[pobj.toString()][where];
  delete this.bytype[pobj.pname][where];
  delete this.positions[where];
  delete this.bycol[pobj.position.x][where];
  delete this.byrow[pobj.position.y][where];
  
  pobj.position=null;
  
  if(!this.supressemit)
    this.emit("remove_piece",pobj,new position(where))
  
  
  return true
}

var jcopy={};
"positions,history,animating,turn,taken".split(",").forEach(function (pname) {
  jcopy[pname]=true;
})
BoardState.prototype.toJSON=function () {
  var vcopy={};
  for(var k in jcopy){
    vcopy[k]=this[k];
  }
  return vcopy;
}
BoardState.prototype.initialize=function (optional) {
  this.animating=0;
  this.positions={}
  this.history=[];
  this.bycolor={}
  this.bytype={}
  this.bypid={};
  this.turn="white";
  var me=this;
  indexes.forEach(function (idx) {
    me[idx]={};
  });
  
  
  for(var c in bconstants.options.valid_colors){
    this.bycolor[c]={}
    for(var pn in bconstants.options.valid_names){
      this.bycolortype[c+" "+pn]={}
    }
  }
  this.bytype={}
  for(var pn in bconstants.options.valid_names){
    this.bytype[pn]={}
  }
  for (var i = 0; i < bconstants.size; i++) {
    var n=i+1;
    this.bycol[n]={}
    this.byrow[n]={}
  };
  this.taken=[]
  var me=this
  this.turn="white"
  bconstants.homerow.forEach(function (pname,i) {
    if(optional=="empty")
      return;
    var pi=i+1;
    [
      {which:"white "+pname,where:new position(pi,1)},
      {which:"white pawn",where:new position(pi,2)},
      {which:"black "+pname,where:new position(pi,8)},
      {which:"black pawn",where:new position(pi,7)}
    ].forEach(function (r) {
      if(optional==="nopawns"&&/pawn/gi.test(r.which))
        return;
      me.add_piece(r.which,r.where)
    })
  });
  this.emit("initialize")
}



BoardState.prototype.browser_element=require("./board_state_sub/browser_element.js");
BoardState.prototype.add_human=require("./board_state_sub/add_human.js");
BoardState.prototype.install_key_listeners=require("./board_state_sub/install_key_listeners.js");
BoardState.prototype.clone=require("./board_state_sub/clone.js");
BoardState.prototype.print=require("./board_state_sub/print.js");
BoardState.prototype._check_all=require("./board_state_sub/_check_all.js");
BoardState.prototype.flip_html_board=require("./board_state_sub/flip_html_board.js");
BoardState.prototype.undo_move=require("./board_state_sub/undo_move.js");
BoardState.prototype.valid_moves_by_color=require("./board_state_sub/valid_moves_by_color.js");
BoardState.prototype.valid_moves_by_pos=require("./board_state_sub/valid_moves_by_pos.js");
BoardState.prototype.valid_moves=require("./board_state_sub/valid_moves.js");
BoardState.prototype.perform_move=require("./board_state_sub/perform_move.js");
BoardState.prototype.check_check=require("./board_state_sub/check_check.js");

BoardState.fromJSON=function(bj){
  var btmp=JSON.parse(bj);
  
  
  var bs=new BoardState();
  bs.initialize("empty");
  
  Object.keys(btmp.positions).forEach(function (pos) {
    var pobj=btmp.positions[pos];
    pobj.__proto__=piece.prototype;
    var pnew=bs.add_piece(pobj.toString(),pobj.position.toString());
    for(var k in pobj){
      if(k=="position")
        continue;
      pnew[k]=pobj[k];
    }
  });
  
  bs.turn=btmp.turn;
  
  return bs;
};

var current_emit = BoardState.prototype.emit;

BoardState.prototype.emit=function(evtname){
  if(this.debug){
    console.log(evtname,arguments);
  }
  return current_emit.apply(this,arguments);
};

board_util.configure();

module.exports=BoardState;

},{"./board_constants.js":2,"./board_state_sub/_check_all.js":4,"./board_state_sub/add_human.js":5,"./board_state_sub/browser_element.js":6,"./board_state_sub/check_check.js":7,"./board_state_sub/clone.js":8,"./board_state_sub/flip_html_board.js":9,"./board_state_sub/install_key_listeners.js":10,"./board_state_sub/perform_move.js":11,"./board_state_sub/print.js":12,"./board_state_sub/undo_move.js":13,"./board_state_sub/valid_moves.js":14,"./board_state_sub/valid_moves_by_color.js":15,"./board_state_sub/valid_moves_by_pos.js":16,"./board_util.js":17,"./piece.js":34,"./position.js":35,"assert":"assert","dcopy":29,"events":38,"path":40,"type_checker":33,"util":43}],4:[function(require,module,exports){

module.exports=function _checkall(note) {
  var me=this;
  Object.keys(this.positions).forEach(function (pos) {
    var piece=me.positions[pos];
    assert(piece===me.bycolortype[piece.toString()][pos],"match fail "+pos+" "+piece+"\n"+note);
  })
  return true;
};

},{}],5:[function(require,module,exports){
(function (process){

var window=(function(){return this;})();
var board_constants=require("../board_constants.js");
var position=require("../position.js");
var assert=require("assert");

var piece=require("../piece.js");

var add_human=function (color) {
  assert(process.title=="browser");
  
  assert(color in board_constants.options.valid_colors);
  assert(this.browser_element);
  
  var bs=this;
  
  var document=window.document;
  
  if(this.valid_humans){
    this.valid_humans[color]=true;
    return;
  }
  this.valid_humans={};
  this.valid_humans[color]=true;
  
  var be=this.browser_element();
  var me=this;
  
  var selected_piece=null;
  var vmoves=[];
  var myellow=[];
  
  var vmoves_by_to={};
  
  var highlight_moves=function (new_yellow) {
    while(myellow.length){
      var de=myellow.pop()
      de.parentNode.removeChild(de)
    }
    var first=true;
    while(new_yellow.length){
      var nde=new_yellow.pop();
      me.html_board.appendChild(nde);
      if(first){
        first=false;
        nde.focus();
      }
      myellow.push(nde);
    }
  };
  var promo=null;
  var promotray=null;
  var promo_hide=function () {
    promo.style.zIndex="-5";
    promotray.innerHTML="";
  }
  var promo_popup=function (mlist) {
    if(!promo){
      promo=document.createElement("div")
      promo.className="promotion";
      promo.appendChild(document.createTextNode("Select a promotion"));
      promotray=document.createElement("div");
      promotray.className="promotray";
      promo.appendChild(promotray);
      be.appendChild(promo);
    }
    promo.style.zIndex=5;
    var color=me.turn;
    promotray.innerHTML="";
    mlist.forEach(function (mv) {
      assert(mv.promo);
      var ptemp=new piece(color+" "+mv.promo);
      var pbe=ptemp.browser_element();
      var btn=document.createElement("div");
      btn.appendChild(pbe);
      btn.setAttribute("role","button")
      btn.addEventListener("click",function (event) {
        event.preventDefault();
        me.perform_move(mv);
        promo_hide();
      },false);
      promotray.appendChild(btn);
    });
  };
  var selected_bclick=function (event) {
    if(event)
      event.preventDefault();
    highlight_moves([]);
    var to=this.getAttribute("data-coord");
    var mtodo=vmoves_by_to[to];
    
    if(Array.isArray(mtodo)){
      promo_popup(mtodo);
      return;
    }
    
    if(mtodo.invalid){
      selected_piece=null;
      return;
    }
    
    assert(mtodo);
    me.perform_move(mtodo);
  };
  
  me.on("bsquare_click",function (where,domele) {
    vmoves=[];
    vmoves_by_to={};
    var oldselection=selected_piece;
    if(selected_piece){
      highlight_moves([])
      selected_piece=null;
    }
    selected_piece=me.positions[where]
    if(oldselection==selected_piece){
      selected_piece=null;
      oldselection=null;
      return;
    }
    if(selected_piece){
      var invalidcolor=false;
      if(selected_piece.color==me.turn && selected_piece.color in me.valid_humans) {
        vmoves=me.valid_moves_by_pos(selected_piece.position);
      }
      
      if(!vmoves.length){
        vmoves=[
          {
            invalid:true,
            to:new position(selected_piece.position)
          }
        ];
      }
      vmoves.sort(function (a, b) {
        assert(b.to&& a.to);
        var ydiff=b.to.y-a.to.y;
        if(ydiff)
          return ydiff;
        var xdiff=b.to.x-a.to.x;
        return xdiff;
      })
      highlight_moves(vmoves.map(function (mv,i) {
        var tostr=mv.to.toString();
        if(!vmoves_by_to[tostr])
          vmoves_by_to[tostr]=mv;
        else{
          if(Array.isArray(vmoves_by_to[tostr])){
            vmoves_by_to[tostr].push(mv)
          } else
            vmoves_by_to[tostr]=[vmoves_by_to[tostr],mv];
        }
        
        
        var btmp=document.createElement('button');
        btmp.appendChild(document.createElement("div"))
        btmp.className="selectedbutton";
        if(mv.invalid)
          btmp.className+=" invalidmove";
        btmp.setAttribute("data-coord",mv.to.toString());
        btmp.addEventListener("click",function (event) {
          event.preventDefault();
          selected_bclick.call(this);
          domele.focus();
          selected_piece=null;
        },false);
        return btmp;
      }));
    }
  })
  return this;
};

module.exports=add_human;

}).call(this,require('_process'))
},{"../board_constants.js":2,"../piece.js":34,"../position.js":35,"_process":41,"assert":"assert"}],6:[function(require,module,exports){
(function (process){

var window=(function(){return this;})();


var csstxt="";
if(process.title=="browser"){
  csstxt=require("../board.less")
}

var bsquare_click=function (bs) {
  return function (event) {
    event.preventDefault();
    bs.emit("bsquare_click",this.getAttribute("data-coord"),this);
  };
};


module.exports=function browser_element(parent) {
  if(process.title!="browser")
    throw new Error("not a browser")
  if(this.html_board)
    return this.html_board;
  
  var me=this;
  var document=window.document;
  var head=document.querySelector("head")
  var bsc=document.querySelector("#board_state_css")
  
  var anitime=.2;
  
  if(!bsc){
    bsc=document.createElement("style")
    bsc.appendChild(document.createTextNode(csstxt.toString()+".chessboard>svg{transition:left "+anitime+"s,top "+anitime+"s;}"))
    head.appendChild(bsc)
  }
  var hb=document.createElement("div")
  hb.className="chessboard";
  
  Object.defineProperty(this,"html_board",{
    enumerable:false,value:hb
  })
  
  var hpos={};
  
  
  Object.defineProperty(this,"html_board_pos",{
    enumerable:false,value:hpos
  })
  
  var fillsquare=function (piece,sqr) {
    var pcolor=null
    var pname="empty"
    var psvg=""
    if(piece){
      pname=piece.pname
      pcolor=piece.color
      psvg=imgs[pname]
    }
    sqr.innerHTML=psvg;
    if(pcolor){
      var oppcolor=board_util.opposite_color(pcolor)
      var svg_ele=sqr.querySelector("svg");
      svg_ele.setAttribute("class",""+pname+" "+pcolor)
    }
  }
  var svg_pos=function(piece,pos){
    var pbe=piece.browser_element();
    pbe.setAttribute("data-coord",pos);
    if(!pbe.parentNode)
      me.html_board.appendChild(pbe)
  }
  var square_map={};
  
  for(var i=1;i<=8;i++){
    for (var j = 1; j <= 8; j++) {
      var oddoreven=((i+j)%2 ? "odd" : "even")
      var btn=document.createElement("button");
      var sqr=document.createElement("div")
      sqr.className="bsquare "+oddoreven
      var posstr=j+"x"+i;
      me.buttons[posstr]=btn;
      btn.setAttribute("data-coord",posstr);
      btn.addEventListener("click",bsquare_click(me),false);
      sqr.setAttribute("data-coord",posstr);
      hpos[posstr]=sqr;
      var piece=this.positions[posstr];
      if(piece)
        svg_pos(piece,posstr)
      square_map[posstr]=sqr;
      hb.appendChild(btn);
      hb.appendChild(sqr);
    };
  }
  Object.defineProperty(this,"recent_square",{
    configurable:true,
    value:document.createElement("div"),
    enumerable:false
  });
  Object.defineProperty(this,"recent_source",{
    configurable:true,
    value:document.createElement("div"),
    enumerable:false,
  })
  // this.recent_square=;
  this.recent_square.appendChild(document.createElement("div"))
  this.recent_square.setAttribute("class","recent_move")
  
  this.recent_source.appendChild(document.createElement("div"))
  this.recent_source.setAttribute("class","recent_source")
  
  var set_new_recent=function (fp, np) {
    if(!fp){
      if(me.recent_source.parentNode)
        me.recent_source.parentNode.removeChild(me.recent_source);
    } else{
      me.recent_source.setAttribute("data-coord",fp);
      if(!me.recent_source.parentNode)
        me.html_board.appendChild(me.recent_source);
    }
    me.recent_square.setAttribute("data-coord",np);
    if(!me.recent_square.parentNode){
      me.html_board.appendChild(me.recent_square)
    }
  };
  this.on("add_piece",function (pobj,loc) {
    svg_pos(pobj,loc.toString())
    set_new_recent(null,loc.toString())
  })
  this.on("move_piece",function(from,to,pobj){
    var pbe=pobj.browser_element();
    pbe.setAttribute("data-coord",to.toString());
    set_new_recent(from.toString(),to.toString());
    me.animation_notify(anitime);
  })
  this.on("remove_piece",function (pobj,loc) {
    var pbe=pobj.browser_element()
    if(pbe.parentNode)
      pbe.parentNode.removeChild(pbe)
  })
  process.nextTick(function () {
    me.emit("html_board",me.html_board)
  });
  
  return hb;
};
}).call(this,require('_process'))
},{"../board.less":1,"_process":41}],7:[function(require,module,exports){
var type_checker=require("type_checker");
var board_util=require("../board_util.js");
var assert=require("assert")
var piece=require("../piece.js")
var position=require("../position.js")

module.exports=function check_check (color) {
  var kingloc=this.bycolortype[color+" king"];
  var myking,kpos;
  myking=false;
  Object.keys(kingloc).forEach(function (kcoor) {
    assert(!myking);
    myking=kingloc[kcoor];
    kpos=new position(kcoor);
  })
  assert(myking);
  
  var preh=this.history.length;
  
  
  var oppc=board_util.opposite_color(color);
  var vmc=this.valid_moves_by_color(oppc,true);
  
  var kposstr=kpos.toString();
  
  var kingsafe=vmc.every(function (mv) {
    if(mv.to.toString()==kposstr)
      return false;
    if(mv.target&&mv.target.toString()==kposstr)
      return false;
    return true;
  });
  assert(this.history.length==preh,"something mvoed")
  
  if(!kingsafe)
    return true;
  return false;
}


},{"../board_util.js":17,"../piece.js":34,"../position.js":35,"assert":"assert","type_checker":33}],8:[function(require,module,exports){

var assert=require("assert");
var dcopy=require("dcopy");

module.exports=function clone() {
  var me=this;
  
  var board_state=Object.getPrototypeOf(this).constructor;
  
  var bcopy=new board_state();
  bcopy.initialize("empty");
  bcopy.turn=this.turn;
  
  assert(Object.keys(this.positions).length,"Copying none?")
  
  Object.keys(this.bypid).forEach(function (pid) {
    var pobj=me.bypid[pid];
    var pos=pobj.position ? pobj.position.toString() : null;
    
    if(pos===null)
      assert(pobj.taken);
    
    var pcopy=new piece(pobj.toString())
    
    Object.keys(pobj).forEach(function (pkey) {
      var pv=pobj[pkey];
      if(typeof pv==typeof ""||typeof pv==typeof 1||typeof pv==typeof true)
        pcopy[pkey]=pobj[pkey];
    });
    
    assert(pobj.id);
    assert(pcopy.id);
    assert(pobj.id==pcopy.id)
    
    bcopy.add_piece(pcopy,pos);
    
    assert(bcopy.bypid[pcopy.id]==pcopy)
    assert(pobj.id==pcopy.id)
  });
  
  bcopy.taken=dcopy(me.taken);
  bcopy.history=dcopy(me.history);
  
  
  assert(this.compare(bcopy));
  
  return bcopy;
};


},{"assert":"assert","dcopy":29}],9:[function(require,module,exports){

var window=(function(){return this;})();

module.exports=function flip_html_board() {
  if(this.flip_css){
    this.flip_css.parentNode.removeChild(this.flip_css);
    delete this.flip_css;
    return true;
  }
  var document=window.document;
  var head=document.querySelector("head")
  var fpc=this.flip_css=document.createElement("style");
  fpc.appendChild(document.createTextNode(".chessboard{transform:rotate(180deg);}.chessboard svg{transform:rotate(180deg);}"));
  head.appendChild(fpc);
  return true;
};

},{}],10:[function(require,module,exports){


var window=(function(){return this;})();
var keycode=require("keycode");
var assert=require("assert");

var position=require("../position.js");

var kmap={};
var keymove=function (direction,dx,dy) {
  return function(event){
    var ae=document.activeElement;
    var dc=ae.getAttribute("data-coord");
    if(!dc)
      return;
    event.preventDefault();
    // console.log("arrow move");
    var pos=new position(dc);
    var npos=new position({
      x:(pos.x-1+dx+8)%8+1,
      y:(pos.y-1+dy+8)%8+1,
    });
    var mall=be.querySelectorAll("button[data-coord=\""+npos+"\"]");
    var last=mall[mall.length-1];
    last.focus();
  };
};
kmap[keycode("up")]=keymove("up",0,-1);
kmap[keycode("down")]=keymove("down",0,1);
kmap[keycode("left")]=keymove("left",-1,0);
kmap[keycode("right")]=keymove("right",1,0);

var install_key_listeners=function () {
  assert(!this.key_listeners_installed);
  this.key_listeners_installed=true;
  
  var document=window.document;
  
  document.addEventListener("keydown",function (event) {
    if(event.keyCode in kmap){
      kmap[event.keyCode](event);
    }
  },false);
};

module.exports=install_key_listeners;


},{"../position.js":35,"assert":"assert","keycode":44}],11:[function(require,module,exports){
var type_checker=require("type_checker");
var board_util=require("../board_util.js");
var assert=require("assert")
var piece=require("../piece.js")
var position=require("../position.js")

var perform_move_known_keys=(function () {
  var o={};
  "from,to,skipverify,rook_from,rook_to,castle,promo,enpassant,target,isjump,undoable".split(",")
  .forEach(function (k) {
    o[k]=true;
  })
  return o;
})();

module.exports=function perform_move (mvdesc) {
  type_checker.object(mvdesc);
  
  Object.keys(mvdesc).forEach(function (k) {
    assert(perform_move_known_keys[k],"Unknown key "+k);
  });
  
  
  var uclone=false;
  if(mvdesc.undoable){
    this.supressemit+=1;
  }
  
  var from=new position(mvdesc.from);
  var to=new position(mvdesc.to);
  
  var sourcepiece=this.positions[from.toString()]
  assert(sourcepiece,"no piece found at "+from);
  if(sourcepiece.color!==this.turn){
    var e=new Error(sourcepiece+" piece at "+sourcepiece.position+", turn is "+this.turn);
    console.log(sourcepiece,this.history,this.turn,mvdesc)
    throw e;
  }
  
  if(!mvdesc.skipverify){
    var possible=this.valid_moves_by_pos(from)
    var notfound=possible.every(function (e) {
      if(e.toString()==to.toString())
        return false;
      return true;
    })
    if(notfound)
      throw new Error("invalid move?")
  }
  var targetpiece=null;
  targetpiece=this.positions[to.toString()]
  if(mvdesc.enpassant){
    assert(!targetpiece)
    assert(mvdesc.target)
    targetpiece=this.positions[mvdesc.target.toString()]
  }
  var target_loc=null;
  if(targetpiece){
    target_loc=targetpiece.position.toString();
    this.remove_piece(targetpiece)
    this.taken.push(targetpiece.id)
    
    targetpiece.taken=true
  }
  if(mvdesc.isjump){
    sourcepiece.jumped=true;
  }
  var original=new piece(sourcepiece.toString());
  
  this.move_piece(sourcepiece,to)
  
  var prepromo_id=null;
  if(mvdesc.promo){
    assert(sourcepiece.id);
    prepromo_id=sourcepiece.id;
    sourcepiece=this.promote(sourcepiece,mvdesc.promo);
  }
  var rookpiece=null;
  if(mvdesc.castle){
    
    var castlekey=sourcepiece.color+" castled";
    assert(!this[castlekey])
    
    this[castlekey]++;
    
    assert(mvdesc.rook_to&&mvdesc.rook_from)
    rookpiece=this.positions[mvdesc.rook_from.toString()];
    assert(rookpiece);
    this.move_piece(rookpiece,mvdesc.rook_to);
    
    rookpiece.moved+=1;
  }
  sourcepiece.moved+=1;
  
  
  var notation=original.unicode()+from.notation();
  if(targetpiece){
    notation+="x";
  } else
    notation+="-";
  notation+=to.notation();
  
  var desc=original+" "+from+" to "+to;
  if(targetpiece)
    desc+=" takes "+targetpiece;
  if(mvdesc.castle){
    desc+=" castling"
  }
  if(mvdesc.promo){
    desc+=" promote to "+mvdesc.promo;
  }
  
  // assert(targetpiece.id&&sourcepiece.id)
  var hentry={
    desctxt:desc,
    mvdesc:mvdesc,
    notation:notation,
  };
  if(sourcepiece){
    assert(sourcepiece.id);
    hentry.source_id=sourcepiece.id;
  }
  if(rookpiece){
    assert(rookpiece.id);
    hentry.rook_id=rookpiece.id;
  }
  if(prepromo_id){
    hentry.prepromo_id=prepromo_id;
  }
  if(targetpiece){
    assert(targetpiece.id);
    assert(target_loc)
    hentry.target_loc=target_loc;
    hentry.target_id=targetpiece.id;
  }
  if(uclone){
    // console.log("saving clone ",uclone)
    hentry.uclone=uclone;
  }
  this.history.push(hentry);
  
  if(!this.supressemit)
    this.emit("movedesc",desc,mvdesc,notation)
  
  this.turn=board_util.opposite_color(this.turn);
  
  return true;
};

},{"../board_util.js":17,"../piece.js":34,"../position.js":35,"assert":"assert","type_checker":33}],12:[function(require,module,exports){
(function (process){

var bconstants=require("../board_constants.js");

var colors=require("colors/safe")
var pheight=3;
var pwidth=5;
module.exports=function print() {
  for (var i = 1; i <= 8; i++) {
    for(var t=0;t<pheight;t++){
      var line="";
      for (var j = 1; j <= 8; j++) {
        var posstr=j+"x"+i;
        var scolor=((i+j)%2 ? "bgBlue" : "bgBlack");
        var pcode=" ";
        var piece=this.positions[posstr];
        var pcolor="white"
        if(piece){
          pcode=bconstants.options.valid_names[piece.pname]
          if(piece.color=="black")
            pcolor="yellow";
        }
        if(t!=Math.floor(pheight/2))
          pcode=" ";
        if(process.title=="browser"){
          if(j==1)
            line+="|"
          line+=""+pcode+"|"
        } else{
          var ptmp="";
          ptmp+=(new Array(Math.floor(pwidth/2)+1)).join(" ")
          ptmp+=pcode.toUpperCase();
          ptmp+=(new Array(Math.floor(pwidth/2)+1)).join(" ")
          ptmp=colors[scolor](ptmp)
          ptmp=colors[pcolor](ptmp)
          ptmp=colors.bold(ptmp)
          line+=ptmp;
        }
      };
      console.log(line)
    }
  };
};



}).call(this,require('_process'))
},{"../board_constants.js":2,"_process":41,"colors/safe":54}],13:[function(require,module,exports){
var type_checker=require("type_checker");
var board_util=require("../board_util.js");
var assert=require("assert")
var piece=require("../piece.js")
var position=require("../position.js")

module.exports=function undo_move () {
  assert(arguments.length==0)

  var pmove=this.history.pop();
  
  // assert(pmove.uclone);
  if(pmove.uclone)
    assert(Object.keys(pmove.uclone).length)
  
  var mvdesc=pmove.mvdesc;
  
  var sid=pmove.source_id;
  assert(sid && sid in this.bypid);
  
  var tid=pmove.target_id;
  
  var tobj;
  
  if(tid){
    tobj=this.bypid[tid];
    assert(tobj.taken);
    delete tobj.taken;
  }
  var sobj=this.bypid[sid];
  
  if(mvdesc.promo){
    var preo=this.bypid[pmove.prepromo_id];
    
    assert(preo,"per obj");
    assert(preo.moved,"pre obj had not moved?")
    assert(sobj.moved,"post obj had not moved?")
    this.forget_piece(sobj);
    this.add_piece(preo,pmove.mvdesc.from)
    sobj=preo;
    // sobj.moved--;
    assert(sobj.moved,"obj had not moved?")
  } else{
    assert(sobj.moved>0)
    
    sobj.moved--;
    if(mvdesc.isjump)
      delete sobj.jumped;
    this.move_piece(sobj,mvdesc.from.toString());
  }
  
  if(mvdesc.castle){
    
    var castlekey=sobj.color+" castled";
    this[castlekey]--;
    assert(this[castlekey]===0);
    
    assert(mvdesc.rook_from&&mvdesc.rook_to)
    var rook=this.positions[mvdesc.rook_to.toString()];
    assert(rook);
    this.move_piece(rook,mvdesc.rook_from)
    rook.moved--;
    assert(rook.moved==0)
  }
  
  if(tobj){
    assert(pmove.target_loc);
    
    assert(this.taken[this.taken.length-1]==tobj.id)
    this.taken.pop();
    delete tobj.taken;
    this.add_piece(tobj,pmove.target_loc);
  }

  this.turn=board_util.opposite_color(this.turn);
  
  if(pmove.uclone)
    assert(this.compare(pmove.uclone));
  
  this.supressemit-=1;
  
  return true;
};
var prev=null;

},{"../board_util.js":17,"../piece.js":34,"../position.js":35,"assert":"assert","type_checker":33}],14:[function(require,module,exports){
module.exports=function valid_moves () {
  var cwhich=this.turn;
  return this.valid_moves_by_color(cwhich);
};

},{}],15:[function(require,module,exports){
var type_checker=require("type_checker");
var board_util=require("../board_util.js");
var assert=require("assert")
var piece=require("../piece.js")
var position=require("../position.js")
var bconstants=require("../board_constants.js");

module.exports=function valid_moves_by_color (cwhich,skipkingcheck) {
  type_checker.string(cwhich)
  var me=this;
  assert(bconstants.options.valid_colors[cwhich])
  
  var cpos=this.bycolor[cwhich]
  var mvall=[]
  Object.keys(cpos).forEach(function (pstr) {
    var p=cpos[pstr]
    if(!p)
      return;
    var mvnew=me.valid_moves_by_pos(pstr,skipkingcheck)
    
    mvall.push.apply(mvall,mvnew);
  })
  
  return mvall;
};


},{"../board_constants.js":2,"../board_util.js":17,"../piece.js":34,"../position.js":35,"assert":"assert","type_checker":33}],16:[function(require,module,exports){
var vmoves=require("../valid_moves.js");
var position=require("../position.js")
var assert=require("assert");

module.exports=function valid_moves_by_pos (pos,skipkingcheck) {
  pos=new position(pos);
  var me=this;
  var posstr=pos.toString()
  var piece=this.positions[posstr]
  if(!piece){
    throw new Error('no piece at '+posstr)
  }
  
  var piece_had_moved = piece.moved;
  
  prev="prev: "+piece+" "+pos+"";
  var pname=piece.pname;
  if(!vmoves[pname])
    throw new Error('not implemented for '+pname+' yet')
  
  var preh=this.history.length;
  var vcalc=vmoves[pname](this,piece,skipkingcheck)
  assert(this.history.length==preh,"something moved when "+pname+" was checked")
  
  var pc=piece.color;
  
  if(skipkingcheck)
    return vcalc;
  
  var bhinit=me.history.length;
  var lmv=me.history[me.history.length-1];
  
  var vnew=[]
  
  vcalc.forEach(function (mv,i) {
    assert(Object.keys(me.positions).length,"empty board?")
    // var bcopy=me.clone();
    // var targetpiece=bcopy.positions[mv.to.toString()]
    mv.skipverify=true;
    mv.undoable=true;
    
    if(bhinit!==me.history.length){
      console.log(lmv);
      throw new Error("History len should be "+bhinit+" is "+me.history.length)
    }
    if(me.turn!==pc){
      console.log(piece.toString())
      console.log(vcalc)
      console.log(me.history)
      throw new Error("not my turn? "+me.turn+" and "+pc+" index:"+i)
    }
    var hadmoved = piece.moved;
    me.perform_move(mv);
    if(bhinit+1!==me.history.length){
      console.log(bhinit)
      console.log(me.history)
      console.log(mv)
      console.log(bs);
      throw new Error("wrong len")
    }
    
    if(!me.check_check(piece.color)){
      var mnew={};
      Object.keys(mv).forEach(function (k) {
        if(k==="undoable")
          return;
        mnew[k]=mv[k];
      });
      vnew.push(mnew)
    }
    if(bhinit+1!==me.history.length){
      console.log(bhinit)
      console.log(me.history)
      console.log(mv)
      console.log(bs);
      throw new Error("wrong len")
    }
    me.undo_move();
    if(piece.moved!==hadmoved){
      console.log(mv);
    }
    assert(piece.moved===hadmoved,"piece.moved changed between doing and undoing ");
    
    if(bhinit!==me.history.length){
      console.log(bhinit)
      console.log(me.history)
      console.log(mv)
      console.log(bs);
      throw new Error("wrong len")
    }
    // assert(bhinit===me.history.length,"h should be same");
    // assert(me.compare(me));
  })

  assert(piece.moved === piece_had_moved,"piece_had_moved changed when getting valid moves")

  return vnew;
}

},{"../position.js":35,"../valid_moves.js":37,"assert":"assert"}],17:[function(require,module,exports){

var path=require("path")

var piece=require("./piece.js");
var position=require("./position.js")
var assert=require("assert")
var type_checker=require("type_checker")
var position=require("./position.js")

var bconstants=require("./board_constants.js")

var bu={};


bu.configure=function () {
  piece.configure(bu.pconfig);
  position.configure(bu.pconfig);
};


bu.to_pos=function(cd){
  type_checker.string(cd)
  var r=new RegExp("^(["+[0,bu.size-1].map(function (offset) {
    return String.fromCharCode(bconstants.acode+offset)
  }).join("-")+"])"+"(\\d+)$","gi")
  
  var m=r.exec(cd)
  if(!m)
    throw new Error("parse position error");
  var p=new position(m[1],m[2])
  assert(p.toString()==cd)
  return p
};


bu.opposite_color=function (cone) {
  assert(bconstants.options.valid_colors[cone])
  var call=Object.keys(bconstants.options.valid_colors)
  for (var i = 0; i < call.length; i++) {
    if(call[i]!=cone)
      return call[i];
  };
  throw new Error("not found")
}
bu.pconfig={
  board_util:bu,
  valid_colors:function(n){
    return !!(bconstants.options.valid_colors[n])
  },
  valid_names:function(n){
    return !!(bconstants.options.valid_names[n])
  },
  size:bconstants.size
};



module.exports=bu;

},{"./board_constants.js":2,"./piece.js":34,"./position.js":35,"assert":"assert","path":40,"type_checker":33}],18:[function(require,module,exports){
(function (process){

var assert=require("assert");
var type_checker=require("type_checker");
var piece=require("./piece.js");
var board_util=require("./board_util.js");

var nticks=0;
var nextTickDelayed=function (cb) {
  if(process.title=="browser") {
    nticks++;
    if(nticks%5==0)
      setTimeout(cb,1);
    else
      process.nextTick(cb);
  } else
    process.nextTick(cb);
};

var bot=function (bs,_options) {
  var options=_options;
  if(typeof _options==typeof "")
    options={color:_options};
  this.bs=bs;
  this.depth=(typeof options.depth==typeof undefined ? 2 : options.depth);
  this.color=options.color;
  this.delay=(typeof options.delay==typeof undefined ? 500 : options.delay);
  type_checker.string(options.color)
  type_checker.number(this.delay)
  type_checker.number(this.depth)
  
  piece.valid_colors(options.color)
  // console.log(byposcolor)
  
  var me=this;
  this._bound_try_to_move=function(){
    var args=arguments;
    setTimeout(function(){
      me.try_to_move.apply(me,args);
    },me.delay);
  };
  if(!bs.html_board)
    bs.on("movedesc",this._bound_try_to_move)
  else
    bs.on("animated",this._bound_try_to_move)
  process.nextTick(this._bound_try_to_move);
};
bot.prototype.stop=function(){
  assert(!this.stopped)
  this.stopped=true;
  this.bs.removeListener("movedesc",this._bound_try_to_move);
  this.bs.removeListener("animated",this._bound_try_to_move);
};

bot.prototype.change_board=function (nbd) {
  this.bs.removeListener("animated",this._bound_try_to_move);
  this.bs.removeListener("movedesc",this._bound_try_to_move);
  this.bs=nbd;
  nbd.on("animated",this._bound_try_to_move);
  if(!nbd.html_board)
    nbd.on("movedesc",this._bound_try_to_move);
  process.nextTick(this._bound_try_to_move);
};
bot.prototype.try_to_move=function () {
  assert(!this.stopped)
  
  var bs=this.bs;
  var mycolor=this.color;
  
  if(bs.turn==mycolor){
    // console.log("from my perspective "+mycolor)
    // console.log("board score was "+score_state_traditional(mycolor,bs))
    
    var mv=get_best(mycolor,this.depth,bs,function (mv,ns) {
      // console.log(mycolor+" plays")
      // console.log("board score is now "+ns)
      bs.perform_move(mv);
    });
  }
};

var score_state=function (perspective, bs) {
  
  var state={};
  state.number_of={};
  state.moves=0;
  
  Object.keys(bs.bycolortype).forEach(function (ptype) {
    
    var plist=Object.keys(bs.bycolortype[ptype]);
    state.number_of[ptype]=plist.length;
    plist.forEach(function (pos) {
      var pboj=bs.positions[pos];
      var mlist=bs.valid_moves_by_pos(pos);
      state.moves+=mlist.length;
    })
  })
};


var bypos={};
bypos.bishop=[
  [-5, -5, -5, -5, -5, -5, -5, -5],
  [-5, 10, 5, 8, 8, 5, 10, -5],
  [-5, 5, 3, 8, 8, 3, 5, -5],
  [-5, 3, 10, 3, 3, 10, 3, -5],
  [-5, 3, 10, 3, 3, 10, 3, -5],
  [-5, 5, 3, 8, 8, 3, 5, -5],
  [-5, 10, 5, 8, 8, 5, 10, -5],
  [-5, -5, -5, -5, -5, -5, -5, -5],
];
bypos.knight=[
  [-10, -5, -5, -5, -5, -5, -5, -10 ],
  [ -8,  0,  0,  3,  3,  0,  0,  -8 ],
  [ -8,  0, 10,  8,  8, 10,  0,  -8 ],
  [ -8,  0,  8, 10, 10,  8,  0,  -8 ],
  [ -8,  0,  8, 10, 10,  8,  0,  -8 ],
  [ -8,  0, 10,  8,  8, 10,  0,  -8 ],
  [ -8,  0,  0,  3,  3,  0,  0,  -8 ],
  [-10, -5, -5, -5, -5, -5, -5, -10 ],
];
var byposcolor={};

byposcolor["white pawn"]=[
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, -5, -5, 0, 0, 0],
  [0, 2, 3, 4, 4, 3, 2, 0],
  [0, 4, 6, 10, 10, 6, 4, 0],
  [0, 6, 9, 10, 10, 9, 6, 0],
  [4, 8, 12, 16, 16, 12, 8, 4],
  [5, 10, 15, 20, 20, 15, 10, 5],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
byposcolor["black pawn"]=[];

byposcolor["white pawn"].forEach(function (e,i) {
  var len=byposcolor["white pawn"].length;
  var nr=byposcolor["white pawn"][len-1-i].slice();
  
  byposcolor["black pawn"].push(nr)
});

var castle_bonus=10;

var pscore={
  pawn:100,
  knight:300,
  bishop:300,
  rook:500,
  queen:900,
  king:350,
};

var score_state_traditional=function (perspective, bs) {
  piece.valid_colors(perspective);
  var so=0;
  Object.keys(bs.positions).forEach(function (pos) {
    var multiplier=1;
    var pobj=bs.positions[pos];
    type_checker.object(pobj);
    var pname=pobj.pname;
    var pfull=pobj.toString();
    
    if(pobj.color!=perspective){
      multiplier*=(-1);
    }
    var pos=pobj.position;
    var pos_score=0;
    var posarray=null;
    if(pname in bypos){
      posarray=bypos[pname];
    } else if(pfull in byposcolor){
      posarray=byposcolor[pfull];
    }
    if(posarray){
      type_checker.object(posarray[pos.y-1])
      pos_score=posarray[pos.y-1][pos.x-1];
      
      // console.log(pos_score+" score for "+pobj+" at "+pos)
      
      type_checker.number(pos_score);
    }
    assert(pobj.pname in pscore);
    so+=(pscore[pobj.pname]+pos_score)*multiplier;
  });
  
  var myckey=perspective+" castled";
  var otherckey=board_util.opposite_color(perspective)+" castled";
  if(bs[myckey]){
    so+=castle_bonus;
  }
  if(bs[otherckey]){
    so-=castle_bonus;
  }
  
  
  return so;
};
// var DEPTH=2;
var get_best,nega_max;

// var collected_move=0;
var brun=0;

get_best=function (perspective,DEPTH, bs, cb) {
  piece.valid_colors(perspective)
  type_checker.number(DEPTH);
  type_checker.object(bs)
  type_checker.function(cb)
  
  var moves=bs.valid_moves_by_color(bs.turn);
  
  var ex=Infinity;
  var best_so_far=null;
  var imediate_score=null;
  
  brun++;
  if(brun>2000){
    console.log(arguments);
    throw new Error("too much b");
  }
  var gbstart=bs.history.length;
  
  // var start_score=score_state_traditional(perspective,bs);
  
  var step;
  step=function () {
    var mv=moves.shift();
    // console.log(moves.length+" moves todo")
    if(!mv){
      assert(best_so_far!=null,"I am checkmated");
      var cpmv={};
      Object.keys(best_so_far).forEach(function (k) {
        if(k=="undoable")
          return;
        cpmv[k]=best_so_far[k];
      })
      // console.log("old score "+start_score)
      // console.log("new score "+ex,best_so_far)
      assert(bs.history.length==gbstart);
      return cb(cpmv,imediate_score);
    }
    
    // var bcopy=bs.clone();
    
    // assert(bcopy.turn==bs.turn);
    
    // var bturn=bcopy.turn;
    // var piece=bcopy.positions[mv.from.toString()];
    // console.log(bturn)
    // console.log(piece.color)
    
    mv.undoable=true;
    
    bs.perform_move(mv);
    
    // assert(bcopy.turn!=bs.turn)
    
    nega_max(bs,perspective,bs.turn,DEPTH-1,-Infinity, Infinity,function (nv) {
      var save=function () {
        ex=nv.score;
        imediate_score=score_state_traditional(perspective,bs);
        best_so_far=mv;
      };
      if(best_so_far===null)
        save();
      else if(nv.score<ex)
        save();
      else if(nv.score===ex){
        if(Math.random()>.5)
          save();
      }
      bs.undo_move();
      
      // collected_move++;
      // console.log(collected_move+" moves","best move is ",best_so_far.from.toString()+" to "+best_so_far.to.toString())
      nextTickDelayed(step);
    });
  };
  nextTickDelayed(step);
};
// var nrun=0;
nega_max=function (bs,perspective,turn,depth,alpha,beta, cb){
  var ndepth;
  type_checker.number(depth);
  type_checker.number(alpha);
  type_checker.number(beta);
  
  // nrun+=1;
  // if(nrun>2000){
  //   console.log(arguments)
  //   throw new Error("too much");
  // }
  type_checker.object(bs);
  piece.valid_colors(turn);
  piece.valid_colors(perspective);
  type_checker.function(cb);
  
  var cscore=score_state_traditional(perspective,bs);
  var out={score:cscore,state:bs,children:[]};
  
  // console.log(depth+" is depth")
  
  if(depth<=0){
    nextTickDelayed(function () {
      cb(out);
    });
    return;
  }
  
  ndepth=depth-1;
  
  var mvall=bs.valid_moves_by_color(turn);
  var opp=board_util.opposite_color(turn);
  
  var nalpha=alpha;
  
  var hstart=bs.history.length;
  
  var ondone=function () {
    out.score=nalpha;
    assert(hstart==bs.history.length);
    nextTickDelayed(function () {
      cb(out);
    });
  };

  
  var mvstep=function () {
    var mv=mvall.shift();
    
    if(!mv){
      return ondone();}
    
    // toundo++;
    mv.undoable=true;
    assert(mv.from.toString() in bs.positions)
    assert(bs.positions[mv.from.toString()].color==bs.turn)
    bs.perform_move(mv);
    
    nega_max(bs,opp,opp,ndepth,-1*beta,-1*nalpha,function(tmp){
    
      nalpha=Math.max(nalpha,tmp.score * -1);
      
      type_checker.number(tmp.score);
      type_checker.number(nalpha);
      
      bs.undo_move();
      
      if(nalpha>=beta){
        out.score=nalpha;
        out.children.push(tmp);
        return ondone()
      }
      nextTickDelayed(mvstep);
    });
  };
  nextTickDelayed(mvstep);
  
  return;
};


module.exports=bot;

}).call(this,require('_process'))
},{"./board_util.js":17,"./piece.js":34,"_process":41,"assert":"assert","type_checker":33}],19:[function(require,module,exports){
(function (process){

var Picker=require("./game_picker.js")
var BoardState=require("./board_state.js");
var bot=require("./bot.js");

var window=(function(){return this;})();
var assert=require("assert")
var piece=require("./piece.js")
var position=require("./position.js")
var type_checker=require("type_checker")
var turn_display=require("./turn_display.js");

var history_display=require("./move_history_display.js")

var pickrandom=function(arr){
  return arr[Math.floor(Math.random()*arr.length)]
};
var append_to_body=function (bs,cb) {
  
  var window=(function(){return this;})();

  var body=document.querySelector("body");
  var be=bs.browser_element();
  
  var t_display=new turn_display(bs);
  var mvhistory=new history_display(bs);
  
  if(cb)
    type_checker.function(cb);
  
  var append=function () {
    if(!body)
      body=document.querySelector("body");
    body.appendChild(be);
    t_display.attach(body);
    mvhistory.attach(body);
    if(cb){
      cb();}
  };
  if(!document.body){
    document.addEventListener("DOMContentLoaded",append,false);
  } else
    append();
  
  return be;
};

var use_debug;
use_debug=function(){
  if(!("result" in use_debug))
    use_debug.result = use_debug.test();
  return use_debug.result;
};
use_debut.test=function(){
  var loc = window.location;
  if(!loc)
    return true;
  var hnm = loc.hostname;
  if(!hnm)
    return true;
  if(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/gi.test(hnm))
    return true;
  return false;
};
var init_board=function (cb) {
  var bs=new BoardState()
  
  if(use_debug()){
    bs.debug=true;
    window.bs=bs;
  }
  bs.initialize();
  append_to_body(bs,function(){
    cb(bs);
  });
};

if(process.title==="browser"){
  var pdiv=document.createElement("div");
  var p=new Picker(pdiv);
  var inited=false;
  var bs=null;
  p.on("start",function (desc) {
    if(use_debug())
      console.log(desc,inited,bs)
    if(!inited)
      return;
    var keylistenersset=false;
    Object.keys(desc).forEach(function (color) {
      if(desc[color]=="Human"){
        bs.add_human(color);
        if(!keylistenersset){
          bs.install_key_listeners();
          keylistenersset=true;
        }
      }
      if(desc[color]=="Bot")
        var bt=new bot(bs,color);
    })
  })
  var start=function () {
    document.body.appendChild(pdiv);
    init_board(function (_bs) {
      inited=true;
      bs=_bs;
    })
  };
  if(!document.body)
    document.addEventListener("DOMContentLoaded",start,false);
  else
    start();
  
  window.require=require;
}


}).call(this,require('_process'))
},{"./board_state.js":3,"./bot.js":18,"./game_picker.js":21,"./move_history_display.js":28,"./piece.js":34,"./position.js":35,"./turn_display.js":36,"_process":41,"assert":"assert","type_checker":33}],20:[function(require,module,exports){
module.exports = {"formtemplate":{"tag":"form","class":"gamestarter","name":"gamestarter","children":[{"tag":"div","class":"gamestarter_sub","children":[{"tag":"div","data-side":"white","class":"aside","child":{"tag":"h6","text":"White"}},{"tag":"div","class":"aside","data-side":"black","child":{"tag":"h6","text":"Black"}}]},{"tag":"div","class":"start_game_row","child":{"tag":"button","text":"Start","class":"start_game"}}]},"sidetemplate":[{"tag":"div","class":"button_surround","children":[{"tag":"button","child":"Human","data-is":"Human","data-become":"Bot"}]}]}
},{}],21:[function(require,module,exports){
(function (process){

var window=(function(){return this;})();
var document=window.document;
var EventEmitter=require("events").EventEmitter;
var util=require("util")
var sgen=require("gen2015-07")
var gen=function (desc) {
  return sgen(document,desc);
};

var assert=require("assert");
var type_checker=require("type_checker");
var fstructure=require("./fstructure.yaml");

var fakeevent={preventDefault:function(){}};

var getremove=function (ele,key) {
  var v=ele.getAttribute(key);
  ele.removeAttribute(key);
  return v;
};

var generate=function (ee,prnt) {
  // fstructure.parent=prnt;
  
  var formtemp=fstructure.formtemplate;
  var sidetemp=fstructure.sidetemplate;
  
  formtemp.parent=prnt;
  
  var cstate={};
  
  var fobj=gen(formtemp);
  var sidelocs=[].slice.call(fobj.querySelectorAll(".aside"));
  sidelocs.forEach(function (loc) {
    sidetemp.forEach(function (spart) {
      loc.appendChild(gen(spart))
    })
    var whichside=getremove(loc,"data-side");
    
    var btns=[].slice.call(loc.querySelectorAll("button"));
    
    btns.forEach(function (btn,i) {
      var is = getremove(btn,"data-is");
      var become=getremove(btn,"data-become");
      var swap=function(){
        var tmp = is;
        is = become;
        become = tmp;
      };
      cstate[whichside]=is;
      var setcurrent=function (event) {
        event.preventDefault();
        btn.innerHTML="";
        btn.appendChild(document.createTextNode(become));
        cstate[whichside]=become;
        console.log(whichside+" is "+become);
        swap();
      };
      btn.addEventListener("click",setcurrent,false);
    });
  });
  var sbutton=fobj.querySelector(".start_game")
  sbutton.addEventListener("click",function (event) {
    event.preventDefault();
    ee.emit("start",cstate);
    console.log(cstate);
    ee.collapse();
  },false);
  
  return fobj;
};


var Picker=function (prnt) {
  EventEmitter.call(this);
  type_checker.object(prnt);
  type_checker.object(prnt.ownerDocument);
  assert(prnt.ownerDocument===document);
  
  var me=this;
  this.parent=prnt;
  var hobj=this.html_obj=generate(this,prnt);
  this.collapsing=false;
  this.expanding=false;
  this.collapsed=false;
  
  this.collapseable=hobj.querySelectorAll(".button_surround,.start_game_row")
  this.collapseable=[].slice.call(this.collapseable)
  process.nextTick(function(){
    assert(document.body.contains(me.html_obj))
  //   me.last_height=me.html_obj.clientHeight;
  //   me.html_obj.style.height=me.last_height+"px";
    me.collapseable.forEach(function (ele) {
      if(!ele.style.height)
        ele.style.height=ele.clientHeight+"px";
    })
  })
};


util.inherits(Picker,EventEmitter);
Picker.prototype.collapse=function () {
  var me=this;
  var hobj=this.html_obj;
  assert(!this.collapsing);
  assert(!this.expanding);
  assert(!this.collapsed)
  var to_c=this.collapseable;
  
  to_c.forEach(function (ele) {
    ele.style.height="0px"
  });
  
  // hobj.style.height=this.last_height+"px";
  // hobj.style.height="0px"
  this.collapsing=true;
  setTimeout(function () {
    if(me.collapsing){
      me.collapsed=true;
      me.collapsing=false;
    }
  },1E3);
};
Picker.prototype.expand=function () {
  assert(!this.collapsing);
  assert(this.collapsed);
  // this.html_obj.style.height=this.last_height+"px";
  this.expanding=true;
  this.collapseable.forEach(function (ele) {
    ele.style.height=ele.scrollHeight+"px";
  })
  setTimeout(function () {
    if(me.expanding){
      me.collapsed=false;
      me.expanding=false;
    }
  },1E3);
}

module.exports=Picker;

}).call(this,require('_process'))
},{"./fstructure.yaml":20,"_process":41,"assert":"assert","events":38,"gen2015-07":31,"type_checker":33,"util":43}],22:[function(require,module,exports){
module.exports="<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\n  viewBox=\"0 0 202.03075 388\" xml:space=\"preserve\"\n  >\n  <path\n    transform=\"translate(-239.48463,-184.66)\"\n    style=\"stroke-width:3.88px;\"\n    d=\"m 340.5,185.21875 c 0,0 -8.33846,4.39207 -11.40625,14.375 -2.13516,6.94806 7.25934,2.7015 7.40625,9.96875 0.45244,22.38145 -35.49059,40.79736 -33.875,63.125 1.12731,15.57948 20.0632,24.62199 15.9375,39.6875 -2.70926,9.8932 -29.04675,1.16023 -28.5625,11.40625 0.39836,8.42871 19.36581,0.29766 24.28125,7.15625 20.26689,28.27869 6.75168,71.28571 -4.28125,104.28125 -7.70736,23.04994 -23.08653,44.06436 -41.4375,60 -4.82382,4.18892 -17.65195,2.1955 -17.125,8.5625 0.53422,6.45482 17.15872,-0.60419 18.5625,5.71875 2.92281,13.16498 -30.81988,13.69567 -30,27.15625 0.77913,12.79148 15.97949,16.26903 31.4375,22.125 19.14823,7.25394 45.76329,10.71875 69.0625,10.71875 23.29921,0 49.91427,-3.46481 69.0625,-10.71875 15.45801,-5.85597 30.65837,-9.33352 31.4375,-22.125 0.81988,-13.46058 -32.92281,-13.99127 -30,-27.15625 1.40378,-6.32294 18.02828,0.73607 18.5625,-5.71875 0.52695,-6.367 -12.30118,-4.37358 -17.125,-8.5625 -18.35097,-15.93564 -33.73014,-36.95006 -41.4375,-60 -11.03293,-32.99554 -24.54814,-76.00256 -4.28125,-104.28125 4.91544,-6.85859 23.88289,1.27246 24.28125,-7.15625 0.48425,-10.24602 -25.85324,-1.51305 -28.5625,-11.40625 -4.1257,-15.06551 14.81019,-24.10802 15.9375,-39.6875 0.68732,-9.4989 -5.44398,-18.28093 -12.65625,-26.96875 l -21.5,25.59375 -5.71875,-4.78125 22.3125,-26.625 c -8.36473,-9.77562 -16.52946,-19.6111 -16.3125,-30.34375 0.14691,-7.26725 9.54141,-3.02069 7.40625,-9.96875 -3.06779,-9.98293 -11.40625,-14.375 -11.40625,-14.375 z\"\n     />\n</svg>";
},{}],23:[function(require,module,exports){
module.exports="<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\n  viewBox=\"0 0 422.92255 895\" xml:space=\"preserve\"\n   >\n  <path\n    style=\"stroke-width:8.95px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;fill-opacity:1\"\n    transform=\"translate(-140.21214,-110.9375)\"\n    d=\"m 156.42857,980.93363 c -36.07569,-3.69605 24.33077,-48.75609 45,-65.00002 -13.83748,-10.91045 -36.30677,-8.87317 -40,-35 -1.6487,-9.16891 1.46049,-18.93256 15,-30 71.50123,-98.72126 75.16234,-213.71766 85,-335 -20.03364,-9.97898 -47.22719,-15.483 -60,-30 -2.8113,-11.02696 1.36038,-23.05148 5,-35 4.40457,-16.02184 33.33333,-30 50,-45 3.60732,-5.19024 2.00685,-17.3242 0,-30 -4.98028,-43.23993 -13.92774,-85.54641 -35,-125 24.93411,-28.4157 76.33169,-23.75205 115,-35 l 0,-50 -35,0 0,-30 35,0 0,-20 15.25,-5e-5 15.25,-6e-5 0,20 35,0 0,30 -35,0 0,50 c 38.66831,11.24795 90.06589,6.5843 115,35 -21.07226,39.45359 -30.01972,81.76007 -35,125 -2.00685,12.6758 -3.60732,24.80976 0,30 16.66667,15 45.59543,28.97816 50,45 3.63962,11.94852 7.8113,23.97304 5,35 -12.77281,14.517 -39.96636,20.02102 -60,30 9.83766,121.28234 13.49877,236.27874 85,335 13.53951,11.06744 16.6487,20.83109 15,30 -3.69323,26.12683 -26.16252,24.08955 -40,35 20.66923,16.24393 81.0758,61.30407 45,65.00013 0,0 -129.82598,20.00387 -195.25,20.00387 -65.42402,0 -195.25,-20.00387 -195.25,-20.00387 z\"\n  />\n</svg>";
},{}],24:[function(require,module,exports){
module.exports="<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\n  viewBox=\"0 0 229.67912 328.194\" xml:space=\"preserve\"\n  >\n  <path\n    transform=\"translate(-217.39026,-261.93728)\"\n    style=\"stroke-width:3.28px;\"\n    d=\"m 364.12605,301.82839 c -2.04122,0.004 -4.16862,0.0851 -6.36677,0.2292 -8.41232,0.53587 -16.74621,2.53765 -24.72855,5.24623 -12.92718,4.83855 -22.70729,10.92826 -34.04951,18.92205 l 9.29549,13.95597 c 0,0 -28.66514,13.14769 -41.0275,22.71665 -10.1482,7.85511 -21.10892,16.28501 -26.48578,27.9374 -2.97141,7.75433 -2.40853,19.3503 4.35488,23.86267 14.58993,5.43539 31.41757,-2.96383 44.26181,-6.1121 9.18265,-2.18558 27.6318,-6.1121 27.6318,-6.1121 l 6.46864,18.36177 c -22.79632,9.40066 -3.1757,18.22621 0.61121,46.45199 1.50115,19.73075 -8.39137,39.78242 -19.76246,55.97668 -6.72354,9.57538 -29.59878,10.78675 -27.1734,22.23277 24.26529,36.52412 141.36189,24.11307 148.06571,0 2.42538,-11.44602 -20.44986,-12.65739 -27.1734,-22.23277 -11.37109,-16.19426 -21.26361,-36.24593 -19.76246,-55.97668 12.64995,-25.1186 21.38094,-39.85339 3.69273,-47.95454 l 8.37867,-17.16483 18.05617,4.96609 c 0,0 10.68223,-13.66197 12.80995,-21.82531 2.37405,-9.10839 1.49808,-19.06387 -0.58574,-28.24301 -2.2877,-10.0772 -7.19867,-19.56562 -12.80995,-28.24301 -11.28232,-20.20685 -23.96971,-27.03535 -43.70154,-26.99512 z\"\n     />\n</svg>";
},{}],25:[function(require,module,exports){
module.exports="<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\n  viewBox=\"0 0 744.09448819 1052.3622047\" xml:space=\"preserve\"\n  >\n  <path\n    style=\"stroke-width:10.523622047px;\"\n    d=\"m 372.04724,195.57779 c -53.77064,0 -97.38088,43.56857 -97.38088,97.33921 0,26.33213 10.47641,50.18702 27.45999,67.71243 -21.49575,17.16995 -38.54154,43.59382 -37.41892,69.46252 1.2339,28.4333 46.16325,39.12949 53.33655,66.6707 13.62881,52.32652 -1.92581,111.93036 -26.66828,160.00966 -5.7525,11.17821 -26.66827,14.09673 -26.66827,26.66828 0,12.57155 27.70518,14.13956 26.66827,26.66828 -3.15363,38.10458 -96.32973,28.55298 -93.33897,66.67069 0.77741,9.90823 25.07628,3.52379 26.66828,13.33414 2.01374,12.40922 -28.68201,14.25906 -26.66828,26.66828 1.59201,9.81035 17.23962,10.19125 26.66828,13.33414 47.1433,15.71442 147.34223,26.66827 147.34223,26.66827 0,0 100.19894,-10.95385 147.34224,-26.66827 9.42866,-3.14289 25.07627,-3.52379 26.66827,-13.33414 2.01374,-12.40922 -28.68201,-14.25906 -26.66827,-26.66828 1.592,-9.81035 25.89087,-3.42591 26.66827,-13.33414 2.99077,-38.11771 -90.18534,-28.56611 -93.33897,-66.67069 -1.0369,-12.52872 26.66828,-14.09673 26.66828,-26.66828 0,-12.57155 -20.91577,-15.49007 -26.66828,-26.66828 -24.74247,-48.0793 -40.29708,-107.68314 -26.66828,-160.00966 7.1733,-27.54121 52.10266,-38.2374 53.33656,-66.6707 1.12261,-25.8687 -15.96484,-52.29257 -37.4606,-69.46252 16.98359,-17.52541 27.46,-41.3803 27.46,-67.71243 0,-53.77064 -43.56857,-97.33921 -97.33922,-97.33921 z\"\n     />\n</svg>";
},{}],26:[function(require,module,exports){
module.exports="<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\"\n  viewBox=\"0 0 161.65853 330\" xml:space=\"preserve\"\n   >\n  <path\n    stroke-width=\"3.2349\"\n     transform=\"translate(-239.17574,-511.8674)\"\n       d=\"m 279.5,512.375 c -2.52128,0.25605 -4.5,2.41117 -4.5,5 0,1.67837 0.85632,3.12439 2.125,4.03125 -2.88537,4.31692 -6.92606,16.17306 -7.125,20.95593 0,30 10,40 20,60 20,20 20,140 -10,170.01282 -10,19.98718 -43.99185,21.5712 -40,40 20,29.98718 140,29.98718 160,0 3.99185,-18.4288 -30,-20.01282 -40,-40 -30,-30.01282 -30,-150.01282 -10,-170.01282 10,-20 20,-30 20,-60 -0.19894,-4.78287 -4.23963,-16.63901 -7.125,-20.95593 1.26868,-0.90686 2.125,-2.35288 2.125,-4.03125 0,-2.76142 -2.23858,-5 -5,-5 -2.76142,0 -5,2.23858 -5,5 0,1.95601 1.14466,3.61592 2.78125,4.4375 0,0 -1.98145,15.5625 -7.78125,15.5625 -5.7998,0 -7.78125,-15.5625 -7.78125,-15.5625 1.63659,-0.82158 2.78125,-2.48149 2.78125,-4.4375 0,-2.76142 -2.23858,-5 -5,-5 -2.76142,0 -5,2.23858 -5,5 0,1.95601 1.14466,3.61592 2.78125,4.4375 0,0 -1.98145,15.5625 -7.78125,15.5625 -5.7998,0 -7.78125,-15.5625 -7.78125,-15.5625 1.63659,-0.82158 2.78125,-2.48149 2.78125,-4.4375 0,-2.76142 -2.23858,-5 -5,-5 -2.76142,0 -5,2.23858 -5,5 0,1.95601 1.14466,3.61592 2.78125,4.4375 0,0 -1.98145,15.5625 -7.78125,15.5625 -5.7998,0 -7.78125,-15.5625 -7.78125,-15.5625 1.63659,-0.82158 2.78125,-2.48149 2.78125,-4.4375 0,-2.76142 -2.23858,-5 -5,-5 -2.76142,0 -5,2.23858 -5,5 0,1.95601 1.14466,3.61592 2.78125,4.4375 0,0 -1.98145,15.5625 -7.78125,15.5625 -5.7998,0 -7.78125,-15.5625 -7.78125,-15.5625 1.63659,-0.82158 2.78125,-2.48149 2.78125,-4.4375 0,-2.76142 -2.23858,-5 -5,-5 -0.17259,0 -0.33191,-0.0171 -0.5,0 z\"\n  />\n</svg>";
},{}],27:[function(require,module,exports){
module.exports="<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\n  viewBox=\"0 0 148.9332 173.16669\" xml:space=\"preserve\"\n  >\n  <path\n    style=\"stroke-width:1.732px;\"\n    d=\"m 40.71875,31.84375 0,30 11.40625,0 C 52.480031,73.670785 52.15625,125.5 52.15625,125.5 l -8.66425,2.66469 c 0,0 0.803191,8.05666 -0.664,11.664 -1.275442,3.13589 -4.972043,4.73176 -6.663938,7.664 -1.878457,3.25557 -3.664062,10.664 -3.664062,10.664 0,0 28.235631,5 42.5,5 14.264369,0 42.5,-5 42.5,-5 0,0 -2.00623,-7.45083 -3.9845,-10.7035 -1.80114,-2.96142 -5.67021,-4.4962 -6.9845,-7.7035 -1.48044,-3.61277 -0.484,-11.703 -0.484,-11.703 l -9.4845,-2.70294 c 0,0 -0.49629,-52.972929 0.0625,-63.5 l 11.59375,0 0,-30 -7.5,0 0,7.5 -7.5,0 0,-7.5 -7.5,0 0,7.5 -7.5,0 0,-7.5 -7.5,0 0,7.5 -7.5,0 0,-7.5 -7.5,0 0,7.5 -7.5,0 0,-7.5 z\"\n     />\n</svg>";
},{}],28:[function(require,module,exports){

var window=(function(){return this;})();
var document=window.document;
var assert=require('assert')

var d_history=function (bs) {
  
  var div=this.div=document.createElement("div");
  div.className="move_history";
  var ihave=this.history=[];
  
  var mvtitle=document.createElement("h6");
  mvtitle.appendChild(document.createTextNode("Move History"))
  
  
  var mvsub=this.mvsub=document.createElement("div");
  
  [mvtitle,mvsub].forEach(function (e) {
    div.appendChild(e);
  })
  // div.appendChild();
  
  bs.on("movedesc",function (desctxt,mdesc,mnot) {
    var row=document.createElement("div");
    row.appendChild(document.createTextNode(mnot));
    mvsub.appendChild(row);
    mvsub.scrollTop=mvsub.scrollHeight;
  });
};

d_history.prototype.attach=function (parent) {
  var me=this;
    parent.appendChild(me.div);
  return;
};
d_history.prototype.detach=function (parent) {
  return parent.removeChild(this.div);
};

module.exports=d_history;

},{"assert":"assert"}],29:[function(require,module,exports){

var assert=require("assert");

var type_checker=require("type_checker");


var ontype={};

var copy_obj_rec;

var primitive=function (o,no,k,v) {
  no[k]=v;
  return true;
};


ontype[typeof {}]=function (o,no,k,v,sn,msn) {
  if(v===null)
    return primitive.apply(this,arguments);
  no[k]=copy_obj_rec(v,sn,msn);
  return true;
};
ontype[typeof function(){}]=function (o,no,k,v,sn,msn) {
  return true;
};
ontype[typeof undefined]=primitive;
ontype[typeof 1]=primitive;
ontype[typeof ""]=primitive;
ontype[typeof true]=primitive;

copy_obj_rec=function (o,seen,mycopy) {
  type_checker.object(o);
  type_checker.array(seen);
  type_checker.array(mycopy);
  
  var si=seen.indexOf(o);
  if(si>=0)
    return mycopy[si];
  
  var no;
  if(Array.isArray(o))
    no=[];
  else
    no={};
  
  seen.push(o);
  mycopy.push(no);
  
  Object.keys(o).forEach(function (k) {
    var v=o[k];
    var ts=(typeof o[k]);
    
    assert(ts in ontype);
    ontype[ts](o,no,k,v,seen,mycopy);
  });
  return no;
};

var copy_object=function (o) {
  return copy_obj_rec(o,[],[]);
};


module.exports=copy_object;


},{"assert":"assert","type_checker":30}],30:[function(require,module,exports){
// Generated by CoffeeScript 1.9.1
(function() {
  var assert, gen_type_enf, o, tk, ts, type_str;

  assert = require('assert');

  o = {};

  type_str = {};

  type_str.string = typeof "";

  type_str.number = typeof 1;

  type_str["function"] = typeof (function() {});

  type_str.object = typeof {};

  type_str.undefined = typeof void 0;

  type_str.boolean = typeof true;

  gen_type_enf = function(ts, tk) {
    return function(a) {
      assert(arguments.length === 1, "Wrong number of arguments");
      assert(typeof a === ts, "Not of type " + tk);
      return a;
    };
  };

  for (tk in type_str) {
    ts = type_str[tk];
    o[tk] = gen_type_enf(ts, tk);
  }
  
  o.array=function (a) {
    assert(arguments.length === 1, "Wrong number of arguments");
    assert(Array.isArray(a), "Not type array");
    return a;
  };

  o.object = function(a) {
    assert(arguments.length === 1, "Wrong number of arguments");
    assert(type_str.object === typeof a, "Not type object");
    assert(a !== null, "Null object");
    return a;
  };

  o.number = function(a) {
    assert(arguments.length === 1, "Wrong number of arguments");
    assert(type_str.number === typeof a, "Not type number");
    o.not_nan(a);
    return a;
  };

  o.not_nan = function(a) {
    assert(arguments.length === 1, "Wrong number of arguments");
    assert(!isNaN(a), "NaN number");
    return a;
  };

  o["null"] = function(a) {
    assert(arguments.length === 1, "Wrong number of arguments");
    assert(a === null, "not null");
    return a;
  };

  o.define_interface = function(interface_def, sub_interface_defs) {
    var cobj, e, interface_obj, k, sint;
    assert(arguments.length > 0, "Wrong number of arguments");
    assert(arguments.length < 3, "Wrong number of arguments");
    interface_obj = {
      type: "interface",
      required_keys: {}
    };
    for (k in interface_def) {
      cobj = interface_def[k];
      interface_obj.required_keys[k] = typeof cobj;
    }
    if (sub_interface_defs != null) {
      o.object(sub_interface_defs);
      for (k in sub_interface_defs) {
        sint = sub_interface_defs[k];
        o.undefined(interface_obj.required_keys[k]);
        
        o.is_valid_interface(sint);
        interface_obj.required_keys[k] = sint;
      }
    }
    return interface_obj;
  };

  o.is_valid_interface = function(iobj) {
    var k, ref, v;
    assert(arguments.length === 1, "Wrong number of arguments");
    o.object(iobj);
    o.string(iobj.type);
    o.object(iobj.required_keys);
    assert(Object.keys(iobj).length === 2);
    assert(iobj.type === "interface");
    ref = iobj.required_keys;
    for (k in ref) {
      v = ref[k];
      if (typeof v === type_str.string) {
        continue;
      }
      if (o.is_valid_interface(v)) {
        continue;
      }
      throw new Error("invalid interface value at key " + k);
    }
    return true;
  };

  o.coerce_number = function(s) {
    assert(arguments.length === 1, "Wrong number of arguments");
    if (typeof s === type_str.number) {
      o.number(s);
      return s;
    } else if (typeof s === type_str.string) {
      s = parseFloat(s);
      o.number(s);
    } else {
      throw new Error("could not coerce");
    }
    return s;
  };

  o.coerce_string = function(s) {
    assert(arguments.length === 1, "Wrong number of arguments");
    if (typeof s === type_str.number) {
      s = s + "";
    } else if (typeof s === type_str.object) {
      s = JSON.stringify(s);
    }
    o.string(s);
    return s;
  };

  o.uses_interface = function(to_test, interface_obj) {
    var e, k, ref, v;
    assert(arguments.length === 2, "Wrong number of arguments");
    o.object(to_test);
    
    o.is_valid_interface(interface_obj);
    
    ref = interface_obj.required_keys;
    for (k in ref) {
      v = ref[k];
      if (typeof v === type_str.string) {
        assert(typeof to_test[k] === v, "Invalid Type for key: " + k);
      } else if (typeof v === type_str.object) {
        o.is_valid_interface(v);
        o.uses_interface(to_test[k], v);
      } else {
        throw new Error("invalid interface def");
      }
    }
    return true;
  };

  module.exports = o;

}).call(this);

},{"assert":"assert"}],31:[function(require,module,exports){

var assert=require("assert");
var type_checker=require("type_checker")
var es5=require("es5-shim");

var defaultkey;
var specialkey={};
var tagpossible="tag,tagName".split(",");
var skip={};
tagpossible.forEach(function (t) {
  skip[t]=true;
});
var gen=module.exports=function (document,desc) {
  assert(arguments.length==2);
  type_checker.object(document);
  type_checker.object(document.documentElement);
  if(typeof desc==typeof "")
    return document.createElement(desc);
  type_checker.object(desc);
  
  var e;
  if(typeof desc.tag==typeof ""){
    e=document.createElement(desc.tag);
    type_checker.undefined(desc.tagName);
  } else {
    type_checker.undefined(desc.tag);
    type_checker.string(desc.tagName);
    e=document.createElement(desc.tagName);
  }
  Object.keys(desc).forEach(function (dkey) {
    if(skip[dkey])
      return;
    if(dkey in specialkey){
      specialkey[dkey](e,desc,dkey,desc[dkey]);
    } else
      defaultkey(e,desc,dkey,desc[dkey]);
  });
  return e;
};
defaultkey=function (e,desc,k,_v) {
  var v;
  v=_v;
  if(typeof v==typeof 1)
    v=v.toString()
  type_checker.string(v);
  return e.setAttribute(k,v);
};
specialkey.parentNode=function (e,desc,k,v) {
  phexclude(desc,"parentNode");
  return v.appendChild(e);
}
specialkey.parent=function (e,desc,k,v) {
  phexclude(desc,"parent");
  return v.appendChild(e);
};
specialkey.style=function (e,desc,k,v) {
  if(typeof v==typeof ""){
    return defaultkey(e,desc,k,v);
  }
  type_checker.object(e.style);
  Object.keys(v).forEach(function (skey) {
    var v_sub=v[skey];
    type_checker.string(v_sub);
    
    e.style[skey]=v_sub;
  });
  return true;
};
var assert_not_have
var chexclude
var onchn=function(e){
  var document=e.ownerDocument;
  return function (chn) {
    var rchn=chn;
    if(typeof chn==typeof ""){
      rchn=document.createTextNode(chn)
    }
    if(rchn.ownerDocument!==document)
      rchn=gen(document,rchn);
    e.appendChild(rchn)
    return true;
  };
};
specialkey.child=function (e,desc,k,v) {
  chexclude(desc,"child");
  return onchn(e)(v);
};
specialkey.children=function (e,desc,k,v) {
  var document=e.ownerDocument;
  chexclude(desc,"children");
  v.forEach(onchn(e))
  return true;
};
specialkey.html=function (e,desc,k,v) {
  type_checker.string(v);
  chexclude(desc,"html")
  e.innerHTML=v;
  return true;
};
specialkey.text=function (e,desc,k,v) {
  type_checker.string(v);
  chexclude(desc,"text")
  e.appendChild(e.ownerDocument.createTextNode(v))
  return true;
};

var gen_exclude=function (list) {
  return function (desc,skip) {
    type_checker.string(skip);
    var cwithout=list.filter(function (k) {
      return k!==skip;
    });
    assert_not_have(desc,cwithout);
  };
}
phexclude=gen_exclude("parent,parentNode".split(","));
chexclude=gen_exclude("html,child,children,text".split(","));

assert_not_have=function (o,plist) {
  type_checker.object(o);
  type_checker.array(plist);
  type_checker.function(plist.forEach);
  
  plist.forEach(function (pname) {
    assert(typeof o[pname]==typeof undefined)
  });
};

},{"assert":"assert","es5-shim":32,"type_checker":33}],32:[function(require,module,exports){
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */

// vim: ts=4 sts=4 sw=4 expandtab

// Add semicolon to prevent IIFE from being passed as argument to concatenated code.
;

// UMD (Universal Module Definition)
// see https://github.com/umdjs/umd/blob/master/returnExports.js
(function (root, factory) {
    'use strict';

    /* global define, exports, module */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
    }
}(this, function () {

/**
 * Brings an environment as close to ECMAScript 5 compliance
 * as is possible with the facilities of erstwhile engines.
 *
 * Annotated ES5: http://es5.github.com/ (specific links below)
 * ES5 Spec: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
 * Required reading: http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
 */

// Shortcut to an often accessed properties, in order to avoid multiple
// dereference that costs universally. This also holds a reference to known-good
// functions.
var $Array = Array;
var ArrayPrototype = $Array.prototype;
var $Object = Object;
var ObjectPrototype = $Object.prototype;
var FunctionPrototype = Function.prototype;
var $String = String;
var StringPrototype = $String.prototype;
var $Number = Number;
var NumberPrototype = $Number.prototype;
var array_slice = ArrayPrototype.slice;
var array_splice = ArrayPrototype.splice;
var array_push = ArrayPrototype.push;
var array_unshift = ArrayPrototype.unshift;
var array_concat = ArrayPrototype.concat;
var call = FunctionPrototype.call;
var max = Math.max;
var min = Math.min;

// Having a toString local variable name breaks in Opera so use to_string.
var to_string = ObjectPrototype.toString;

var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var isCallable; /* inlined from https://npmjs.com/is-callable */ var fnToStr = Function.prototype.toString, tryFunctionObject = function tryFunctionObject(value) { try { fnToStr.call(value); return true; } catch (e) { return false; } }, fnClass = '[object Function]', genClass = '[object GeneratorFunction]'; isCallable = function isCallable(value) { if (typeof value !== 'function') { return false; } if (hasToStringTag) { return tryFunctionObject(value); } var strClass = to_string.call(value); return strClass === fnClass || strClass === genClass; };
var isRegex; /* inlined from https://npmjs.com/is-regex */ var regexExec = RegExp.prototype.exec, tryRegexExec = function tryRegexExec(value) { try { regexExec.call(value); return true; } catch (e) { return false; } }, regexClass = '[object RegExp]'; isRegex = function isRegex(value) { if (typeof value !== 'object') { return false; } return hasToStringTag ? tryRegexExec(value) : to_string.call(value) === regexClass; };
var isString; /* inlined from https://npmjs.com/is-string */ var strValue = String.prototype.valueOf, tryStringObject = function tryStringObject(value) { try { strValue.call(value); return true; } catch (e) { return false; } }, stringClass = '[object String]'; isString = function isString(value) { if (typeof value === 'string') { return true; } if (typeof value !== 'object') { return false; } return hasToStringTag ? tryStringObject(value) : to_string.call(value) === stringClass; };

/* inlined from http://npmjs.com/define-properties */
var defineProperties = (function (has) {
  var supportsDescriptors = $Object.defineProperty && (function () {
      try {
          var obj = {};
          $Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
          for (var _ in obj) { return false; }
          return obj.x === obj;
      } catch (e) { /* this is ES3 */
          return false;
      }
  }());

  // Define configurable, writable and non-enumerable props
  // if they don't exist.
  var defineProperty;
  if (supportsDescriptors) {
      defineProperty = function (object, name, method, forceAssign) {
          if (!forceAssign && (name in object)) { return; }
          $Object.defineProperty(object, name, {
              configurable: true,
              enumerable: false,
              writable: true,
              value: method
          });
      };
  } else {
      defineProperty = function (object, name, method, forceAssign) {
          if (!forceAssign && (name in object)) { return; }
          object[name] = method;
      };
  }
  return function defineProperties(object, map, forceAssign) {
      for (var name in map) {
          if (has.call(map, name)) {
            defineProperty(object, name, map[name], forceAssign);
          }
      }
  };
}(ObjectPrototype.hasOwnProperty));

//
// Util
// ======
//

/* replaceable with https://npmjs.com/package/es-abstract /helpers/isPrimitive */
var isPrimitive = function isPrimitive(input) {
    var type = typeof input;
    return input === null || (type !== 'object' && type !== 'function');
};

var ES = {
    // ES5 9.4
    // http://es5.github.com/#x9.4
    // http://jsperf.com/to-integer
    /* replaceable with https://npmjs.com/package/es-abstract ES5.ToInteger */
    ToInteger: function ToInteger(num) {
        var n = +num;
        if (n !== n) { // isNaN
            n = 0;
        } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
            n = (n > 0 || -1) * Math.floor(Math.abs(n));
        }
        return n;
    },

    /* replaceable with https://npmjs.com/package/es-abstract ES5.ToPrimitive */
    ToPrimitive: function ToPrimitive(input) {
        var val, valueOf, toStr;
        if (isPrimitive(input)) {
            return input;
        }
        valueOf = input.valueOf;
        if (isCallable(valueOf)) {
            val = valueOf.call(input);
            if (isPrimitive(val)) {
                return val;
            }
        }
        toStr = input.toString;
        if (isCallable(toStr)) {
            val = toStr.call(input);
            if (isPrimitive(val)) {
                return val;
            }
        }
        throw new TypeError();
    },

    // ES5 9.9
    // http://es5.github.com/#x9.9
    /* replaceable with https://npmjs.com/package/es-abstract ES5.ToObject */
    ToObject: function (o) {
        /* jshint eqnull: true */
        if (o == null) { // this matches both null and undefined
            throw new TypeError("can't convert " + o + ' to object');
        }
        return $Object(o);
    },

    /* replaceable with https://npmjs.com/package/es-abstract ES5.ToUint32 */
    ToUint32: function ToUint32(x) {
        return x >>> 0;
    }
};

//
// Function
// ========
//

// ES-5 15.3.4.5
// http://es5.github.com/#x15.3.4.5

var Empty = function Empty() {};

defineProperties(FunctionPrototype, {
    bind: function bind(that) { // .length is 1
        // 1. Let Target be the this value.
        var target = this;
        // 2. If IsCallable(Target) is false, throw a TypeError exception.
        if (!isCallable(target)) {
            throw new TypeError('Function.prototype.bind called on incompatible ' + target);
        }
        // 3. Let A be a new (possibly empty) internal list of all of the
        //   argument values provided after thisArg (arg1, arg2 etc), in order.
        // XXX slicedArgs will stand in for "A" if used
        var args = array_slice.call(arguments, 1); // for normal call
        // 4. Let F be a new native ECMAScript object.
        // 11. Set the [[Prototype]] internal property of F to the standard
        //   built-in Function prototype object as specified in 15.3.3.1.
        // 12. Set the [[Call]] internal property of F as described in
        //   15.3.4.5.1.
        // 13. Set the [[Construct]] internal property of F as described in
        //   15.3.4.5.2.
        // 14. Set the [[HasInstance]] internal property of F as described in
        //   15.3.4.5.3.
        var bound;
        var binder = function () {

            if (this instanceof bound) {
                // 15.3.4.5.2 [[Construct]]
                // When the [[Construct]] internal method of a function object,
                // F that was created using the bind function is called with a
                // list of arguments ExtraArgs, the following steps are taken:
                // 1. Let target be the value of F's [[TargetFunction]]
                //   internal property.
                // 2. If target has no [[Construct]] internal method, a
                //   TypeError exception is thrown.
                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Construct]] internal
                //   method of target providing args as the arguments.

                var result = target.apply(
                    this,
                    array_concat.call(args, array_slice.call(arguments))
                );
                if ($Object(result) === result) {
                    return result;
                }
                return this;

            } else {
                // 15.3.4.5.1 [[Call]]
                // When the [[Call]] internal method of a function object, F,
                // which was created using the bind function is called with a
                // this value and a list of arguments ExtraArgs, the following
                // steps are taken:
                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 2. Let boundThis be the value of F's [[BoundThis]] internal
                //   property.
                // 3. Let target be the value of F's [[TargetFunction]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Call]] internal method
                //   of target providing boundThis as the this value and
                //   providing args as the arguments.

                // equiv: target.call(this, ...boundArgs, ...args)
                return target.apply(
                    that,
                    array_concat.call(args, array_slice.call(arguments))
                );

            }

        };

        // 15. If the [[Class]] internal property of Target is "Function", then
        //     a. Let L be the length property of Target minus the length of A.
        //     b. Set the length own property of F to either 0 or L, whichever is
        //       larger.
        // 16. Else set the length own property of F to 0.

        var boundLength = max(0, target.length - args.length);

        // 17. Set the attributes of the length own property of F to the values
        //   specified in 15.3.5.1.
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
            array_push.call(boundArgs, '$' + i);
        }

        // XXX Build a dynamic function with desired amount of arguments is the only
        // way to set the length property of a function.
        // In environments where Content Security Policies enabled (Chrome extensions,
        // for ex.) all use of eval or Function costructor throws an exception.
        // However in all of these environments Function.prototype.bind exists
        // and so this code will never be executed.
        bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

        if (target.prototype) {
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            // Clean up dangling references.
            Empty.prototype = null;
        }

        // TODO
        // 18. Set the [[Extensible]] internal property of F to true.

        // TODO
        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
        // 20. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
        //   false.
        // 21. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
        //   and false.

        // TODO
        // NOTE Function objects created using Function.prototype.bind do not
        // have a prototype property or the [[Code]], [[FormalParameters]], and
        // [[Scope]] internal properties.
        // XXX can't delete prototype in pure-js.

        // 22. Return F.
        return bound;
    }
});

// _Please note: Shortcuts are defined after `Function.prototype.bind` as we
// us it in defining shortcuts.
var owns = call.bind(ObjectPrototype.hasOwnProperty);
var toStr = call.bind(ObjectPrototype.toString);
var strSlice = call.bind(StringPrototype.slice);
var strSplit = call.bind(StringPrototype.split);

//
// Array
// =====
//

var isArray = $Array.isArray || function isArray(obj) {
    return toStr(obj) === '[object Array]';
};

// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.13
// Return len+argCount.
// [bugfix, ielt8]
// IE < 8 bug: [].unshift(0) === undefined but should be "1"
var hasUnshiftReturnValueBug = [].unshift(0) !== 1;
defineProperties(ArrayPrototype, {
    unshift: function () {
        array_unshift.apply(this, arguments);
        return this.length;
    }
}, hasUnshiftReturnValueBug);

// ES5 15.4.3.2
// http://es5.github.com/#x15.4.3.2
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
defineProperties($Array, { isArray: isArray });

// The IsCallable() check in the Array functions
// has been replaced with a strict check on the
// internal class of the object to trap cases where
// the provided function was actually a regular
// expression literal, which in V8 and
// JavaScriptCore is a typeof "function".  Only in
// V8 are regular expression literals permitted as
// reduce parameters, so it is desirable in the
// general case for the shim to match the more
// strict and common behavior of rejecting regular
// expressions.

// ES5 15.4.4.18
// http://es5.github.com/#x15.4.4.18
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach

// Check failure of by-index access of string characters (IE < 9)
// and failure of `0 in boxedString` (Rhino)
var boxedString = $Object('a');
var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

var properlyBoxesContext = function properlyBoxed(method) {
    // Check node 0.6.21 bug where third parameter is not boxed
    var properlyBoxesNonStrict = true;
    var properlyBoxesStrict = true;
    if (method) {
        method.call('foo', function (_, __, context) {
            if (typeof context !== 'object') { properlyBoxesNonStrict = false; }
        });

        method.call([1], function () {
            'use strict';

            properlyBoxesStrict = typeof this === 'string';
        }, 'x');
    }
    return !!method && properlyBoxesNonStrict && properlyBoxesStrict;
};

defineProperties(ArrayPrototype, {
    forEach: function forEach(callbackfn /*, thisArg*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var i = -1;
        var length = self.length >>> 0;
        var T;
        if (arguments.length > 1) {
          T = arguments[1];
        }

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.forEach callback must be a function');
        }

        while (++i < length) {
            if (i in self) {
                // Invoke the callback function with call, passing arguments:
                // context, property value, property key, thisArg object
                if (typeof T !== 'undefined') {
                    callbackfn.call(T, self[i], i, object);
                } else {
                    callbackfn(self[i], i, object);
                }
            }
        }
    }
}, !properlyBoxesContext(ArrayPrototype.forEach));

// ES5 15.4.4.19
// http://es5.github.com/#x15.4.4.19
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
defineProperties(ArrayPrototype, {
    map: function map(callbackfn/*, thisArg*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = self.length >>> 0;
        var result = $Array(length);
        var T;
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.map callback must be a function');
        }

        for (var i = 0; i < length; i++) {
            if (i in self) {
                if (typeof T !== 'undefined') {
                    result[i] = callbackfn.call(T, self[i], i, object);
                } else {
                    result[i] = callbackfn(self[i], i, object);
                }
            }
        }
        return result;
    }
}, !properlyBoxesContext(ArrayPrototype.map));

// ES5 15.4.4.20
// http://es5.github.com/#x15.4.4.20
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
defineProperties(ArrayPrototype, {
    filter: function filter(callbackfn /*, thisArg*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = self.length >>> 0;
        var result = [];
        var value;
        var T;
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.filter callback must be a function');
        }

        for (var i = 0; i < length; i++) {
            if (i in self) {
                value = self[i];
                if (typeof T === 'undefined' ? callbackfn(value, i, object) : callbackfn.call(T, value, i, object)) {
                    array_push.call(result, value);
                }
            }
        }
        return result;
    }
}, !properlyBoxesContext(ArrayPrototype.filter));

// ES5 15.4.4.16
// http://es5.github.com/#x15.4.4.16
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
defineProperties(ArrayPrototype, {
    every: function every(callbackfn /*, thisArg*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = self.length >>> 0;
        var T;
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.every callback must be a function');
        }

        for (var i = 0; i < length; i++) {
            if (i in self && !(typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
                return false;
            }
        }
        return true;
    }
}, !properlyBoxesContext(ArrayPrototype.every));

// ES5 15.4.4.17
// http://es5.github.com/#x15.4.4.17
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
defineProperties(ArrayPrototype, {
    some: function some(callbackfn/*, thisArg */) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = self.length >>> 0;
        var T;
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.some callback must be a function');
        }

        for (var i = 0; i < length; i++) {
            if (i in self && (typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
                return true;
            }
        }
        return false;
    }
}, !properlyBoxesContext(ArrayPrototype.some));

// ES5 15.4.4.21
// http://es5.github.com/#x15.4.4.21
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
var reduceCoercesToObject = false;
if (ArrayPrototype.reduce) {
    reduceCoercesToObject = typeof ArrayPrototype.reduce.call('es5', function (_, __, ___, list) { return list; }) === 'object';
}
defineProperties(ArrayPrototype, {
    reduce: function reduce(callbackfn /*, initialValue*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.reduce callback must be a function');
        }

        // no value to return if no initial value and an empty array
        if (length === 0 && arguments.length === 1) {
            throw new TypeError('reduce of empty array with no initial value');
        }

        var i = 0;
        var result;
        if (arguments.length >= 2) {
            result = arguments[1];
        } else {
            do {
                if (i in self) {
                    result = self[i++];
                    break;
                }

                // if array contains no values, no initial value to return
                if (++i >= length) {
                    throw new TypeError('reduce of empty array with no initial value');
                }
            } while (true);
        }

        for (; i < length; i++) {
            if (i in self) {
                result = callbackfn(result, self[i], i, object);
            }
        }

        return result;
    }
}, !reduceCoercesToObject);

// ES5 15.4.4.22
// http://es5.github.com/#x15.4.4.22
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
var reduceRightCoercesToObject = false;
if (ArrayPrototype.reduceRight) {
    reduceRightCoercesToObject = typeof ArrayPrototype.reduceRight.call('es5', function (_, __, ___, list) { return list; }) === 'object';
}
defineProperties(ArrayPrototype, {
    reduceRight: function reduceRight(callbackfn/*, initial*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.reduceRight callback must be a function');
        }

        // no value to return if no initial value, empty array
        if (length === 0 && arguments.length === 1) {
            throw new TypeError('reduceRight of empty array with no initial value');
        }

        var result;
        var i = length - 1;
        if (arguments.length >= 2) {
            result = arguments[1];
        } else {
            do {
                if (i in self) {
                    result = self[i--];
                    break;
                }

                // if array contains no values, no initial value to return
                if (--i < 0) {
                    throw new TypeError('reduceRight of empty array with no initial value');
                }
            } while (true);
        }

        if (i < 0) {
            return result;
        }

        do {
            if (i in self) {
                result = callbackfn(result, self[i], i, object);
            }
        } while (i--);

        return result;
    }
}, !reduceRightCoercesToObject);

// ES5 15.4.4.14
// http://es5.github.com/#x15.4.4.14
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
var hasFirefox2IndexOfBug = ArrayPrototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
defineProperties(ArrayPrototype, {
    indexOf: function indexOf(searchElement /*, fromIndex */) {
        var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
        var length = self.length >>> 0;

        if (length === 0) {
            return -1;
        }

        var i = 0;
        if (arguments.length > 1) {
            i = ES.ToInteger(arguments[1]);
        }

        // handle negative indices
        i = i >= 0 ? i : max(0, length + i);
        for (; i < length; i++) {
            if (i in self && self[i] === searchElement) {
                return i;
            }
        }
        return -1;
    }
}, hasFirefox2IndexOfBug);

// ES5 15.4.4.15
// http://es5.github.com/#x15.4.4.15
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
var hasFirefox2LastIndexOfBug = ArrayPrototype.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
defineProperties(ArrayPrototype, {
    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */) {
        var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
        var length = self.length >>> 0;

        if (length === 0) {
            return -1;
        }
        var i = length - 1;
        if (arguments.length > 1) {
            i = min(i, ES.ToInteger(arguments[1]));
        }
        // handle negative indices
        i = i >= 0 ? i : length - Math.abs(i);
        for (; i >= 0; i--) {
            if (i in self && searchElement === self[i]) {
                return i;
            }
        }
        return -1;
    }
}, hasFirefox2LastIndexOfBug);

// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.12
var spliceNoopReturnsEmptyArray = (function () {
    var a = [1, 2];
    var result = a.splice();
    return a.length === 2 && isArray(result) && result.length === 0;
}());
defineProperties(ArrayPrototype, {
    // Safari 5.0 bug where .splice() returns undefined
    splice: function splice(start, deleteCount) {
        if (arguments.length === 0) {
            return [];
        } else {
            return array_splice.apply(this, arguments);
        }
    }
}, !spliceNoopReturnsEmptyArray);

var spliceWorksWithEmptyObject = (function () {
    var obj = {};
    ArrayPrototype.splice.call(obj, 0, 0, 1);
    return obj.length === 1;
}());
defineProperties(ArrayPrototype, {
    splice: function splice(start, deleteCount) {
        if (arguments.length === 0) { return []; }
        var args = arguments;
        this.length = max(ES.ToInteger(this.length), 0);
        if (arguments.length > 0 && typeof deleteCount !== 'number') {
            args = array_slice.call(arguments);
            if (args.length < 2) {
                array_push.call(args, this.length - start);
            } else {
                args[1] = ES.ToInteger(deleteCount);
            }
        }
        return array_splice.apply(this, args);
    }
}, !spliceWorksWithEmptyObject);
var spliceWorksWithLargeSparseArrays = (function () {
    // Per https://github.com/es-shims/es5-shim/issues/295
    // Safari 7/8 breaks with sparse arrays of size 1e5 or greater
    var arr = new $Array(1e5);
    // note: the index MUST be 8 or larger or the test will false pass
    arr[8] = 'x';
    arr.splice(1, 1);
    // note: this test must be defined *after* the indexOf shim
    // per https://github.com/es-shims/es5-shim/issues/313
    return arr.indexOf('x') === 7;
}());
var spliceWorksWithSmallSparseArrays = (function () {
    // Per https://github.com/es-shims/es5-shim/issues/295
    // Opera 12.15 breaks on this, no idea why.
    var n = 256;
    var arr = [];
    arr[n] = 'a';
    arr.splice(n + 1, 0, 'b');
    return arr[n] === 'a';
}());
defineProperties(ArrayPrototype, {
    splice: function splice(start, deleteCount) {
        var O = ES.ToObject(this);
        var A = [];
        var len = ES.ToUint32(O.length);
        var relativeStart = ES.ToInteger(start);
        var actualStart = relativeStart < 0 ? max((len + relativeStart), 0) : min(relativeStart, len);
        var actualDeleteCount = min(max(ES.ToInteger(deleteCount), 0), len - actualStart);

        var k = 0;
        var from;
        while (k < actualDeleteCount) {
            from = $String(actualStart + k);
            if (owns(O, from)) {
                A[k] = O[from];
            }
            k += 1;
        }

        var items = array_slice.call(arguments, 2);
        var itemCount = items.length;
        var to;
        if (itemCount < actualDeleteCount) {
            k = actualStart;
            while (k < (len - actualDeleteCount)) {
                from = $String(k + actualDeleteCount);
                to = $String(k + itemCount);
                if (owns(O, from)) {
                    O[to] = O[from];
                } else {
                    delete O[to];
                }
                k += 1;
            }
            k = len;
            while (k > (len - actualDeleteCount + itemCount)) {
                delete O[k - 1];
                k -= 1;
            }
        } else if (itemCount > actualDeleteCount) {
            k = len - actualDeleteCount;
            while (k > actualStart) {
                from = $String(k + actualDeleteCount - 1);
                to = $String(k + itemCount - 1);
                if (owns(O, from)) {
                    O[to] = O[from];
                } else {
                    delete O[to];
                }
                k -= 1;
            }
        }
        k = actualStart;
        for (var i = 0; i < items.length; ++i) {
            O[k] = items[i];
            k += 1;
        }
        O.length = len - actualDeleteCount + itemCount;

        return A;
    }
}, !spliceWorksWithLargeSparseArrays || !spliceWorksWithSmallSparseArrays);

//
// Object
// ======
//

// ES5 15.2.3.14
// http://es5.github.com/#x15.2.3.14

// http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
var hasDontEnumBug = !({ 'toString': null }).propertyIsEnumerable('toString');
var hasProtoEnumBug = function () {}.propertyIsEnumerable('prototype');
var hasStringEnumBug = !owns('x', '0');
var equalsConstructorPrototype = function (o) {
    var ctor = o.constructor;
    return ctor && ctor.prototype === o;
};
var blacklistedKeys = {
    $window: true,
    $console: true,
    $parent: true,
    $self: true,
    $frames: true,
    $frameElement: true,
    $webkitIndexedDB: true,
    $webkitStorageInfo: true
};
var hasAutomationEqualityBug = (function () {
    /* globals window */
    if (typeof window === 'undefined') { return false; }
    for (var k in window) {
        if (!blacklistedKeys['$' + k] && owns(window, k) && window[k] !== null && typeof window[k] === 'object') {
            try {
                equalsConstructorPrototype(window[k]);
            } catch (e) {
                return true;
            }
        }
    }
    return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (object) {
    if (typeof window === 'undefined' || !hasAutomationEqualityBug) { return equalsConstructorPrototype(object); }
    try {
        return equalsConstructorPrototype(object);
    } catch (e) {
        return false;
    }
};
var dontEnums = [
    'toString',
    'toLocaleString',
    'valueOf',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'constructor'
];
var dontEnumsLength = dontEnums.length;

var isArguments = function isArguments(value) {
    var str = toStr(value);
    var isArgs = str === '[object Arguments]';
    if (!isArgs) {
        isArgs = !isArray(value) &&
          value !== null &&
          typeof value === 'object' &&
          typeof value.length === 'number' &&
          value.length >= 0 &&
          isCallable(value.callee);
    }
    return isArgs;
};

defineProperties($Object, {
    keys: function keys(object) {
        var isFn = isCallable(object);
        var isArgs = isArguments(object);
        var isObject = object !== null && typeof object === 'object';
        var isStr = isObject && isString(object);

        if (!isObject && !isFn && !isArgs) {
            throw new TypeError('Object.keys called on a non-object');
        }

        var theKeys = [];
        var skipProto = hasProtoEnumBug && isFn;
        if ((isStr && hasStringEnumBug) || isArgs) {
            for (var i = 0; i < object.length; ++i) {
                array_push.call(theKeys, $String(i));
            }
        }

        if (!isArgs) {
            for (var name in object) {
                if (!(skipProto && name === 'prototype') && owns(object, name)) {
                    array_push.call(theKeys, $String(name));
                }
            }
        }

        if (hasDontEnumBug) {
            var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
            for (var j = 0; j < dontEnumsLength; j++) {
                var dontEnum = dontEnums[j];
                if (!(skipConstructor && dontEnum === 'constructor') && owns(object, dontEnum)) {
                    array_push.call(theKeys, dontEnum);
                }
            }
        }
        return theKeys;
    }
});

var keysWorksWithArguments = $Object.keys && (function () {
    // Safari 5.0 bug
    return $Object.keys(arguments).length === 2;
}(1, 2));
var originalKeys = $Object.keys;
defineProperties($Object, {
    keys: function keys(object) {
        if (isArguments(object)) {
            return originalKeys(array_slice.call(object));
        } else {
            return originalKeys(object);
        }
    }
}, !keysWorksWithArguments);

//
// Date
// ====
//

// ES5 15.9.5.43
// http://es5.github.com/#x15.9.5.43
// This function returns a String value represent the instance in time
// represented by this Date object. The format of the String is the Date Time
// string format defined in 15.9.1.15. All fields are present in the String.
// The time zone is always UTC, denoted by the suffix Z. If the time value of
// this object is not a finite Number a RangeError exception is thrown.
var negativeDate = -62198755200000;
var negativeYearString = '-000001';
var hasNegativeDateBug = Date.prototype.toISOString && new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1;
var hasSafari51DateBug = Date.prototype.toISOString && new Date(-1).toISOString() !== '1969-12-31T23:59:59.999Z';

defineProperties(Date.prototype, {
    toISOString: function toISOString() {
        var result, length, value, year, month;
        if (!isFinite(this)) {
            throw new RangeError('Date.prototype.toISOString called on non-finite value.');
        }

        year = this.getUTCFullYear();

        month = this.getUTCMonth();
        // see https://github.com/es-shims/es5-shim/issues/111
        year += Math.floor(month / 12);
        month = (month % 12 + 12) % 12;

        // the date time string format is specified in 15.9.1.15.
        result = [month + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()];
        year = (
            (year < 0 ? '-' : (year > 9999 ? '+' : '')) +
            strSlice('00000' + Math.abs(year), (0 <= year && year <= 9999) ? -4 : -6)
        );

        length = result.length;
        while (length--) {
            value = result[length];
            // pad months, days, hours, minutes, and seconds to have two
            // digits.
            if (value < 10) {
                result[length] = '0' + value;
            }
        }
        // pad milliseconds to have three digits.
        return (
            year + '-' + array_slice.call(result, 0, 2).join('-') +
            'T' + array_slice.call(result, 2).join(':') + '.' +
            strSlice('000' + this.getUTCMilliseconds(), -3) + 'Z'
        );
    }
}, hasNegativeDateBug || hasSafari51DateBug);

// ES5 15.9.5.44
// http://es5.github.com/#x15.9.5.44
// This function provides a String representation of a Date object for use by
// JSON.stringify (15.12.3).
var dateToJSONIsSupported = (function () {
    try {
        return Date.prototype.toJSON &&
            new Date(NaN).toJSON() === null &&
            new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1 &&
            Date.prototype.toJSON.call({ // generic
                toISOString: function () { return true; }
            });
    } catch (e) {
        return false;
    }
}());
if (!dateToJSONIsSupported) {
    Date.prototype.toJSON = function toJSON(key) {
        // When the toJSON method is called with argument key, the following
        // steps are taken:

        // 1.  Let O be the result of calling ToObject, giving it the this
        // value as its argument.
        // 2. Let tv be ES.ToPrimitive(O, hint Number).
        var O = $Object(this);
        var tv = ES.ToPrimitive(O);
        // 3. If tv is a Number and is not finite, return null.
        if (typeof tv === 'number' && !isFinite(tv)) {
            return null;
        }
        // 4. Let toISO be the result of calling the [[Get]] internal method of
        // O with argument "toISOString".
        var toISO = O.toISOString;
        // 5. If IsCallable(toISO) is false, throw a TypeError exception.
        if (!isCallable(toISO)) {
            throw new TypeError('toISOString property is not callable');
        }
        // 6. Return the result of calling the [[Call]] internal method of
        //  toISO with O as the this value and an empty argument list.
        return toISO.call(O);

        // NOTE 1 The argument is ignored.

        // NOTE 2 The toJSON function is intentionally generic; it does not
        // require that its this value be a Date object. Therefore, it can be
        // transferred to other kinds of objects for use as a method. However,
        // it does require that any such object have a toISOString method. An
        // object is free to use the argument key to filter its
        // stringification.
    };
}

// ES5 15.9.4.2
// http://es5.github.com/#x15.9.4.2
// based on work shared by Daniel Friesen (dantman)
// http://gist.github.com/303249
var supportsExtendedYears = Date.parse('+033658-09-27T01:46:40.000Z') === 1e15;
var acceptsInvalidDates = !isNaN(Date.parse('2012-04-04T24:00:00.500Z')) || !isNaN(Date.parse('2012-11-31T23:59:59.000Z')) || !isNaN(Date.parse('2012-12-31T23:59:60.000Z'));
var doesNotParseY2KNewYear = isNaN(Date.parse('2000-01-01T00:00:00.000Z'));
if (!Date.parse || doesNotParseY2KNewYear || acceptsInvalidDates || !supportsExtendedYears) {
    // XXX global assignment won't work in embeddings that use
    // an alternate object for the context.
    /* global Date: true */
    /* eslint-disable no-undef */
    Date = (function (NativeDate) {
    /* eslint-enable no-undef */
        // Date.length === 7
        var DateShim = function Date(Y, M, D, h, m, s, ms) {
            var length = arguments.length;
            var date;
            if (this instanceof NativeDate) {
                date = length === 1 && $String(Y) === Y ? // isString(Y)
                    // We explicitly pass it through parse:
                    new NativeDate(DateShim.parse(Y)) :
                    // We have to manually make calls depending on argument
                    // length here
                    length >= 7 ? new NativeDate(Y, M, D, h, m, s, ms) :
                    length >= 6 ? new NativeDate(Y, M, D, h, m, s) :
                    length >= 5 ? new NativeDate(Y, M, D, h, m) :
                    length >= 4 ? new NativeDate(Y, M, D, h) :
                    length >= 3 ? new NativeDate(Y, M, D) :
                    length >= 2 ? new NativeDate(Y, M) :
                    length >= 1 ? new NativeDate(Y) :
                                  new NativeDate();
            } else {
                date = NativeDate.apply(this, arguments);
            }
            // Prevent mixups with unfixed Date object
            defineProperties(date, { constructor: DateShim }, true);
            return date;
        };

        // 15.9.1.15 Date Time String Format.
        var isoDateExpression = new RegExp('^' +
            '(\\d{4}|[+-]\\d{6})' + // four-digit year capture or sign +
                                      // 6-digit extended year
            '(?:-(\\d{2})' + // optional month capture
            '(?:-(\\d{2})' + // optional day capture
            '(?:' + // capture hours:minutes:seconds.milliseconds
                'T(\\d{2})' + // hours capture
                ':(\\d{2})' + // minutes capture
                '(?:' + // optional :seconds.milliseconds
                    ':(\\d{2})' + // seconds capture
                    '(?:(\\.\\d{1,}))?' + // milliseconds capture
                ')?' +
            '(' + // capture UTC offset component
                'Z|' + // UTC capture
                '(?:' + // offset specifier +/-hours:minutes
                    '([-+])' + // sign capture
                    '(\\d{2})' + // hours offset capture
                    ':(\\d{2})' + // minutes offset capture
                ')' +
            ')?)?)?)?' +
        '$');

        var months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

        var dayFromMonth = function dayFromMonth(year, month) {
            var t = month > 1 ? 1 : 0;
            return (
                months[month] +
                Math.floor((year - 1969 + t) / 4) -
                Math.floor((year - 1901 + t) / 100) +
                Math.floor((year - 1601 + t) / 400) +
                365 * (year - 1970)
            );
        };

        var toUTC = function toUTC(t) {
            return $Number(new NativeDate(1970, 0, 1, 0, 0, 0, t));
        };

        // Copy any custom methods a 3rd party library may have added
        for (var key in NativeDate) {
            if (owns(NativeDate, key)) {
                DateShim[key] = NativeDate[key];
            }
        }

        // Copy "native" methods explicitly; they may be non-enumerable
        defineProperties(DateShim, {
            now: NativeDate.now,
            UTC: NativeDate.UTC
        }, true);
        DateShim.prototype = NativeDate.prototype;
        defineProperties(DateShim.prototype, {
            constructor: DateShim
        }, true);

        // Upgrade Date.parse to handle simplified ISO 8601 strings
        var parseShim = function parse(string) {
            var match = isoDateExpression.exec(string);
            if (match) {
                // parse months, days, hours, minutes, seconds, and milliseconds
                // provide default values if necessary
                // parse the UTC offset component
                var year = $Number(match[1]),
                    month = $Number(match[2] || 1) - 1,
                    day = $Number(match[3] || 1) - 1,
                    hour = $Number(match[4] || 0),
                    minute = $Number(match[5] || 0),
                    second = $Number(match[6] || 0),
                    millisecond = Math.floor($Number(match[7] || 0) * 1000),
                    // When time zone is missed, local offset should be used
                    // (ES 5.1 bug)
                    // see https://bugs.ecmascript.org/show_bug.cgi?id=112
                    isLocalTime = Boolean(match[4] && !match[8]),
                    signOffset = match[9] === '-' ? 1 : -1,
                    hourOffset = $Number(match[10] || 0),
                    minuteOffset = $Number(match[11] || 0),
                    result;
                if (
                    hour < (
                        minute > 0 || second > 0 || millisecond > 0 ?
                        24 : 25
                    ) &&
                    minute < 60 && second < 60 && millisecond < 1000 &&
                    month > -1 && month < 12 && hourOffset < 24 &&
                    minuteOffset < 60 && // detect invalid offsets
                    day > -1 &&
                    day < (
                        dayFromMonth(year, month + 1) -
                        dayFromMonth(year, month)
                    )
                ) {
                    result = (
                        (dayFromMonth(year, month) + day) * 24 +
                        hour +
                        hourOffset * signOffset
                    ) * 60;
                    result = (
                        (result + minute + minuteOffset * signOffset) * 60 +
                        second
                    ) * 1000 + millisecond;
                    if (isLocalTime) {
                        result = toUTC(result);
                    }
                    if (-8.64e15 <= result && result <= 8.64e15) {
                        return result;
                    }
                }
                return NaN;
            }
            return NativeDate.parse.apply(this, arguments);
        };
        defineProperties(DateShim, { parse: parseShim });

        return DateShim;
    }(Date));
    /* global Date: false */
}

// ES5 15.9.4.4
// http://es5.github.com/#x15.9.4.4
if (!Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}

//
// Number
// ======
//

// ES5.1 15.7.4.5
// http://es5.github.com/#x15.7.4.5
var hasToFixedBugs = NumberPrototype.toFixed && (
  (0.00008).toFixed(3) !== '0.000' ||
  (0.9).toFixed(0) !== '1' ||
  (1.255).toFixed(2) !== '1.25' ||
  (1000000000000000128).toFixed(0) !== '1000000000000000128'
);

var toFixedHelpers = {
  base: 1e7,
  size: 6,
  data: [0, 0, 0, 0, 0, 0],
  multiply: function multiply(n, c) {
      var i = -1;
      var c2 = c;
      while (++i < toFixedHelpers.size) {
          c2 += n * toFixedHelpers.data[i];
          toFixedHelpers.data[i] = c2 % toFixedHelpers.base;
          c2 = Math.floor(c2 / toFixedHelpers.base);
      }
  },
  divide: function divide(n) {
      var i = toFixedHelpers.size, c = 0;
      while (--i >= 0) {
          c += toFixedHelpers.data[i];
          toFixedHelpers.data[i] = Math.floor(c / n);
          c = (c % n) * toFixedHelpers.base;
      }
  },
  numToString: function numToString() {
      var i = toFixedHelpers.size;
      var s = '';
      while (--i >= 0) {
          if (s !== '' || i === 0 || toFixedHelpers.data[i] !== 0) {
              var t = $String(toFixedHelpers.data[i]);
              if (s === '') {
                  s = t;
              } else {
                  s += strSlice('0000000', 0, 7 - t.length) + t;
              }
          }
      }
      return s;
  },
  pow: function pow(x, n, acc) {
      return (n === 0 ? acc : (n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)));
  },
  log: function log(x) {
      var n = 0;
      var x2 = x;
      while (x2 >= 4096) {
          n += 12;
          x2 /= 4096;
      }
      while (x2 >= 2) {
          n += 1;
          x2 /= 2;
      }
      return n;
  }
};

defineProperties(NumberPrototype, {
    toFixed: function toFixed(fractionDigits) {
        var f, x, s, m, e, z, j, k;

        // Test for NaN and round fractionDigits down
        f = $Number(fractionDigits);
        f = f !== f ? 0 : Math.floor(f);

        if (f < 0 || f > 20) {
            throw new RangeError('Number.toFixed called with invalid number of decimals');
        }

        x = $Number(this);

        // Test for NaN
        if (x !== x) {
            return 'NaN';
        }

        // If it is too big or small, return the string value of the number
        if (x <= -1e21 || x >= 1e21) {
            return $String(x);
        }

        s = '';

        if (x < 0) {
            s = '-';
            x = -x;
        }

        m = '0';

        if (x > 1e-21) {
            // 1e-21 < x < 1e21
            // -70 < log2(x) < 70
            e = toFixedHelpers.log(x * toFixedHelpers.pow(2, 69, 1)) - 69;
            z = (e < 0 ? x * toFixedHelpers.pow(2, -e, 1) : x / toFixedHelpers.pow(2, e, 1));
            z *= 0x10000000000000; // Math.pow(2, 52);
            e = 52 - e;

            // -18 < e < 122
            // x = z / 2 ^ e
            if (e > 0) {
                toFixedHelpers.multiply(0, z);
                j = f;

                while (j >= 7) {
                    toFixedHelpers.multiply(1e7, 0);
                    j -= 7;
                }

                toFixedHelpers.multiply(toFixedHelpers.pow(10, j, 1), 0);
                j = e - 1;

                while (j >= 23) {
                    toFixedHelpers.divide(1 << 23);
                    j -= 23;
                }

                toFixedHelpers.divide(1 << j);
                toFixedHelpers.multiply(1, 1);
                toFixedHelpers.divide(2);
                m = toFixedHelpers.numToString();
            } else {
                toFixedHelpers.multiply(0, z);
                toFixedHelpers.multiply(1 << (-e), 0);
                m = toFixedHelpers.numToString() + strSlice('0.00000000000000000000', 2, 2 + f);
            }
        }

        if (f > 0) {
            k = m.length;

            if (k <= f) {
                m = s + strSlice('0.0000000000000000000', 0, f - k + 2) + m;
            } else {
                m = s + strSlice(m, 0, k - f) + '.' + strSlice(m, k - f);
            }
        } else {
            m = s + m;
        }

        return m;
    }
}, hasToFixedBugs);

//
// String
// ======
//

// ES5 15.5.4.14
// http://es5.github.com/#x15.5.4.14

// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
// Many browsers do not split properly with regular expressions or they
// do not perform the split correctly under obscure conditions.
// See http://blog.stevenlevithan.com/archives/cross-browser-split
// I've tested in many browsers and this seems to cover the deviant ones:
//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
//       [undefined, "t", undefined, "e", ...]
//    ''.split(/.?/) should be [], not [""]
//    '.'.split(/()()/) should be ["."], not ["", "", "."]

if (
    'ab'.split(/(?:ab)*/).length !== 2 ||
    '.'.split(/(.?)(.?)/).length !== 4 ||
    'tesst'.split(/(s)*/)[1] === 't' ||
    'test'.split(/(?:)/, -1).length !== 4 ||
    ''.split(/.?/).length ||
    '.'.split(/()()/).length > 1
) {
    (function () {
        var compliantExecNpcg = typeof (/()??/).exec('')[1] === 'undefined'; // NPCG: nonparticipating capturing group

        StringPrototype.split = function (separator, limit) {
            var string = this;
            if (typeof separator === 'undefined' && limit === 0) {
                return [];
            }

            // If `separator` is not a regex, use native split
            if (!isRegex(separator)) {
                return strSplit(this, separator, limit);
            }

            var output = [];
            var flags = (separator.ignoreCase ? 'i' : '') +
                        (separator.multiline ? 'm' : '') +
                        (separator.unicode ? 'u' : '') + // in ES6
                        (separator.sticky ? 'y' : ''), // Firefox 3+ and ES6
                lastLastIndex = 0,
                // Make `global` and avoid `lastIndex` issues by working with a copy
                separator2, match, lastIndex, lastLength;
            var separatorCopy = new RegExp(separator.source, flags + 'g');
            string += ''; // Type-convert
            if (!compliantExecNpcg) {
                // Doesn't need flags gy, but they don't hurt
                separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
            }
            /* Values for `limit`, per the spec:
             * If undefined: 4294967295 // Math.pow(2, 32) - 1
             * If 0, Infinity, or NaN: 0
             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
             * If other: Type-convert, then use the above rules
             */
            var splitLimit = typeof limit === 'undefined' ?
                -1 >>> 0 : // Math.pow(2, 32) - 1
                ES.ToUint32(limit);
            match = separatorCopy.exec(string);
            while (match) {
                // `separatorCopy.lastIndex` is not reliable cross-browser
                lastIndex = match.index + match[0].length;
                if (lastIndex > lastLastIndex) {
                    array_push.call(output, strSlice(string, lastLastIndex, match.index));
                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
                    // nonparticipating capturing groups
                    if (!compliantExecNpcg && match.length > 1) {
                        /* eslint-disable no-loop-func */
                        match[0].replace(separator2, function () {
                            for (var i = 1; i < arguments.length - 2; i++) {
                                if (typeof arguments[i] === 'undefined') {
                                    match[i] = void 0;
                                }
                            }
                        });
                        /* eslint-enable no-loop-func */
                    }
                    if (match.length > 1 && match.index < string.length) {
                        array_push.apply(output, array_slice.call(match, 1));
                    }
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= splitLimit) {
                        break;
                    }
                }
                if (separatorCopy.lastIndex === match.index) {
                    separatorCopy.lastIndex++; // Avoid an infinite loop
                }
                match = separatorCopy.exec(string);
            }
            if (lastLastIndex === string.length) {
                if (lastLength || !separatorCopy.test('')) {
                    array_push.call(output, '');
                }
            } else {
                array_push.call(output, strSlice(string, lastLastIndex));
            }
            return output.length > splitLimit ? strSlice(output, 0, splitLimit) : output;
        };
    }());

// [bugfix, chrome]
// If separator is undefined, then the result array contains just one String,
// which is the this value (converted to a String). If limit is not undefined,
// then the output array is truncated so that it contains no more than limit
// elements.
// "0".split(undefined, 0) -> []
} else if ('0'.split(void 0, 0).length) {
    StringPrototype.split = function split(separator, limit) {
        if (typeof separator === 'undefined' && limit === 0) { return []; }
        return strSplit(this, separator, limit);
    };
}

var str_replace = StringPrototype.replace;
var replaceReportsGroupsCorrectly = (function () {
    var groups = [];
    'x'.replace(/x(.)?/g, function (match, group) {
        array_push.call(groups, group);
    });
    return groups.length === 1 && typeof groups[0] === 'undefined';
}());

if (!replaceReportsGroupsCorrectly) {
    StringPrototype.replace = function replace(searchValue, replaceValue) {
        var isFn = isCallable(replaceValue);
        var hasCapturingGroups = isRegex(searchValue) && (/\)[*?]/).test(searchValue.source);
        if (!isFn || !hasCapturingGroups) {
            return str_replace.call(this, searchValue, replaceValue);
        } else {
            var wrappedReplaceValue = function (match) {
                var length = arguments.length;
                var originalLastIndex = searchValue.lastIndex;
                searchValue.lastIndex = 0;
                var args = searchValue.exec(match) || [];
                searchValue.lastIndex = originalLastIndex;
                array_push.call(args, arguments[length - 2], arguments[length - 1]);
                return replaceValue.apply(this, args);
            };
            return str_replace.call(this, searchValue, wrappedReplaceValue);
        }
    };
}

// ECMA-262, 3rd B.2.3
// Not an ECMAScript standard, although ECMAScript 3rd Edition has a
// non-normative section suggesting uniform semantics and it should be
// normalized across all browsers
// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
var string_substr = StringPrototype.substr;
var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
defineProperties(StringPrototype, {
    substr: function substr(start, length) {
        var normalizedStart = start;
        if (start < 0) {
            normalizedStart = max(this.length + start, 0);
        }
        return string_substr.call(this, normalizedStart, length);
    }
}, hasNegativeSubstrBug);

// ES5 15.5.4.20
// whitespace from: http://es5.github.io/#x15.5.4.20
var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
    '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
    '\u2029\uFEFF';
var zeroWidth = '\u200b';
var wsRegexChars = '[' + ws + ']';
var trimBeginRegexp = new RegExp('^' + wsRegexChars + wsRegexChars + '*');
var trimEndRegexp = new RegExp(wsRegexChars + wsRegexChars + '*$');
var hasTrimWhitespaceBug = StringPrototype.trim && (ws.trim() || !zeroWidth.trim());
defineProperties(StringPrototype, {
    // http://blog.stevenlevithan.com/archives/faster-trim-javascript
    // http://perfectionkills.com/whitespace-deviations/
    trim: function trim() {
        if (typeof this === 'undefined' || this === null) {
            throw new TypeError("can't convert " + this + ' to object');
        }
        return $String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');
    }
}, hasTrimWhitespaceBug);

// ES-5 15.1.2.2
if (parseInt(ws + '08') !== 8 || parseInt(ws + '0x16') !== 22) {
    /* global parseInt: true */
    parseInt = (function (origParseInt) {
        var hexRegex = /^0[xX]/;
        return function parseInt(str, radix) {
            var string = $String(str).trim();
            var defaultedRadix = $Number(radix) || (hexRegex.test(string) ? 16 : 10);
            return origParseInt(string, defaultedRadix);
        };
    }(parseInt));
}

}));

},{}],33:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"assert":"assert","dup":30}],34:[function(require,module,exports){

var type_checker=require("type_checker");
var board_util=null;
var assert=require("assert")



var imgs={};

imgs.bishop=require("./img/bishop.svg");
imgs.king=require("./img/king.svg");
imgs.knight=require("./img/knight.svg");
imgs.rook=require("./img/rook.svg");
imgs.pawn=require("./img/pawn.svg");
imgs.queen=require("./img/queen.svg");

var unicode={};
unicode["white king"]="\u2654";
unicode["white queen"]="\u2655";
unicode["white rook"]="\u2656";
unicode["white bishop"]="\u2657";
unicode["white knight"]="\u2658";
unicode["white pawn"]="\u2659";
unicode["black king"]="\u265A";
unicode["black queen"]="\u265B";
unicode["black rook"]="\u265C";
unicode["black bishop"]="\u265D";
unicode["black knight"]="\u265E";
unicode["black pawn"]="\u265F";

var div_temp=null;
var window=(function () {return this;})();
var get_temp_div=function () {
  if(div_temp)
    return div_temp;
  if(!window.document)
    throw new Error("document not found");
  
  div_temp=window.document.createElement("div")
  return div_temp;
};

var piece;
var config={}
piece=function(str){
  if(!config.configured)
    throw new Error("not configured call .config")
  type_checker.string(str)
  var pp=piece.parse_piece(str)
  if(!pp)
    throw new Error("invalid "+str)
  this.ispiece=true;
  this.moved=0;
  this.color=pp.color
  this._pname=pp.pname
};

piece.imgs=imgs;

piece.prototype.unicode=function () {
  var ts=this.toString();
  if(!(ts in unicode))
    throw new Error('not found')
  return unicode[ts];
};

piece.prototype.toJSON=function () {
  var onew={};
  for(var k in this){
    if(k=="html_piece")
      continue;
    if(typeof this[k]==typeof function(){})
      continue;
    onew[k]=this[k];
  }
  return onew;
}

piece.prototype.browser_element=function () {
  if(this.html_piece)
    return this.html_piece;
  var dt=get_temp_div();
  dt.innerHTML=imgs[this.pname];
  
  var svgele=dt.querySelector("svg");
  svgele.parentNode.removeChild(svgele);
  dt.innerHTML="";
  
  // console.error(imgs[this.pname]);
  
  Object.defineProperty(this,"html_piece",{
    enumerable:false,
    configurable:true,
    value:svgele
  });
  
  // console.log(this.pname);
  
  var pcolor=this.color;
  if(pcolor){
    var oppcolor=board_util.opposite_color(pcolor)
    svgele.setAttribute("class",""+this.pname+" "+pcolor)
    // var pth=[].slice.call(svgele.querySelectorAll("path,rect,circle"))
    // pth.forEach(function (p) {
    //   p.style.fill=pcolor;
    //   p.style.stroke=oppcolor;
    // })
  }
  
  return svgele;
};
Object.defineProperty(piece.prototype,"pname",{
  get:function (v) {
    return this._pname;
  },
  set:function (v) {
    if(config.valid_names(v)){
      this._pname=v;
      return v;
    }
    throw new Error("invalid name")
  }
})

piece.fromJSON=function(jstr) {
  var jo=JSON.parse(jstr)
  return Object.create(piece.prototype,jo);
}
piece.configure=function(bs){
  assert(!config.configured);
  type_checker.object(bs)
  type_checker.function(bs.valid_names)
  type_checker.function(bs.valid_colors)
  type_checker.object(bs.board_util)
  
  board_util=bs.board_util;
  config.valid_names=bs.valid_names;
  config.valid_colors=bs.valid_colors;
  config.configured=true;
  
  return true;
}

piece.valid_colors=function () {
  assert(config.configured);
  return config.valid_colors.apply(config,arguments);
};

piece.parse_piece=function (piece_name) {
  type_checker.string(piece_name)
  
  var m=/^([a-z]+) ([a-z]+)$/gi.exec(piece_name)
  if(!m)
    return false
  var color=m[1]
  var pname=m[2]
  if(!config.valid_colors(color))
    return false
  if(!config.valid_names(pname))
    return false
  return {
    color:color,
    pname:pname
  }
}

piece.interface=type_checker.define_interface({
  color:"",
  pname:""
},null)
piece.prototype.toString=function(){
  return this.color+" "+this.pname
};
piece.prototype.inspect=function () {
  return JSON.stringify(this)
}
//piece.prototype.toString;

module.exports=piece;
},{"./img/bishop.svg":22,"./img/king.svg":23,"./img/knight.svg":24,"./img/pawn.svg":25,"./img/queen.svg":26,"./img/rook.svg":27,"assert":"assert","type_checker":33}],35:[function(require,module,exports){

var assert=require("assert")
var type_checker=require("type_checker")
var config={
  
}
var check_square=function (n) {
  type_checker.number(config.size);
  if(isNaN(n)||n<1||n>config.size)
    throw new Error("error matching number for square")
}
var singlearg={}
singlearg[typeof ""]=function (pstr) {
  var xs=pstr.split("x")
  if(xs.length!=2)
    throw new Error("unparseable");
  return xs;
};
singlearg[typeof {}]=function (pobj) {
  type_checker.number(pobj.x)
  type_checker.number(pobj.y)
  return [pobj.x,pobj.y]
}

var position=function(xo,yo){
  var x,y;
  if(arguments.length==1){
    var xtype=typeof xo;
    if(xtype in singlearg){
      var both=singlearg[xtype](xo)
      x=parseInt(both[0]);
      y=parseInt(both[1]);
    }
  } else{
    x=parseInt(xo)
    y=parseInt(yo)
  }
  type_checker.number(x);
  type_checker.number(y);
  
  assert(config.configured)
  check_square(x);
  check_square(y);
  this.isposition=true;
  this.x=x;
  this.y=y;
};
var acode="A".charCodeAt();
position.prototype.notation=function () {
  return String.fromCharCode(acode+this.x-1)+this.y;
};
position.softfail_slow=function(x,y){
  try{
    return new position(x,y);
  }catch(e){
  }
  return false;
}
position.softfail=function (xo,yo) {
  var x,y;
  x=parseInt(xo);
  y=parseInt(yo);
  type_checker.number(x)
  type_checker.number(y)
  type_checker.number(config.size)
  if(x<1||x>config.size)
    return false;
  if(y<1||y>config.size)
    return false;
  return new position(x,y);
}
position.configure=function(c){
  if(config.configured)
    throw new Error("cannot config twice")
  type_checker.object(c);
  type_checker.number(c.size);
  config.configured=true
  config.size=c.size;
}
position.prototype.toString=function(){
  return this.x+"x"+this.y;
};
position.prototype.toJSON=position.prototype.toString;
position.prototype.inspect=function () {
  return JSON.stringify(this.toString());
};

module.exports=position;
},{"assert":"assert","type_checker":33}],36:[function(require,module,exports){
(function (process){

var window=(function(){return this;})();
var document=window.document;
var assert=require('assert')

var d_turn=function (bs) {
  
  var div=this.div=document.createElement("div");
  div.className="turn_display";
  
  var turn_title=document.createElement("h6");
  turn_title.appendChild(document.createTextNode("Turn"))
  
  
  var tdisplay=this.tdisplay=document.createElement("div");
  
  [turn_title,tdisplay].forEach(function (e) {
    div.appendChild(e);
  })
  // div.appendChild();
  
  var update=function () {
    var turn = bs.turn.toString();
    turn = turn.substr(0,1).toUpperCase()+turn.substr(1).toLowerCase();
    tdisplay.innerHTML="";
    tdisplay.appendChild(document.createTextNode(turn));
  };
  // bs.on("initialize",update);
  bs.on("movedesc",update);
  bs.on("animated",update);
  process.nextTick(update);
};

d_turn.prototype.attach=function (parent) {
  var me=this;
    parent.appendChild(me.div);
  return;
};
d_turn.prototype.detach=function (parent) {
  return parent.removeChild(this.div);
};

module.exports=d_turn;

}).call(this,require('_process'))
},{"_process":41,"assert":"assert"}],37:[function(require,module,exports){


var board_util=require("./board_util.js")
var position=require("./position.js")
var assert=require("assert")
var type_checker=require("type_checker")

var HIDETODO=true;


var move=function (opos,dx,dy) {
  var npos=position.softfail(opos.x+dx,opos.y+dy)
  if(!npos)
    return false;
  return npos;
};

var vasserts=function(bs,piece){
  type_checker.object(piece)
  type_checker.object(piece.position)
  assert(piece.color==="white"||piece.color==="black")
};



var vmoves={}
vmoves.pawn=function(bs,piece){
  var color=piece.color;
  var opos=piece.position;
  vasserts.apply(this,arguments)
  
  var direction=1;
  var homerow=2;
  if(color!="white"){
    homerow=7;
    direction=-1;
  }
  if(opos.y!=homerow){
    assert(piece.moved)
  }
  
  var diffs=[
    {
      dx:0,
      dy:1,
      require_empty:[{
        dx:0,
        dy:1
      }]
    },
    {
      dx:1,
      dy:1,
      requires_occ:true
    },
    {
      dx:-1,
      dy:1,
      requires_occ:true
    }
  ];
  if(!piece.moved){
    diffs.push({
      dx:0,
      dy:2,
      isjump:true,
      require_empty:[{
        dx:0,
        dy:1
      },{
        dx:0,
        dy:2
      }]
    })
  }
  var promoptions="queen,knight,rook,bishop".split(",");
  
  // .forEach(function (promo) {
  //   diffs.push({
  //     dx:0,
  //     dy:1,
  //     islast:true,
  //     promo:promo,
  //     require_empty:[{
  //       dx:0,
  //       dy:1
  //     }]
  //   })
  // })
  
  if(color!="white")
    diffs.forEach(function (e) {
      e.dy*=-1;
      if(e.require_empty){
        e.require_empty.forEach(function (rempty) {
          rempty.dx*=-1;
          rempty.dy*=-1;
        })
      }
    });
  var promos=[];
  var trymoves=diffs.map(function (dpos) {
    var rempty=false;
    var rrow=false;
    if(dpos.require_empty){
      for (var i = 0; i < dpos.require_empty.length; i++) {
        var re_mv=dpos.require_empty[i];
        rempty=move(opos,re_mv.dx,re_mv.dy)
        if(bs.positions[rempty.toString()])
          return false;
      };
    }
    delete dpos.require_empty;
    
    var o={};
    Object.keys(dpos).forEach(function (k) {
      if(k=="dx")
        return;
      if(k=="dy")
        o.mv=move(opos,dpos.dx,dpos.dy);
      else
        o[k]=dpos[k];
    })
    return o
  });
  
  trymoves = trymoves.filter(function (e) {
    if(e===false)
      return false;
    if(e.mv===false)
      return false;
    var current=bs.positions[e.mv.toString()]
    if(!e.requires_occ)
      return !current;
    else{
      return (current&&current.color!=color);
    }
  });
  
  trymoves = trymoves.filter(function (e) {
    if(e===false)
      return false;
    if(e.mv==false)
      return false;
    if(e.mv.y==1||e.mv.y==8){
      promoptions.forEach(function (p) {
        promos.push({
          from:opos,
          to:new position({x:e.mv.x,y:e.mv.y}),
          promo:p,
        })
      })
      return false;
    }
    return true;
  });
  
  
  
  var mvappend=[];
  
  var lastmove_meta=bs.history[bs.history.length-1];
  var lastmove=null;
  if(lastmove_meta)
    lastmove=lastmove_meta.mvdesc;
  if(lastmove && lastmove.isjump){
    var jpos=new position(lastmove.to.toString());
    if(jpos.y==opos.y){
      if((jpos.x+1==opos.x) || (jpos.x-1==opos.x)){
        mvappend.push({
          enpassant:true,
          from:opos,
          to:new position({x:jpos.x,y:opos.y+direction}),
          target:jpos
        })
      }
    }
  }
  
  
  return trymoves.map(function (e) {
    var mvdesc={
      from:opos,
      to:e.mv
    };
    if("isjump" in e){
      mvdesc.isjump=e.isjump;
    }
    if("promo" in e){
      mvdesc.promo=e.promo;
    }
    return mvdesc;
  }).concat(mvappend).concat(promos);
};

var add_direction;
add_direction=function (opos,bs,color,vm) {
  var gendir
  gendir=function (dir) {
    var from=dir.pos;
    var dx=dir.dx;
    var dy=dir.dy;
    var to=move(from,dx,dy)
    if(!to)
      return false;
    var current=bs.positions[to.toString()];
    if(current){
      if(current.color!=color)
        vm.push({from:opos,to:to})
      return false;
    }
    vm.push({from:opos,to:to})
    gendir({pos:to,dx:dx,dy:dy})
    return true;
  }
  return gendir;
};
vmoves.rook=function (bs,piece) {
  var color=piece.color;
  var opos=piece.position;
  var row=opos.x
  var col=opos.y
  
  var vm=[]
  
  var dirs=[
    {pos:opos,dx:-1,dy:0},
    {pos:opos,dx:1,dy:0},
    {pos:opos,dx:0,dy:-1},
    {pos:opos,dx:0,dy:1}
  ];
  dirs.forEach(add_direction(opos,bs,color,vm))
  return vm;
}
var copydir=function (o) {
  return {dx:o.dx,dy:o.dy,pos:o.pos}
}
vmoves.bishop=function (bs,piece) {
  var color=piece.color;
  var opos=piece.position;
  var row=opos.x
  var col=opos.y
  
  var vm=[]
  
  var dirs=[
    {pos:opos,dx:-1,dy:-1},
    {pos:opos,dx:1,dy:1},
    {pos:opos,dx:1,dy:-1},
    {pos:opos,dx:-1,dy:1}
  ];
  dirs.forEach(add_direction(opos,bs,color,vm))
  return vm;
}
vmoves.king=function (bs,piece,skipkingcheck) {
  var color=piece.color;
  var opos=piece.position;
  var dirs=[
    {pos:opos,dx:1,dy:1},
    {pos:opos,dx:1,dy:0},
    {pos:opos,dx:0,dy:1},
  ]
  dirs.slice().forEach(function (e) {
    var ne=copydir(e)
    if(ne.dx==0)
      return;
    ne.dx*=-1;
    dirs.push(ne);
  })
  dirs.slice().forEach(function (e) {
    var ne=copydir(e)
    if(ne.dy==0)
      return;
    ne.dy*=-1;
    dirs.push(ne);
  })
  
  var vm=dirs.map(function (dpos) {
    return {
      mv:move(opos,dpos.dx,dpos.dy),
      dpos:dpos,
    }
  })
  .filter(function (desc) {
    if(!desc.mv)
      return false;
    var current=bs.positions[desc.mv.toString()];
    if(!current)
      return true;
    if(current.color!=color)
      return true;
    return false;
  })
  .map(function (e) {
    return {
      to:e.mv,
      from:opos,
    };
  })
  var mrooks=[];
  var rall=bs.bycolortype[color+" rook"]
  var mrookpos=Object.keys(rall).map(function (rpos) {
    return rpos;
  });
  var castles=mrookpos.map(function (rpos) {
    // var bcopy=bs.clone();
    var rook=bs.positions[rpos.toString()]
    
    var mking=bs.positions[piece.position.toString()]
    
    if(mking.moved)
      return false;
    if(rook.moved)
      return false;
    var y=rook.position.y
    assert(y==mking.position.y)
    var dx=rook.position.x-mking.position.x;
    var di=(dx<0 ? -1 : 1);
    
    var intermediate=new position({x:opos.x+di,y:opos.y})
    
    if(bs.positions[intermediate.toString()])
      return false;
    
    bs.perform_move({
      from:mking.position,
      to:intermediate,
      undoable:true,
      skipverify:true
    })
    if(bs.check_check(mking.color)){
      bs.undo_move();
      return false;
    }
    bs.undo_move();
      
    var p= new position({x:opos.x+di*2,y:opos.y})
    if(bs.positions[p.toString()])
      return false;
    
    var rook_to=new position({x:opos.x+di,y:opos.y})
    return {
      from:opos,
      to:p,
      rook_from:rpos,
      rook_to:rook_to,
      castle:true,
    };
  })
  .filter(function (e) {
    return e!==false;
  })
  vm.push.apply(vm,castles);
  return vm;
}
vmoves.queen=function(bs,piece){
  return vmoves.rook(bs,piece).concat(vmoves.bishop(bs,piece));
}
vmoves.knight=function (bs,piece) {
  var color=piece.color;
  var opos=piece.position;
  var diffs=[
    {dx:2,dy:1}
  ]
  diffs.slice().forEach(function (e) {
    var en=copydir(e)
    var tmp=en.dy;
    en.dy=en.dx;
    en.dx=tmp;
    diffs.push(en);
  });
  diffs.slice().forEach(function (e) {
    var en=copydir(e)
    en.dy*=-1;
    diffs.push(en);
  });
  diffs.slice().forEach(function (e) {
    var en=copydir(e)
    en.dx*=-1;
    diffs.push(en);
  });
  var vm=diffs.map(function (dpos) {
    return {
      mv:move(opos,dpos.dx,dpos.dy),
      dpos:dpos,
    }
  })
  .filter(function (e) {
    return (e.mv!==false)
  })
  .filter(function (e) {
    var current=bs.positions[e.mv.toString()];
    if(!current)
      return true;
    if(current.color!=color)
      return true;
    return false;
  })
  .map(function (e) {
    return {
      to:e.mv,
      from:opos
    };
  })
  
  return vm;
}

module.exports=vmoves;

},{"./board_util.js":17,"./position.js":35,"assert":"assert","type_checker":33}],38:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],39:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],40:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":41}],41:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            currentQueue[queueIndex].run();
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],42:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],43:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":42,"_process":41,"inherits":39}],44:[function(require,module,exports){
// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes



/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

exports = module.exports = function(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
    if (hasKeyCode) searchInput = hasKeyCode
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput)

  // check codes
  var foundNamedKey = codes[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
}

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'right click': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222,
}

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'pgup': 33,
  'pgdn': 33,
  'ins': 45,
  'del': 46,
  'cmd': 91
}


/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {} // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias]
}

},{}],45:[function(require,module,exports){
/*

The MIT License (MIT)

Original Library 
  - Copyright (c) Marak Squires

Additional functionality
 - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var colors = {};
module['exports'] = colors;

colors.themes = {};

var ansiStyles = colors.styles = require('./styles');
var defineProps = Object.defineProperties;

colors.supportsColor = require('./system/supports-colors');

if (typeof colors.enabled === "undefined") {
  colors.enabled = colors.supportsColor;
}

colors.stripColors = colors.strip = function(str){
  return ("" + str).replace(/\x1B\[\d+m/g, '');
};


var stylize = colors.stylize = function stylize (str, style) {
  if (!colors.enabled) {
    return str+'';
  }

  return ansiStyles[style].open + str + ansiStyles[style].close;
}

var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
var escapeStringRegexp = function (str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.replace(matchOperatorsRe,  '\\$&');
}

function build(_styles) {
  var builder = function builder() {
    return applyStyle.apply(builder, arguments);
  };
  builder._styles = _styles;
  // __proto__ is used because we must return a function, but there is
  // no way to create a function with a different prototype.
  builder.__proto__ = proto;
  return builder;
}

var styles = (function () {
  var ret = {};
  ansiStyles.grey = ansiStyles.gray;
  Object.keys(ansiStyles).forEach(function (key) {
    ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
    ret[key] = {
      get: function () {
        return build(this._styles.concat(key));
      }
    };
  });
  return ret;
})();

var proto = defineProps(function colors() {}, styles);

function applyStyle() {
  var args = arguments;
  var argsLen = args.length;
  var str = argsLen !== 0 && String(arguments[0]);
  if (argsLen > 1) {
    for (var a = 1; a < argsLen; a++) {
      str += ' ' + args[a];
    }
  }

  if (!colors.enabled || !str) {
    return str;
  }

  var nestedStyles = this._styles;

  var i = nestedStyles.length;
  while (i--) {
    var code = ansiStyles[nestedStyles[i]];
    str = code.open + str.replace(code.closeRe, code.open) + code.close;
  }

  return str;
}

function applyTheme (theme) {
  for (var style in theme) {
    (function(style){
      colors[style] = function(str){
        if (typeof theme[style] === 'object'){
          var out = str;
          for (var i in theme[style]){
            out = colors[theme[style][i]](out);
          }
          return out;
        }
        return colors[theme[style]](str);
      };
    })(style)
  }
}

colors.setTheme = function (theme) {
  if (typeof theme === 'string') {
    try {
      colors.themes[theme] = require(theme);
      applyTheme(colors.themes[theme]);
      return colors.themes[theme];
    } catch (err) {
      console.log(err);
      return err;
    }
  } else {
    applyTheme(theme);
  }
};

function init() {
  var ret = {};
  Object.keys(styles).forEach(function (name) {
    ret[name] = {
      get: function () {
        return build([name]);
      }
    };
  });
  return ret;
}

var sequencer = function sequencer (map, str) {
  var exploded = str.split(""), i = 0;
  exploded = exploded.map(map);
  return exploded.join("");
};

// custom formatter methods
colors.trap = require('./custom/trap');
colors.zalgo = require('./custom/zalgo');

// maps
colors.maps = {};
colors.maps.america = require('./maps/america');
colors.maps.zebra = require('./maps/zebra');
colors.maps.rainbow = require('./maps/rainbow');
colors.maps.random = require('./maps/random')

for (var map in colors.maps) {
  (function(map){
    colors[map] = function (str) {
      return sequencer(colors.maps[map], str);
    }
  })(map)
}

defineProps(colors, init());
},{"./custom/trap":46,"./custom/zalgo":47,"./maps/america":48,"./maps/rainbow":49,"./maps/random":50,"./maps/zebra":51,"./styles":52,"./system/supports-colors":53}],46:[function(require,module,exports){
module['exports'] = function runTheTrap (text, options) {
  var result = "";
  text = text || "Run the trap, drop the bass";
  text = text.split('');
  var trap = {
    a: ["\u0040", "\u0104", "\u023a", "\u0245", "\u0394", "\u039b", "\u0414"],
    b: ["\u00df", "\u0181", "\u0243", "\u026e", "\u03b2", "\u0e3f"],
    c: ["\u00a9", "\u023b", "\u03fe"],
    d: ["\u00d0", "\u018a", "\u0500" , "\u0501" ,"\u0502", "\u0503"],
    e: ["\u00cb", "\u0115", "\u018e", "\u0258", "\u03a3", "\u03be", "\u04bc", "\u0a6c"],
    f: ["\u04fa"],
    g: ["\u0262"],
    h: ["\u0126", "\u0195", "\u04a2", "\u04ba", "\u04c7", "\u050a"],
    i: ["\u0f0f"],
    j: ["\u0134"],
    k: ["\u0138", "\u04a0", "\u04c3", "\u051e"],
    l: ["\u0139"],
    m: ["\u028d", "\u04cd", "\u04ce", "\u0520", "\u0521", "\u0d69"],
    n: ["\u00d1", "\u014b", "\u019d", "\u0376", "\u03a0", "\u048a"],
    o: ["\u00d8", "\u00f5", "\u00f8", "\u01fe", "\u0298", "\u047a", "\u05dd", "\u06dd", "\u0e4f"],
    p: ["\u01f7", "\u048e"],
    q: ["\u09cd"],
    r: ["\u00ae", "\u01a6", "\u0210", "\u024c", "\u0280", "\u042f"],
    s: ["\u00a7", "\u03de", "\u03df", "\u03e8"],
    t: ["\u0141", "\u0166", "\u0373"],
    u: ["\u01b1", "\u054d"],
    v: ["\u05d8"],
    w: ["\u0428", "\u0460", "\u047c", "\u0d70"],
    x: ["\u04b2", "\u04fe", "\u04fc", "\u04fd"],
    y: ["\u00a5", "\u04b0", "\u04cb"],
    z: ["\u01b5", "\u0240"]
  }
  text.forEach(function(c){
    c = c.toLowerCase();
    var chars = trap[c] || [" "];
    var rand = Math.floor(Math.random() * chars.length);
    if (typeof trap[c] !== "undefined") {
      result += trap[c][rand];
    } else {
      result += c;
    }
  });
  return result;

}

},{}],47:[function(require,module,exports){
// please no
module['exports'] = function zalgo(text, options) {
  text = text || "   he is here   ";
  var soul = {
    "up" : [
      '̍', '̎', '̄', '̅',
      '̿', '̑', '̆', '̐',
      '͒', '͗', '͑', '̇',
      '̈', '̊', '͂', '̓',
      '̈', '͊', '͋', '͌',
      '̃', '̂', '̌', '͐',
      '̀', '́', '̋', '̏',
      '̒', '̓', '̔', '̽',
      '̉', 'ͣ', 'ͤ', 'ͥ',
      'ͦ', 'ͧ', 'ͨ', 'ͩ',
      'ͪ', 'ͫ', 'ͬ', 'ͭ',
      'ͮ', 'ͯ', '̾', '͛',
      '͆', '̚'
    ],
    "down" : [
      '̖', '̗', '̘', '̙',
      '̜', '̝', '̞', '̟',
      '̠', '̤', '̥', '̦',
      '̩', '̪', '̫', '̬',
      '̭', '̮', '̯', '̰',
      '̱', '̲', '̳', '̹',
      '̺', '̻', '̼', 'ͅ',
      '͇', '͈', '͉', '͍',
      '͎', '͓', '͔', '͕',
      '͖', '͙', '͚', '̣'
    ],
    "mid" : [
      '̕', '̛', '̀', '́',
      '͘', '̡', '̢', '̧',
      '̨', '̴', '̵', '̶',
      '͜', '͝', '͞',
      '͟', '͠', '͢', '̸',
      '̷', '͡', ' ҉'
    ]
  },
  all = [].concat(soul.up, soul.down, soul.mid),
  zalgo = {};

  function randomNumber(range) {
    var r = Math.floor(Math.random() * range);
    return r;
  }

  function is_char(character) {
    var bool = false;
    all.filter(function (i) {
      bool = (i === character);
    });
    return bool;
  }
  

  function heComes(text, options) {
    var result = '', counts, l;
    options = options || {};
    options["up"] =   typeof options["up"]   !== 'undefined' ? options["up"]   : true;
    options["mid"] =  typeof options["mid"]  !== 'undefined' ? options["mid"]  : true;
    options["down"] = typeof options["down"] !== 'undefined' ? options["down"] : true;
    options["size"] = typeof options["size"] !== 'undefined' ? options["size"] : "maxi";
    text = text.split('');
    for (l in text) {
      if (is_char(l)) {
        continue;
      }
      result = result + text[l];
      counts = {"up" : 0, "down" : 0, "mid" : 0};
      switch (options.size) {
      case 'mini':
        counts.up = randomNumber(8);
        counts.mid = randomNumber(2);
        counts.down = randomNumber(8);
        break;
      case 'maxi':
        counts.up = randomNumber(16) + 3;
        counts.mid = randomNumber(4) + 1;
        counts.down = randomNumber(64) + 3;
        break;
      default:
        counts.up = randomNumber(8) + 1;
        counts.mid = randomNumber(6) / 2;
        counts.down = randomNumber(8) + 1;
        break;
      }

      var arr = ["up", "mid", "down"];
      for (var d in arr) {
        var index = arr[d];
        for (var i = 0 ; i <= counts[index]; i++) {
          if (options[index]) {
            result = result + soul[index][randomNumber(soul[index].length)];
          }
        }
      }
    }
    return result;
  }
  // don't summon him
  return heComes(text, options);
}

},{}],48:[function(require,module,exports){
var colors = require('../colors');

module['exports'] = (function() {
  return function (letter, i, exploded) {
    if(letter === " ") return letter;
    switch(i%3) {
      case 0: return colors.red(letter);
      case 1: return colors.white(letter)
      case 2: return colors.blue(letter)
    }
  }
})();
},{"../colors":45}],49:[function(require,module,exports){
var colors = require('../colors');

module['exports'] = (function () {
  var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta']; //RoY G BiV
  return function (letter, i, exploded) {
    if (letter === " ") {
      return letter;
    } else {
      return colors[rainbowColors[i++ % rainbowColors.length]](letter);
    }
  };
})();


},{"../colors":45}],50:[function(require,module,exports){
var colors = require('../colors');

module['exports'] = (function () {
  var available = ['underline', 'inverse', 'grey', 'yellow', 'red', 'green', 'blue', 'white', 'cyan', 'magenta'];
  return function(letter, i, exploded) {
    return letter === " " ? letter : colors[available[Math.round(Math.random() * (available.length - 1))]](letter);
  };
})();
},{"../colors":45}],51:[function(require,module,exports){
var colors = require('../colors');

module['exports'] = function (letter, i, exploded) {
  return i % 2 === 0 ? letter : colors.inverse(letter);
};
},{"../colors":45}],52:[function(require,module,exports){
/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var styles = {};
module['exports'] = styles;

var codes = {
  reset: [0, 0],

  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],

  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  grey: [90, 39],

  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],

  // legacy styles for colors pre v1.0.0
  blackBG: [40, 49],
  redBG: [41, 49],
  greenBG: [42, 49],
  yellowBG: [43, 49],
  blueBG: [44, 49],
  magentaBG: [45, 49],
  cyanBG: [46, 49],
  whiteBG: [47, 49]

};

Object.keys(codes).forEach(function (key) {
  var val = codes[key];
  var style = styles[key] = [];
  style.open = '\u001b[' + val[0] + 'm';
  style.close = '\u001b[' + val[1] + 'm';
});
},{}],53:[function(require,module,exports){
(function (process){
/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var argv = process.argv;

module.exports = (function () {
  if (argv.indexOf('--no-color') !== -1 ||
    argv.indexOf('--color=false') !== -1) {
    return false;
  }

  if (argv.indexOf('--color') !== -1 ||
    argv.indexOf('--color=true') !== -1 ||
    argv.indexOf('--color=always') !== -1) {
    return true;
  }

  if (process.stdout && !process.stdout.isTTY) {
    return false;
  }

  if (process.platform === 'win32') {
    return true;
  }

  if ('COLORTERM' in process.env) {
    return true;
  }

  if (process.env.TERM === 'dumb') {
    return false;
  }

  if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
    return true;
  }

  return false;
})();
}).call(this,require('_process'))
},{"_process":41}],54:[function(require,module,exports){
//
// Remark: Requiring this file will use the "safe" colors API which will not touch String.prototype
//
//   var colors = require('colors/safe);
//   colors.red("foo")
//
//
var colors = require('./lib/colors');
module['exports'] = colors;
},{"./lib/colors":45}],"assert":[function(require,module,exports){
module.exports=function (test,msg) {if(!test)throw new Error("Assertion Error"+(typeof msg==typeof ""? ": "+msg : ""));};
},{}]},{},[19]);
