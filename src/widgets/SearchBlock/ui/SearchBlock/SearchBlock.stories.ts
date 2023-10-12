import type { Meta, StoryObj } from '@storybook/vue3';
import { rest } from 'msw';
import { mockFilteredItemsResponse } from '@/shared/lib/mocks/mocks';
import SearchBlock from './SearchBlock.vue';

const meta = {
    title: 'widgets/SearchBlock',
    component: SearchBlock,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof SearchBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        
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