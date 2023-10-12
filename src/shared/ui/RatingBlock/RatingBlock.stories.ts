import type { Meta, StoryObj } from '@storybook/vue3';
import RatingBlock from './RatingBlock.vue';


const meta = {
    title: 'shared/RatingBlock',
    component: RatingBlock,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof RatingBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        rating: 9.5
    },
};
export const LowRating: Story = {
    args: {
        rating: 2.5
    },
};
export const MediumRating: Story = {
    args: {
        rating: 7.5
    },
};
export const WithZeroRating: Story = {
    args: {
        rating: 2
    },
};