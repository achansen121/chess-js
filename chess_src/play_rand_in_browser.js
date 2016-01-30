
var play_rand_inbrowser=function (bs) {
  var window=(function(){return this;})();
  var document=window.document;
  var body=document.querySelector("body");
  var be=append_to_body(bs);
  
  bs.on("movedesc",function(mtxt,mdesc,mnot){
    console.log(mnot+"   "+mtxt);
  })
  
  var maxturns=400;
  
  var turn=0;
  var pint=-1;
  
  var resume;
  resume=function(){
    var noerr=true;
    pint=setInterval(function(){
      if(!noerr)
        return clearInterval(pint);
      
      if(bs.animating){
        clearInterval(pint);
        return bs.once("animated",resume);
      }
      
      noerr=false;
      
      var reason=false;
      var cturn=(turn%2==0 ? "white" : "black")
      var vm=bs.valid_moves()
      var mvsel=pickrandom(vm)
      
      if(!mvsel)
        reason="checkmate/stalemate";
      else if(turn>maxturns)
        reason="over "+maxturns+" turns";
      if(reason){
        if(reason)
          console.log(reason)
        if(!mvsel){
          console.log(vm);
          console.log("no move found for "+cturn)
        }
        return;
      }
      bs.perform_move(mvsel);
      turn++;
      noerr=true;
    },100)
  };
  resume();
};