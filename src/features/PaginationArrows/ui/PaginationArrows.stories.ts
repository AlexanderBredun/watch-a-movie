import type { Meta, StoryObj } from '@storybook/vue3';
import PaginationArrows from './PaginationArrows.vue';


const meta = {
    title: 'features/PaginationArrows',
    component: PaginationArrows,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof PaginationArrows>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        page: 1,
        totalPages: 22
    },
};
export const LastPage: Story = {
    args: {
        page: 2,
        totalPages: 2
    },
};
export const OnlyOnePage: Story = {
    args: {
        page: 1,
        totalPages: 1
    },
};