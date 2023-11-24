import { useDarkMode } from "../../hooks/DarkmodeProvider";
import "./testimonials.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BackgroundLetterAvatars from "../components/Avatars";
const Testimonials = () => {
  const { darkmode } = useDarkMode();
  return (
    <section className={`test ${darkmode ? "dark" : ""} container-fluid flex-column flex-md-row`}>
      <div className="leftsidecontent col-12 col-md-6 ">
        <div className={`heading ${darkmode ? "dark" : ""}`}>
          <span className="aboutspan">from our</span>
          <h2 className="span">Community</h2>
        </div>
        <p className="text-justify">
          Here&apos;s what our community members and pet parents who adopted their furbabies through us had to say about our services.
        </p>
        <button style={{background:`${darkmode? "chartreuse":"purple"}`, color: `${darkmode? "black":"white"}`}}>Register Yourself</button>
      </div>
      <div className="rightsidecontent col-12 col-md-6 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="test1">
                <div className="message">&quot; OurKennel was the reason I met Lucy, my dearest little cat. The UI was really helpful and they helped me easily find and adopt her. Now I can&apos;t stay a second without her. Thank you OurKennel! &quot;</div>
                <div className="reviewer  d-flex justify-content-start align-items-center">
                    <BackgroundLetterAvatars name="Sayak Raha"/>
                    <div className="details m-4">
                        <span className="name">Sayak Raha</span><br />
                        <span className="time text-secondary">1 June 2023, 12:00 AM</span>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide><div className="test1">
                <div className="message">&quot; OurKennel is a game-changer for pet parents! Not only did I find my lovely cat, Whiskers, through their adoption services, but the social media community they have built is fantastic. It&apos;s a haven for pet lovers, and I appreciate the support and camaraderie among fellow pet parents. Thank you, OurKennel, for enriching my pet parenting journey! &quot;</div>
                <div className="reviewer  d-flex justify-content-start align-items-center">
                    <BackgroundLetterAvatars name="Julia Roberts"/>
                    <div className="details m-4">
                        <span className="name">Julia Roberts</span><br />
                        <span className="time text-secondary">12 August 2023, 9:40 AM</span>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="test1">
                <div className="message">&quot; Kudos to OurKennel for creating a platform that goes beyond adoption services. I found my adorable dog, Rocky, through their intuitive UI. The added bonus is the supportive community on their social media, where I&apos;ve connected with other pet parents. OurKennel truly understands the needs of both pets and their parents. &quot;</div>
                <div className="reviewer  d-flex justify-content-start align-items-center">
                    <BackgroundLetterAvatars name="George Martin"/>
                    <div className="details m-4">
                        <span className="name">George Martin</span><br />
                        <span className="time text-secondary">22 January 2020, 6:57 PM</span>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="test1">
                <div className="message">&quot; OurKennel holds a special place in my heart. The UI made it easy for me to adopt my sweet bunny, Cinnamon. The inclusive social media community they have cultivated is a treasure trove of advice and heartwarming stories. Thank you, OurKennel, for not just facilitating adoptions but for fostering a sense of community among pet parents. &quot;</div>
                <div className="reviewer  d-flex justify-content-start align-items-center">
                    <BackgroundLetterAvatars name="Mac Reynolds"/>
                    <div className="details m-4">
                        <span className="name">Mac Reynolds</span><br />
                        <span className="time text-secondary">3 March 2023, 2:44 PM</span>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="test1">
                <div className="message">&quot; Thanks to OurKennel, I found my furry soulmate, Max. The seamless adoption process on their UI made the whole experience delightful. Max brings so much joy into my life, and I am forever grateful to OurKennel for connecting us. &quot;</div>
                <div className="reviewer  d-flex justify-content-start align-items-center">
                    <BackgroundLetterAvatars name="Dojo Goreng"/>
                    <div className="details m-4">
                        <span className="name">Dojo Goreng</span><br />
                        <span className="time text-secondary">12 March 2022, 12:00 AM</span>
                    </div>
                </div>
            </div></SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
