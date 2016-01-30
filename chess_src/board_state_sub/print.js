
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


