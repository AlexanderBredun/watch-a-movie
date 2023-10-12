import type { Meta, StoryObj } from '@storybook/vue3';
import { mockPersonPreview } from '@/shared/lib/mocks';
import SliderPerson from './SliderPerson.vue';


const meta = {
    title: 'widgets/SliderPerson',
    component: SliderPerson,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof SliderPerson>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
       items: [
        mockPersonPreview,
        mockPersonPreview,
        mockPersonPreview,
        mockPersonPreview,
        mockPersonPreview,
        mockPersonPreview,
        mockPersonPreview,
        mockPersonPreview,
       ]
    },
};