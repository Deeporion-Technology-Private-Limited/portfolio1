import React from "react";
import { AiFillPieChart } from "react-icons/ai";
import { BiChip } from "react-icons/bi";
import {
  HiPresentationChartBar,
  HiOutlineDocumentReport,
} from "react-icons/hi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import "./home.css";

const WhyPenetration = () => {
  return (
    <div>
      <div className="card_cover">
        <div class="scene">
          <div class="card">
            <div class="card__face card__face--front">
              <div className="why_penetration_content">
                <AiFillPieChart className="penetration_icon" />
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div class="card__face card__face--back">
              <div className="why_penetration_content_back">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="why_penetration_content_h1 card__face--front">
              Why Penetration testing ?
            </h1>
          </div>
          <div class="card">
            <div class="card__face card__face--front">
              <div className="why_penetration_content">
                <HiMiniComputerDesktop className="penetration_icon" />
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div class="card__face card__face--back">
              <div className="why_penetration_content_back">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card_cover2">
        <div class="scene2">
          <div class="card">
            <div class="card__face card__face--front">
              <div className="why_penetration_content">
                <BiChip className="penetration_icon" />
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div class="card__face card__face--back">
              <div className="why_penetration_content_back">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__face card__face--front">
              <div className="why_penetration_content">
                <HiPresentationChartBar className="penetration_icon" />
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div class="card__face card__face--back">
              <div className="why_penetration_content_back">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPenetration;
