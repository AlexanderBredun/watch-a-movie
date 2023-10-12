import { type Preview, setup }  from '@storybook/vue3';
import { type App } from 'vue';
import '../src/shared/assets/styles/main.scss';
import { vueRouter } from 'storybook-vue3-router'
import { initialize, mswLoader } from 'msw-storybook-addon';

import { createPinia } from 'pinia';

const pinia = createPinia();

setup((app: App) => {
  app.use(pinia);
});
initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
   
  },
  loaders: [mswLoader],
  decorators: [
    vueRouter()
  ]
}

export default preview
