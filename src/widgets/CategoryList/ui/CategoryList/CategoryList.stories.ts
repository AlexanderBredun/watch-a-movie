import type { Meta, StoryObj } from '@storybook/vue3';
import { mockCategotyItem } from '@/shared/lib/mocks';
import CategoryList from './CategoryList.vue';


const meta = {
    title: 'widgets/CategoryList',
    component: CategoryList,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof CategoryList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        page: 1,
        error: false,
        items: [
            mockCategotyItem,
            mockCategotyItem,
            mockCategotyItem,
            mockCategotyItem,
        ],
        loading: false,
        
    },
};
export const SearchBarVariant: Story = {
    args: {
        page: 1,
        error: false,
        variant: 'search-bar',
        items: [
            mockCategotyItem,
            mockCategotyItem,
            mockCategotyItem,
            mockCategotyItem,
        ],
        loading: false,
        
    },
};
export const LoadingState: Story = {
    args: {
        page: 1,
        error: false,
        items: [],
        loading: true,
        
    },
};
export const ErrorState: Story = {
    args: {
        page: 1,
        error: true,
        items: [],
        loading: false,
    },
};