(this["webpackJsonpreact-vers"]=this["webpackJsonpreact-vers"]||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/headerTextCards.ef84d908.png"},32:function(e,t,a){},38:function(e,t,a){e.exports=a(72)},44:function(e,t,a){},45:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){e.exports=a.p+"static/media/red_card.2abfa2da.png"},70:function(e,t,a){e.exports=a.p+"static/media/blue_card.db0b65ea.png"},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),o=a.n(c),s=(a(43),a(44),a(6)),l=a(13),m=a(76),i=a(77),u=a(37),d=a(78),p=a(79),E=(a(45),a(18));var h=function(e){var t=e.email,n=e.setEmail,c=e.password,o=e.setPassword,s=(e.loginError,e.setLoginError),h=Object(l.f)();return r.a.createElement(m.a,{className:"startContainer"},r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("img",{src:a(30),alt:"THE CARD GAME",id:"headerimg"}))),r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("div",{id:"text"},"V\xe4lkommen till The Card Game! H\xe4r \xe4r reglerna: Lorem ipsum dolor sit amet, no consequat assueverit honestatis vix. Nam an error mundi veritus, quem tractatos at sea. Eos cu soleat graece. Volumus repudiandae pri eu, ad usu veniam propriae assueverit. Mundi primis aperiam an eam, facete omittantur eum at. Eligendi dissentiet concludaturque ne nec, nam et nisl ornatus voluptatibus, ea prompta fabulas pri."))),r.a.createElement(i.a,null,r.a.createElement(u.a,{md:3}),r.a.createElement(u.a,{md:6},r.a.createElement("div",{className:"loginBox"},r.a.createElement(d.a,{onSubmit:function(e){return function(e){e.preventDefault(),E.auth().signInWithEmailAndPassword(t,c).then((function(){h.push("/chat")}),(function(e){s("Server error"),console.log(e)}))}(e)}},r.a.createElement(d.a.Group,{controlId:"formBasicEmail"},r.a.createElement(d.a.Label,null,"Email address:"),r.a.createElement(d.a.Control,{type:"email",autoFocus:!0,placeholder:"Enter email",onChange:function(e){return n(e.target.value)}}),r.a.createElement(d.a.Text,{className:"text-muted"},"Anv\xe4nd samma mejl som du kommunicerat med oss med")),r.a.createElement(d.a.Group,{controlId:"formBasicPassword"},r.a.createElement(d.a.Label,null,"Password:"),r.a.createElement(d.a.Control,{type:"text",placeholder:"Password",onChange:function(e){return o(e.target.value)}})),r.a.createElement(p.a,{type:"submit"},"Logga in")))),r.a.createElement(u.a,{md:3})))},g=a(17),f=a.n(g),v=a(24),b=a(16),j=a(18);var x=function(e){var t=e.currentUsers,a=Object(n.useState)(0),c=Object(s.a)(a,2),o=c[0],l=c[1],m=Object(n.useState)(5),i=Object(s.a)(m,2),u=i[0],d=i[1];return Object(n.useEffect)((function(){var e;if(d(10),o>=u){300===u&&d(60),l(0);var a=new Date,n=a.getSeconds(),r=a.getMinutes(),c=a.getHours(),s=n<10?"0".concat(n):"".concat(n),m=r<10?"0".concat(r):"".concat(r),i=c<10?"0".concat(c):"".concat(c);j.firestore().collection("chats").doc(t).update({messages:j.firestore.FieldValue.arrayUnion({sender:"Admin",message:"\xc4r ni redo att g\xe5 till beslut?",senderImgURL:"none",timestamp:"".concat(i,":").concat(m,":").concat(s)}),usersVoted:[]}).then((function(){console.log("Adminmeddelande skapat!")}))}return e=setInterval((function(){l((function(e){return e+1}))}),1e3),function(){return clearInterval(e)}}),[o,t]),r.a.createElement("div",null)};a(32),a(67),a(68);var M=function(e){var t=e.otherChats,a=e.handleChange,c=Object(n.useState)(5),o=Object(s.a)(c,2),l=o[0],m=o[1],i=Object(n.useState)(0),u=Object(s.a)(i,2),d=u[0],p=u[1],E=Object(n.useState)(0),h=Object(s.a)(E,2),g=h[0],f=h[1];function v(e,t,a){for(var n=0,r=0;0===n;)n=Math.random();for(;0===r;)r=Math.random();var c=Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*r);return((c=c/10+.5)>1||c<0)&&(c=v(e,t,a)),c=Math.pow(c,a),c*=t-e,c+=e}return Object(n.useEffect)((function(){var e,n;d>=l&&(p(0),g<20?(a(3,12,1,t),n=Math.round(v(2,12,1)),m(n)):g<55?(a(2,35,2,t),n=Math.round(v(2,30,1)),m(n)):g<90?(a(2,12,2,t),n=Math.round(v(3,12,3)),m(n)):g<100?(a(2,12,3,t),n=Math.round(v(2,12,1)),m(n)):(a(3,35,2,t),n=Math.round(v(2,30,1)),m(n)));return e=setInterval((function(){p((function(e){return e+1})),f((function(e){return e+1}))}),1e3),function(){return clearInterval(e)}})),r.a.createElement("div",null)};var O=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),l=Object(s.a)(o,2),m=l[0],d=l[1],p=Object(n.useState)(0),E=Object(s.a)(p,2),h=E[0],g=E[1],f=Object(n.useState)(0),v=Object(s.a)(f,2),b=v[0],j=v[1],x=Object(n.useState)(m),O=Object(s.a)(x,2),T=O[0],w=O[1],y=[m,h,b],N=["Axel Hagel","Elin Rudling","Niklas L\xf6wbeer"],I=["https://i.imgur.com/IBlrCCT.jpg","https://i.imgur.com/wBeQrMt.jpg","https://i.imgur.com/GRSyGWE.jpg"];function C(e,t,a){for(var n=0,r=0;0===n;)n=Math.random();for(;0===r;)r=Math.random();var c=Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*r);return((c=c/10+.5)>1||c<0)&&(c=C(e,t,a)),c=Math.pow(c,a),c*=t-e,c+=e}return Object(n.useEffect)((function(){a.forEach((function(e){var t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),r=document.createElement("img"),c=document.createElement("div"),o=document.createElement("div");if(c.innerText="".concat(e.timeStamp," ").concat(e.sender),r.src=e.imgURL,c.className="name-time-tag-other",r.className="img-element-other",a.className="row",n.className="col",t.innerText=e.message,t.className="otherTeamsMessages",o.append(r),o.append(c),o.append(t),n.append(o),a.append(n),"undefined"!==t.innerText){document.getElementById("chatTextOther").append(a);var s=document.getElementById("chatTextOther");s.scrollTop=s.scrollHeight}}))}),[a]),r.a.createElement("div",{className:"chatBox",id:"secretChat"},r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("div",{id:"userinfo"},r.a.createElement("b",null,"Motst\xe5ndarlaget:"),r.a.createElement("br",null),r.a.createElement("img",{src:"https://i.imgur.com/IBlrCCT.jpg",alt:""})," Axel Hagel",r.a.createElement("img",{src:"https://i.imgur.com/wBeQrMt.jpg",alt:""})," Elin Rudling",r.a.createElement("img",{src:"https://i.imgur.com/GRSyGWE.jpg",alt:""})," Niklas L\xf6wbeer"))),r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("div",{id:"chatTextOther"},r.a.createElement(M,{otherChats:a,handleChange:function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),o=3;o<n;o++)r[o-3]=arguments[o];var s,l=r,i="";s=Math.round(C(e,t,a));var u=Math.round(2*Math.random());y[u]!==T&&(u=Math.round(2*Math.random()),y[u]!==T&&(u=Math.round(2*Math.random()),y[u]!==T&&(u=Math.round(2*Math.random())))),0===u?d((function(e){return e+1})):1===u?g((function(e){return e+1})):j((function(e){return e+1})),w(m<T?m:h<T?h:b);for(var p=N[u],E=I[u],f=0;f<s;f++)i+="\u3000";var v=new Date,x=v.getMinutes(),M=v.getHours(),O=x<10?"0".concat(x):"".concat(x),S=M<10?"0".concat(M):"".concat(M),R={message:i,sender:p,imgURL:E,timeStamp:"".concat(S,":").concat(O)};l.push(R),c(l)}})))))},T=a(18);var w=function(e){var t=e.email,c=Object(l.f)(),o=Object(n.useState)([]),E=Object(s.a)(o,2),h=E[0],g=E[1],j=Object(n.useState)(""),M=Object(s.a)(j,2),w=M[0],y=M[1],N=Object(n.useState)(""),I=Object(s.a)(N,2),C=I[0],S=I[1],R=Object(n.useState)(!0),B=Object(s.a)(R,2),L=B[0],k=B[1];Object(n.useEffect)((function(){T.auth().onAuthStateChanged(function(){var e=Object(v.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}c.push("/"),e.next=6;break;case 4:return e.next=6,T.firestore().collection("chats").where("users","array-contains",t.email).onSnapshot(function(){var e=Object(v.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.docs.map((function(e){return e.data()})),e.next=3,g(a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),T.firestore().collection("users").doc(t).onSnapshot((function(e){y(e.data().name),S(e.data().imgURL)}))}),[]);var A,P="",U=[];return h.filter((function(e,a){var n=!1;return e.users.forEach((function(e){e===t&&(n=!0)})),n})).forEach((function(e,a){document.getElementById("chatMessages").innerHTML="",e.users.forEach((function(e,t,a){t!==a.length-1?P+=e+":":P+=e})),U=e.usersVoted,console.log(U,"usersVoted");var n=T.firestore().collection("chats").doc(P);e.messages.forEach((function(a){var r=document.createElement("div"),c=document.createElement("div"),o=document.createElement("div"),s=document.createElement("img");if(A=P.split(":")[0],s.src=a.senderImgURL,c.className="row",o.className="col","Admin"===a.sender){var l=e.readyToChoose,m=e.notReadyToChoose;l+m===3&&(l>=2&&(document.getElementById("voteBox").className="",t===A&&L&&k(!1)),n.update({messages:T.firestore.FieldValue.arrayRemove(a)}),n.update({readyToChoose:0,notReadyToChoose:0})),r.className="adminMessages",r.innerText=" ".concat(a.message);var i=document.createElement("button"),u=document.createElement("button");i.innerText="Ja",u.innerText="Nej",console.log(U.includes(t)),U.includes(t)?(i.className="hide",u.className="hide"):(i.className="",u.className=""),i.addEventListener("click",(function(){i.className="hide",u.className="hide",n.update({readyToChoose:e.readyToChoose+1,usersVoted:T.firestore.FieldValue.arrayUnion(t)})})),u.addEventListener("click",(function(){i.className="hide",u.className="hide",n.update({notReadyToChoose:e.notReadyToChoose+1,usersVoted:T.firestore.FieldValue.arrayUnion(t)})})),r.append(i),r.append(u);for(var d=0;d<l;d++)r.append("\u2714\ufe0f");for(var p=0;p<m;p++)r.append("\u274c");o.append(r),c.append(o)}else if(a.sender===w){var E=document.createElement("div"),h=document.createElement("div");h.innerText="".concat(a.timestamp," ").concat(a.sender),r.innerText=" ".concat(a.message),E.append(h),E.append(r),E.append(s),E.className="myMessagesBox",r.className="myMessages",h.className="nameTimeTag",o.append(E),c.append(o)}else{var g=document.createElement("div"),f=document.createElement("div");f.innerText="".concat(a.timestamp," ").concat(a.sender),r.innerText=" ".concat(a.message),g.append(f),g.append(s),g.append(r),g.className="otherMessagesBox",r.className="otherMessages",f.className="nameTimeTag",o.append(g),c.append(o)}document.getElementById("chatMessages").append(c)}));var r=document.getElementById("chatMessages");r.scrollTop=r.scrollHeight})),r.a.createElement(m.a,{className:"chatContainer",fluid:!0},r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("img",{src:a(30),alt:"THE CARD GAME",id:"headerimg"}))),r.a.createElement(i.a,null," ",r.a.createElement(u.a,{sm:12,lg:6},"  ",r.a.createElement("div",{className:"chatBox"},r.a.createElement(i.a,null,r.a.createElement(u.a,{md:4},r.a.createElement("div",{id:"userinfo"},r.a.createElement("b",null,"Inloggad som:"),r.a.createElement("br",null),r.a.createElement("img",{src:"https://img.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg?size=338&ext=jpg",alt:""})," ",w)),r.a.createElement(u.a,{md:8},r.a.createElement("div",{id:"userinfo"},r.a.createElement("b",null,"Lagmedlemmar"),r.a.createElement("br",null),r.a.createElement("img",{src:"https://www.positivelysplendid.com/wp-content/uploads/2013/09/Circle-Crop-Profile-300x300.png",alt:""})," Emma Bobsson",r.a.createElement("img",{src:"https://images.squarespace-cdn.com/content/v1/5589a812e4b0248058743f7e/1562001389112-WFLCO7JEU2GDDM9ANYXT/ke17ZwdGBToddI8pDm48kMh3mVmBaCAeGwqCLG3iONRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PITeQtWPcxF65ANawkK25DREOmFck9peR6QL8AnpRiPJE/LAURA+PROFILE+CIRCLE+NEW.png",alt:""})," Mary Major"))),r.a.createElement(i.a,null,r.a.createElement(u.a,null,t===A&&L?r.a.createElement(x,{currentUsers:P}):r.a.createElement("p",null),r.a.createElement("div",{id:"chatMessages"}))),r.a.createElement(i.a,null,r.a.createElement(u.a,{xs:12},r.a.createElement("div",{id:"submitRow"},r.a.createElement(d.a,{onSubmit:function(e){return function(e){e.preventDefault();var t=document.getElementById("msg-box").value,a=new Date,n=a.getMinutes(),r=a.getHours(),c=n<10?"0".concat(n):"".concat(n),o=r<10?"0".concat(r):"".concat(r);T.firestore().collection("chats").doc(P).update({messages:T.firestore.FieldValue.arrayUnion({sender:w,message:t,timestamp:"".concat(o,":").concat(c),senderImgURL:C})}),document.getElementById("msg-box").value="",document.getElementById("msg-box").focus()}(e)}},r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement(d.a.Row,null,r.a.createElement(d.a.Control,{bsPrefix:"send_text",type:"text",id:"msg-box",autoFocus:!0}),r.a.createElement(p.a,{bsPrefix:"send_button",type:"submit"},"SKICKA")))))))))),r.a.createElement(u.a,{sm:12,lg:6}," ",r.a.createElement(O,null),r.a.createElement("div",{id:"voteBox",className:"hide"},r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("h5",null,"V\xc4LJ KORT H\xc4R"),"Se till att vara \xf6verrens i gruppen innan valet g\xf6rs. Ni v\xe4ljer kort som ett lag.")),r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("div",{className:"inline-block"},r.a.createElement("img",{src:a(69)}),r.a.createElement("h6",{className:"inline-block"},"R\xd6TT KORT")),r.a.createElement("div",{className:"inline-block"},r.a.createElement("img",{src:a(70)}),r.a.createElement("h6",{className:"inline-block"},"BL\xc5TT KORT"))))))),r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("div",{id:"logout"},r.a.createElement("u",null,"Spelregler"),r.a.createElement(b.b,{to:"/"},"Log out")))))};var y=function(){var e=Object(n.useState)("rrudling@kth.se"),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),m=Object(s.a)(o,2),i=m[0],u=m[1],d=Object(n.useState)(""),p=Object(s.a)(d,2),E=p[0],g=p[1];function f(e){u(e)}function v(e){c(e)}return r.a.createElement(b.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/"},r.a.createElement(h,{email:a,setEmail:v,password:i,setPassword:f,loginError:E,setLoginError:g})),r.a.createElement(l.a,{exact:!0,path:"/ny_firebase_chatt"},r.a.createElement(h,{email:a,setEmail:v,password:i,setPassword:f,loginError:E,setLoginError:g})),r.a.createElement(l.a,{exact:!0,path:"/chat"},r.a.createElement(w,{email:a}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=a(18);a(71);N.initializeApp({apiKey:"AIzaSyAdpOM4Bx2jIRTmqkLdxq2-WysYpZXW_BI",authDomain:"chatt-app-b6c9a.firebaseapp.com",databaseURL:"https://chatt-app-b6c9a.firebaseio.com",projectId:"chatt-app-b6c9a",storageBucket:"chatt-app-b6c9a.appspot.com",messagingSenderId:"999297534472",appId:"1:999297534472:web:5e2d45b432ecd04f385fbd",measurementId:"G-P2SMFJCGS3"}),o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.094b11c0.chunk.js.map