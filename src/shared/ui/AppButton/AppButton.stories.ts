import type { Meta, StoryObj } from '@storybook/vue3';
import AppButton from './AppButton.vue';


const meta = {
    title: 'shared/AppButton',
    component: AppButton,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        default: 'Text btn',
    },
};
export const Hollow: Story = {
    args: {
        default: 'Text btn',
        variant: 'hollow',
    },
};
export const Slim: Story = {
    args: {
        default: 'Text btn',
        variant: 'slim',
        
    },
};
export const Gray: Story = {
    args: {
        default: 'Text btn',
        pallete: 'gray'
    },
};
export const White: Story = {
    args: {
        default: 'Text btn',
        pallete: 'white'
    },
};