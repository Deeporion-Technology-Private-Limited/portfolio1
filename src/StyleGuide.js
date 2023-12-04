import React from "react";
import "./styleGuide.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TbBulbFilled } from "react-icons/tb";
import { BsCheckCircle, BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import img1 from "./images/Rectangle41.png";
import { GoArrowDownRight } from "react-icons/go";
import { useTranslation } from "react-i18next";
import { AiFillPieChart } from "react-icons/ai";

const StyleGuide = () => {
  const { t } = useTranslation();
  return (
    <div className="style_guide">
      <div className="style_guide_container">
        <h3>{t("style-guide")}</h3>

        {/* color palette */}
        <h4>{t("colors")}</h4>
        <div className="color_palette">
          <div>
            <div className="colors purple"></div>
            <p>#893E97</p>
          </div>
          <div>
            <div className="colors red"></div>
            <p>#C9442D</p>
          </div>
          <div>
            <div className="colors gradient"></div>
            <p>#893E97</p>
            <p>#C9442D</p>
          </div>
          <div>
            <div className="colors white"></div>
            <p>#FFFFFF</p>
          </div>
        </div>
        {/* Text Style */}
        <h4>{t("typography")}</h4>
        <div className="text_styles">
          <div className="text_guide">
            <h1>{t("h1")}</h1>
            <p>{t("heading")}</p>
            <p>
              {t("font_style")}
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                {t("inter")}
              </span>
            </p>
          </div>
          <div className="text_guide">
            <h2>{t("h2")}</h2>
            <p>{t("sub_heading")}</p>
          </div>
          <div className="text_guide">
            <p>{t("aa")}</p>
            <p>{t("body_text")}</p>
          </div>
        </div>
        {/* button */}
        <h4>{t("button")}</h4>
        <div className="btn_wrapper">
          <div className="btn_state">
            <div className="btn_border">
              <button className="get_btn">{t("get_started")}</button>
            </div>
            <div className="btn_border">
              <button className="purple_btn">{t("submit")}</button>
            </div>
          </div>
        </div>
        {/* text Input */}
        <h4>{t("text_input")}</h4>
        <div className="input_wrapper">
          <div className="input_fileds">
            <input type="text" placeholder="Rupali" />
          </div>
        </div>
        {/* dropdown  */}
        <h4>{t("dropdown")}</h4>
        <div>
          <div className="dropdown_wrapper">
            <div className="dropdown_state">
              <p>{t("default")}</p>
              <p>t('opened')</p>
            </div>
            <div className="que_container">
              <div className="about_que">
                {t("perform")}
                <IoIosArrowDown className="about_ques_down" />
              </div>

              <div className="about_que">
                {t("perform")}

                <IoIosArrowUp className="about_ques_down" />
              </div>
              <p className="dropdown_content">{t("lorem_consectetur")}</p>
            </div>
          </div>
        </div>
        <h4>{t("cards")}</h4>
        <div>
          {/* card1 */}
          <div className="card_container">
            <div className="card1_body">
              <div>
                <p className="card1_heading">20+</p>
              </div>
              <div className="card1_desp">20+ {t("years_of_experience")}</div>
            </div>
          </div>
          {/* card2 */}
          <div className="card_container">
            <div className="card2">
              <div className="card2_container">
                <div className="card2_box">
                  <div className="card2_icon">
                    <BsCheckCircle />
                  </div>
                  <h4>{t("multi_platform")}</h4>
                </div>
                <div className="card2_desp">
                  <p>{t("lorem_consectetur")}</p>
                </div>
              </div>
            </div>
          </div>
          {/* card3 */}
          <div className="card_container">
            <div className="card3_body">
              <div className="card3_icon">
                <FaPhone />
              </div>
              <div>
                <div className="card3_heading">
                  <h4>{t("phone")}</h4>
                </div>
                <div className="card3_content">+91 1234567890</div>
              </div>
            </div>
          </div>
          {/* card5 */}
          <div className="card_container">
            <div className=" card5_container">
              <img src={img1} alt="" />
              <div>
                <div className="card5_heading">{t("cyber_security")}</div>
              </div>
              <div className="card5_btn_box">
                <div className="card5_btn">
                  <GoArrowDownRight />
                </div>
              </div>
            </div>
          </div>
          {/* card6 */}
          <div className="card_container">
            <div className="card6_body">
              <div className="card6_icon">
                <TbBulbFilled />
              </div>
              <div>
                <p className="card6_heading">{t("ideas_and_concepts")}</p>
              </div>
              <div className="card6_description">{t("desp1")}</div>
              <div>
                <button className="card6_read_more_btn">
                  {t("read_more")}
                  <BsFillArrowRightCircleFill />
                </button>
              </div>
            </div>
          </div>
          {/* card7 */}
          <div className="card_container">
            <div className="card7_card">
              <div className="card7__face card__face--front">
                <div className="card7_content">
                  <AiFillPieChart className="penetration_icon" />
                  <p>{t("lorem_amet")}</p>
                </div>
              </div>
              <div className="card__face card7__face--back">
                <div className="card7_content_back">
                  <p>{t("lorem_ipsum")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
