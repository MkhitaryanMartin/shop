import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { comments } from '../../assets/data';
import CommentCard from '../comment-card';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton } from "@mui/material";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

export default function Slider() {
  const swiperRef = React.useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="comments-block">
      <div className="comments-block__title-block">
        <h2 className="heading-2">Because they love us</h2>
        <div className="comments-block__button-block">
          <IconButton sx={{ mr: "24px", border: "1px solid black", borderRadius: "50%" }} onClick={goPrev}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton sx={{ border: "1px solid black", borderRadius: "50%" }} onClick={goNext}>
            <ArrowForwardIcon />
          </IconButton>
        </div>
      </div>
      <div className="comments">
        <div className="yelow-background"></div>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={50}
          loop={true}
          navigation={{ 
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1600: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            1670: {
              slidesPerView: 5,
              spaceBetween: 200,
            }
          }}
          className="mySwiper"
        >
          {
            comments.map((comment, i) => {
              return <SwiperSlide key={comment.jobTitle + i}><CommentCard comment={comment} /></SwiperSlide>
            })
          }
        </Swiper>
      </div>
    </section>
  );
}
