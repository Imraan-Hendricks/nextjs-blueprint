import '../src/app/globals.css';
import type { Preview } from '@storybook/react';
import { viewports } from './viewports';
import { withThemeByDataAttribute } from '@storybook/addon-styling';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'light', value: '#f9fafb' },
        { name: 'dark', value: '#030712' },
        { name: 'black', value: '#000000' },
      ],
    },
    viewport: { viewports },
  },
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];

export default preview;
