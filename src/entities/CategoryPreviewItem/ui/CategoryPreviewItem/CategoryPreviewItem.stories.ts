import type { Meta, StoryObj } from '@storybook/vue3';
import { mockCategotyItem } from '@/shared/lib/mocks';
import CategoryPreviewItem from './CategoryPreviewItem.vue';


const meta = {
    title: 'entities/CategoryPreviewItem',
    component: CategoryPreviewItem,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof CategoryPreviewItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
       item: mockCategotyItem
    },
};
export const LoadingState: Story = {
    args: {
       item: mockCategotyItem,
       skeleton: true
    },
};