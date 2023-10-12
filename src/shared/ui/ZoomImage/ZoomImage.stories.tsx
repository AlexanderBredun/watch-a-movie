import type { Meta, StoryObj } from '@storybook/vue3';
import ZoomImage from './ZoomImage.vue';


const meta = {
    title: 'shared/ZoomImage',
    component: ZoomImage,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ZoomImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        default(_) {
            return (
                <>
                    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
                </>
            );
        },
    },
};