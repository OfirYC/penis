import {
  CSSProperties,
  ChangeEvent,
  FormEvent,
  MouseEvent,
  ReactNode,
} from "react";
export interface BaseComponentProps {
  style?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
  onClick?: (
    e?: MouseEvent<HTMLElement | HTMLDivElement, globalThis.MouseEvent>
  ) => any;
  href?: string;
}

export interface TextProps {
  children?: string | undefined | null | never[] | ReactNode | any;
  fontSize?: number;
  fontStyle?: string;
  fontColor?: string;
  contentEditable?: "true" | "false";
  select?: Selection;
  onClick?: (e: React.MouseEvent<HTMLElement>) => any | void | null;
  fontFamily?: string;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  props?: Record<any, any>;
  onInput?: (e: FormEvent<HTMLDivElement>) => any;
  truncate?: "truncate" | "";
}

export enum Selection {
  allow = "select-text",
  disallow = "select-none",
}

export interface InputProps extends Omit<BaseComponentProps, "onClick"> {
  fontSize?: number;
  fontStyle?: string;
  placeholder?: string;
  placeholderClassname?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => any;
  icon?: string | React.ReactNode;
  iconProps?: ImageProps;
  showGlass?: boolean;
  fontColor?: string;
  select?: Selection;
  onClick?: (e: React.MouseEvent<HTMLElement>) => any | void | null;
  fontFamily?: string;
  className?: string;
  width?: `w-${string}`;
  type?: "text" | "number";
  title?: string;
  value?: string;
  defaultValue?: string;
  min?: number;
  max?: number;
}

export type ImageSrc =
  | string
  | {
      light: string;
      dark: string;
    }
  | null;

export interface ImageProps {
  src?: string;
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  getColor?: boolean;
  onClick?: () => any;
  style?: React.CSSProperties;
  wheelable?: boolean;
}
