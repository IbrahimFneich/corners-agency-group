import React from 'react'
import SwiperCore,{ Navigation,Autoplay, Pagination, Scrollbar, A11y} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "../components/WordAnimation.css"


SwiperCore.use([Navigation,Autoplay]);

const Clients = () => {


    return (

        <div>
            <br/><br/><br/>
            <center>
                <Swiper 
                    id="swiper-hide-arrows"
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={5}
                    navigation={true}
                    autoplay={{delay:2000}}
                    autoHeight={true}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    loop={true}

                    // pagination={{ clickable: true }}
                    //scrollbar={{ draggable: true }}
                    >
                    <SwiperSlide><img src="https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/brand-1-128x111.png"></img></SwiperSlide>
                    <SwiperSlide><img src="https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/brand-5-142x102.png"></img></SwiperSlide>
                    <SwiperSlide><img src="https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/brand-4-129x86.png"></img></SwiperSlide>
                    <SwiperSlide><img src="https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/brand-1-128x111.png"></img></SwiperSlide>
                    <SwiperSlide><img src="https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/brand-2-129x102.png"></img></SwiperSlide>
                    <SwiperSlide><img src="https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/brand-6-134x122.png"></img></SwiperSlide>
                </Swiper>

            </center>
            <br/><br/><br/>
        </div>
    )
}

export default Clients
