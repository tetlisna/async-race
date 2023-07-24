import { CallbackEvent } from "../types/types";

export interface IrenderView {
  tag: string;
  id?: string;
  classNames?: string[];
  textContent?: string;
  callback?: CallbackEvent | null,
  style?: { parameter: string; value: string | number }[];
}
