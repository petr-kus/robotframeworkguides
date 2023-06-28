"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3389],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=o,m=c["".concat(l,".").concat(d)]||c[d]||f[d]||i;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7063:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const i={sidebar_position:1},a="Overview",s={unversionedId:"extending_robot_framework/listeners_prerun_api/overview",id:"extending_robot_framework/listeners_prerun_api/overview",title:"Overview",description:"Listeners",source:"@site/docs/extending_robot_framework/listeners_prerun_api/overview.md",sourceDirName:"extending_robot_framework/listeners_prerun_api",slug:"/extending_robot_framework/listeners_prerun_api/overview",permalink:"/docs/extending_robot_framework/listeners_prerun_api/overview",draft:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/extending_robot_framework/listeners_prerun_api/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Create And Release Libraries",permalink:"/docs/extending_robot_framework/custom-libraries/releasing_your_own_libraries"},next:{title:"Listener Interface",permalink:"/docs/extending_robot_framework/listeners_prerun_api/listeners"}},l={},p=[{value:"Listeners",id:"listeners",level:2},{value:"PreRunModifier",id:"prerunmodifier",level:2},{value:"Robot Framework API",id:"robot-framework-api",level:2}],u={toc:p};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("h2",{id:"listeners"},"Listeners"),(0,o.kt)("p",null,"Listeners can ",(0,o.kt)("em",{parentName:"p"},"watch")," the execution of the test suite and perform actions based on the events that are triggered during the execution.\nListeners can be enabled by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--listener")," option when running the test suite.  "),(0,o.kt)("p",null,"Example events on which the listener can react on are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"start/end of a test suite"),(0,o.kt)("li",{parentName:"ul"},"start/end of a test case"),(0,o.kt)("li",{parentName:"ul"},"start/end of a keyword"),(0,o.kt)("li",{parentName:"ul"},"...")),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/extending_robot_framework/listeners_prerun_api/listeners"},"Listener Chapter")," for more information."),(0,o.kt)("h2",{id:"prerunmodifier"},"PreRunModifier"),(0,o.kt)("p",null,"A PreRunModifier can modify the test suite before it is actually executed.",(0,o.kt)("br",{parentName:"p"}),"\n",'It is like a "dry run" of the test suite with the possibility to modify the test suite before the actual execution.\nIt can be enabled by using the ',(0,o.kt)("inlineCode",{parentName:"p"},"--prerunmodifier")," option when running the test suite."),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/extending_robot_framework/listeners_prerun_api/prerunmodifier"},"PreRunModifier Chapter")," for more information."),(0,o.kt)("h2",{id:"robot-framework-api"},"Robot Framework API"),(0,o.kt)("p",null,"The Robot Framework API allows us to  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run commands like ",(0,o.kt)("inlineCode",{parentName:"li"},"robot")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"rebot")," from Python scripts"),(0,o.kt)("li",{parentName:"ul"},"Access and modify all kinds of Robot Framework objects before, during and after the execution of the test suite")),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/extending_robot_framework/listeners_prerun_api/rf-api"},"Robot Framework API Chapter")," for more information."))}c.isMDXComponent=!0}}]);