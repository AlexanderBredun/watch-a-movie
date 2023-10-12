import type { Meta, StoryObj } from '@storybook/vue3';
import BackButton from './BackButton.vue';


const meta = {
    title: 'shared/BackButton',
    component: BackButton,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        
    },
};
export const Mini: Story = {
    args: {
        mini: true
    },
};