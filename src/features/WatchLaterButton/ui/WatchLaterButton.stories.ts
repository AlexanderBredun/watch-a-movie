import type { Meta, StoryObj } from '@storybook/vue3';
import { mockCategotyItem } from '@/shared/lib/mocks';
import WatchLaterButton from './WatchLaterButton.vue';


const meta = {
    title: 'features/WatchLaterButton',
    component: WatchLaterButton,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof WatchLaterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
       item: mockCategotyItem
    },
};