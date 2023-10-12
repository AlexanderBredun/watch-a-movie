import type { Meta, StoryObj } from '@storybook/vue3';
import SkeletItem from './SkeletItem.vue';


const meta = {
    title: 'shared/SkeletItem',
    component: SkeletItem,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof SkeletItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        
    },
};
export const CustomSize: Story = {
    args: {
        height: '200px',
        width: '500px',
    },
};