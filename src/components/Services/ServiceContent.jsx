import React, { useEffect, useState } from "react";
import img6 from "../../assets/images/Frame 216.png";
import img7 from "../../assets/images/Frame 217.png";
import img8 from "../../assets/images/Frame 223.png";
import img9 from "../../assets/images/Frame 224.png";
import img10 from "../../assets/images/Frame 230.png";
import img1 from "../../assets/images/Group 10 (1).png";
import img2 from "../../assets/images/Group 10 (2).png";
import img3 from "../../assets/images/Group 10 (3).png";
import img4 from "../../assets/images/Group 10 (4).png";
import img5 from "../../assets/images/Group 10.png";
import "./service.css";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";

const ServiceContent = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleScroll = (event) => {
    const scrollDelta = event.deltaY;
    const scrollDirection = scrollDelta > 0 ? "down" : "up";

    if (scrollDirection === "up" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (
      scrollDirection === "down" &&
      currentIndex < carouselItems.length - 1
    ) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentIndex]);

  const carouselItems = [
    // Add your carousel items here
    {
      id: 1,
      icon: img10,
      title: t("management"),
      description: t("it_management"),
      img: img5,
      btn: "Read more",
    },
    {
      id: 2,
      icon: img9,
      title: t("monitoring"),
      description: t("network_monitoring"),
      img: img4,
      btn: t("read_more"),
    },
    {
      id: 3,
      icon: img8,
      title: t("computing"),
      description: t("cloud_computing"),
      img: img3,
      btn: t("read_more"),
    },
    {
      id: 4,
      icon: img7,
      title: t("ai"),
      description: t("ai_consulting"),
      img: img2,
      btn: t("read_more"),
    },
    {
      id: 5,
      icon: img6,
      title: t("financial"),
      description: t("financial_damage"),
      img: img1,
      btn: "Read more",
    },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => {
      console.log(`Current: ${current}, Next: ${next}`);
    },
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={5} dotWidth={30} />;
    },
  };

  const horizontalSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const [buttontext, setButtontext] = useState("Read More");

  const descriptionLength = window.innerWidth > 500 ? 600 / 1 : 300 / 3;
  return (
    <div>
      <h1 className="service_h1">{t("service_we_offer")}</h1>
      <Slider {...(isMobile ? horizontalSettings : settings)}>
        {carouselItems.map((item) => (
          <div key={item.id} className="service_info_box">
            <div className={`service_wrapper`}>
              <div className={isMobile ? "service_horizontal_wrapper" : ""}>
                <img src={item.icon} alt="" />
                <h3>{item.title}</h3>
                <p>
                  {item.description.length > descriptionLength ? (
                    <>
                      {buttontext === "Read More"
                        ? `${item.description.slice(0, descriptionLength)}...`
                        : item.description}
                      <button
                        onClick={() =>
                          buttontext === "Read More"
                            ? setButtontext("Read Less")
                            : setButtontext("Read More")
                        }
                      >
                        {buttontext}
                      </button>
                    </>
                  ) : (
                    item.description
                  )}
                </p>
              </div>
              <div>
                <img className="service_image" src={item.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceContent;
