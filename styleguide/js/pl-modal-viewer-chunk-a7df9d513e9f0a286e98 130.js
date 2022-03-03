(window.webpackJsonp=window.webpackJsonp||[]).push([["pl-modal-viewer"],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={addClickEvents:function(e,t){for(var n=e.querySelectorAll(".pl-js-tab-link"),i=0;i<n.length;++i)n[i].onclick=function(e){e.preventDefault();var t=this.getAttribute("data-patternpartial"),n=this.getAttribute("data-panelid");a.show(t,n)};return e},show:function(e,t){for(var n=document.querySelector("#pl-".concat(e,"-").concat(t,"-panel")),a=n.closest(".pl-js-tabs"),i=a.querySelectorAll(".pl-js-tab-link"),o=a.querySelectorAll(".pl-js-tab-panel"),r=a.querySelector("#pl-".concat(e,"-").concat(t,"-tab")),l=0;l<i.length;++l)i[l].classList.remove("pl-is-active-tab");for(var s=0;s<o.length;++s)o[s].classList.remove("pl-is-active-tab");r.classList.add("pl-is-active-tab"),n.classList.add("pl-is-active-tab")}}},210:function(e,t,n){"use strict";var a=n(122);new(n.n(a).a)(".pl-js-code-copy-btn").on("success",(function(e){for(var t=document.querySelectorAll(".pl-js-code-copy-btn"),n=0;n<t.length;n++)t[n].querySelector(".pl-c-code-copy-btn__icon-text").innerText="Copy";e.trigger.classList.add("is-copied"),e.trigger.querySelector(".pl-c-code-copy-btn__icon-text").textContent="Copied",setTimeout((function(){e.trigger.classList.remove("is-copied"),e.trigger.querySelector(".pl-c-code-copy-btn__icon-text").textContent="Copy",e.clearSelection(),e.trigger.blur()}),2e3)}))},402:function(e,t,n){"use strict";n.r(t),n.d(t,"modalViewer",(function(){return O}));var a,i,o,r=n(374),l=n(2),s=n(375),c=n.n(s),p=n(378),d=n.n(p),u=n(6),m=n(185),f=n(386),g=n.n(f),h=(n(387),n(388),n(389),n(390),n(391),n(392),n(393),n(394),n(395),n(396),n(397),n(398),n(399),n(400),g.a),v={panels:[],count:function(){return this.panels.length},get:function(){return JSON.parse(JSON.stringify(v.panels))},add:function(e){for(var t=0;t<this.panels.length;++t)if(e.id===this.panels[t].id)return;this.panels.push(e)},remove:function(e){for(var t=this.panels,n=t.length-1;n>=0;n--)if(t[n].id===e){var a=t[n];return t.splice(n,1),void(a.default&&t.length&&(t[0].default=!0))}}};l.a.trigger("setupPanels"),a=void 0!==window.config.outputFileSuffixes&&void 0!==window.config.outputFileSuffixes.rawTemplate?window.config.outputFileSuffixes.rawTemplate:"",i=void 0!==window.config.outputFileSuffixes&&void 0!==window.config.outputFileSuffixes.markupOnly?window.config.outputFileSuffixes.markupOnly:".markup-only",o=Object.keys(h.languages),v.add({id:"pl-panel-pattern",name:window.config.patternExtension.toUpperCase(),default:!window.config.defaultPatternInfoPanelCode||window.config.defaultPatternInfoPanelCode===window.config.patternExtension,templateID:"pl-panel-template-code",httpRequest:!0,httpRequestReplace:a,httpRequestCompleted:!1,prismHighlight:!0,language:o[window.config.patternExtension],keyCombo:"ctrl+shift+u"}),v.add({id:"pl-panel-html",name:"HTML",default:window.config.defaultPatternInfoPanelCode&&"html"===window.config.defaultPatternInfoPanelCode,templateID:"pl-panel-template-code",httpRequest:!0,httpRequestReplace:i+".html",httpRequestCompleted:!1,prismHighlight:!0,language:"markup",keyCombo:"ctrl+shift+y"}),window.patternlab||(window.patternlab={}),window.patternlab.panels=v;var w,y=n(121),b=(n(210),n(401));var E=new(n.n(b).a)({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0,"break-lines":100,indent:2,"remove-initial-line-feed":!0,"tabs-to-spaces":2,"spaces-to-tabs":2}),S={targetOrigin:"file:"===window.location.protocol?"*":window.location.protocol+"//"+window.location.host,initCopy:!1,initMoveTo:0,checkPanels:function(e,t,n,a){for(var i=0,o=0;o<e.length;++o)void 0!==e[o].content&&i++;i===v.count()&&S.renderPanels(e,t,n,a)},gatherPanels:function(e,t,n){var a,i,o;l.a.addListener("checkPanels",S.checkPanels);for(var r=v.get(),s=0;s<r.length;++s){var p=r[s];if(void 0===p.name&&(p.name=e.patternEngineName||e.patternExtension,p.language=e.patternExtension),void 0===p.httpRequestReplace&&(p.httpRequestReplace=""),""===p.httpRequestReplace&&(p.httpRequestReplace=p.httpRequestReplace+"."+e.patternExtension),void 0!==p.templateID&&p.templateID)if(void 0!==p.httpRequest&&p.httpRequest){var f=l.h.getFileName(e.patternPartial,!1),g=new XMLHttpRequest;g.onload=function(e,a,i,r){return function(){var r=this.responseText;r.startsWith("<!DOCTYPE html>")&&(r=""),o="HTML"===a[e].name?d()(r,{ocd:!0}):r;var s=h.highlight(o,h.languages[a[e].name.toLowerCase()]||h.languages.markup),c=function(e,t){return Object(u.e)(w||(n=['\n                  <pre\n                    class="language-markup"\n                  ><code id="pl-code-fill-','" class="language-','">',"</code></pre>\n                "],a||(a=n.slice(0)),w=Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))),t,t,Object(m.a)(e));var n,a},p=document.createDocumentFragment(),f=document.createDocumentFragment();Object(u.f)(c(s,"html"),p),Object(u.f)(c(o,"html"),f),p.children?a[e].content=p.children[0].outerHTML:f.children?a[e].content=f.children[0].outerHTML:a[e].content='<pre class="language-markup"><code id="pl-code-fill-html" class="language-html">'+o.replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</code></pre>",l.a.trigger("checkPanels",[a,i,t,n])}}(s,r,e),g.open("GET",f+p.httpRequestReplace+"?"+(new Date).getTime(),!0),g.send()}else{a=document.getElementById(p.templateID),i=c.a.compile(a.innerHTML).render(e);var y=E.normalize(i);y.replace(/[\r\n]+/g,"\n\n");var b=h.highlight(y,h.languages.html);r[s].content=b,l.a.trigger("checkPanels",[r,e,t,n])}}},renderPanels:function(e,t,n,a){var i,o,r,s,p=t,d=p.patternPartial;p.panels=e,n||0!==p.patternDesc.length||(p.patternDesc=""),p.patternNameCaps=p.patternName.toUpperCase();var u=document.createElement("div");u.innerHTML=p.patternMarkup,r=1,p.annotations=[],delete p.patternMarkup;for(var m=0;m<window.comments.comments.length;++m)s=window.comments.comments[m],u.querySelectorAll(s.el).length>0&&(o={displayNumber:r,el:s.el,title:s.title,comment:s.comment},p.annotations.push(o),r++);if(p.annotations.length>0){var f=JSON.stringify({event:"patternLab.annotationsHighlightShow",annotations:p.annotations});document.querySelector(".pl-js-iframe").contentWindow.postMessage(f,S.targetOrigin)}if(p.lineage.length>0)for(var g=0;g<p.lineage.length;++g)g<p.lineage.length-1&&(p.lineage[g].hasComma=!0);if(p.lineageR.length>0)for(var h=0;h<p.lineageR.length;++h)h<p.lineageR.length-1&&(p.lineageR[h].hasComma=!0);p.patternDescExists=p.patternDesc.length>0||void 0!==p.patternDescAdditions&&p.patternDescAdditions.length>0,p.lineageExists=0!==p.lineage.length,p.lineageRExists=0!==p.lineageR.length,p.patternStateExists=p.patternState.length>0,p.annotationExists=p.annotations.length>0,p.descBlockExists=p.patternDescExists||p.lineageExists||p.lineageRExists||p.patternStateExists||p.annotationExists,p.isPatternView=!1===n;var v=document.querySelector(".pl-js-panel-template-base");i=c.a.compile(v.innerHTML).render(p);var w=document.createElement("div");w.className="pl-c-pattern-info",w.innerHTML=i,i=w,i=y.a.addClickEvents(i,d);for(var b=0;b<e.length;++b){var E=e[b],q="#pl-"+d+"-"+E.id+"-tab",C="#pl-"+d+"-"+E.id+"-panel";null!==i.querySelector(q)&&E.default&&(i.querySelector(q).classList.add("pl-is-active-tab"),i.querySelector(C).classList.add("pl-is-active-tab"))}l.a.trigger("insertPanels",[i,d,n,a])}},q=n(1),C=n(7),O={delayCheckingModalViewer:!1,iframeElement:document.querySelector(".pl-js-iframe"),iframeCustomElement:document.querySelector("pl-iframe"),active:!1,switchText:!0,template:"info",patternData:{},targetOrigin:"file:"===window.location.protocol?"*":window.location.protocol+"//"+window.location.host,onReady:function(){window.addEventListener("message",O.receiveIframeMessage,!1),l.a.addListener("insertPanels",O.insert),O.__storeUnsubscribe=q.a.subscribe((function(){return O._stateChanged(q.a.getState())})),O._stateChanged(q.a.getState());var e=l.h.getRequestVars();void 0===e.view||"code"!==e.view&&"c"!==e.view&&"annotations"!==e.view&&"a"!==e.view||q.a.dispatch(Object(C.p)(!0))},toggle:function(){O.active?q.a.dispatch(Object(C.p)(!1)):q.a.dispatch(Object(C.p)(!0))},open:function(){if(O.queryPattern(),O.patternData&&O.patternData.annotations&&O.patternData.annotations.length>0){var e=JSON.stringify({event:"patternLab.annotationsHighlightShow",annotations:O.patternData.annotations});O.iframeElement.contentWindow?O.iframeElement.contentWindow.postMessage(e,O.targetOrigin):(O.iframeElement=document.querySelector(".pl-js-iframe"),O.iframeElement.contentWindow?O.open():console.log("modelViewer open cannot find the iframeElement..."))}},close:function(){var e=JSON.stringify({event:"patternLab.patternModalClose"});if(O.iframeElement)if(O.iframeElement.contentWindow){O.iframeElement.contentWindow.postMessage(e,O.targetOrigin);var t=JSON.stringify({event:"patternLab.annotationsHighlightHide"});O.iframeElement.contentWindow.postMessage(t,O.targetOrigin)}else O.iframeElement=document.querySelector(".pl-js-iframe"),O.iframeElement.contentWindow?O.close():console.log("modelViewer close cannot find the iframeElement...")},insert:function(e,t,n,a){if(n){var i=JSON.stringify({event:"patternLab.patternModalInsert",patternPartial:t,modalContent:e.outerHTML});O.iframeElement.contentWindow?O.iframeElement.contentWindow.postMessage(i,O.targetOrigin):(O.iframeElement=document.querySelector(".pl-js-iframe"),O.iframeElement.contentWindow?O.insert(e,t,n):console.log("modelViewer insert cannot find the iframeElement..."))}else{var o=document.querySelector(".pl-js-drawer-content");if(null!==o.firstChild)for(;null!==o.firstChild;)o.removeChild(o.firstChild);o.appendChild(e),O.addClickEvents(o)}},addClickEvents:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;e.querySelectorAll(".pl-js-lineage-link").forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.getAttribute("data-patternpartial");t&&O.iframeCustomElement&&(e.preventDefault(),O.iframeCustomElement.navigateTo(t))}))}))},refresh:function(e,t,n){O.patternData=e,S.gatherPanels(e,t,n)},slide:function(e){O.toggle()},slideToAnnotation:function(e){for(var t=document.querySelectorAll(".pl-js-annotations li"),n=0;n<t.length;++n)t[n].classList.remove("pl-is-active");for(var a=document.querySelector(".pl-js-pattern-info"),i=0;i<t.length;++i)i+1===e&&(t[i].classList.add("pl-is-active"),Object(r.a)(a,{top:t[i].offsetTop-14,behavior:"smooth"}).then((function(){})))},queryPattern:function(e){var t=JSON.stringify({event:"patternLab.patternQuery",switchText:e});O.iframeElement?O.iframeElement.contentWindow?O.iframeElement.contentWindow.postMessage(t,O.targetOrigin):(O.iframeElement=document.querySelector(".pl-js-iframe"),O.iframeElement.contentWindow?O.queryPattern(e):console.log("queryPattern cannot find the iframeElement...")):(O.iframeElement=document.querySelector(".pl-js-iframe"),O.iframeElement.contentWindow&&O.iframeElement.contentWindow.postMessage(t,O.targetOrigin))},receiveIframeMessage:function(e){var t=Object(l.c)(e);void 0!==t.event&&"patternLab.pageLoad"===t.event?(O.delayCheckingModalViewer&&O._handleInitialModalViewerState(),0===t.patternpartial.indexOf("viewall-")||0===t.patternpartial.indexOf("all")?q.a.dispatch(Object(C.k)(!0)):q.a.dispatch(Object(C.k)(!1)),!1===O.active&&void 0!==t.patternpartial&&0===t.patternpartial.indexOf("viewall-")&&void 0!==window.config.defaultShowPatternInfo&&window.config.defaultShowPatternInfo?O.queryPattern(!1):!0===O.active&&O.queryPattern()):void 0!==t.event&&"patternLab.patternQueryInfo"===t.event?O.panelRendered&&O.previouslyRenderedPattern===t.patternData.patternPartial||O.refresh(t.patternData,t.iframePassback,t.switchText):void 0!==t.event&&"patternLab.annotationNumberClicked"===t.event&&O.slideToAnnotation(t.displayNumber)},_handleInitialModalViewerState:function(){O.iframeElement||(O.iframeElement=document.querySelector(".pl-js-iframe")),O.iframeElement?(O.delayCheckingModalViewer=!1,O.active?O.open():O.close()):O.delayCheckingModalViewer=!0},_stateChanged:function(e){O.active!==e.app.drawerOpened&&(O.active=e.app.drawerOpened,O.iframeElement&&O._handleInitialModalViewerState())}};O.onReady()}}]);