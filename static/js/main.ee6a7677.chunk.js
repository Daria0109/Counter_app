(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(t,e,a){t.exports={wrapperContainer:"Settings_wrapperContainer__3192j",container:"Settings_container__MfBoZ",inputsBlock:"Settings_inputsBlock__3Vz3X",inputRow:"Settings_inputRow__3SihM",title:"Settings_title__Gm-Md",inputError:"Settings_inputError__3JDWr",buttons:"Settings_buttons__3Tflh"}},,function(t,e,a){t.exports={display:"Display_display__2AA-q",number:"Display_number__2hzKn",maximum:"Display_maximum__3mphW",text:"Display_text__3kKRY",error_text:"Display_error_text__14Djs"}},,,function(t,e,a){t.exports={container:"Counter_container__Uwlto",buttons:"Counter_buttons__2X6S9",max:"Counter_max__17sPO"}},,,,,,function(t,e,a){t.exports={btn:"Button_btn__2OAaX"}},function(t,e,a){t.exports={mainContent:"App_mainContent__iChyL"}},function(t,e,a){t.exports={inputItem:"Input_inputItem__3wgY2"}},,function(t,e,a){t.exports=a(30)},,,,,function(t,e,a){},function(t,e,a){t.exports=a.p+"static/media/Orbitron-Regular.add0c424.ttf"},,,,,,,function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(6),o=a.n(r);a(22),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(23);var u,i=a(1),s=a(5),l=a(3);!function(t){t.CHANGE_MAX_VALUE="Counter/CHANGE_MAX_INPUT",t.CHANGE_START_VALUE="Counter/CHANGE_START_INPUT",t.SET_COUNTER_VALUE="Counter/SET_COUNTER_VALUE"}(u||(u={}));var m=function(t){return{type:u.SET_COUNTER_VALUE,value:t}},_={max:0,start:0,counter:0,isError:!1,isCounterAction:!1,isSetButtonDisabled:!0},b=Object(s.b)({counter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u.CHANGE_MAX_VALUE:return e.value<0||e.value<=t.start||t.start<0?Object(l.a)(Object(l.a)({},t),{},{max:e.value,isError:!0,isCounterAction:!1,isSetButtonDisabled:!0}):Object(l.a)(Object(l.a)({},t),{},{max:e.value,isError:!1,isCounterAction:!0,isSetButtonDisabled:!1});case u.CHANGE_START_VALUE:return e.value<0||e.value>=t.max||t.max<0?Object(l.a)(Object(l.a)({},t),{},{start:e.value,isError:!0,isCounterAction:!1,isSetButtonDisabled:!0}):Object(l.a)(Object(l.a)({},t),{},{start:e.value,isError:!1,isCounterAction:!0,isSetButtonDisabled:!1});case u.SET_COUNTER_VALUE:return Object(l.a)(Object(l.a)({},t),{},{counter:e.value,isError:!1,isCounterAction:!1,isSetButtonDisabled:!0});default:return t}}}),p=function(){try{var t=localStorage.getItem("state");if(null===t)return;return JSON.parse(t)}catch(e){return}}(),E=Object(s.c)(b,p);E.subscribe((function(){!function(t){try{var e=JSON.stringify(t);localStorage.setItem("state",e)}catch(a){}}({counter:E.getState().counter})})),window.store=E;var d=a(16),v=a(4),f=a.n(v),O=function(t){return t.counter.max},C=function(t){return t.counter.start},A=function(t){return t.counter.isError},N=function(t){return t.counter.counter},j=function(t){return t.counter.isCounterAction},S=function(t){return t.counter.isSetButtonDisabled},x=c.a.memo((function(){var t=Object(i.c)(O),e=Object(i.c)(N),a=Object(i.c)(A),n=Object(i.c)(j),r=e?"".concat(f.a.number):"",o=e===t?"".concat(f.a.maximum):"",u=n?"".concat(f.a.text):"",s=a?"".concat(f.a.error_text):"";return c.a.createElement("div",{className:"".concat(f.a.display," ").concat(r," ").concat(u," ").concat(s," ").concat(o)},(a?"Incorrect value!":n&&'Enter values and press "set"')||e)})),g=a(13),y=a.n(g),h=c.a.memo((function(t){var e=t.buttonName,a=t.callback,n=t.disabled;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:y.a.btn,onClick:a,disabled:n},e))})),w=a(7),T=a.n(w),k=c.a.memo((function(){var t=Object(n.useState)(!1),e=Object(d.a)(t,2),a=e[0],r=e[1],o=Object(i.b)(),u=Object(i.c)(O),s=Object(i.c)(C),l=Object(i.c)(N),_=Object(i.c)(A),b=Object(i.c)(j),p=Object(n.useCallback)((function(){o(m(l+1)),l+1===u&&r(!0)}),[l,o]),E=Object(n.useCallback)((function(){o(m(s)),r(!1)}),[s,o]),v=a?T.a.max:"";return c.a.createElement("div",{className:"".concat(T.a.container," ").concat(v)},c.a.createElement(x,null),c.a.createElement("div",{className:T.a.buttons},c.a.createElement(h,{buttonName:"inc",callback:p,disabled:_||b||l===u}),c.a.createElement(h,{buttonName:"reset",callback:E,disabled:_||b})))})),U=a(14),B=a.n(U),D=a(2),R=a.n(D),V=a(15),L=a.n(V),I=function(t){var e=t.className,a=t.value,n=t.step,r=t.changeValue,o=t.datatype;return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{className:"".concat(L.a.inputItem," ").concat(e),type:"number",value:a,step:n,onChange:function(t){return r(t,o)},datatype:o}))},G=c.a.memo((function(){var t=Object(i.b)(),e=Object(i.c)(O),a=Object(i.c)(C),r=Object(i.c)(S),o=Object(n.useCallback)((function(e,a){var n=+e.currentTarget.value;t("max"===a?function(t){return{type:u.CHANGE_MAX_VALUE,value:t}}(n):function(t){return{type:u.CHANGE_START_VALUE,value:t}}(n))}),[t]),s=Object(n.useCallback)((function(){t(m(a))}),[e,a,t]),l=e<0||e<=a?"".concat(R.a.inputError):"",_=a<0||e<=a?"".concat(R.a.inputError):"";return c.a.createElement("div",{className:R.a.wrapperContainer},c.a.createElement("div",{className:R.a.container},c.a.createElement("div",{className:R.a.inputsBlock},c.a.createElement("div",{className:R.a.inputRow},c.a.createElement("span",{className:R.a.title},"Max:"),c.a.createElement(I,{className:l,value:e,step:1,changeValue:o,datatype:"max"})),c.a.createElement("div",{className:R.a.inputRow},c.a.createElement("span",{className:R.a.title},"Start:"),c.a.createElement(I,{className:_,value:a,step:1,changeValue:o,datatype:"start"}))),c.a.createElement("div",{className:R.a.buttons},c.a.createElement(h,{buttonName:"set",callback:s,disabled:r}))))})),M=function(){return c.a.createElement("div",{className:B.a.mainContent},c.a.createElement(G,null),c.a.createElement(k,null))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,{store:E},c.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.ee6a7677.chunk.js.map