(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{21:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var i,c,r,o,a,s,u,b=t(0),l=t.n(b),d=t(13),f=t.n(d),j=(t(21),t(5)),O=t(2),x=t(3),h=t(4),p=t(9),g=t(1),m=x.b.div(i||(i=Object(O.a)(["\n    width: 50px;\n    height: 50px;\n    border: 1px black solid;\n    border-radius: 5px;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 20px;\n    font-weight: 600;\n    ","\n"])),Object(x.a)(c||(c=Object(O.a)(["\n        background-color: ",";\n    "])),(function(n){return n.isVisible?"#dff7f5":"#0092e0"}))),v=function(n){var e=n.isWin,t=n.isMine,i=n.isVisible,c=n.numOfNeighbourMines,r=n.isGameStart,o=n.onStartGame,a=n.onCloseGame,s=n.x,u=n.y,b=n.onExpandVisibleMine;return Object(g.jsx)(m,{isVisible:i,onClick:function(){return function(n,e,t,i,c,r,o){t?i?r():o(n,e):c(n,e)}(s,u,r,t,o,a,b)},children:Object(g.jsx)(g.Fragment,{children:(e||i)&&(t?Object(g.jsx)("div",{children:"\ud83d\udca3"}):Object(g.jsx)("div",{children:0!==c?c:""}))})})},M=x.b.div(r||(r=Object(O.a)(["\n  display: inline-block;\n  padding: 10px 15px;\n  border-radius: 15px;\n  background-color: #00304c;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n"]))),y=function(n){return Object(g.jsx)(M,Object(h.a)(Object(h.a)({},n),{},{children:n.children}))},k=x.b.div(o||(o=Object(O.a)(["\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 1000;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    .background {\n        width: 100vw;\n        height: 100vh;\n        opacity: 0.6;\n        background-color: black;\n    }\n    .body {\n        overflow: hidden;\n        position: absolute;\n        padding: 20px;\n        background-color: white;\n        border-radius: 10px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    .text {\n        font-size: 24px;\n        font-weight: 600;\n        margin: 20px;\n    }\n"]))),w=function(n){var e=n.text,t=n.okText,i=n.onClick,c=n.isVisible;return Object(g.jsx)(g.Fragment,{children:c&&Object(g.jsxs)(k,{children:[Object(g.jsx)("div",{className:"background"}),Object(g.jsxs)("div",{className:"body",children:[Object(g.jsx)("p",{className:"text",children:e}),Object(g.jsx)(y,{onClick:i,children:t||"OK"})]})]})})},z=x.b.div(a||(a=Object(O.a)(["\n    display: grid;\n    max-width: calc("," * 55px);\n    ","\n"])),(function(n){return n.sizeOfBoard}),Object(x.a)(s||(s=Object(O.a)(["\n        grid-template-columns: repeat(",", 1fr);\n        grid-template-rows: repeat(",", 1fr);\n        grid-gap: 5px;\n    "])),(function(n){return n.sizeOfBoard}),(function(n){return n.sizeOfBoard}))),S=function(n){var e=n.sizeOfBoard,t=n.numOfMines,i=Object(b.useState)(!1),c=Object(j.a)(i,2),r=c[0],o=c[1],a=Object(b.useState)([[]]),s=Object(j.a)(a,2),u=s[0],l=s[1],d=Object(b.useState)(!1),f=Object(j.a)(d,2),O=f[0],x=f[1],m=t===Math.pow(e,2)-u.reduce((function(n,e){return n+e.reduce((function(n,e){return n+(e.isVisible?1:0)}),0)}),0),M=m?"You win!!":O?"You clicked the mine!!":"",y=m?"Play again":O?"OK":"",k=Object(b.useCallback)((function(){for(var n=[],t=0;t<e;t++){for(var i=[],c=0;c<e;c++)i.push({x:c,y:t,isMine:!1,isVisible:!1});n.push(i)}l(n),x(!1),o(!1)}),[e]),S=function(n,i){for(var c=[],r=function(){var t=Math.floor(Math.random()*e),r=Math.floor(Math.random()*e);t===n||r===i||c.find((function(n){return n.x===t&&n.y===r}))||c.push({x:t,y:r})};c.length<t;)r();var a=Object(p.a)(u);c.forEach((function(n){a[n.y][n.x]=Object(h.a)(Object(h.a)({},a[n.y][n.x]),{},{isMine:!0})})),l(a),o(!0),C(),B(n,i)},V=function(n,e){console.log(n,e),x(!0)},C=function(){for(var n=Object(p.a)(u),t=0;t<e;t++)for(var i=0;i<e;i++){var c=0;t-1>=0&&i-1>=0&&u[t-1][i-1].isMine&&c++,t-1>=0&&u[t-1][i].isMine&&c++,t-1>=0&&i+1<e&&u[t-1][i+1].isMine&&c++,t+1<e&&i-1>=0&&u[t+1][i-1].isMine&&c++,t+1<e&&u[t+1][i].isMine&&c++,t+1<e&&i+1<e&&u[t+1][i+1].isMine&&c++,i-1>=0&&u[t][i-1].isMine&&c++,i+1<e&&u[t][i+1].isMine&&c++,n[t][i]=Object(h.a)(Object(h.a)({},u[t][i]),{},{numOfNeighbourMines:c})}l(n)},B=function(n,t){for(var i=Object(p.a)(u),c=[1,-1,0,0],r=[0,0,1,-1],o=[[t,n]];o.length>0;){var a=o.shift(),s=Object(j.a)(a,2),b=s[0],d=s[1],f=d>=0&&d<e&&b>=0&&b<e;if(console.log(b,d),f){if(!(i[b][d].numOfNeighbourMines>0)&&!i[b][d].isVisible)for(var O=0;O<c.length;O++)o.push([b+r[O],d+c[O]]);i[b][d].isVisible=!0}}l(i)};return Object(b.useEffect)((function(){k()}),[k]),Object(g.jsxs)(z,{sizeOfBoard:e,children:[u.map((function(n,t){return n.map((function(n,i){return Object(g.jsx)(v,Object(h.a)({isWin:m,isGameStart:r,onStartGame:S,onCloseGame:V,onExpandVisibleMine:B,sizeOfBoard:e},n),"".concat(i,"-").concat(t))}))})),Object(g.jsx)(w,{text:M,isVisible:O||m,onClick:function(){return k(e)},okText:y})]})},V=x.b.div(u||(u=Object(O.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 5vh 5vw;\n    background-color: #d1fdac;\n    height: 100vh;\n    .title {\n        font-size: 32px;\n        font-weight: 500;\n        margin: 20px;\n    }\n"]))),C=function(){var n=Object(b.useState)(6),e=Object(j.a)(n,1)[0],t=Object(b.useState)(4),i=Object(j.a)(t,1)[0];return Object(g.jsxs)(V,{children:[Object(g.jsx)("h1",{className:"title",children:"Minesweeper"}),Object(g.jsx)(S,{sizeOfBoard:e,numOfMines:i})]})},B=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(C,{})})},F=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),i(n),c(n),r(n),o(n)}))};f.a.render(Object(g.jsx)(l.a.StrictMode,{children:Object(g.jsx)(B,{})}),document.getElementById("root")),F()}},[[25,1,2]]]);
//# sourceMappingURL=main.f7c0d208.chunk.js.map