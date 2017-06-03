// JSON2 lib
var JSON;if(!JSON){JSON={}}(function(){"use strict";function f(n){return n<10?'0'+n:n}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key)}if(typeof rep==='function'){value=rep.call(holder,key,value)}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null'}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null'}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v}}if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' '}}else if(typeof space==='string'){indent=space}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify')}return str('',{'':value})}}if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j}throw new SyntaxError('JSON.parse')}}}());


function nl2br (str, is_xhtml) {
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

// // ColorBox v1.3.17.2 - a full featured, light-weight, customizable lightbox based on jQuery 1.3+
// Copyright (c) 2011 Jack Moore - jack@colorpowered.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
(function(a,b,c){function bc(b){if(!U){P=b,_(),y=a(P),Q=0,K.rel!=="nofollow"&&(y=a("."+g).filter(function(){var b=a.data(this,e).rel||this.rel;return b===K.rel}),Q=y.index(P),Q===-1&&(y=y.add(P),Q=y.length-1));if(!S){S=T=!0,r.show();if(K.returnFocus)try{P.blur(),a(P).one(l,function(){try{this.focus()}catch(a){}})}catch(c){}q.css({opacity:+K.opacity,cursor:K.overlayClose?"pointer":"auto"}).show(),K.w=Z(K.initialWidth,"x"),K.h=Z(K.initialHeight,"y"),X.position(),o&&z.bind("resize."+p+" scroll."+p,function(){q.css({width:z.width(),height:z.height(),top:z.scrollTop(),left:z.scrollLeft()})}).trigger("resize."+p),ba(h,K.onOpen),J.add(D).hide(),I.html(K.close).show()}X.load(!0)}}function bb(){var a,b=f+"Slideshow_",c="click."+f,d,e,g;K.slideshow&&y[1]?(d=function(){F.text(K.slideshowStop).unbind(c).bind(j,function(){if(Q<y.length-1||K.loop)a=setTimeout(X.next,K.slideshowSpeed)}).bind(i,function(){clearTimeout(a)}).one(c+" "+k,e),r.removeClass(b+"off").addClass(b+"on"),a=setTimeout(X.next,K.slideshowSpeed)},e=function(){clearTimeout(a),F.text(K.slideshowStart).unbind([j,i,k,c].join(" ")).one(c,d),r.removeClass(b+"on").addClass(b+"off")},K.slideshowAuto?d():e()):r.removeClass(b+"off "+b+"on")}function ba(b,c){c&&c.call(P),a.event.trigger(b)}function _(b){K=a.extend({},a.data(P,e));for(b in K)a.isFunction(K[b])&&b.substring(0,2)!=="on"&&(K[b]=K[b].call(P));K.rel=K.rel||P.rel||"nofollow",K.href=K.href||a(P).attr("href"),K.title=K.title||P.title,typeof K.href=="string"&&(K.href=a.trim(K.href))}function $(a){return K.photo||/\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i.test(a)}function Z(a,b){return Math.round((/%/.test(a)?(b==="x"?z.width():z.height())/100:1)*parseInt(a,10))}function Y(c,d,e){e=b.createElement("div"),c&&(e.id=f+c),e.style.cssText=d||"";return a(e)}var d={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:!1,returnFocus:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:!1},e="colorbox",f="cbox",g=f+"Element",h=f+"_open",i=f+"_load",j=f+"_complete",k=f+"_cleanup",l=f+"_closed",m=f+"_purge",n=a.browser.msie&&!a.support.opacity,o=n&&a.browser.version<7,p=f+"_IE6",q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X;X=a.fn[e]=a[e]=function(b,c){var f=this;b=b||{};if(!f[0]){if(f.selector)return f;f=a("<a/>"),b.open=!0}c&&(b.onComplete=c),f.each(function(){a.data(this,e,a.extend({},a.data(this,e)||d,b)),a(this).addClass(g)}),(a.isFunction(b.open)&&b.open.call(f)||b.open)&&bc(f[0]);return f},X.init=function(){z=a(c),r=Y().attr({id:e,"class":n?f+(o?"IE6":"IE"):""}),q=Y("Overlay",o?"position:absolute":"").hide(),s=Y("Wrapper"),t=Y("Content").append(A=Y("LoadedContent","width:0; height:0; overflow:hidden"),C=Y("LoadingOverlay").add(Y("LoadingGraphic")),D=Y("Title"),E=Y("Current"),G=Y("Next"),H=Y("Previous"),F=Y("Slideshow").bind(h,bb),I=Y("Close")),s.append(Y().append(Y("TopLeft"),u=Y("TopCenter"),Y("TopRight")),Y(!1,"clear:left").append(v=Y("MiddleLeft"),t,w=Y("MiddleRight")),Y(!1,"clear:left").append(Y("BottomLeft"),x=Y("BottomCenter"),Y("BottomRight"))).children().children().css({"float":"left"}),B=Y(!1,"position:absolute; width:9999px; visibility:hidden; display:none"),a("body").prepend(q,r.append(s,B)),t.children().hover(function(){a(this).addClass("hover")},function(){a(this).removeClass("hover")}).addClass("hover"),L=u.height()+x.height()+t.outerHeight(!0)-t.height(),M=v.width()+w.width()+t.outerWidth(!0)-t.width(),N=A.outerHeight(!0),O=A.outerWidth(!0),r.css({"padding-bottom":L,"padding-right":M}).hide(),G.click(function(){X.next()}),H.click(function(){X.prev()}),I.click(function(){X.close()}),J=G.add(H).add(E).add(F),t.children().removeClass("hover"),q.click(function(){K.overlayClose&&X.close()}),a(b).bind("keydown."+f,function(a){var b=a.keyCode;S&&K.escKey&&b===27&&(a.preventDefault(),X.close()),S&&K.arrowKey&&y[1]&&(b===37?(a.preventDefault(),H.click()):b===39&&(a.preventDefault(),G.click()))})},X.remove=function(){r.add(q).remove(),a("."+g).removeData(e).removeClass(g)},X.position=function(a,c){function g(a){u[0].style.width=x[0].style.width=t[0].style.width=a.style.width,C[0].style.height=C[1].style.height=t[0].style.height=v[0].style.height=w[0].style.height=a.style.height}var d=0,e=0;z.unbind("resize."+f),r.hide(),K.fixed&&!o?r.css({position:"fixed"}):(d=z.scrollTop(),e=z.scrollLeft(),r.css({position:"absolute"})),K.right!==!1?e+=Math.max(z.width()-K.w-O-M-Z(K.right,"x"),0):K.left!==!1?e+=Z(K.left,"x"):e+=Math.round(Math.max(z.width()-K.w-O-M,0)/2),K.bottom!==!1?d+=Math.max(b.documentElement.clientHeight-K.h-N-L-Z(K.bottom,"y"),0):K.top!==!1?d+=Z(K.top,"y"):d+=Math.round(Math.max(b.documentElement.clientHeight-K.h-N-L,0)/2),r.show(),a=r.width()===K.w+O&&r.height()===K.h+N?0:a||0,s[0].style.width=s[0].style.height="9999px",r.dequeue().animate({width:K.w+O,height:K.h+N,top:d,left:e},{duration:a,complete:function(){g(this),T=!1,s[0].style.width=K.w+O+M+"px",s[0].style.height=K.h+N+L+"px",c&&c(),setTimeout(function(){z.bind("resize."+f,X.position)},1)},step:function(){g(this)}})},X.resize=function(a){if(S){a=a||{},a.width&&(K.w=Z(a.width,"x")-O-M),a.innerWidth&&(K.w=Z(a.innerWidth,"x")),A.css({width:K.w}),a.height&&(K.h=Z(a.height,"y")-N-L),a.innerHeight&&(K.h=Z(a.innerHeight,"y"));if(!a.innerHeight&&!a.height){var b=A.wrapInner("<div style='overflow:auto'></div>").children();K.h=b.height(),b.replaceWith(b.children())}A.css({height:K.h}),X.position(K.transition==="none"?0:K.speed)}},X.prep=function(b){function h(){K.h=K.h||A.height(),K.h=K.mh&&K.mh<K.h?K.mh:K.h;return K.h}function g(){K.w=K.w||A.width(),K.w=K.mw&&K.mw<K.w?K.mw:K.w;return K.w}if(!!S){var c,d=K.transition==="none"?0:K.speed;A.remove(),A=Y("LoadedContent").append(b),A.hide().appendTo(B.show()).css({width:g(),overflow:K.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(t),B.hide(),a(R).css({"float":"none"}),o&&a("select").not(r.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(k,function(){this.style.visibility="inherit"}),c=function(){function o(){n&&r[0].style.removeAttribute("filter")}var b,c,g,h,i=y.length,k,l;!S||(l=function(){clearTimeout(W),C.hide(),ba(j,K.onComplete)},n&&R&&A.fadeIn(100),D.html(K.title).add(A).show(),i>1?(typeof K.current=="string"&&E.html(K.current.replace("{current}",Q+1).replace("{total}",i)).show(),G[K.loop||Q<i-1?"show":"hide"]().html(K.next),H[K.loop||Q?"show":"hide"]().html(K.previous),b=Q?y[Q-1]:y[i-1],g=Q<i-1?y[Q+1]:y[0],K.slideshow&&F.show(),K.preloading&&(h=a.data(g,e).href||g.href,c=a.data(b,e).href||b.href,h=a.isFunction(h)?h.call(g):h,c=a.isFunction(c)?c.call(b):c,$(h)&&(a("<img/>")[0].src=h),$(c)&&(a("<img/>")[0].src=c))):J.hide(),K.iframe?(k=a("<iframe/>").addClass(f+"Iframe")[0],K.fastIframe?l():a(k).one("load",l),k.name=f+ +(new Date),k.src=K.href,K.scrolling||(k.scrolling="no"),n&&(k.frameBorder=0,k.allowTransparency="true"),a(k).appendTo(A).one(m,function(){k.src="//about:blank"})):l(),K.transition==="fade"?r.fadeTo(d,1,o):o())},K.transition==="fade"?r.fadeTo(d,0,function(){X.position(0,c)}):X.position(d,c)}},X.load=function(b){var c,d,e=X.prep;T=!0,R=!1,P=y[Q],b||_(),ba(m),ba(i,K.onLoad),K.h=K.height?Z(K.height,"y")-N-L:K.innerHeight&&Z(K.innerHeight,"y"),K.w=K.width?Z(K.width,"x")-O-M:K.innerWidth&&Z(K.innerWidth,"x"),K.mw=K.w,K.mh=K.h,K.maxWidth&&(K.mw=Z(K.maxWidth,"x")-O-M,K.mw=K.w&&K.w<K.mw?K.w:K.mw),K.maxHeight&&(K.mh=Z(K.maxHeight,"y")-N-L,K.mh=K.h&&K.h<K.mh?K.h:K.mh),c=K.href,W=setTimeout(function(){C.show()},100),K.inline?(Y().hide().insertBefore(a(c)[0]).one(m,function(){a(this).replaceWith(A.children())}),e(a(c))):K.iframe?e(" "):K.html?e(K.html):$(c)?(a(R=new Image).addClass(f+"Photo").error(function(){K.title=!1,e(Y("Error").text("This image could not be loaded"))}).load(function(){var a;R.onload=null,K.scalePhotos&&(d=function(){R.height-=R.height*a,R.width-=R.width*a},K.mw&&R.width>K.mw&&(a=(R.width-K.mw)/R.width,d()),K.mh&&R.height>K.mh&&(a=(R.height-K.mh)/R.height,d())),K.h&&(R.style.marginTop=Math.max(K.h-R.height,0)/2+"px"),y[1]&&(Q<y.length-1||K.loop)&&(R.style.cursor="pointer",R.onclick=function(){X.next()}),n&&(R.style.msInterpolationMode="bicubic"),setTimeout(function(){e(R)},1)}),setTimeout(function(){R.src=c},1)):c&&B.load(c,K.data,function(b,c,d){e(c==="error"?Y("Error").text("Request unsuccessful: "+d.statusText):a(this).contents())})},X.next=function(){!T&&y[1]&&(Q<y.length-1||K.loop)&&(Q=Q<y.length-1?Q+1:0,X.load())},X.prev=function(){!T&&y[1]&&(Q||K.loop)&&(Q=Q?Q-1:y.length-1,X.load())},X.close=function(){S&&!U&&(U=!0,S=!1,ba(k,K.onCleanup),z.unbind("."+f+" ."+p),q.fadeTo(200,0),r.stop().fadeTo(300,0,function(){r.add(q).css({opacity:1,cursor:"auto"}).hide(),ba(m),A.remove(),setTimeout(function(){U=!1,ba(l,K.onClosed)},1)}))},X.element=function(){return a(P)},X.settings=d,V=function(a){a.button!==0&&typeof a.button!="undefined"||a.ctrlKey||a.shiftKey||a.altKey||(a.preventDefault(),bc(this))},a.fn.delegate?a(b).delegate("."+g,"click",V):a("."+g).live("click",V),a(X.init)})(jQuery,document,this);

/**
 * jQuery templates plugin
 *
 * http://api.jquery.com/category/plugins/templates/
 */
(function(a) {var r = a.fn.domManip, d = '_tmplitem', q = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /, b = {},f = {},e, p = {key: 0, data: {}},h = 0, c = 0, l = [];function g(e,d,g,i) {var c = {data: i || (d ? d.data : {}), _wrap: d ? d._wrap : null, tmpl: null, parent: d || null, nodes: [], calls: u, nest: w, wrap: x, html: v, update: t};e && a.extend(c, e, {nodes: [], parent: d});if (g) {c.tmpl = g;c._ctnt = c._ctnt || c.tmpl(a, c);c.key = ++h;(l.length ? f : b)[h] = c}return c}a.each({appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith'},function(f,d) {a.fn[f] = function(n) {var g = [], i = a(n), k, h, m, l, j = this.length === 1 && this[0].parentNode;e = b || {};if (j && j.nodeType === 11 && j.childNodes.length === 1 && i.length === 1) {i[d](this[0]);g = this}else {for (h = 0, m = i.length; h < m; h++) {c = h;k = (h > 0 ? this.clone(true) : this).get();a.fn[d].apply(a(i[h]), k);g = g.concat(k)}c = 0;g = this.pushStack(g, f, i.selector)}l = e;e = null;a.tmpl.complete(l);return g}});a.fn.extend({tmpl: function(d,c,b) {return a.tmpl(this[0], d, c, b)},tmplItem: function() {return a.tmplItem(this[0])},template: function(b) {return a.template(b, this[0])},domManip: function(d,l,j) {if (d[0] && d[0].nodeType) {var f = a.makeArray(arguments), g = d.length, i = 0, h;while (i < g && !(h = a.data(d[i++], 'tmplItem'))) {}if (g > 1)f[0] = [a.makeArray(d)];if (h && c)f[2] = function(b) {a.tmpl.afterManip(this, b, j)};r.apply(this, f)}else r.apply(this, arguments);c = 0;!e && a.tmpl.complete(b);return this}});a.extend({tmpl: function(d,h,e,c) {var j, k = !c;if (k) {c = p;d = a.template[d] || a.template(null, d);f = {}}else if (!d) {d = c.tmpl;b[c.key] = c;c.nodes = [];c.wrapped && n(c, c.wrapped);return a(i(c, null, c.tmpl(a, c)))}if (!d)return [];if (typeof h === 'function')h = h.call(c || {});e && e.wrapped && n(e, e.wrapped);j = a.isArray(h) ? a.map(h, function(a) {return a ? g(e, c, d, a) : null}) : [g(e, c, d, h)];return k ? a(i(c, null, j)) : j},tmplItem: function(b) {var c;if (b instanceof a)b = b[0];while (b && b.nodeType === 1 && !(c = a.data(b, 'tmplItem')) && (b = b.parentNode)) {}return c || p},template: function(c,b) {if (b) {if (typeof b === 'string')b = o(b);else if (b instanceof a)b = b[0] || {};if (b.nodeType)b = a.data(b, 'tmpl') || a.data(b, 'tmpl', o(b.innerHTML));return typeof c === 'string'? (a.template[c] = b) : b}return c ? typeof c !== 'string'? a.template(null, c) : a.template[c] || a.template(null, q.test(c) ? c : a(c)) : null},encode: function(a) {return (''+ a).split('<').join('&lt;').split('>').join('&gt;').split('"').join('&#34;').split("'").join('&#39;')}});a.extend(a.tmpl, {tag: {tmpl: {_default: {$2: 'null'},open: 'if($notnull_1){_=_.concat($item.nest($1,$2));}'},wrap: {_default: {$2: 'null'},open: '$item.calls(_,$1,$2);_=[];', close: 'call=$item.calls();_=call._.concat($item.wrap(call,_));'},each: {_default: {$2: '$index, $value'},open: 'if($notnull_1){$.each($1a,function($2){with(this){', close: '}});}'},'if': {open: 'if(($notnull_1) && $1a){', close: '}'},'else': {_default: {$1: 'true'},open: '}else if(($notnull_1) && $1a){'},html: {open: 'if($notnull_1){_.push($1a);}'},'=': {_default: {$1: '$data'},open: 'if($notnull_1){_.push($.encode($1a));}'},'!': {open: ''}},complete: function() {b = {}},afterManip: function(f,b,d) {var e = b.nodeType === 11 ? a.makeArray(b.childNodes) : b.nodeType === 1 ? [b] : [];d.call(f, b);m(e);c++}});function i(e,g,f) {var b, c = f ? a.map(f, function(a) {return typeof a === 'string'? e.key ? a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, '$1 '+ d + '="' + e.key + '" $2') : a : i(a, e, a._ctnt)}) : e;if (g)return c;c = c.join('');c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function(f,c,e,d) {b = a(e).get();m(b);if (c)b = j(c).concat(b);if (d)b = b.concat(j(d))});return b ? b : j(c)}function j(c) {var b = document.createElement('div');b.innerHTML = c;return a.makeArray(b.childNodes)}function o(b) {return new Function('jQuery', '$item', "var $=jQuery,call,_=[],$data=$item.data;with($data){_.push('" + a.trim(b).replace(/([\\'])/g, '\\$1').replace(/[\r\t\n]/g, ' ').replace(/\$\{([^\}]*)\}/g, '{{= $1}}').replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function(m,l,j,d,b,c,e) {var i = a.tmpl.tag[j], h, f, g;if (!i)throw'Template command not found: '+ j;h = i._default || [];if (c && !/\w$/.test(b)) {b += c;c = ''}if (b) {b = k(b);e = e ? ','+ k(e) + ')': c ? ')': '';f = c ? b.indexOf('.') > -1 ? b + c : '('+ b + ').call($item'+ e : b;g = c ? f : '(typeof('+ b + ")==='function'?(" + b + ').call($item):('+ b + '))'}else g = f = h.$1 || 'null';d = k(d);return"');" + i[l ? 'close': 'open'].split('$notnull_1').join(b ? 'typeof('+ b + ")!=='undefined' && (" + b + ')!=null': 'true').split('$1a').join(g).split('$1').join(f).split('$2').join(d ? d.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g, function(d,c,b,a) {a = a ? ','+ a + ')': b ? ')': '';return a ? '('+ c + ').call($item'+ a : d}) : h.$2 || '') + "_.push('"}) + "');}return _;")}function n(c,b) {c._wrap = i(c, true, a.isArray(b) ? b : [q.test(b) ? b : a(b).html()]).join('')}function k(a) {return a ? a.replace(/\\'/g, "'").replace(/\\\\/g, '\\') : null}function s(b) {var a = document.createElement('div');a.appendChild(b.cloneNode(true));return a.innerHTML}function m(o) {var n = '_'+ c, k, j, l = {},e, p, i;for (e = 0, p = o.length; e < p; e++) {if ((k = o[e]).nodeType !== 1)continue;j = k.getElementsByTagName('*');for (i = j.length - 1; i >= 0; i--)m(j[i]);m(k)}function m(j) {var p, i = j, k, e, m;if (m = j.getAttribute(d)) {while (i.parentNode && (i = i.parentNode).nodeType === 1 && !(p = i.getAttribute(d))) {}if (p !== m) {i = i.parentNode ? i.nodeType === 11 ? 0 : i.getAttribute(d) || 0 : 0;if (!(e = b[m])) {e = f[m];e = g(e, b[i] || f[i], null, true);e.key = ++h;b[h] = e}c && o(m)}j.removeAttribute(d)}else if (c && (e = a.data(j, 'tmplItem'))) {o(e.key);b[e.key] = e;i = a.data(j.parentNode, 'tmplItem');i = i ? i.key : 0}if (e) {k = e;while (k && k.key != i) {k.nodes.push(j);k = k.parent} delete e._ctnt;delete e._wrap;a.data(j, 'tmplItem', e)}function o(a) {a = a + n;e = l[a] = l[a] || g(e, b[e.parent.key + n] || e.parent, null, true)}}}function u(a,d,c,b) {if (!a)return l.pop();l.push({_: a, tmpl: d, item: this, data: c, options: b})}function w(d,c,b) {return a.tmpl(a.template(d), c, b, this)}function x(b,d) {var c = b.options || {};c.wrapped = d;return a.tmpl(a.template(b.tmpl), b.data, c, b.item)}function v(d,c) {var b = this._wrap;return a.map(a(a.isArray(b) ? b.join('') : b).filter(d || '*'), function(a) {return c ? a.innerText || a.textContent : a.outerHTML || s(a)})}function t() {var b = this.nodes;a.tmpl(null, null, null, this).insertBefore(b[0]);a(b).remove()}})(jQuery);


jQuery.cookie = function (key, value, options) {

    // key and at least value given, set cookie...
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);

        if (value === null || value === undefined) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        value = String(value);

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};


/*
	jQuery pub/sub plugin by Peter Higgins (dante@dojotoolkit.org)

	Loosely based on Dojo publish/subscribe API, limited in scope. Rewritten blindly.

	Original is (c) Dojo Foundation 2004-2010. Released under either AFL or new BSD, see:
	http://dojofoundation.org/license for more information.

*/

;(function(d){

	// the topic/subscription hash
	var cache = {};

	d.publish = function(/* String */topic, /* Array? */args){
		cache[topic] && d.each(cache[topic], function(){
			this.apply(d, args || []);
		});
	};

	d.subscribe = function(/* String */topic, /* Function */callback){

		if(!cache[topic]){
			cache[topic] = [];
		}
		cache[topic].push(callback);
		return [topic, callback]; // Array
	};

	d.unsubscribe = function(/* Array */handle){

		var t = handle[0];
		cache[t] && d.each(cache[t], function(idx){
			if(this == handle[1]){
				cache[t].splice(idx, 1);
			}
		});
	};

})(jQuery);

/*
 jquery.layout 1.3.0 - Release Candidate 29.15
 $Date: 2011-06-25 08:00:00 (Sat, 25 Jun 2011) $
 $Rev: 302915 $

 Copyright (c) 2010
 Fabrizio Balliano (http://www.fabrizioballiano.net)
 Kevin Dalman (http://allpro.net)

 Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)
 and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.

 Changelog: http://layout.jquery-dev.net/changelog.cfm#1.3.0.rc29.15

 Docs: http://layout.jquery-dev.net/documentation.html
 Tips: http://layout.jquery-dev.net/tips.html
 Help: http://groups.google.com/group/jquery-ui-layout
*/
(function(f){f.layout={version:"1.3.rc29.15",revision:0.032915,language:{Open:"Open",Close:"Close",Resize:"Resize",Slide:"Slide Open",Pin:"Pin",Unpin:"Un-Pin",noRoomToOpenTip:"Not enough room to show this pane.",pane:"pane",selector:"selector",errButton:"Error Adding Button \n\nInvalid ",errContainerMissing:"UI Layout Initialization Error\n\nThe specified layout-container does not exist.",errCenterPaneMissing:"UI Layout Initialization Error\n\nThe center-pane element does not exist.\n\nThe center-pane is a required element.",
errContainerHeight:"UI Layout Initialization Warning\n\nThe layout-container \"CONTAINER\" has no height.\n\nTherefore the layout is 0-height and hence 'invisible'!"},browser:{mozilla:!!f.browser.mozilla,webkit:!!f.browser.webkit||!!f.browser.safari,msie:!!f.browser.msie,isIE6:!!f.browser.msie&&f.browser.version==6,boxModel:!1},scrollbarWidth:function(){return window.scrollbarWidth||f.layout.getScrollbarSize("width")},scrollbarHeight:function(){return window.scrollbarHeight||f.layout.getScrollbarSize("height")},
getScrollbarSize:function(h){var p=f('<div style="position: absolute; top: -10000px; left: -10000px; width: 100px; height: 100px; overflow: scroll;"></div>').appendTo("body"),o={width:p.width()-p[0].clientWidth,height:p.height()-p[0].clientHeight};p.remove();window.scrollbarWidth=o.width;window.scrollbarHeight=o.height;return h.match(/^(width|height)$/i)?o[h]:o},showInvisibly:function(h,p){if(!h)return{};h.jquery||(h=f(h));var o={display:h.css("display"),visibility:h.css("visibility")};return p||
o.display=="none"?(h.css({display:"block",visibility:"hidden"}),o):{}},getElementDimensions:function(h){var p={},o=p.css={},t={},F,K,A=f.layout.cssNum,y=h.offset();p.offsetLeft=y.left;p.offsetTop=y.top;f.each("Left,Right,Top,Bottom".split(","),function(y,A){F=o["border"+A]=f.layout.borderWidth(h,A);K=o["padding"+A]=f.layout.cssNum(h,"padding"+A);t[A]=F+K;p["inset"+A]=K});p.offsetWidth=h.innerWidth();p.offsetHeight=h.innerHeight();p.outerWidth=h.outerWidth();p.outerHeight=h.outerHeight();p.innerWidth=
Math.max(0,p.outerWidth-t.Left-t.Right);p.innerHeight=Math.max(0,p.outerHeight-t.Top-t.Bottom);o.width=h.width();o.height=h.height();o.top=A(h,"top",!0);o.bottom=A(h,"bottom",!0);o.left=A(h,"left",!0);o.right=A(h,"right",!0);return p},getElementCSS:function(f,p){var o={},t=f[0].style,F=p.split(","),K="Top,Bottom,Left,Right".split(","),A="Color,Style,Width".split(","),y,T,ca,U,V,Z;for(U=0;U<F.length;U++)if(y=F[U],y.match(/(border|padding|margin)$/))for(V=0;V<4;V++)if(T=K[V],y=="border")for(Z=0;Z<3;Z++)ca=
A[Z],o[y+T+ca]=t[y+T+ca];else o[y+T]=t[y+T];else o[y]=t[y];return o},cssWidth:function(h,p){var o=f.layout.borderWidth,t=f.layout.cssNum;if(p<=0)return 0;if(!f.layout.browser.boxModel)return p;o=p-o(h,"Left")-o(h,"Right")-t(h,"paddingLeft")-t(h,"paddingRight");return Math.max(0,o)},cssHeight:function(h,p){var o=f.layout.borderWidth,t=f.layout.cssNum;if(p<=0)return 0;if(!f.layout.browser.boxModel)return p;o=p-o(h,"Top")-o(h,"Bottom")-t(h,"paddingTop")-t(h,"paddingBottom");return Math.max(0,o)},cssNum:function(h,
p,o){h.jquery||(h=f(h));var t=f.layout.showInvisibly(h),p=f.curCSS(h[0],p,!0),o=o&&p=="auto"?p:parseInt(p,10)||0;h.css(t);return o},borderWidth:function(h,p){h.jquery&&(h=h[0]);var o="border"+p.substr(0,1).toUpperCase()+p.substr(1);return f.curCSS(h,o+"Style",!0)=="none"?0:parseInt(f.curCSS(h,o+"Width",!0),10)||0},isMouseOverElem:function(h,p){var o=f(p||this),t=o.offset(),F=t.top,t=t.left,K=t+o.outerWidth(),o=F+o.outerHeight(),A=h.pageX,y=h.pageY;return f.layout.browser.msie&&A<0&&y<0||A>=t&&A<=
K&&y>=F&&y<=o}};f.fn.layout=function(h){function p(a){if(!a)return!0;var b=a.keyCode;if(b<33)return!0;var c={38:"north",40:"south",37:"west",39:"east"},e=a.shiftKey,d=a.ctrlKey,j,g,i,m;d&&b>=37&&b<=40&&n[c[b]].enableCursorHotkey?m=c[b]:(d||e)&&f.each(k.borderPanes.split(","),function(a,c){j=n[c];g=j.customHotkey;i=j.customHotkeyModifier;if(e&&i=="SHIFT"||d&&i=="CTRL"||d&&e)if(g&&b==(isNaN(g)||g<=9?g.toUpperCase().charCodeAt(0):g))return m=c,!1});if(!m||!r[m]||!n[m].closable||l[m].isHidden)return!0;
da(m);a.stopPropagation();return a.returnValue=!1}function o(a){if(w()){this&&this.tagName&&(a=this);var b;G(a)?b=r[a]:f(a).data("layoutRole")?b=f(a):f(a).parents().each(function(){if(f(this).data("layoutRole"))return b=f(this),!1});if(b&&b.length){var c=b.data("layoutEdge"),a=l[c];a.cssSaved&&t(c);if(a.isSliding||a.isResizing||a.isClosed)a.cssSaved=!1;else{var e={zIndex:k.zIndex.pane_normal+2},d={},j=b.css("overflow"),g=b.css("overflowX"),i=b.css("overflowY");if(j!="visible")d.overflow=j,e.overflow=
"visible";if(g&&!g.match(/visible|auto/))d.overflowX=g,e.overflowX="visible";if(i&&!i.match(/visible|auto/))d.overflowY=g,e.overflowY="visible";a.cssSaved=d;b.css(e);f.each(k.allPanes.split(","),function(a,b){b!=c&&t(b)})}}}}function t(a){if(w()){this&&this.tagName&&(a=this);var b;G(a)?b=r[a]:f(a).data("layoutRole")?b=f(a):f(a).parents().each(function(){if(f(this).data("layoutRole"))return b=f(this),!1});if(b&&b.length){var a=b.data("layoutEdge"),a=l[a],c=a.cssSaved||{};!a.isSliding&&!a.isResizing&&
b.css("zIndex",k.zIndex.pane_normal);b.css(c);a.cssSaved=!1}}}function F(a,b,c){var e=f(a),d=n.showErrorMessages;if(e.length)if(k.borderPanes.indexOf(b)==-1)d&&alert(C.errButton+C.pane+": "+b);else return a=n[b].buttonClass+"-"+c,e.addClass(a+" "+a+"-"+b).data("layoutName",n.name),e;else d&&alert(C.errButton+C.selector+": "+a);return null}function K(a,b,c){switch(b.toLowerCase()){case "toggle":A(a,c);break;case "open":y(a,c);break;case "close":T(a,c);break;case "pin":ca(a,c);break;case "toggle-slide":A(a,
c,!0);break;case "open-slide":y(a,c,!0)}}function A(a,b,c){(a=F(a,b,"toggle"))&&a.click(function(a){da(b,!!c);a.stopPropagation()})}function y(a,b,c){(a=F(a,b,"open"))&&a.attr("title",C.Open).click(function(a){L(b,!!c);a.stopPropagation()})}function T(a,b){var c=F(a,b,"close");c&&c.attr("title",C.Close).click(function(a){H(b);a.stopPropagation()})}function ca(a,b){var c=F(a,b,"pin");if(c){var e=l[b];c.click(function(a){V(f(this),b,e.isSliding||e.isClosed);e.isSliding||e.isClosed?L(b):H(b);a.stopPropagation()});
V(c,b,!e.isClosed&&!e.isSliding);k[b].pins.push(a)}}function U(a,b){f.each(k[a].pins,function(c,e){V(f(e),a,b)})}function V(a,b,c){var e=a.attr("pin");if(!(e&&c==(e=="down"))){var e=n[b].buttonClass+"-pin",d=e+"-"+b,b=e+"-up "+d+"-up",e=e+"-down "+d+"-down";a.attr("pin",c?"down":"up").attr("title",c?C.Unpin:C.Pin).removeClass(c?b:e).addClass(c?e:b)}}function Z(a){for(var a=f.extend({},n.cookie,a||{}).name||n.name||"Layout",b=document.cookie,b=b?b.split(";"):[],c,e=0,d=b.length;e<d;e++)if(c=f.trim(b[e]).split("="),
c[0]==a)return Aa(decodeURIComponent(c[1]));return""}function na(a,b){var c=f.extend({},n.cookie,b||{}),e=c.name||n.name||"Layout",d="",j="",g=!1;c.expires.toUTCString?j=c.expires:typeof c.expires=="number"&&(j=new Date,c.expires>0?j.setDate(j.getDate()+c.expires):(j.setYear(1970),g=!0));j&&(d+=";expires="+j.toUTCString());c.path&&(d+=";path="+c.path);c.domain&&(d+=";domain="+c.domain);c.secure&&(d+=";secure");g?(l.cookie={},document.cookie=e+"="+d):(l.cookie=oa(a||c.keys),document.cookie=e+"="+encodeURIComponent(Ba(l.cookie))+
d);return f.extend({},l.cookie)}function Ca(a){if(a=Z(a))l.cookie=f.extend({},a),Da(a);return a}function Da(a,b){a=Ea(a);f.extend(!0,n,a);if(l.initialized){var c,e,d,j,g=!b;f.each(k.allPanes.split(","),function(b,f){c=a[f];if(typeof c=="object")e=c.size,j=c.initClosed,d=c.initHidden,(e>0||e=="auto")&&$(f,e),d===!0?ka(f,g):j===!1?L(f,!1,g):j===!0?H(f,!1,g):d===!1&&ha(f,!1,g)})}}function oa(a){var b={},c={isClosed:"initClosed",isHidden:"initHidden"},e,d,j;if(!a)a=n.cookie.keys;f.isArray(a)&&(a=a.join(","));
for(var a=a.replace(/__/g,".").split(","),g=0,i=a.length;g<i;g++)e=a[g].split("."),d=e[0],e=e[1],k.allPanes.indexOf(d)<0||(j=l[d][e],j!=void 0&&(e=="isClosed"&&l[d].isSliding&&(j=!0),(b[d]||(b[d]={}))[c[e]?c[e]:e]=j));return b}function Ba(a){function b(a){var e=[],d=0,f,g,i;for(f in a)g=a[f],i=typeof g,i=="string"?g='"'+g+'"':i=="object"&&(g=b(g)),e[d++]='"'+f+'":'+g;return"{"+e.join(",")+"}"}return b(a)}function Aa(a){try{return window.eval("("+a+")")||{}}catch(b){return{}}}var C=f.layout.language,
n={name:"",containerClass:"ui-layout-container",scrollToBookmarkOnLoad:!0,resizeWithWindow:!0,resizeWithWindowDelay:200,resizeWithWindowMaxDelay:0,onresizeall_start:null,onresizeall_end:null,onload_start:null,onload_end:null,onunload_start:null,onunload_end:null,autoBindCustomButtons:!1,zIndex:null,initPanes:!0,showErrorMessages:!0,defaults:{applyDemoStyles:!1,closable:!0,resizable:!0,slidable:!0,initClosed:!1,initHidden:!1,contentSelector:".ui-layout-content",contentIgnoreSelector:".ui-layout-ignore",
findNestedContent:!1,paneClass:"ui-layout-pane",resizerClass:"ui-layout-resizer",togglerClass:"ui-layout-toggler",buttonClass:"ui-layout-button",minSize:0,maxSize:0,spacing_open:6,spacing_closed:6,togglerLength_open:50,togglerLength_closed:50,togglerAlign_open:"center",togglerAlign_closed:"center",togglerTip_open:C.Close,togglerTip_closed:C.Open,togglerContent_open:"",togglerContent_closed:"",resizerDblClickToggle:!0,autoResize:!0,autoReopen:!0,resizerDragOpacity:1,maskIframesOnResize:!0,resizeNestedLayout:!0,
resizeWhileDragging:!1,resizeContentWhileDragging:!1,noRoomToOpenTip:C.noRoomToOpenTip,resizerTip:C.Resize,sliderTip:C.Slide,sliderCursor:"pointer",slideTrigger_open:"click",slideTrigger_close:"mouseleave",slideDelay_open:300,slideDelay_close:300,hideTogglerOnSlide:!1,preventQuickSlideClose:f.layout.browser.webkit,preventPrematureSlideClose:!1,showOverflowOnHover:!1,enableCursorHotkey:!0,customHotkeyModifier:"SHIFT",fxName:"slide",fxSpeed:null,fxSettings:{},fxOpacityFix:!0,triggerEventsOnLoad:!1,
triggerEventsWhileDragging:!0,onshow_start:null,onshow_end:null,onhide_start:null,onhide_end:null,onopen_start:null,onopen_end:null,onclose_start:null,onclose_end:null,onresize_start:null,onresize_end:null,onsizecontent_start:null,onsizecontent_end:null,onswap_start:null,onswap_end:null,ondrag_start:null,ondrag_end:null},north:{paneSelector:".ui-layout-north",size:"auto",resizerCursor:"n-resize",customHotkey:""},south:{paneSelector:".ui-layout-south",size:"auto",resizerCursor:"s-resize",customHotkey:""},
east:{paneSelector:".ui-layout-east",size:200,resizerCursor:"e-resize",customHotkey:""},west:{paneSelector:".ui-layout-west",size:200,resizerCursor:"w-resize",customHotkey:""},center:{paneSelector:".ui-layout-center",minWidth:0,minHeight:0},useStateCookie:!1,cookie:{name:"",autoSave:!0,autoLoad:!0,domain:"",path:"",expires:"",secure:!1,keys:"north.size,south.size,east.size,west.size,north.isClosed,south.isClosed,east.isClosed,west.isClosed,north.isHidden,south.isHidden,east.isHidden,west.isHidden"}},
pa={slide:{all:{duration:"fast"},north:{direction:"up"},south:{direction:"down"},east:{direction:"right"},west:{direction:"left"}},drop:{all:{duration:"slow"},north:{direction:"up"},south:{direction:"down"},east:{direction:"right"},west:{direction:"left"}},scale:{all:{duration:"fast"}}},l={id:"layout"+(new Date).getTime(),initialized:!1,container:{},north:{},south:{},east:{},west:{},center:{},cookie:{}},k={allPanes:"north,south,west,east,center",borderPanes:"north,south,west,east",altSide:{north:"south",
south:"north",east:"west",west:"east"},hidden:{visibility:"hidden"},visible:{visibility:"visible"},zIndex:{pane_normal:1,resizer_normal:2,iframe_mask:2,pane_sliding:100,pane_animate:1E3,resizer_drag:1E4},resizers:{cssReq:{position:"absolute",padding:0,margin:0,fontSize:"1px",textAlign:"left",overflow:"hidden"},cssDemo:{background:"#DDD",border:"none"}},togglers:{cssReq:{position:"absolute",display:"block",padding:0,margin:0,overflow:"hidden",textAlign:"center",fontSize:"1px",cursor:"pointer",zIndex:1},
cssDemo:{background:"#AAA"}},content:{cssReq:{position:"relative"},cssDemo:{overflow:"auto",padding:"10px"},cssDemoPane:{overflow:"hidden",padding:0}},panes:{cssReq:{position:"absolute",margin:0},cssDemo:{padding:"10px",background:"#FFF",border:"1px solid #BBB",overflow:"auto"}},north:{side:"Top",sizeType:"Height",dir:"horz",cssReq:{top:0,bottom:"auto",left:0,right:0,width:"auto"},pins:[]},south:{side:"Bottom",sizeType:"Height",dir:"horz",cssReq:{top:"auto",bottom:0,left:0,right:0,width:"auto"},pins:[]},
east:{side:"Right",sizeType:"Width",dir:"vert",cssReq:{left:"auto",right:0,top:"auto",bottom:"auto",height:"auto"},pins:[]},west:{side:"Left",sizeType:"Width",dir:"vert",cssReq:{left:0,right:"auto",top:"auto",bottom:"auto",height:"auto"},pins:[]},center:{dir:"center",cssReq:{left:"auto",right:"auto",top:"auto",bottom:"auto",height:"auto",width:"auto"}}},E={data:{},set:function(a,b,c){E.clear(a);E.data[a]=setTimeout(b,c)},clear:function(a){var b=E.data;b[a]&&(clearTimeout(b[a]),delete b[a])}},G=function(a){try{return typeof a==
"string"||typeof a=="object"&&a.constructor.toString().match(/string/i)!==null}catch(b){return!1}},z=function(a,b){return Math.max(a,b)},Ea=function(a){var b,c={cookie:{},defaults:{fxSettings:{}},north:{fxSettings:{}},south:{fxSettings:{}},east:{fxSettings:{}},west:{fxSettings:{}},center:{fxSettings:{}}},a=a||{};a.effects||a.cookie||a.defaults||a.north||a.south||a.west||a.east||a.center?c=f.extend(!0,c,a):f.each(a,function(a,d){b=a.split("__");if(!b[1]||c[b[0]])c[b[1]?b[0]:"defaults"][b[1]?b[1]:b[0]]=
d});return c},Fa=function(a,b,c){function e(j){var g=k[j];g.doCallback?(d.push(j),j=g.callback.split(",")[1],j!=b&&!f.inArray(j,d)>=0&&e(j)):(g.doCallback=!0,g.callback=a+","+b+","+(c?1:0))}var d=[];f.each(k.borderPanes.split(","),function(a,b){if(k[b].isMoving)return e(b),!1})},Ga=function(a){a=k[a];k.isLayoutBusy=!1;delete a.isMoving;if(a.doCallback&&a.callback){a.doCallback=!1;var b=a.callback.split(","),c=b[2]>0?!0:!1;b[0]=="open"?L(b[1],c):b[0]=="close"&&H(b[1],c);if(!a.doCallback)a.callback=
null}},v=function(a,b){if(b){var c;try{if(typeof b=="function")c=b;else if(G(b))if(b.match(/,/)){var e=b.split(",");c=eval(e[0]);if(typeof c=="function"&&e.length>1)return c(e[1])}else c=eval(b);else return;if(typeof c=="function")return a&&r[a]?c(a,r[a],l[a],n[a],n.name):c(ea,l,n,n.name)}catch(d){}}},Ha=function(a){if(!f.layout.browser.mozilla){var b=r[a];l[a].tagName=="IFRAME"?b.css(k.hidden).css(k.visible):b.find("IFRAME").css(k.hidden).css(k.visible)}},I=function(a,b){var c=G(a),e=c?r[a]:f(a);
if(!e.length)return 0;isNaN(b)&&(b=c?R(a):e.outerWidth());return f.layout.cssWidth(e,b)},J=function(a,b){var c=G(a),e=c?r[a]:f(a);if(!e.length)return 0;isNaN(b)&&(b=c?R(a):e.outerHeight());return f.layout.cssHeight(e,b)},la=function(a){var b=k[a].dir,a={minWidth:1001-I(a,1E3),minHeight:1001-J(a,1E3)};if(b=="horz")a.minSize=a.minHeight;if(b=="vert")a.minSize=a.minWidth;return a},Ra=function(a,b,c){var e=a;G(a)?e=r[a]:a.jquery||(e=f(a));a=J(e,b);e.css({height:a,visibility:"visible"});a>0&&e.innerWidth()>
0?c&&e.data("autoHidden")&&(e.show().data("autoHidden",!1),f.layout.browser.mozilla||e.css(k.hidden).css(k.visible)):c&&!e.data("autoHidden")&&e.hide().data("autoHidden",!0)},W=function(a,b,c){if(!c)c=k[a].dir;G(b)&&b.match(/%/)&&(b=parseInt(b,10)/100);if(b===0)return 0;else if(b>=1)return parseInt(b,10);else if(b>0){var a=n,e;c=="horz"?e=u.innerHeight-(r.north?a.north.spacing_open:0)-(r.south?a.south.spacing_open:0):c=="vert"&&(e=u.innerWidth-(r.west?a.west.spacing_open:0)-(r.east?a.east.spacing_open:
0));return Math.floor(e*b)}else if(a=="center")return 0;else{e=r[a];var c=c=="horz"?"height":"width",a=f.layout.showInvisibly(e),d=e.css(c);e.css(c,"auto");b=c=="height"?e.outerHeight():e.outerWidth();e.css(c,d).css(a);return b}},R=function(a,b){var c=r[a],e=n[a],d=l[a],f=b?e.spacing_open:0,e=b?e.spacing_closed:0;return!c||d.isHidden?0:d.isClosed||d.isSliding&&b?e:k[a].dir=="horz"?c.outerHeight()+f:c.outerWidth()+f},M=function(a,b){if(w()){var c=n[a],e=l[a],d=k[a],f=d.dir;d.side.toLowerCase();d.sizeType.toLowerCase();
var d=b!=void 0?b:e.isSliding,g=c.spacing_open,i=k.altSide[a],m=l[i],P=r[i],h=!P||m.isVisible===!1||m.isSliding?0:f=="horz"?P.outerHeight():P.outerWidth(),i=(!P||m.isHidden?0:n[i][m.isClosed!==!1?"spacing_closed":"spacing_open"])||0,m=f=="horz"?u.innerHeight:u.innerWidth,P=la("center"),P=f=="horz"?z(n.center.minHeight,P.minHeight):z(n.center.minWidth,P.minWidth),d=m-g-(d?0:W("center",P,f)+h+i),f=e.minSize=z(W(a,c.minSize),la(a).minSize),g=c.maxSize?W(a,c.maxSize):1E5,d=Math.min(g,d),d=e.maxSize=d,
e=e.resizerPosition={},g=u.insetTop,h=u.insetLeft,i=u.innerWidth,m=u.innerHeight,c=c.spacing_open;switch(a){case "north":e.min=g+f;e.max=g+d;break;case "west":e.min=h+f;e.max=h+d;break;case "south":e.min=g+m-d-c;e.max=g+m-f-c;break;case "east":e.min=h+i-d-c,e.max=h+i-f-c}}},N=function(a){return f.layout.getElementDimensions(a)},qa=function(a,b){var c=f(a),e=c.data("layoutRole"),d=c.data("layoutEdge"),j=n[d][e+"Class"],d="-"+d,g=c.hasClass(j+"-closed")?"-closed":"-open",i=g=="-closed"?"-open":"-closed",
g=j+"-hover "+(j+d+"-hover ")+(j+g+"-hover ")+(j+d+g+"-hover ");b&&(g+=j+i+"-hover "+(j+d+i+"-hover "));e=="resizer"&&c.hasClass(j+"-sliding")&&(g+=j+"-sliding-hover "+(j+d+"-sliding-hover "));return f.trim(g)},ra=function(a,b){var c=f(b||this);a&&c.data("layoutRole")=="toggler"&&a.stopPropagation();c.addClass(qa(c))},S=function(a,b){var c=f(b||this);c.removeClass(qa(c,!0))},Ia=function(a){f("body").disableSelection();ra(a,this)},sa=function(a,b){var c=b||this,e=f(c).data("layoutEdge"),d=e+"ResizerLeave";
E.clear(e+"_openSlider");E.clear(d);b?l[e].isResizing||f("body").enableSelection():(S(a,this),E.set(d,function(){sa(a,c)},200))},w=function(){return l.initialized||l.creatingLayout?!0:ta()},ta=function(){var a=n;if(!q.is(":visible"))return!1;if(!Ja("center").length)return a.showErrorMessages&&alert(C.errCenterPaneMissing),!1;l.creatingLayout=!0;f.extend(u,N(q));Sa();fa();if(a.scrollToBookmarkOnLoad){var b=self.location;b.hash&&b.replace(b.hash)}a.resizeWithWindow&&!q.data("layoutRole")&&f(window).bind("resize."+
B,Ta);delete l.creatingLayout;l.initialized=!0;v(null,a.onload_end||a.onload);return!0},Ta=function(){var a=Number(n.resizeWithWindowDelay);a<10&&(a=100);E.clear("winResize");E.set("winResize",function(){E.clear("winResize");E.clear("winResizeRepeater");var a=N(q);(a.innerWidth!==u.innerWidth||a.innerHeight!==u.innerHeight)&&ga()},a);E.data.winResizeRepeater||Ka()},Ka=function(){var a=Number(n.resizeWithWindowMaxDelay);a>0&&E.set("winResizeRepeater",function(){Ka();ga()},a)},La=function(){var a=n;
l.cookie=oa();v(null,a.onunload_start);a.useStateCookie&&a.cookie.autoSave&&na();v(null,a.onunload_end||a.onunload)},Ma=function(a){if(!a||a=="all")a=k.borderPanes;f.each(a.split(","),function(a,c){var e=n[c];if(e.enableCursorHotkey||e.customHotkey)return f(document).bind("keydown."+B,p),!1})},Ua=function(){function a(a){for(var c in b)a[c]!=void 0&&(a[b[c]]=a[c],delete a[c])}h=Ea(h);var b={applyDefaultStyles:"applyDemoStyles"};a(h.defaults);f.each(k.allPanes.split(","),function(b,c){a(h[c])});h.effects&&
(f.extend(pa,h.effects),delete h.effects);f.extend(n.cookie,h.cookie);f.each("name,containerClass,zIndex,scrollToBookmarkOnLoad,resizeWithWindow,resizeWithWindowDelay,resizeWithWindowMaxDelay,onresizeall,onresizeall_start,onresizeall_end,onload,onload_start,onload_end,onunload,onunload_start,onunload_end,autoBindCustomButtons,useStateCookie,showErrorMessages".split(","),function(a,b){h[b]!==void 0?n[b]=h[b]:h.defaults[b]!==void 0&&(n[b]=h.defaults[b],delete h.defaults[b])});f.each("paneSelector,resizerCursor,customHotkey".split(","),
function(a,b){delete h.defaults[b]});f.extend(!0,n.defaults,h.defaults);k.center=f.extend(!0,{},k.panes,k.center);var c=n.zIndex;if(c===0||c>0)k.zIndex.pane_normal=c,k.zIndex.resizer_normal=c+1,k.zIndex.iframe_mask=c+1;f.extend(n.center,h.center);var e=f.extend(!0,{},n.defaults,h.defaults,n.center),c="paneClass,contentSelector,applyDemoStyles,triggerEventsOnLoad,showOverflowOnHover,onresize,onresize_start,onresize_end,resizeNestedLayout,resizeContentWhileDragging,findNestedContent,onsizecontent,onsizecontent_start,onsizecontent_end".split(",");
f.each(c,function(a,b){n.center[b]=e[b]});var d,j=n.defaults;f.each(k.borderPanes.split(","),function(a,b){k[b]=f.extend(!0,{},k.panes,k[b]);d=n[b]=f.extend(!0,{},n.defaults,n[b],h.defaults,h[b]);if(!d.paneClass)d.paneClass="ui-layout-pane";if(!d.resizerClass)d.resizerClass="ui-layout-resizer";if(!d.togglerClass)d.togglerClass="ui-layout-toggler";f.each(["_open","_close",""],function(a,c){var e="fxName"+c,g="fxSpeed"+c,k="fxSettings"+c;d[e]=h[b][e]||h[b].fxName||h.defaults[e]||h.defaults.fxName||
d[e]||d.fxName||j[e]||j.fxName||"none";var l=d[e];if(l=="none"||!f.effects||!f.effects[l]||!pa[l]&&!d[k]&&!d.fxSettings)l=d[e]="none";l=pa[l]||{};e=l.all||{};l=l[b]||{};d[k]=f.extend({},e,l,j.fxSettings||{},j[k]||{},d.fxSettings,d[k],h.defaults.fxSettings,h.defaults[k]||{},h[b].fxSettings,h[b][k]||{});d[g]=h[b][g]||h[b].fxSpeed||h.defaults[g]||h.defaults.fxSpeed||d[g]||d[k].duration||d.fxSpeed||d.fxSettings.duration||j.fxSpeed||j.fxSettings.duration||l.duration||e.duration||"normal"})})},Ja=function(a){a=
n[a].paneSelector;if(a.substr(0,1)==="#")return q.find(a).eq(0);else{var b=q.children(a).eq(0);return b.length?b:q.children("form:first").children(a).eq(0)}},Sa=function(){f.each(k.allPanes.split(","),function(a,b){Na(b,!0)});ua();f.each(k.borderPanes.split(","),function(a,b){r[b]&&l[b].isVisible&&(M(b),X(b))});Y("center");setTimeout(function(){f.each(k.allPanes.split(","),function(a,b){var c=n[b];r[b]&&l[b].isVisible&&(c.triggerEventsOnLoad&&v(b,c.onresize_end||c.onresize),aa(b))})},50);n.showErrorMessages&&
q.innerHeight()<2&&alert(C.errContainerHeight.replace(/CONTAINER/,u.ref))},Na=function(a,b){if(b||w()){var c=n[a],e=l[a],d=k[a],j=d.dir,g=a=="center",i={},m=r[a],h;m?va(a):O[a]=!1;m=r[a]=Ja(a);if(m.length){m.data("layoutCSS")||m.data("layoutCSS",f.layout.getElementCSS(m,"position,top,left,bottom,right,width,height,overflow,zIndex,display,backgroundColor,padding,margin,border"));m.data("parentLayout",ea).data("layoutRole","pane").data("layoutEdge",a).css(d.cssReq).css("zIndex",k.zIndex.pane_normal).css(c.applyDemoStyles?
d.cssDemo:{}).addClass(c.paneClass+" "+c.paneClass+"-"+a).bind("mouseenter."+B,ra).bind("mouseleave."+B,S);Oa(a,!1);if(!g)h=e.size=W(a,c.size),d=W(a,c.minSize)||1,g=W(a,c.maxSize)||1E5,h>0&&(h=z(Math.min(h,g),d)),e.isClosed=!1,e.isSliding=!1,e.isResizing=!1,e.isHidden=!1;e.tagName=m[0].tagName;e.edge=a;e.noRoom=!1;e.isVisible=!0;switch(a){case "north":i.top=u.insetTop;i.left=u.insetLeft;i.right=u.insetRight;break;case "south":i.bottom=u.insetBottom;i.left=u.insetLeft;i.right=u.insetRight;break;case "west":i.left=
u.insetLeft;break;case "east":i.right=u.insetRight}if(j=="horz")i.height=z(1,J(a,h));else if(j=="vert")i.width=z(1,I(a,h));m.css(i);j!="horz"&&Y(a,!0);c.initClosed&&c.closable&&!c.initHidden?H(a,!0,!0):c.initHidden||c.initClosed?ka(a):e.noRoom||m.css("display","block");m.css("visibility","visible");c.showOverflowOnHover&&m.hover(o,t);l.initialized&&(ua(a),Ma(a),ga(),e.isVisible&&(c.triggerEventsOnLoad&&v(a,c.onresize_end||c.onresize),aa(a)))}else r[a]=!1}},ua=function(a){if(!a||a=="all")a=k.borderPanes;
f.each(a.split(","),function(a,c){var e=r[c];x[c]=!1;D[c]=!1;if(e){var e=n[c],d=l[c],j=e.resizerClass,g=e.togglerClass;k[c].side.toLowerCase();var i="-"+c,m=x[c]=f("<div></div>"),h=e.closable?D[c]=f("<div></div>"):!1;!d.isVisible&&e.slidable&&m.attr("title",e.sliderTip).css("cursor",e.sliderCursor);m.attr("id",e.paneSelector.substr(0,1)=="#"?e.paneSelector.substr(1)+"-resizer":"").data("parentLayout",ea).data("layoutRole","resizer").data("layoutEdge",c).css(k.resizers.cssReq).css("zIndex",k.zIndex.resizer_normal).css(e.applyDemoStyles?
k.resizers.cssDemo:{}).addClass(j+" "+j+i).appendTo(q);h&&(h.attr("id",e.paneSelector.substr(0,1)=="#"?e.paneSelector.substr(1)+"-toggler":"").data("parentLayout",ea).data("layoutRole","toggler").data("layoutEdge",c).css(k.togglers.cssReq).css(e.applyDemoStyles?k.togglers.cssDemo:{}).addClass(g+" "+g+i).appendTo(m),e.togglerContent_open&&f("<span>"+e.togglerContent_open+"</span>").data("layoutRole","togglerContent").data("layoutEdge",c).addClass("content content-open").css("display","none").appendTo(h),
e.togglerContent_closed&&f("<span>"+e.togglerContent_closed+"</span>").data("layoutRole","togglerContent").data("layoutEdge",c).addClass("content content-closed").css("display","none").appendTo(h),Pa(c));Va(c);d.isVisible?wa(c):(xa(c),ba(c,!0))}});ia("all")},Oa=function(a,b){if(w()){var c=n[a],e=c.contentSelector,d=r[a],j;e&&(j=O[a]=c.findNestedContent?d.find(e).eq(0):d.children(e).eq(0));j&&j.length?(j.data("layoutCSS")||j.data("layoutCSS",f.layout.getElementCSS(j,"height")),j.css(k.content.cssReq),
c.applyDemoStyles&&(j.css(k.content.cssDemo),d.css(k.content.cssDemoPane)),l[a].content={},b!==!1&&fa(a)):O[a]=!1}},Wa=function(){var a;f.each("toggle,open,close,pin,toggle-slide,open-slide".split(","),function(b,c){f.each(k.borderPanes.split(","),function(b,d){f(".ui-layout-button-"+c+"-"+d).each(function(){a=f(this).data("layoutName")||f(this).attr("layoutName");(a==void 0||a==n.name)&&K(this,c,d)})})})},Va=function(a){var b=typeof f.fn.draggable=="function",c;if(!a||a=="all")a=k.borderPanes;f.each(a.split(","),
function(a,d){var j=n[d],g=l[d],i=k[d],m=i.dir=="horz"?"top":"left",h,Q;if(!b||!r[d]||!j.resizable)return j.resizable=!1,!0;var o=x[d],p=j.resizerClass,t=p+"-drag",w=p+"-"+d+"-drag",z=p+"-dragging",A=p+"-"+d+"-dragging",y=p+"-dragging-limit",C=p+"-"+d+"-dragging-limit",D=!1;g.isClosed||o.attr("title",j.resizerTip).css("cursor",j.resizerCursor);o.bind("mouseenter."+B,Ia).bind("mouseleave."+B,sa);o.draggable({containment:q[0],axis:i.dir=="horz"?"y":"x",delay:0,distance:1,helper:"clone",opacity:j.resizerDragOpacity,
addClasses:!1,zIndex:k.zIndex.resizer_drag,start:function(){j=n[d];g=l[d];Q=j.resizeWhileDragging;if(!1===v(d,j.ondrag_start))return!1;k.isLayoutBusy=!0;g.isResizing=!0;E.clear(d+"_closeSlider");M(d);h=g.resizerPosition;o.addClass(t+" "+w);D=!1;c=f(j.maskIframesOnResize===!0?"iframe":j.maskIframesOnResize).filter(":visible");var a,b=0;c.each(function(){a="ui-layout-mask-"+ ++b;f(this).data("layoutMaskID",a);f('<div id="'+a+'" class="ui-layout-mask ui-layout-mask-'+d+'"/>').css({background:"#fff",
opacity:"0.001",zIndex:k.zIndex.iframe_mask,position:"absolute",width:this.offsetWidth+"px",height:this.offsetHeight+"px"}).css(f(this).position()).appendTo(this.parentNode)});f("body").disableSelection()},drag:function(a,b){D||(b.helper.addClass(z+" "+A).css({right:"auto",bottom:"auto"}).children().css("visibility","hidden"),D=!0,g.isSliding&&r[d].css("zIndex",k.zIndex.pane_sliding));var c=0;if(b.position[m]<h.min)b.position[m]=h.min,c=-1;else if(b.position[m]>h.max)b.position[m]=h.max,c=1;c?(b.helper.addClass(y+
" "+C),window.defaultStatus="Panel has reached its "+(c>0&&d.match(/north|west/)||c<0&&d.match(/south|east/)?"maximum":"minimum")+" size"):(b.helper.removeClass(y+" "+C),window.defaultStatus="");Q&&F(a,b,d)},stop:function(a,b){f("body").enableSelection();window.defaultStatus="";o.removeClass(t+" "+w);g.isResizing=!1;k.isLayoutBusy=!1;F(a,b,d,!0)}});var F=function(a,b,d,e){var a=b.position,b=k[d],g;switch(d){case "north":g=a.top;break;case "west":g=a.left;break;case "south":g=u.offsetHeight-a.top-
j.spacing_open;break;case "east":g=u.offsetWidth-a.left-j.spacing_open}if(e){if(f("div.ui-layout-mask").each(function(){this.parentNode.removeChild(this)}),!1===v(d,j.ondrag_end||j.ondrag))return!1}else c.each(function(){f("#"+f(this).data("layoutMaskID")).css(f(this).position()).css({width:this.offsetWidth+"px",height:this.offsetHeight+"px"})});ya(d,g-u["inset"+b.side])}})},va=function(a,b,c){if(w()&&r[a]){var e=r[a],d=O[a],j=x[a],g=D[a],i=n[a].paneClass,m=i+"-"+a,i=[i,i+"-open",i+"-closed",i+"-sliding",
m,m+"-open",m+"-closed",m+"-sliding"];f.merge(i,qa(e,!0));e&&e.length&&(b&&!e.data("layoutContainer")&&(!d||!d.length||!d.data("layoutContainer"))?e.remove():(e.removeClass(i.join(" ")).removeData("layoutParent").removeData("layoutRole").removeData("layoutEdge").removeData("autoHidden").unbind("."+B),e.data("layoutContainer")||e.css(e.data("layoutCSS")).removeData("layoutCSS"),d&&d.length&&!d.data("layoutContainer")&&d.css(d.data("layoutCSS")).removeData("layoutCSS")));g&&g.length&&g.remove();j&&
j.length&&j.remove();r[a]=O[a]=x[a]=D[a]=!1;c||(ga(),l[a]={})}},ka=function(a,b){if(w()){var c=n[a],e=l[a],d=r[a],f=x[a];if(d&&!e.isHidden&&!(l.initialized&&!1===v(a,c.onhide_start)))if(e.isSliding=!1,f&&f.hide(),!l.initialized||e.isClosed){if(e.isClosed=!0,e.isHidden=!0,e.isVisible=!1,d.hide(),Y(k[a].dir=="horz"?"all":"center"),l.initialized||c.triggerEventsOnLoad)v(a,c.onhide_end||c.onhide)}else e.isHiding=!0,H(a,!1,b)}},ha=function(a,b,c,e){if(w()){var d=l[a];if(r[a]&&d.isHidden&&!1!==v(a,n[a].onshow_start))d.isSliding=
!1,d.isShowing=!0,b===!1?H(a,!0):L(a,!1,c,e)}},da=function(a,b){if(w()){G(a)||(a.stopImmediatePropagation(),a=f(this).data("layoutEdge"));var c=l[G(a)?f.trim(a):a==void 0||a==null?"":a];c.isHidden?ha(a):c.isClosed?L(a,!!b):H(a)}},Xa=function(a){var b=l[a];r[a].hide();b.isClosed=!0;b.isVisible=!1},H=function(a,b,c,e){function d(){if(i.isClosed){ba(a,!0);var b=k.altSide[a];l[b].noRoom&&(M(b),X(b));if(!e&&(l.initialized||g.triggerEventsOnLoad))m||v(a,g.onclose_end||g.onclose),m&&v(a,g.onshow_end||g.onshow),
h&&v(a,g.onhide_end||g.onhide)}Ga(a)}if(!l.initialized&&r[a])Xa(a);else if(w()){var f=r[a],g=n[a],i=l[a],c=!c&&!i.isClosed&&g.fxName_close!="none",m=i.isShowing,h=i.isHiding;delete i.isShowing;delete i.isHiding;if(f&&(g.closable||m||h)&&(b||!i.isClosed||m))if(k.isLayoutBusy)Fa("close",a,b);else if(m||!1!==v(a,g.onclose_start)){k[a].isMoving=!0;k.isLayoutBusy=!0;i.isClosed=!0;i.isVisible=!1;if(h)i.isHidden=!0;else if(m)i.isHidden=!1;i.isSliding?ja(a,!1):Y(k[a].dir=="horz"?"all":"center",!1);xa(a);
c?(ma(a,!0),f.hide(g.fxName_close,g.fxSettings_close,g.fxSpeed_close,function(){ma(a,!1);d()})):(f.hide(),d())}}},xa=function(a){var b=x[a],c=D[a],e=n[a],d=k[a].side.toLowerCase(),j=e.resizerClass,g=e.togglerClass,i="-"+a;b.css(d,u["inset"+k[a].side]).removeClass(j+"-open "+j+i+"-open").removeClass(j+"-sliding "+j+i+"-sliding").addClass(j+"-closed "+j+i+"-closed").unbind("dblclick."+B);e.resizable&&typeof f.fn.draggable=="function"&&b.draggable("disable").removeClass("ui-state-disabled").css("cursor",
"default").attr("title","");c&&(c.removeClass(g+"-open "+g+i+"-open").addClass(g+"-closed "+g+i+"-closed").attr("title",e.togglerTip_closed),c.children(".content-open").hide(),c.children(".content-closed").css("display","block"));U(a,!1);l.initialized&&ia("all")},L=function(a,b,c,e){function d(){i.isVisible&&(Ha(a),i.isSliding||Y(k[a].dir=="vert"?"center":"all",!1),wa(a));Ga(a)}if(w()){var f=r[a],g=n[a],i=l[a],c=!c&&i.isClosed&&g.fxName_open!="none",m=i.isShowing;delete i.isShowing;if(f&&(g.resizable||
g.closable||m)&&(!i.isVisible||i.isSliding))if(i.isHidden&&!m)ha(a,!0);else if(k.isLayoutBusy)Fa("open",a,b);else if(M(a,b),!1!==v(a,g.onopen_start))if(M(a,b),i.minSize>i.maxSize)U(a,!1),!e&&g.noRoomToOpenTip&&alert(g.noRoomToOpenTip);else{k[a].isMoving=!0;k.isLayoutBusy=!0;b?ja(a,!0):i.isSliding?ja(a,!1):g.slidable&&ba(a,!1);i.noRoom=!1;X(a);i.isVisible=!0;i.isClosed=!1;if(m)i.isHidden=!1;c?(ma(a,!0),f.show(g.fxName_open,g.fxSettings_open,g.fxSpeed_open,function(){ma(a,!1);d()})):(f.show(),d())}}},
wa=function(a,b){var c=r[a],e=x[a],d=D[a],j=n[a],g=l[a],i=k[a].side.toLowerCase(),m=j.resizerClass,h=j.togglerClass,Q="-"+a;e.css(i,u["inset"+k[a].side]+R(a)).removeClass(m+"-closed "+m+Q+"-closed").addClass(m+"-open "+m+Q+"-open");g.isSliding?e.addClass(m+"-sliding "+m+Q+"-sliding"):e.removeClass(m+"-sliding "+m+Q+"-sliding");j.resizerDblClickToggle&&e.bind("dblclick",da);S(0,e);j.resizable&&typeof f.fn.draggable=="function"?e.draggable("enable").css("cursor",j.resizerCursor).attr("title",j.resizerTip):
g.isSliding||e.css("cursor","default");d&&(d.removeClass(h+"-closed "+h+Q+"-closed").addClass(h+"-open "+h+Q+"-open").attr("title",j.togglerTip_open),S(0,d),d.children(".content-closed").hide(),d.children(".content-open").css("display","block"));U(a,!g.isSliding);f.extend(g,N(c));l.initialized&&(ia("all"),fa(a,!0));if(!b&&(l.initialized||j.triggerEventsOnLoad)&&c.is(":visible"))v(a,j.onopen_end||j.onopen),g.isShowing&&v(a,j.onshow_end||j.onshow),l.initialized&&(v(a,j.onresize_end||j.onresize),aa(a))},
Qa=function(a){function b(){d.isClosed?k[e].isMoving||L(e,!0):ja(e,!0)}if(w()){var c=G(a)?null:a,e=c?f(this).data("layoutEdge"):a,d=l[e],a=n[e].slideDelay_open;c&&c.stopImmediatePropagation();d.isClosed&&c&&c.type=="mouseenter"&&a>0?E.set(e+"_openSlider",b,a):b()}},za=function(a){function b(){d.isClosed?ja(e,!1):k[e].isMoving||H(e)}if(w()){var c=G(a)?null:a,e=c?f(this).data("layoutEdge"):a,a=n[e],d=l[e],j=k[e].isMoving?1E3:300;if(!d.isClosed&&!d.isResizing)if(a.slideTrigger_close=="click")b();else if(!a.preventQuickSlideClose||
!k.isLayoutBusy)if(!a.preventPrematureSlideClose||!c||!f.layout.isMouseOverElem(c,r[e]))c?E.set(e+"_closeSlider",b,z(a.slideDelay_close,j)):b()}},ma=function(a,b){var c=r[a];if(b)c.css({zIndex:k.zIndex.pane_animate}),a=="south"?c.css({top:u.insetTop+u.innerHeight-c.outerHeight()}):a=="east"&&c.css({left:u.insetLeft+u.innerWidth-c.outerWidth()});else{c.css({zIndex:l[a].isSliding?k.zIndex.pane_sliding:k.zIndex.pane_normal});a=="south"?c.css({top:"auto"}):a=="east"&&c.css({left:"auto"});var e=n[a];f.layout.browser.msie&&
e.fxOpacityFix&&e.fxName_open!="slide"&&c.css("filter")&&c.css("opacity")==1&&c[0].style.removeAttribute("filter")}},ba=function(a,b){var c=n[a],e=x[a],d=c.slideTrigger_open.toLowerCase();if(e&&(!b||c.slidable)){if(d.match(/mouseover/))d=c.slideTrigger_open="mouseenter";else if(!d.match(/click|dblclick|mouseenter/))d=c.slideTrigger_open="click";e[b?"bind":"unbind"](d+"."+B,Qa).css("cursor",b?c.sliderCursor:"default").attr("title",b?c.sliderTip:"")}},ja=function(a,b){function c(b){E.clear(a+"_closeSlider");
b.stopPropagation()}var e=n[a],d=l[a],f=k.zIndex,g=e.slideTrigger_close.toLowerCase(),i=b?"bind":"unbind",m=r[a],h=x[a];d.isSliding=b;E.clear(a+"_closeSlider");b&&ba(a,!1);m.css("zIndex",b?f.pane_sliding:f.pane_normal);h.css("zIndex",b?f.pane_sliding:f.resizer_normal);if(!g.match(/click|mouseleave/))g=e.slideTrigger_close="mouseleave";h[i](g,za);g=="mouseleave"&&(m[i]("mouseleave."+B,za),h[i]("mouseenter."+B,c),m[i]("mouseenter."+B,c));b?g=="click"&&!e.resizable&&(h.css("cursor",b?e.sliderCursor:
"default"),h.attr("title",b?e.togglerTip_open:"")):E.clear(a+"_closeSlider")},X=function(a,b,c,e){var b=n[a],d=l[a],j=k[a],g=r[a],i=x[a],m=j.dir=="vert",h=!1;if(a=="center"||m&&d.noVerticalRoom)if((h=d.maxHeight>0)&&d.noRoom){g.show();i&&i.show();d.isVisible=!0;d.noRoom=!1;if(m)d.noVerticalRoom=!1;Ha(a)}else if(!h&&!d.noRoom)g.hide(),i&&i.hide(),d.isVisible=!1,d.noRoom=!0;if(a!="center")if(d.minSize<=d.maxSize){if(d.size>d.maxSize?$(a,d.maxSize,c,e):d.size<d.minSize?$(a,d.minSize,c,e):i&&g.is(":visible")&&
(c=j.side.toLowerCase(),e=d.size+u["inset"+j.side],f.layout.cssNum(i,c)!=e&&i.css(c,e)),d.noRoom)d.wasOpen&&b.closable?b.autoReopen?L(a,!1,!0,!0):d.noRoom=!1:ha(a,d.wasOpen,!0,!0)}else if(!d.noRoom)d.noRoom=!0,d.wasOpen=!d.isClosed&&!d.isSliding,d.isClosed||(b.closable?H(a,!0,!0):ka(a,!0))},ya=function(a,b,c){if(w()){var e=n[a],d=e.resizeWhileDragging&&!k.isLayoutBusy;e.autoResize=!1;$(a,b,c,d)}},$=function(a,b,c,e){if(w()){var d=n[a],j=l[a],g=r[a],i=x[a],m=k[a].side.toLowerCase(),h=k[a].sizeType.toLowerCase(),
o="inset"+k[a].side,p=k.isLayoutBusy&&!d.triggerEventsWhileDragging,q;M(a);q=j.size;b=W(a,b);b=z(b,W(a,d.minSize));b=Math.min(b,j.maxSize);if(b<j.minSize)X(a,!1,c);else if(e||b!=q)!c&&l.initialized&&j.isVisible&&v(a,d.onresize_start),g.css(h,z(1,k[a].dir=="horz"?J(a,b):I(a,b))),j.size=b,f.extend(j,N(g)),i&&g.is(":visible")&&i.css(m,b+u[o]),fa(a),!c&&!p&&l.initialized&&j.isVisible&&(v(a,d.onresize_end||d.onresize),aa(a)),c||(j.isSliding||Y(k[a].dir=="horz"?"all":"center",p,e),ia("all")),a=k.altSide[a],
b<q&&l[a].noRoom&&(M(a),X(a,!1,c))}},Y=function(a,b,c){if(!a||a=="all")a="east,west,center";f.each(a.split(","),function(a,d){if(r[d]){var j=n[d],g=l[d],i=r[d],m=!0,h={},m={top:R("north",!0),bottom:R("south",!0),left:R("west",!0),right:R("east",!0),width:0,height:0};m.width=u.innerWidth-m.left-m.right;m.height=u.innerHeight-m.bottom-m.top;m.top+=u.insetTop;m.bottom+=u.insetBottom;m.left+=u.insetLeft;m.right+=u.insetRight;f.extend(g,N(i));if(d=="center"){if(!c&&g.isVisible&&m.width==g.outerWidth&&
m.height==g.outerHeight)return!0;f.extend(g,la(d),{maxWidth:m.width,maxHeight:m.height});h=m;h.width=I(d,h.width);h.height=J(d,h.height);m=h.width>0&&h.height>0;if(!m&&!l.initialized&&j.minWidth>0){var k=j.minWidth-g.outerWidth,o=n.east.minSize||0,p=n.west.minSize||0,q=l.east.size,t=l.west.size,w=q,x=t;k>0&&l.east.isVisible&&q>o&&(w=z(q-o,q-k),k-=q-w);k>0&&l.west.isVisible&&t>p&&(x=z(t-p,t-k),k-=t-x);if(k==0){q!=o&&$("east",w,!0);t!=p&&$("west",x,!0);Y("center",b,c);return}}}else{g.isVisible&&!g.noVerticalRoom&&
f.extend(g,N(i),la(d));if(!c&&!g.noVerticalRoom&&m.height==g.outerHeight)return!0;h.top=m.top;h.bottom=m.bottom;h.height=J(d,m.height);g.maxHeight=z(0,h.height);m=g.maxHeight>0;if(!m)g.noVerticalRoom=!0}m?(!b&&l.initialized&&v(d,j.onresize_start),i.css(h),g.noRoom&&!g.isClosed&&!g.isHidden&&X(d),g.isVisible&&(f.extend(g,N(i)),l.initialized&&fa(d))):!g.noRoom&&g.isVisible&&X(d);if(!g.isVisible)return!0;if(d=="center")g=f.layout.browser,g=g.isIE6||g.msie&&!g.boxModel,r.north&&(g||l.north.tagName=="IFRAME")&&
r.north.css("width",I(r.north,u.innerWidth)),r.south&&(g||l.south.tagName=="IFRAME")&&r.south.css("width",I(r.south,u.innerWidth));!b&&l.initialized&&(v(d,j.onresize_end||j.onresize),aa(d))}})},ga=function(){if(l.initialized){if(q.is(":visible:")&&(f.extend(l.container,N(q)),u.outerHeight)){if(!1===v(null,n.onresizeall_start))return!1;var a,b,c;f.each(["south","north","east","west"],function(a,d){r[d]&&(c=l[d],b=n[d],b.autoResize&&c.size!=b.size?$(d,b.size,!0,!0):(M(d),X(d,!1,!0,!0)))});Y("all",!0,
!0);ia("all");b=n;f.each(k.allPanes.split(","),function(c,d){if((a=r[d])&&l[d].isVisible)v(d,b[d].onresize_end||b[d].onresize),aa(d)});v(null,b.onresizeall_end||b.onresizeall)}}else ta()},aa=function(a){var b=r[a],c=O[a];n[a].resizeNestedLayout&&(b.data("layoutContainer")?b.layout().resizeAll():c&&c.data("layoutContainer")&&c.layout().resizeAll())},fa=function(a,b){if(w()){if(!a||a=="all")a=k.allPanes;f.each(a.split(","),function(a,e){function d(a){return z(o.css.paddingBottom,parseInt(a.css("marginBottom"),
10)||0)}function f(){var a=n[e].contentIgnoreSelector,a=i.nextAll().not(a||":lt(0)"),b=a.filter(":visible"),c=b.filter(":last");p={top:i[0].offsetTop,height:i.outerHeight(),numFooters:a.length,hiddenFooters:a.length-b.length,spaceBelow:0};p.spaceAbove=p.top;p.bottom=p.top+p.height;p.spaceBelow=c.length?c[0].offsetTop+c.outerHeight()-p.bottom+d(c):d(i)}var g=r[e],i=O[e],h=n[e],o=l[e],p=o.content;if(!g||!i||!g.is(":visible"))return!0;if(!1!==v(null,h.onsizecontent_start)){if(!k.isLayoutBusy||p.top==
void 0||b||h.resizeContentWhileDragging)f(),p.hiddenFooters>0&&g.css("overflow")=="hidden"&&(g.css("overflow","visible"),f(),g.css("overflow","hidden"));g=o.innerHeight-(p.spaceAbove-o.css.paddingTop)-(p.spaceBelow-o.css.paddingBottom);if(!i.is(":visible")||p.height!=g)Ra(i,g,!0),p.height=g;l.initialized&&(v(e,h.onsizecontent_end||h.onsizecontent),aa(e))}})}},ia=function(a){if(!a||a=="all")a=k.borderPanes;f.each(a.split(","),function(a,c){var e=n[c],d=l[c],h=r[c],g=x[c],i=D[c],m;if(h&&g){var p=k[c].dir,
o=d.isClosed?"_closed":"_open",q=e["spacing"+o],t=e["togglerAlign"+o],o=e["togglerLength"+o],v;if(q==0)g.hide();else{!d.noRoom&&!d.isHidden&&g.show();p=="horz"?(v=h.outerWidth(),d.resizerLength=v,g.css({width:z(1,I(g,v)),height:z(0,J(g,q)),left:f.layout.cssNum(h,"left")})):(v=h.outerHeight(),d.resizerLength=v,g.css({height:z(1,J(g,v)),width:z(0,I(g,q)),top:u.insetTop+R("north",!0)}));S(e,g);if(i){if(o==0||d.isSliding&&e.hideTogglerOnSlide){i.hide();return}else i.show();if(!(o>0)||o=="100%"||o>v)o=
v,t=0;else if(G(t))switch(t){case "top":case "left":t=0;break;case "bottom":case "right":t=v-o;break;default:t=Math.floor((v-o)/2)}else h=parseInt(t,10),t=t>=0?h:v-o+h;if(p=="horz"){var w=I(i,o);i.css({width:z(0,w),height:z(1,J(i,q)),left:t,top:0});i.children(".content").each(function(){m=f(this);m.css("marginLeft",Math.floor((w-m.outerWidth())/2))})}else{var y=J(i,o);i.css({height:z(0,y),width:z(1,I(i,q)),top:t,left:0});i.children(".content").each(function(){m=f(this);m.css("marginTop",Math.floor((y-
m.outerHeight())/2))})}S(0,i)}if(!l.initialized&&(e.initHidden||d.noRoom))g.hide(),i&&i.hide()}}})},Pa=function(a){if(w()){var b=D[a],c=n[a];if(b)c.closable=!0,b.bind("click."+B,function(b){b.stopPropagation();da(a)}).bind("mouseenter."+B,ra).bind("mouseleave."+B,S).css("visibility","visible").css("cursor","pointer").attr("title",l[a].isClosed?c.togglerTip_closed:c.togglerTip_open).show()}},q=f(this).eq(0);if(!q.length)return n.showErrorMessages&&alert(C.errContainerMissing),null;if(q.data("layoutContainer")&&
q.data("layout"))return q.data("layout");var r={},O={},x={},D={},u=l.container,B=l.id,ea={options:n,state:l,container:q,panes:r,contents:O,resizers:x,togglers:D,toggle:da,hide:ka,show:ha,open:L,close:H,slideOpen:Qa,slideClose:za,slideToggle:function(a){da(a,!0)},initContent:Oa,sizeContent:fa,sizePane:ya,swapPanes:function(a,b){function c(a){var b=r[a],c=O[a];return!b?!1:{pane:a,P:b?b[0]:!1,C:c?c[0]:!1,state:f.extend({},l[a]),options:f.extend({},n[a])}}function e(a,b){if(a){var c=a.P,d=a.C,e=a.pane,
h=k[b],j=h.side.toLowerCase(),o="inset"+h.side,p=f.extend({},l[b]),q=n[b],t={resizerCursor:q.resizerCursor};f.each("fxName,fxSpeed,fxSettings".split(","),function(a,b){t[b]=q[b];t[b+"_open"]=q[b+"_open"];t[b+"_close"]=q[b+"_close"]});r[b]=f(c).data("layoutEdge",b).css(k.hidden).css(h.cssReq);O[b]=d?f(d):!1;n[b]=f.extend({},a.options,t);l[b]=f.extend({},a.state);c.className=c.className.replace(RegExp(q.paneClass+"-"+e,"g"),q.paneClass+"-"+b);ua(b);h.dir!=k[e].dir?(c=g[b]||0,M(b),c=z(c,l[b].minSize),
ya(b,c,!0)):x[b].css(j,u[o]+(l[b].isVisible?R(b):0));a.state.isVisible&&!p.isVisible?wa(b,!0):(xa(b),ba(b,!0));a=null}}if(w()){l[a].edge=b;l[b].edge=a;var d=!1;!1===v(a,n[a].onswap_start)&&(d=!0);!d&&!1===v(b,n[b].onswap_start)&&(d=!0);if(d)l[a].edge=a,l[b].edge=b;else{var d=c(a),h=c(b),g={};g[a]=d?d.state.size:0;g[b]=h?h.state.size:0;r[a]=!1;r[b]=!1;l[a]={};l[b]={};D[a]&&D[a].remove();D[b]&&D[b].remove();x[a]&&x[a].remove();x[b]&&x[b].remove();x[a]=x[b]=D[a]=D[b]=!1;e(d,b);e(h,a);d=h=g=null;r[a]&&
r[a].css(k.visible);r[b]&&r[b].css(k.visible);ga();v(a,n[a].onswap_end||n[a].onswap);v(b,n[b].onswap_end||n[b].onswap)}}},resizeAll:ga,initPanes:w,destroy:function(){f(window).unbind("."+B);f(document).unbind("."+B);f.each(k.allPanes.split(","),function(a,b){va(b,!1,!0)});q.removeData("layout").removeData("layoutContainer").removeClass(n.containerClass);!q.data("layoutEdge")&&q.data("layoutCSS")&&q.css(q.data("layoutCSS")).removeData("layoutCSS");u.tagName=="BODY"&&(q=f("html")).data("layoutCSS")&&
q.css(q.data("layoutCSS")).removeData("layoutCSS");La()},addPane:Na,removePane:va,setSizeLimits:M,bindButton:K,addToggleBtn:A,addOpenBtn:y,addCloseBtn:T,addPinBtn:ca,allowOverflow:o,resetOverflow:t,encodeJSON:Ba,decodeJSON:Aa,getState:oa,getCookie:Z,saveCookie:na,deleteCookie:function(){na("",{expires:-1})},loadCookie:Ca,loadState:Da,cssWidth:I,cssHeight:J,enableClosable:Pa,disableClosable:function(a,b){if(w()){var c=D[a];if(c)n[a].closable=!1,l[a].isClosed&&L(a,!1,!0),c.unbind("."+B).css("visibility",
b?"hidden":"visible").css("cursor","default").attr("title","")}},enableSlidable:function(a){if(w()){var b=x[a];if(b&&b.data("draggable"))n[a].slidable=!0,s.isClosed&&ba(a,!0)}},disableSlidable:function(a){if(w()){var b=x[a];if(b)n[a].slidable=!1,l[a].isSliding?H(a,!1,!0):(ba(a,!1),b.css("cursor","default").attr("title",""),S(null,b[0]))}},enableResizable:function(a){if(w()){var b=x[a],c=n[a];if(b&&b.data("draggable"))c.resizable=!0,b.draggable("enable").bind("mouseenter."+B,Ia).bind("mouseleave."+
B,sa),l[a].isClosed||b.css("cursor",c.resizerCursor).attr("title",c.resizerTip)}},disableResizable:function(a){if(w()){var b=x[a];if(b&&b.data("draggable"))n[a].resizable=!1,b.draggable("disable").unbind("."+B).css("cursor","default").attr("title",""),S(null,b[0])}}};return function(){Ua();var a=n;f.layout.browser.boxModel=f.support.boxModel;a.useStateCookie&&a.cookie.autoLoad&&Ca();l.creatingLayout=!0;if(!1===v(null,a.onload_start))return"cancel";var b=u.tagName=q[0].tagName,c=n,e=b=="BODY",d={},
h=q.is(":visible");u.selector=q.selector.split(".slice")[0];u.ref=b+"/"+u.selector;q.data("layout",ea).data("layoutContainer",B).addClass(c.containerClass);q.data("layoutCSS")||(e?(d=f.extend(f.layout.getElementCSS(q,"overflow,position,margin,padding,border"),{height:q.css("height"),overflow:q.css("overflow"),overflowX:q.css("overflowX"),overflowY:q.css("overflowY")}),b=f("html"),b.data("layoutCSS",{height:"auto",overflow:b.css("overflow"),overflowX:b.css("overflowX"),overflowY:b.css("overflowY")})):
d=f.layout.getElementCSS(q,"overflow,position,margin,padding,border,top,bottom,left,right,width,height,overflow,overflowX,overflowY"),q.data("layoutCSS",d));try{if(e)f("html").css({height:"100%",overflow:"hidden",overflowX:"hidden",overflowY:"hidden"}),f("body").css({position:"relative",height:"100%",overflow:"hidden",overflowX:"hidden",overflowY:"hidden",margin:0,padding:0,border:"none"}),f.extend(u,N(q));else{var d={overflow:"hidden",overflowX:"hidden",overflowY:"hidden"},g=q.css("position");q.css("height");
if(!q.data("layoutRole")&&(!g||!g.match(/fixed|absolute|relative/)))d.position="relative";q.css(d);h&&(f.extend(u,N(q)),c.showErrorMessages&&u.innerHeight<2&&alert(C.errContainerHeight.replace(/CONTAINER/,u.ref)))}}catch(i){}Ma();a.autoBindCustomButtons&&Wa();f(window).bind("unload."+B,La);a.initPanes&&ta();delete l.creatingLayout;return l.initialized}()==="cancel"?null:ea}})(jQuery);



/*
 * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,p){var i,m=Array.prototype.slice,r=decodeURIComponent,a=$.param,c,l,v,b=$.bbq=$.bbq||{},q,u,j,e=$.event.special,d="hashchange",A="querystring",D="fragment",y="elemUrlAttr",g="location",k="href",t="src",x=/^.*\?|#.*$/g,w=/^.*\#/,h,C={};function E(F){return typeof F==="string"}function B(G){var F=m.call(arguments,1);return function(){return G.apply(this,F.concat(m.call(arguments)))}}function n(F){return F.replace(/^[^#]*#?(.*)$/,"$1")}function o(F){return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(H,M,F,I,G){var O,L,K,N,J;if(I!==i){K=F.match(H?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);J=K[3]||"";if(G===2&&E(I)){L=I.replace(H?w:x,"")}else{N=l(K[2]);I=E(I)?l[H?D:A](I):I;L=G===2?I:G===1?$.extend({},I,N):$.extend({},N,I);L=a(L);if(H){L=L.replace(h,r)}}O=K[1]+(H?"#":L||!K[1]?"?":"")+L+J}else{O=M(F!==i?F:p[g][k])}return O}a[A]=B(f,0,o);a[D]=c=B(f,1,n);c.noEscape=function(G){G=G||"";var F=$.map(G.split(""),encodeURIComponent);h=new RegExp(F.join("|"),"g")};c.noEscape(",/");$.deparam=l=function(I,F){var H={},G={"true":!0,"false":!1,"null":null};$.each(I.replace(/\+/g," ").split("&"),function(L,Q){var K=Q.split("="),P=r(K[0]),J,O=H,M=0,R=P.split("]["),N=R.length-1;if(/\[/.test(R[0])&&/\]$/.test(R[N])){R[N]=R[N].replace(/\]$/,"");R=R.shift().split("[").concat(R);N=R.length-1}else{N=0}if(K.length===2){J=r(K[1]);if(F){J=J&&!isNaN(J)?+J:J==="undefined"?i:G[J]!==i?G[J]:J}if(N){for(;M<=N;M++){P=R[M]===""?O.length:R[M];O=O[P]=M<N?O[P]||(R[M+1]&&isNaN(R[M+1])?{}:[]):J}}else{if($.isArray(H[P])){H[P].push(J)}else{if(H[P]!==i){H[P]=[H[P],J]}else{H[P]=J}}}}else{if(P){H[P]=F?i:""}}});return H};function z(H,F,G){if(F===i||typeof F==="boolean"){G=F;F=a[H?D:A]()}else{F=E(F)?F.replace(H?w:x,""):F}return l(F,G)}l[A]=B(z,0);l[D]=v=B(z,1);$[y]||($[y]=function(F){return $.extend(C,F)})({a:k,base:k,iframe:t,img:t,input:t,form:"action",link:k,script:t});j=$[y];function s(I,G,H,F){if(!E(H)&&typeof H!=="object"){F=H;H=G;G=i}return this.each(function(){var L=$(this),J=G||j()[(this.nodeName||"").toLowerCase()]||"",K=J&&L.attr(J)||"";L.attr(J,a[I](K,H,F))})}$.fn[A]=B(s,A);$.fn[D]=B(s,D);b.pushState=q=function(I,F){if(E(I)&&/^#/.test(I)&&F===i){F=2}var H=I!==i,G=c(p[g][k],H?I:{},H?F:2);p[g][k]=G+(/#/.test(G)?"":"#")};b.getState=u=function(F,G){return F===i||typeof F==="boolean"?v(F):v(G)[F]};b.removeState=function(F){var G={};if(F!==i){G=u();$.each($.isArray(F)?F:arguments,function(I,H){delete G[H]})}q(G,2)};e[d]=$.extend(e[d],{add:function(F){var H;function G(J){var I=J[D]=c();J.getState=function(K,L){return K===i||typeof K==="boolean"?l(I,K):l(I,L)[K]};H.apply(this,arguments)}if($.isFunction(F)){H=F;return G}else{H=F.handler;F.handler=G}}})})(jQuery,this);
/*
 * jQuery hashchange event - v1.2 - 2/11/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,i,b){var j,k=$.event.special,c="location",d="hashchange",l="href",f=$.browser,g=document.documentMode,h=f.msie&&(g===b||g<8),e="on"+d in i&&!h;function a(m){m=m||i[c][l];return m.replace(/^[^#]*#?(.*)$/,"$1")}$[d+"Delay"]=100;k[d]=$.extend(k[d],{setup:function(){if(e){return false}$(j.start)},teardown:function(){if(e){return false}$(j.stop)}});j=(function(){var m={},r,n,o,q;function p(){o=q=function(s){return s};if(h){n=$('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow;q=function(){return a(n.document[c][l])};o=function(u,s){if(u!==s){var t=n.document;t.open().close();t[c].hash="#"+u}};o(a())}}m.start=function(){if(r){return}var t=a();o||p();(function s(){var v=a(),u=q(t);if(v!==t){o(t=v,u);$(i).trigger(d)}else{if(u!==t){i[c][l]=i[c][l].replace(/#.*/,"")+"#"+u}}r=setTimeout(s,$[d+"Delay"])})()};m.stop=function(){if(!n){r&&clearTimeout(r);r=0}};return m})()})(jQuery,this);


// Infobubble
// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url http://closure-compiler.googlecode.com/svn/trunk/contrib/externs/maps/google_maps_api_v3.js
// ==/ClosureCompiler==

/**
 * @name CSS3 InfoBubble with tabs for Google Maps API V3
 * @version 0.8
 * @author Luke Mahe
 * @fileoverview
 * This library is a CSS Infobubble with tabs. It uses css3 rounded corners and
 * drop shadows and animations. It also allows tabs
 */

/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * A CSS3 InfoBubble v0.8
 * @param {Object.<string, *>=} opt_options Optional properties to set.
 * @extends {google.maps.OverlayView}
 * @constructor
 */
function InfoBubble(opt_options) {
  this.extend(InfoBubble, google.maps.OverlayView);
  this.tabs_ = [];
  this.activeTab_ = null;
  this.baseZIndex_ = 100;
  this.isOpen_ = false;

  var options = opt_options || {};

  if (options['backgroundColor'] == undefined) {
    options['backgroundColor'] = this.BACKGROUND_COLOR_;
  }

  if (options['borderColor'] == undefined) {
    options['borderColor'] = this.BORDER_COLOR_;
  }

  if (options['borderRadius'] == undefined) {
    options['borderRadius'] = this.BORDER_RADIUS_;
  }

  if (options['borderWidth'] == undefined) {
    options['borderWidth'] = this.BORDER_WIDTH_;
  }

  if (options['padding'] == undefined) {
    options['padding'] = this.PADDING_;
  }

  if (options['arrowPosition'] == undefined) {
    options['arrowPosition'] = this.ARROW_POSITION_;
  }

  if (options['disableAutoPan'] == undefined) {
    options['disableAutoPan'] = false;
  }

  if (options['disableAnimation'] == undefined) {
    options['disableAnimation'] = false;
  }

  if (options['minWidth'] == undefined) {
    options['minWidth'] = this.MIN_WIDTH_;
  }

  if (options['shadowStyle'] == undefined) {
    options['shadowStyle'] = this.SHADOW_STYLE_;
  }

  if (options['arrowSize'] == undefined) {
    options['arrowSize'] = this.ARROW_SIZE_;
  }

  if (options['arrowStyle'] == undefined) {
    options['arrowStyle'] = this.ARROW_STYLE_;
  }

  this.buildDom_();

  this.setValues(options);
}
window['InfoBubble'] = InfoBubble;


/**
 * Default arrow size
 * @const
 * @private
 */
InfoBubble.prototype.ARROW_SIZE_ = 15;


/**
 * Default arrow style
 * @const
 * @private
 */
InfoBubble.prototype.ARROW_STYLE_ = 0;


/**
 * Default shadow style
 * @const
 * @private
 */
InfoBubble.prototype.SHADOW_STYLE_ = 1;


/**
 * Default min width
 * @const
 * @private
 */
InfoBubble.prototype.MIN_WIDTH_ = 50;


/**
 * Default arrow position
 * @const
 * @private
 */
InfoBubble.prototype.ARROW_POSITION_ = 50;


/**
 * Default padding
 * @const
 * @private
 */
InfoBubble.prototype.PADDING_ = 10;


/**
 * Default border width
 * @const
 * @private
 */
InfoBubble.prototype.BORDER_WIDTH_ = 1;


/**
 * Default border color
 * @const
 * @private
 */
InfoBubble.prototype.BORDER_COLOR_ = '#ccc';


/**
 * Default border radius
 * @const
 * @private
 */
InfoBubble.prototype.BORDER_RADIUS_ = 10;


/**
 * Default background color
 * @const
 * @private
 */
InfoBubble.prototype.BACKGROUND_COLOR_ = '#fff';


/**
 * Extends a objects prototype by anothers.
 *
 * @param {Object} obj1 The object to be extended.
 * @param {Object} obj2 The object to extend with.
 * @return {Object} The new extended object.
 * @ignore
 */
InfoBubble.prototype.extend = function(obj1, obj2) {
  return (function(object) {
    for (var property in object.prototype) {
      this.prototype[property] = object.prototype[property];
    }
    return this;
  }).apply(obj1, [obj2]);
};


/**
 * Builds the InfoBubble dom
 * @private
 */
InfoBubble.prototype.buildDom_ = function() {
  var bubble = this.bubble_ = document.createElement('DIV');
  bubble.style['position'] = 'absolute';
  bubble.style['zIndex'] = this.baseZIndex_;

  var tabsContainer = this.tabsContainer_ = document.createElement('DIV');
  tabsContainer.style['position'] = 'relative';

  // Close button
  var close = this.close_ = document.createElement('IMG');
  close.style['position'] = 'absolute';
  close.style['width'] = this.px(12);
  close.style['height'] = this.px(12);
  close.style['border'] = 0;
  close.style['zIndex'] = this.baseZIndex_ + 1;
  close.style['cursor'] = 'pointer';
  close.src = 'http://maps.gstatic.com/intl/en_us/mapfiles/iw_close.gif';

  var that = this;
  google.maps.event.addDomListener(close, 'click', function() {
    that.close();
    google.maps.event.trigger(that, 'closeclick');
  });

  // Content area
  var contentContainer = this.contentContainer_ = document.createElement('DIV');
  contentContainer.style['overflowX'] = 'auto';
  contentContainer.style['overflowY'] = 'auto';
  contentContainer.style['cursor'] = 'default';
  contentContainer.style['clear'] = 'both';
  contentContainer.style['position'] = 'relative';

  var content = this.content_ = document.createElement('DIV');
  contentContainer.appendChild(content);

  // Arrow
  var arrow = this.arrow_ = document.createElement('DIV');
  arrow.style['position'] = 'relative';

  var arrowOuter = this.arrowOuter_ = document.createElement('DIV');
  var arrowInner = this.arrowInner_ = document.createElement('DIV');

  var arrowSize = this.getArrowSize_();

  arrowOuter.style['position'] = arrowInner.style['position'] = 'absolute';
  arrowOuter.style['left'] = arrowInner.style['left'] = '50%';
  arrowOuter.style['height'] = arrowInner.style['height'] = '0';
  arrowOuter.style['width'] = arrowInner.style['width'] = '0';
  arrowOuter.style['marginLeft'] = this.px(-arrowSize);
  arrowOuter.style['borderWidth'] = this.px(arrowSize);
  arrowOuter.style['borderBottomWidth'] = 0;

  // Shadow
  var bubbleShadow = this.bubbleShadow_ = document.createElement('DIV');
  bubbleShadow.style['position'] = 'absolute';

  // Hide the InfoBubble by default
  bubble.style['display'] = bubbleShadow.style['display'] = 'none';

  bubble.appendChild(this.tabsContainer_);
  bubble.appendChild(close);
  bubble.appendChild(contentContainer);
  arrow.appendChild(arrowOuter);
  arrow.appendChild(arrowInner);
  bubble.appendChild(arrow);

  var stylesheet = document.createElement('style');
  stylesheet.setAttribute('type', 'text/css');

  /**
   * The animation for the infobubble
   * @type {string}
   */
  this.animationName_ = '_ibani_' + Math.round(Math.random() * 10000);

  var css = '.' + this.animationName_ + '{-webkit-animation-name:' +
      this.animationName_ + ';-webkit-animation-duration:0.5s;' +
      '-webkit-animation-iteration-count:1;}' +
      '@-webkit-keyframes ' + this.animationName_ + ' {from {' +
      '-webkit-transform: scale(0)}50% {-webkit-transform: scale(1.2)}90% ' +
      '{-webkit-transform: scale(0.95)}to {-webkit-transform: scale(1)}}';

  stylesheet.textContent = css;
  document.getElementsByTagName('head')[0].appendChild(stylesheet);
};


/**
 * Sets the background class name
 *
 * @param {string} className The class name to set.
 */
InfoBubble.prototype.setBackgroundClassName = function(className) {
  this.set('backgroundClassName', className);
};
InfoBubble.prototype['setBackgroundClassName'] =
    InfoBubble.prototype.setBackgroundClassName;


/**
 * changed MVC callback
 */
InfoBubble.prototype.backgroundClassName_changed = function() {
  this.content_.className = this.get('backgroundClassName');
};
InfoBubble.prototype['backgroundClassName_changed'] =
    InfoBubble.prototype.backgroundClassName_changed;


/**
 * Sets the class of the tab
 *
 * @param {string} className the class name to set.
 */
InfoBubble.prototype.setTabClassName = function(className) {
  this.set('tabClassName', className);
};
InfoBubble.prototype['setTabClassName'] =
    InfoBubble.prototype.setTabClassName;


/**
 * tabClassName changed MVC callback
 */
InfoBubble.prototype.tabClassName_changed = function() {
  this.updateTabStyles_();
};
InfoBubble.prototype['tabClassName_changed'] =
    InfoBubble.prototype.tabClassName_changed;


/**
 * Gets the style of the arrow
 *
 * @private
 * @return {number} The style of the arrow.
 */
InfoBubble.prototype.getArrowStyle_ = function() {
  return parseInt(this.get('arrowStyle'), 10) || 0;
};


/**
 * Sets the style of the arrow
 *
 * @param {number} style The style of the arrow.
 */
InfoBubble.prototype.setArrowStyle = function(style) {
  this.set('arrowStyle', style);
};
InfoBubble.prototype['setArrowStyle'] =
    InfoBubble.prototype.setArrowStyle;


/**
 * Arrow style changed MVC callback
 */
InfoBubble.prototype.arrowStyle_changed = function() {
  this.arrowSize_changed();
};
InfoBubble.prototype['arrowStyle_changed'] =
    InfoBubble.prototype.arrowStyle_changed;


/**
 * Gets the size of the arrow
 *
 * @private
 * @return {number} The size of the arrow.
 */
InfoBubble.prototype.getArrowSize_ = function() {
  return parseInt(this.get('arrowSize'), 10) || 0;
};


/**
 * Sets the size of the arrow
 *
 * @param {number} size The size of the arrow.
 */
InfoBubble.prototype.setArrowSize = function(size) {
  this.set('arrowSize', size);
};
InfoBubble.prototype['setArrowSize'] =
    InfoBubble.prototype.setArrowSize;


/**
 * Arrow size changed MVC callback
 */
InfoBubble.prototype.arrowSize_changed = function() {
  this.borderWidth_changed();
};
InfoBubble.prototype['arrowSize_changed'] =
    InfoBubble.prototype.arrowSize_changed;


/**
 * Set the position of the InfoBubble arrow
 *
 * @param {number} pos The position to set.
 */
InfoBubble.prototype.setArrowPosition = function(pos) {
  this.set('arrowPosition', pos);
};
InfoBubble.prototype['setArrowPosition'] =
    InfoBubble.prototype.setArrowPosition;


/**
 * Get the position of the InfoBubble arrow
 *
 * @private
 * @return {number} The position..
 */
InfoBubble.prototype.getArrowPosition_ = function() {
  return parseInt(this.get('arrowPosition'), 10) || 0;
};


/**
 * arrowPosition changed MVC callback
 */
InfoBubble.prototype.arrowPosition_changed = function() {
  var pos = this.getArrowPosition_();
  this.arrowOuter_.style['left'] = this.arrowInner_.style['left'] = pos + '%';

  this.redraw_();
};
InfoBubble.prototype['arrowPosition_changed'] =
    InfoBubble.prototype.arrowPosition_changed;


/**
 * Set the zIndex of the InfoBubble
 *
 * @param {number} zIndex The zIndex to set.
 */
InfoBubble.prototype.setZIndex = function(zIndex) {
  this.set('zIndex', zIndex);
};
InfoBubble.prototype['setZIndex'] = InfoBubble.prototype.setZIndex;


/**
 * Get the zIndex of the InfoBubble
 *
 * @return {number} The zIndex to set.
 */
InfoBubble.prototype.getZIndex = function() {
  return parseInt(this.get('zIndex'), 10) || this.baseZIndex_;
};


/**
 * zIndex changed MVC callback
 */
InfoBubble.prototype.zIndex_changed = function() {
  var zIndex = this.getZIndex();

  this.bubble_.style['zIndex'] = this.baseZIndex_ = zIndex;
  this.close_.style['zIndex'] = zIndex + 1;
};
InfoBubble.prototype['zIndex_changed'] = InfoBubble.prototype.zIndex_changed;


/**
 * Set the style of the shadow
 *
 * @param {number} shadowStyle The style of the shadow.
 */
InfoBubble.prototype.setShadowStyle = function(shadowStyle) {
  this.set('shadowStyle', shadowStyle);
};
InfoBubble.prototype['setShadowStyle'] = InfoBubble.prototype.setShadowStyle;


/**
 * Get the style of the shadow
 *
 * @private
 * @return {number} The style of the shadow.
 */
InfoBubble.prototype.getShadowStyle_ = function() {
  return parseInt(this.get('shadowStyle'), 10) || 0;
};


/**
 * shadowStyle changed MVC callback
 */
InfoBubble.prototype.shadowStyle_changed = function() {
  var shadowStyle = this.getShadowStyle_();

  var display = '';
  var shadow = '';
  var backgroundColor = '';
  switch (shadowStyle) {
    case 0:
      display = 'none';
      break;
    case 1:
      shadow = '40px 15px 10px rgba(33,33,33,0.3)';
      backgroundColor = 'transparent';
      break;
    case 2:
      shadow = '0 0 2px rgba(33,33,33,0.3)';
      backgroundColor = 'rgba(33,33,33,0.35)';
      break;
  }
  this.bubbleShadow_.style['boxShadow'] =
      this.bubbleShadow_.style['webkitBoxShadow'] =
      this.bubbleShadow_.style['MozBoxShadow'] = shadow;
  this.bubbleShadow_.style['backgroundColor'] = backgroundColor;
  if (this.isOpen_) {
    this.bubbleShadow_.style['display'] = display;
    this.draw();
  }
};
InfoBubble.prototype['shadowStyle_changed'] =
    InfoBubble.prototype.shadowStyle_changed;


/**
 * Show the close button
 */
InfoBubble.prototype.showCloseButton = function() {
  this.set('hideCloseButton', false);
};
InfoBubble.prototype['showCloseButton'] = InfoBubble.prototype.showCloseButton;


/**
 * Hide the close button
 */
InfoBubble.prototype.hideCloseButton = function() {
  this.set('hideCloseButton', true);
};
InfoBubble.prototype['hideCloseButton'] = InfoBubble.prototype.hideCloseButton;


/**
 * hideCloseButton changed MVC callback
 */
InfoBubble.prototype.hideCloseButton_changed = function() {
  this.close_.style['display'] = this.get('hideCloseButton') ? 'none' : '';
};
InfoBubble.prototype['hideCloseButton_changed'] =
    InfoBubble.prototype.hideCloseButton_changed;


/**
 * Set the background color
 *
 * @param {string} color The color to set.
 */
InfoBubble.prototype.setBackgroundColor = function(color) {
  if (color) {
    this.set('backgroundColor', color);
  }
};
InfoBubble.prototype['setBackgroundColor'] =
    InfoBubble.prototype.setBackgroundColor;


/**
 * backgroundColor changed MVC callback
 */
InfoBubble.prototype.backgroundColor_changed = function() {
  var backgroundColor = this.get('backgroundColor');
  this.contentContainer_.style['backgroundColor'] = backgroundColor;

  this.arrowInner_.style['borderColor'] = backgroundColor +
      ' transparent transparent';
  this.updateTabStyles_();
};
InfoBubble.prototype['backgroundColor_changed'] =
    InfoBubble.prototype.backgroundColor_changed;


/**
 * Set the border color
 *
 * @param {string} color The border color.
 */
InfoBubble.prototype.setBorderColor = function(color) {
  if (color) {
    this.set('borderColor', color);
  }
};
InfoBubble.prototype['setBorderColor'] = InfoBubble.prototype.setBorderColor;


/**
 * borderColor changed MVC callback
 */
InfoBubble.prototype.borderColor_changed = function() {
  var borderColor = this.get('borderColor');

  var contentContainer = this.contentContainer_;
  var arrowOuter = this.arrowOuter_;
  contentContainer.style['borderColor'] = borderColor;

  arrowOuter.style['borderColor'] = borderColor +
      ' transparent transparent';

  contentContainer.style['borderStyle'] =
      arrowOuter.style['borderStyle'] =
      this.arrowInner_.style['borderStyle'] = 'solid';

  this.updateTabStyles_();
};
InfoBubble.prototype['borderColor_changed'] =
    InfoBubble.prototype.borderColor_changed;


/**
 * Set the radius of the border
 *
 * @param {number} radius The radius of the border.
 */
InfoBubble.prototype.setBorderRadius = function(radius) {
  this.set('borderRadius', radius);
};
InfoBubble.prototype['setBorderRadius'] = InfoBubble.prototype.setBorderRadius;


/**
 * Get the radius of the border
 *
 * @private
 * @return {number} The radius of the border.
 */
InfoBubble.prototype.getBorderRadius_ = function() {
  return parseInt(this.get('borderRadius'), 10) || 0;
};


/**
 * borderRadius changed MVC callback
 */
InfoBubble.prototype.borderRadius_changed = function() {
  var borderRadius = this.getBorderRadius_();
  var borderWidth = this.getBorderWidth_();

  this.contentContainer_.style['borderRadius'] =
      this.contentContainer_.style['MozBorderRadius'] =
      this.contentContainer_.style['webkitBorderRadius'] =
      this.bubbleShadow_.style['borderRadius'] =
      this.bubbleShadow_.style['MozBorderRadius'] =
      this.bubbleShadow_.style['webkitBorderRadius'] = this.px(borderRadius);

  this.tabsContainer_.style['paddingLeft'] =
      this.tabsContainer_.style['paddingRight'] =
      this.px(borderRadius + borderWidth);

  this.redraw_();
};
InfoBubble.prototype['borderRadius_changed'] =
    InfoBubble.prototype.borderRadius_changed;


/**
 * Get the width of the border
 *
 * @private
 * @return {number} width The width of the border.
 */
InfoBubble.prototype.getBorderWidth_ = function() {
  return parseInt(this.get('borderWidth'), 10) || 0;
};


/**
 * Set the width of the border
 *
 * @param {number} width The width of the border.
 */
InfoBubble.prototype.setBorderWidth = function(width) {
  this.set('borderWidth', width);
};
InfoBubble.prototype['setBorderWidth'] = InfoBubble.prototype.setBorderWidth;


/**
 * borderWidth change MVC callback
 */
InfoBubble.prototype.borderWidth_changed = function() {
  var borderWidth = this.getBorderWidth_();

  this.contentContainer_.style['borderWidth'] = this.px(borderWidth);
  this.tabsContainer_.style['top'] = this.px(borderWidth);

  this.updateArrowStyle_();
  this.updateTabStyles_();
  this.borderRadius_changed();
  this.redraw_();
};
InfoBubble.prototype['borderWidth_changed'] =
    InfoBubble.prototype.borderWidth_changed;


/**
 * Update the arrow style
 * @private
 */
InfoBubble.prototype.updateArrowStyle_ = function() {
  var borderWidth = this.getBorderWidth_();
  var arrowSize = this.getArrowSize_();
  var arrowStyle = this.getArrowStyle_();
  var arrowOuterSizePx = this.px(arrowSize);
  var arrowInnerSizePx = this.px(Math.max(0, arrowSize - borderWidth));

  var outer = this.arrowOuter_;
  var inner = this.arrowInner_;

  this.arrow_.style['marginTop'] = this.px(-borderWidth);
  outer.style['borderTopWidth'] = arrowOuterSizePx;
  inner.style['borderTopWidth'] = arrowInnerSizePx;

  // Full arrow or arrow pointing to the left
  if (arrowStyle == 0 || arrowStyle == 1) {
    outer.style['borderLeftWidth'] = arrowOuterSizePx;
    inner.style['borderLeftWidth'] = arrowInnerSizePx;
  } else {
    outer.style['borderLeftWidth'] = inner.style['borderLeftWidth'] = 0;
  }

  // Full arrow or arrow pointing to the right
  if (arrowStyle == 0 || arrowStyle == 2) {
    outer.style['borderRightWidth'] = arrowOuterSizePx;
    inner.style['borderRightWidth'] = arrowInnerSizePx;
  } else {
    outer.style['borderRightWidth'] = inner.style['borderRightWidth'] = 0;
  }

  if (arrowStyle < 2) {
    outer.style['marginLeft'] = this.px(-(arrowSize));
    inner.style['marginLeft'] = this.px(-(arrowSize - borderWidth));
  } else {
    outer.style['marginLeft'] = inner.style['marginLeft'] = 0;
  }

  // If there is no border then don't show thw outer arrow
  if (borderWidth == 0) {
    outer.style['display'] = 'none';
  } else {
    outer.style['display'] = '';
  }
};


/**
 * Set the padding of the InfoBubble
 *
 * @param {number} padding The padding to apply.
 */
InfoBubble.prototype.setPadding = function(padding) {
  this.set('padding', padding);
};
InfoBubble.prototype['setPadding'] = InfoBubble.prototype.setPadding;


/**
 * Set the padding of the InfoBubble
 *
 * @private
 * @return {number} padding The padding to apply.
 */
InfoBubble.prototype.getPadding_ = function() {
  return parseInt(this.get('padding'), 10) || 0;
};


/**
 * padding changed MVC callback
 */
InfoBubble.prototype.padding_changed = function() {
  var padding = this.getPadding_();
  this.contentContainer_.style['padding'] = this.px(padding);
  this.updateTabStyles_();

  this.redraw_();
};
InfoBubble.prototype['padding_changed'] = InfoBubble.prototype.padding_changed;


/**
 * Add px extention to the number
 *
 * @param {number} num The number to wrap.
 * @return {string|number} A wrapped number.
 */
InfoBubble.prototype.px = function(num) {
  if (num) {
    // 0 doesn't need to be wrapped
    return num + 'px';
  }
  return num;
};


/**
 * Add events to stop propagation
 * @private
 */
InfoBubble.prototype.addEvents_ = function() {
  // We want to cancel all the events so they do not go to the map
  var events = ['mousedown', 'mousemove', 'mouseover', 'mouseout', 'mouseup',
      'mousewheel', 'DOMMouseScroll', 'touchstart', 'touchend', 'touchmove',
      'dblclick', 'contextmenu']; // gplocke - removed 'click' from this array

  var bubble = this.bubble_;
  this.listeners_ = [];
  for (var i = 0, event; event = events[i]; i++) {
    this.listeners_.push(
      google.maps.event.addDomListener(bubble, event, function(e) {
        e.cancelBubble = true;
        if (e.stopPropagation) {
          e.stopPropagation();
        }
      })
    );
  }
};


/**
 * On Adding the InfoBubble to a map
 * Implementing the OverlayView interface
 */
InfoBubble.prototype.onAdd = function() {
  if (!this.bubble_) {
    this.buildDom_();
  }

  this.addEvents_();

  var panes = this.getPanes();
  if (panes) {
    panes.floatPane.appendChild(this.bubble_);
    panes.floatShadow.appendChild(this.bubbleShadow_);
  }
};
InfoBubble.prototype['onAdd'] = InfoBubble.prototype.onAdd;


/**
 * Draw the InfoBubble
 * Implementing the OverlayView interface
 */
InfoBubble.prototype.draw = function() {
  var projection = this.getProjection();

  if (!projection) {
    // The map projection is not ready yet so do nothing
    return;
  }

  var latLng = /** @type {google.maps.LatLng} */ (this.get('position'));

  if (!latLng) {
    this.close();
    return;
  }

  var tabHeight = 0;

  if (this.activeTab_) {
    tabHeight = this.activeTab_.offsetHeight;
  }

  var anchorHeight = this.getAnchorHeight_();
  var arrowSize = this.getArrowSize_();
  var arrowPosition = this.getArrowPosition_();

  arrowPosition = arrowPosition / 100;

  var pos = projection.fromLatLngToDivPixel(latLng);
  var width = this.contentContainer_.offsetWidth;
  var height = this.bubble_.offsetHeight;

  if (!width) {
    return;
  }

  // Adjust for the height of the info bubble
  var top = pos.y - (height + arrowSize);

  if (anchorHeight) {
    // If there is an anchor then include the height
    top -= anchorHeight;
  }

  var left = pos.x - (width * arrowPosition);

  this.bubble_.style['top'] = this.px(top);
  this.bubble_.style['left'] = this.px(left);

  var shadowStyle = parseInt(this.get('shadowStyle'), 10);

  switch (shadowStyle) {
    case 1:
      // Shadow is behind
      this.bubbleShadow_.style['top'] = this.px(top + tabHeight - 1);
      this.bubbleShadow_.style['left'] = this.px(left);
      this.bubbleShadow_.style['width'] = this.px(width);
      this.bubbleShadow_.style['height'] =
          this.px(this.contentContainer_.offsetHeight - arrowSize);
      break;
    case 2:
      // Shadow is below
      width = width * 0.8;
      if (anchorHeight) {
        this.bubbleShadow_.style['top'] = this.px(pos.y);
      } else {
        this.bubbleShadow_.style['top'] = this.px(pos.y + arrowSize);
      }
      this.bubbleShadow_.style['left'] = this.px(pos.x - width * arrowPosition);

      this.bubbleShadow_.style['width'] = this.px(width);
      this.bubbleShadow_.style['height'] = this.px(2);
      break;
  }
};
InfoBubble.prototype['draw'] = InfoBubble.prototype.draw;


/**
 * Removing the InfoBubble from a map
 */
InfoBubble.prototype.onRemove = function() {
  if (this.bubble_ && this.bubble_.parentNode) {
    this.bubble_.parentNode.removeChild(this.bubble_);
  }
  if (this.bubbleShadow_ && this.bubbleShadow_.parentNode) {
    this.bubbleShadow_.parentNode.removeChild(this.bubbleShadow_);
  }

  for (var i = 0, listener; listener = this.listeners_[i]; i++) {
    google.maps.event.removeListener(listener);
  }
};
InfoBubble.prototype['onRemove'] = InfoBubble.prototype.onRemove;


/**
 * Is the InfoBubble open
 *
 * @return {boolean} If the InfoBubble is open.
 */
InfoBubble.prototype.isOpen = function() {
  return this.isOpen_;
};
InfoBubble.prototype['isOpen'] = InfoBubble.prototype.isOpen;


/**
 * Close the InfoBubble
 */
InfoBubble.prototype.close = function() {
  if (this.bubble_) {
    this.bubble_.style['display'] = 'none';
    // Remove the animation so we next time it opens it will animate again
    this.bubble_.className =
        this.bubble_.className.replace(this.animationName_, '');
  }

  if (this.bubbleShadow_) {
    this.bubbleShadow_.style['display'] = 'none';
    this.bubbleShadow_.className =
        this.bubbleShadow_.className.replace(this.animationName_, '');
  }
  this.isOpen_ = false;
};
InfoBubble.prototype['close'] = InfoBubble.prototype.close;


/**
 * Open the InfoBubble
 *
 * @param {google.maps.Map=} opt_map Optional map to open on.
 * @param {google.maps.MVCObject=} opt_anchor Optional anchor to position at.
 */
InfoBubble.prototype.open = function(opt_map, opt_anchor) {
  if (opt_map) {
    this.setMap(opt_map);
  }

  if (opt_anchor) {
    this.set('anchor', opt_anchor);
    this.bindTo('anchorPoint', opt_anchor);
    this.bindTo('position', opt_anchor);
  }

  // Show the bubble and the show
  this.bubble_.style['display'] = this.bubbleShadow_.style['display'] = '';
  var animation = !this.get('disableAnimation');

  if (animation) {
    // Add the animation
    this.bubble_.className += ' ' + this.animationName_;
    this.bubbleShadow_.className += ' ' + this.animationName_;
  }

  this.redraw_();
  this.isOpen_ = true;

  var pan = !this.get('disableAutoPan');
  if (pan) {
    var that = this;
    window.setTimeout(function() {
      // Pan into view, done in a time out to make it feel nicer :)
      that.panToView();
    }, 200);
  }
};
InfoBubble.prototype['open'] = InfoBubble.prototype.open;


/**
 * Set the position of the InfoBubble
 *
 * @param {google.maps.LatLng} position The position to set.
 */
InfoBubble.prototype.setPosition = function(position) {
  if (position) {
    this.set('position', position);
  }
};
InfoBubble.prototype['setPosition'] = InfoBubble.prototype.setPosition;


/**
 * Returns the position of the InfoBubble
 *
 * @return {google.maps.LatLng} the position.
 */
InfoBubble.prototype.getPosition = function() {
  return /** @type {google.maps.LatLng} */ (this.get('position'));
};
InfoBubble.prototype['getPosition'] = InfoBubble.prototype.getPosition;


/**
 * position changed MVC callback
 */
InfoBubble.prototype.position_changed = function() {
  this.draw();
};
InfoBubble.prototype['position_changed'] =
    InfoBubble.prototype.position_changed;


/**
 * Pan the InfoBubble into view
 */
InfoBubble.prototype.panToView = function() {
  var projection = this.getProjection();

  if (!projection) {
    // The map projection is not ready yet so do nothing
    return;
  }

  if (!this.bubble_) {
    // No Bubble yet so do nothing
    return;
  }

  var anchorHeight = this.getAnchorHeight_();
  var height = this.bubble_.offsetHeight + anchorHeight;
  var map = this.get('map');
  var mapDiv = map.getDiv();
  var mapHeight = mapDiv.offsetHeight;

  var latLng = this.getPosition();
  var centerPos = projection.fromLatLngToContainerPixel(map.getCenter());
  var pos = projection.fromLatLngToContainerPixel(latLng);

  // Find out how much space at the top is free
  var spaceTop = centerPos.y - height;

  // Fine out how much space at the bottom is free
  var spaceBottom = mapHeight - centerPos.y;

  var needsTop = spaceTop < 0;
  var deltaY = 0;

  if (needsTop) {
    spaceTop *= -1;
    deltaY = (spaceTop + spaceBottom) / 2;
  }

  pos.y -= deltaY;
  latLng = projection.fromContainerPixelToLatLng(pos);

  if (map.getCenter() != latLng) {
    map.panTo(latLng);
  }
};
InfoBubble.prototype['panToView'] = InfoBubble.prototype.panToView;


/**
 * Converts a HTML string to a document fragment.
 *
 * @param {string} htmlString The HTML string to convert.
 * @return {Node} A HTML document fragment.
 * @private
 */
InfoBubble.prototype.htmlToDocumentFragment_ = function(htmlString) {
  htmlString = htmlString.replace(/^\s*([\S\s]*)\b\s*$/, '$1');
  var tempDiv = document.createElement('DIV');
  tempDiv.innerHTML = htmlString;
  if (tempDiv.childNodes.length == 1) {
    return /** @type {!Node} */ (tempDiv.removeChild(tempDiv.firstChild));
  } else {
    var fragment = document.createDocumentFragment();
    while (tempDiv.firstChild) {
      fragment.appendChild(tempDiv.firstChild);
    }
    return fragment;
  }
};


/**
 * Removes all children from the node.
 *
 * @param {Node} node The node to remove all children from.
 * @private
 */
InfoBubble.prototype.removeChildren_ = function(node) {
  if (!node) {
    return;
  }

  var child;
  while (child = node.firstChild) {
    node.removeChild(child);
  }
};


/**
 * Sets the content of the infobubble.
 *
 * @param {string|Node} content The content to set.
 */
InfoBubble.prototype.setContent = function(content) {
  this.set('content', content);
};
InfoBubble.prototype['setContent'] = InfoBubble.prototype.setContent;


/**
 * Get the content of the infobubble.
 *
 * @return {string|Node} The marker content.
 */
InfoBubble.prototype.getContent = function() {
  return /** @type {Node|string} */ (this.get('content'));
};
InfoBubble.prototype['getContent'] = InfoBubble.prototype.getContent;


/**
 * Sets the marker content and adds loading events to images
 */
InfoBubble.prototype.content_changed = function() {
  if (!this.content_) {
    // The Content area doesnt exist.
    return;
  }

  this.removeChildren_(this.content_);
  var content = this.getContent();
  if (content) {
    if (typeof content == 'string') {
      content = this.htmlToDocumentFragment_(content);
    }
    this.content_.appendChild(content);

    var that = this;
    var images = this.content_.getElementsByTagName('IMG');
    for (var i = 0, image; image = images[i]; i++) {
      // Because we don't know the size of an image till it loads, add a
      // listener to the image load so the marker can resize and reposition
      // itself to be the correct height.
      google.maps.event.addDomListener(image, 'load', function() {
        that.imageLoaded_();
      });
    }
    google.maps.event.trigger(this, 'domready');
  }
  this.redraw_();
};
InfoBubble.prototype['content_changed'] =
    InfoBubble.prototype.content_changed;


/**
 * Image loaded
 * @private
 */
InfoBubble.prototype.imageLoaded_ = function() {
  var pan = !this.get('disableAutoPan');
  this.redraw_();
  if (pan && (this.tabs_.length == 0 || this.activeTab_.index == 0)) {
    this.panToView();
  }
};

/**
 * Updates the styles of the tabs
 * @private
 */
InfoBubble.prototype.updateTabStyles_ = function() {
  if (this.tabs_ && this.tabs_.length) {
    for (var i = 0, tab; tab = this.tabs_[i]; i++) {
      this.setTabStyle_(tab.tab);
    }
    this.activeTab_.style['zIndex'] = this.baseZIndex_;
    var borderWidth = this.getBorderWidth_();
    var padding = this.getPadding_() / 2;
    this.activeTab_.style['borderBottomWidth'] = 0;
    this.activeTab_.style['paddingBottom'] = this.px(padding + borderWidth);
  }
};


/**
 * Sets the style of a tab
 * @private
 * @param {Element} tab The tab to style.
 */
InfoBubble.prototype.setTabStyle_ = function(tab) {
  var backgroundColor = this.get('backgroundColor');
  var borderColor = this.get('borderColor');
  var borderRadius = this.getBorderRadius_();
  var borderWidth = this.getBorderWidth_();
  var padding = this.getPadding_();

  var marginRight = this.px(-(Math.max(padding, borderRadius)));
  var borderRadiusPx = this.px(borderRadius);

  var index = this.baseZIndex_;
  if (tab.index) {
    index -= tab.index;
  }

  // The styles for the tab
  var styles = {
    'cssFloat': 'left',
    'position': 'relative',
    'cursor': 'pointer',
    'backgroundColor': backgroundColor,
    'border': this.px(borderWidth) + ' solid ' + borderColor,
    'padding': this.px(padding / 2) + ' ' + this.px(padding),
    'marginRight': marginRight,
    'whiteSpace': 'nowrap',
    'borderRadiusTopLeft': borderRadiusPx,
    'MozBorderRadiusTopleft': borderRadiusPx,
    'webkitBorderTopLeftRadius': borderRadiusPx,
    'borderRadiusTopRight': borderRadiusPx,
    'MozBorderRadiusTopright': borderRadiusPx,
    'webkitBorderTopRightRadius': borderRadiusPx,
    'zIndex': index,
    'display': 'inline'
  };

  for (var style in styles) {
    tab.style[style] = styles[style];
  }

  var className = this.get('tabClassName');
  if (className != undefined) {
    tab.className += ' ' + className;
  }
};


/**
 * Add user actions to a tab
 * @private
 * @param {Object} tab The tab to add the actions to.
 */
InfoBubble.prototype.addTabActions_ = function(tab) {
  var that = this;
  tab.listener_ = google.maps.event.addDomListener(tab, 'click', function() {
    that.setTabActive_(this);
  });
};


/**
 * Set a tab at a index to be active
 *
 * @param {number} index The index of the tab.
 */
InfoBubble.prototype.setTabActive = function(index) {
  var tab = this.tabs_[index - 1];

  if (tab) {
    this.setTabActive_(tab.tab);
  }
};
InfoBubble.prototype['setTabActive'] = InfoBubble.prototype.setTabActive;


/**
 * Set a tab to be active
 * @private
 * @param {Object} tab The tab to set active.
 */
InfoBubble.prototype.setTabActive_ = function(tab) {
  if (!tab) {
    this.setContent('');
    return;
  }

  var padding = this.getPadding_() / 2;
  var borderWidth = this.getBorderWidth_();

  if (this.activeTab_) {
    var activeTab = this.activeTab_;
    activeTab.style['zIndex'] = this.baseZIndex_ - activeTab.index;
    activeTab.style['paddingBottom'] = this.px(padding);
    activeTab.style['borderBottomWidth'] = this.px(borderWidth);
  }

  tab.style['zIndex'] = this.baseZIndex_;
  tab.style['borderBottomWidth'] = 0;
  tab.style['marginBottomWidth'] = '-10px';
  tab.style['paddingBottom'] = this.px(padding + borderWidth);

  this.setContent(this.tabs_[tab.index].content);

  this.activeTab_ = tab;

  this.redraw_();
};


/**
 * Set the max width of the InfoBubble
 *
 * @param {number} width The max width.
 */
InfoBubble.prototype.setMaxWidth = function(width) {
  this.set('maxWidth', width);
};
InfoBubble.prototype['setMaxWidth'] = InfoBubble.prototype.setMaxWidth;


/**
 * maxWidth changed MVC callback
 */
InfoBubble.prototype.maxWidth_changed = function() {
  this.redraw_();
};
InfoBubble.prototype['maxWidth_changed'] =
    InfoBubble.prototype.maxWidth_changed;


/**
 * Set the max height of the InfoBubble
 *
 * @param {number} height The max height.
 */
InfoBubble.prototype.setMaxHeight = function(height) {
  this.set('maxHeight', height);
};
InfoBubble.prototype['setMaxHeight'] = InfoBubble.prototype.setMaxHeight;


/**
 * maxHeight changed MVC callback
 */
InfoBubble.prototype.maxHeight_changed = function() {
  this.redraw_();
};
InfoBubble.prototype['maxHeight_changed'] =
    InfoBubble.prototype.maxHeight_changed;


/**
 * Set the min width of the InfoBubble
 *
 * @param {number} width The min width.
 */
InfoBubble.prototype.setMinWidth = function(width) {
  this.set('minWidth', width);
};
InfoBubble.prototype['setMinWidth'] = InfoBubble.prototype.setMinWidth;


/**
 * minWidth changed MVC callback
 */
InfoBubble.prototype.minWidth_changed = function() {
  this.redraw_();
};
InfoBubble.prototype['minWidth_changed'] =
    InfoBubble.prototype.minWidth_changed;


/**
 * Set the min height of the InfoBubble
 *
 * @param {number} height The min height.
 */
InfoBubble.prototype.setMinHeight = function(height) {
  this.set('minHeight', height);
};
InfoBubble.prototype['setMinHeight'] = InfoBubble.prototype.setMinHeight;


/**
 * minHeight changed MVC callback
 */
InfoBubble.prototype.minHeight_changed = function() {
  this.redraw_();
};
InfoBubble.prototype['minHeight_changed'] =
    InfoBubble.prototype.minHeight_changed;


/**
 * Add a tab
 *
 * @param {string} label The label of the tab.
 * @param {string|Element} content The content of the tab.
 */
InfoBubble.prototype.addTab = function(label, content) {
  var tab = document.createElement('DIV');
  tab.innerHTML = label;

  this.setTabStyle_(tab);
  this.addTabActions_(tab);

  this.tabsContainer_.appendChild(tab);

  this.tabs_.push({
    label: label,
    content: content,
    tab: tab
  });

  tab.index = this.tabs_.length - 1;
  tab.style['zIndex'] = this.baseZIndex_ - tab.index;

  if (!this.activeTab_) {
    this.setTabActive_(tab);
  }

  tab.className = tab.className + ' ' + this.animationName_;

  this.redraw_();
};
InfoBubble.prototype['addTab'] = InfoBubble.prototype.addTab;

/**
 * Update a tab at a speicifc index
 *
 * @param {number} index The index of the tab.
 * @param {?string} opt_label The label to change to.
 * @param {?string} opt_content The content to update to.
 */
InfoBubble.prototype.updateTab = function(index, opt_label, opt_content) {
  if (!this.tabs_.length || index < 0 || index >= this.tabs_.length) {
    return;
  }

  var tab = this.tabs_[index];
  if (opt_label != undefined) {
    tab.tab.innerHTML = tab.label = opt_label;
  }

  if (opt_content != undefined) {
    tab.content = opt_content;
  }

  if (this.activeTab_ == tab.tab) {
    this.setContent(tab.content);
  }
  this.redraw_();
};
InfoBubble.prototype['updateTab'] = InfoBubble.prototype.updateTab;


/**
 * Remove a tab at a specific index
 *
 * @param {number} index The index of the tab to remove.
 */
InfoBubble.prototype.removeTab = function(index) {
  if (!this.tabs_.length || index < 0 || index >= this.tabs_.length) {
    return;
  }

  var tab = this.tabs_[index];
  tab.tab.parentNode.removeChild(tab.tab);

  google.maps.event.removeListener(tab.tab.listener_);

  this.tabs_.splice(index, 1);

  //delete tab;

  for (var i = 0, t; t = this.tabs_[i]; i++) {
    t.tab.index = i;
  }

  if (tab.tab == this.activeTab_) {
    // Removing the current active tab
    if (this.tabs_[index]) {
      // Show the tab to the right
      this.activeTab_ = this.tabs_[index].tab;
    } else if (this.tabs_[index - 1]) {
      // Show a tab to the left
      this.activeTab_ = this.tabs_[index - 1].tab;
    } else {
      // No tabs left to sho
      this.activeTab_ = undefined;
    }

    this.setTabActive_(this.activeTab_);
  }

  this.redraw_();
};
InfoBubble.prototype['removeTab'] = InfoBubble.prototype.removeTab;


/**
 * Get the size of an element
 * @private
 * @param {Node|string} element The element to size.
 * @param {number=} opt_maxWidth Optional max width of the element.
 * @param {number=} opt_maxHeight Optional max height of the element.
 * @return {google.maps.Size} The size of the element.
 */
InfoBubble.prototype.getElementSize_ = function(element, opt_maxWidth,
                                                opt_maxHeight) {
  var sizer = document.createElement('DIV');
  sizer.style['display'] = 'inline';
  sizer.style['position'] = 'absolute';
  sizer.style['visibility'] = 'hidden';

  if (typeof element == 'string') {
    sizer.innerHTML = element;
  } else {
    sizer.appendChild(element.cloneNode(true));
  }

  document.body.appendChild(sizer);
  var size = new google.maps.Size(sizer.offsetWidth, sizer.offsetHeight);

  // If the width is bigger than the max width then set the width and size again
  if (opt_maxWidth && size.width > opt_maxWidth) {
    sizer.style['width'] = this.px(opt_maxWidth);
    size = new google.maps.Size(sizer.offsetWidth, sizer.offsetHeight);
  }

  // If the height is bigger than the max height then set the height and size
  // again
  if (opt_maxHeight && size.height > opt_maxHeight) {
    sizer.style['height'] = this.px(opt_maxHeight);
    size = new google.maps.Size(sizer.offsetWidth, sizer.offsetHeight);
  }

  document.body.removeChild(sizer);
  //delete sizer;
  return size;
};


/**
 * Redraw the InfoBubble
 * @private
 */
InfoBubble.prototype.redraw_ = function() {
  this.figureOutSize_();
  this.positionCloseButton_();
  this.draw();
};


/**
 * Figure out the optimum size of the InfoBubble
 * @private
 */
InfoBubble.prototype.figureOutSize_ = function() {
  var map = this.get('map');

  if (!map) {
    return;
  }

  var padding = this.getPadding_();
  var borderWidth = this.getBorderWidth_();
  var borderRadius = this.getBorderRadius_();
  var arrowSize = this.getArrowSize_();

  var mapDiv = map.getDiv();
  var gutter = arrowSize * 2;
  var mapWidth = mapDiv.offsetWidth - gutter;
  var mapHeight = mapDiv.offsetHeight - gutter - this.getAnchorHeight_();
  var tabHeight = 0;
  var width = /** @type {number} */ (this.get('minWidth') || 0);
  var height = /** @type {number} */ (this.get('minHeight') || 0);
  var maxWidth = /** @type {number} */ (this.get('maxWidth') || 0);
  var maxHeight = /** @type {number} */ (this.get('maxHeight') || 0);

  maxWidth = Math.min(mapWidth, maxWidth);
  maxHeight = Math.min(mapHeight, maxHeight);

  var tabWidth = 0;
  if (this.tabs_.length) {
    // If there are tabs then you need to check the size of each tab's content
    for (var i = 0, tab; tab = this.tabs_[i]; i++) {
      var tabSize = this.getElementSize_(tab.tab, maxWidth, maxHeight);
      var contentSize = this.getElementSize_(tab.content, maxWidth, maxHeight);

      if (width < tabSize.width) {
        width = tabSize.width;
      }

      // Add up all the tab widths because they might end up being wider than
      // the content
      tabWidth += tabSize.width;

      if (height < tabSize.height) {
        height = tabSize.height;
      }

      if (tabSize.height > tabHeight) {
        tabHeight = tabSize.height;
      }

      if (width < contentSize.width) {
        width = contentSize.width;
      }

      if (height < contentSize.height) {
        height = contentSize.height;
      }
    }
  } else {
    var content = /** @type {string|Node} */ (this.get('content'));
    if (typeof content == 'string') {
      content = this.htmlToDocumentFragment_(content);
    }
    if (content) {
      var contentSize = this.getElementSize_(content, maxWidth, maxHeight);

      if (width < contentSize.width) {
        width = contentSize.width;
      }

      if (height < contentSize.height) {
        height = contentSize.height;
      }
    }
  }

  if (maxWidth) {
    width = Math.min(width, maxWidth);
  }

  if (maxHeight) {
    height = Math.min(height, maxHeight);
  }

  width = Math.max(width, tabWidth);

  if (width == tabWidth) {
    width = width + 2 * padding;
  }

  arrowSize = arrowSize * 2;
  width = Math.max(width, arrowSize);

  // Maybe add this as a option so they can go bigger than the map if the user
  // wants
  if (width > mapWidth) {
    width = mapWidth;
  }

  if (height > mapHeight) {
    height = mapHeight - tabHeight;
  }

  if (this.tabsContainer_) {
    this.tabHeight_ = tabHeight;
    this.tabsContainer_.style['width'] = this.px(tabWidth);
  }

  this.contentContainer_.style['width'] = this.px(width);
  this.contentContainer_.style['height'] = this.px(height);
};


/**
 *  Get the height of the anchor
 *
 *  This function is a hack for now and doesn't really work that good, need to
 *  wait for pixelBounds to be correctly exposed.
 *  @private
 *  @return {number} The height of the anchor.
 */
InfoBubble.prototype.getAnchorHeight_ = function() {
  var anchor = this.get('anchor');
  if (anchor) {
    var anchorPoint = /** @type google.maps.Point */(this.get('anchorPoint'));

    if (anchorPoint) {
      return -1 * anchorPoint.y;
    }
  }
  return 0;
};

InfoBubble.prototype.anchorPoint_changed = function() {
  this.draw();
};
InfoBubble.prototype['anchorPoint_changed'] = InfoBubble.prototype.anchorPoint_changed;


/**
 * Position the close button in the right spot.
 * @private
 */
InfoBubble.prototype.positionCloseButton_ = function() {
  var br = this.getBorderRadius_();
  var bw = this.getBorderWidth_();

  var right = 2;
  var top = 2;

  if (this.tabs_.length && this.tabHeight_) {
    top += this.tabHeight_;
  }

  top += bw;
  right += bw;

  var c = this.contentContainer_;
  if (c && c.clientHeight < c.scrollHeight) {
    // If there are scrollbars then move the cross in so it is not over
    // scrollbar
    right += 15;
  }

  this.close_.style['right'] = this.px(right);
  this.close_.style['top'] = this.px(top);
};