// import {IRenderElement} from "../../models/interfaces/IRenderElement";

// export class RenderEngine {
//     renderEl(data: IRenderElement, parent: HTMLElement) {
//         const tag = data.tag;
//         const el = document.createElement(tag) as HTMLElement;
//         if (tag === 'button') {
//             this.setButtonSubmit(el as HTMLButtonElement, data);
//             this.setButtonReset(el as HTMLButtonElement, data);
//         }
//         // if (tag === 'img') {
//         //     this.setImgAttributes(el as HTMLImageElement, data);
//         // }
//         this._setAttributes(el, data);
//         if (data.text) el.textContent = data.text;
//         if (data.html) el.innerHTML = data.html;
//         if (data.type) el.innerHTML = data.type;
//         if (data.children) {
//             for (const item of data.children) {
//                 this.renderEl(item, el);
//             }
//         }
//         parent.appendChild(el);
//     }

//     setButtonSubmit(element: HTMLButtonElement, data: IRenderElement) {
//         if (data.target) element.type = "submit";
//     }
//     setButtonReset(element: HTMLButtonElement, data: IRenderElement) {
//         if (data.target) element.type = "reset";
//     }

//     setImgAttributes(element: HTMLImageElement, data: IRenderElement) {
//         if (data.src) {
//             element.src = data.src;
//         }
//     }

//     private _setAttributes(el: HTMLElement, data: IRenderElement) {
//         if (data.id) {
//             el.id = data.id;
//         }
//         if (data.classNames && data.classNames.length) {
//             for (const className of data.classNames) {
//                 if (className) el.classList.add(className);
//             }
//         }
//     }
// }
