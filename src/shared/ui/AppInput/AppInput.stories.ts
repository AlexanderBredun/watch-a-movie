import type { Meta, StoryObj } from '@storybook/vue3';
import AppInput from './AppInput.vue';


const meta = {
    title: 'shared/AppInput',
    component: AppInput,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AppInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
       
    },
};