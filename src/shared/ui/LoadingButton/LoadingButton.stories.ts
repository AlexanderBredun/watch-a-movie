import type { Meta, StoryObj } from '@storybook/vue3';
import LoadingButton from './LoadingButton.vue';


const meta = {
    title: 'shared/LoadingButton',
    component: LoadingButton,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof LoadingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        loading: false,
        default: 'Text btn'
    },
};
export const LoadingState: Story = {
    args: {
        loading: true,
        default: 'Text btn'
    },
};