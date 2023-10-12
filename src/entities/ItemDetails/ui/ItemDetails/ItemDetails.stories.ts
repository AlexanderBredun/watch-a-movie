import type { Meta, StoryObj } from '@storybook/vue3';
import ItemDetails from './ItemDetails.vue';


const meta = {
    title: 'entities/ItemDetails',
    component: ItemDetails,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ItemDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title',
        items: {
            name: {
                title: 'title 1',
                value: 'value 1',
            },
            name1: {
                title: 'title 1',
                value: 'value 1',
            },
            name2: {
                title: 'title 1',
                value: 'value 1',
            },
            name3: {
                title: 'title 1',
                value: 'value 1',
            },
            name4: {
                title: 'title 1',
                value: 'value 1',
            },
        } 
    },
};