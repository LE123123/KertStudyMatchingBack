"use strict";(self.webpackChunkfinal_project=self.webpackChunkfinal_project||[]).push([[660],{195:function(n,e,r){var i,t,o,s=r(168),a=(r(2791),r(7939)),d=r(241),l=r(184),c=a.default.div(i||(i=(0,s.Z)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),u=a.default.div(t||(t=(0,s.Z)(["\n  width: 450px;\n  background: white;\n  padding: 1.5rem;\n  border-radius: 4px;\n  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  p {\n    margin-bottom: 3rem;\n  }\n\n  .buttons {\n    display: flex;\n    justify-content: flex-end;\n  }\n"]))),x=(0,a.default)(d.Z)(o||(o=(0,s.Z)(["\n  height: 2rem;\n\n  & + & {\n    margin-left: 0.75rem;\n  }\n"])));e.Z=function(n){var e=n.visible,r=n.title,i=n.description,t=n.onCancel,o=void 0===t?function(){}:t,s=n.cancelContext,a=void 0===s?"\ucde8\uc18c":s,d=n.onConfirm,f=n.confirmText,h=void 0===f?"\ud655\uc778":f,p=n.checker,m=void 0!==p&&p;return e?(0,l.jsx)(c,{children:(0,l.jsxs)(u,{children:[(0,l.jsx)("h2",{children:r}),(0,l.jsx)("div",{children:i}),(0,l.jsxs)("div",{className:"buttons",children:[!m&&(0,l.jsx)(x,{onClick:o,children:a}),(0,l.jsx)(x,{cyan:!0,onClick:d,children:h})]})]})}):null}},241:function(n,e,r){var i,t,o,s,a,d,l=r(1413),c=r(168),u=(r(2791),r(7939)),x=r(2478),f=r(3504),h=r(184),p=(0,u.css)(i||(i=(0,c.Z)(["\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 0.25rem 1rem;\n  color: white;\n  outline: none;\n  cursor: pointer;\n  margin-top: 0px !important;\n  background: ",";\n  transition: all 0.5s ease;\n  &:hover {\n    background: ",";\n  }\n\n  ","\n\n  ","\n\n  ","\n\n\t&:disabled {\n    background: ",";\n    color: ",";\n    cursor: not-allowed;\n  }\n"])),x.Z.gray[8],x.Z.gray[6],(function(n){return n.cyan&&(0,u.css)(t||(t=(0,c.Z)(["\n      background: ",";\n      &:hover {\n        background: ",";\n      }\n    "])),x.Z.cyan[7],x.Z.cyan[6])}),(function(n){return n.yellow&&(0,u.css)(o||(o=(0,c.Z)(["\n      background: #f5d922;\n      &:hover {\n        background: #f5cb22;\n      }\n    "])))}),(function(n){return n.fullWidth&&(0,u.css)(s||(s=(0,c.Z)(["\n      padding: 0.5rem 0rem;\n      width: 100%;\n      font-size: 0.9rem;\n    "])))}),x.Z.gray[3],x.Z.gray[5]),m=u.default.button(a||(a=(0,c.Z)(["\n  ","\n"])),p),g=(0,u.default)(f.rU)(d||(d=(0,c.Z)(["\n  ","\n"])),p);e.Z=function(n){return n.to?(0,h.jsx)(g,(0,l.Z)((0,l.Z)({},n),{},{cyan:n.cyan?1:0})):(0,h.jsx)(m,(0,l.Z)({},n))}},1219:function(n,e,r){var i,t=r(1413),o=r(5987),s=r(168),a=(r(2791),r(7939)),d=r(184),l=["children"],c=a.default.div(i||(i=(0,s.Z)(["\n  margin: 0 auto;\n  padding-left: 1rem;\n  padding-right: 1rem;\n"])));e.Z=function(n){var e=n.children,r=(0,o.Z)(n,l);return(0,d.jsx)(c,(0,t.Z)((0,t.Z)({},r),{},{children:e}))}},3921:function(n,e,r){r.d(e,{Z:function(){return Z}});r(2791);var i,t,o,s,a=r(9434),d=r(168),l=r(7939),c=r(1219),u=r(241),x=r(3504),f=r(184),h=l.default.div(i||(i=(0,d.Z)(["\n  width: 100%;\n  position: fixed;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);\n  z-index: 100;\n  background: rgba(255, 255, 255, 0.8);\n"]))),p=(0,l.default)(c.Z)(t||(t=(0,d.Z)(["\n  height: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  a {\n    text-decoration: none;\n  }\n\n  .logo {\n    font-size: 1.125rem;\n    font-weight: 800;\n    letter-spacing: 2px;\n    color: black;\n    margin-left: 60px;\n  }\n\n  .right {\n    display: flex;\n    align-items: center;\n  }\n"]))),m=l.default.div(o||(o=(0,d.Z)(["\n  height: 4rem;\n"]))),g=l.default.div(s||(s=(0,d.Z)(["\n  font-weight: 800;\n  margin-right: 1rem;\n"]))),j=function(n){var e=n.user,r=n.onLogout;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h,{children:(0,f.jsxs)(p,{children:[(0,f.jsx)(x.rU,{to:"/",className:"logo",children:"STUIK ( Study In Kert )"}),e?(0,f.jsxs)("div",{className:"right",children:[(0,f.jsx)(g,{children:e.username}),(0,f.jsx)(u.Z,{onClick:r,children:"\ub85c\uadf8\uc544\uc6c3"})]}):(0,f.jsx)("div",{className:"right",children:(0,f.jsx)(u.Z,{to:"/login",children:"\ub85c\uadf8\uc778"})})]})}),(0,f.jsx)(m,{})]})},b=r(4098),v=r(6871),Z=function(){var n=(0,v.s0)(),e=(0,a.v9)((function(n){return{user:n.user.user}})).user,r=(0,a.I0)();return(0,f.jsx)(j,{user:e,onLogout:function(){r((0,b.kS)()),n("/")}})}},1386:function(n,e,r){r.d(e,{Z:function(){return z}});var i,t,o,s=r(885),a=r(2791),d=r(1413),l=r(5987),c=r(168),u=r(7939),x=r(1219),f=r(813),h="common_iconOuter__tm0-n",p=r(3504),m=r(184),g=["IconComponent","text","children"],j=u.default.div(i||(i=(0,c.Z)(["\n  position: fixed;\n  height: 100%;\n  width: 15rem;\n  background: rgb(30, 35, 39);\n  left: -15rem;\n  transition: all 0.5s ease;\n  top: 4rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 102;\n"]))),b=(0,u.default)(x.Z)(t||(t=(0,c.Z)(["\n  height: auto;\n  width: 100%;\n  color: #a7adb2;\n  padding: 20px 20px;\n  background: rgb(44, 50, 56);\n  font-size: 1.2rem;\n\n  a {\n    transition: all 0.5s ease;\n    font-weight: 700;\n  }\n\n  div + div {\n    margin-top: 23px;\n  }\n\n  a:hover {\n    color: white;\n    text-decoration: underline;\n    text-underline-offset: 4px;\n    cursor: pointer;\n  }\n"]))),v=(0,u.default)(x.Z)(o||(o=(0,c.Z)(["\n  height: auto;\n  width: 100%;\n  color: white;\n  padding: 20px 20px;\n  font-size: 1.1rem;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Z=function(n){var e=n.IconComponent,r=n.text,i=n.children,t=(0,l.Z)(n,g);return(0,m.jsxs)("div",(0,d.Z)((0,d.Z)({},t),{},{className:h,children:[(0,m.jsx)(e,{style:{fontSize:20}}),(0,m.jsx)("span",{children:r}),i]}))},y=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("input",{type:"checkbox",id:"menuicon"}),(0,m.jsxs)("label",{htmlFor:"menuicon",children:[(0,m.jsx)("span",{}),(0,m.jsx)("span",{}),(0,m.jsx)("span",{})]})]})},k=function(n){var e=n.navItemList,r=n.isLoggedIn,i=n.onLogout,t=n.user;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(y,{}),(0,m.jsxs)(j,{children:[e.map((function(n){return"HomePage"===n?(0,m.jsx)(b,{children:(0,m.jsx)(p.rU,{to:"/",children:"\ud648"})},n):r&&"MyPost"===n?(0,m.jsx)(b,{children:(0,m.jsx)(p.rU,{to:"/?username=".concat(null===t||void 0===t?void 0:t.username),children:"\ub0b4 \uc2a4\ud130\ub514 \ud655\uc778\ud558\uae30"})},n):r&&"EditProfile"===n?(0,m.jsx)(b,{children:(0,m.jsx)(p.rU,{to:"/profile",children:"\ud504\ub85c\ud544 \uc218\uc815"})},n):r||"Login"!==n?r||"Register"!==n?r&&"Logout"===n?(0,m.jsx)(b,{children:(0,m.jsx)("a",{onClick:i,style:{cursor:"pointer"},children:"\ub85c\uadf8\uc544\uc6c3"})},n):null:(0,m.jsx)(b,{children:(0,m.jsx)(p.rU,{to:"/register",children:"\ud68c\uc6d0\uac00\uc785"})},n):(0,m.jsx)(b,{children:(0,m.jsx)(p.rU,{to:"/login",children:"\ub85c\uadf8\uc778"})},n)})),(0,m.jsx)(v,{children:(0,m.jsx)(Z,{text:"Study",IconComponent:f.Z})})]})]})},w=r(9434),C=r(4098),z=function(){var n=(0,w.I0)(),e=(0,w.v9)((function(n){return{user:n.user.user}})).user,r=(0,a.useState)(["HomePage","EditProfile","MyPost","Login","Register","Logout"]),i=(0,s.Z)(r,2),t=i[0];i[1];return(0,m.jsx)(k,{navItemList:t,isLoggedIn:!!e,onLogout:function(){n((0,C.kS)())},user:e})}},2478:function(n,e){e.Z={gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"]}},7660:function(n,e,r){r.r(e),r.d(e,{default:function(){return V}});var i,t,o,s,a,d,l,c,u,x,f=r(2791),h=r(1386),p=r(3921),m=r(1413),g=r(885),j=r(9434),b=r(168),v=r(7939),Z=r(1219),y=r(2478),k=r(241),w=r(195),C=r(184),z=function(n){var e=n.visible,r=n.onConfirm,i=n.onCancel;return(0,C.jsx)(w.Z,{visible:e,onConfirm:r,onCancel:i,description:"\uc815\ub9d0\ub85c \ud504\ub85c\ud544\uc744 \ubcc0\uacbd\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",confirmText:"\ud655\uc778",title:"\ud504\ub85c\ud544 \ubcc0\uacbd"})},I=v.default.div(i||(i=(0,b.Z)(["\n  margin-top: 60px;\n"]))),L=(0,v.default)(Z.Z)(t||(t=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: space-between;\n  row-gap: 60px;\n  padding: 0px 40px;\n  position: relative;\n"]))),N=v.default.div(o||(o=(0,b.Z)(["\n  position: absolute;\n  top: -15px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: white;\n  padding: 5px 10px;\n  border: 1px solid black;\n  border-radius: 10px;\n"]))),S=v.default.form(s||(s=(0,b.Z)(["\n  border: 0.5px solid black;\n  border-radius: 0.5rem;\n  padding: 20px;\n  height: 250px;\n  width: 100%;\n  border-radius: 0.5rem;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 2px 10px 10px #eee;\n"]))),U=v.default.div(a||(a=(0,b.Z)(["\n  border: 0.5px solid black;\n  border-radius: 0.5rem;\n  padding: 20px;\n  height: 250px;\n  width: 100%;\n  box-shadow: 0px 2px 10px 10px #eee;\n  position: relative;\n  display: flex;\n"]))),F=v.default.div(d||(d=(0,b.Z)(["\n  text-align: center;\n  font-size: 2rem;\n  color: ",";\n  margin-bottom: 30px;\n"])),y.Z.gray[7]),_=v.default.table(l||(l=(0,b.Z)(["\n  border: 1px solid black;\n  border-collapse: collapse;\n  width: 90%;\n  margin: auto;\n\n  td {\n    border: 1px solid black;\n    padding: 10px;\n\n    &.info {\n      padding: 15px 20px;\n      background-color: ",";\n    }\n  }\n"])),y.Z.gray[4]),H=v.default.input(c||(c=(0,b.Z)(["\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n  &:focus {\n    outline: 2px solid ",";\n  }\n"])),y.Z.cyan[3]),P=v.default.div(u||(u=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  column-gap: 20px;\n  position: absolute;\n  bottom: 3%;\n  left: 50%;\n  transform: translateX(-50%);\n"]))),M=v.default.div(x||(x=(0,b.Z)(["\n  color: red;\n  font-size: 0.8rem;\n  text-align: center;\n  position: relative;\n  top: 30px;\n"]))),E=function(n){var e=n.user,r=n.onChangeField,i=n.profile,t=n.onConfirm,o=n.onBackClick,s=n.errorMessage,a=e.email,d=e.username,l=i.email,c=i.username,u=function(n){var e=n.target,i=e.value,t=e.name;r({key:t,value:i})};(0,f.useEffect)((function(){var n=e.email,i=e.username||"";r({key:"email",value:n||""}),r({key:"username",value:i})}),[a,r,e]);var x=(0,f.useState)(!1),h=(0,g.Z)(x,2),p=h[0],m=h[1];return(0,C.jsxs)(I,{children:[(0,C.jsx)(F,{children:"\ud504\ub85c\ud544 \uc815\ubcf4"}),(0,C.jsxs)(L,{children:[(0,C.jsxs)(U,{children:[(0,C.jsx)(N,{children:"\ud504\ub85c\ud544 \ud655\uc778"}),(0,C.jsx)(_,{children:(0,C.jsxs)("tbody",{children:[(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:"info",children:"email"}),(0,C.jsx)("td",{children:a})]}),(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:"info",children:"username"}),(0,C.jsx)("td",{children:d})]})]})})]}),(0,C.jsxs)(S,{children:[(0,C.jsx)(N,{children:"\ud504\ub85c\ud544 \uc218\uc815"}),(0,C.jsx)(M,{children:s}),(0,C.jsx)(_,{children:(0,C.jsxs)("tbody",{children:[(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:"info",children:"email"}),(0,C.jsx)("td",{children:(0,C.jsx)(H,{disabled:!0,value:l,name:"email",onChange:u,placeholder:a})})]}),(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:"info",children:"username"}),(0,C.jsx)("td",{children:(0,C.jsx)(H,{name:"username",value:c,onChange:u,placeholder:d})})]})]})})]}),(0,C.jsxs)(P,{children:[(0,C.jsx)(k.Z,{cyan:!0,onClick:function(){m(!0)},children:"\ud655\uc778"}),(0,C.jsx)(k.Z,{cyan:!0,onClick:o,children:"\ub4a4\ub85c\uac00\uae30"})]})]}),(0,C.jsx)(z,{visible:p,onConfirm:function(){m(!1),t()},onCancel:function(){m(!1)}})]})},K=r(3298),T=r(4098),B=r(6871),R=function(){var n=(0,f.useState)(""),e=(0,g.Z)(n,2),r=e[0],i=e[1],t=(0,B.s0)(),o=(0,j.I0)(),s=(0,j.v9)((function(n){return{user:n.user.user,profile:n.profile}})),a=s.user,d=s.profile,l=(0,f.useCallback)((function(n){return o((0,K.uC)(n))}),[o]);return(0,f.useEffect)((function(){}),[]),(0,C.jsx)(E,{user:a,onChangeField:l,profile:d,onConfirm:function(){""!==d.username?d.username!==a.username?(o((0,K.ck)((0,m.Z)((0,m.Z)({},d),{},{_id:a._id}))),o((0,T.DK)(d)),i("")):i("username\uc744 \ubcc0\uacbd\ud574\uc8fc\uc138\uc694."):i("username\uce78\uc744 \ucc44\uc6cc\uc8fc\uc138\uc694.")},onBackClick:function(){t("/")},errorMessage:r})},V=function(){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(h.Z,{}),(0,C.jsx)(p.Z,{}),(0,C.jsx)(R,{})]})}},813:function(n,e,r){var i=r(5318);e.Z=void 0;var t=i(r(5649)),o=r(184),s=(0,t.default)((0,o.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Article");e.Z=s}}]);
//# sourceMappingURL=660.5aa1cc2a.chunk.js.map