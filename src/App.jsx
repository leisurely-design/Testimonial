// Import Swiper React components
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import quote from "../src/assets/right-quote.png";
import foto from "../src/assets/foto1.jpg";
import Gitta from "../src/assets/gitta.jpg";
import Vannesa from "../src/assets/vannesa.jpg";

import "./App.css";

const contentList = [
  {image: Vannesa, name:"Someone", job:"Creative", desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
  {image: Gitta, name:"Someone", job:"Developer", desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."},
  {image: Vannesa, name:"Someone", job:"Product Manager", desc:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."},
  {image: Gitta, name:"Someone", job:"Developer", desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},
]

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import "swiper/css";

const Review = () => {
  return (
    <div>
      <h1 className="font-bold	text-2xl">
        Here's what my former co-worker said about me
      </h1>
      <section>
        <div className="swiper-wrapper">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {contentList.map((item,index)=>(
                <SwiperSlide key={index}>
                  <div
                    className="testimonialBox "
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <img src={quote} alt="tes" style={{ width: "10%" }} />
                      <div className="content">
                        <p className="">{item.desc}</p>
                      </div>
                    </div>
                    <div className="details">
                      <div className="imgBx">
                        <img src={item.image} alt="tes" />
                      </div>
                      <h3>
                        {item.name}
                        <br />
                        <span>{item.job}</span>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Review;
