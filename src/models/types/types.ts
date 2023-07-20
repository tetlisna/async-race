export type tagClass = {
    tag: string,
    classNames?: string[],
    textContent?: string
}
export type Pages = {
    name: string,
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
export type pagesDisplay = {
    INDEX: string,
    WINNERS: string
}
export type Routes = {
    path: string,
    callback: Function
}
export type paramsHistory = {
    nameEvent: string,
    locationField: string
}