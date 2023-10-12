import type { Meta, StoryObj } from '@storybook/vue3';
import { eListsHighlight } from '@/shared/lib/utils';
import HighlightedList from './HighlightedList.vue';


const meta = {
    title: 'widgets/HighlightedList',
    component: HighlightedList,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof HighlightedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        type: eListsHighlight.FAVORITE
    },
};