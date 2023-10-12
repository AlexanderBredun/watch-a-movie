import type { Meta, StoryObj } from '@storybook/vue3';
import ItemSingleItemSkeleton from './SingleItemSkeleton.vue';


const meta = {
    title: 'widgets/SingleItem/ItemSingleItemSkeleton',
    component: ItemSingleItemSkeleton,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ItemSingleItemSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        
    },
}; 