import type { Meta, StoryObj } from '@storybook/vue3';
import { rest } from 'msw';
import CategoryFilter from './CategoryFilter.vue';


const meta = {
    title: 'widgets/CategoryFilter',
    component: CategoryFilter,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof CategoryFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        
    },
    parameters: {
        msw: {
            handlers: [
              rest.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/filters', async (req, res, ctx) => {
                await new Promise((resolve, reject) => setTimeout(()=> resolve(''), 700));
                return res(
                  ctx.json({
                    'genres': [
                      {
                        'id': 1,
                        'genre': 'боевик'
                      }
                    ],
                    'countries': [
                      {
                        'id': 1,
                        'country': 'США'
                      }
                    ]
                  })
                );
              }),
            ]
          },
    }
};