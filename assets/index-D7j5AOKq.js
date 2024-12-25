(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const at=!1;var Fe=Array.isArray,Re=Array.from,zt=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,Jt=Object.getOwnPropertyDescriptors,Qt=Object.prototype,$t=Array.prototype,ft=Object.getPrototypeOf;function er(e){for(var t=0;t<e.length;t++)e[t]()}const V=2,vt=4,Te=8,Ve=16,F=32,Se=64,qe=128,ie=256,be=512,C=1024,z=2048,_e=4096,P=8192,ue=16384,tr=32768,Be=65536,rr=1<<19,nr=1<<20,re=Symbol("$state");function lr(e){return e===this.v}function ir(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ur(e){return!ir(e,this.v)}function or(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function sr(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ar(e){throw new Error("https://svelte.dev/e/effect_orphan")}function fr(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function vr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function cr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function _r(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function dr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let hr=!1;function D(e){return{f:0,v:e,reactions:null,equals:lr,version:0}}function G(e){return gr(D(e))}function pr(e,t=!1){const r=D(e);return t||(r.equals=ur),r}function gr(e){return y!==null&&y.f&V&&(M===null?Mr([e]):M.push(e)),e}function b(e,t){return y!==null&&Rr()&&y.f&(V|Ve)&&(M===null||!M.includes(e))&&dr(),ct(e,t)}function ct(e,t){return e.equals(t)||(e.v=t,e.version=It(),_t(e,z),p!==null&&p.f&C&&!(p.f&F)&&(N!==null&&N.includes(e)?(B(p,z),Ie(p)):Y===null?Fr([e]):Y.push(e))),t}function _t(e,t){var r=e.reactions;if(r!==null)for(var l=r.length,n=0;n<l;n++){var i=r[n],f=i.f;f&z||(B(i,t),f&(C|ie)&&(f&V?_t(i,_e):Ie(i)))}}const yr=1,wr=2,mr=16,Er=2,S=Symbol();let br=!1;function L(e,t=null,r){if(typeof e!="object"||e===null||re in e)return e;const l=ft(e);if(l!==Qt&&l!==$t)return e;var n=new Map,i=Fe(e),f=D(0);i&&n.set("length",D(e.length));var _;return new Proxy(e,{defineProperty(v,a,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&vr();var o=n.get(a);return o===void 0?(o=D(u.value),n.set(a,o)):b(o,L(u.value,_)),!0},deleteProperty(v,a){var u=n.get(a);if(u===void 0)a in v&&n.set(a,D(S));else{if(i&&typeof a=="string"){var o=n.get("length"),s=Number(a);Number.isInteger(s)&&s<o.v&&b(o,s)}b(u,S),$e(f)}return!0},get(v,a,u){var h;if(a===re)return e;var o=n.get(a),s=a in v;if(o===void 0&&(!s||(h=oe(v,a))!=null&&h.writable)&&(o=D(L(s?v[a]:S,_)),n.set(a,o)),o!==void 0){var c=w(o);return c===S?void 0:c}return Reflect.get(v,a,u)},getOwnPropertyDescriptor(v,a){var u=Reflect.getOwnPropertyDescriptor(v,a);if(u&&"value"in u){var o=n.get(a);o&&(u.value=w(o))}else if(u===void 0){var s=n.get(a),c=s==null?void 0:s.v;if(s!==void 0&&c!==S)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return u},has(v,a){var c;if(a===re)return!0;var u=n.get(a),o=u!==void 0&&u.v!==S||Reflect.has(v,a);if(u!==void 0||p!==null&&(!o||(c=oe(v,a))!=null&&c.writable)){u===void 0&&(u=D(o?L(v[a],_):S),n.set(a,u));var s=w(u);if(s===S)return!1}return o},set(v,a,u,o){var A;var s=n.get(a),c=a in v;if(i&&a==="length")for(var h=u;h<s.v;h+=1){var m=n.get(h+"");m!==void 0?b(m,S):h in v&&(m=D(S),n.set(h+"",m))}s===void 0?(!c||(A=oe(v,a))!=null&&A.writable)&&(s=D(void 0),b(s,L(u,_)),n.set(a,s)):(c=s.v!==S,b(s,L(u,_)));var x=Reflect.getOwnPropertyDescriptor(v,a);if(x!=null&&x.set&&x.set.call(o,u),!c){if(i&&typeof a=="string"){var g=n.get("length"),E=Number(a);Number.isInteger(E)&&E>=g.v&&b(g,E+1)}$e(f)}return!0},ownKeys(v){w(f);var a=Reflect.ownKeys(v).filter(s=>{var c=n.get(s);return c===void 0||c.v!==S});for(var[u,o]of n)o.v!==S&&!(u in v)&&a.push(u);return a},setPrototypeOf(){cr()}})}function $e(e,t=1){b(e,e.v+t)}function et(e){return e!==null&&typeof e=="object"&&re in e?e[re]:e}function xr(e,t){return Object.is(et(e),et(t))}var tt,dt,ht;function kr(){if(tt===void 0){tt=window;var e=Element.prototype,t=Node.prototype;dt=oe(t,"firstChild").get,ht=oe(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function He(e=""){return document.createTextNode(e)}function pt(e){return dt.call(e)}function Ue(e){return ht.call(e)}function R(e,t){return pt(e)}function T(e,t=1,r=!1){let l=e;for(;t--;)l=Ue(l);return l}function Nr(e){e.textContent=""}function gt(e){var t=e.children;if(t!==null){e.children=null;for(var r=0;r<t.length;r+=1){var l=t[r];l.f&V?Ye(l):K(l)}}}function Tr(e){for(var t=e.parent;t!==null;){if(!(t.f&V))return t;t=t.parent}return null}function yt(e){var t,r=p;W(Tr(e));try{gt(e),t=Ct(e)}finally{W(r)}return t}function wt(e){var t=yt(e),r=(te||e.f&ie)&&e.deps!==null?_e:C;B(e,r),e.equals(t)||(e.v=t,e.version=It())}function Ye(e){gt(e),ce(e,0),B(e,ue),e.v=e.children=e.deps=e.ctx=e.reactions=null}function Sr(e){p===null&&y===null&&ar(),y!==null&&y.f&ie&&sr(),We&&or()}function Or(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function de(e,t,r,l=!0){var n=(e&Se)!==0,i=p,f={ctx:O,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|z,first:null,fn:t,last:null,next:null,parent:n?null:i,prev:null,teardown:null,transitions:null,version:0};if(r){var _=ne;try{rt(!0),Ae(f),f.f|=tr}catch(u){throw K(f),u}finally{rt(_)}}else t!==null&&Ie(f);var v=r&&f.deps===null&&f.first===null&&f.nodes_start===null&&f.teardown===null&&(f.f&nr)===0;if(!v&&!n&&l&&(i!==null&&Or(f,i),y!==null&&y.f&V)){var a=y;(a.children??(a.children=[])).push(f)}return f}function mt(e){Sr();var t=p!==null&&(p.f&F)!==0&&O!==null&&!O.m;if(t){var r=O;(r.e??(r.e=[])).push({fn:e,effect:p,reaction:y})}else{var l=he(e);return l}}function Ar(e){const t=de(Se,e,!0);return(r={})=>new Promise(l=>{r.outro?xe(t,()=>{K(t),l(void 0)}):(K(t),l(void 0))})}function he(e){return de(vt,e,!1)}function Ir(e){return de(Te,e,!0)}function De(e){return Ke(e)}function Ke(e,t=0){return de(Te|Ve|t,e,!0)}function ae(e,t=!0){return de(Te|F,e,!0,t)}function Et(e){var t=e.teardown;if(t!==null){const r=We,l=y;nt(!0),j(null);try{t.call(null)}finally{nt(r),j(l)}}}function bt(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)Ye(t[r])}}function xt(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var l=r.next;K(r,t),r=l}}function Cr(e){for(var t=e.first;t!==null;){var r=t.next;t.f&F||K(t),t=r}}function K(e,t=!0){var r=!1;if((t||e.f&rr)&&e.nodes_start!==null){for(var l=e.nodes_start,n=e.nodes_end;l!==null;){var i=l===n?null:Ue(l);l.remove(),l=i}r=!0}xt(e,t&&!r),bt(e),ce(e,0),B(e,ue);var f=e.transitions;if(f!==null)for(const v of f)v.stop();Et(e);var _=e.parent;_!==null&&_.first!==null&&kt(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function kt(e){var t=e.parent,r=e.prev,l=e.next;r!==null&&(r.next=l),l!==null&&(l.prev=r),t!==null&&(t.first===e&&(t.first=l),t.last===e&&(t.last=r))}function xe(e,t){var r=[];je(e,r,!0),Nt(r,()=>{K(e),t&&t()})}function Nt(e,t){var r=e.length;if(r>0){var l=()=>--r||t();for(var n of e)n.out(l)}else t()}function je(e,t,r){if(!(e.f&P)){if(e.f^=P,e.transitions!==null)for(const f of e.transitions)(f.is_global||r)&&t.push(f);for(var l=e.first;l!==null;){var n=l.next,i=(l.f&Be)!==0||(l.f&F)!==0;je(l,t,i?r:!1),l=n}}}function ke(e){Tt(e,!0)}function Tt(e,t){if(e.f&P){pe(e)&&Ae(e),e.f^=P;for(var r=e.first;r!==null;){var l=r.next,n=(r.f&Be)!==0||(r.f&F)!==0;Tt(r,n?t:!1),r=l}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let Ne=!1,Le=[];function St(){Ne=!1;const e=Le.slice();Le=[],er(e)}function qr(e){Ne||(Ne=!0,queueMicrotask(St)),Le.push(e)}function Dr(){Ne&&St()}function Lr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Ot=0,Pr=1;let me=!1,Ee=Ot,fe=!1,ve=null,ne=!1,We=!1;function rt(e){ne=e}function nt(e){We=e}let X=[],le=0;let y=null;function j(e){y=e}let p=null;function W(e){p=e}let M=null;function Mr(e){M=e}let N=null,I=0,Y=null;function Fr(e){Y=e}let At=0,te=!1,O=null;function It(){return++At}function Rr(){return!hr}function pe(e){var f,_;var t=e.f;if(t&z)return!0;if(t&_e){var r=e.deps,l=(t&ie)!==0;if(r!==null){var n;if(t&be){for(n=0;n<r.length;n++)((f=r[n]).reactions??(f.reactions=[])).push(e);e.f^=be}for(n=0;n<r.length;n++){var i=r[n];if(pe(i)&&wt(i),l&&p!==null&&!te&&!((_=i==null?void 0:i.reactions)!=null&&_.includes(e))&&(i.reactions??(i.reactions=[])).push(e),i.version>e.version)return!0}}l||B(e,C)}return!1}function Vr(e,t){for(var r=t;r!==null;){if(r.f&qe)try{r.fn(e);return}catch{r.f^=qe}r=r.parent}throw me=!1,e}function Br(e){return(e.f&ue)===0&&(e.parent===null||(e.parent.f&qe)===0)}function Oe(e,t,r,l){if(me){if(r===null&&(me=!1),Br(t))throw e;return}r!==null&&(me=!0);{Vr(e,t);return}}function Ct(e){var s;var t=N,r=I,l=Y,n=y,i=te,f=M,_=O,v=e.f;N=null,I=0,Y=null,y=v&(F|Se)?null:e,te=!ne&&(v&ie)!==0,M=null,O=e.ctx;try{var a=(0,e.fn)(),u=e.deps;if(N!==null){var o;if(ce(e,I),u!==null&&I>0)for(u.length=I+N.length,o=0;o<N.length;o++)u[I+o]=N[o];else e.deps=u=N;if(!te)for(o=I;o<u.length;o++)((s=u[o]).reactions??(s.reactions=[])).push(e)}else u!==null&&I<u.length&&(ce(e,I),u.length=I);return a}finally{N=t,I=r,Y=l,y=n,te=i,M=f,O=_}}function Hr(e,t){let r=t.reactions;if(r!==null){var l=r.indexOf(e);if(l!==-1){var n=r.length-1;n===0?r=t.reactions=null:(r[l]=r[n],r.pop())}}r===null&&t.f&V&&(N===null||!N.includes(t))&&(B(t,_e),t.f&(ie|be)||(t.f^=be),ce(t,0))}function ce(e,t){var r=e.deps;if(r!==null)for(var l=t;l<r.length;l++)Hr(e,r[l])}function Ae(e){var t=e.f;if(!(t&ue)){B(e,C);var r=p,l=O;p=e;try{t&Ve?Cr(e):xt(e),bt(e),Et(e);var n=Ct(e);e.teardown=typeof n=="function"?n:null,e.version=At}catch(i){Oe(i,e,r,l||e.ctx)}finally{p=r}}}function qt(){if(le>1e3){le=0;try{fr()}catch(e){if(ve!==null)Oe(e,ve,null);else throw e}}le++}function Dt(e){var t=e.length;if(t!==0){qt();var r=ne;ne=!0;try{for(var l=0;l<t;l++){var n=e[l];n.f&C||(n.f^=C);var i=[];Lt(n,i),Ur(i)}}finally{ne=r}}}function Ur(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var l=e[r];if(!(l.f&(ue|P)))try{pe(l)&&(Ae(l),l.deps===null&&l.first===null&&l.nodes_start===null&&(l.teardown===null?kt(l):l.fn=null))}catch(n){Oe(n,l,null,l.ctx)}}}function Yr(){if(fe=!1,le>1001)return;const e=X;X=[],Dt(e),fe||(le=0,ve=null)}function Ie(e){Ee===Ot&&(fe||(fe=!0,queueMicrotask(Yr))),ve=e;for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Se|F)){if(!(r&C))return;t.f^=C}}X.push(t)}function Lt(e,t){var r=e.first,l=[];e:for(;r!==null;){var n=r.f,i=(n&F)!==0,f=i&&(n&C)!==0,_=r.next;if(!f&&!(n&P))if(n&Te){if(i)r.f^=C;else try{pe(r)&&Ae(r)}catch(o){Oe(o,r,null,r.ctx)}var v=r.first;if(v!==null){r=v;continue}}else n&vt&&l.push(r);if(_===null){let o=r.parent;for(;o!==null;){if(e===o)break e;var a=o.next;if(a!==null){r=a;continue e}o=o.parent}}r=_}for(var u=0;u<l.length;u++)v=l[u],t.push(v),Lt(v,t)}function Pt(e){var t=Ee,r=X;try{qt();const n=[];Ee=Pr,X=n,fe=!1,Dt(r);var l=e==null?void 0:e();return Dr(),(X.length>0||n.length>0)&&Pt(),le=0,ve=null,l}finally{Ee=t,X=r}}async function Kr(){await Promise.resolve(),Pt()}function w(e){var u;var t=e.f,r=(t&V)!==0;if(r&&t&ue){var l=yt(e);return Ye(e),l}if(y!==null){M!==null&&M.includes(e)&&_r();var n=y.deps;N===null&&n!==null&&n[I]===e?I++:N===null?N=[e]:N.push(e),Y!==null&&p!==null&&p.f&C&&!(p.f&F)&&Y.includes(e)&&(B(p,z),Ie(p))}else if(r&&e.deps===null)for(var i=e,f=i.parent,_=i;f!==null;)if(f.f&V){var v=f;_=v,f=v.parent}else{var a=f;(u=a.deriveds)!=null&&u.includes(_)||(a.deriveds??(a.deriveds=[])).push(_);break}return r&&(i=e,pe(i)&&wt(i)),e.v}function Mt(e){const t=y;try{return y=null,e()}finally{y=t}}const jr=~(z|_e|C);function B(e,t){e.f=e.f&jr|t}function Ge(e,t=!1,r){O={p:O,c:null,e:null,m:!1,s:e,x:null,l:null}}function Ze(e){const t=O;if(t!==null){e!==void 0&&(t.x=e);const f=t.e;if(f!==null){var r=p,l=y;t.e=null;try{for(var n=0;n<f.length;n++){var i=f[n];W(i.effect),j(i.reaction),he(i.fn)}}finally{W(r),j(l)}}O=t.p,t.m=!0}return e||{}}let lt=!1;function Wr(){lt||(lt=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function Gr(e){var t=y,r=p;j(null),W(null);try{return e()}finally{j(t),W(r)}}function Zr(e,t,r,l=r){e.addEventListener(t,()=>Gr(r));const n=e.__on_r;n?e.__on_r=()=>{n(),l(!0)}:e.__on_r=()=>l(!0),Wr()}const Ft=new Set,Pe=new Set;function Rt(e){for(var t=0;t<e.length;t++)Ft.add(e[t]);for(var r of Pe)r(e)}function ye(e){var E;var t=this,r=t.ownerDocument,l=e.type,n=((E=e.composedPath)==null?void 0:E.call(e))||[],i=n[0]||e.target,f=0,_=e.__root;if(_){var v=n.indexOf(_);if(v!==-1&&(t===document||t===window)){e.__root=t;return}var a=n.indexOf(t);if(a===-1)return;v<=a&&(f=v)}if(i=n[f]||e.target,i!==t){zt(e,"currentTarget",{configurable:!0,get(){return i||r}});var u=y,o=p;j(null),W(null);try{for(var s,c=[];i!==null;){var h=i.assignedSlot||i.parentNode||i.host||null;try{var m=i["__"+l];if(m!==void 0&&!i.disabled)if(Fe(m)){var[x,...g]=m;x.apply(i,[e,...g])}else m.call(i,e)}catch(A){s?c.push(A):s=A}if(e.cancelBubble||h===t||h===null)break;i=h}if(s){for(let A of c)queueMicrotask(()=>{throw A});throw s}}finally{e.__root=t,delete e.currentTarget,j(u),W(o)}}}function Xr(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function Vt(e,t){var r=p;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function Xe(e,t){var r=(t&Er)!==0,l,n=!e.startsWith("<!>");return()=>{l===void 0&&(l=Xr(n?e:"<!>"+e),l=pt(l));var i=r?document.importNode(l,!0):l.cloneNode(!0);return Vt(i,i),i}}function we(e=""){{var t=He(e+"");return Vt(t,t),t}}function Z(e,t){e!==null&&e.before(t)}const zr=["touchstart","touchmove"];function Jr(e){return zr.includes(e)}function Bt(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function Qr(e,t){return $r(e,t)}const ee=new Map;function $r(e,{target:t,anchor:r,props:l={},events:n,context:i,intro:f=!0}){kr();var _=new Set,v=o=>{for(var s=0;s<o.length;s++){var c=o[s];if(!_.has(c)){_.add(c);var h=Jr(c);t.addEventListener(c,ye,{passive:h});var m=ee.get(c);m===void 0?(document.addEventListener(c,ye,{passive:h}),ee.set(c,1)):ee.set(c,m+1)}}};v(Re(Ft)),Pe.add(v);var a=void 0,u=Ar(()=>{var o=r??t.appendChild(He());return ae(()=>{if(i){Ge({});var s=O;s.c=i}n&&(l.$$events=n),a=e(o,l)||{},i&&Ze()}),()=>{var h;for(var s of _){t.removeEventListener(s,ye);var c=ee.get(s);--c===0?(document.removeEventListener(s,ye),ee.delete(s)):ee.set(s,c)}Pe.delete(v),o!==r&&((h=o.parentNode)==null||h.removeChild(o))}});return en.set(a,u),a}let en=new WeakMap;function it(e,t,r=!1){var l=e,n=null,i=null,f=S,_=r?Be:0,v=!1;const a=(o,s=!0)=>{v=!0,u(s,o)},u=(o,s)=>{f!==(f=o)&&(f?(n?ke(n):s&&(n=ae(()=>s(l))),i&&xe(i,()=>{i=null})):(i?ke(i):s&&(i=ae(()=>s(l))),n&&xe(n,()=>{n=null})))};Ke(()=>{v=!1,t(a),v||u(null,null)},_)}function tn(e,t){return t}function rn(e,t,r,l){for(var n=[],i=t.length,f=0;f<i;f++)je(t[f].e,n,!0);var _=i>0&&n.length===0&&r!==null;if(_){var v=r.parentNode;Nr(v),v.append(r),l.clear(),U(e,t[0].prev,t[i-1].next)}Nt(n,()=>{for(var a=0;a<i;a++){var u=t[a];_||(l.delete(u.k),U(e,u.prev,u.next)),K(u.e,!_)}})}function nn(e,t,r,l,n,i=null){var f=e,_={flags:t,items:new Map,first:null};{var v=e;f=v.appendChild(He())}var a=null,u=!1;Ke(()=>{var o=r(),s=Fe(o)?o:o==null?[]:Re(o),c=s.length;if(!(u&&c===0)){u=c===0;{var h=y;ln(s,_,f,n,t,(h.f&P)!==0,l)}i!==null&&(c===0?a?ke(a):a=ae(()=>i(f)):a!==null&&xe(a,()=>{a=null})),r()}})}function ln(e,t,r,l,n,i,f){var _=e.length,v=t.items,a=t.first,u=a,o,s=null,c=[],h=[],m,x,g,E;for(E=0;E<_;E+=1){if(m=e[E],x=f(m,E),g=v.get(x),g===void 0){var A=u?u.e.nodes_start:r;s=on(A,t,s,s===null?t.first:s.next,m,x,E,l,n),v.set(x,s),c=[],h=[],u=s.next;continue}if(un(g,m,E),g.e.f&P&&ke(g.e),g!==u){if(o!==void 0&&o.has(g)){if(c.length<h.length){var H=h[0],q;s=H.prev;var J=c[0],Q=c[c.length-1];for(q=0;q<c.length;q+=1)ut(c[q],H,r);for(q=0;q<h.length;q+=1)o.delete(h[q]);U(t,J.prev,Q.next),U(t,s,J),U(t,Q,H),u=H,s=Q,E-=1,c=[],h=[]}else o.delete(g),ut(g,u,r),U(t,g.prev,g.next),U(t,g,s===null?t.first:s.next),U(t,s,g),s=g;continue}for(c=[],h=[];u!==null&&u.k!==x;)(i||!(u.e.f&P))&&(o??(o=new Set)).add(u),h.push(u),u=u.next;if(u===null)continue;g=u}c.push(g),s=g,u=g.next}if(u!==null||o!==void 0){for(var $=o===void 0?[]:Re(o);u!==null;)(i||!(u.e.f&P))&&$.push(u),u=u.next;var ge=$.length;if(ge>0){var Ce=_===0?r:null;rn(t,$,Ce,v)}}p.first=t.first&&t.first.e,p.last=s&&s.e}function un(e,t,r,l){ct(e.v,t),e.i=r}function on(e,t,r,l,n,i,f,_,v){var a=(v&yr)!==0,u=(v&mr)===0,o=a?u?pr(n):D(n):n,s=v&wr?D(f):f,c={i:s,v:o,k:i,a:null,e:null,prev:r,next:l};try{return c.e=ae(()=>_(e,o,s),br),c.e.prev=r&&r.e,c.e.next=l&&l.e,r===null?t.first=c:(r.next=c,r.e.next=c.e),l!==null&&(l.prev=c,l.e.prev=c.e),c}finally{}}function ut(e,t,r){for(var l=e.next?e.next.e.nodes_start:r,n=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==l;){var f=Ue(i);n.before(i),i=f}}function U(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function sn(e,t,r,l){var n=e.__attributes??(e.__attributes={});n[t]!==(n[t]=r)&&("__styles"in e&&(e.__styles={}),r==null?e.removeAttribute(t):typeof r!="string"&&an(e).includes(t)?e[t]=r:e.setAttribute(t,r))}var ot=new Map;function an(e){var t=ot.get(e.nodeName);if(t)return t;ot.set(e.nodeName,t=[]);for(var r,l=e,n=Element.prototype;n!==l;){r=Jt(l);for(var i in r)r[i].set&&t.push(i);l=ft(l)}return t}function Ht(e,t,r){if(e.multiple)return cn(e,t);for(var l of e.options){var n=se(l);if(xr(n,t)){l.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function fn(e,t){he(()=>{var r=new MutationObserver(()=>{var l=e.__value;Ht(e,l)});return r.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{r.disconnect()}})}function vn(e,t,r=t){var l=!0;Zr(e,"change",n=>{var i=n?"[selected]":":checked",f;if(e.multiple)f=[].map.call(e.querySelectorAll(i),se);else{var _=e.querySelector(i)??e.querySelector("option:not([disabled])");f=_&&se(_)}r(f)}),he(()=>{var n=t();if(Ht(e,n,l),l&&n===void 0){var i=e.querySelector(":checked");i!==null&&(n=se(i),r(n))}e.__value=n,l=!1}),fn(e)}function cn(e,t){for(var r of e.options)r.selected=~t.indexOf(se(r))}function se(e){return"__value"in e?e.__value:e.value}function st(e,t){return e===t||(e==null?void 0:e[re])===t}function Me(e={},t,r,l){return he(()=>{var n,i;return Ir(()=>{n=i,i=[],Mt(()=>{e!==r(...i)&&(t(e,...i),n&&st(r(...n),e)&&t(null,...n))})}),()=>{qr(()=>{i&&st(r(...i),e)&&t(null,...i)})}}),e}function _n(e){O===null&&Lr(),mt(()=>{const t=Mt(e);if(typeof t=="function")return t})}const dn="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(dn);var hn=Xe('<button class="svelte-1it5cib"> </button>'),pn=Xe('<section class="svelte-1it5cib"></section>');function gn(e,t){Ge(t,!0);let r=G(L([])),l=1,n,i=0,f=G(1);function _(u){const o=u.target,s=parseInt(o.textContent||"0");s===l?(o.disabled=!0,l++,i+=s,s===t.level&&t.win(i)):t.lose(i)}async function v(){b(r,L([...Array(t.level).keys()].map(o=>({value:o,sort:Math.random()})).sort((o,s)=>o.sort-s.sort).map(({value:o})=>o))),l=1,i=0,b(f,L(Math.ceil(Math.sqrt(w(r).length))));const u=360/t.level;await Kr(),n==null||n.querySelectorAll("button").forEach(o=>{o.disabled=!1,o.style.backgroundColor=`hsl(${parseInt(o.innerText)*u}, 100%, 50%)`}),t.reset()}var a=pn();return nn(a,21,()=>w(r),tn,(u,o)=>{var s=hn();s.__click=_;var c=R(s);De(()=>Bt(c,w(o)+1)),Z(u,s)}),Me(a,u=>n=u,()=>n),De(()=>sn(a,"style",`--columns: ${w(f)??""};`)),Z(e,a),Ze({restart:v})}Rt(["click"]);var yn=Xe('<main class="svelte-1f03do"><h1>Zähle bis <select class="svelte-1f03do"><option>4</option><option>9</option><option>16</option><option>25</option><option>36</option><option>49</option><option>64</option><option>81</option><option>100</option></select></h1> <!> <div class="endcard hidden svelte-1f03do"><div class="inner svelte-1f03do"><h3><!></h3> <p class="endstate svelte-1f03do"><!></p> <p> </p> <button>Erneut Spielen</button></div></div></main>');function wn(e,t){Ge(t,!0);const r=localStorage.getItem("level"),l=r?parseInt(r):9;let n=G(L(l)),i=G(void 0),f=G(void 0),_=G(0),v=G(!1);function a(d){var k;b(_,L(d)),b(v,!0),(k=w(f))==null||k.classList.remove("hidden")}function u(d){var k;b(_,L(d)),b(v,!1),(k=w(f))==null||k.classList.remove("hidden")}function o(){var d;b(_,0),(d=w(f))==null||d.classList.add("hidden")}mt(()=>(w(n),localStorage.setItem("level",w(n).toString()),()=>{var d;(d=w(i))==null||d.restart()})),_n(()=>{var d;(d=w(i))==null||d.restart()});var s=yn(),c=R(s),h=T(R(c)),m=R(h);m.value=(m.__value=4)==null?"":4;var x=T(m);x.value=(x.__value=9)==null?"":9;var g=T(x);g.value=(g.__value=16)==null?"":16;var E=T(g);E.value=(E.__value=25)==null?"":25;var A=T(E);A.value=(A.__value=36)==null?"":36;var H=T(A);H.value=(H.__value=49)==null?"":49;var q=T(H);q.value=(q.__value=64)==null?"":64;var J=T(q);J.value=(J.__value=81)==null?"":81;var Q=T(J);Q.value=(Q.__value=100)==null?"":100;var $=T(c,2);Me(gn($,{win:a,lose:u,reset:o,get level(){return w(n)}}),d=>b(i,L(d)),()=>w(i));var ge=T($,2),Ce=R(ge),ze=R(Ce),Ut=R(ze);{var Yt=d=>{var k=we("Du hast Gewonnen!");Z(d,k)},Kt=d=>{var k=we("Du hast leider Verloren");Z(d,k)};it(Ut,d=>{w(v)?d(Yt):d(Kt,!1)})}var Je=T(ze,2),jt=R(Je);{var Wt=d=>{var k=we("🏆");Z(d,k)},Gt=d=>{var k=we("😢");Z(d,k)};it(jt,d=>{w(v)?d(Wt):d(Gt,!1)})}var Qe=T(Je,2),Zt=R(Qe),Xt=T(Qe,2);Xt.__click=function(...d){var k;(k=w(i).restart)==null||k.apply(this,d)},Me(ge,d=>b(f,d),()=>w(f)),De(()=>Bt(Zt,`Deine Punkte: ${w(_)??""}`)),vn(h,()=>w(n),d=>b(n,d)),Z(e,s),Ze()}Rt(["click"]);Qr(wn,{target:document.getElementById("app")});