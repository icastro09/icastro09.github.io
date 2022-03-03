(window.webpackJsonp=window.webpackJsonp||[]).push([["pl-modal-viewer"],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"modalViewer",(function(){return b}));var a=n(152),i=n(2),o=n(153),l=n.n(o),r=n(156),s=n.n(r),c=n(5),p=n(58),d=n(164),m=n.n(d);n(165),n(166),n(167),n(168),n(169),n(170),n(171),n(172),n(173),n(174),n(175),n(176),n(177),n(178);const g=m.a,u={panels:[],count(){return this.panels.length},get:()=>JSON.parse(JSON.stringify(u.panels)),add(e){for(let t=0;t<this.panels.length;++t)if(e.id===this.panels[t].id)return;this.panels.push(e)},remove(e){const t=this.panels;for(let n=t.length-1;n>=0;n--)if(t[n].id===e){const e=t[n];return t.splice(n,1),void(e.default&&t.length&&(t[0].default=!0))}}};i.a.trigger("setupPanels"),function(){const e=void 0!==window.config.outputFileSuffixes&&void 0!==window.config.outputFileSuffixes.rawTemplate?window.config.outputFileSuffixes.rawTemplate:"",t=void 0!==window.config.outputFileSuffixes&&void 0!==window.config.outputFileSuffixes.markupOnly?window.config.outputFileSuffixes.markupOnly:".markup-only",n=Object.keys(g.languages);u.add({id:"pl-panel-pattern",name:window.config.patternExtension.toUpperCase(),default:!window.config.defaultPatternInfoPanelCode||window.config.defaultPatternInfoPanelCode===window.config.patternExtension,templateID:"pl-panel-template-code",httpRequest:!0,httpRequestReplace:e,httpRequestCompleted:!1,prismHighlight:!0,language:n[window.config.patternExtension],keyCombo:"ctrl+shift+u"}),u.add({id:"pl-panel-html",name:"HTML",default:window.config.defaultPatternInfoPanelCode&&"html"===window.config.defaultPatternInfoPanelCode,templateID:"pl-panel-template-code",httpRequest:!0,httpRequestReplace:t+".html",httpRequestCompleted:!1,prismHighlight:!0,language:"markup",keyCombo:"ctrl+shift+y"}),window.patternlab||(window.patternlab={}),window.patternlab.panels=u}();var f=n(45),h=(n(82),n(179));const w=new(n.n(h).a)({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0,"break-lines":100,indent:2,"remove-initial-line-feed":!0,"tabs-to-spaces":2,"spaces-to-tabs":2}),v={targetOrigin:"file:"===window.location.protocol?"*":window.location.protocol+"//"+window.location.host,initCopy:!1,initMoveTo:0,checkPanels(e,t,n,a){let i=0;for(let o=0;o<e.length;++o)void 0!==e[o].content&&i++;i===u.count()&&v.renderPanels(e,t,n,a)},gatherPanels(e,t,n){let a,o,r,d;i.a.addListener("checkPanels",v.checkPanels);const m=u.get();for(let u=0;u<m.length;++u){const f=m[u];if(void 0===f.name&&(f.name=e.patternEngineName||e.patternExtension,f.language=e.patternExtension),void 0===f.httpRequestReplace&&(f.httpRequestReplace=""),""===f.httpRequestReplace&&(f.httpRequestReplace=f.httpRequestReplace+"."+e.patternExtension),void 0!==f.templateID&&f.templateID)if(void 0!==f.httpRequest&&f.httpRequest){const a=i.h.getFileName(e.patternPartial,!1),o=new XMLHttpRequest;o.onload=function(e,a,o,l){return function(){let l=this.responseText;l.startsWith("<!DOCTYPE html>")&&(l=""),d="HTML"===a[e].name?s()(l,{ocd:!0}):l;const r=g.highlight(d,g.languages[a[e].name.toLowerCase()]||g.languages.markup),m=(e,t)=>c.e`
                  <pre
                    class="language-markup"
                  ><code id="pl-code-fill-${t}" class="language-${t}">${Object(p.a)(e)}</code></pre>
                `,u=document.createDocumentFragment(),f=document.createDocumentFragment();Object(c.f)(m(r,"html"),u),Object(c.f)(m(d,"html"),f),u.children?a[e].content=u.children[0].outerHTML:f.children?a[e].content=f.children[0].outerHTML:a[e].content='<pre class="language-markup"><code id="pl-code-fill-html" class="language-html">'+d.replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</code></pre>",i.a.trigger("checkPanels",[a,o,t,n])}}(u,m,e),o.open("GET",a+f.httpRequestReplace+"?"+(new Date).getTime(),!0),o.send()}else{a=document.getElementById(f.templateID),o=l.a.compile(a.innerHTML),r=o.render(e);const s=w.normalize(r);s.replace(/[\r\n]+/g,"\n\n");const c=g.highlight(s,g.languages.html);m[u].content=c,i.a.trigger("checkPanels",[m,e,t,n])}}},renderPanels(e,t,n,a){const o=t;let r,s,c,p,d;const m=o.patternPartial;o.panels=e,n||0!==o.patternDesc.length||(o.patternDesc=""),o.patternNameCaps=o.patternName.toUpperCase();const g=document.createElement("div");g.innerHTML=o.patternMarkup,c=1,o.annotations=[],delete o.patternMarkup;for(let i=0;i<window.comments.comments.length;++i)d=window.comments.comments[i],p=g.querySelectorAll(d.el),p.length>0&&(s={displayNumber:c,el:d.el,title:d.title,comment:d.comment},o.annotations.push(s),c++);if(o.annotations.length>0){const e=JSON.stringify({event:"patternLab.annotationsHighlightShow",annotations:o.annotations});document.querySelector(".pl-js-iframe").contentWindow.postMessage(e,v.targetOrigin)}if(o.lineage.length>0)for(let i=0;i<o.lineage.length;++i)i<o.lineage.length-1&&(o.lineage[i].hasComma=!0);if(o.lineageR.length>0)for(let i=0;i<o.lineageR.length;++i)i<o.lineageR.length-1&&(o.lineageR[i].hasComma=!0);o.patternDescExists=o.patternDesc.length>0||void 0!==o.patternDescAdditions&&o.patternDescAdditions.length>0,o.lineageExists=0!==o.lineage.length,o.lineageRExists=0!==o.lineageR.length,o.patternStateExists=o.patternState.length>0,o.annotationExists=o.annotations.length>0,o.descBlockExists=o.patternDescExists||o.lineageExists||o.lineageRExists||o.patternStateExists||o.annotationExists,o.isPatternView=!1===n;const u=document.querySelector(".pl-js-panel-template-base");r=l.a.compile(u.innerHTML).render(o);const h=document.createElement("div");h.className="pl-c-pattern-info",h.innerHTML=r,r=h,r=f.a.addClickEvents(r,m);for(let i=0;i<e.length;++i){const t=e[i],n="#pl-"+m+"-"+t.id+"-tab",a="#pl-"+m+"-"+t.id+"-panel";null!==r.querySelector(n)&&t.default&&(r.querySelector(n).classList.add("pl-is-active-tab"),r.querySelector(a).classList.add("pl-is-active-tab"))}i.a.trigger("insertPanels",[r,m,n,a])}};var y=n(1),E=n(6);const b={delayCheckingModalViewer:!1,iframeElement:document.querySelector(".pl-js-iframe"),iframeCustomElement:document.querySelector("pl-iframe"),active:!1,switchText:!0,template:"info",patternData:{},targetOrigin:"file:"===window.location.protocol?"*":window.location.protocol+"//"+window.location.host,onReady(){window.addEventListener("message",b.receiveIframeMessage,!1),i.a.addListener("insertPanels",b.insert),b.__storeUnsubscribe=y.a.subscribe(()=>b._stateChanged(y.a.getState())),b._stateChanged(y.a.getState());const e=i.h.getRequestVars();void 0===e.view||"code"!==e.view&&"c"!==e.view&&"annotations"!==e.view&&"a"!==e.view||y.a.dispatch(Object(E.p)(!0))},toggle(){b.active?y.a.dispatch(Object(E.p)(!1)):y.a.dispatch(Object(E.p)(!0))},open(){if(b.queryPattern(),b.patternData&&b.patternData.annotations&&b.patternData.annotations.length>0){const e=JSON.stringify({event:"patternLab.annotationsHighlightShow",annotations:b.patternData.annotations});b.iframeElement.contentWindow?b.iframeElement.contentWindow.postMessage(e,b.targetOrigin):(b.iframeElement=document.querySelector(".pl-js-iframe"),b.iframeElement.contentWindow?b.open():console.log("modelViewer open cannot find the iframeElement..."))}},close(){const e=JSON.stringify({event:"patternLab.patternModalClose"});if(b.iframeElement)if(b.iframeElement.contentWindow){b.iframeElement.contentWindow.postMessage(e,b.targetOrigin);const t=JSON.stringify({event:"patternLab.annotationsHighlightHide"});b.iframeElement.contentWindow.postMessage(t,b.targetOrigin)}else b.iframeElement=document.querySelector(".pl-js-iframe"),b.iframeElement.contentWindow?b.close():console.log("modelViewer close cannot find the iframeElement...")},insert(e,t,n,a){if(n){const a=JSON.stringify({event:"patternLab.patternModalInsert",patternPartial:t,modalContent:e.outerHTML});b.iframeElement.contentWindow?b.iframeElement.contentWindow.postMessage(a,b.targetOrigin):(b.iframeElement=document.querySelector(".pl-js-iframe"),b.iframeElement.contentWindow?b.insert(e,t,n):console.log("modelViewer insert cannot find the iframeElement..."))}else{const t=document.querySelector(".pl-js-drawer-content");if(null!==t.firstChild)for(;null!==t.firstChild;)t.removeChild(t.firstChild);t.appendChild(e),b.addClickEvents(t)}},addClickEvents(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll(".pl-js-lineage-link").forEach(e=>{e.addEventListener("click",e=>{const t=e.target.getAttribute("data-patternpartial");t&&b.iframeCustomElement&&(e.preventDefault(),b.iframeCustomElement.navigateTo(t))})})},refresh(e,t,n){b.patternData=e,v.gatherPanels(e,t,n)},slide(e){b.toggle()},slideToAnnotation(e){const t=document.querySelectorAll(".pl-js-annotations li");for(let a=0;a<t.length;++a)t[a].classList.remove("pl-is-active");const n=document.querySelector(".pl-js-pattern-info");for(let i=0;i<t.length;++i)i+1===e&&(t[i].classList.add("pl-is-active"),Object(a.a)(n,{top:t[i].offsetTop-14,behavior:"smooth"}).then((function(){})))},queryPattern(e){const t=JSON.stringify({event:"patternLab.patternQuery",switchText:e});b.iframeElement?b.iframeElement.contentWindow?b.iframeElement.contentWindow.postMessage(t,b.targetOrigin):(b.iframeElement=document.querySelector(".pl-js-iframe"),b.iframeElement.contentWindow?b.queryPattern(e):console.log("queryPattern cannot find the iframeElement...")):(b.iframeElement=document.querySelector(".pl-js-iframe"),b.iframeElement.contentWindow&&b.iframeElement.contentWindow.postMessage(t,b.targetOrigin))},receiveIframeMessage(e){const t=Object(i.c)(e);void 0!==t.event&&"patternLab.pageLoad"===t.event?(b.delayCheckingModalViewer&&b._handleInitialModalViewerState(),0===t.patternpartial.indexOf("viewall-")||0===t.patternpartial.indexOf("all")?y.a.dispatch(Object(E.k)(!0)):y.a.dispatch(Object(E.k)(!1)),!1===b.active&&void 0!==t.patternpartial&&0===t.patternpartial.indexOf("viewall-")&&void 0!==window.config.defaultShowPatternInfo&&window.config.defaultShowPatternInfo?b.queryPattern(!1):!0===b.active&&b.queryPattern()):void 0!==t.event&&"patternLab.patternQueryInfo"===t.event?b.panelRendered&&b.previouslyRenderedPattern===t.patternData.patternPartial||b.refresh(t.patternData,t.iframePassback,t.switchText):void 0!==t.event&&"patternLab.annotationNumberClicked"===t.event&&b.slideToAnnotation(t.displayNumber)},_handleInitialModalViewerState(){b.iframeElement||(b.iframeElement=document.querySelector(".pl-js-iframe")),b.iframeElement?(b.delayCheckingModalViewer=!1,b.active?b.open():b.close()):b.delayCheckingModalViewer=!0},_stateChanged(e){b.active!==e.app.drawerOpened&&(b.active=e.app.drawerOpened,b.iframeElement&&b._handleInitialModalViewerState())}};b.onReady()},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a={addClickEvents(e,t){const n=e.querySelectorAll(".pl-js-tab-link");for(let i=0;i<n.length;++i)n[i].onclick=function(e){e.preventDefault();const t=this.getAttribute("data-patternpartial"),n=this.getAttribute("data-panelid");a.show(t,n)};return e},show(e,t){const n=document.querySelector(`#pl-${e}-${t}-panel`),a=n.closest(".pl-js-tabs"),i=a.querySelectorAll(".pl-js-tab-link"),o=a.querySelectorAll(".pl-js-tab-panel"),l=a.querySelector(`#pl-${e}-${t}-tab`);for(let r=0;r<i.length;++r)i[r].classList.remove("pl-is-active-tab");for(let r=0;r<o.length;++r)o[r].classList.remove("pl-is-active-tab");l.classList.add("pl-is-active-tab"),n.classList.add("pl-is-active-tab")}}},82:function(e,t,n){"use strict";var a=n(46);new(n.n(a).a)(".pl-js-code-copy-btn").on("success",(function(e){const t=document.querySelectorAll(".pl-js-code-copy-btn");for(let n=0;n<t.length;n++)t[n].querySelector(".pl-c-code-copy-btn__icon-text").innerText="Copy";e.trigger.classList.add("is-copied"),e.trigger.querySelector(".pl-c-code-copy-btn__icon-text").textContent="Copied",setTimeout(()=>{e.trigger.classList.remove("is-copied"),e.trigger.querySelector(".pl-c-code-copy-btn__icon-text").textContent="Copy",e.clearSelection(),e.trigger.blur()},2e3)}))}}]);