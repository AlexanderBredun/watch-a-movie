import type { Meta, StoryObj } from '@storybook/vue3';
import { rest } from 'msw';
import { mockReviews } from '@/shared/lib/mocks/mocks';
import ItemReviews from './ItemReviews.vue';


const meta = {
    title: 'widgets/SingleItem/ItemReviews',
    component: ItemReviews,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ItemReviews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
       
    },
    parameters: {
        msw: {
            handlers: [
              rest.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/1/reviews', async (req, res, ctx) => {
                await new Promise((resolve, reject) => setTimeout(()=> resolve(''), 700));
                return res(
                  ctx.json(mockReviews)
                );
              }),
            ]
          },
    }
};