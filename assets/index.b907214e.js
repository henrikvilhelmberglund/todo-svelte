(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function a(){}function k(e){return e()}function q(){return Object.create(null)}function w(e){e.forEach(k)}function B(e){return typeof e=="function"}function I(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let $;function G(e,t){return $||($=document.createElement("a")),$.href=t,e===$.href}function J(e){return Object.keys(e).length===0}function h(e,t){e.appendChild(t)}function M(e,t,n){e.insertBefore(t,n||null)}function O(e){e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function Q(e){return document.createTextNode(e)}function v(){return Q(" ")}function E(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function R(e){return Array.from(e.childNodes)}let L;function _(e){L=e}const m=[],P=[],x=[],T=[],V=Promise.resolve();let C=!1;function W(){C||(C=!0,V.then(F))}function N(e){x.push(e)}const A=new Set;let y=0;function F(){const e=L;do{for(;y<m.length;){const t=m[y];y++,_(t),X(t.$$)}for(_(null),m.length=0,y=0;P.length;)P.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];A.has(n)||(A.add(n),n())}x.length=0}while(m.length);for(;T.length;)T.pop()();C=!1,A.clear(),_(e)}function X(e){if(e.fragment!==null){e.update(),w(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}const b=new Set;let Y;function H(e,t){e&&e.i&&(b.delete(e),e.i(t))}function Z(e,t,n,i){if(e&&e.o){if(b.has(e))return;b.add(e),Y.c.push(()=>{b.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ee(e){e&&e.c()}function K(e,t,n,i){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),i||N(()=>{const c=e.$$.on_mount.map(k).filter(B);e.$$.on_destroy?e.$$.on_destroy.push(...c):w(c),e.$$.on_mount=[]}),s.forEach(N)}function U(e,t){const n=e.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function te(e,t){e.$$.dirty[0]===-1&&(m.push(e),W(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function z(e,t,n,i,r,s,c,d=[-1]){const l=L;_(e);const o=e.$$={fragment:null,ctx:[],props:s,update:a,not_equal:r,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:q(),dirty:d,skip_bound:!1,root:t.target||l.$$.root};c&&c(o.root);let f=!1;if(o.ctx=n?n(e,t.props||{},(u,g,...j)=>{const S=j.length?j[0]:g;return o.ctx&&r(o.ctx[u],o.ctx[u]=S)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](S),f&&te(e,u)),g}):[],o.update(),f=!0,w(o.before_update),o.fragment=i?i(o.ctx):!1,t.target){if(t.hydrate){const u=R(t.target);o.fragment&&o.fragment.l(u),u.forEach(O)}else o.fragment&&o.fragment.c();t.intro&&H(e.$$.fragment),K(e,t.target,t.anchor,t.customElement),F()}_(l)}class D{$destroy(){U(this,1),this.$destroy=a}$on(t,n){if(!B(n))return a;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!J(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ne(e){let t;return{c(){t=p("p"),t.textContent="This is another paragraph."},m(n,i){M(n,t,i)},p:a,i:a,o:a,d(n){n&&O(t)}}}class re extends D{constructor(t){super(),z(this,t,null,ne,I,{})}}function oe(e){let t,n,i,r,s,c,d,l,o,f;return o=new re({}),{c(){t=p("main"),n=p("h1"),n.textContent=`Hello ${ie.toUpperCase()}!!!`,i=v(),r=p("img"),c=v(),d=p("p"),d.textContent="This is a paragraph.",l=v(),ee(o.$$.fragment),G(r.src,s=se)||E(r,"src",s),E(r,"alt","a man dances"),E(d,"class","svelte-ynw52d")},m(u,g){M(u,t,g),h(t,n),h(t,i),h(t,r),h(t,c),h(t,d),h(t,l),K(o,t,null),f=!0},p:a,i(u){f||(H(o.$$.fragment,u),f=!0)},o(u){Z(o.$$.fragment,u),f=!1},d(u){u&&O(t),U(o)}}}let ie="world",se="/src/image.gif";class ue extends D{constructor(t){super(),z(this,t,null,oe,I,{})}}new ue({target:document.getElementById("app")});
