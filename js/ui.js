/*!
 * AkihiroLabs POS — js/ui.js
 * DOM helpers (h, div, btn…), top bar and footer.
 * https://github.com/AkihiroZayar/POS-SYTEM
 */
// ── DOM helpers ─────────────────────────────────────────────
function h(tag,props,children){
  var e=document.createElement(tag);
  if(props)Object.keys(props).forEach(function(k){
    if(k==='cls')e.className=props[k];
    else if(k==='style')e.style.cssText=props[k];
    else if(k.indexOf('on')===0)e[k]=props[k];
    else e.setAttribute(k,props[k]);
  });
  if(children!=null)(Array.isArray(children)?children:[children]).forEach(function(c){
    if(c==null)return;
    e.appendChild(typeof c==='string'||typeof c==='number'?document.createTextNode(String(c)):c);
  });
  return e;
}
function div(cls,children,style){return h('div',style?{cls:cls,style:style}:{cls:cls},children);}
function btn(cls,label,onclick){return h('button',{cls:cls,onclick:onclick},label);}
function span(cls,label){return h('span',{cls:cls},label);}
function inp(props){return h('input',props);}
function txt(s){return document.createTextNode(s);}

// ── Topbar ──────────────────────────────────────────────────
function mkTopbar(){
  var tb=div('topbar');
  tb.appendChild(span('brand',CFG.storeName||t('app')));
  tb.appendChild(div('sp'));
  var lt=div('langt');
  ['en','my'].forEach(function(l){lt.appendChild(btn('langb'+(lang===l?' on':''),l==='en'?'EN':'\u1019\u103c\u1014\u103a\u1019\u102c',function(){lang=l;render();}));});
  tb.appendChild(lt);
  var tabs=S.user&&S.user.role==='admin'?['dash','pos','tabs','inv','rep','stf','sett']:['pos','tabs','inv'];
  tabs.forEach(function(v){tb.appendChild(btn('nb'+(S.view===v?' on':''),t(v),function(){if(v==='pos'&&S.tabMode){S.tabMode=false;S.editingTab=null;S.cart=[];}S.view=v;render();}));});
  var chip=div('uchip',[div('udot'),span('',S.user?S.user.name:'')]);
  chip.onclick=function(){S.modal={type:'lgo'};render();};
  tb.appendChild(chip);
  return tb;
}
function mkFooter(){return div('footer',['Developed by ',h('b',{},'AkihiroLabs'),' \xb7 POS System v'+APP_VERSION]);}
