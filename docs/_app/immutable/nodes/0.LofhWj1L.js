import{s as S,e as te,n as K,r as ne,c as X,f as le,u as re,g as se,h as ae}from"../chunks/scheduler.VRdwkSQF.js";import{S as F,i as H,e as d,s as T,c as _,a as I,n as A,f as B,d as f,k as r,B as M,g as E,h as m,C as O,x as oe,t as D,b as V,l as J,m as ie,o as R,p as W,q as U,r as q,u as Y}from"../chunks/index.-KqIrdNJ.js";import{p as ee}from"../chunks/stores.4H8WuJpf.js";import{e as Z}from"../chunks/each.6w4Ej4nR.js";import{o as ce,b as P}from"../chunks/entry.FACwlXrz.js";const ue=""+new URL("../assets/bourne-technology-logo_white.IJT7Vw9Z.svg",import.meta.url).href;function G(a,e,n){const c=a.slice();return c[5]=e[n],c}function Q(a){let e,n,c=a[5].name+"",p,o;return{c(){e=d("li"),n=d("a"),p=D(c),o=T(),this.h()},l(i){e=_(i,"LI",{class:!0});var u=I(e);n=_(u,"A",{href:!0,class:!0});var h=I(n);p=V(h,c),h.forEach(f),o=B(u),u.forEach(f),this.h()},h(){r(n,"href",a[5].href),r(n,"class","font-medium"),M(n,"active",a[1].url.pathname===a[5].href),r(e,"class","py-2 hover:text-primary [&.active]:text-primary")},m(i,u){E(i,e,u),m(e,n),m(n,p),m(e,o)},p(i,u){u&6&&M(n,"active",i[1].url.pathname===i[5].href)},d(i){i&&f(e)}}}function fe(a){let e,n,c=`<img src="${ue}" alt="Bourne Technology logo" width="200px" height="33px"/>`,p,o,i="Web Development Services",u,h,$="≡",k,v,y,x,z="х",w,N,L,b=Z(a[2]),g=[];for(let s=0;s<b.length;s+=1)g[s]=Q(G(a,b,s));return{c(){e=d("div"),n=d("a"),n.innerHTML=c,p=T(),o=d("div"),o.textContent=i,u=T(),h=d("button"),h.textContent=$,k=T(),v=d("nav"),y=d("ul"),x=d("button"),x.textContent=z,w=T();for(let s=0;s<g.length;s+=1)g[s].c();this.h()},l(s){e=_(s,"DIV",{class:!0});var t=I(e);n=_(t,"A",{href:!0,"aria-label":!0,"data-svelte-h":!0}),A(n)!=="svelte-cm77ak"&&(n.innerHTML=c),p=B(t),o=_(t,"DIV",{class:!0,"data-svelte-h":!0}),A(o)!=="svelte-sxs7xg"&&(o.textContent=i),u=B(t),h=_(t,"BUTTON",{class:!0,"data-svelte-h":!0}),A(h)!=="svelte-fr1us2"&&(h.textContent=$),t.forEach(f),k=B(s),v=_(s,"NAV",{class:!0});var l=I(v);y=_(l,"UL",{class:!0});var C=I(y);x=_(C,"BUTTON",{class:!0,"data-svelte-h":!0}),A(x)!=="svelte-12eedcc"&&(x.textContent=z),w=B(C);for(let j=0;j<g.length;j+=1)g[j].l(C);C.forEach(f),l.forEach(f),this.h()},h(){r(n,"href","/"),r(n,"aria-label","Bourne Technology home page"),r(o,"class","hidden text-center font-bold uppercase md:block"),r(h,"class","p-2 text-primary text-2xl scale-x-150 hover:text-white"),r(e,"class","fixed top-0 z-40 w-full flex items-center justify-between bg-neutral-dark p-2 border-b-2 border-primary"),r(x,"class","text-primary font-bold text-2xl justify-self-end hover:text-white"),r(y,"class","w-full grid grid-cols-1"),r(v,"class","transition-[width] transition-700 hidden z-50 w-0 h-0 fixed top-0 right-0 p-4 bg-neutral-dark [&.open]:block [&.open]:w-full [&.open]:h-full [&.open]:md:w-[300px] [&.open]:md:shadow-[-3px_0_5px_rgba(0,0,0,0.7)]"),M(v,"open",a[0])},m(s,t){E(s,e,t),m(e,n),m(e,p),m(e,o),m(e,u),m(e,h),E(s,k,t),E(s,v,t),m(v,y),m(y,x),m(y,w);for(let l=0;l<g.length;l+=1)g[l]&&g[l].m(y,null);N||(L=[O(h,"click",a[3]),O(x,"click",a[3]),te(he.call(null,v)),O(v,"click_outside",a[4])],N=!0)},p(s,[t]){if(t&6){b=Z(s[2]);let l;for(l=0;l<b.length;l+=1){const C=G(s,b,l);g[l]?g[l].p(C,t):(g[l]=Q(C),g[l].c(),g[l].m(y,null))}for(;l<g.length;l+=1)g[l].d(1);g.length=b.length}t&1&&M(v,"open",s[0])},i:K,o:K,d(s){s&&(f(e),f(k),f(v)),oe(g,s),N=!1,ne(L)}}}function he(a){const e=n=>{a&&!a.contains(n.target)&&!n.defaultPrevented&&a.dispatchEvent(new CustomEvent("click_outside",a))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function me(a,e,n){let c;X(a,ee,h=>n(1,c=h));const p=[{href:`${P}/`,name:"About"},{href:`${P}/projects`,name:"Projects"},{href:`${P}/contact`,name:"Contact"}];let o=!1;function i(){n(0,o=!o)}function u(){n(0,o=!1)}return ce(()=>{u()}),[o,c,p,i,u]}class pe extends F{constructor(e){super(),H(this,e,me,fe,S,{})}}function de(a){let e,n,c,p,o,i;return{c(){e=d("div"),n=d("div"),c=d("p"),p=D("© "),o=D(a[0]),i=D(" Bourne Technology, LLC."),this.h()},l(u){e=_(u,"DIV",{class:!0});var h=I(e);n=_(h,"DIV",{class:!0});var $=I(n);c=_($,"P",{class:!0});var k=I(c);p=V(k,"© "),o=V(k,a[0]),i=V(k," Bourne Technology, LLC."),k.forEach(f),$.forEach(f),h.forEach(f),this.h()},h(){r(c,"class","text-center text-xs"),r(n,"class","p-6 max-w-screen-xl mx-auto"),r(e,"class","w-full bg-neutral-dark")},m(u,h){E(u,e,h),m(e,n),m(n,c),m(c,p),m(c,o),m(c,i)},p:K,i:K,o:K,d(u){u&&f(e)}}}function _e(a){return[new Date().getFullYear()]}class ge extends F{constructor(e){super(),H(this,e,_e,de,S,{})}}function ve(a){let e,n,c,p,o,i,u,h,$,k,v,y,x,z,w,N,L,b;document.title=e=`${a[0].data.title} - Bourne Technology LLC`,x=new pe({});const g=a[2].default,s=le(g,a,a[1],null);return L=new ge({}),{c(){n=d("meta"),p=d("link"),o=d("link"),i=d("link"),u=d("link"),h=d("link"),$=d("link"),k=d("link"),v=d("link"),y=T(),J(x.$$.fragment),z=T(),w=d("main"),s&&s.c(),N=T(),J(L.$$.fragment),this.h()},l(t){const l=ie("svelte-15uumaq",document.head);n=_(l,"META",{name:!0,content:!0}),p=_(l,"LINK",{rel:!0,href:!0}),o=_(l,"LINK",{rel:!0,href:!0,crossorigin:!0}),i=_(l,"LINK",{href:!0,rel:!0}),u=_(l,"LINK",{rel:!0,sizes:!0,href:!0}),h=_(l,"LINK",{rel:!0,type:!0,sizes:!0,href:!0}),$=_(l,"LINK",{rel:!0,type:!0,sizes:!0,href:!0}),k=_(l,"LINK",{rel:!0,href:!0}),v=_(l,"LINK",{rel:!0,href:!0}),l.forEach(f),y=B(t),R(x.$$.fragment,t),z=B(t),w=_(t,"MAIN",{class:!0});var C=I(w);s&&s.l(C),C.forEach(f),N=B(t),R(L.$$.fragment,t),this.h()},h(){r(n,"name","description"),r(n,"content",c=a[0].data.description),r(p,"rel","preconnect"),r(p,"href","https://fonts.googleapis.com"),r(o,"rel","preconnect"),r(o,"href","https://fonts.gstatic.com"),r(o,"crossorigin",""),r(i,"href","https://fonts.googleapis.com/css2?family=Audiowide&family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap"),r(i,"rel","stylesheet"),r(u,"rel","apple-touch-icon"),r(u,"sizes","180x180"),r(u,"href","/apple-touch-icon.png"),r(h,"rel","icon"),r(h,"type","image/png"),r(h,"sizes","32x32"),r(h,"href","/favicon-32x32.png"),r($,"rel","icon"),r($,"type","image/png"),r($,"sizes","16x16"),r($,"href","/favicon-16x16.png"),r(k,"rel","shortcut icon"),r(k,"href","/favicon.ico"),r(v,"rel","manifest"),r(v,"href","/site.webmanifest"),r(w,"class","pt-[66px] min-h-[calc(100vh-64px)]")},m(t,l){m(document.head,n),m(document.head,p),m(document.head,o),m(document.head,i),m(document.head,u),m(document.head,h),m(document.head,$),m(document.head,k),m(document.head,v),E(t,y,l),W(x,t,l),E(t,z,l),E(t,w,l),s&&s.m(w,null),E(t,N,l),W(L,t,l),b=!0},p(t,[l]){(!b||l&1)&&e!==(e=`${t[0].data.title} - Bourne Technology LLC`)&&(document.title=e),(!b||l&1&&c!==(c=t[0].data.description))&&r(n,"content",c),s&&s.p&&(!b||l&2)&&re(s,g,t,t[1],b?ae(g,t[1],l,null):se(t[1]),null)},i(t){b||(U(x.$$.fragment,t),U(s,t),U(L.$$.fragment,t),b=!0)},o(t){q(x.$$.fragment,t),q(s,t),q(L.$$.fragment,t),b=!1},d(t){t&&(f(y),f(z),f(w),f(N)),f(n),f(p),f(o),f(i),f(u),f(h),f($),f(k),f(v),Y(x,t),s&&s.d(t),Y(L,t)}}}function ke(a,e,n){let c;X(a,ee,i=>n(0,c=i));let{$$slots:p={},$$scope:o}=e;return a.$$set=i=>{"$$scope"in i&&n(1,o=i.$$scope)},[c,o,p]}class Le extends F{constructor(e){super(),H(this,e,ke,ve,S,{})}}export{Le as component};
