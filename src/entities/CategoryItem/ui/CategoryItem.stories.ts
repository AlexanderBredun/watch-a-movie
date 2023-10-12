import type { Meta, StoryObj } from '@storybook/vue3';
import { mockCategotyItem } from '@/shared/lib/mocks';
import CategoryItem from './CategoryItem.vue';


const meta = {
    title: 'entities/CategoryItem',
    component: CategoryItem,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof CategoryItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        item: mockCategotyItem
    },
};