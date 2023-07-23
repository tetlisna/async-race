(()=>{const e={489:(e,t,s)=>{s.r(t)},924:(e,t,s)=>{s.r(t)},598:(e,t,s)=>{s.r(t)},77(e,t,s){const n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0,s(598);const a=s(681); const r=s(498); const i=s(981); const l=s(351); const o=s(957); const d=s(678); const c=n(s(819));t.App=class{constructor(){this.header=null,this.garage=null;const e=this.createRoutes();this.router=new o.Router(e),this.renderEl()}

renderEl(){this.header=new r.HeaderView(this.router),this.garage=new i.GarageView(""),document.body.append(this.header.getHtmlElement(),this.garage.getHtmlElement())}

createRoutes(){return[{path:`${a.pages.INDEX}`,callback:()=>{this.setContent(a.pages.INDEX,new l.IndexView)}},{path:`${a.pages.WINNERS}`,callback:e=>{this.setContent(a.pages.WINNERS,new d.WinnersView)}},{path:`${a.pages.WINNERS}/${a.ID_SELECTOR}}`,callback:e=>{this.setContent(a.pages.WINNERS,new d.WinnersView)}},{path:`${a.pages.NOT_FOUND}`,callback:()=>{this.setContent(a.pages.NOT_FOUND,new c.default)}}]}

setContent(e,t){this.header.setSelected(e),this.garage.setContent(t)}}},427:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HashRouterHandler=void 0;const n=s(273);class a extends n.HistoryRouterHandler{constructor(e){super(e),this.params={nameEvent:"hashchange",locationField:"hash"},window.addEventListener(this.params.nameEvent,this.handler)}

setHistory(e){window.location.href=`${window.location.href.replace(/#(.*)$/,"")}#${e}`}}t.HashRouterHandler=a},273:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HistoryRouterHandler=void 0,t.HistoryRouterHandler=class{constructor(e){this.params={nameEvent:"popstate",locationField:"pathname"},this.callback=e,this.handler=this.navigate.bind(this),window.addEventListener(this.params.nameEvent,this.handler)}

navigate(e){typeof e==="string"&&this.setHistory(e);const t={path:"",resource:""}; const s=window.location.pathname.slice(1).split("/");[t.path,t.resource]=s}

disable(){window.removeEventListener(this.params.nameEvent,this.handler)}

setHistory(e){window.history.pushState(null,"",`/${e}`)}}},957:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Router=void 0;const n=s(681); const a=s(273); const r=s(427);t.Router=class{constructor(e){this.routes=e,this.handler=new a.HistoryRouterHandler(this.urlChangedHandler.bind(this)),document.addEventListener("DOMContentLoaded",(()=>{this.handler.navigate(""),this.navigate("")}))}

setHashHandler(){this.handler.disable(),this.handler=new r.HashRouterHandler(this.urlChangedHandler.bind(this))}

navigate(e){this.handler.navigate(e)}

urlChangedHandler(e){const t=e.resource===""?e.path:`${e.path}/${n.ID_SELECTOR}`; const s=this.routes.find((e=>e.path===t));s?s.callback(e.resource):this.redirectToNotFoundPage()}

redirectToNotFoundPage(){const e=this.routes.find((e=>e.path===n.pages.NOT_FOUND));e&&this.navigate(e.path)}}},951:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ElementRender=void 0;class s{constructor(e){this.element=null,this.renderEl(e)}

renderEl(e){const{tag:t,classNames:s,textContent:n,callback:a}=e;this.element=document.createElement(t),this.setCssClasses(s),this.setTextContent(n),this.setCallback(a)}

setCssClasses(e=[]){e.forEach((e=>this.element.classList.add(e)))}

setTextContent(e){this.element.textContent=e}

setCallback(e){typeof e==="function"&&this.element.addEventListener("click",(t=>e(t)))}

getElement(){return this.element}

addInnerElement(e){e instanceof s?this.element.append(e.getElement()):this.element.append(e)}}t.ElementRender=s},122:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InputCreator=void 0;const n=s(951); const a=s(681);class r extends n.ElementRender{renderEl(e){const{classNames:t,type:s,textContent:n,callback:r}=e;this.element=document.createElement("div"),this.inputElementText=document.createElement("input"),this.inputElementText.setAttribute("type","text"),this.inputElementColor=document.createElement("input"),this.inputElementColor.setAttribute("type","color"),this.btnElement=document.createElement("button"),this.btnElement.classList.add(a.cssClasses.BTN),this.setCallback(r),t==null||t.forEach((e=>this.element.classList.add(e))),this.setTextContent(n),this.element.append(this.inputElementText,this.inputElementColor,this.btnElement)}

setValue(e){this.inputElementText.value=e}

setTextContent(e){this.btnElement.textContent=e}

setCallback(e){typeof e==="function"&&this.element.addEventListener("keyup",(t=>e(t)))}

setCssClasses(e){e.forEach((e=>this.element.classList.add(a.cssClasses.INPUT)))}}t.InputCreator=r},498:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderView=void 0,s(489);const n=s(681); const a=s(951); const r=s(113); const i=s(346); const l=s(713);class o extends r.View{constructor(e){super({tag:"header",classNames:[n.cssClasses.HEADER]}),this.linksBtnNav=[],this.configureView(e)}

configureView(e){const t={tag:"nav",classNames:[n.cssClasses.NAV],textContent:"",callback:null}; const s=new a.ElementRender(t);this.elementRender.addInnerElement(s),Object.keys(l.pagesObj).forEach((t=>{const n={name:l.pagesObj[t],callback:()=>e.navigate(l.pagesObj[t])}; const a=new i.ButtonView(n,this.linksBtnNav);s.addInnerElement(a.getHtmlElement()),this.linksBtnNav.push(a)}))}

setSelected(e){e.forEach((e=>{e instanceof i.ButtonView&&e.setSelected()}))}}t.HeaderView=o},346(e,t,s){const n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonView=void 0;const a=n(s(113)); const r=s(681);class i extends a.default{constructor(e,t){super({tag:"a",classNames:[r.cssClasses.BTN]}),this.linkElements=t,this.pageParam=e,this.configureView()}

setSelected(){this.linkElements.forEach((e=>e.setSelectedNot())),this.elementRender.getElement().classList.add(r.cssClasses.BTN_Selected)}

setSelectedNot(){this.elementRender.getElement().classList.remove(r.cssClasses.BTN_Selected)}

configureView(){this.elementRender.setTextContent(this.pageParam.name),this.elementRender.setCallback(this.pageParam.callback),this.elementRender.getElement().addEventListener("click",(()=>this.setSelected))}}t.ButtonView=i},981:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GarageView=void 0,s(924);const n=s(681); const a=s(113);class r extends a.View{constructor(e){super({tag:"section",classNames:[n.cssClasses.GARAGE]})}

setContent(e){const t=this.elementRender.getElement();for(;t.firstElementChild;)t.firstElementChild.remove();this.elementRender.addInnerElement(e.getHtmlElement())}}t.GarageView=r},351:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.IndexView=void 0;const n=s(113); const a=s(681); const r=s(951); const i=s(122);class l extends n.View{constructor(){super({tag:"section",classNames:[a.cssClasses.GARAGE]}),this.name="Garage",this.page_total=0,this.page_number=1,this.btnsContent=["race","update","generate cars"],this.configureView(),this.firstField="",this.secondField="",this.name="Garage",this.page_total=0,this.page_number=1}

configureView(){let e={tag:"input",classNames:[],textContent:a.btn.CREATE,callback:e=>this.keyupHandler(e,"firstField")}; let t=new i.InputCreator(e);this.elementRender.addInnerElement(t),e={tag:"input",classNames:[],textContent:a.btn.UPDATE,callback:e=>this.keyupHandler(e,"secondField")},t=new i.InputCreator(e),this.elementRender.addInnerElement(t);const s={tag:"div",classNames:[a.cssClasses.CONTAINER_input]}; const n=new r.ElementRender(s);this.elementRender.addInnerElement(n),this.btnsContent.forEach((e=>{const t={tag:"button",classNames:[a.cssClasses.BTN,a.cssClasses.BTNGreen],textContent:e}; const s=new r.ElementRender(t);n.addInnerElement(s)}));const l={tag:"h1",classNames:[a.cssClasses.HEADER_page],textContent:`${this.name} (${this.page_total})`}; const o=new r.ElementRender(l);this.elementRender.addInnerElement(o);const d={tag:"p",classNames:[],textContent:`Page ${this.page_number}`}; const c=new r.ElementRender(d);this.elementRender.addInnerElement(c)}

setContent(e){const t=this.elementRender.getElement(); const s=this.elementRender.getElement();for(;s.firstElementChild;)s.firstElementChild.remove();this.elementRender.addInnerElement(t)}

keyupHandler(e,t){e.target instanceof HTMLInputElement&&(this[t]=e.target.value)}}t.IndexView=l},819:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=s(113); const a=s(713); const r=s(681);class i extends n.View{constructor(){super({tag:"section",classNames:[r.cssClasses.ERROR]}),this.configureView()}

configureView(){this.elementRender.setTextContent(a.NOT_FOUND)}}t.default=i},113:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.View=void 0;const n=s(951);class a{constructor(e){this.params=e,this.elementRender=this.renderEl()}

getHtmlElement(){return this.elementRender.getElement()}

renderEl(){return this.elementRender=new n.ElementRender(this.params),this.elementRender}}t.View=a,t.default=a},678:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WinnersView=void 0;const n=s(681); const a=s(113);class r extends a.View{constructor(){super({tag:"section",classNames:[n.cssClasses.WINNERS]}),this.showAllWinners()}

showAllWinners(){this.clearView()}

clearView(){const e=this.elementRender.getElement();for(;e.firstElementChild;)e.firstElementChild.remove()}}t.WinnersView=r},713:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NOT_FOUND=t.Update_BTN=t.Create_BTN=t.pagesObj=void 0,t.pagesObj={INDEX:"index",WINNERS:"winners"},t.Create_BTN="create",t.Update_BTN="update",t.NOT_FOUND="Ошибка. Страница не найдена."},681:(e,t)=>{let s; let n; let a;Object.defineProperty(t,"__esModule",{value:!0}),t.ID_SELECTOR=t.btn=t.pages=t.cssClasses=void 0,function(e){e.HEADER="header",e.HEADER_page="header-page",e.NAV="nav",e.GARAGE="garage-page",e.WINNERS="winners-page",e.BTN="btn",e.BTN_Selected="btn-selected",e.BTNA="btn-A",e.BTNB="btn-B",e.BTNBlue="btn-blue",e.BTNGreen="btn-green",e.CONTAINER_input="container-input",e.CONTAINER_Car="container-car",e.INPUT="input-field",e.INPUT_Update="input-update",e.ERROR="not-found"}(s||(t.cssClasses=s={})),function(e){e.INDEX="garage",e.WINNERS="winners",e.NOT_FOUND="not found"}(n||(t.pages=n={})),function(e){e.CREATE="create",e.UPDATE="update",e.RACE="race",e.RESET="reset",e.GENERATE_CARS="generate cars",e.SELECT="select",e.REMOVE="remove"}(a||(t.btn=a={})),t.ID_SELECTOR="{id}"}}; const t={};function s(n){const a=t[n];if(void 0!==a)return a.exports;const r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,s),r.exports}s.r=e=>{typeof Symbol!=="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},new(s(77).App)})();