(()=>{const e={389:(e,t,s)=>{s.r(t)},489:(e,t,s)=>{s.r(t)},598:(e,t,s)=>{s.r(t)},77(e,t,s){const n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0,s(598);const a=s(681); const l=s(498); const i=s(735); const r=s(123); const o=s(957); const c=s(681); const d=s(678); const u=n(s(356));t.App=class{constructor(){this.header=null,this.index=null;const e=this.createRoutes();this.router=new o.Router(e),this.renderEl()}

renderEl(){const e=new i.GarageView("Page");this.header=new l.HeaderView(e),this.index=new r.IndexView,document.body.append(this.header.getHtmlElement(),this.index.getHtmlElement())}

createRoutes(){return[{path:`${c.pages.INDEX}`,callback:()=>{this.setContent(c.pages.INDEX,new r.IndexView)}},{path:`${c.pages.WINNERS}`,callback:e=>{this.setContent(c.pages.WINNERS,new d.WinnersView(e))}},{path:`${c.pages.WINNERS}/${a.ID_SELECTOR}}`,callback:e=>{this.setContent(c.pages.WINNERS,new d.WinnersView(e))}},{path:`${c.pages.NOT_FOUND}`,callback:()=>{this.setContent(c.pages.NOT_FOUND,new u.default)}}]}

setContent(e,t){this.header.setSelected(e),this.index.setContent(t)}}},957:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Router=void 0;const n=s(681);class a{constructor(e){this.routes=e,document.addEventListener("DOMContentLoaded",(()=>{a.navigate("")}))}

setHashHandler(){}

navigate(e){const t=this.parseUrl(e); const s=t.resource===""?t.path:`${t.path}/ ${t.resource}`;this.routes.find((e=>e.path===s))}

parseUrl(e){const t={path:"",resource:""}; const s=e.split("/");return[t.path="",t.resource=""]=s,t}

redirectToNotFoundPage(){const e=this.routes.find((e=>e.path===n.pages.NOT_FOUND));e&&a.navigate(e.path)}}t.Router=a},951:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ElementRender=void 0;class s{constructor(e){this.element=null,this.renderEl(e)}

renderEl(e){const{tag:t,classNames:s,textContent:n,callback:a}=e;this.element=document.createElement(t),this.setCssClasses(s),this.setTextContent(n),this.setCallback(a)}

setCssClasses(e=[]){e.forEach((e=>this.element.classList.add(e)))}

setTextContent(e){this.element.textContent=e}

setCallback(e){typeof e==="function"&&this.element.addEventListener("click",(t=>e(t)))}

getElement(){return this.element}

addInnerElement(e){e instanceof s?this.element.append(e.getElement()):this.element.append(e)}}t.ElementRender=s},122:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InputCreator=void 0;const n=s(951); const a=s(681);class l extends n.ElementRender{renderEl(e){const{classNames:t,type:s,textContent:n,callback:l}=e;this.element=document.createElement("div"),this.inputElementText=document.createElement("input"),this.inputElementText.setAttribute("type","text"),this.inputElementColor=document.createElement("input"),this.inputElementColor.setAttribute("type","color"),this.btnElement=document.createElement("button"),this.btnElement.classList.add(a.cssClasses.BTN),this.setCallback(l),t==null||t.forEach((e=>this.element.classList.add(e))),this.setTextContent(n),this.element.append(this.inputElementText,this.inputElementColor,this.btnElement)}

setValue(e){this.inputElementText.value=e}

setTextContent(e){this.btnElement.textContent=e}

setCallback(e){typeof e==="function"&&this.element.addEventListener("keyup",(t=>e(t)))}

setCssClasses(e){e.forEach((e=>this.element.classList.add(a.cssClasses.INPUT)))}}t.InputCreator=l},735:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GarageView=void 0,s(389);const n=s(681); const a=s(113);class l extends a.View{constructor(e){super({tag:"section",classNames:[n.cssClasses.GARAGE],callback:null}),this.configureView()}

configureView(){}}t.GarageView=l},123:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.IndexView=void 0;const n=s(113); const a=s(681); const l=s(951); const i=s(122);class r extends n.View{constructor(){super({tag:"section",classNames:[a.cssClasses.GARAGE]}),this.name="Garage",this.page_total=0,this.page_number=1,this.btnsContent=["race","update","generate cars"],this.configureView(),this.firstField="",this.secondField="",this.name="Garage",this.page_total=0,this.page_number=1}

configureView(){let e={tag:"input",classNames:[],textContent:a.btn.CREATE,callback:e=>this.keyupHandler(e,"firstField")}; let t=new i.InputCreator(e);this.elementRender.addInnerElement(t),e={tag:"input",classNames:[],textContent:a.btn.UPDATE,callback:e=>this.keyupHandler(e,"secondField")},t=new i.InputCreator(e),this.elementRender.addInnerElement(t);const s={tag:"div",classNames:[a.cssClasses.CONTAINER_input]};const n=new l.ElementRender(s);this.elementRender.addInnerElement(n),this.btnsContent.forEach((e=>{const t={tag:"button",classNames:[a.cssClasses.BTN,a.cssClasses.BTNGreen],textContent:e};const s=new l.ElementRender(t);n.addInnerElement(s)}));const r={tag:"h1",classNames:[a.cssClasses.HEADER_page],textContent:`${this.name} (${this.page_total})`}; const o=new l.ElementRender(r);this.elementRender.addInnerElement(o);const c={tag:"p",classNames:[],textContent:`Page ${this.page_number}`}; const d=new l.ElementRender(c);this.elementRender.addInnerElement(d)}

setContent(e){const t=this.elementRender.getElement(); const s=this.elementRender.getElement();for(;s.firstElementChild;)s.firstElementChild.remove();this.elementRender.addInnerElement(t)}

keyupHandler(e,t){e.target instanceof HTMLInputElement&&(this[t]=e.target.value)}}t.IndexView=r},356:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=s(113); const a=s(713); const l=s(681);class i extends n.View{constructor(){super({tag:"section",classNames:[l.cssClasses.ERROR]}),this.configureView()}

configureView(){this.elementRender.setTextContent(a.NOT_FOUND)}}t.default=i},498:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderView=void 0,s(489);const n=s(681); const a=s(951); const l=s(113); const i=s(346); const r=s(957); const o=s(713);class c extends l.View{constructor(e){super({tag:"header",classNames:[n.cssClasses.HEADER]}),this.garageView=e,this.linksBtnNav=[],this.configureView()}

configureView(){const e={tag:"nav",classNames:[n.cssClasses.NAV],textContent:"",callback:null}; const t=new a.ElementRender(e);this.elementRender.addInnerElement(t),Object.keys(o.pagesObj).forEach((e=>{const s={name:o.pagesObj[e],callback:()=>r.Router.navigate(o.pagesObj[e])}; const n=new i.ButtonView(s,this.linksBtnNav);t.addInnerElement(n.getHtmlElement()),this.linksBtnNav.push(n)}))}

setSelected(e){e.forEach((e=>{e instanceof i.ButtonView&&e.setSelected()}))}}t.HeaderView=c},346(e,t,s){const n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonView=void 0;const a=n(s(113)); const l=s(681);class i extends a.default{constructor(e,t){super({tag:"a",classNames:[l.cssClasses.BTN]}),this.linkElements=t,this.pageParam=e,this.configureView()}

setSelected(){this.linkElements.forEach((e=>e.setSelectedNot())),this.elementRender.getElement().classList.add(l.cssClasses.BTN_Selected)}

setSelectedNot(){this.elementRender.getElement().classList.remove(l.cssClasses.BTN_Selected)}

configureView(){this.elementRender.setTextContent(this.pageParam.name),this.elementRender.setCallback(this.pageParam.callback),this.elementRender.getElement().addEventListener("click",(()=>this.setSelected))}}t.ButtonView=i},113:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.View=void 0;const n=s(951);class a{constructor(e){this.params=e,this.elementRender=this.renderEl()}

getHtmlElement(){return this.elementRender.getElement()}

renderEl(){return this.elementRender=new n.ElementRender(this.params),this.elementRender}

configureView(){}}t.View=a,t.default=a},678:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WinnersView=void 0;const n=s(681); const a=s(113);class l extends a.View{constructor(e){super({tag:"section",classNames:[n.cssClasses.WINNERS]}),this.configureView()}

configureView(){}}t.WinnersView=l},713:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NOT_FOUND=t.Update_BTN=t.Create_BTN=t.pagesObj=void 0,t.pagesObj={INDEX:"index",WINNERS:"winners"},t.Create_BTN="create",t.Update_BTN="update",t.NOT_FOUND="Ошибка. Страница не найдена."},681:(e,t)=>{let s; let n; let a;Object.defineProperty(t,"__esModule",{value:!0}),t.ID_SELECTOR=t.btn=t.pages=t.cssClasses=void 0,function(e){e.HEADER="header",e.HEADER_page="header-page",e.NAV="nav",e.GARAGE="garage-page",e.WINNERS="winners-page",e.BTN="btn",e.BTN_Selected="btn-selected",e.BTNA="btn-A",e.BTNB="btn-B",e.BTNBlue="btn-blue",e.BTNGreen="btn-green",e.CONTAINER_input="container-input",e.CONTAINER_Car="container-car",e.INPUT="input-field",e.INPUT_Update="input-update",e.ERROR="not-found"}(s||(t.cssClasses=s={})),function(e){e.INDEX="garage",e.WINNERS="winners",e.NOT_FOUND="not found"}(n||(t.pages=n={})),function(e){e.CREATE="create",e.UPDATE="update",e.RACE="race",e.RESET="reset",e.GENERATE_CARS="generate cars",e.SELECT="select",e.REMOVE="remove"}(a||(t.btn=a={})),t.ID_SELECTOR="{id}"}}; const t={};function s(n){const a=t[n];if(void 0!==a)return a.exports;const l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,s),l.exports}s.r=e=>{typeof Symbol!=="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},new(s(77).App)})();