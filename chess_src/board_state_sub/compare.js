module.exports=function compare (other) {
  if(!cmp_prim(this.taken,other.taken)){
    console.log(this.taken,other.taken)
    cmp_prim(this.taken,other.taken,true);
  }
  if(!cmp_prim(this.positions,other.positions)){
    console.log(this.positions,other.positions)
    cmp_prim(this.positions,other.positions,true);
  }
  if(!cmp_prim(this.history,other.history)){
    console.log(this.history,other.history)
    cmp_prim(this.history,other.history,true);
  }
  // cmp_prim(this.history,other.history,true);
  if(!cmp_prim(this.bypid,other.bypid)){
    console.log(this.bypid,other.bypid)
    cmp_prim(this.bypid,other.bypid,true);
  }
  return true;
};
