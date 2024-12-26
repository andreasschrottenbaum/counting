(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const ht=!1;var Be=Array.isArray,Ue=Array.from,un=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,on=Object.getOwnPropertyDescriptors,sn=Object.prototype,an=Array.prototype,pt=Object.getPrototypeOf;function fn(e){for(var t=0;t<e.length;t++)e[t]()}const B=2,gt=4,Ae=8,Ye=16,R=32,Ce=64,Pe=128,ue=256,Te=512,D=1024,$=2048,he=4096,P=8192,oe=16384,vn=32768,Ke=65536,cn=1<<19,_n=1<<20,re=Symbol("$state");function dn(e){return e===this.v}function hn(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function pn(e){return!hn(e,this.v)}function gn(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function wn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function yn(e){throw new Error("https://svelte.dev/e/effect_orphan")}function mn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function En(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function bn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function xn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function kn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Sn=!1;function q(e){return{f:0,v:e,reactions:null,equals:dn,version:0}}function W(e){return Nn(q(e))}function Tn(e,t=!1){const n=q(e);return t||(n.equals=pn),n}function Nn(e){return y!==null&&y.f&B&&(F===null?jn([e]):F.push(e)),e}function b(e,t){return y!==null&&Zn()&&y.f&(B|Ye)&&(F===null||!F.includes(e))&&kn(),wt(e,t)}function wt(e,t){return e.equals(t)||(e.v=t,e.version=Pt(),yt(e,$),g!==null&&g.f&D&&!(g.f&R)&&(S!==null&&S.includes(e)?(U(g,$),Me(g)):G===null?Gn([e]):G.push(e))),t}function yt(e,t){var n=e.reactions;if(n!==null)for(var l=n.length,r=0;r<l;r++){var i=n[r],s=i.f;s&$||(U(i,t),s&(D|ue)&&(s&B?yt(i,he):Me(i)))}}const On=1,In=2,Ln=16,An=2,O=Symbol();let Cn=!1;function I(e,t=null,n){if(typeof e!="object"||e===null||re in e)return e;const l=pt(e);if(l!==sn&&l!==an)return e;var r=new Map,i=Be(e),s=q(0);i&&r.set("length",q(e.length));var _;return new Proxy(e,{defineProperty(v,a,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&En();var f=r.get(a);return f===void 0?(f=q(u.value),r.set(a,f)):b(f,I(u.value,_)),!0},deleteProperty(v,a){var u=r.get(a);if(u===void 0)a in v&&r.set(a,q(O));else{if(i&&typeof a=="string"){var f=r.get("length"),o=Number(a);Number.isInteger(o)&&o<f.v&&b(f,o)}b(u,O),ut(s)}return!0},get(v,a,u){var h;if(a===re)return e;var f=r.get(a),o=a in v;if(f===void 0&&(!o||(h=ae(v,a))!=null&&h.writable)&&(f=q(I(o?v[a]:O,_)),r.set(a,f)),f!==void 0){var c=p(f);return c===O?void 0:c}return Reflect.get(v,a,u)},getOwnPropertyDescriptor(v,a){var u=Reflect.getOwnPropertyDescriptor(v,a);if(u&&"value"in u){var f=r.get(a);f&&(u.value=p(f))}else if(u===void 0){var o=r.get(a),c=o==null?void 0:o.v;if(o!==void 0&&c!==O)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return u},has(v,a){var c;if(a===re)return!0;var u=r.get(a),f=u!==void 0&&u.v!==O||Reflect.has(v,a);if(u!==void 0||g!==null&&(!f||(c=ae(v,a))!=null&&c.writable)){u===void 0&&(u=q(f?I(v[a],_):O),r.set(a,u));var o=p(u);if(o===O)return!1}return f},set(v,a,u,f){var N;var o=r.get(a),c=a in v;if(i&&a==="length")for(var h=u;h<o.v;h+=1){var m=r.get(h+"");m!==void 0?b(m,O):h in v&&(m=q(O),r.set(h+"",m))}o===void 0?(!c||(N=ae(v,a))!=null&&N.writable)&&(o=q(void 0),b(o,I(u,_)),r.set(a,o)):(c=o.v!==O,b(o,I(u,_)));var T=Reflect.getOwnPropertyDescriptor(v,a);if(T!=null&&T.set&&T.set.call(f,u),!c){if(i&&typeof a=="string"){var w=r.get("length"),x=Number(a);Number.isInteger(x)&&x>=w.v&&b(w,x+1)}ut(s)}return!0},ownKeys(v){p(s);var a=Reflect.ownKeys(v).filter(o=>{var c=r.get(o);return c===void 0||c.v!==O});for(var[u,f]of r)f.v!==O&&!(u in v)&&a.push(u);return a},setPrototypeOf(){bn()}})}function ut(e,t=1){b(e,e.v+t)}function ot(e){return e!==null&&typeof e=="object"&&re in e?e[re]:e}function Dn(e,t){return Object.is(ot(e),ot(t))}var st,mt,Et;function qn(){if(st===void 0){st=window;var e=Element.prototype,t=Node.prototype;mt=ae(t,"firstChild").get,Et=ae(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function We(e=""){return document.createTextNode(e)}function bt(e){return mt.call(e)}function je(e){return Et.call(e)}function M(e,t){return bt(e)}function k(e,t=1,n=!1){let l=e;for(;t--;)l=je(l);return l}function Mn(e){e.textContent=""}function xt(e){var t=e.children;if(t!==null){e.children=null;for(var n=0;n<t.length;n+=1){var l=t[n];l.f&B?Ge(l):Z(l)}}}function Pn(e){for(var t=e.parent;t!==null;){if(!(t.f&B))return t;t=t.parent}return null}function kt(e){var t,n=g;z(Pn(e));try{xt(e),t=Ft(e)}finally{z(n)}return t}function St(e){var t=kt(e),n=(ne||e.f&ue)&&e.deps!==null?he:D;U(e,n),e.equals(t)||(e.v=t,e.version=Pt())}function Ge(e){xt(e),de(e,0),U(e,oe),e.v=e.children=e.deps=e.ctx=e.reactions=null}function Fn(e){g===null&&y===null&&yn(),y!==null&&y.f&ue&&wn(),ze&&gn()}function Rn(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function pe(e,t,n,l=!0){var r=(e&Ce)!==0,i=g,s={ctx:L,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|$,first:null,fn:t,last:null,next:null,parent:r?null:i,prev:null,teardown:null,transitions:null,version:0};if(n){var _=le;try{at(!0),qe(s),s.f|=vn}catch(u){throw Z(s),u}finally{at(_)}}else t!==null&&Me(s);var v=n&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&_n)===0;if(!v&&!r&&l&&(i!==null&&Rn(s,i),y!==null&&y.f&B)){var a=y;(a.children??(a.children=[])).push(s)}return s}function Tt(e){Fn();var t=g!==null&&(g.f&R)!==0&&L!==null&&!L.m;if(t){var n=L;(n.e??(n.e=[])).push({fn:e,effect:g,reaction:y})}else{var l=ge(e);return l}}function Vn(e){const t=pe(Ce,e,!0);return(n={})=>new Promise(l=>{n.outro?Oe(t,()=>{Z(t),l(void 0)}):(Z(t),l(void 0))})}function ge(e){return pe(gt,e,!1)}function Hn(e){return pe(Ae,e,!0)}function Ne(e){return Ze(e)}function Ze(e,t=0){return pe(Ae|Ye|t,e,!0)}function ve(e,t=!0){return pe(Ae|R,e,!0,t)}function Nt(e){var t=e.teardown;if(t!==null){const n=ze,l=y;ft(!0),X(null);try{t.call(null)}finally{ft(n),X(l)}}}function Ot(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var n=0;n<t.length;n+=1)Ge(t[n])}}function It(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){var l=n.next;Z(n,t),n=l}}function Bn(e){for(var t=e.first;t!==null;){var n=t.next;t.f&R||Z(t),t=n}}function Z(e,t=!0){var n=!1;if((t||e.f&cn)&&e.nodes_start!==null){for(var l=e.nodes_start,r=e.nodes_end;l!==null;){var i=l===r?null:je(l);l.remove(),l=i}n=!0}It(e,t&&!n),Ot(e),de(e,0),U(e,oe);var s=e.transitions;if(s!==null)for(const v of s)v.stop();Nt(e);var _=e.parent;_!==null&&_.first!==null&&Lt(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Lt(e){var t=e.parent,n=e.prev,l=e.next;n!==null&&(n.next=l),l!==null&&(l.prev=n),t!==null&&(t.first===e&&(t.first=l),t.last===e&&(t.last=n))}function Oe(e,t){var n=[];Xe(e,n,!0),At(n,()=>{Z(e),t&&t()})}function At(e,t){var n=e.length;if(n>0){var l=()=>--n||t();for(var r of e)r.out(l)}else t()}function Xe(e,t,n){if(!(e.f&P)){if(e.f^=P,e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&t.push(s);for(var l=e.first;l!==null;){var r=l.next,i=(l.f&Ke)!==0||(l.f&R)!==0;Xe(l,t,i?n:!1),l=r}}}function Ie(e){Ct(e,!0)}function Ct(e,t){if(e.f&P){we(e)&&qe(e),e.f^=P;for(var n=e.first;n!==null;){var l=n.next,r=(n.f&Ke)!==0||(n.f&R)!==0;Ct(n,r?t:!1),n=l}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let Le=!1,Fe=[];function Dt(){Le=!1;const e=Fe.slice();Fe=[],fn(e)}function Un(e){Le||(Le=!0,queueMicrotask(Dt)),Fe.push(e)}function Yn(){Le&&Dt()}function Kn(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const qt=0,Wn=1;let ke=!1,Se=qt,ce=!1,_e=null,le=!1,ze=!1;function at(e){le=e}function ft(e){ze=e}let Q=[],ie=0;let y=null;function X(e){y=e}let g=null;function z(e){g=e}let F=null;function jn(e){F=e}let S=null,C=0,G=null;function Gn(e){G=e}let Mt=0,ne=!1,L=null;function Pt(){return++Mt}function Zn(){return!Sn}function we(e){var s,_;var t=e.f;if(t&$)return!0;if(t&he){var n=e.deps,l=(t&ue)!==0;if(n!==null){var r;if(t&Te){for(r=0;r<n.length;r++)((s=n[r]).reactions??(s.reactions=[])).push(e);e.f^=Te}for(r=0;r<n.length;r++){var i=n[r];if(we(i)&&St(i),l&&g!==null&&!ne&&!((_=i==null?void 0:i.reactions)!=null&&_.includes(e))&&(i.reactions??(i.reactions=[])).push(e),i.version>e.version)return!0}}l||U(e,D)}return!1}function Xn(e,t){for(var n=t;n!==null;){if(n.f&Pe)try{n.fn(e);return}catch{n.f^=Pe}n=n.parent}throw ke=!1,e}function zn(e){return(e.f&oe)===0&&(e.parent===null||(e.parent.f&Pe)===0)}function De(e,t,n,l){if(ke){if(n===null&&(ke=!1),zn(t))throw e;return}n!==null&&(ke=!0);{Xn(e,t);return}}function Ft(e){var o;var t=S,n=C,l=G,r=y,i=ne,s=F,_=L,v=e.f;S=null,C=0,G=null,y=v&(R|Ce)?null:e,ne=!le&&(v&ue)!==0,F=null,L=e.ctx;try{var a=(0,e.fn)(),u=e.deps;if(S!==null){var f;if(de(e,C),u!==null&&C>0)for(u.length=C+S.length,f=0;f<S.length;f++)u[C+f]=S[f];else e.deps=u=S;if(!ne)for(f=C;f<u.length;f++)((o=u[f]).reactions??(o.reactions=[])).push(e)}else u!==null&&C<u.length&&(de(e,C),u.length=C);return a}finally{S=t,C=n,G=l,y=r,ne=i,F=s,L=_}}function Jn(e,t){let n=t.reactions;if(n!==null){var l=n.indexOf(e);if(l!==-1){var r=n.length-1;r===0?n=t.reactions=null:(n[l]=n[r],n.pop())}}n===null&&t.f&B&&(S===null||!S.includes(t))&&(U(t,he),t.f&(ue|Te)||(t.f^=Te),de(t,0))}function de(e,t){var n=e.deps;if(n!==null)for(var l=t;l<n.length;l++)Jn(e,n[l])}function qe(e){var t=e.f;if(!(t&oe)){U(e,D);var n=g,l=L;g=e;try{t&Ye?Bn(e):It(e),Ot(e),Nt(e);var r=Ft(e);e.teardown=typeof r=="function"?r:null,e.version=Mt}catch(i){De(i,e,n,l||e.ctx)}finally{g=n}}}function Rt(){if(ie>1e3){ie=0;try{mn()}catch(e){if(_e!==null)De(e,_e,null);else throw e}}ie++}function Vt(e){var t=e.length;if(t!==0){Rt();var n=le;le=!0;try{for(var l=0;l<t;l++){var r=e[l];r.f&D||(r.f^=D);var i=[];Ht(r,i),Qn(i)}}finally{le=n}}}function Qn(e){var t=e.length;if(t!==0)for(var n=0;n<t;n++){var l=e[n];if(!(l.f&(oe|P)))try{we(l)&&(qe(l),l.deps===null&&l.first===null&&l.nodes_start===null&&(l.teardown===null?Lt(l):l.fn=null))}catch(r){De(r,l,null,l.ctx)}}}function $n(){if(ce=!1,ie>1001)return;const e=Q;Q=[],Vt(e),ce||(ie=0,_e=null)}function Me(e){Se===qt&&(ce||(ce=!0,queueMicrotask($n))),_e=e;for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(n&(Ce|R)){if(!(n&D))return;t.f^=D}}Q.push(t)}function Ht(e,t){var n=e.first,l=[];e:for(;n!==null;){var r=n.f,i=(r&R)!==0,s=i&&(r&D)!==0,_=n.next;if(!s&&!(r&P))if(r&Ae){if(i)n.f^=D;else try{we(n)&&qe(n)}catch(f){De(f,n,null,n.ctx)}var v=n.first;if(v!==null){n=v;continue}}else r&gt&&l.push(n);if(_===null){let f=n.parent;for(;f!==null;){if(e===f)break e;var a=f.next;if(a!==null){n=a;continue e}f=f.parent}}n=_}for(var u=0;u<l.length;u++)v=l[u],t.push(v),Ht(v,t)}function Bt(e){var t=Se,n=Q;try{Rt();const r=[];Se=Wn,Q=r,ce=!1,Vt(n);var l=e==null?void 0:e();return Yn(),(Q.length>0||r.length>0)&&Bt(),ie=0,_e=null,l}finally{Se=t,Q=n}}async function er(){await Promise.resolve(),Bt()}function p(e){var u;var t=e.f,n=(t&B)!==0;if(n&&t&oe){var l=kt(e);return Ge(e),l}if(y!==null){F!==null&&F.includes(e)&&xn();var r=y.deps;S===null&&r!==null&&r[C]===e?C++:S===null?S=[e]:S.push(e),G!==null&&g!==null&&g.f&D&&!(g.f&R)&&G.includes(e)&&(U(g,$),Me(g))}else if(n&&e.deps===null)for(var i=e,s=i.parent,_=i;s!==null;)if(s.f&B){var v=s;_=v,s=v.parent}else{var a=s;(u=a.deriveds)!=null&&u.includes(_)||(a.deriveds??(a.deriveds=[])).push(_);break}return n&&(i=e,we(i)&&St(i)),e.v}function Ut(e){const t=y;try{return y=null,e()}finally{y=t}}const tr=~($|he|D);function U(e,t){e.f=e.f&tr|t}function Je(e,t=!1,n){L={p:L,c:null,e:null,m:!1,s:e,x:null,l:null}}function Qe(e){const t=L;if(t!==null){e!==void 0&&(t.x=e);const s=t.e;if(s!==null){var n=g,l=y;t.e=null;try{for(var r=0;r<s.length;r++){var i=s[r];z(i.effect),X(i.reaction),ge(i.fn)}}finally{z(n),X(l)}}L=t.p,t.m=!0}return e||{}}let vt=!1;function nr(){vt||(vt=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n.__on_r)==null||t.call(n)})},{capture:!0}))}function rr(e){var t=y,n=g;X(null),z(null);try{return e()}finally{X(t),z(n)}}function lr(e,t,n,l=n){e.addEventListener(t,()=>rr(n));const r=e.__on_r;r?e.__on_r=()=>{r(),l(!0)}:e.__on_r=()=>l(!0),nr()}const Yt=new Set,Re=new Set;function Kt(e){for(var t=0;t<e.length;t++)Yt.add(e[t]);for(var n of Re)n(e)}function Ee(e){var x;var t=this,n=t.ownerDocument,l=e.type,r=((x=e.composedPath)==null?void 0:x.call(e))||[],i=r[0]||e.target,s=0,_=e.__root;if(_){var v=r.indexOf(_);if(v!==-1&&(t===document||t===window)){e.__root=t;return}var a=r.indexOf(t);if(a===-1)return;v<=a&&(s=v)}if(i=r[s]||e.target,i!==t){un(e,"currentTarget",{configurable:!0,get(){return i||n}});var u=y,f=g;X(null),z(null);try{for(var o,c=[];i!==null;){var h=i.assignedSlot||i.parentNode||i.host||null;try{var m=i["__"+l];if(m!==void 0&&!i.disabled)if(Be(m)){var[T,...w]=m;T.apply(i,[e,...w])}else m.call(i,e)}catch(N){o?c.push(N):o=N}if(e.cancelBubble||h===t||h===null)break;i=h}if(o){for(let N of c)queueMicrotask(()=>{throw N});throw o}}finally{e.__root=t,delete e.currentTarget,X(u),z(f)}}}function ir(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function Wt(e,t){var n=g;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function ye(e,t){var n=(t&An)!==0,l,r=!e.startsWith("<!>");return()=>{l===void 0&&(l=ir(r?e:"<!>"+e),l=bt(l));var i=n?document.importNode(l,!0):l.cloneNode(!0);return Wt(i,i),i}}function be(e=""){{var t=We(e+"");return Wt(t,t),t}}function H(e,t){e!==null&&e.before(t)}const ur=["touchstart","touchmove"];function or(e){return ur.includes(e)}function Ve(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function sr(e,t){return ar(e,t)}const te=new Map;function ar(e,{target:t,anchor:n,props:l={},events:r,context:i,intro:s=!0}){qn();var _=new Set,v=f=>{for(var o=0;o<f.length;o++){var c=f[o];if(!_.has(c)){_.add(c);var h=or(c);t.addEventListener(c,Ee,{passive:h});var m=te.get(c);m===void 0?(document.addEventListener(c,Ee,{passive:h}),te.set(c,1)):te.set(c,m+1)}}};v(Ue(Yt)),Re.add(v);var a=void 0,u=Vn(()=>{var f=n??t.appendChild(We());return ve(()=>{if(i){Je({});var o=L;o.c=i}r&&(l.$$events=r),a=e(f,l)||{},i&&Qe()}),()=>{var h;for(var o of _){t.removeEventListener(o,Ee);var c=te.get(o);--c===0?(document.removeEventListener(o,Ee),te.delete(o)):te.set(o,c)}Re.delete(v),f!==n&&((h=f.parentNode)==null||h.removeChild(f))}});return fr.set(a,u),a}let fr=new WeakMap;function xe(e,t,n=!1){var l=e,r=null,i=null,s=O,_=n?Ke:0,v=!1;const a=(f,o=!0)=>{v=!0,u(o,f)},u=(f,o)=>{s!==(s=f)&&(s?(r?Ie(r):o&&(r=ve(()=>o(l))),i&&Oe(i,()=>{i=null})):(i?Ie(i):o&&(i=ve(()=>o(l))),r&&Oe(r,()=>{r=null})))};Ze(()=>{v=!1,t(a),v||u(null,null)},_)}function vr(e,t){return t}function cr(e,t,n,l){for(var r=[],i=t.length,s=0;s<i;s++)Xe(t[s].e,r,!0);var _=i>0&&r.length===0&&n!==null;if(_){var v=n.parentNode;Mn(v),v.append(n),l.clear(),j(e,t[0].prev,t[i-1].next)}At(r,()=>{for(var a=0;a<i;a++){var u=t[a];_||(l.delete(u.k),j(e,u.prev,u.next)),Z(u.e,!_)}})}function _r(e,t,n,l,r,i=null){var s=e,_={flags:t,items:new Map,first:null};{var v=e;s=v.appendChild(We())}var a=null,u=!1;Ze(()=>{var f=n(),o=Be(f)?f:f==null?[]:Ue(f),c=o.length;if(!(u&&c===0)){u=c===0;{var h=y;dr(o,_,s,r,t,(h.f&P)!==0,l)}i!==null&&(c===0?a?Ie(a):a=ve(()=>i(s)):a!==null&&Oe(a,()=>{a=null})),n()}})}function dr(e,t,n,l,r,i,s){var _=e.length,v=t.items,a=t.first,u=a,f,o=null,c=[],h=[],m,T,w,x;for(x=0;x<_;x+=1){if(m=e[x],T=s(m,x),w=v.get(T),w===void 0){var N=u?u.e.nodes_start:n;o=pr(N,t,o,o===null?t.first:o.next,m,T,x,l,r),v.set(T,o),c=[],h=[],u=o.next;continue}if(hr(w,m,x),w.e.f&P&&Ie(w.e),w!==u){if(f!==void 0&&f.has(w)){if(c.length<h.length){var V=h[0],A;o=V.prev;var J=c[0],Y=c[c.length-1];for(A=0;A<c.length;A+=1)ct(c[A],V,n);for(A=0;A<h.length;A+=1)f.delete(h[A]);j(t,J.prev,Y.next),j(t,o,J),j(t,Y,V),u=V,o=Y,x-=1,c=[],h=[]}else f.delete(w),ct(w,u,n),j(t,w.prev,w.next),j(t,w,o===null?t.first:o.next),j(t,o,w),o=w;continue}for(c=[],h=[];u!==null&&u.k!==T;)(i||!(u.e.f&P))&&(f??(f=new Set)).add(u),h.push(u),u=u.next;if(u===null)continue;w=u}c.push(w),o=w,u=w.next}if(u!==null||f!==void 0){for(var K=f===void 0?[]:Ue(f);u!==null;)(i||!(u.e.f&P))&&K.push(u),u=u.next;var ee=K.length;if(ee>0){var se=_===0?n:null;cr(t,K,se,v)}}g.first=t.first&&t.first.e,g.last=o&&o.e}function hr(e,t,n,l){wt(e.v,t),e.i=n}function pr(e,t,n,l,r,i,s,_,v){var a=(v&On)!==0,u=(v&Ln)===0,f=a?u?Tn(r):q(r):r,o=v&In?q(s):s,c={i:o,v:f,k:i,a:null,e:null,prev:n,next:l};try{return c.e=ve(()=>_(e,f,o),Cn),c.e.prev=n&&n.e,c.e.next=l&&l.e,n===null?t.first=c:(n.next=c,n.e.next=c.e),l!==null&&(l.prev=c,l.e.prev=c.e),c}finally{}}function ct(e,t,n){for(var l=e.next?e.next.e.nodes_start:n,r=t?t.e.nodes_start:n,i=e.e.nodes_start;i!==l;){var s=je(i);r.before(i),i=s}}function j(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function gr(e,t,n,l){var r=e.__attributes??(e.__attributes={});r[t]!==(r[t]=n)&&("__styles"in e&&(e.__styles={}),n==null?e.removeAttribute(t):typeof n!="string"&&wr(e).includes(t)?e[t]=n:e.setAttribute(t,n))}var _t=new Map;function wr(e){var t=_t.get(e.nodeName);if(t)return t;_t.set(e.nodeName,t=[]);for(var n,l=e,r=Element.prototype;r!==l;){n=on(l);for(var i in n)n[i].set&&t.push(i);l=pt(l)}return t}function jt(e,t,n){if(e.multiple)return Er(e,t);for(var l of e.options){var r=fe(l);if(Dn(r,t)){l.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function yr(e,t){ge(()=>{var n=new MutationObserver(()=>{var l=e.__value;jt(e,l)});return n.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{n.disconnect()}})}function mr(e,t,n=t){var l=!0;lr(e,"change",r=>{var i=r?"[selected]":":checked",s;if(e.multiple)s=[].map.call(e.querySelectorAll(i),fe);else{var _=e.querySelector(i)??e.querySelector("option:not([disabled])");s=_&&fe(_)}n(s)}),ge(()=>{var r=t();if(jt(e,r,l),l&&r===void 0){var i=e.querySelector(":checked");i!==null&&(r=fe(i),n(r))}e.__value=r,l=!1}),yr(e)}function Er(e,t){for(var n of e.options)n.selected=~t.indexOf(fe(n))}function fe(e){return"__value"in e?e.__value:e.value}function dt(e,t){return e===t||(e==null?void 0:e[re])===t}function He(e={},t,n,l){return ge(()=>{var r,i;return Hn(()=>{r=i,i=[],Ut(()=>{e!==n(...i)&&(t(e,...i),r&&dt(n(...r),e)&&t(null,...r))})}),()=>{Un(()=>{i&&dt(n(...i),e)&&t(null,...i)})}}),e}function br(e){L===null&&Kn(),Tt(()=>{const t=Ut(e);if(typeof t=="function")return t})}const xr="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(xr);var kr=ye('<button class="svelte-d0h1y"> </button>'),Sr=ye('<section class="svelte-d0h1y"></section>');function Tr(e,t){Je(t,!0);let n=W(I([])),l=1,r,i=0,s=W(1),_=0;function v(f){const o=f.target,c=parseInt(o.textContent||"0"),h=Date.now();if(c===l){if(o.disabled=!0,l++,i+=c,c===1&&(_=Date.now()),c===t.level){const m=(h-_)/1e3;t.win(i,m)}}else t.lose(i)}async function a(){b(n,I([...Array(t.level).keys()].map(o=>({value:o,sort:Math.random()})).sort((o,c)=>o.sort-c.sort).map(({value:o})=>o))),l=1,i=0,b(s,I(Math.ceil(Math.sqrt(p(n).length))));const f=360/t.level;await er(),r==null||r.querySelectorAll("button").forEach(o=>{o.disabled=!1,o.style.backgroundColor=`hsl(${parseInt(o.innerText)*f}, 100%, 50%)`}),t.reset()}var u=Sr();return _r(u,21,()=>p(n),vr,(f,o)=>{var c=kr();c.__click=v;var h=M(c);Ne(()=>Ve(h,p(o)+1)),H(f,c)}),He(u,f=>r=f,()=>r),Ne(()=>gr(u,"style",`--columns: ${p(s)??""};`)),H(e,u),Qe({restart:a})}Kt(["click"]);var Nr=ye("<small> </small>"),Or=(e,t)=>b(t,I(Math.pow(Math.sqrt(p(t))+1,2))),Ir=ye('<button class="gameWon svelte-xnifwx">Nächstes Level</button>'),Lr=ye('<main class="svelte-xnifwx"><h1>Zähle bis <select class="svelte-xnifwx"><option>4</option><option>9</option><option>16</option><option>25</option><option>36</option><option>49</option><option>64</option><option>81</option><option>100</option></select></h1> <!> <div class="endcard hidden svelte-xnifwx"><div class="inner svelte-xnifwx"><h3 class="svelte-xnifwx"><!></h3> <!> <p class="endstate svelte-xnifwx"><!></p> <p>Deine Punkte: <strong> </strong></p> <!> <button class="svelte-xnifwx">Erneut Spielen</button></div></div></main>');function Ar(e,t){Je(t,!0);const n=localStorage.getItem("currentLevel"),l=n?parseInt(n):4,r=localStorage.getItem("highestLevel"),i=r?parseInt(r):4;let s=W(I(l)),_=W(void 0),v=W(void 0),a=W(!1),u=W(0),f=W(0);function o(d,E){var me;b(u,I(d)),b(a,!0),b(f,I(E)),(me=p(v))==null||me.classList.remove("hidden")}function c(d){var E;b(u,I(d)),b(a,!1),(E=p(v))==null||E.classList.remove("hidden")}function h(){var d;b(u,0),(d=p(v))==null||d.classList.add("hidden")}Tt(()=>(p(s),localStorage.setItem("currentLevel",p(s).toString()),p(s)>i&&localStorage.setItem("highestLevel",p(s).toString()),()=>{var d;(d=p(_))==null||d.restart()})),br(()=>{var d;(d=p(_))==null||d.restart()});var m=Lr(),T=M(m),w=k(M(T)),x=M(w);x.value=(x.__value=4)==null?"":4;var N=k(x);N.disabled=i<9,N.value=(N.__value=9)==null?"":9;var V=k(N);V.disabled=i<16,V.value=(V.__value=16)==null?"":16;var A=k(V);A.disabled=i<25,A.value=(A.__value=25)==null?"":25;var J=k(A);J.disabled=i<36,J.value=(J.__value=36)==null?"":36;var Y=k(J);Y.disabled=i<49,Y.value=(Y.__value=49)==null?"":49;var K=k(Y);K.disabled=i<64,K.value=(K.__value=64)==null?"":64;var ee=k(K);ee.disabled=i<81,ee.value=(ee.__value=81)==null?"":81;var se=k(ee);se.disabled=i<100,se.value=(se.__value=100)==null?"":100;var $e=k(T,2);He(Tr($e,{win:o,lose:c,reset:h,get level(){return p(s)}}),d=>b(_,I(d)),()=>p(_));var et=k($e,2),Gt=M(et),tt=M(Gt),Zt=M(tt);{var Xt=d=>{var E=be("Du hast Gewonnen!");H(d,E)},zt=d=>{var E=be("Du hast leider Verloren");H(d,E)};xe(Zt,d=>{p(a)?d(Xt):d(zt,!1)})}var nt=k(tt,2);{var Jt=d=>{var E=Nr(),me=M(E);Ne(()=>Ve(me,`in ${p(f).toFixed(2)??""} Sekunden`)),H(d,E)};xe(nt,d=>{p(f)&&d(Jt)})}var rt=k(nt,2),Qt=M(rt);{var $t=d=>{var E=be("🏆");H(d,E)},en=d=>{var E=be("😢");H(d,E)};xe(Qt,d=>{p(a)?d($t):d(en,!1)})}var lt=k(rt,2),tn=k(M(lt)),nn=M(tn),it=k(lt,2);{var rn=d=>{var E=Ir();E.__click=[Or,s],H(d,E)};xe(it,d=>{p(a)&&d(rn)})}var ln=k(it,2);ln.__click=function(...d){var E;(E=p(_).restart)==null||E.apply(this,d)},He(et,d=>b(v,d),()=>p(v)),Ne(()=>Ve(nn,p(u))),mr(w,()=>p(s),d=>b(s,d)),H(e,m),Qe()}Kt(["click"]);sr(Ar,{target:document.getElementById("app")});