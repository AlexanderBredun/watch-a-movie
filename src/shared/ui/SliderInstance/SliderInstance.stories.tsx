import type { Meta, StoryObj } from '@storybook/vue3';
import { SwiperSlide } from 'swiper/vue';
import SliderInstance from './SliderInstance.vue';


const meta = {
    title: 'shared/SliderInstance',
    component: SliderInstance,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof SliderInstance>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        default(){
            return (<>
                <SwiperSlide>
                    slide1
                </SwiperSlide>
                <SwiperSlide>
                    slide2
                </SwiperSlide>
                <SwiperSlide>
                    slide3
                </SwiperSlide>
                <SwiperSlide>
                    slide4
                </SwiperSlide>
                <SwiperSlide>
                    slide5
                </SwiperSlide>
                <SwiperSlide>
                    slide6
                </SwiperSlide>
                <SwiperSlide>
                    slide7
                </SwiperSlide>
            </>);
        }
    },
};