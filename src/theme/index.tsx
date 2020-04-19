import React from 'react';
import { ThemeProvider, ThemedStyledProps } from 'styled-components';
import light from './light';

export type Theme = {
  readonly nubankColor1: string;
  readonly nubankColor2: string;
  readonly nubankColor3: string;
  readonly primaryColor: string;
  readonly secondaryColor: string;
  readonly tertiaryColor: string;
  readonly primaryIconColor: string;
  readonly secondaryIconColor: string;
  readonly tertiaryIconColor: string;
  readonly primaryTextColor: string;
  readonly secondaryTextColor: string;
  readonly tertiaryTextColor: string;
  readonly regularFont: string;
  readonly lightFont: string;
  readonly semiBoldFont: string;
  readonly boldFont: string;
  readonly blackFont: string;
};

/** List of themes */
export const themes = {
  light,
};

// Using this style to allow use anothers props in the future
// like toggle function, etc
export type ThemeValue = {
  readonly current: Theme;
};

const defaultValue: ThemeValue = {
  current: light,
};

/** Props to be used within styles */
export type ThemeProps = ThemedStyledProps<any, ThemeValue>;

/** Theme component props */
type Props = {
  children: React.ReactNode;
};

const Theme = ({ children }: Props) => {
  return <ThemeProvider theme={defaultValue}>{children}</ThemeProvider>;
};

export default Theme;
