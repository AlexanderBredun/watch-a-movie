import type { Meta, StoryObj } from '@storybook/vue3';
import { mockPersonPreview } from '@/shared/lib/mocks';
import PersonPreview from './PersonPreview.vue';


const meta = {
    title: 'entities/PersonPreview',
    component: PersonPreview,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof PersonPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        item: mockPersonPreview
    },
};