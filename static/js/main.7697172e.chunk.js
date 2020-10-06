(this["webpackJsonp2048-game"]=this["webpackJsonp2048-game"]||[]).push([[0],{12:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=(n(12),n(6)),s=n(2),l=n(1),u=n.n(l),f=function(e){switch(e){case 2:return"#EBDCD0";case 4:return"#E9DBBA";case 8:return"#E9A067";case 16:return"#F08151";case 32:return"#F2654F";case 64:return"#F1462C";case 128:return"#E7C65E";case 256:return"#E8C350";case 512:return"#E8BE40";case 1024:return"#E8BB31";case 2048:return"#E7B723";default:return"#C2B3A3"}},g=n(5),d=n.n(g);var m=function(e){var t=e.num,n=y.blockStyle;return a.a.createElement("div",{style:Object(c.a)({},n,{background:f(t),color:2===t||4===t?"#645B52":"#F7F4EF"})},0!==t?t:"")},y={blockStyle:{height:100,width:120,background:"lightgray",margin:3,display:"flex",justifyContent:"center",alignItems:"center",fontSize:45,fontWeight:"800",color:"white"},newGameButton:{padding:10,background:"#846F5B",color:"#F8F5F0",width:200,borderRadius:7,fontWeight:"900",marginLeft:"36rem",marginBottom:"auto",cursor:"pointer"},tryAgainButton:{padding:10,background:"#846F5B",color:"#F8F5F0",width:80,borderRadius:7,fontWeight:"900",cursor:"pointer",margin:"auto",marginTop:20},gameOverOverlay:{position:"absolute",height:"100%",width:"100%",left:0,top:0,borderRadius:5,background:"rgba(238,228,218,.5)",display:"flex",justifyContent:"center",alignItems:"center"}},v=function(){var e=Object(r.useState)([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(!1),c=Object(s.a)(i,2),l=c[0],f=c[1],g=function(e){for(var t=!1,n=!1,r=0;!t&&!n;){var a=Math.floor(4*Math.random()),o=Math.floor(4*Math.random());r++,0===e[a][o]&&(e[a][o]=Math.random()>.5?2:4,t=!0),r>50&&(n=!0,w()&&alert("game over"))}},v=function(e){console.log("swipe left");for(var t=n,r=u()(n),a=0;a<4;a++)for(var i=r[a],c=0,s=1;c<4;)4!==s?0===i[c]&&0===i[s]?s++:0===i[c]&&0!==i[s]?(i[c]=i[s],i[s]=0,s++):0!==i[c]&&0===i[s]?s++:0!==i[c]&&0!==i[s]&&(i[c]===i[s]?(i[c]=i[c]+i[s],i[s]=0,s=c+1,c++):s=++c+1):(s=c+1,c++);if(JSON.stringify(t)!==JSON.stringify(r)&&g(r),e)return r;o(r)},E=function(e){console.log("swipe right");for(var t=n,r=u()(n),a=3;a>=0;a--)for(var i=r[a],c=i.length-1,s=c-1;c>0;)-1!==s?0===i[c]&&0===i[s]?s--:0===i[c]&&0!==i[s]?(i[c]=i[s],i[s]=0,s--):0!==i[c]&&0===i[s]?s--:0!==i[c]&&0!==i[s]&&(i[c]===i[s]?(i[c]=i[c]+i[s],i[s]=0,s=c-1,c--):s=--c-1):(s=c-1,c--);if(JSON.stringify(r)!==JSON.stringify(t)&&g(r),e)return r;o(r)},h=function(e){console.log("swipe down"),console.log(n);for(var t=u()(n),r=JSON.parse(JSON.stringify(n)),a=3;a>=0;a--)for(var i=t.length-1,c=i-1;i>0;)-1!==c?0===t[i][a]&&0===t[c][a]?c--:0===t[i][a]&&0!==t[c][a]?(t[i][a]=t[c][a],t[c][a]=0,c--):0!==t[i][a]&&0===t[c][a]?c--:0!==t[i][a]&&0!==t[c][a]&&(t[i][a]===t[c][a]?(t[i][a]=t[i][a]+t[c][a],t[c][a]=0,c=i-1,i--):c=--i-1):(c=i-1,i--);if(JSON.stringify(t)!==JSON.stringify(r)&&g(t),e)return t;o(t)},p=function(e){console.log("swipe up");for(var t=u()(n),r=JSON.parse(JSON.stringify(n)),a=0;a<4;a++)for(var i=0,c=1;i<4;)4!==c?0===t[i][a]&&0===t[c][a]?c++:0===t[i][a]&&0!==t[c][a]?(t[i][a]=t[c][a],t[c][a]=0,c++):0!==t[i][a]&&0===t[c][a]?c++:0!==t[i][a]&&0!==t[c][a]&&(t[i][a]===t[c][a]?(t[i][a]=t[i][a]+t[c][a],t[c][a]=0,c=i+1,i++):c=++i+1):(c=i+1,i++);if(JSON.stringify(r)!==JSON.stringify(t)&&g(t),e)return t;o(t)},w=function(){console.log("CHECKING GAME OVER");var e=v(!0);if(JSON.stringify(n)!==JSON.stringify(e))return!1;var t=h(!0);if(console.log("CHECKER DOWN"),console.table(n),console.table(t),JSON.stringify(n)!==JSON.stringify(t))return!1;var r=E(!0);if(JSON.stringify(n)!==JSON.stringify(r))return!1;var a=p(!0);return JSON.stringify(n)===JSON.stringify(a)},O=function(){f(!1);var e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];g(e),g(e),o(e)};return Object(r.useEffect)((function(){!function(){var e=u()(n);console.log(e),g(e),console.table(e),g(e),console.table(e),o(e)}()}),[]),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(r.useEffect)((function(){return window.addEventListener(e,t,n),function(){window.removeEventListener(e,t)}}))}("keydown",(function(e){if(!l){switch(e.keyCode){case 38:p();break;case 40:h();break;case 37:v();break;case 39:E()}w()&&f(!0)}})),a.a.createElement("div",{className:"App"},a.a.createElement("div",{style:{margin:"auto",marginTop:30},className:"text-center"},a.a.createElement("div",{style:{display:"flex"}},a.a.createElement("div",{style:{flex:1,marginTop:"auto"}},a.a.createElement("div",{onClick:O,style:y.newGameButton,className:"btn d-flex justify-content-center"},"NEW GAME"))),a.a.createElement("div",{style:{background:"#AD9D8F",width:"max-content",height:"max-content",margin:"auto",padding:5,borderRadius:5,marginTop:10,position:"relative"}},l&&a.a.createElement("div",{style:y.gameOverOverlay},a.a.createElement("div",null,a.a.createElement("div",{style:{fontSize:30,fontFamily:"sans-serif",fontWeight:"900",color:"#776E65"}},"Game Over"),a.a.createElement("div",null,a.a.createElement("div",{style:{flex:1,marginTop:"auto"}},a.a.createElement("div",{onClick:O,style:y.tryAgainButton},"Try Again"))))),a.a.createElement(d.a,{onSwipeDown:function(){h()},onSwipeLeft:function(){return v()},onSwipeRight:function(){return E()},onSwipeUp:function(){return p()},style:{overflowY:"hidden"}},n.map((function(e,t){return a.a.createElement("div",{style:{display:"flex"},key:t},e.map((function(e,t){return a.a.createElement(m,{num:e,key:t})})))}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(19)}},[[7,1,2]]]);
//# sourceMappingURL=main.7697172e.chunk.js.map