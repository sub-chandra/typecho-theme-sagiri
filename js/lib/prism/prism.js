/* PrismJS 1.17.1
https://prismjs.com/download.html#themes=prism&plugins=wpd+toolbar+autoloader+show-language+copy-to-clipboard */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(u){var c=/\blang(?:uage)?-([\w-]+)\b/i,r=0;var _={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof L?new L(e.type,_.util.encode(e.content),e.alias):Array.isArray(e)?e.map(_.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++r}),e.__id},clone:function n(e,t){var a,r,i=_.util.type(e);switch(t=t||{},i){case"Object":if(r=_.util.objId(e),t[r])return t[r];for(var o in a={},t[r]=a,e)e.hasOwnProperty(o)&&(a[o]=n(e[o],t));return a;case"Array":return r=_.util.objId(e),t[r]?t[r]:(a=[],t[r]=a,e.forEach(function(e,r){a[r]=n(e,t)}),a);default:return e}},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(e){var r=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack)||[])[1];if(r){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==r)return n[t]}return null}}},languages:{extend:function(e,r){var n=_.util.clone(_.languages[e]);for(var t in r)n[t]=r[t];return n},insertBefore:function(n,e,r,t){var a=(t=t||_.languages)[n],i={};for(var o in a)if(a.hasOwnProperty(o)){if(o==e)for(var l in r)r.hasOwnProperty(l)&&(i[l]=r[l]);r.hasOwnProperty(o)||(i[o]=a[o])}var s=t[n];return t[n]=i,_.languages.DFS(_.languages,function(e,r){r===s&&e!=n&&(this[e]=i)}),i},DFS:function e(r,n,t,a){a=a||{};var i=_.util.objId;for(var o in r)if(r.hasOwnProperty(o)){n.call(r,o,r[o],t||o);var l=r[o],s=_.util.type(l);"Object"!==s||a[i(l)]?"Array"!==s||a[i(l)]||(a[i(l)]=!0,e(l,n,o,a)):(a[i(l)]=!0,e(l,n,null,a))}}},plugins:{},highlightAll:function(e,r){_.highlightAllUnder(document,e,r)},highlightAllUnder:function(e,r,n){var t={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};_.hooks.run("before-highlightall",t);for(var a,i=e.querySelectorAll(t.selector),o=0;a=i[o++];)_.highlightElement(a,!0===r,t.callback)},highlightElement:function(e,r,n){var t=function(e){for(;e&&!c.test(e.className);)e=e.parentNode;return e?(e.className.match(c)||[,"none"])[1].toLowerCase():"none"}(e),a=_.languages[t];e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+t;var i=e.parentNode;i&&"pre"===i.nodeName.toLowerCase()&&(i.className=i.className.replace(c,"").replace(/\s+/g," ")+" language-"+t);var o={element:e,language:t,grammar:a,code:e.textContent};function l(e){o.highlightedCode=e,_.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,_.hooks.run("after-highlight",o),_.hooks.run("complete",o),n&&n.call(o.element)}if(_.hooks.run("before-sanity-check",o),!o.code)return _.hooks.run("complete",o),void(n&&n.call(o.element));if(_.hooks.run("before-highlight",o),o.grammar)if(r&&u.Worker){var s=new Worker(_.filename);s.onmessage=function(e){l(e.data)},s.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else l(_.highlight(o.code,o.grammar,o.language));else l(_.util.encode(o.code))},highlight:function(e,r,n){var t={code:e,grammar:r,language:n};return _.hooks.run("before-tokenize",t),t.tokens=_.tokenize(t.code,t.grammar),_.hooks.run("after-tokenize",t),L.stringify(_.util.encode(t.tokens),t.language)},matchGrammar:function(e,r,n,t,a,i,o){for(var l in n)if(n.hasOwnProperty(l)&&n[l]){var s=n[l];s=Array.isArray(s)?s:[s];for(var u=0;u<s.length;++u){if(o&&o==l+","+u)return;var c=s[u],g=c.inside,f=!!c.lookbehind,d=!!c.greedy,h=0,m=c.alias;if(d&&!c.pattern.global){var p=c.pattern.toString().match(/[imsuy]*$/)[0];c.pattern=RegExp(c.pattern.source,p+"g")}c=c.pattern||c;for(var y=t,v=a;y<r.length;v+=r[y].length,++y){var k=r[y];if(r.length>e.length)return;if(!(k instanceof L)){if(d&&y!=r.length-1){if(c.lastIndex=v,!(O=c.exec(e)))break;for(var b=O.index+(f&&O[1]?O[1].length:0),w=O.index+O[0].length,A=y,P=v,x=r.length;A<x&&(P<w||!r[A].type&&!r[A-1].greedy);++A)(P+=r[A].length)<=b&&(++y,v=P);if(r[y]instanceof L)continue;S=A-y,k=e.slice(v,P),O.index-=v}else{c.lastIndex=0;var O=c.exec(k),S=1}if(O){f&&(h=O[1]?O[1].length:0);w=(b=O.index+h)+(O=O[0].slice(h)).length;var j=k.slice(0,b),N=k.slice(w),E=[y,S];j&&(++y,v+=j.length,E.push(j));var C=new L(l,g?_.tokenize(O,g):O,m,O,d);if(E.push(C),N&&E.push(N),Array.prototype.splice.apply(r,E),1!=S&&_.matchGrammar(e,r,n,y,v,!0,l+","+u),i)break}else if(i)break}}}}},tokenize:function(e,r){var n=[e],t=r.rest;if(t){for(var a in t)r[a]=t[a];delete r.rest}return _.matchGrammar(e,n,r,0,0,!1),n},hooks:{all:{},add:function(e,r){var n=_.hooks.all;n[e]=n[e]||[],n[e].push(r)},run:function(e,r){var n=_.hooks.all[e];if(n&&n.length)for(var t,a=0;t=n[a++];)t(r)}},Token:L};function L(e,r,n,t,a){this.type=e,this.content=r,this.alias=n,this.length=0|(t||"").length,this.greedy=!!a}if(u.Prism=_,L.stringify=function(e,r){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return L.stringify(e,r)}).join("");var n={type:e.type,content:L.stringify(e.content,r),tag:"span",classes:["token",e.type],attributes:{},language:r};if(e.alias){var t=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,t)}_.hooks.run("wrap",n);var a=Object.keys(n.attributes).map(function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(a?" "+a:"")+">"+n.content+"</"+n.tag+">"},!u.document)return u.addEventListener&&(_.disableWorkerMessageHandler||u.addEventListener("message",function(e){var r=JSON.parse(e.data),n=r.language,t=r.code,a=r.immediateClose;u.postMessage(_.highlight(t,_.languages[n],n)),a&&u.close()},!1)),_;var e=_.util.currentScript();if(e&&(_.filename=e.src,e.hasAttribute("data-manual")&&(_.manual=!0)),!_.manual){function n(){_.manual||_.highlightAll()}var t=document.readyState;"loading"===t||"interactive"===t&&e&&e.defer?document.addEventListener("DOMContentLoaded",n):window.requestAnimationFrame?window.requestAnimationFrame(n):window.setTimeout(n,16)}return _}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
!function(){if(("undefined"==typeof self||self.Prism)&&("undefined"==typeof global||global.Prism)){if(Prism.languages.css&&(Prism.languages.css.selector.pattern?(Prism.languages.css.selector.inside["pseudo-class"]=/:[\w-]+/,Prism.languages.css.selector.inside["pseudo-element"]=/::[\w-]+/):Prism.languages.css.selector={pattern:Prism.languages.css.selector,inside:{"pseudo-class":/:[\w-]+/,"pseudo-element":/::[\w-]+/}}),Prism.languages.markup){Prism.languages.markup.tag.inside.tag.inside["tag-id"]=/[\w-]+/;var s={HTML:{a:1,abbr:1,acronym:1,b:1,basefont:1,bdo:1,big:1,blink:1,cite:1,code:1,dfn:1,em:1,kbd:1,i:1,rp:1,rt:1,ruby:1,s:1,samp:1,small:1,spacer:1,strike:1,strong:1,sub:1,sup:1,time:1,tt:1,u:1,var:1,wbr:1,noframes:1,summary:1,command:1,dt:1,dd:1,figure:1,figcaption:1,center:1,section:1,nav:1,article:1,aside:1,hgroup:1,header:1,footer:1,address:1,noscript:1,isIndex:1,main:1,mark:1,marquee:1,meter:1,menu:1},SVG:{animateColor:1,animateMotion:1,animateTransform:1,glyph:1,feBlend:1,feColorMatrix:1,feComponentTransfer:1,feFuncR:1,feFuncG:1,feFuncB:1,feFuncA:1,feComposite:1,feConvolveMatrix:1,feDiffuseLighting:1,feDisplacementMap:1,feFlood:1,feGaussianBlur:1,feImage:1,feMerge:1,feMergeNode:1,feMorphology:1,feOffset:1,feSpecularLighting:1,feTile:1,feTurbulence:1,feDistantLight:1,fePointLight:1,feSpotLight:1,linearGradient:1,radialGradient:1,altGlyph:1,textPath:1,tref:1,altglyph:1,textpath:1,altglyphdef:1,altglyphitem:1,clipPath:1,"color-profile":1,cursor:1,"font-face":1,"font-face-format":1,"font-face-name":1,"font-face-src":1,"font-face-uri":1,foreignObject:1,glyphRef:1,hkern:1,vkern:1},MathML:{}}}var a;Prism.hooks.add("wrap",function(e){if(("tag-id"==e.type||"property"==e.type&&0!=e.content.indexOf("-")||"rule"==e.type&&0!=e.content.indexOf("@-")||"pseudo-class"==e.type&&0!=e.content.indexOf(":-")||"pseudo-element"==e.type&&0!=e.content.indexOf("::-")||"attr-name"==e.type&&0!=e.content.indexOf("data-"))&&-1===e.content.indexOf("<")&&("css"==e.language||"scss"==e.language||"markup"==e.language)){var t="https://webplatform.github.io/docs/",n=e.content;if("css"==e.language||"scss"==e.language)t+="css/","property"==e.type?t+="properties/":"rule"==e.type?(t+="atrules/",n=n.substring(1)):"pseudo-class"==e.type?(t+="selectors/pseudo-classes/",n=n.substring(1)):"pseudo-element"==e.type&&(t+="selectors/pseudo-elements/",n=n.substring(2));else if("markup"==e.language)if("tag-id"==e.type){if(!(a=function(e){var t=e.toLowerCase();{if(s.HTML[t])return"html";if(s.SVG[e])return"svg";if(s.MathML[e])return"mathml"}if(0!==s.HTML[t]&&"undefined"!=typeof document){var n=(document.createElement(e).toString().match(/\[object HTML(.+)Element\]/)||[])[1];if(n&&"Unknown"!=n)return s.HTML[t]=1,"html"}if((s.HTML[t]=0)!==s.SVG[e]&&"undefined"!=typeof document){var a=(document.createElementNS("http://www.w3.org/2000/svg",e).toString().match(/\[object SVG(.+)Element\]/)||[])[1];if(a&&"Unknown"!=a)return s.SVG[e]=1,"svg"}if((s.SVG[e]=0)!==s.MathML[e]&&0===e.indexOf("m"))return s.MathML[e]=1,"mathml";return s.MathML[e]=0,null}(e.content)||a))return;t+=a+"/elements/"}else if("attr-name"==e.type){if(!a)return;t+=a+"/attributes/"}t+=n,e.tag="a",e.attributes.href=t,e.attributes.target="_blank"}})}}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var r=[],i={},a=function(){};Prism.plugins.toolbar={};var t=Prism.plugins.toolbar.registerButton=function(t,a){var e;e="function"==typeof a?a:function(t){var e;return"function"==typeof a.onClick?((e=document.createElement("button")).type="button",e.addEventListener("click",function(){a.onClick.call(this,t)})):"string"==typeof a.url?(e=document.createElement("a")).href=a.url:e=document.createElement("span"),a.className&&e.classList.add(a.className),e.textContent=a.text,e},t in i?console.warn('There is a button with the key "'+t+'" registered already.'):r.push(i[t]=e)},e=Prism.plugins.toolbar.hook=function(n){var t=n.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&!t.parentNode.classList.contains("code-toolbar")){var e=document.createElement("div");e.classList.add("code-toolbar"),t.parentNode.insertBefore(e,t),e.appendChild(t);var o=document.createElement("div");o.classList.add("toolbar"),document.body.hasAttribute("data-toolbar-order")&&(r=document.body.getAttribute("data-toolbar-order").split(",").map(function(t){return i[t]||a})),r.forEach(function(t){var e=t(n);if(e){var a=document.createElement("div");a.classList.add("toolbar-item"),a.appendChild(e),o.appendChild(a)}}),e.appendChild(o)}};t("label",function(t){var e=t.element.parentNode;if(e&&/pre/i.test(e.nodeName)&&e.hasAttribute("data-label")){var a,n,o=e.getAttribute("data-label");try{n=document.querySelector("template#"+o)}catch(t){}return n?a=n.content:(e.hasAttribute("data-url")?(a=document.createElement("a")).href=e.getAttribute("data-url"):a=document.createElement("span"),a.textContent=o),a}}),Prism.hooks.add("complete",e)}}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document&&document.createElement){var c={javascript:"clike",actionscript:"javascript",arduino:"cpp",aspnet:["markup","csharp"],bison:"c",c:"clike",csharp:"clike",cpp:"c",coffeescript:"javascript",crystal:"ruby","css-extras":"css",d:"clike",dart:"clike",django:"markup-templating",ejs:["javascript","markup-templating"],etlua:["lua","markup-templating"],erb:["ruby","markup-templating"],fsharp:"clike","firestore-security-rules":"clike",flow:"javascript",ftl:"markup-templating",glsl:"clike",gml:"clike",go:"clike",groovy:"clike",haml:"ruby",handlebars:"markup-templating",haxe:"clike",java:"clike",javadoc:["markup","java","javadoclike"],jolie:"clike",jsdoc:["javascript","javadoclike"],"js-extras":"javascript","js-templates":"javascript",jsonp:"json",json5:"json",kotlin:"clike",less:"css",lilypond:"scheme",markdown:"markup","markup-templating":"markup",n4js:"javascript",nginx:"clike",objectivec:"c",opencl:"cpp",parser:"markup",php:["clike","markup-templating"],phpdoc:["php","javadoclike"],"php-extras":"php",plsql:"sql",processing:"clike",protobuf:"clike",pug:["markup","javascript"],qore:"clike",jsx:["markup","javascript"],tsx:["jsx","typescript"],reason:"clike",ruby:"clike",sass:"css",scss:"css",scala:"java","shell-session":"bash",smarty:"markup-templating",solidity:"clike",soy:"markup-templating",sparql:"turtle",sqf:"clike",swift:"clike",tap:"yaml",textile:"markup",tt2:["clike","markup-templating"],twig:"markup",typescript:"javascript","t4-cs":["t4-templating","csharp"],"t4-vb":["t4-templating","visual-basic"],vala:"clike",vbnet:"basic",velocity:"markup",wiki:"markup",xeora:"markup",xquery:"markup"},l={html:"markup",xml:"markup",svg:"markup",mathml:"markup",js:"javascript",g4:"antlr4",adoc:"asciidoc",shell:"bash",rbnf:"bnf",cs:"csharp",dotnet:"csharp",coffee:"coffeescript",jinja2:"django","dns-zone":"dns-zone-file",dockerfile:"docker",gamemakerlanguage:"gml",hs:"haskell",tex:"latex",context:"latex",ly:"lilypond",emacs:"lisp",elisp:"lisp","emacs-lisp":"lisp",md:"markdown",moon:"moonscript",n4jsd:"n4js",objectpascal:"pascal",px:"pcaxis",py:"python",robot:"robotframework",rb:"ruby",rq:"sparql",trig:"turtle",ts:"typescript",t4:"t4-cs",vb:"visual-basic",xeoracube:"xeora",yml:"yaml"},n={},a="components/",e=Prism.util.currentScript();if(e){var t=/\bplugins\/autoloader\/prism-autoloader\.(?:min\.)js$/i,s=/[\w-]+\.(?:min\.)js$/i;if(e.hasAttribute("data-autoloader-path"))a=e.getAttribute("data-autoloader-path").trim().replace(/\/?$/,"/");else{var i=e.src;t.test(i)?a=i.replace(t,"components/"):s.test(i)&&(a=i.replace(s,"components/"))}}var p=Prism.plugins.autoloader={languages_path:a,use_minified:!0,loadLanguages:o};Prism.hooks.add("complete",function(a){a.element&&a.language&&!a.grammar&&"none"!==a.language&&function(a,e){a in l&&(a=l[a]);var t=e.getAttribute("data-dependencies"),s=e.parentElement;!t&&s&&"pre"===s.tagName.toLowerCase()&&(t=s.getAttribute("data-dependencies")),o(t=t?t.split(/\s*,\s*/g):[],function(){m(a,function(){Prism.highlightElement(e)})})}(a.language,a.element)})}function o(a,e,t){"string"==typeof a&&(a=[a]);var s=a.length,i=0,r=!1;function c(){r||++i===s&&e&&e(a)}0!==s?a.forEach(function(a){m(a,c,function(){r||(r=!0,t&&t(a))})}):e&&setTimeout(e,0)}function m(e,t,s){var i=0<=e.indexOf("!");e=e.replace("!",""),e=l[e]||e;var a=function(){var a=n[e];if(a||(a=n[e]={callbacks:[]}),a.callbacks.push({success:t,error:s}),!i&&Prism.languages[e])u(e,"success");else if(!i&&a.error)u(e,"error");else if(i||!a.loading){a.loading=!0,function(a,e,t){var s=document.createElement("script");s.src=a,s.async=!0,s.onload=function(){document.body.removeChild(s),e&&e()},s.onerror=function(){document.body.removeChild(s),t&&t()},document.body.appendChild(s)}(function(a){return p.languages_path+"prism-"+a+(p.use_minified?".min":"")+".js"}(e),function(){a.loading=!1,u(e,"success")},function(){a.loading=!1,a.error=!0,u(e,"error")})}},r=c[e];r&&r.length?o(r,a,s):a()}function u(a,e){if(n[a]){for(var t=n[a].callbacks,s=0,i=t.length;s<i;s++){var r=t[s][e];r&&setTimeout(r,0)}t.length=0}}}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document)if(Prism.plugins.toolbar){var r={html:"HTML",xml:"XML",svg:"SVG",mathml:"MathML",css:"CSS",clike:"C-like",js:"JavaScript",abap:"ABAP",abnf:"Augmented Backus–Naur form",antlr4:"ANTLR4",g4:"ANTLR4",apacheconf:"Apache Configuration",apl:"APL",aql:"AQL",arff:"ARFF",asciidoc:"AsciiDoc",adoc:"AsciiDoc",asm6502:"6502 Assembly",aspnet:"ASP.NET (C#)",autohotkey:"AutoHotkey",autoit:"AutoIt",shell:"Bash",basic:"BASIC",bbcode:"BBcode",bnf:"Backus–Naur form",rbnf:"Routing Backus–Naur form",csharp:"C#",cs:"C#",dotnet:"C#",cpp:"C++",cil:"CIL",coffee:"CoffeeScript",cmake:"CMake",csp:"Content-Security-Policy","css-extras":"CSS Extras",django:"Django/Jinja2",jinja2:"Django/Jinja2","dns-zone-file":"DNS zone file","dns-zone":"DNS zone file",dockerfile:"Docker",ebnf:"Extended Backus–Naur form",ejs:"EJS",etlua:"Embedded Lua templating",erb:"ERB",fsharp:"F#","firestore-security-rules":"Firestore security rules",ftl:"FreeMarker Template Language",gcode:"G-code",gdscript:"GDScript",gedcom:"GEDCOM",glsl:"GLSL",gml:"GameMaker Language",gamemakerlanguage:"GameMaker Language",graphql:"GraphQL",hs:"Haskell",hcl:"HCL",http:"HTTP",hpkp:"HTTP Public-Key-Pins",hsts:"HTTP Strict-Transport-Security",ichigojam:"IchigoJam",inform7:"Inform 7",javadoc:"JavaDoc",javadoclike:"JavaDoc-like",javastacktrace:"Java stack trace",jq:"JQ",jsdoc:"JSDoc","js-extras":"JS Extras","js-templates":"JS Templates",json:"JSON",jsonp:"JSONP",json5:"JSON5",latex:"LaTeX",tex:"TeX",context:"ConTeXt",lilypond:"LilyPond",ly:"LilyPond",emacs:"Lisp",elisp:"Lisp","emacs-lisp":"Lisp",lolcode:"LOLCODE",md:"Markdown","markup-templating":"Markup templating",matlab:"MATLAB",mel:"MEL",moon:"MoonScript",n1ql:"N1QL",n4js:"N4JS",n4jsd:"N4JS","nand2tetris-hdl":"Nand To Tetris HDL",nasm:"NASM",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",ocaml:"OCaml",opencl:"OpenCL",parigp:"PARI/GP",objectpascal:"Object Pascal",pcaxis:"PC-Axis",px:"PC-Axis",php:"PHP",phpdoc:"PHPDoc","php-extras":"PHP Extras",plsql:"PL/SQL",powershell:"PowerShell",properties:".properties",protobuf:"Protocol Buffers",py:"Python",q:"Q (kdb+ database)",jsx:"React JSX",tsx:"React TSX",renpy:"Ren'py",rest:"reST (reStructuredText)",robotframework:"Robot Framework",robot:"Robot Framework",rb:"Ruby",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (Scss)","shell-session":"Shell session",solidity:"Solidity (Ethereum)",soy:"Soy (Closure Template)",sparql:"SPARQL",rq:"SPARQL","splunk-spl":"Splunk SPL",sqf:"SQF: Status Quo Function (Arma 3)",sql:"SQL",tap:"TAP",toml:"TOML",tt2:"Template Toolkit 2",trig:"TriG",ts:"TypeScript","t4-cs":"T4 Text Templates (C#)",t4:"T4 Text Templates (C#)","t4-vb":"T4 Text Templates (VB)","t4-templating":"T4 templating",vbnet:"VB.Net",vhdl:"VHDL",vim:"vim","visual-basic":"Visual Basic",vb:"Visual Basic",wasm:"WebAssembly",wiki:"Wiki markup",xeoracube:"XeoraCube",xojo:"Xojo (REALbasic)",xquery:"XQuery",yaml:"YAML",yml:"YAML"};Prism.plugins.toolbar.registerButton("show-language",function(e){var a=e.element.parentNode;if(a&&/pre/i.test(a.nodeName)){var s,t=a.getAttribute("data-language")||r[e.language]||((s=e.language)?(s.substring(0,1).toUpperCase()+s.substring(1)).replace(/s(?=cript)/,"S"):s);if(t){var o=document.createElement("span");return o.textContent=t,o}}})}else console.warn("Show Languages plugin loaded before Toolbar plugin.")}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document)if(Prism.plugins.toolbar){var r=window.ClipboardJS||void 0;r||"function"!=typeof require||(r=require("clipboard"));var i=[];if(!r){var o=document.createElement("script"),e=document.querySelector("head");o.onload=function(){if(r=window.ClipboardJS)for(;i.length;)i.pop()()},o.src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",e.appendChild(o)}Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(e){var t=document.createElement("button");return t.textContent="Copy",r?o():i.push(o),t;function o(){var o=new r(t,{text:function(){return e.code}});o.on("success",function(){t.textContent="Copied!",n()}),o.on("error",function(){t.textContent="Press Ctrl+C to copy",n()})}function n(){setTimeout(function(){t.textContent="Copy"},5e3)}})}else console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.")}();
Prism.plugins.autoloader.languages_path='//cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/components/';