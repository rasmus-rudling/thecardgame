(this["webpackJsonpreact-vers"]=this["webpackJsonpreact-vers"]||[]).push([[0],{12:function(e,a,t){e.exports=t.p+"static/media/blue_card.db0b65ea.png"},13:function(e,a,t){e.exports=t.p+"static/media/red_card.2abfa2da.png"},14:function(e,a,t){e.exports={myTeam:"result_myTeam__NxD2r",otherTeam:"result_otherTeam__1wMq_",row:"result_row__1ULDB",container:"result_container__2y_V2",redText:"result_redText__20cAn",blueText:"result_blueText__au6ny"}},33:function(e,a,t){e.exports=t.p+"static/media/headerImage.22c1bb2d.png"},41:function(e,a,t){e.exports=t(74)},47:function(e,a,t){},48:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(35),c=t.n(l),o=(t(46),t(47),t(6)),s=t(16),m=t(78),i=t(79),d=t(39),u=t(80),E=t(81),g=(t(48),t(18));var p=function(e){var a=e.email,n=e.setEmail,l=e.password,c=e.setPassword,o=(e.loginError,e.setLoginError),p=Object(s.f)();return r.a.createElement(m.a,{className:"startContainer"},r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement("img",{src:t(33),alt:"THE CARD GAME",id:"headerimg"}))),r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement("div",{id:"text"}))),r.a.createElement(i.a,null,r.a.createElement(d.a,{md:3}),r.a.createElement(d.a,{md:6},r.a.createElement("div",{className:"loginBox"},r.a.createElement(u.a,{onSubmit:function(e){return function(e){e.preventDefault(),g.auth().signInWithEmailAndPassword(a,l).then((function(){p.push("/chat")}),(function(e){o("Server error"),console.log(e)}))}(e)}},r.a.createElement(u.a.Group,{controlId:"formBasicEmail"},r.a.createElement(u.a.Label,null,"Email address:"),r.a.createElement(u.a.Control,{type:"email",autoFocus:!0,placeholder:"Enter email",onChange:function(e){return n(e.target.value)}}),r.a.createElement(u.a.Text,{className:"text-muted"})),r.a.createElement(u.a.Group,{controlId:"formBasicPassword"},r.a.createElement(u.a.Label,null,"Password:"),r.a.createElement(u.a.Control,{type:"text",placeholder:"Password",onChange:function(e){return c(e.target.value)}})),r.a.createElement(E.a,{type:"submit"},"Logga in")))),r.a.createElement(d.a,{md:3})))},h=t(21),f=t.n(h),v=t(28),b=t(20),C=t(40),T=t(18);var j=function(e){var a=e.currentUsers,t=Object(n.useState)(0),l=Object(o.a)(t,2),c=l[0],s=l[1],m=Object(n.useState)(15),i=Object(o.a)(m,2),d=i[0],u=i[1];return Object(n.useEffect)((function(){var e;if(u(10),c>=d){300===d&&u(60),s(0);var t=new Date,n=t.getSeconds(),r=t.getMinutes(),l=t.getHours(),o=n<10?"0".concat(n):"".concat(n),m=r<10?"0".concat(r):"".concat(r),i=l<10?"0".concat(l):"".concat(l);T.firestore().collection("chats").doc(a).update({messages:T.firestore.FieldValue.arrayUnion({sender:"Admin",message:"\xc4r ni redo att g\xe5 till beslut?",senderImgURL:"none",timestamp:"".concat(i,":").concat(m,":").concat(o)}),usersVoted:[]}).then((function(){console.log("Adminmeddelande skapat!")}))}return e=setInterval((function(){s((function(e){return e+1}))}),1e3),function(){return clearInterval(e)}}),[c,a]),r.a.createElement("div",null)};t(70),t(71),t(72);var x=function(e){var a=e.otherChats,t=e.handleChange,l=Object(n.useState)(120),c=Object(o.a)(l,2),s=c[0],m=c[1],i=Object(n.useState)(0),d=Object(o.a)(i,2),u=d[0],E=d[1],g=Object(n.useState)(-120),p=Object(o.a)(g,2),h=p[0],f=p[1];function v(e,a,t){for(var n=0,r=0;0===n;)n=Math.random();for(;0===r;)r=Math.random();var l=Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*r);return((l=l/10+.5)>1||l<0)&&(l=v(e,a,t)),l=Math.pow(l,t),l*=a-e,l+=e}return Object(n.useEffect)((function(){var e,n;u>=s&&(E(0),h<20?(t(3,12,1,a),n=Math.round(v(2,12,1)),m(n)):h<55?(t(2,35,2,a),n=Math.round(v(2,30,1)),m(n)):h<90?(t(2,12,2,a),n=Math.round(v(3,12,3)),m(n)):h<100?(t(2,12,3,a),n=Math.round(v(2,12,1)),m(n)):(t(3,35,2,a),n=Math.round(v(2,30,1)),m(n)));return e=setInterval((function(){E((function(e){return e+1})),f((function(e){return e+1}))}),1e3),function(){return clearInterval(e)}})),r.a.createElement("div",null)};var N=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(0),s=Object(o.a)(c,2),m=s[0],u=s[1],E=Object(n.useState)(0),g=Object(o.a)(E,2),p=g[0],h=g[1],f=Object(n.useState)(0),v=Object(o.a)(f,2),b=v[0],C=v[1],T=Object(n.useState)(m),j=Object(o.a)(T,2),N=j[0],k=j[1],y=[m,p,b],O=["Axel Hagel","Elin Rudling","Niklas L\xf6wbeer"],M=["https://i.imgur.com/IBlrCCT.jpg","https://i.imgur.com/wBeQrMt.jpg","https://i.imgur.com/GRSyGWE.jpg"];function w(e,a,t){for(var n=0,r=0;0===n;)n=Math.random();for(;0===r;)r=Math.random();var l=Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*r);return((l=l/10+.5)>1||l<0)&&(l=w(e,a,t)),l=Math.pow(l,t),l*=a-e,l+=e}return Object(n.useEffect)((function(){t.forEach((function(e){var a=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),l=document.createElement("img"),c=document.createElement("div");if(c.innerText="".concat(e.timeStamp," ").concat(e.sender),l.src=e.imgURL,c.className="nameTimeTag",l.className="img-element-other-team",n.className="row",r.className="col",t.innerText=e.message,t.className="otherMessages",a.className="otherMessagesBox",a.append(c),a.append(l),a.append(t),r.append(a),n.append(r),"undefined"!==t.innerText){document.getElementById("chatTextOther").append(n);var o=document.getElementById("chatTextOther");o.scrollTop=o.scrollHeight}}))}),[t]),r.a.createElement("div",{className:"chatBox",id:"secretChat"},r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement("div",{id:"userinfo"},r.a.createElement("b",null,"Motst\xe5ndarlaget:"),r.a.createElement("br",null),r.a.createElement("img",{src:"https://i.imgur.com/IBlrCCT.jpg",alt:""})," Axel Hagel",r.a.createElement("img",{src:"https://i.imgur.com/wBeQrMt.jpg",alt:""})," Elin Rudling",r.a.createElement("img",{src:"https://i.imgur.com/GRSyGWE.jpg",alt:""})," Niklas L\xf6wbeer"))),r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement("div",{id:"chatTextOther"},r.a.createElement(x,{otherChats:t,handleChange:function(e,a,t){for(var n=arguments.length,r=new Array(n>3?n-3:0),c=3;c<n;c++)r[c-3]=arguments[c];var o,s=r,i="";o=Math.round(w(e,a,t));var d=Math.round(2*Math.random());y[d]!==N&&(d=Math.round(2*Math.random()),y[d]!==N&&(d=Math.round(2*Math.random()),y[d]!==N&&(d=Math.round(2*Math.random())))),0===d?u((function(e){return e+1})):1===d?h((function(e){return e+1})):C((function(e){return e+1})),k(m<N?m:p<N?p:b);for(var E=O[d],g=M[d],f=0;f<o;f++)i+="\u3000";var v=new Date,T=v.getMinutes(),j=v.getHours(),x=T<10?"0".concat(T):"".concat(T),I=j<10?"0".concat(j):"".concat(j),B={message:i,sender:E,imgURL:g,timeStamp:"".concat(I,":").concat(x)};s.push(B),l(s)}})))))},k=r.a.createElement("div",null,"V\xe4lkommen till The Card Game. Ni har nu blivit indelade i tv\xe5 lag. B\xf6rja med att l\xe4sa igenom reglerna genom att klicka p\xe5 'spelregler' l\xe4ngst ned i f\xf6nstret."),y=r.a.createElement("div",null,r.a.createElement("i",null,"The Card Game")," g\xe5r ut p\xe5 att ni tillsammans i laget ska v\xe4lja ett r\xf6tt eller bl\xe5tt kort. Ni t\xe4vlar mot det andra laget och po\xe4ngen f\xf6rdelas enligt:",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("img",{src:t(12)}),r.a.createElement("img",{src:t(12)})," B\xe5da lagen v\xe4ljer det bl\xe5a kortet. Alla deltagare f\xe5r 50 po\xe4ng.",r.a.createElement("br",null),r.a.createElement("img",{src:t(13)}),r.a.createElement("img",{src:t(12)})," Ni v\xe4ljer det r\xf6da kortet. Det andra laget v\xe4ljer det bl\xe5a kortet. Alla deltagare i ditt lag f\xe5r 100 po\xe4ng ",r.a.createElement("i",null,"var"),". Alla deltagare i det andra laget f\xe5r 0 po\xe4ng.",r.a.createElement("br",null),r.a.createElement("img",{src:t(12)}),r.a.createElement("img",{src:t(13)})," Ni v\xe4ljer det bl\xe5a kortet. Det andra laget v\xe4ljer det r\xf6da kortet. Alla deltagare i ditt lag f\xe5r 0 po\xe4ng. Alla deltagare i det andra laget f\xe5r 100 po\xe4ng var.",r.a.createElement("br",null),r.a.createElement("img",{src:t(13)}),r.a.createElement("img",{src:t(13)}),r.a.createElement("i",null,r.a.createElement("b",null,"Men "))," v\xe4ljer ",r.a.createElement("i",null,"b\xe5da")," lagen det r\xf6da kortet f\xe5r alla deltagare, i b\xe5da lagen, 0 po\xe4ng.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Pris: ")," Du kommer spela spelet tv\xe5 g\xe5nger - vid tv\xe5 olika tillf\xe4llen. Du har vid b\xe5da dessa tillf\xe4llen m\xf6jlighet att samla po\xe4ng. Deltagaren som i slut\xe4ndan har flest po\xe4ng vinner presentkort p\xe5 200 kr p\xe5 valfri butik listad p\xe5 ",r.a.createElement("i",null,r.a.createElement("u",null,"gogift.com")),", d\xe4r finns tex Clas Ohlsson, \xc5hlens, MatHem, H&M och m\xe5nga mer.",r.a.createElement("br",null),r.a.createElement("br",null),"Nu \xe4r det dags f\xf6r er i laget att diskutera och komma fram till vilket kort ni vill v\xe4lja. En bot kommer efter en stund kolla med er om ni \xe4r redo att g\xe5 till beslut. N\xe4r alla lagmedlemmar bekr\xe4ftat att ni \xe4r redo kommer en ruta f\xf6r r\xf6stning dyka upp. Annars f\xe5r ni forts\xe4tta diskutera, och boten \xe5terkommer igen efter en stund. Ni kan som l\xe4ngst diskutera i 10 minuter. Det \xe4r inte m\xf6jligt att kommunicera med det andra laget.",r.a.createElement("br",null),r.a.createElement("br",null),"N\xe4r b\xe5da laget har tagit sitt beslut kommer en ruta upp med vilka som vann. Motst\xe5ndarlaget kan inte se att ni g\xe5tt till beslut f\xf6rr\xe4n efter spelet \xe4r \xf6ver.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,r.a.createElement("i",null,"Lycka till!"))),O=t(18);var M=function(e){var a=e.email,l=e.resultHandler,c=Object(s.f)(),g=Object(n.useState)([]),p=Object(o.a)(g,2),h=p[0],T=p[1],x=Object(n.useState)(""),M=Object(o.a)(x,2),w=M[0],I=M[1],B=Object(n.useState)(""),R=Object(o.a)(B,2),S=R[0],L=R[1],P=Object(n.useState)(!0),A=Object(o.a)(P,2),_=A[0],D=A[1];Object(n.useEffect)((function(){O.auth().onAuthStateChanged(function(){var e=Object(v.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=4;break}c.push("/"),e.next=6;break;case 4:return e.next=6,O.firestore().collection("chats").where("users","array-contains",a.email).onSnapshot(function(){var e=Object(v.a)(f.a.mark((function e(a){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.docs.map((function(e){return e.data()})),e.next=3,T(t);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),O.firestore().collection("users").doc(a).onSnapshot((function(e){I(e.data().name),L(e.data().imgURL)}))}),[]);var U,G,H="",F=[];console.log("---"),console.log(h[1]),h.filter((function(e,t){var n=!1;return e.users.forEach((function(e){e===a&&(n=!0)})),n})).forEach((function(e,n){document.getElementById("chatMessages").innerHTML="",e.users.forEach((function(e,a,t){a!==t.length-1?H+=e+":":H+=e})),console.log(n),G=e.teamReady,F=e.usersVoted;var r=O.firestore().collection("chats").doc(H);if(console.log(G,"Teamready"),G&&setTimeout((function(){var a=e.chosenRedCard,n=e.chosenBlueCard;console.log(a),console.log(n);for(var r=document.createElement("div"),l=0;l<a;l++){var c=document.createElement("img");c.src=t(13),c.className="choicesCard",r.append(c)}for(var o=0;o<n;o++){var s=document.createElement("img");s.src=t(12),s.className="choicesCard",r.append(s)}var m=document.getElementById("chosenCardContainer");null!==m&&(m.innerHTML="",m.append(r))}),50),e.chosenBlueCard+e.chosenRedCard===3){var o=e.chosenRedCard>=2?"redCard":"blueCard",s=e.otherTeamFinalCard,m=-1,i=-1;"redCard"===o&&"redCard"===s?(m=0,i=0):"redCard"===o&&"blueCard"===s?(m=100,i=0):"blueCard"===o&&"redCard"===s?(m=0,i=100):"blueCard"===o&&"blueCard"===s&&(m=50,i=50),r.update({teamPoints:m,finalCard:o}),l(o,s,m,i),c.push("/result")}e.messages.forEach((function(t){var n=document.createElement("div"),l=document.createElement("div"),c=document.createElement("div"),o=document.createElement("img");if(U=H.split(":")[0],o.src=t.senderImgURL,l.className="row",c.className="col","Admin"===t.sender){var s=e.readyToChoose,m=e.notReadyToChoose;s+m===3&&(s>=2&&(r.update({teamReady:!0}),a===U&&_&&D(!1)),r.update({messages:O.firestore.FieldValue.arrayRemove(t)}),r.update({readyToChoose:0,notReadyToChoose:0})),n.className="adminMessages",n.innerText=" ".concat(t.message);var i=document.createElement("button"),d=document.createElement("button");i.innerText="Ja",d.innerText="Nej",console.log(F.includes(a)),F.includes(a)?(i.className="hide",d.className="hide"):(i.className="",d.className=""),i.addEventListener("click",(function(){i.className="hide",d.className="hide",r.update({readyToChoose:e.readyToChoose+1,usersVoted:O.firestore.FieldValue.arrayUnion(a)})})),d.addEventListener("click",(function(){i.className="hide",d.className="hide",r.update({notReadyToChoose:e.notReadyToChoose+1,usersVoted:O.firestore.FieldValue.arrayUnion(a)})})),n.append(i),n.append(d);for(var u=0;u<s;u++)n.append("\u2714\ufe0f");for(var E=0;E<m;E++)n.append("\u274c");c.append(n),l.append(c)}else if(t.sender===w){var g=document.createElement("div"),p=document.createElement("div");p.innerText="".concat(t.timestamp," ").concat(t.sender),n.innerText=" ".concat(t.message),g.append(p),g.append(n),g.append(o),g.className="myMessagesBox",n.className="myMessages",p.className="nameTimeTag",c.append(g),l.append(c)}else{var h=document.createElement("div"),f=document.createElement("div");f.innerText="".concat(t.timestamp," ").concat(t.sender),n.innerText=" ".concat(t.message),h.append(f),h.append(o),h.append(n),h.className="otherMessagesBox",n.className="otherMessages",f.className="nameTimeTag",c.append(h),l.append(c)}document.getElementById("chatMessages").append(l)}));var d=document.getElementById("chatMessages");d.scrollTop=d.scrollHeight}));var V=r.a.createElement("div",{className:"popContent"},r.a.createElement("div",{id:"header"}," SPELGRELER "),y),W=null;a===U&&_&&(W=r.a.createElement(j,{currentUsers:H}));var q=null;return G&&(q=r.a.createElement("div",{id:"voteBox"},r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement("h5",null,"V\xc4LJ KORT H\xc4R"),"Se till att vara \xf6verrens i gruppen innan valet g\xf6rs. Ni v\xe4ljer kort som ett lag.")),r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement("div",{className:"inline-block",id:"redCardChooser"},r.a.createElement("div",{onClick:function(){document.getElementById("redCardChooser").className="hide",document.getElementById("blueCardChooser").className="hide";var e=O.firestore().collection("chats").doc(H),a=O.firestore.FieldValue.increment(1);e.update({chosenRedCard:a})}},r.a.createElement("img",{src:t(13)}),r.a.createElement("h6",{className:"inline-block"},"R\xd6TT KORT"))),r.a.createElement("div",{className:"inline-block",id:"blueCardChooser"},r.a.createElement("div",{onClick:function(){document.getElementById("redCardChooser").className="hide",document.getElementById("blueCardChooser").className="hide";var e=O.firestore().collection("chats").doc(H),a=O.firestore.FieldValue.increment(1);e.update({chosenBlueCard:a})}},r.a.createElement("img",{src:t(12)}),r.a.createElement("h6",{className:"inline-block"},"BL\xc5TT KORT"))))),r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement("p",{className:"choicesText"},"Era val: "),r.a.createElement("div",{id:"chosenCardContainer"}))))),r.a.createElement(m.a,{className:"chatContainer",fluid:!0},r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement("img",{src:t(33),alt:"THE CARD GAME",id:"headerimg"}))),r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement("div",{id:"text"},k))),r.a.createElement(i.a,null," ",r.a.createElement(d.a,{sm:12,lg:6},"  ",r.a.createElement("div",{className:"chatBox"},r.a.createElement(i.a,null,r.a.createElement(d.a,{md:4},r.a.createElement("div",{id:"userinfo"},r.a.createElement("b",null,"Inloggad som:"),r.a.createElement("br",null),r.a.createElement("img",{src:"https://img.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg?size=338&ext=jpg",alt:""})," ",w)),r.a.createElement(d.a,{md:8},r.a.createElement("div",{id:"userinfo"},r.a.createElement("b",null,"Lagmedlemmar"),r.a.createElement("br",null),r.a.createElement("img",{src:"https://www.positivelysplendid.com/wp-content/uploads/2013/09/Circle-Crop-Profile-300x300.png",alt:""})," Emma Bobsson",r.a.createElement("img",{src:"https://images.squarespace-cdn.com/content/v1/5589a812e4b0248058743f7e/1562001389112-WFLCO7JEU2GDDM9ANYXT/ke17ZwdGBToddI8pDm48kMh3mVmBaCAeGwqCLG3iONRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PITeQtWPcxF65ANawkK25DREOmFck9peR6QL8AnpRiPJE/LAURA+PROFILE+CIRCLE+NEW.png",alt:""})," Mary Major"))),r.a.createElement(i.a,null,r.a.createElement(d.a,null,W,r.a.createElement("div",{id:"chatMessages"}))),r.a.createElement(i.a,null,r.a.createElement(d.a,{xs:12},r.a.createElement("div",{id:"submitRow"},r.a.createElement(u.a,{onSubmit:function(e){e.preventDefault();var a=document.getElementById("msg-box").value,t=new Date,n=t.getMinutes(),r=t.getHours(),l=n<10?"0".concat(n):"".concat(n),c=r<10?"0".concat(r):"".concat(r);O.firestore().collection("chats").doc(H).update({messages:O.firestore.FieldValue.arrayUnion({sender:w,message:a,timestamp:"".concat(c,":").concat(l),senderImgURL:S})}),document.getElementById("msg-box").value="",document.getElementById("msg-box").focus()}},r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement(u.a.Row,null,r.a.createElement(u.a.Control,{bsPrefix:"send_text",type:"text",id:"msg-box",autoFocus:!0}),r.a.createElement(E.a,{bsPrefix:"send_button",type:"submit"},"SKICKA")))))))))),r.a.createElement(d.a,{sm:12,lg:6}," ",r.a.createElement(N,null),q)),r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement("div",{id:"logout"},r.a.createElement(C.a,{trigger:r.a.createElement("u",null,"Spelregler"),modal:!0},V),r.a.createElement(b.b,{to:"/thecardgame"},"Log out")))))},w=t(14),I=t.n(w),B=(t(18),function(e){var a=document.createElement("img"),n=document.createElement("img");return a.src=t(13),n.src=t(12),r.a.createElement(m.a,{fluid:!0,className:I.a.container},setTimeout((function(){alert("Tack f\xf6r att du deltog i denna delt\xe4vling! Nu \xe4r du klar och kan st\xe4nga ned hemsidan!")}),3e3),r.a.createElement(i.a,{className:I.a.row},r.a.createElement(d.a,{md:6,className:I.a.myTeam},r.a.createElement("h1",null,"Ert val"),"redCard"===e.finalCard?r.a.createElement("img",{src:t(13)}):r.a.createElement("img",{src:t(12)}),r.a.createElement("p",null,"Ni f\xe5r ",r.a.createElement("strong",{className:100===e.myPoints||0===e.myPoints?I.a.redText:I.a.blueText},e.myPoints)," po\xe4ng var!")),r.a.createElement(d.a,{md:6,className:I.a.otherTeam},r.a.createElement("h1",null,"Motst\xe5ndarlagets val"),"redCard"===e.otherTeamFinalCard?r.a.createElement("img",{src:t(13)}):r.a.createElement("img",{src:t(12)}),r.a.createElement("p",null,"Motst\xe5ndarlaget f\xe5r ",r.a.createElement("strong",{className:100===e.myPoints||0===e.myPoints?I.a.redText:I.a.blueText},e.otherTeamPoints)," po\xe4ng var!"))))});var R=function(){var e=Object(n.useState)("rrudling@kth.se"),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),m=Object(o.a)(c,2),i=m[0],d=m[1],u=Object(n.useState)(""),E=Object(o.a)(u,2),g=E[0],h=E[1],f=Object(n.useState)(""),v=Object(o.a)(f,2),C=v[0],T=v[1],j=Object(n.useState)(""),x=Object(o.a)(j,2),N=x[0],k=x[1],y=Object(n.useState)(-1),O=Object(o.a)(y,2),w=O[0],I=O[1],R=Object(n.useState)(-1),S=Object(o.a)(R,2),L=S[0],P=S[1];function A(e){d(e)}function _(e){console.log(e,"raz12"),l(e)}function _(e){l(e)}return r.a.createElement(b.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(p,{email:t,setEmail:_,password:i,setPassword:A,loginError:g,setLoginError:h})),r.a.createElement(s.a,{exact:!0,path:"/thecardgame"},r.a.createElement(p,{email:t,setEmail:_,password:i,setPassword:A,loginError:g,setLoginError:h})),r.a.createElement(s.a,{exact:!0,path:"/chat"},r.a.createElement(M,{email:t,resultHandler:function(e,a,t,n){T(e),k(a),I(t),P(n)}})),r.a.createElement(s.a,{exact:!0,path:"/result"},r.a.createElement(B,{finalCard:C,otherTeamFinalCard:N,myPoints:w,otherTeamPoints:L}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=t(18);t(73);S.initializeApp({apiKey:"AIzaSyAdpOM4Bx2jIRTmqkLdxq2-WysYpZXW_BI",authDomain:"chatt-app-b6c9a.firebaseapp.com",databaseURL:"https://chatt-app-b6c9a.firebaseio.com",projectId:"chatt-app-b6c9a",storageBucket:"chatt-app-b6c9a.appspot.com",messagingSenderId:"999297534472",appId:"1:999297534472:web:5e2d45b432ecd04f385fbd",measurementId:"G-P2SMFJCGS3"}),c.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.d72febe3.chunk.js.map