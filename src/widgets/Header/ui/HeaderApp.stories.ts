import type { Meta, StoryObj } from '@storybook/vue3';
import HeaderApp from './HeaderApp.vue';


const meta = {
    title: 'widgets/HeaderApp',
    component: HeaderApp,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof HeaderApp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        
    },
};