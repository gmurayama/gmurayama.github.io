(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(n,t,e){n.exports=e(80)},54:function(n,t,e){},79:function(n,t,e){},80:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),i=e(11),o=e.n(i),c=e(15),u=e(17),s=e(16),l=e(18),m=e(1),f=e(2),d=e(12),p=e(9);function b(){var n=Object(m.a)(["\n  margin: 0 0 5px;\n  padding: 0;\n"]);return b=function(){return n},n}function g(){var n=Object(m.a)(["\n  margin: 30px 0;\n  p {\n    margin: 0 0 5px;\n  }\n"]);return g=function(){return n},n}var h=f.b.article(g()),v=f.b.h2(b()),x=function(){return r.a.createElement(h,null,r.a.createElement(v,null,"About"),r.a.createElement("p",null,"I'm a Software Developer currently working mainly with .NET tecnologies, focused in web based solutions."))};function E(){var n=Object(m.a)(["",""]);return E=function(){return n},n}function j(){var n=Object(m.a)(["\n    @media screen and "," {\n      ","\n    }\n  "]);return j=function(){return n},n}function O(){var n=Object(m.a)(["",""]);return O=function(){return n},n}var w=function(n){return C(n,{maxWidth:599})},k=function(n){return C(n,{minWidth:1024})},y=function(n){return C(n,{minWidth:600})},z=function(n){return Object(f.a)(O(),n)},C=function(n,t){var e=t.minWidth,a=t.maxWidth,r=[void 0!==e?"(min-width: ".concat(e/16,"em)"):void 0,void 0!==a?"(max-width: ".concat(a/16,"em)"):void 0].filter(function(n){return void 0!==n}).join("and");return Object(f.a)(j(),r,Object(f.a)(E(),n))};function N(){var n=Object(m.a)(["\n  display: grid;\n  grid-gap: 15px;\n  max-width: 80em;\n  margin: 0 auto;\n  width: 100%;\n  padding: 15px;\n  box-sizing: border-box;\n\n  ","\n\n  ","\n\n  ","\n"]);return N=function(){return n},n}var D=f.b.div(N(),function(n){return n.small&&z(W(n.small))},function(n){return n.medium&&y(W(n.medium))},function(n){return n.large&&k(W(n.large))}),W=function(n){switch(typeof n){case"string":return"grid-template-columns: ".concat(n);case"number":return"grid-template-columns: repeat(".concat(n,", 1fr);")}},P=e(13),S=e(81),M=function(n){var t=n.children,e=Object(P.a)(n,["children"]);return r.a.createElement(r.a.Fragment,null,t.map(function(n,t){return r.a.createElement(S.a,Object.assign({key:t},e),n)}))};e(54);function T(){var n=Object(m.a)(["\n  display: none;\n  opacity: 0;\n\n  &.","-enter {\n    display: block;\n  }\n\n  &.","-enter-done {\n    opacity: 1;\n    display: block;\n    transition: opacity "," ease-in;\n  }\n\n  &.","-exit {\n    opacity: 1;\n  }\n\n  &.","-exit-done {\n    display: none;\n    opacity: 0;\n    transition: opacity "," ease-out;\n  }\n"]);return T=function(){return n},n}var A=f.b.div(T(),function(n){return F(n.classNames)},function(n){return F(n.classNames)},function(n){return n.transitionDuration?n.transitionDuration:"200ms"},function(n){return F(n.classNames)},function(n){return F(n.classNames)},function(n){return n.transitionDuration?n.transitionDuration:"100ms"}),B=function(n){var t=n.transitionDuration,e=n.classNames,a=Object(P.a)(n,["transitionDuration","classNames"]);return r.a.createElement(S.a,Object.assign({},a,{classNames:e}),r.a.createElement(A,{transitionDuration:t,classNames:e},a.children))},F=function(n){return n||"fade"};function I(){var n=Object(m.a)(["\n  margin: 0 0 5px;\n  padding: 0;\n"]);return I=function(){return n},n}function J(){var n=Object(m.a)(["\n  margin: 30px 0;\n  p {\n    margin: 0 0 5px;\n  }\n"]);return J=function(){return n},n}var X=f.b.article(J()),_=f.b.h2(I()),G=function(){return r.a.createElement(X,null,r.a.createElement(_,null,"Contact"),r.a.createElement("p",null,"Feel free to contact me through e-mail (",r.a.createElement("a",{href:"mailto:gmurayama@outlook.com"},"gmurayama@outlook.com"),") or any other social media listed aside!"))},$=e(22),q=e.n($),H=e(37),K=e(38),L=e.n(K);function Q(){var n=Object(m.a)(["\n  border: 1px solid #CCC;\n  border-radius: 3px;\n"]);return Q=function(){return n},n}var R=f.b.section(Q());function U(){var n=Object(m.a)(["\n  padding: 15px;\n"]);return U=function(){return n},n}function V(){var n=Object(m.a)(["\n  margin-top: 0;\n"]);return V=function(){return n},n}function Y(){var n=Object(m.a)(["\n  margin-top: 0;\n  color: #686868;\n  font-size: 14px;\n"]);return Y=function(){return n},n}var Z=f.b.h4(Y()),nn=f.b.h3(V()),tn=f.b.header(U()),en=function(n){var t=n.title,e=n.subtitle,a=Object(P.a)(n,["title","subtitle"]);return r.a.createElement(tn,a,t&&r.a.createElement(nn,null,t),e&&r.a.createElement(Z,null,e),a.children)};function an(){var n=Object(m.a)(["\n  padding: 0;\n  margin: auto;\n  max-width: 100%;\n"]);return an=function(){return n},n}f.b.figure(an());function rn(){var n=Object(m.a)(["\n  box-sizing: border-box;\n  padding: 15px;\n"]);return rn=function(){return n},n}f.b.div(rn());function on(){var n=Object(m.a)(["\n  stroke-dasharray: 1, 200;\n  stroke-dashoffset: 0;\n  animation: "," 1.5s ease-in-out infinite;\n  stroke: ",";\n  stroke-linecap: round;\n"]);return on=function(){return n},n}function cn(){var n=Object(m.a)(["\n  animation: "," 2s linear infinite;\n  height: 100%;\n  transform-origin: center center;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n"]);return cn=function(){return n},n}function un(){var n=Object(m.a)(["\n  position: relative;\n  margin: 0 auto;\n  width: 25px;\n  &:before {\n    content: '';\n    display: block;\n    padding-top: 100%;\n  }\n"]);return un=function(){return n},n}function sn(){var n=Object(m.a)(["\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return sn=function(){return n},n}function ln(){var n=Object(m.a)(["\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n"]);return ln=function(){return n},n}var mn=Object(f.c)(ln()),fn=Object(f.c)(sn()),dn=f.b.div(un()),pn=f.b.svg(cn(),fn),bn=f.b.circle(on(),mn,function(n){return n.color}),gn=function(n){var t=n.color,e=void 0===t?"#2274A5":t;return a.createElement(dn,null,a.createElement(pn,{viewBox:"25 25 50 50"},a.createElement(bn,{color:e,cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"5",strokeMiterlimit:"10"})))};function hn(){var n=Object(m.a)(["\n  padding: 0;\n"]);return hn=function(){return n},n}function vn(){var n=Object(m.a)(["\n  margin-bottom: 5px;\n"]);return vn=function(){return n},n}function xn(){var n=Object(m.a)(["\n  margin: 0 0 15px;\n  padding: 0;\n"]);return xn=function(){return n},n}function En(){var n=Object(m.a)(["\n  margin: 30px 0;\n  p {\n    margin: 0 0 5px;\n  }\n"]);return En=function(){return n},n}var jn=f.b.article(En()),On=f.b.h2(xn()),wn=Object(f.b)(nn)(vn()),kn=Object(f.b)(D)(hn()),yn=function(n){function t(n){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this,n))).componentDidMount=Object(H.a)(q.a.mark(function n(){var t,a;return q.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L.a.get("https://api.github.com/users/gmurayama/repos");case 2:t=n.sent,a=t.data,e.setState({repositories:a});case 5:case"end":return n.stop()}},n)})),e.render=function(){return r.a.createElement(jn,null,r.a.createElement(On,null,"Projects"),0===e.state.repositories.length&&r.a.createElement(gn,null),r.a.createElement(kn,{medium:"repeat(2, 1fr)",large:"repeat(3, 1fr)"},e.state.repositories.map(function(n){return r.a.createElement(R,{key:n.id},r.a.createElement(en,null,r.a.createElement(wn,null,n.name),r.a.createElement(Z,{as:"p"},n.description)))})))},e.state={repositories:[]},e}return Object(l.a)(t,n),t}(r.a.Component);function zn(){var n=Object(m.a)(["\n  border-right: 1px solid #d1d5de;\n  padding: 0 10px 0 0;\n  margin: 0 6px 0 0;\n\n  & li span {\n    font-size: 20px;\n    vertical-align: text-bottom;\n  }\n\n  ","\n"]);return zn=function(){return n},n}var Cn=f.b.ul(zn(),w("\n    border-right: none;\n  "));function Nn(){var n=Object(m.a)(["\n  text-align: right;\n\n  & ul {\n    list-style: none;\n    display: inline-block;\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n\n  & ul li {\n    padding: 12px;\n  }\n\n  ","\n"]);return Nn=function(){return n},n}var Dn=f.b.nav(Nn(),w("\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    text-align: center;\n\n    & ul li {\n      padding: 5px;\n      display: inline;\n    }\n  "));function Wn(){var n=Object(m.a)(["\n    position: relative;\n\n    &:hover:after { transform: scaleX(1); }\n\n    &::after {\n      position: absolute;\n      display: block;\n      bottom: -3px;\n      left: 0;\n      right: -1px;\n      content: '';\n      border-bottom: solid 2px #2274a5;\n      transform: scaleX(0);\n      transition: transform 200ms ease-in-out;\n      transform-origin: 0% 50%;\n    }\n"]);return Wn=function(){return n},n}var Pn=Object(f.b)(d.b)(Wn());function Sn(){var n=Object(m.a)(["\n  text-align: left;\n  padding: 0;\n  margin: 0;\n"]);return Sn=function(){return n},n}var Mn=f.b.ul(Sn());function Tn(){var n=Object(m.a)(["\n  width: 100%;\n  position: relative;\n  padding-top: 15px;\n  padding-bottom: 15px;\n"]);return Tn=function(){return n},n}function An(){var n=Object(m.a)(["\n  font-size: 26px;\n  font-weight: 300;\n  margin: 0 0 4px 1px;\n  position: relative;\n  padding-bottom: 6px;\n  transition: font-size 200ms ease-in-out;\n\n  &.change-font-size-enter-done {\n    font-size: 20px;\n    transition: font-size 180ms ease-in-out;\n  }\n\n  &.change-font-size-exit {\n    font-size: 20px;\n  }\n\n  &.change-font-size-exit-done {\n    font-size: 26px;\n    transition: font-size 180ms ease-in-out;\n  }\n\n  &::after {\n    content: '';\n    border-bottom: 1px solid #d1d5de;\n    width: 520px;\n    max-width: 100%;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n  }\n"]);return An=function(){return n},n}function Bn(){var n=Object(m.a)(["\n  font-weight: 300;\n  margin: 0 0 6px;\n  font-size: 2.75rem;\n\n  &.change-font-size-enter-done {\n    font-size: 1.75rem;\n    transition: font-size 200ms ease-in-out;\n  }\n\n  &.change-font-size-exit {\n    font-size: 1.75rem;\n  }\n\n  &.change-font-size-exit-done {\n    font-size: 2.75rem;\n    transition: font-size 200ms ease-in-out;\n  }\n"]);return Bn=function(){return n},n}function Fn(){var n=Object(m.a)(["\n  ","\n\n  ","\n"]);return Fn=function(){return n},n}var In=Object(f.b)(D)(Fn(),z("\n    margin-top: 25%;\n  "),y("\n    margin-top: 12.5%;\n  ")),Jn=f.b.h1(Bn()),Xn=f.b.h2(An()),_n=f.b.article(Tn()),Gn=function(n){function t(n){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this,n))).componentDidMount=function(){var n="/"===e.props.location.pathname;e.setState({showContent:!n,resizePresentation:!n})},e.changeContent=function(n){var t=n.target,a=e.state.showContent&&e.state.lastEventTargetClicked===t;e.setState(function(n){return{showContent:!n.showContent,lastEventTargetClicked:t}},function(){e.setState({showContent:!a,resizePresentation:!a})})},e.render=function(){return r.a.createElement(In,{small:1,medium:"10fr 3fr"},r.a.createElement(d.a,{basename:""},r.a.createElement(_n,null,r.a.createElement(M,{in:e.state.resizePresentation,timeout:0,classNames:"change-font-size"},r.a.createElement(Jn,null,"Gustavo Murayama"),r.a.createElement(Xn,null,"Software Developer")),r.a.createElement(B,{in:e.state.showContent,timeout:{enter:100,exit:0},classNames:"fade"},r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/about",component:x}),r.a.createElement(p.a,{path:"/contact",component:G}),r.a.createElement(p.a,{path:"/projects",component:yn})))),r.a.createElement(Dn,null,r.a.createElement(Cn,null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/gmurayama",target:"_blank"},r.a.createElement("span",{className:"icon-linkedin"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/gmurayama",target:"_blank"},r.a.createElement("span",{className:"icon-github"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:gmurayama@outlook.com"},r.a.createElement("span",{className:"icon-email"})))),r.a.createElement(Mn,null,r.a.createElement("li",null,r.a.createElement(Pn,{to:"/about",onClick:e.changeContent},"About me")),r.a.createElement("li",null,r.a.createElement(Pn,{to:"/projects",onClick:e.changeContent},"Projects")),r.a.createElement("li",null,r.a.createElement(Pn,{to:"/contact",onClick:e.changeContent},"Contact"))))))},e.state={showContent:!1,resizePresentation:!1,lastEventTargetClicked:void 0},e}return Object(l.a)(t,n),t}(r.a.Component);e(79),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(d.a,null,r.a.createElement(p.a,{path:"/",component:Gn})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.f9cb830f.chunk.js.map