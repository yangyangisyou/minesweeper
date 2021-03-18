(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{30:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var i,c,r,o,a,s,u,b,d,O=t(0),f=t.n(O),l=t(11),j=t.n(l),p=(t(30),t(10)),m=t(5),h=t(3),g=t(4),x=t(2),v={numOfMines:{1:"blue",2:"green",3:"red",4:"purple",5:"maroon",6:"turquoise",7:"black",8:"white"}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,t=Object(O.useState)(!1),i=Object(m.a)(t,2),c=i[0],r=i[1];return Object(O.useEffect)((function(){var t;return c?t=setTimeout(e,n):clearTimeout(t),function(){clearTimeout(t)}}),[e,n,c]),{onMouseDown:function(){return r(!0)},onMouseUp:function(){return r(!1)},onMouseLeave:function(){return r(!1)},onTouchStart:function(){return r(!0)},onTouchEnd:function(){return r(!1)}}},E=t(1),_=g.b.div(i||(i=Object(h.a)(["\n    width: 50px;\n    height: 50px;\n    border: 1px black solid;\n    border-radius: 5px;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 20px;\n    font-weight: 600;\n    ","\n"])),Object(g.a)(c||(c=Object(h.a)(["\n        background-color: ",";\n    "])),(function(e){var n=e.isVisible;return e.isBoom?"red":n?"#dff7f5":"#0092e0"}))),w=g.b.div(r||(r=Object(h.a)(["\n  ","\n"])),(function(e){return Object(g.a)(o||(o=Object(h.a)([" color: ",""])),v.numOfMines[e.text]||"black")})),M=function(e){var n=e.x,t=e.y,i=e.isFlag,c=e.isBomb,r=e.isVisible,o=e.isWin,a=e.onRightClick,s=e.onClick,u=e.numOfNeighbourMines,b=r&&c,d=function(e,n,t,i,c){return e?"\ud83d\udea9":n&&i||n&&t?"\ud83d\udca3":(i||t)&&c||""}(i,c,r,o,u),O=y((function(){return a(n,t,i)}),800);return Object(E.jsx)(_,Object(x.a)(Object(x.a)({isVisible:r,isBoom:b,onClick:function(){return s(n,t,c,i)},onContextMenu:function(e){return a(n,t,i,e)}},O),{},{children:Object(E.jsx)(w,{text:d,children:d})}))},S=g.b.div(a||(a=Object(h.a)(["\n  display: inline-block;\n  padding: 10px 15px;\n  border-radius: 15px;\n  background-color: #00304c;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n"]))),I=function(e){return Object(E.jsx)(S,Object(x.a)(Object(x.a)({},e),{},{children:e.children}))},B=g.b.div(s||(s=Object(h.a)(["\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 1000;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    .background {\n        width: 100vw;\n        height: 100vh;\n        opacity: 0.6;\n        background-color: black;\n    }\n    .body {\n        overflow: hidden;\n        position: absolute;\n        padding: 20px;\n        background-color: white;\n        border-radius: 10px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    .text {\n        font-size: 24px;\n        font-weight: 600;\n        margin: 10px;\n    }\n    .img {\n      margin: 10px;\n      height: 200px;\n    }\n"]))),N=function(e){var n=e.text,t=e.okText,i=e.onClick,c=e.isVisible,r=e.imgSrc;return Object(E.jsx)(E.Fragment,{children:c&&Object(E.jsxs)(B,{children:[Object(E.jsx)("div",{className:"background"}),Object(E.jsxs)("div",{className:"body",children:[Object(E.jsx)("p",{className:"text",children:n}),Object(E.jsx)("img",{className:"img",src:r,alt:"modal"}),Object(E.jsx)(I,{onClick:i,children:t||"OK"})]})]})})},T=function(e,n){return{type:"INITIAL_BOARD",payload:{sizeOfBoard:e,numOfMines:n}}},k=function(e,n){return{type:"EXPAND_VISIBLE_MINES",payload:{x:e,y:n}}},C=g.b.div(u||(u=Object(h.a)(["\n    ","\n"])),(function(e){var n=e.sizeOfBoard;return Object(g.a)(b||(b=Object(h.a)(["\n        display: grid;\n        max-width: calc("," * 55px);\n        grid-gap: 5px;\n        grid-template-columns: repeat(",", 1fr);\n        grid-template-rows: repeat(",", 1fr);\n      "])),n,n,n)})),L=function(e){var n=e.sizeOfBoard,t=e.numOfMines,i=Object(p.b)(),c=Object(p.c)((function(e){return e.minesweeper.mines})),r=Object(O.useState)(!1),o=Object(m.a)(r,2),a=o[0],s=o[1],u=Object(O.useState)(!1),b=Object(m.a)(u,2),d=b[0],f=b[1],l=!d&&t===Math.pow(n,2)-c.reduce((function(e,n){return e+n.reduce((function(e,n){return e+(n.isVisible?1:0)}),0)}),0),j=l?"You win!!":d?"You clicked the bomb!!":"",h=l?"Play again":d?"OK":"",g=l?"https://media3.giphy.com/media/qYGvebgOKGygdQgflY/giphy.gif?cid=ecf05e47i0qme2wi67ynw5qtcvav9yxuzpgvg3cvwimwob4o&rid=giphy.gif":d?"https://media0.giphy.com/media/11KSh7jeHLEp5m/giphy.gif?cid=ecf05e47o4nh1dozkvly9x6bfcbv19gbhqqui2jw1zb9bcem&rid=giphy.gif":"",v=function(e,n,t,c){a?t&&!c?(i(function(e,n){return{type:"CLOSE_GAME",payload:{x:e,y:n}}}(e,n)),f(!0)):c||i(k(e,n)):(i(function(e,n){return{type:"INITIAL_MINES",payload:{x:e,y:n}}}(e,n)),i({type:"COUNT_NEIGHBOUR_MINES"}),i(k(e,n)),s(!0))},y=function(e,n,t,c){c&&c.preventDefault(),i(function(e,n,t){return{type:"FLAGGED_MINE",payload:{x:e,y:n,isFlag:t}}}(e,n,t))};return Object(O.useEffect)((function(){i(T(n,t)),s(!1),f(!1)}),[i,n,t]),Object(E.jsxs)(C,{sizeOfBoard:n,children:[c.map((function(e,n){return e.map((function(e,t){return Object(E.jsx)(M,Object(x.a)({isWin:l,onClick:v,onRightClick:y},e),"".concat(t,"-").concat(n))}))})),Object(E.jsx)(N,{text:j,okText:h,imgSrc:g,isVisible:d||l,onClick:function(){i(T(n,t)),f(!1),s(!1)}})]})},z=g.b.div(d||(d=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: #d1fdac;\n    height: 100vh;\n    .title {\n        font-size: 32px;\n        font-weight: 500;\n        margin: 40px 20px;\n    }\n"]))),A=function(){var e=Object(O.useState)(6),n=Object(m.a)(e,1)[0],t=Object(O.useState)(4),i=Object(m.a)(t,1)[0];return Object(E.jsxs)(z,{children:[Object(E.jsx)("h1",{className:"title",children:"Minesweeper"}),Object(E.jsx)(L,{sizeOfBoard:n,numOfMines:i})]})},D=function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(A,{})})},V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),i(e),c(e),r(e),o(e)}))},F=t(6),R=t(25),G=t.n(R),U=t(16),P=t(17),K=t(8),q={mines:[[]],sizeOfBoard:0,numOfMines:0},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INITIAL_BOARD":for(var t=n.payload,i=t.sizeOfBoard,c=t.numOfMines,r=[],o=0;o<i;o++){for(var a=[],s=0;s<i;s++)a.push({x:s,y:o,isBomb:!1,isVisible:!1});r.push(a)}return Object(x.a)(Object(x.a)({},e),{},{mines:r,sizeOfBoard:i,numOfMines:c});case"INITIAL_MINES":for(var u=n.payload,b=u.x,d=u.y,O=e.sizeOfBoard,f=e.numOfMines,l=e.mines,j=[],p=function(){var e=Math.floor(Math.random()*O),n=Math.floor(Math.random()*O);e===b||n===d||j.find((function(t){return t.x===e&&t.y===n}))||j.push({x:e,y:n})};j.length<f;)p();var h=Object(K.a)(l);return j.forEach((function(e){h[e.y][e.x]=Object(x.a)(Object(x.a)({},h[e.y][e.x]),{},{isBomb:!0})})),Object(x.a)(Object(x.a)({},e),{},{mines:h});case"EXPAND_VISIBLE_MINES":for(var g=n.payload,v=g.x,y=g.y,E=e.mines,_=e.sizeOfBoard,w=Object(K.a)(E),M=[1,-1,0,0],S=[0,0,1,-1],I=[[y,v]];I.length>0;){var B=I.shift(),N=Object(m.a)(B,2),T=N[0],k=N[1],C=k>=0&&k<_&&T>=0&&T<_;if(C){var L=!(w[T][k].numOfNeighbourMines>0)&&!w[T][k].isVisible;if(L)for(var z=0;z<M.length;z++)I.push([T+S[z],k+M[z]]);w[T][k].isVisible=!0}}return Object(x.a)(Object(x.a)({},e),{},{mines:w});case"COUNT_NEIGHBOUR_MINES":for(var A=e.sizeOfBoard,D=e.mines,V=Object(K.a)(D),F=0;F<A;F++)for(var R=0;R<A;R++){var G=0;F-1>=0&&R-1>=0&&D[F-1][R-1].isBomb&&G++,F-1>=0&&D[F-1][R].isBomb&&G++,F-1>=0&&R+1<A&&D[F-1][R+1].isBomb&&G++,F+1<A&&R-1>=0&&D[F+1][R-1].isBomb&&G++,F+1<A&&D[F+1][R].isBomb&&G++,F+1<A&&R+1<A&&D[F+1][R+1].isBomb&&G++,R-1>=0&&D[F][R-1].isBomb&&G++,R+1<A&&D[F][R+1].isBomb&&G++,V[F][R]=Object(x.a)(Object(x.a)({},D[F][R]),{},{numOfNeighbourMines:G})}return Object(x.a)(Object(x.a)({},e),{},{mines:V});case"CLOSE_GAME":var U=n.payload,P=U.x,H=U.y,X=e.mines,W=Object(K.a)(X);return W[H][P]=Object(x.a)(Object(x.a)({},W[H][P]),{},{isVisible:!0}),Object(x.a)(Object(x.a)({},e),{},{mines:W});case"FLAGGED_MINE":var Y=n.payload,J=Y.x,Q=Y.y,Z=Y.isFlag,$=e.mines,ee=Object(K.a)($);return ee[Q][J]=Object(x.a)(Object(x.a)({},ee[Q][J]),{},{isFlag:!Z}),Object(x.a)(Object(x.a)({},e),{},{mines:ee});default:return e}},X=Object(F.c)({minesweeper:H}),W=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT||"dev",Y=function(e){return"dev"===W?Object(F.d)(X,e,Object(F.a)(U.a,P.apiMiddleware,G.a)):Object(F.d)(X,e,Object(F.a)(U.a,P.apiMiddleware))},J=window.__INITIAL_STATE__;window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__();var Q=Y(J);j.a.render(Object(E.jsx)(p.a,{store:Q,children:Object(E.jsx)(f.a.StrictMode,{children:Object(E.jsx)(D,{})})}),document.getElementById("root")),V()}},[[43,1,2]]]);
//# sourceMappingURL=main.8808ba7a.chunk.js.map