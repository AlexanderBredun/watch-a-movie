import type { Meta, StoryObj } from '@storybook/vue3';
import { rest } from 'msw';
import { mockFilteredItemsResponse } from '@/shared/lib/mocks/mocks';
import CategoryPreview from './CategoryPreview.vue';


const meta = {
    title: 'widgets/CategoryPreview',
    component: CategoryPreview,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof CategoryPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
       heading: 'Category Preview',
       typeItems: 'FILM'
    },
    parameters: {
        msw: {
            handlers: [
              rest.get('https://kinopoiskapiunofficial.tech/api/v2.2/films', async (req, res, ctx) => {
                await new Promise((resolve, reject) => setTimeout(()=> resolve(''), 700));
                return res(
                  ctx.json(mockFilteredItemsResponse)
                );
              }),
            ]
          },
    }
};