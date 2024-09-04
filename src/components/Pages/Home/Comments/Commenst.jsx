import { useState } from "react";
import styles from "./Commenst.module.scss";
import Comment from "./Comment/Comment";
import commentsData from "../../../../data/comments.json";
import ButtonChangeComment from "./ButtonChangeComment/ButtonChangeComment";
import PaginationDots from "./PaginationDots/PaginationDots";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const Comments = () => {
  const [swiper,setSwiper] = useState(null);

  const goToNext = () => {
    console.log("next");
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goToPrev = () => {
    console.log("prev");
    if (swiper) {
      swiper.slidePrev();
    }
    
  };

  return (
    <div className={styles.comments_box}>
      <div className={styles.Prev_button_contener}>
        <ButtonChangeComment index={0} changeIndex={goToPrev} />
      </div>
      <div className={styles.comments_animated_box}>
        <div className={styles.comments_contener}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => setSwiper(swiper)}
            onSlideChange={() => console.log("slide change")}
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
        </div>
      </div>
      
      <div className={styles.Next_button_contener}>
        <ButtonChangeComment index={1} changeIndex={goToNext} />
      </div>
    </div>
  );
};
export default Comments;
