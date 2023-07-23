export type TagClass = {
    tag: string,
    classNames?: string[],
    textContent?: string
}
export type Pages = {
    name: string,
    callback: Function;
}
export type CarInfo = {
    id: number,
    name: string,
    color: string
}
export type InputClass = {
    tag: string,
    classNames?: string[]
}
export type PagesDisplay = {
    INDEX: string,
    WINNERS: string
}
export type Routes = {
    path: string,
    callback: Function
}
export type ParamsHistory = {
    nameEvent: string,
    locationField: string
}
export type FieldNames = 'firstField' | 'secondField';
