import type { Meta, StoryObj } from '@storybook/vue3';
import LayoutSearchLoading from './LayoutSearchLoading.vue';


const meta = {
    title: 'entities/LayoutSearchLoading',
    component: LayoutSearchLoading,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof LayoutSearchLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
       loading: false,
       error: false,
       items: ['a', 'b', 'c'],
       default(_) {
           return (<div>test content</div>);
       },
    },
};
export const Empty: Story = {
    args: {
       loading: false,
       error: false,
       items: [],
       default(_) {
           return (<div>test content</div>);
       },
    },
};
export const LoadingState: Story = {
    args: {
       loading: true,
       error: false,
       items: ['a', 'b', 'c'],
       default(_) {
           return (<div>test content</div>);
       },
    },
};
export const ErrorState: Story = {
    args: {
       loading: true,
       error: true,
       items: ['a', 'b', 'c'],
       default(_) {
           return (<div>test content</div>);
       },
       errorSlot(_) {
           return (<div>Error content</div>);
       },
    },
};
export const ErrorStateDefault: Story = {
    args: {
       loading: true,
       error: true,
       items: ['a', 'b', 'c'],
       default(_) {
           return (<div>test content</div>);
       },
    },
};