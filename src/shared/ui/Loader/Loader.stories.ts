import type { Meta, StoryObj } from '@storybook/vue3';
import Loader from './Loader.vue';


const meta = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
       size: 80
    },
};