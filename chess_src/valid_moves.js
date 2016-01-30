

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
