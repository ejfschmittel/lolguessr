(this.webpackJsonplolguessr=this.webpackJsonplolguessr||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(11),i=n.n(r),s=n(5),o=(n(17),n(0)),u=function(e){var t=e.onBackToMenu;return Object(o.jsxs)("header",{className:"header-bar",children:[Object(o.jsx)("div",{onClick:t,children:"Menu"}),Object(o.jsx)("h1",{className:"header-bar__title",children:"Title"}),Object(o.jsx)("div",{children:"Settings"})]})},l=(n(19),{GUESS_CHAMPION_BY_ABILITY:{key:"champion_by_ability",title:"Guess the Champion By Ability",image:""},GUESS_ABILITY_NAME:{key:"ability_name",title:"Guess the Ability Name",image:""},GUESS_THE_ODD_ONE_OUT:{key:"odd_one_out",title:"Guess the odd one out",image:""}}),b=function(e){var t=e.game,n=e.onClick;return Object(o.jsxs)("div",{className:"menu-tile",onClick:function(){return n(t.key)},children:[Object(o.jsx)("img",{src:"",className:"menu-tile__image"}),Object(o.jsx)("div",{className:"menu-tile__title",children:t.title})]})},j=function(e){var t=e.onGameSelect;return Object(o.jsx)("div",{className:"game-menu",children:Object.keys(l).map((function(e){return Object(o.jsx)(b,{game:l[e],onClick:t,gameKey:e},e)}))})},d=n(6),f=n(1),h=n.n(f),O=n(4),p=n(9),m=n(3),v=n(12),x={},y="/dragontail-11.10.1/11.10.1",g="/lolguessr"+y+"/img",k={CHAMPIONS:"champion.json"},w=function(){var e=Object(O.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=C(t)){e.next=7;break}return console.log("loading data..."),e.next=5,N(t);case 5:n=e.sent,S(t,n);case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=(Object.keys(k).map((function(e){return k[e]})),function(){var e=Object(O.a)(h.a.mark((function e(t){var n,a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/lolguessr/dragontail-11.10.1/11.10.1/data/en_US/"+t,e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),S=function(e,t){for(var n=e.split("/"),a=x,c=0;c<n.length-1;c++){var r=n[c];r in a||(a[r]={}),a=a[r]}a[n[n.length-1]]=t},C=function(e){return e.split("/").reduce((function(e,t){return e&&t in e?e[t]:null}),x)},_=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(k.CHAMPIONS);case 2:return t=e.sent,e.abrupt("return",Object.keys(t.data).map((function(e){return t.data[e].id})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(k.CHAMPIONS);case 2:return t=e.sent,e.abrupt("return",Object.keys(t.data).map((function(e){return t.data[e].name})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:return t=e.sent,e.abrupt("return",U(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(O.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("champion/".concat(t,".json"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(O.a)(h.a.mark((function e(){var t,n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:return t=e.sent,n=G(t),a=U(n),e.abrupt("return",{champion:t,ability:a});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(O.a)(h.a.mark((function e(){var t,n,a,c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,n=null;case 4:return e.next=6,B();case 6:n=e.sent;case 7:if(t.id==n.id){e.next=4;break}case 8:return a=G(t),c=G(n),a.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{odd:!1})})),r=L(a.length),a[r]=Object(m.a)(Object(m.a)({},c[r]),{},{odd:!0}),e.abrupt("return",{primaryChampion:t,secondaryChampion:n,abilities:a});case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(O.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return t=e.sent,e.next=5,M(t);case 5:return n=e.sent,e.abrupt("return",n.data[t]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(e){var t=["Q","W","E","R","Passive"],n=[].concat(Object(v.a)(e.spells),[e.passive]);return n=n.map((function(e,n){return Object(m.a)(Object(m.a)({},e),{},{key:t[n]})})),console.log("get abilities"),console.log(n),n},L=function(e){return Math.floor(Math.random()*e)},U=function(e){return e[Math.floor(Math.random()*e.length)]},H=function(e){return"".concat(g,"/").concat(e.group,"/").concat(e.full)},P=function(e){var t=e.id,n=e.list,r=Object(d.a)(e,["id","list"]),i=Object(a.useState)([]),u=Object(s.a)(i,2),l=u[0],b=u[1];Object(a.useEffect)((function(){j()}),[]);var j=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)("input",Object(m.a)({list:n,id:t},r)),Object(o.jsx)("datalist",{id:n,children:l.map((function(e){return Object(o.jsx)("option",{value:e},t+e)}))})]})},F=(n(21),["abilityKey","abilityName","championFirstLetter"]),Y={championFirstLetter:!1,abilityKey:!1,abilityName:!1,solved:!1,solvedByUser:!1},D=function(e){var t=e.image,n=Object(d.a)(e,["image"]),a=t?H(t):null;return Object(o.jsx)("img",Object(m.a)({src:a},n))},K=function(){var e,t=Object(a.useState)(0),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(!0),u=Object(s.a)(i,2),l=(u[0],u[1]),b=Object(a.useState)(""),j=Object(s.a)(b,2),d=j[0],f=j[1],v=Object(a.useState)("test"),x=Object(s.a)(v,2),y=x[0],g=x[1],k=Object(a.useState)({championID:null,champion:null,ability:null}),w=Object(s.a)(k,2),N=w[0],S=w[1],C=Object(a.useState)(Y),_=Object(s.a)(C,2),E=_[0],I=_[1];Object(a.useEffect)((function(){G()}),[]),Object(a.useEffect)((function(){M()}),[E]);var M=function(){var e=A()?B():null;g(e)},A=function(){var e=!1;return Object.keys(E).forEach((function(t){E[t]&&(e=!0)})),e},B=function(){console.log(E);var e=E.solvedByUser?"Correct: ":"",t=E.abilityKey||E.solved?N.ability.key:"",n=E.abilityName||E.solved?', called "'.concat(N.ability.name,'",'):"",a=E.solved?N.champion.name:E.championFirstLetter?"".concat(N.champion.name.charAt(0),"..."):"which Champion?";return"".concat(e," This ability").concat(n," is the ").concat(t," ability of ").concat(a)},G=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("load new"),l(!0),e.next=4,T();case 4:t=e.sent,console.log(t),g(null),r(0),I(Y),l(!1),S(t);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Guess the Champion this ability belongs to"}),Object(o.jsx)("div",{className:""}),Object(o.jsx)("div",{className:"icon icon--hero",children:Object(o.jsx)(D,{image:null===N||void 0===N||null===(e=N.ability)||void 0===e?void 0:e.image,className:""})}),Object(o.jsx)("div",{className:"hintText",children:y}),Object(o.jsx)("div",{children:Object(o.jsx)(P,{id:"test",list:"champions",placeholder:"Champion...",onChange:function(e){var t=e.target.value;if(f(t),t.toLowerCase()==N.champion.name.toLowerCase()){var n=N.ability.key,a="Correct: This ability is the ".concat(n," ability of ").concat(N.champion.name,".");g(a)}},value:d})}),Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsx)("button",{onClick:function(){var e=F[c];I(Object(m.a)(Object(m.a)({},E),{},Object(p.a)({},e,!0))),r(c+1)},children:"Hint"}),Object(o.jsx)("button",{onClick:function(){I(Object(m.a)(Object(m.a)({},E),{},{solved:!0}))},children:"Solve"}),Object(o.jsx)("button",{onClick:function(){G(),f("")},children:"Next"})]})]})})},J=function(e){var t=e.image,n=Object(d.a)(e,["image"]),a=t?H(t):null;return Object(o.jsx)("img",Object(m.a)({src:a},n))},W=(n(22),function(e){var t=e.ability;e.showKey,e.showName,e.onClick;return Object(o.jsxs)("div",{className:"ability-icon",children:[Object(o.jsx)("div",{children:Object(o.jsx)(J,{image:t.image})}),Object(o.jsx)("div",{children:t.key}),Object(o.jsx)("div",{children:t.name})]})}),Q=function(){var e,t=Object(a.useState)(!0),n=Object(s.a)(t,2),c=(n[0],n[1]),r=Object(a.useState)(null),i=Object(s.a)(r,2),u=i[0],l=i[1];Object(a.useEffect)((function(){b()}),[]);var b=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,A();case 3:t=e.sent,l(t),c(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Guess the Odd one "}),Object(o.jsx)("div",{className:"champion-image",children:Object(o.jsx)(J,{image:null===u||void 0===u||null===(e=u.primaryChampion)||void 0===e?void 0:e.image})}),Object(o.jsxs)("p",{children:["Which of these abilities does not belong to ",(null===u||void 0===u?void 0:u.primaryChampion)?u.primaryChampion.id:"...Loading","?"]}),Object(o.jsx)("div",{className:"abilities-display",children:(null===u||void 0===u?void 0:u.abilities)&&u.abilities.map((function(e){return Object(o.jsx)(W,{ability:e})}))}),Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsx)("button",{children:"Hint"}),Object(o.jsx)("button",{children:"Solve"}),Object(o.jsx)("button",{children:"Next"})]})]})})};n(23);var R=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1],r=function(e){console.log("on game select"),console.log(e),c(e)},i=Object(a.useMemo)((function(){switch(console.log(n),console.log(l.GUESS_CHAMPION_BY_ABILITY),n){case l.GUESS_CHAMPION_BY_ABILITY.key:return Object(o.jsx)(K,{});case l.GUESS_THE_ODD_ONE_OUT.key:return Object(o.jsx)(Q,{});default:return Object(o.jsx)(j,{onGameSelect:r})}}),[n]);return console.log(i),Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{class:"app-container",children:[Object(o.jsx)(u,{onBackToMenu:function(){c(null)}}),Object(o.jsx)("div",{className:"game-container",children:i})]})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(R,{})}),document.getElementById("root")),q()}},[[24,1,2]]]);
//# sourceMappingURL=main.df767119.chunk.js.map