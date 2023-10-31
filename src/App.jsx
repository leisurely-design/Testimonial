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
            <SwiperSlide>
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
                    <p className="">
                      Menurut gw, Yovin tuh orangnya keren banget 😎. Yovin itu
                      orangnya sangat amat pekerja keras dan bertanggung jawab
                      sama semua kerjaannya, baik akademis atau yang non
                      akademis. Gw sangat salut sama stress managementnya, kok
                      bisa tetep professional dan fokus pas lagi ada masalah ini
                      dan itu?!! Definitely one of the strongest women I have
                      ever met. Abiss itu, kok bisa se extrovert ituu?!! Social
                      energynya ga abiss2 hahahaha. Bestt deh pokoknya 🤙🤙
                    </p>
                  </div>
                </div>
                <div className="details">
                  <div className="imgBx">
                    <img src={Vannesa} alt="tes" />
                  </div>
                  <h3>
                    someone
                    <br />
                    <span>Creative</span>
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
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
                    <p className="">
                      kerja sama yovin itu super duper seru dan menantang karena
                      dia produktif banget, orang yang super tanggung jawab sama
                      tugasnya. she puts so much efforts for everything she
                      does, even at her lowest point. jiwanya kerja keras banget
                      walaupun kadang kepalanya juga ikutan keras alias batu.
                      but deep down, gua tau dia peduli sama orang orang di
                      sekitarnya dan mentingin orang lain di atas kepentingan
                      dia juga. panjang umur deh ya orang baik, stay positive
                      and gawl😋
                    </p>
                  </div>
                </div>
                <div className="details">
                  <div className="imgBx">
                    <img src={Gitta} alt="tes" />
                  </div>
                  <h3>
                    someone
                    <br />
                    <span>Creative</span>
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
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
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eaque sed optio recusandae temporibus, eum, ab error ut
                      nihil quae iste quam repellat quis quisquam culpa animi
                      eos, voluptatibus ducimus assumenda.
                    </p>
                  </div>
                </div>
                <div className="details">
                  <div className="imgBx">
                    <img src={foto} alt="tes" />
                  </div>
                  <h3>
                    someone
                    <br />
                    <span>Creative</span>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="testimonialBox"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <img src={quote} alt="tes" style={{ width: "10%" }} />
                <div className="content">
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque sed optio recusandae temporibus, eum, ab error ut
                    nihil quae iste quam repellat quis quisquam culpa animi eos,
                    voluptatibus ducimus assumenda.
                  </p>
                  <div className="details">
                    <div className="imgBx">
                      <img src={foto} alt="tes" />
                    </div>
                    <h3>
                      someone
                      <br />
                      <span>Creative</span>
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonialBox">
                <img src={quote} alt="tes" style={{ width: "10%" }} />
                <div className="content">
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque sed optio recusandae temporibus, eum, ab error ut
                    nihil quae iste quam repellat quis quisquam culpa animi eos,
                    voluptatibus ducimus assumenda.
                  </p>
                  <div className="details">
                    <div className="imgBx">
                      <img src={foto} alt="tes" />
                    </div>
                    <h3>
                      someone
                      <br />
                      <span>Creative</span>
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Review;
