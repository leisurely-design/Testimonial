// import components swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import image
import quote from "../src/assets/right-quote.png";
import foto from "../src/assets/foto1.jpg";
import Gitta from "../src/assets/gitta.jpg";
import Vannesa from "../src/assets/vannesa.jpg";

// import styles
import "./App.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";

const contentList = [
  {
    image: Vannesa,
    name: "Someone",
    job: "Creative",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    image: Gitta,
    name: "Someone",
    job: "Developer",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    image: foto,
    name: "Someone",
    job: "UI/UX",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
];

const Review = () => {
  return (
    <section>
      <h1>Here's what my former co-worker said about me</h1>
      <article>
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
            {contentList.map((item, index) => (
              <SwiperSlide key={index} className="cardBox">
                <div className="description">
                  <img src={quote} alt="..." style={{ width: "10%" }} />
                  <p className="content">{item.desc}</p>
                </div>
                <div className="details">
                  <img className="img" src={item.image} alt="..." />
                  <div className="info">
                    <h3>{item.name}</h3>
                    <h4>{item.job}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </article>
    </section>
  );
};

export default Review;
