
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
