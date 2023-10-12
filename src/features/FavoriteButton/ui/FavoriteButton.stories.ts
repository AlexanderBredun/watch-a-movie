import type { Meta, StoryObj } from '@storybook/vue3';
import { mockCategotyItem } from '@/shared/lib/mocks';
import FavoriteButton from './FavoriteButton.vue';


const meta = {
    title: 'features/FavoriteButton',
    component: FavoriteButton,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof FavoriteButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        item: mockCategotyItem
    },
};