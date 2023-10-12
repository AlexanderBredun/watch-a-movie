import type { Meta, StoryObj } from '@storybook/vue3';
import AsideSlide from './AsideSlide.vue';


const meta = {
    title: 'entities/AsideSlide',
    component: AsideSlide,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AsideSlide>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
       'aside-content': 'Aside content',
       'btn-content': (<p style={{ 'color': 'white' }}>btn</p>),
    },
};