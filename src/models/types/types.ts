import { pages } from "../../models/types/enums";

export type tagClass = {
    tag: string,
    classNames?: string[],
    textContent?: string
}
export type Pages = {
    name: pages,
    callback: Function
}
export type carInfo = {
    id: number,
    name: string,
    color: string
}
export type inputClass = {
    tag: string,
    classNames?: string[]
}