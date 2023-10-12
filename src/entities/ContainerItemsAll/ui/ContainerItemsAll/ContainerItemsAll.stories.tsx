import type { Meta, StoryObj } from '@storybook/vue3';
import ContainerItemsAll from './ContainerItemsAll.vue';


const meta = {
    title: 'entities/ContainerItemsAll',
    component: ContainerItemsAll,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ContainerItemsAll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        'content-aside': (<div>Aside content</div>),
        'content-main': (<div>Main content</div>),
        'heading': (<div>Heading</div>),
        'sub-heading': (<div>SubHeading</div>),
    },
};