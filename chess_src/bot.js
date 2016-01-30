
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
