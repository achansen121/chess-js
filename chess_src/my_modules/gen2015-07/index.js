
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
