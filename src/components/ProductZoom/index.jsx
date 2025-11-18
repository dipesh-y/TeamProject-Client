import React, { useRef, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);

  }

  return (
    <>
      <div className='flex gap-3'>
        <div className='slider w-[15%]'>
          <Swiper
            ref={zoomSliderSml}
            direction={'vertical'}
            slidesPerView={5}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation]}
            className="zoomProductSliderThumbs h-[500px] overflow-hidden"
          >

            <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group $ {slideIndex===0 ? 'opacity-1':'opacity-30'}`} onClick={() => goto(0)}>
                <img src='https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group $ {slideIndex===1 ? 'opacity-1':'opacity-30'}`} onClick={() => goto(1)}>
                <img src='https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group $ {slideIndex===2 ? 'opacity-1':'opacity-30'}`} onClick={() => goto(2)}>
                <img src='https://api.spicezgold.com/download/file_1734529363005_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-2-202310141511.jpg' />
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
        <div className='zoomContainer w-[85%] h-[500px] overflow-hidden rounded-md'>
          <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
          >
            <SwiperSlide>
              <InnerImageZoom
                zoomType='hover'
                zoomScale={1}
                src='https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp'
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType='hover'
                zoomScale={1}
                src='https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg'
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType='hover'
                zoomScale={1}
                src='https://api.spicezgold.com/download/file_1734529363005_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-2-202310141511.jpg'
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
