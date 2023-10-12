import type { StorybookConfig } from '@storybook/vue3-vite'
import path from 'path';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal(config) {
		return mergeConfig(config, {
			resolve: {
				alias: { '@': path.resolve(__dirname, '../src') },
			},
      define: {
        'process.env': {},
        'IS_STORYBOOK': true
      },
			css: {
				postcss: null,
				preprocessorOptions: {
					scss: {
						additionalData: '@import "../src/shared/assets/styles/_mixins.scss"; @import "../src/shared/assets/styles/_constants.scss";',
					},
				},
			},
		});
	},
}
export default config
