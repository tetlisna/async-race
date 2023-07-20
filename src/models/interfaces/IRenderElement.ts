
export interface IRenderElement {
  tag: string;
  id?: string;
  classNames?: string[];
  src?: string;
  textContent?: string;
  type?: 'text' | 'color';
  html?: string;
  href?: string;
  target?: string;
  callback?: Function | null,
  style?: { parameter: string; value: string | number }[];
  children?:
  IRenderElement[];
}
