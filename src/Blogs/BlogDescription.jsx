import React from "react";
import "./blogs.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import img1 from "../images/img7.png";
import BlogComment from "./BlogComment";
import BlogCarousel from "./BlogCarousel";

const BlogDescription = () => {
  return (
    <div className="blog_description_wrapper">
      <div className="blog_description_container">
        <div>
          <div>
            <button className="blog_back_btn">
              <FaArrowLeftLong />
            </button>
          </div>
          <img src={img1} alt="" className="blog_desp_img" />
        </div>
        <div>
          <h1 className="blog_desp_heading">
            4 Cyber Security take away from China’s largest data breach
          </h1>
          <p>
            The applications of AR are vast and diverse. From entertainment and
            gaming, where users can see virtual characters in their
            surroundings, to education, where complex subjects can be visualized
            and explained in an immersive way,. Sed lobortis suscipit nibh,
            vulputate euismod sapien sollicitudin eget. Donec vehicula facilisis
            libero sit amet accumsan. Sed sed ante commodo, maximus mi
            consectetur, suscipit mauris. Mauris vulputate viverra risus
            facilisis consequat. Curabitur et lacinia leo. Pellentesque
            fermentum ex quis maximus congue. Donec vestibulum laoreet
            fermentum. Sed tincidunt augue et mauris aliquam, faucibus tincidunt
            magna aliquet. Vestibulum semper dapibus interdum. Nunc diam odio,
            hendrerit quis dignissim vitae, bibendum vel dolor. Phasellus nisl
            nunc, sollicitudin vulputate congue sed, pulvinar at nunc. Maecenas
            ligula turpis, ultricies sit amet fermentum et, sagittis sit amet
            nunc. Sed nec tincidunt mi. Pellentesque finibus dui vel dolor
            consectetur, ac luctus mi pulvinar. Donec odio nulla, molestie vel
            cursus in, malesuada ac est. Aenean ut justo vitae est tempus
            mollis. Fusce a odio nisi. Suspendisse ac lacinia velit.
          </p>
          <p>
            The applications of AR are vast and diverse. From entertainment and
            gaming, where users can see virtual characters in their
            surroundings, to education, where complex subjects can be visualized
            and explained in an immersive way,. Sed lobortis suscipit nibh,
            vulputate euismod sapien sollicitudin eget. Donec vehicula facilisis
            libero sit amet accumsan. Sed sed ante commodo, maximus mi
            consectetur, suscipit mauris. Mauris vulputate viverra risus
            facilisis consequat. Curabitur et lacinia leo. Pellentesque
            fermentum ex quis maximus congue.
          </p>
          <ul className="blog_bullets">
            <li>
              Rollout and expansion of 5G networks, enabling faster data
              transfer, lower latency, and improved connectivity for IoT
              devices.
            </li>
            <li>
              Enhanced capabilities for real-time communication, streaming, and
              remote operations.
            </li>
            <li>
              Growth in IoT devices and applications across various industries,
              from smart homes to industrial automation.
            </li>
            <li>
              Integration of IoT with AI, allowing devices to collect and
              analyze data for better decision-making and automation
            </li>
          </ul>
        </div>

        <div>
          <div>
            <h4>Embrace a layered approach.</h4>
            <ul>
              <li>
                Cybersecurity is a discipline that encompasses people,
                processes, and technology. While accidentally sharing your
                log-in credentials on a public technology forum, LinkedIn,
                Facebook, or Instagram is an open invitation for invasion;
                technical safeguards will save the day.
              </li>
              <li>
                Even if a threat actor has a user ID and password, they will be
                stopped in their tracks if the potential victim is using (MFA).
              </li>
              <li>
                Here’s a simple example: whenever I log into my personal Yahoo
                account through the portal, I receive a notification on my
                cellphone that requires me to verify I’m the one logging in.
              </li>
              <li>
                I push green for “yes” and red for “no.” Over the last five
                years, I’ve received several notifications when I was not
                logging into Yahoo and quickly smashed the red button. MFA would
                have thwarted this attack.
              </li>
            </ul>
          </div>
          <div>
            <h4>Cultivate a security-first culture.</h4>
            <ul>
              <li>
                Social media, personal blogs, and other online forums create
                cybersecurity challenges because it’s effortless for threat
                actors to use automated scraping tools to aggregate open source
                intelligence from these platforms.
              </li>
              <li>
                Open source means the information is publicly available, so it’s
                advisable to avoid oversharing. Criminal cartels take bits and
                pieces of your shares, comments, likes, pictures, and
                connections to plot data breaches, ransomware attacks, and
                political sabotage.
              </li>
              <li>
                Rogue nation-states can even disable water supplies and entire
                power grids.
              </li>
            </ul>
          </div>
          <div>
            <h4>Follow an established framework.</h4>
            <ul>
              <li>
                When your managed IT services provider (MSP) or IT Director talk
                about cybersecurity, many C-Level executives think, “Oh boy,
                looks like we’re adding another expense to our income
                statement.”
              </li>
              <li>
                While taking extra measures to strengthen cyber resilience
                carries a fee, if you align the endeavor with the cybersecurity
                framework for your business, the operating and marketing
                benefits will offset the investment.
              </li>
              <li>
                We experienced this first-hand at when we adopted SOC 2 Type II
                compliance. This rigorous set of information security controls
                is expensive to maintain ($20K – $80K per year), and each audit
                spans 12 months.
              </li>
              <li>
                However, fewer than 1% of MSPs (managed IT service providers)
                are SOC 2 Type II certified, so we stand out with prospects and
                clients who require extra assurance that their data is safe with
                us.
              </li>
              <li>
                Therefore, this exhaustive compliance standard and related audit
                reports are worth their weight in gold. We also use the
                framework to justify any new cybersecurity tools we buy.
              </li>
            </ul>
          </div>
          <div>
            <h4>Focus on incremental improvements.</h4>
            <ul>
              <li>
                Have you implemented MFA? If not, you’re not alone. Estimates
                that more than half of small and medium-sized businesses do not
                use MFA.
              </li>
              <li>
                The best thing you can do right now is roll out MFA and require
                everyone to participate.
              </li>
              <li>
                Since the breach that inspired this blog involves China, I’m not
                sure we’ll ever get the whole story, but we’ll certainly update
                this article with any additional details that surface.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <BlogComment />
        </div>
        <div>
          <BlogCarousel />
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;
