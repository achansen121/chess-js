
var BoardState=require("./board_state.js");
var bot=require("./bot.js");

var window=(function(){return this;})();

var assert=require("assert")
var piece=require("./piece.js")
var position=require("./position.js")
var type_checker=require("type_checker")


var history_display=require("./move_history_display.js")
var bs=require("./board_state.js")


var ptry=function(){
  var bs=new BoardState();
  bs.initialize("empty");
  var p=new piece("white king")
  p.position=new position("1x1")
  p.moved=true;
  var jstr=JSON.stringify(p);
  console.log("json is ")
  console.log(jstr)
  console.log(Object.keys(piece))
  var jo=piece.fromJSON(jstr);
  console.log(jo);
  console.log(p);
  
  bs.add_piece(p,p.position)
  
  console.log(JSON.stringify(bs));
};

var clear=function () {
  process.stdout.write(String.fromCharCode(27)+"[1J");
};

var bot_v_bot_local=function () {
  var bs=new BoardState();
  bs.initialize();
  
  bs.print();
  
  bs.on("movedesc",function (mvtxt) {
    // clear();
    console.log(mvtxt);
    bs.print()
  })
  
  var wb=new bot(bs,{
    delay:10,
    color:"white",
    depth:3
  });
  var bb=new bot(bs,{
    delay:10,
    color:"black",
    depth:3
  });
};


var kcheck=function () {
  var bs=new BoardState();
  bs.initialize("empty");
  bs.add_piece("black king","1x1")
  bs.add_piece("white rook","2x5")
  bs.add_piece("white rook","5x2")
  bs.turn="black";
  var bmoves=bs.valid_moves_by_color("black")
  bs.print();
  assert(bmoves.length==0);
  
  console.log("--")
  bs.initialize("empty");
  bs.add_piece("black king","1x1")
  bs.add_piece("white rook","5x2")
  bs.turn="black";
  var bmoves=bs.valid_moves_by_color("black")
  bs.print();
  console.log(bmoves);
  assert(bmoves.length==1)
  
  console.log("--")
  bs.initialize("empty");
  bs.add_piece("black king","1x1")
  bs.add_piece("white rook","2x5")
  bs.turn="black";
  var bmoves=bs.valid_moves_by_color("black")
  bs.print();
  console.log(bmoves);
  assert(bmoves.length==1)
  console.log("--")
  bs.initialize("empty");
  bs.add_piece("black king","1x1")
  bs.add_piece("white rook","1x5")
  bs.turn="black";
  var bmoves=bs.valid_moves_by_color("black")
  bs.print();
  console.log(bmoves);
  assert(bmoves.length==2)
  
  console.log("--")
  bs.initialize("empty");
  bs.add_piece("white king","4x4")
  bs.add_piece("black king","5x4")
  bs.print();
  bs.turn="black";
  assert(bs.check_check("black"),"not check?")
  
  bs.initialize("empty");
  bs.add_piece("white king","4x4")
  bs.add_piece("black king","6x4")
  bs.print();
  bs.turn="black";
  var vpos=bs.valid_moves_by_pos("6x4");
  console.log(vpos);
  var bmoves=bs.valid_moves_by_color("black");
  assert(bmoves.length==5,"bmoves is "+bmoves.length)
}


if(require.main==module){
  console.log("which test not set");
}
