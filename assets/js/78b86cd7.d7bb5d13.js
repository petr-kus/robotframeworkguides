"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[633],{1500:function(e,r,t){t.d(r,{y:function(){return s},q:function(){return i}});var a=t(5587),o=t(7294);var i=function(){var e=(0,o.useRef)(null),r=new a.rj({columns:[{name:"Name",width:"50%",formatter:function(e,r,t){return(0,a.dy)("<div><a href="+r.cells[2].data+' target="_self" rel="noreferrer noopener">'+r.cells[0].data+"</a></div>"+r.cells[1].data+"<div></div>")}},{name:"Description",hidden:!0},{name:"Localpage",hidden:!0},{name:"URLs",formatter:function(e,r){for(var t="",o=0,i=Object.entries(r.cells[3].data);o<i.length;o++){var s=i[o],n=s[0];t+="<div><a href="+s[1]+' target="blank" rel="noreferrer noopener">'+n+"</a></div>"}return(0,a.dy)(t)}},{name:"Tags"}],data:[{name:"Browser Library",description:"Robot Framework Browser library powered by Playwright. Aiming for speed, reliability and visibility.",localpage:"browser",urls:{GitHub:"https://github.com/MarketSquare/robotframework-browser",PyPI:"https://pypi.org/project/robotframework-browser/",Project:"https://robotframework-browser.org/",Docs:"https://marketsquare.github.io/robotframework-browser/Browser.html"},tags:"UI, Web"},{name:"Selenium Library",description:"Web testing library that uses popular Selenium tool internally.",localpage:"selenium",urls:{GitHub:"https://github.com/robotframework/SeleniumLibrary/",PyPI:"https://pypi.org/project/robotframework-seleniumlibrary/",Docs:"https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html"},tags:"UI, Web"},{name:"RPA Framework",description:"Collection of open-source libraries and tools for Robotic Process Automation (RPA), designed to be used both with Robot Framework and Python.",localpage:"rpa",urls:{GitHub:"https://github.com/robocorp/rpaframework",PyPI:"https://pypi.org/project/rpaframework/",Project:"https://rpaframework.org/"},tags:"UI, Web, Desktop, API, Database, RPA"},{name:"Requests Library",description:"A Robot Framework library aimed to provide HTTP api testing functionalities by wrapping the well known Python Requests Library",localpage:"requests",urls:{GitHub:"https://github.com/MarketSquare/robotframework-requests/",PyPI:"https://pypi.org/project/robotframework-requests/",Docs:"https://marketsquare.github.io/robotframework-requests/doc/RequestsLibrary.html"},tags:"API"},{name:"Appium Library",description:"Android and iOS testing. Uses Appium internally.",localpage:"appium",urls:{GitHub:"https://github.com/serhatbolsu/robotframework-appiumlibrary",PyPI:"https://pypi.org/project/robotframework-appiumlibrary/",Docs:"https://serhatbolsu.github.io/robotframework-appiumlibrary/AppiumLibrary.html"},tags:"Mobile, UI"},{name:"Database Library",description:"Python based library for database testing.",localpage:"database",urls:{GitHub:"https://github.com/franz-see/Robotframework-Database-Library",PyPI:"https://pypi.org/project/robotframework-databaselibrary/",Project:"http://franz-see.github.io/Robotframework-Database-Library/",Docs:"http://franz-see.github.io/Robotframework-Database-Library/api/1.2.2/DatabaseLibrary.html"},tags:"Database"},{name:"Standard Library",description:"Logging, File Handling, Operating System, Process, String, and XML and much more",localpage:"standard",urls:{GitHub:"https://github.com/robotframework/robotframework/tree/master/src/robot/libraries",Project:"https://robotframework.org/robotframework/#standard-libraries",Docs:"https://robotframework.org/robotframework/#standard-libraries"},tags:"Process, File, OS, XML, String, Logging"}],sort:!0,search:{enabled:!0,ignoreHiddenColumns:!1}});return(0,o.useEffect)((function(){r.render(e.current)})),o.createElement("div",{ref:e})};var s=function(){var e=(0,o.useRef)(null),r=new a.rj({columns:[{name:"Icon",id:"icon",formatter:function(e){return(0,a.dy)('<img src="'+e+'"/>')}},{name:"Name",width:"50%",formatter:function(e,r,t){return(0,a.dy)("<div><a href="+r.cells[3].data+' target="_self" rel="noreferrer noopener">'+r.cells[1].data+"</a></div>"+r.cells[2].data)}},{name:"Description",hidden:!0},{name:"Localpage",hidden:!0},{name:"URLs",formatter:function(e,r){for(var t="",o=0,i=Object.entries(r.cells[4].data);o<i.length;o++){var s=i[o],n=s[0];t+="<div><a href="+s[1]+' target="blank" rel="noreferrer noopener">'+n+"</a></div>"}return(0,a.dy)(t)}},{name:"Used Library",formatter:function(e,r){for(var t="",o=0,i=Object.entries(r.cells[5].data);o<i.length;o++){var s=i[o],n=s[0];t+="<div><a href="+s[1]+' target="blank" rel="noreferrer noopener">'+n+"</a></div>"}return(0,a.dy)(t)}},{name:"Tags"}],data:[{icon:"/icons/list-checks.svg",name:"Todo MVC",description:"A simple todo app built in different frameworks and automated using Browser Library",localpage:"todo",urls:{Example:"todo","System Under Test":"https://todomvc.com/"},usedLibrary:{"Browser Library":"https://github.com/MarketSquare/robotframework-browser"},tags:"UI, Web"},{icon:"/icons/car.svg",name:"Vehice Insurance App",description:"An vehicle insurance calculator web app that requires user inputs in multiple screens",localpage:"insurance",urls:{Example:"insurance","System Under Test":"http://sampleapp.tricentis.com/"},usedLibrary:{"Browser Library":"https://github.com/MarketSquare/robotframework-browser"},tags:"UI, Web"},{icon:"/icons/bed.svg",name:"Restful Booker",description:"A room booking app with a REST API",localpage:"restfulbooker",urls:{Example:"restfulbooker","System Under Test":"https://restful-booker.herokuapp.com/"},usedLibrary:{"Requests Library":"https://github.com/MarketSquare/robotframework-requests/"},tags:"API, Requests"},{icon:"/icons/log-in.svg",name:"MFA Login",description:"A Login page which requires a two-factor authentication with a TOTP code",localpage:"mfa_login",urls:{Example:"mfa_login","System Under Test":"https://seleniumbase.io/realworld/login"},usedLibrary:{"Browser Library":"https://github.com/MarketSquare/robotframework-browser","Custom TOPT Library":"/code-examples/browser/totp.py"},tags:"UI, Web, MFA, TOTP"}],sort:!0,search:{enabled:!0,ignoreHiddenColumns:!1}});return(0,o.useEffect)((function(){r.render(e.current)})),o.createElement("div",{ref:e})}},4261:function(e,r,t){t.r(r),t.d(r,{assets:function(){return b},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var a=t(7462),o=t(3366),i=(t(7294),t(3905)),s=t(1500),n=["components"],l={sidebar_position:0,sidebar_label:"Overview",title:"Examples Overview"},p=void 0,u={unversionedId:"examples/overview",id:"examples/overview",title:"Examples Overview",description:"",source:"@site/docs/examples/overview.mdx",sourceDirName:"examples",slug:"/examples/overview",permalink:"/examples/overview",editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/examples/overview.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Overview",title:"Examples Overview"},sidebar:"tutorialSidebar",previous:{title:"Standard Library",permalink:"/different_libraries/standard"},next:{title:"Vehicle Insurance App",permalink:"/examples/insurance"}},b={},m=[],c={toc:m};function d(e){var r=e.components,t=(0,o.Z)(e,n);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)(s.y,{mdxType:"ExampleGrid"}))}d.isMDXComponent=!0}}]);