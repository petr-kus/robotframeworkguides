"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[862],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(g,i(i({ref:r},u),{},{components:t})):n.createElement(g,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7306:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={sidebar_position:0,sidebar_label:"Static Library",title:"Static Library"},l=void 0,c={unversionedId:"extending_robot_framework/static_library",id:"extending_robot_framework/static_library",title:"Static Library",description:"A static library has all of its robot framework keywords defined as python functions.",source:"@site/docs/extending_robot_framework/static_library.md",sourceDirName:"extending_robot_framework",slug:"/extending_robot_framework/static_library",permalink:"/robotframeworkguides/extending_robot_framework/static_library",editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/extending_robot_framework/static_library.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Static Library",title:"Static Library"},sidebar:"tutorialSidebar",previous:{title:"Standard Library",permalink:"/robotframeworkguides/different_libraries/standard"},next:{title:"Docker Images",permalink:"/robotframeworkguides/using_rf_in_ci_systems/docker"}},u={},d=[{value:"Static Library With a Class",id:"static-library-with-a-class",level:3},{value:"Static Library withouth a Class",id:"static-library-withouth-a-class",level:3},{value:"Decorators",id:"decorators",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A static library has all of its robot framework keywords defined as python functions."),(0,o.kt)("h3",{id:"static-library-with-a-class"},"Static Library With a Class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class DemoLibrary:\n    def __init__(self, *args, **kwargs):\n        print(f"Sample Library initialized with args: {args} and kwargs: {kwargs}")\n \n    def my_keyword(self, *args, **kwargs):\n        print(f"Keyword got args: {args} and kwargs: {kwargs}")\n        return "Hello World"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-robotframework"},"*** Settings ***\nLibrary    DemoLibrary.py\n\n*** Test Cases ***\nUse a Keyword with multiple arguments\n    My Keyword    Argument 1    Argument 2    Named Argument=One Value\n")),(0,o.kt)("h3",{id:"static-library-withouth-a-class"},"Static Library withouth a Class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import base64\n\ndef encode_as_base64(string):\n    """\n    Encode string as base64.\n    """\n    return base64.b64encode(string.encode())\n\ndef decode_from_base64(string):\n    """\n    Decode string from base64.\n    """\n    return base64.b64decode(string).decode()\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-robotframework"},"*** Settings ***\nLibrary    LibraryWithoutClass.py\n\n*** Test Cases ***\nUse Custom Keywords\n    ${base64}    Encode As Base64    This is a Test String\n    Log    ${base64}\n    ${decoded}    Decode From Base64    ${base64}\n    Log    ${decoded}\n")),(0,o.kt)("h2",{id:"decorators"},"Decorators"),(0,o.kt)("p",null,"You can add decorators like ",(0,o.kt)("inlineCode",{parentName:"p"},"@keyword")," ",(0,o.kt)("inlineCode",{parentName:"p"},"@not_keyword")," to mark your functions as keywords and e.g. provide another name for the keyword."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from robot.api.deco import keyword, not_keyword\n\n\n@keyword('Login via user panel')\ndef login(username, password):\n      # ...\n\n@not_keyword\ndef this_is_not_keyword():\n    pass\n")),(0,o.kt)("p",null,"It can even be used to add tags or change the argument conversion."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from robot.api.deco import keyword\n\n\n@keyword(tags=['tag1', 'tag2'])\ndef login(username, password):\n    # ...\n\n@keyword('Custom name', ['tags', 'here'])\ndef another_example():\n    # ...\n\n@keyword(types={'count': int, 'case_insensitive': bool})\ndef example_keyword(count, case_insensitive=True):\n    if case_insensitive:\n        # ...\n\n@keyword(types=[int, bool])\ndef example_keyword(count, case_insensitive=True):\n    if case_insensitive:\n        # ...\n")),(0,o.kt)("p",null,"A simple ",(0,o.kt)("inlineCode",{parentName:"p"},"Calculate.py")," library with a single keyword that calculates a mathematical expression."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def calculate(term):\n    if term == "":\n        return 0\n    else:\n        return eval(term)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-robotframework"},"*** Settings ***\nLibrary    Calculate.py\n\n*** Test Cases ***\nPerform Calculations\n    ${result}    Calculate    1 + 2\n    Should Be Equal As Numbers    ${result}    3\n    ${result}    Calculate    10 * 5\n    Should Be Equal As Numbers    ${result}    50\n    ${result}    Calculate    8 / 4\n    Should Be Equal As Numbers    ${result}    2\n    ${result}    Calculate    2 - 1\n    Should Be Equal As Numbers    ${result}    1\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("iframe",{src:"https://robotframework.org/code/?codeProject=N4IgdghgtgpiBcIDCBXAzgFwPZRAGhABMY0BjAJwEsAHDSrMBEfEAM0oBsSEBtUdrgDlocRABUSGAMopKGGADpyWAEZYMLUg3lgNiAFSGABFJgY6YAOZojh-QB0wAGUoryEcgE8jPowAVPDAALBgBpGE8AdyxyQjRHRzsjCUwjJAg0EltDRwBVTLT0bCgjcKiYuMdfI0EsIwBBcksUWF14sGqAeTAYBqaWmF1qlIw+5taMKt8xIPIYXsbxwYwbX27e6ejh2fmpn3WjABEYVggUDlHfPaMAWXO6ai4jk7OL1Z9FgaGARmqPSwAzABeT4TIwA643bxlaKxaqg5ZGX6+BFDABM1WEsEIYy+GCBBwAahAOCg4ABfPD8TgwLGiEAAawisLiShIWBQ5FIcAIWl0yyYRhAlOpQhETAAbh5KBAVFw0Gy0ByuTyQHydHoQEKRWwaXSmAFgmFmRUFdRPJptALEKQOBkbIaQmAYab4NdiKwjAB9L2UMByH0ACkyHFYeFs-zQ4cMDMikYAlG6OtVfNQqLpA6x7CApNBHr0XG4PN4-XIZRxKAAvGA4yJyIJGSPwIzASPkxtgHGxpst7tNNDk7Pxqruk5GMBYL3-PFoYMwUOJ67VNN+jCB7MuuGWdTjurTiYKocJZM+D1GBgwKf9CZz0Ph-6Lk8plcZjcmrc7i+N6+IgDkAFI0F-BRsyMf9v0sYcwFHT1gjmS992WWcQzDRtvnvNF7wBR8U1TdM1zfcoP1GOD5ggmcjAAoDwyo38OxxWiQK1cDAwgdDG0wxtsKgmDzx6L0PVeNcUPvJogV-QT7l-HDcKMF8CJAVFRiCDIjClUlekA0DwIfY9qjPKB7hoLgBJee5kPnVD-nY-40XEySLiRX9RMBeyzMctFpKTWS5Pw9cQAAcR3RC2jAqMwvosLtKMVimhsppOP+bil14qBPC9JkiMIW9UP0SNo30PtrBk3D5MzQiWSMbdRh7Vt+3bCBOyMIq0GbYAWsHEAoJ8uYME5DpswACXnDg6gAdRiDhCGzYUqV1MVYANQInWJKhZXlBRzUtfldEFYUAF0CGIKgJRrPxlAAKxgUg9AwcgyQIZQ1AwQkYHINB6EYRAAFYFAABgUb5hSAA",width:"100%",height:"600"}))}m.isMDXComponent=!0}}]);