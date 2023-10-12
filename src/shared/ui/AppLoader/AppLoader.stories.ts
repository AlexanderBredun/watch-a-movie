import type { Meta, StoryObj } from '@storybook/vue3';
import AppLoader from './AppLoader.vue';


const meta = {
    title: 'shared/Loader',
    component: AppLoader,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AppLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
       size: 80
    },
};