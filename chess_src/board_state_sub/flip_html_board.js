
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
