import type { Meta, StoryObj } from '@storybook/vue3';
import ItemFacts from './ItemFacts.vue';


const meta = {
    title: 'entities/ItemFacts',
    component: ItemFacts,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ItemFacts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        items: [
            {
                spoiler: true,
                text: 'Lorem ipsum dolor sit amet lore',
                type: 'BLOOPER'
            },
            {
                spoiler: false,
                text: 'Lorem ipsum dolor sit amet lore',
                type: 'FACT'
            },
            {
                spoiler: false,
                text: 'Lorem ipsum dolor sit amet lore',
                type: 'BLOOPER'
            },
            {
                spoiler: true,
                text: 'Lorem ipsum dolor sit amet lore',
                type: 'BLOOPER'
            },
            {
                spoiler: true,
                text: 'Lorem ipsum dolor sit amet lore',
                type: 'BLOOPER'
            },
            {
                spoiler: false,
                text: 'Lorem ipsum dolor sit amet lore',
                type: 'BLOOPER'
            },
            {
                spoiler: false,
                text: 'Lorem ipsum dolor sit amet lore',
                type: 'FACT'
            },
            {
                spoiler: true,
                text: 'Lorem ipsum dolor sit amet lore',
                type: 'BLOOPER'
            },
            {
                spoiler: true,
                text: 'Lorem ipsum dolor sit amet lore',
                type: 'FACT'
            },
            {
                spoiler: true,
                text: 'Lorem ipsum dolor sit amet lore',
                type: 'BLOOPER'
            },
            {
                spoiler: true,
                text: 'Lorem ipsum dolor sit amet lore',
                type: 'BLOOPER'
            },
        ]
    },
};