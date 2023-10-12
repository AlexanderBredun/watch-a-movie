import type { Meta, StoryObj } from '@storybook/vue3';
import { mockCategotyItem } from '@/shared/lib/mocks';
import SliderMovies from './SliderMovies.vue';


const meta = {
    title: 'widgets/SliderMovies',
    component: SliderMovies,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof SliderMovies>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        films: [
            mockCategotyItem,
            mockCategotyItem,
            mockCategotyItem,
            mockCategotyItem,
            mockCategotyItem,
            mockCategotyItem,
            mockCategotyItem,
            mockCategotyItem,
            mockCategotyItem,
        ]
    },
};