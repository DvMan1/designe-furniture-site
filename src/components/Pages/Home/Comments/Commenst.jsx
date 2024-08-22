import { useState } from "react";
import styles from "./Commenst.module.scss";
import Comment from "./Comment/Comment";
import commentsData from "../../../../data/comments.json";
import ButtonChangeComment from "./ButtonChangeComment/ButtonChangeComment";
import PaginationDots from "./PaginationDots/PaginationDots";

import { Swiper, SwiperSlide, useSwiper} from "swiper/react";
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Comments = () => {

  
const swiper = useSwiper();

  const goToNext = () => {
    swiper.slideNext();
  };

  const goToPrev = () => {
    console.log("prev");

    swiper.slidePrev();
  };


  return (
    <div className={styles.comments_box}>
      <div className={styles.Prev_button_contener}>
        <ButtonChangeComment
        index={0}
        changeIndex={goToPrev}
        />
      </div>

      <Swiper
           modules={[Navigation, Pagination, Scrollbar, A11y]}
           spaceBetween={50}
           slidesPerView={2}
           navigation
           pagination={{ clickable: true }}
           scrollbar={{ draggable: true }}
          
           onSwiper={(swiper) => console.log(swiper)}
           onSlideChange={() => console.log('slide change')}
      >
        {commentsData.comments.map((comment) => (
          <SwiperSlide key={comment.id}>
            <Comment
              key={comment.id}
              name={comment.username}
              text={comment.comment}
              role={comment.role}
              avatar={comment.avatar}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.Next_button_contener}>
        <ButtonChangeComment
       index={1}
       changeIndex={goToNext}
        />
      </div>
    </div>
  );
};
export default Comments;
