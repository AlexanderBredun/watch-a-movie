import type { Meta, StoryObj } from '@storybook/vue3';
import InfiniteCaruselle from './InfiniteCaruselle.vue';


const meta = {
    title: 'shared/InfiniteCaruselle',
    component: InfiniteCaruselle,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof InfiniteCaruselle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        default(_) {
            return (
                <>
                    <div>test 1</div><div>test 2</div><div>test 3</div><div>test 4</div><div>test 5</div><div>test 6</div><div>test 7</div>
                </>
            );
        },
    },
};