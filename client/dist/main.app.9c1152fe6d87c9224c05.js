(window.webpackJsonp=window.webpackJsonp||[]).push([["main"],{0:function(e,t,n){n("201c"),e.exports=n("qVkA")},"1L0a":function(e,t,n){"use strict";(function(e){n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("RW0V"),n("xfY5"),n("VRzm"),n("Btvt"),n("91GP"),n("ls82");var r=n("vDqi"),a=n.n(r),i=n("7AKM"),o=n.n(i);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n,r,a,i,o){try{var l=e[i](o),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function m(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=JSON.parse(localStorage.getItem(e.env.TOKEN)||"null");return n&&(t?"".concat(n.refresh_token):"Bearer ".concat(n.access_token))}var d=a.a.create({baseURL:e.env.API,headers:{Authorization:m()}});d.interceptors.request.use((function(e){return c(c({},e),{},{headers:c(c({},e.headers),{},{Authorization:m()})})})),o()(a.a,(function(t){return a()({method:"POST",url:"".concat(e.env.API).concat(e.env.API_AUTH),headers:{Authorization:null},data:{refresh_token:m(!0),grant_type:"refresh_token"}}).then(function(){var n,r=(n=regeneratorRuntime.mark((function n(r){var a,i,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=r.data,i=a.access_token,o=a.refresh_token,localStorage.setItem(e.env.TOKEN,JSON.stringify({access_token:i,refresh_token:o})),Object.assign(t.response.config.headers,{Authorization:m()}),n.abrupt("return",Promise.resolve());case 4:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function o(e){u(i,r,a,o,l,"next",e)}function l(e){u(i,r,a,o,l,"throw",e)}o(void 0)}))});return function(e){return r.apply(this,arguments)}}()).catch((function(e){return Promise.reject({responseCode:Number(e.response.status),message:"There was an error in the refreshAuth interceptor",error:e})}))})),t.a=d}).call(this,n("8oxB"))},NpQO:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));n("xfY5"),n("VRzm"),n("Btvt"),n("CX2u");var r=n("q1tI"),a=n.n(r),i=n("FGyW"),o=n("vDqi"),l=n.n(o),c=n("i6r/"),s=n("1L0a"),u=Object(r.createContext)({});function m(t){var n=t.children;return a.a.createElement(u.Provider,{value:{logIn:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=arguments.length>1?arguments[1]:void 0,r=n.email,a=n.password;return t&&Object(c.a)("Logging in..."),l()({method:"POST",url:"".concat(e.env.API).concat(e.env.API_AUTH),data:{email:r,password:a}}).then((function(t){var n=t.data,r=n.access_token,a=n.refresh_token;localStorage.setItem(e.env.TOKEN,JSON.stringify({access_token:r,refresh_token:a}))})).catch((function(e){return{responseCode:Number(e.code),message:"Problem Loggin In",error:e}})).finally((function(){return i.a.dismiss()}))},registerUser:function(t){var n=t.email,r=t.firstName,a=t.lastName,o=t.password;return Object(c.a)("Hold tight, we're creating an account for ".concat(n)),l()({method:"POST",url:"".concat(e.env.API).concat(e.env.API_REGISTER_USER),data:{email:n,firstName:r,lastName:a,password:o}}).then((function(t){var n=t.data,r=n.access_token,a=n.refresh_token;localStorage.setItem(e.env.TOKEN,JSON.stringify({access_token:r,refresh_token:a}))})).catch((function(e){return{responseCode:Number(e.code),message:"Problem registering a user",error:e}})).finally((function(){return i.a.dismiss()}))},editUser:function(t){return Object(c.a)("doing things . . . "),Object(s.a)({method:"POST",url:"".concat(e.env.API).concat(e.env.API_EDIT_USER),data:{user:t}}).then((function(e){return e})).catch((function(e){return{responseCode:Number(e.code),message:"Problem editing a user",error:e}}))}}},n)}}).call(this,n("8oxB"))},"i6r/":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI"),a=n.n(r),i=n("FGyW");function o(e){return Object(i.a)(a.a.createElement("div",{className:"toast-loader"},a.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"-1.9 -1.9 36 36"},a.a.createElement("defs",null,a.a.createElement("linearGradient",{id:"apiSpinnerGradient",x1:"0%",y1:"0%",x2:"90%",y2:"60%"},a.a.createElement("stop",{offset:"0%",stopColor:"#1674c0"}),a.a.createElement("stop",{offset:"50%",stopColor:"#1674c0"}),a.a.createElement("stop",{offset:"100%",stopColor:"white"}))),a.a.createElement("circle",{className:"api-alert-loading-circle",cx:"15.91549430918954",cy:"15.91549430918954",fill:"none",r:"15.91549430918954",stroke:"url(#apiSpinnerGradient)",strokeWidth:"3"})),a.a.createElement("span",null,e)))}i.a.configure({closeButton:!1,position:"bottom-right",hideProgressBar:!0,toastClassName:"toast"})},qVkA:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("i8i4"),o=n("vOnD"),l=n("55Ip");n("DW2E");function c(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n  *,\n  *::before,\n  *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \'Lato\', sans-serif;\n  }\n\n  #ROOT {\n    min-height: 100vh;\n    overflow-x: hidden;\n    display: grid;\n    grid-template-areas:\n      "nav"\n      "main"\n      "footer";\n    grid-template-rows: max-content 1fr max-content;\n  }\n\n  main {\n    display: grid;\n    grid-row: 2;\n    grid-template-areas:\n      "left-sidebar main-column right-sidebar";\n    grid-template-columns: minmax(20%, max-content) 1fr minmax(20%, max-content);\n  }\n\n  ul,\n  li {\n    list-style-type: none;\n  }\n\n  a {\n    text-decoration: none;\n  }\n']);return c=function(){return e},e}var s=Object(o.b)(c()),u={flexin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"center",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"center",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"row",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"nowrap";return Object(o.c)(["display:flex;justify-content:",";align-items:",";flex-direction:",";flex-wrap:",";"],e,t,n,r)},remove:Object(o.c)(["display:none;line-height:0;visibility:hidden;"]),divider:Object(o.c)(["display:block;height:2px;width:75%;background-color:#e3e3e3;margin:15px auto;"]),leftSidebar:function(){return Object(o.c)(["grid-area:left-sidebar;"])},mainColumn:function(){return Object(o.c)(["grid-area:main-column;"])},rightColumn:function(){return Object(o.c)(["grid-area:right-sidebar;"])},fontLine:function(e,t){return Object(o.c)(["font-size:",";line-height:",";"],e,null!=t?t:e)},blueButton:function(){return Object(o.c)(["padding:10px 20px;text-transform:uppercase;text-shadow:1px 1px 1px black;background-color:#0bb5ff;border-radius:3px;border:none;color:white;text-align:center;"])},secondaryLink:function(){return Object(o.c)(["padding:10px 20px;text-transform:uppercase;background-color:#7f8c8d;border-radius:3px;border:none;color:white;text-align:center;"])},submitButton:function(){return Object(o.c)(["padding:10px 20px;background-color:#2ecc71;border:none;border-radius:3px;color:white;cursor:pointer;text-align:center;text-transform:uppercase;"])},elevation:function(e){switch(e){case 0:default:return Object(o.c)(["box-shadow:1px 1px 10px rgba(0,0,0,0.25);"])}},standardInput:function(){return Object(o.c)(["padding:8px 12px;border-radius:3px;border:1px solid #7f8c8d;&::placeholder{color:#7f8c8d;font-style:italic;}"])},errorRed:"#c0392b"},m=o.d.nav.withConfig({displayName:"Navstyle__Nav",componentId:"sc-1gyc6u9-0"})(["",';display:grid;grid-area:nav;grid-template-areas:"logo spacer menu";grid-template-columns:auto 1fr auto;padding:20px 5%;border-bottom:1px solid #e3e3e3;'],(function(e){return(0,e.theme.elevation)(0)})),d=o.d.h3.withConfig({displayName:"Navstyle__H3",componentId:"sc-1gyc6u9-1"})(["",";grid-area:logo;"],(function(e){return(0,e.theme.fontLine)("30px","50px")})),p=o.d.ul.withConfig({displayName:"Navstyle__Menu",componentId:"sc-1gyc6u9-2"})(["",";grid-area:menu;align-content:center;li:not(:last-of-type){margin-right:15px;}"],(function(e){return(0,e.theme.flexin)("flex-start")})),f=Object(o.d)(l.b).withConfig({displayName:"Navstyle__MenuLink",componentId:"sc-1gyc6u9-3"})(["",""],(function(e){return(0,e.theme.blueButton)()}));var h=function(){return a.a.createElement(m,null,a.a.createElement(d,null,"vidShare"),a.a.createElement(p,null,a.a.createElement("li",null,a.a.createElement(f,{to:"/home"},"Feed")),a.a.createElement("li",null,a.a.createElement(f,{to:"/login"},"Login"))))},g=o.d.footer.withConfig({displayName:"Footerstyle__Footer",componentId:"clyn5u-0"})(["",';display:grid;grid-template-areas:"name spacer links";grid-area:footer;padding:20px 5%;span{grid-area:name;}ul{'," grid-area:links;li{&:not(:first-of-type){margin-left:15px;}}}"],(function(e){return(0,e.theme.elevation)(0)}),(function(e){return(0,e.theme.flexin)("flex-end")}));var v=function(){return a.a.createElement(g,null,a.a.createElement("span",null,"Made By Patrick McLennan"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"https://www.github.com/PatrickMcLennan"},"Github")),a.a.createElement("li",null,a.a.createElement("a",{href:"https://www.linkedin.com"},"LinkedIn"))))},b=(n("91GP"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("ZMKu")),y=n("Ty5D");function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function w(e){var t=e.children,n=e.exitBeforeEnter,r=void 0===n||n,i=e.initial,o=void 0!==i&&i,l=Object(y.g)();return a.a.createElement(b.a,{exitBeforeEnter:r,initial:o},a.a.createElement(y.d,{location:l,key:l.pathname},t))}function O(e){var t=e.children,n=e.slide,r=void 0===n?0:n,i=e.slideUp,o=void 0===i?5:i;return a.a.createElement(b.b.main,{exit:{opacity:0,x:r,y:o},initial:{opacity:0,x:r,y:o},animate:{opacity:1,x:0,y:0}},t)}function N(e){var t=e.children,n=e.exact,r=void 0!==n&&n,i=(e.path,e.slide),o=void 0===i?0:i,l=e.slideUp,c=void 0===l?5:l,s=x(e,["children","exact","path","slide","slideUp"]);return a.a.createElement(y.b,E({exact:r,path:"somePath"},s),a.a.createElement(O,{slide:o,slideUp:c},t))}var _=n("NpQO");n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("rE2o");function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S=Object(r.createContext)({});function k(e){var t=e.children,n=j(Object(r.useState)({id:"idHash",email:"patrick.a.mclennan@gmail.com",firstName:"Patrick",lastName:"McLennan",videos:[],savedVideos:[]}),2),i=n[0],o=n[1];return a.a.createElement(S.Provider,{value:{user:i,setUser:o}},t)}n("VRzm"),n("ls82");var P=function(){return Object(r.useContext)(_.a)},A=function(){return Object(r.useContext)(S)};function C(e){Object(r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"}),document.title="".concat(e," | vidShare")}))}var L=n("MHX4"),R=o.d.form.withConfig({displayName:"Loginstyle__Form",componentId:"sc-16jvnvh-0"})(["",";"," margin:auto 0;grid-column-start:2;padding:45px 30px;border:1px solid #e3e3e3;border-radius:3px;"],(function(e){return(0,e.theme.flexin)("center","center","column")}),(function(e){return(0,e.theme.elevation)(0)})),M=o.d.h1.withConfig({displayName:"Loginstyle__H1",componentId:"sc-16jvnvh-1"})(["",";"],(function(e){return e.theme.remove})),T=o.d.h1.withConfig({displayName:"Loginstyle__H6",componentId:"sc-16jvnvh-2"})(["",";font-weight:400;margin-bottom:25px;transition:all 0.2s ease-out;"],(function(e){return(0,e.theme.fontLine)("46px")})),B=o.d.label.withConfig({displayName:"Loginstyle__Label",componentId:"sc-16jvnvh-3"})(["",";align-self:stretch;&:first-of-type{margin-bottom:20px;}span{",";",";margin-bottom:5px;}sup{"," margin-left:3.5px;}input{",";",";width:100%;}"],(function(e){return(0,e.theme.flexin)("flex-start","flex-start","column")}),(function(e){return(0,e.theme.flexin)("flex-start","flex-start")}),(function(e){return(0,e.theme.fontLine)("18px","22px")}),(function(e){var t=e.error,n=e.theme.errorRed;return t&&Object(o.c)(["color:",";"],n)}),(function(e){return(0,e.theme.standardInput)()}),(function(e){return(0,e.theme.fontLine)("18px","22px")})),F=o.d.input.withConfig({displayName:"Loginstyle__Submit",componentId:"sc-16jvnvh-4"})(["",";",";width:50%;margin-top:40px;"],(function(e){return(0,e.theme.submitButton)()}),(function(e){return(0,e.theme.fontLine)("18px")})),U=o.d.div.withConfig({displayName:"Loginstyle__Divider",componentId:"sc-16jvnvh-5"})(["",";width:25%;"],(function(e){return e.theme.divider})),V=Object(o.d)(l.b).withConfig({displayName:"Loginstyle__RegisterLink",componentId:"sc-16jvnvh-6"})([""," ",";width:50%;"],(function(e){return(0,e.theme.secondaryLink)()}),(function(e){return(0,e.theme.fontLine)("18px")}));var q=function(e){var t,n=e.onSubmit,r=Object(L.a)({defaultValues:{email:null!==(t=localStorage.getItem("vidShareEmail"))&&void 0!==t?t:""}}),i=r.handleSubmit,o=r.errors,l=r.register;return a.a.createElement(R,{"data-testid":"form",onSubmit:i(n)},a.a.createElement(T,null,"who dis"),a.a.createElement(B,{error:o.email,htmlFor:"email"},a.a.createElement("span",null,"Email ",a.a.createElement("sup",{"data-testid":"email_sup"},"*")),a.a.createElement("input",{"data-testid":"email_input",name:"email",placeholder:"someguy@whatever.com",ref:l({required:!0}),type:"email"})),a.a.createElement(B,{error:o.password,htmlFor:"password"},a.a.createElement("span",null,"Password ",a.a.createElement("sup",{"data-testid":"password_sup"},"*")),a.a.createElement("input",{"data-testid":"password_input",name:"password",placeholder:"it doesn't have to be crazy",ref:l({required:!0}),type:"password"})),a.a.createElement(F,{type:"submit",value:"Sign In"}),a.a.createElement(U,{"aria-hidden":"true"}),a.a.createElement(V,{to:"/register"},"Register Here"))};function D(e,t,n,r,a,i,o){try{var l=e[i](o),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}var z,H=function(){var e=P().logIn,t=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.email,a=n.password,t.prev=1,t.next=4,e(!0,{email:r,password:a});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[1,6]])})),function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(e){D(i,r,a,o,l,"next",e)}function l(e){D(i,r,a,o,l,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}();return C("Log In"),a.a.createElement(a.a.Fragment,null,a.a.createElement(M,null,"Log In"),a.a.createElement(q,{onSubmit:t}))};!function(e){e.MAIN="MAIN",e.LEFT_SIDEBAR="LEFT_SIDEBAR",e.RIGHT_SIDEBAR="RIGHT_SIDEBAR"}(z||(z={}));var G=o.d.article.withConfig({displayName:"UserCardstyle__Article",componentId:"sc-1s8s1tf-0"})(["display:grid;"," .name{",";grid-area:name;text-align:center;}.videos{",";grid-area:videos;}.savedVideos{",";grid-area:savedVideos;}"],(function(e){switch(e.viewMode){case"LEFT_SIDEBAR":default:return Object(o.c)(['grid-template-areas:"name" "videos" "savedVideos";grid-template-rows:repeat(max-content,3);padding-top:15px;padding-right:15px;text-align:right;.name{text-align:center;text-transform:uppercase;}']);case"MAIN":return Object(o.c)(["",';grid-template-areas:"name" "videos" "savedVideos";grid-template-rows:repeat(max-content,3);grid-area:main-column;margin:auto 0;border:1px solid #e3e3e3;.name{pointer-events:none;}'],(function(e){return(0,e.theme.elevation)(0)}))}}),(function(e){return(0,e.theme.fontLine)("18px","22px")}),(function(e){return(0,e.theme.fontLine)("16px","20px")}),(function(e){return(0,e.theme.fontLine)("16px","20px")}));var J=function(e){var t=e.viewMode,n=e.user,r=e.isUser;return a.a.createElement(G,{viewMode:t,"aria-label":"About ".concat(n.firstName," ").concat(n.lastName)},a.a.createElement(l.b,{"aria-hidden":t===z.MAIN,to:"/user/profile/".concat(n.id),className:"name"},n.firstName," ",n.lastName),a.a.createElement("span",{className:"videos"},n.videos.length," Videos uploaded"),a.a.createElement("span",{className:"savedVideos"},n.savedVideos.length," Saved Videos"),r&&a.a.createElement("div",{className:"buttons"},a.a.createElement(l.b,{to:"/user/edit/".concat(n.id)},"Edit account")))},K=n("QDav"),Y=o.d.section.withConfig({displayName:"Feedstyle__LeftSidebar",componentId:"sc-1k4pci2-0"})(["",";",";"],(function(e){return(0,e.theme.leftSidebar)()}),(function(e){return(0,e.theme.flexin)("flex-start","flex-end","column")})),W=o.d.section.withConfig({displayName:"Feedstyle__MainColumn",componentId:"sc-1k4pci2-1"})(["",""],(function(e){return(0,e.theme.mainColumn)()})),Q=o.d.section.withConfig({displayName:"Feedstyle__RightColumn",componentId:"sc-1k4pci2-2"})(["",""],(function(e){return(0,e.theme.rightColumn)()})),X=Object(o.d)(K.a).withConfig({displayName:"Feedstyle__Search",componentId:"sc-1k4pci2-3"})(["margin-top:40px;"]),$=o.d.section.withConfig({displayName:"Feedstyle__Results",componentId:"sc-1k4pci2-4"})(["display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:auto;grid-gap:10px;margin-top:25px;"]),Z=(n("hhXQ"),n("Z2Ku"),n("L9s1"),n("NL0m")),ee=(n("OG14"),n("cr+I"));function te(){var e=Object(y.g)();return ee.parse(e.search)}function ne(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return re(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ae=function(){var e=ne(Object(r.useState)(""),2),t=(e[0],e[1]),n=Object(Z.a)(),i=te;return a.a.createElement(X,{cacheOptions:!0,components:n,defaultOptions:!0,defaultValue:Object.values(i).map((function(e){return{label:e,value:e}})),isClearable:!0,isMulti:!0,loadOptions:function(e,t){setTimeout((function(){t(function(e){return[{label:"green",value:0},{label:"red",value:1},{label:"orange",value:2},{label:"blue",value:3}].filter((function(t){return t.label.includes(e.toLowerCase())}))}(e))}),1e3)},name:"search",onChange:function(e){return t(e),e}})};var ie=function(){return a.a.createElement("svg",{enableBackground:"new 0 0 24 24",height:"512",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"m20.497 1.505c-3.328-.121-5.576 1.787-6.762 5.694.61-.273 1.203-.395 1.777-.395 4.219 0-.971 8.155-2.263 8.155-1.522 0-2.437-7.284-2.747-9.273-.431-2.765-1.58-4.058-3.447-3.877-.789.075-1.975.799-3.554 2.181-1.15 1.055-2.316 2.105-3.501 3.16l1.129 1.472c1.075-.762 1.702-1.144 1.881-1.144 3.092 0 2.888 15.022 7.783 15.022 4.702 0 12.978-11.521 13.184-16.139l.013-.01c.134-3.165-1.021-4.785-3.493-4.846z",fill:"#19b2e5"}))};var oe=function(){return a.a.createElement("svg",{enableBackground:"new 0 0 24 24",height:"512",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"m.522 17.874c.49 1.738 1.989 2.056 2.089 2.117 2.467.672 16.295.674 18.799 0 1.715-.496 2.03-2.017 2.089-2.117.653-3.474.696-8.003-.03-11.945l.03.196c-.49-1.738-1.989-2.056-2.089-2.117-2.434-.661-16.298-.686-18.799 0-1.715.497-2.03 2.017-2.089 2.117-.699 3.651-.734 7.84 0 11.749zm9.086-2.223v-7.293l6.266 3.652z",fill:"#e53935"}))},le=o.d.button.withConfig({displayName:"VideoCardstyle__Button",componentId:"nqhg1m-0"})(["",""],(function(e){switch(e.viewMode){case"MAIN":default:return Object(o.c)(["background:none;border:1px solid #c9c9c9;border-radius:3px;cursor:pointer;text-align:left;"])}}));var ce,se=function(e){var t=e.video,n=e.viewMode,r=t.title,i=t.description,o=t.source;return a.a.createElement(le,{viewMode:n},a.a.createElement("h6",{className:"title"},r),a.a.createElement("p",{className:"description"},i),"VIMEO"===o&&a.a.createElement(ie,null),"YOUTUBE"===o&&a.a.createElement(oe,null),a.a.createElement("span",{className:"source"},o))};function ue(e){return function(e){if(Array.isArray(e))return me(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return me(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return me(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function me(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(e){e.YOUTUBE="YOUTUBE",e.VIMEO="VIMEO",e.OTHER="OTHER"}(ce||(ce={}));var de=function(){return a.a.createElement($,null,ue(Array(10)).map((function(e){return a.a.createElement(se,{key:e,viewMode:z.MAIN,video:{title:["test 1","hunt","mockery"][Math.floor(3*Math.random())],id:"20",description:"",source:ce.YOUTUBE,url:"whatever"}})})))};var pe=function(){var e=A().user;return C("Home"),a.a.createElement(a.a.Fragment,null,a.a.createElement(Y,null,a.a.createElement(J,{viewMode:z.LEFT_SIDEBAR,isUser:!0,user:e})),a.a.createElement(W,null,a.a.createElement("header",null),a.a.createElement(ae,null),a.a.createElement(de,null)),a.a.createElement(Q,null,a.a.createElement("div",null,"this is the right column")))},fe=o.d.form.withConfig({displayName:"Registerstyle__Form",componentId:"sc-1egr5fn-0"})(["",' display:grid;grid-template-areas:"header header" "please please" "firstName lastName" "email email" "password confirmPassword" "submit submit";column-gap:15px;margin:auto 0;grid-column-start:2;padding:45px 30px;border:1px solid #e3e3e3;border-radius:3px;.firstName{grid-area:firstName;}.lastName{grid-area:lastName;}.email{grid-area:email;}.password{grid-area:password;}.confirmPassword{grid-area:confirmPassword;}'],(function(e){return(0,e.theme.elevation)(0)})),he=o.d.h1.withConfig({displayName:"Registerstyle__H6",componentId:"sc-1egr5fn-2"})(["",";grid-area:header;font-weight:400;margin-bottom:25px;text-align:center;transition:all 0.2s ease-out;"],(function(e){return(0,e.theme.fontLine)("46px")})),ge=o.d.label.withConfig({displayName:"Registerstyle__Label",componentId:"sc-1egr5fn-3"})(["",";align-self:stretch;&:not(:last-of-type){margin-bottom:20px;}span{",";",";margin-bottom:5px;}sup{"," margin-left:3.5px;}input{",";",";width:100%;}"],(function(e){return(0,e.theme.flexin)("flex-start","flex-start","column")}),(function(e){return(0,e.theme.flexin)("flex-start","flex-start")}),(function(e){return(0,e.theme.fontLine)("18px","22px")}),(function(e){var t=e.error,n=e.theme.errorRed;return t&&Object(o.c)(["color:",";"],n)}),(function(e){return(0,e.theme.standardInput)()}),(function(e){return(0,e.theme.fontLine)("18px","22px")})),ve=o.d.span.withConfig({displayName:"Registerstyle__TopSpan",componentId:"sc-1egr5fn-4"})(["",";grid-area:please;margin-bottom:20px;opacity:0.5;font-style:italic;text-align:center;"],(function(e){return(0,e.theme.fontLine)("14px")})),be=o.d.input.withConfig({displayName:"Registerstyle__Submit",componentId:"sc-1egr5fn-5"})(["",";",";grid-area:submit;width:50%;margin:40px auto 0 auto;"],(function(e){return(0,e.theme.submitButton)()}),(function(e){return(0,e.theme.fontLine)("18px")}));var ye=function(e){var t=e.onSubmit,n=Object(L.a)(),r=n.errors,i=n.register,o=n.handleSubmit,l=n.watch;return a.a.createElement(fe,{"data-testid":"form",onSubmit:o(t)},a.a.createElement(he,null,"Create an Account"),a.a.createElement(ve,null,"please"),a.a.createElement(ge,{className:"firstName",error:r.email,htmlFor:"firstName"},a.a.createElement("span",null,"First Name ",a.a.createElement("sup",{"data-testid":"firstName_sup"},"*")),a.a.createElement("input",{"data-testid":"firstName_input",name:"firstName",placeholder:["John","Carol","Brenda","Ivan","Marko"][Math.floor(5*Math.random())],ref:i({required:!0}),type:"text"})),a.a.createElement(ge,{className:"lastName",error:r.email,htmlFor:"lastName"},a.a.createElement("span",null,"Last Name ",a.a.createElement("sup",{"data-testid":"lastName_sup"},"*")),a.a.createElement("input",{"data-testid":"lastName_input",name:"lastName",placeholder:["Baskins","The Destroyer","Doe","Spielberg","Polo"][Math.floor(5*Math.random())],ref:i({required:!0}),type:"text"})),a.a.createElement(ge,{className:"email",error:r.email,htmlFor:"email"},a.a.createElement("span",null,"Email ",a.a.createElement("sup",{"data-testid":"email_sup"},"*")),a.a.createElement("input",{"data-testid":"email_input",name:"email",placeholder:"someguy@whatever.com",ref:i({required:!0}),type:"email"})),a.a.createElement(ge,{className:"password",error:r.password,htmlFor:"password"},a.a.createElement("span",null,"Password ",a.a.createElement("sup",{"data-testid":"password_sup"},"*")),a.a.createElement("input",{"data-testid":"password_input",name:"password",placeholder:"it doesn't have to be crazy",ref:i({required:!0}),type:"password"})),a.a.createElement(ge,{className:"confirmPassword",error:r.password,htmlFor:"confirmPassword"},a.a.createElement("span",null,"Confirm Password ",a.a.createElement("sup",{"data-testid":"confirmPassword_sup"},"*")),a.a.createElement("input",{"data-testid":"confirmPassword_input",name:"confirmPassword",placeholder:"seriously keep it simple, i don't care",ref:i({required:!0,validate:function(e){return e===l("password")}}),type:"password"})),a.a.createElement(be,{type:"submit",value:"Create Account"}))};function Ee(e,t,n,r,a,i,o){try{var l=e[i](o),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}var xe=function(){var e=P().registerUser,t=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.prev=1,t.next=4,e(n);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[1,6]])})),function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(e){Ee(i,r,a,o,l,"next",e)}function l(e){Ee(i,r,a,o,l,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}();return C("Create an Account"),a.a.createElement(ye,{onSubmit:t})};var we=function(){var e=A().user,t=Object(y.h)().id;return a.a.createElement(J,{viewMode:z.MAIN,user:e,isUser:e.id===t})};var Oe=function(e){var t=e.onSubmit,n=e.user,r=Object(L.a)({defaultValues:{firstName:n.firstName,lastName:n.lastName,email:n.email}}),i=r.register,o=r.handleSubmit;return r.errors,a.a.createElement("form",{"data-testid":"form",onSubmit:o(t)},a.a.createElement("h1",null,"Change your life here"),a.a.createElement("label",{htmlFor:"firstName"},a.a.createElement("span",null,"First Name ",a.a.createElement("sup",{"data-testid":"firstName_sup"},"*")),a.a.createElement("input",{"data-testid":"firstName_input",name:"firstName",ref:i({required:!0}),type:"text"})),a.a.createElement("label",{htmlFor:"lastName"},a.a.createElement("span",null,"Last Name ",a.a.createElement("sup",{"data-testid":"lastName_sup"},"*")),a.a.createElement("input",{"data-testid":"lastName_input",name:"lastName",ref:i({required:!0}),type:"text"})),a.a.createElement("label",{htmlFor:"email"},a.a.createElement("span",null,"Email ",a.a.createElement("sup",{"data-testid":"email_sup"},"*")),a.a.createElement("input",{"data-testid":"email_input",name:"email",ref:i({required:!0}),type:"email"})))};function Ne(e,t,n,r,a,i,o){try{var l=e[i](o),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}var _e=function(){var e=A().user,t=P().editUser;if(Object(y.h)().id!==e.id)return a.a.createElement(y.a,{to:"/"});var n=function(){var e,n=(e=regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.prev=1,e.next=4,t(n);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){Ne(i,r,a,o,l,"next",e)}function l(e){Ne(i,r,a,o,l,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}();return a.a.createElement(Oe,{onSubmit:n,user:e})};var je=function(){return a.a.createElement(o.a,{theme:u},a.a.createElement(_.b,null,a.a.createElement(k,null,a.a.createElement(s,null),a.a.createElement(l.a,null,a.a.createElement(h,null),a.a.createElement(w,null,a.a.createElement(N,{exact:!0,path:"/login"},a.a.createElement(H,null)),a.a.createElement(N,{path:"/home"},a.a.createElement(pe,null)),a.a.createElement(N,{exact:!0,path:"/register"},a.a.createElement(xe,null)),a.a.createElement(N,{path:"/user/profile/:id"},a.a.createElement(we,null)),a.a.createElement(N,{path:"/user/edit/:id"},a.a.createElement(_e,null))),a.a.createElement(v,null)))))},Ie=document.querySelector("#ROOT");Object(i.render)(Object(r.createElement)(je),Ie)}},[[0,"runtime","axios","react","toastify","styled-components","vendors~main"]]]);