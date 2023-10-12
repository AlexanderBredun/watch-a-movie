import type { Meta, StoryObj } from '@storybook/vue3';
import AppInputSlider from './AppInputSlider.vue';


const meta = {
    title: 'shared/AppInputSlider',
    component: AppInputSlider,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AppInputSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        max: 1000,
        min: 0,
        modelValue: {
            max: 1000,
            min: 0
        }
    },
};