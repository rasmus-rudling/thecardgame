(this["webpackJsonpreact-vers"]=this["webpackJsonpreact-vers"]||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/headerImage.aa125e65.png"},32:function(e,t,a){e.exports=a.p+"static/media/red_card.2abfa2da.png"},33:function(e,t,a){e.exports=a.p+"static/media/blue_card.db0b65ea.png"},40:function(e,t,a){e.exports=a(73)},46:function(e,t,a){},47:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),o=a.n(c),l=(a(45),a(46),a(6)),s=a(13),m=a(77),i=a(78),u=a(38),d=a(79),p=a(80),E=(a(47),a(18));var h=function(e){var t=e.email,n=e.setEmail,c=e.password,o=e.setPassword,l=(e.loginError,e.setLoginError),h=Object(s.f)();return r.a.createElement(m.a,{className:"startContainer"},r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("img",{src:a(30),alt:"THE CARD GAME",id:"headerimg"}))),r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("div",{id:"text"}))),r.a.createElement(i.a,null,r.a.createElement(u.a,{md:3}),r.a.createElement(u.a,{md:6},r.a.createElement("div",{className:"loginBox"},r.a.createElement(d.a,{onSubmit:function(e){return function(e){e.preventDefault(),E.auth().signInWithEmailAndPassword(t,c).then((function(){h.push("/chat")}),(function(e){l("Server error"),console.log(e)}))}(e)}},r.a.createElement(d.a.Group,{controlId:"formBasicEmail"},r.a.createElement(d.a.Label,null,"Email address:"),r.a.createElement(d.a.Control,{type:"email",autoFocus:!0,placeholder:"Enter email",onChange:function(e){return n(e.target.value)}}),r.a.createElement(d.a.Text,{className:"text-muted"})),r.a.createElement(d.a.Group,{controlId:"formBasicPassword"},r.a.createElement(d.a.Label,null,"Password:"),r.a.createElement(d.a.Control,{type:"text",placeholder:"Password",onChange:function(e){return o(e.target.value)}})),r.a.createElement(p.a,{type:"submit"},"Logga in")))),r.a.createElement(u.a,{md:3})))},g=a(17),f=a.n(g),v=a(24),b=a(16),C=a(39),x=a(18);var j=function(e){var t=e.currentUsers,a=Object(n.useState)(0),c=Object(l.a)(a,2),o=c[0],s=c[1],m=Object(n.useState)(15),i=Object(l.a)(m,2),u=i[0],d=i[1];return Object(n.useEffect)((function(){var e;if(d(10),o>=u){300===u&&d(60),s(0);var a=new Date,n=a.getSeconds(),r=a.getMinutes(),c=a.getHours(),l=n<10?"0".concat(n):"".concat(n),m=r<10?"0".concat(r):"".concat(r),i=c<10?"0".concat(c):"".concat(c);x.firestore().collection("chats").doc(t).update({messages:x.firestore.FieldValue.arrayUnion({sender:"Admin",message:"\xc4r ni redo att g\xe5 till beslut?",senderImgURL:"none",timestamp:"".concat(i,":").concat(m,":").concat(l)}),usersVoted:[]}).then((function(){console.log("Adminmeddelande skapat!")}))}return e=setInterval((function(){s((function(e){return e+1}))}),1e3),function(){return clearInterval(e)}}),[o,t]),r.a.createElement("div",null)};a(69),a(70),a(71);var M=function(e){var t=e.otherChats,a=e.handleChange,c=Object(n.useState)(5),o=Object(l.a)(c,2),s=o[0],m=o[1],i=Object(n.useState)(0),u=Object(l.a)(i,2),d=u[0],p=u[1],E=Object(n.useState)(0),h=Object(l.a)(E,2),g=h[0],f=h[1];function v(e,t,a){for(var n=0,r=0;0===n;)n=Math.random();for(;0===r;)r=Math.random();var c=Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*r);return((c=c/10+.5)>1||c<0)&&(c=v(e,t,a)),c=Math.pow(c,a),c*=t-e,c+=e}return Object(n.useEffect)((function(){var e,n;d>=s&&(p(0),g<20?(a(3,12,1,t),n=Math.round(v(2,12,1)),m(n)):g<55?(a(2,35,2,t),n=Math.round(v(2,30,1)),m(n)):g<90?(a(2,12,2,t),n=Math.round(v(3,12,3)),m(n)):g<100?(a(2,12,3,t),n=Math.round(v(2,12,1)),m(n)):(a(3,35,2,t),n=Math.round(v(2,30,1)),m(n)));return e=setInterval((function(){p((function(e){return e+1})),f((function(e){return e+1}))}),1e3),function(){return clearInterval(e)}})),r.a.createElement("div",null)};var y=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),s=Object(l.a)(o,2),m=s[0],d=s[1],p=Object(n.useState)(0),E=Object(l.a)(p,2),h=E[0],g=E[1],f=Object(n.useState)(0),v=Object(l.a)(f,2),b=v[0],C=v[1],x=Object(n.useState)(m),j=Object(l.a)(x,2),y=j[0],O=j[1],T=[m,h,b],N=["Axel Hagel","Elin Rudling","Niklas L\xf6wbeer"],w=["https://i.imgur.com/IBlrCCT.jpg","https://i.imgur.com/wBeQrMt.jpg","https://i.imgur.com/GRSyGWE.jpg"];function I(e,t,a){for(var n=0,r=0;0===n;)n=Math.random();for(;0===r;)r=Math.random();var c=Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*r);return((c=c/10+.5)>1||c<0)&&(c=I(e,t,a)),c=Math.pow(c,a),c*=t-e,c+=e}return Object(n.useEffect)((function(){a.forEach((function(e){var t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),c=document.createElement("img"),o=document.createElement("div");if(o.innerText="".concat(e.timeStamp," ").concat(e.sender),c.src=e.imgURL,o.className="nameTimeTag",c.className="img-element-other-team",n.className="row",r.className="col",a.innerText=e.message,a.className="otherMessages",t.className="otherMessagesBox",t.append(o),t.append(c),t.append(a),r.append(t),n.append(r),"undefined"!==a.innerText){document.getElementById("chatTextOther").append(n);var l=document.getElementById("chatTextOther");l.scrollTop=l.scrollHeight}}))}),[a]),r.a.createElement("div",{className:"chatBox",id:"secretChat"},r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("div",{id:"userinfo"},r.a.createElement("b",null,"Motst\xe5ndarlaget:"),r.a.createElement("br",null),r.a.createElement("img",{src:"https://i.imgur.com/IBlrCCT.jpg",alt:""})," Axel Hagel",r.a.createElement("img",{src:"https://i.imgur.com/wBeQrMt.jpg",alt:""})," Elin Rudling",r.a.createElement("img",{src:"https://i.imgur.com/GRSyGWE.jpg",alt:""})," Niklas L\xf6wbeer"))),r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("div",{id:"chatTextOther"},r.a.createElement(M,{otherChats:a,handleChange:function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),o=3;o<n;o++)r[o-3]=arguments[o];var l,s=r,i="";l=Math.round(I(e,t,a));var u=Math.round(2*Math.random());T[u]!==y&&(u=Math.round(2*Math.random()),T[u]!==y&&(u=Math.round(2*Math.random()),T[u]!==y&&(u=Math.round(2*Math.random())))),0===u?d((function(e){return e+1})):1===u?g((function(e){return e+1})):C((function(e){return e+1})),O(m<y?m:h<y?h:b);for(var p=N[u],E=w[u],f=0;f<l;f++)i+="\u3000";var v=new Date,x=v.getMinutes(),j=v.getHours(),M=x<10?"0".concat(x):"".concat(x),R=j<10?"0".concat(j):"".concat(j),B={message:i,sender:p,imgURL:E,timeStamp:"".concat(R,":").concat(M)};s.push(B),c(s)}})))))},O=a(18);var T=function(e){var t=e.email,c=Object(s.f)(),o=Object(n.useState)([]),E=Object(l.a)(o,2),h=E[0],g=E[1],x=Object(n.useState)(""),M=Object(l.a)(x,2),T=M[0],N=M[1],w=Object(n.useState)(""),I=Object(l.a)(w,2),R=I[0],B=I[1],S=Object(n.useState)(!0),L=Object(l.a)(S,2),k=L[0],A=L[1];Object(n.useEffect)((function(){O.auth().onAuthStateChanged(function(){var e=Object(v.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}c.push("/"),e.next=6;break;case 4:return e.next=6,O.firestore().collection("chats").where("users","array-contains",t.email).onSnapshot(function(){var e=Object(v.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.docs.map((function(e){return e.data()})),e.next=3,g(a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O.firestore().collection("users").doc(t).onSnapshot((function(e){N(e.data().name),B(e.data().imgURL)}))}),[]);var P,U,G="",V=[];console.log("---"),console.log(h[1]),h.filter((function(e,a){var n=!1;return e.users.forEach((function(e){e===t&&(n=!0)})),n})).forEach((function(e,n){document.getElementById("chatMessages").innerHTML="",e.users.forEach((function(e,t,a){t!==a.length-1?G+=e+":":G+=e})),console.log(n),U=e.teamReady,V=e.usersVoted;var r=O.firestore().collection("chats").doc(G);console.log(U,"Teamready"),U&&setTimeout((function(){var t=e.chosenRedCard,n=e.chosenBlueCard;console.log(t),console.log(n);for(var r=document.createElement("div"),c=0;c<t;c++){var o=document.createElement("img");o.src=a(32),o.className="choicesCard",r.append(o)}for(var l=0;l<n;l++){var s=document.createElement("img");s.src=a(33),s.className="choicesCard",r.append(s)}var m=document.getElementById("chosenCardContainer");m.innerHTML="",m.append(r)}),50),e.messages.forEach((function(a){var n=document.createElement("div"),c=document.createElement("div"),o=document.createElement("div"),l=document.createElement("img");if(P=G.split(":")[0],l.src=a.senderImgURL,c.className="row",o.className="col","Admin"===a.sender){var s=e.readyToChoose,m=e.notReadyToChoose;s+m===3&&(s>=2&&(r.update({teamReady:!0}),t===P&&k&&A(!1)),r.update({messages:O.firestore.FieldValue.arrayRemove(a)}),r.update({readyToChoose:0,notReadyToChoose:0})),n.className="adminMessages",n.innerText=" ".concat(a.message);var i=document.createElement("button"),u=document.createElement("button");i.innerText="Ja",u.innerText="Nej",console.log(V.includes(t)),V.includes(t)?(i.className="hide",u.className="hide"):(i.className="",u.className=""),i.addEventListener("click",(function(){i.className="hide",u.className="hide",r.update({readyToChoose:e.readyToChoose+1,usersVoted:O.firestore.FieldValue.arrayUnion(t)})})),u.addEventListener("click",(function(){i.className="hide",u.className="hide",r.update({notReadyToChoose:e.notReadyToChoose+1,usersVoted:O.firestore.FieldValue.arrayUnion(t)})})),n.append(i),n.append(u);for(var d=0;d<s;d++)n.append("\u2714\ufe0f");for(var p=0;p<m;p++)n.append("\u274c");o.append(n),c.append(o)}else if(a.sender===T){var E=document.createElement("div"),h=document.createElement("div");h.innerText="".concat(a.timestamp," ").concat(a.sender),n.innerText=" ".concat(a.message),E.append(h),E.append(n),E.append(l),E.className="myMessagesBox",n.className="myMessages",h.className="nameTimeTag",o.append(E),c.append(o)}else{var g=document.createElement("div"),f=document.createElement("div");f.innerText="".concat(a.timestamp," ").concat(a.sender),n.innerText=" ".concat(a.message),g.append(f),g.append(l),g.append(n),g.className="otherMessagesBox",n.className="otherMessages",f.className="nameTimeTag",o.append(g),c.append(o)}document.getElementById("chatMessages").append(c)}));var c=document.getElementById("chatMessages");c.scrollTop=c.scrollHeight}));var q=r.a.createElement("div",{className:"popContent"},r.a.createElement("div",{id:"header"}," SPELGRELER "),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?",r.a.createElement("br",null),r.a.createElement("br",null),"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?"),F=null;t===P&&k&&(F=r.a.createElement(j,{currentUsers:G}));var H=null;return U&&(H=r.a.createElement("div",{id:"voteBox"},r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("h5",null,"V\xc4LJ KORT H\xc4R"),"Se till att vara \xf6verrens i gruppen innan valet g\xf6rs. Ni v\xe4ljer kort som ett lag.")),r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("div",{className:"inline-block",id:"redCardChooser"},r.a.createElement("div",{onClick:function(){document.getElementById("redCardChooser").className="hide",document.getElementById("blueCardChooser").className="hide";var e=O.firestore().collection("chats").doc(G),t=O.firestore.FieldValue.increment(1);e.update({chosenRedCard:t})}},r.a.createElement("img",{src:a(32)}),r.a.createElement("h6",{className:"inline-block"},"R\xd6TT KORT"))),r.a.createElement("div",{className:"inline-block",id:"blueCardChooser"},r.a.createElement("div",{onClick:function(){document.getElementById("redCardChooser").className="hide",document.getElementById("blueCardChooser").className="hide";var e=O.firestore().collection("chats").doc(G),t=O.firestore.FieldValue.increment(1);e.update({chosenBlueCard:t})}},r.a.createElement("img",{src:a(33)}),r.a.createElement("h6",{className:"inline-block"},"BL\xc5TT KORT"))))),r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("p",{className:"choicesText"},"Era val: "),r.a.createElement("div",{id:"chosenCardContainer"}))))),r.a.createElement(m.a,{className:"chatContainer",fluid:!0},r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("img",{src:a(30),alt:"THE CARD GAME",id:"headerimg"}))),r.a.createElement(i.a,null," ",r.a.createElement(u.a,{sm:12,lg:6},"  ",r.a.createElement("div",{className:"chatBox"},r.a.createElement(i.a,null,r.a.createElement(u.a,{md:4},r.a.createElement("div",{id:"userinfo"},r.a.createElement("b",null,"Inloggad som:"),r.a.createElement("br",null),r.a.createElement("img",{src:"https://img.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg?size=338&ext=jpg",alt:""})," ",T)),r.a.createElement(u.a,{md:8},r.a.createElement("div",{id:"userinfo"},r.a.createElement("b",null,"Lagmedlemmar"),r.a.createElement("br",null),r.a.createElement("img",{src:"https://www.positivelysplendid.com/wp-content/uploads/2013/09/Circle-Crop-Profile-300x300.png",alt:""})," Emma Bobsson",r.a.createElement("img",{src:"https://images.squarespace-cdn.com/content/v1/5589a812e4b0248058743f7e/1562001389112-WFLCO7JEU2GDDM9ANYXT/ke17ZwdGBToddI8pDm48kMh3mVmBaCAeGwqCLG3iONRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PITeQtWPcxF65ANawkK25DREOmFck9peR6QL8AnpRiPJE/LAURA+PROFILE+CIRCLE+NEW.png",alt:""})," Mary Major"))),r.a.createElement(i.a,null,r.a.createElement(u.a,null,F,r.a.createElement("div",{id:"chatMessages"}))),r.a.createElement(i.a,null,r.a.createElement(u.a,{xs:12},r.a.createElement("div",{id:"submitRow"},r.a.createElement(d.a,{onSubmit:function(e){e.preventDefault();var t=document.getElementById("msg-box").value,a=new Date,n=a.getMinutes(),r=a.getHours(),c=n<10?"0".concat(n):"".concat(n),o=r<10?"0".concat(r):"".concat(r);O.firestore().collection("chats").doc(G).update({messages:O.firestore.FieldValue.arrayUnion({sender:T,message:t,timestamp:"".concat(o,":").concat(c),senderImgURL:R})}),document.getElementById("msg-box").value="",document.getElementById("msg-box").focus()}},r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement(d.a.Row,null,r.a.createElement(d.a.Control,{bsPrefix:"send_text",type:"text",id:"msg-box",autoFocus:!0}),r.a.createElement(p.a,{bsPrefix:"send_button",type:"submit"},"SKICKA")))))))))),r.a.createElement(u.a,{sm:12,lg:6}," ",r.a.createElement(y,null),H)),r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("div",{id:"logout"},r.a.createElement(C.a,{trigger:r.a.createElement("u",null,"Spelregler"),modal:!0},q),r.a.createElement(b.b,{to:"/ny_firebase_chatt"},"Log out")))))};var N=function(){var e=Object(n.useState)("rrudling@kth.se"),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),m=Object(l.a)(o,2),i=m[0],u=m[1],d=Object(n.useState)(""),p=Object(l.a)(d,2),E=p[0],g=p[1];function f(e){u(e)}function v(e){console.log(e,"raz12"),c(e)}function v(e){c(e)}return r.a.createElement(b.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(h,{email:a,setEmail:v,password:i,setPassword:f,loginError:E,setLoginError:g})),r.a.createElement(s.a,{exact:!0,path:"/ny_firebase_chatt"},r.a.createElement(h,{email:a,setEmail:v,password:i,setPassword:f,loginError:E,setLoginError:g})),r.a.createElement(s.a,{exact:!0,path:"/chat"},r.a.createElement(T,{email:a}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(18);a(72);w.initializeApp({apiKey:"AIzaSyAdpOM4Bx2jIRTmqkLdxq2-WysYpZXW_BI",authDomain:"chatt-app-b6c9a.firebaseapp.com",databaseURL:"https://chatt-app-b6c9a.firebaseio.com",projectId:"chatt-app-b6c9a",storageBucket:"chatt-app-b6c9a.appspot.com",messagingSenderId:"999297534472",appId:"1:999297534472:web:5e2d45b432ecd04f385fbd",measurementId:"G-P2SMFJCGS3"}),o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.85e4557b.chunk.js.map