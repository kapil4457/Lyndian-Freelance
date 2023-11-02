import { NavLink } from "react-router-dom";
import "./PostPage.css";
import React, { useEffect } from "react";
import postbanner from "../Images/post-banner.jpg";
import post2 from "../Images/post2.jpg";
const PostPage = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);
  return (
    <div id="supply-chain-post-container">
      <div id="supply-chain-post-image-container">
        <img id="supply-chain-post-image" src={postbanner} alt="" />
        <h2 id="supply-chain-post-heading">Supply Chain</h2>

        <div id="supply-chain-post-crumbs">
          <NavLink to={"/"}>Home</NavLink>
          <span className="supply-chain-post-gap">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
          <span className="supply-chain-post-current">Supply Chain</span>
        </div>
      </div>

      <div id="supply-chain-post-content">
        <img src={post2} alt="" />
        <div className="supply-chain-post-data">
          <h1>
            Of Predictive Analytics and Product Life Cycle Management: The Case
            for Spare Parts Planning
          </h1>
          <span>
            <p>
              A touchscreen LCD panel from Dell, a keypad from IBM and a
              replacement airbag from Honda were some of the 'spare' parts for
              which I was forced to wait between 3 to 6 weeks in the recent
              past. None were readily available at the OE 'authorized' dealer
              counters/service centers in a mega city where I live. Moreover
              they had no incentive to advise alternate sources galore who I
              cannot possibly reach! Incidentally these are parts that have a
              high statistical failure rates.
            </p>
            <p>
              Dell forced me to buy the entire assembly with no option to go for
              a non-touch version. The service adviser at the other end had no
              clue about the part portability and interchangeability. He wasn't
              literate enough, so I couldn't argue. May be it was the consultant
              who didn't update the FFF subs rules for ATP check. So he found
              the exact part somewhere in Beijing. The part alone cost 350$,
              roughly a third of the original price of the notebook! (the newer
              version with much superior specs on same platform retails for 700$
              on Amazon now (but I had an emotional reason to restore my
              notebook).
            </p>
            <p>
              Time it took from first point of contact till final restore - 23
              days (they forgot to consider the always moving technician's
              availability to begin with and that alone was 12 days)
            </p>
            <p>
              The fast moving IBM Think pad model did no better. The integrated
              keypad was flown in from Kuala Lumpur and eventually it didn't
              work because of faulty diagnosis by the IBM authorized technician.
              So much for under warranty support. Then they expect me to leave
              the laptop with them for 2 weeks for detailed investigation. So I
              continue to use my external 10$ keypad that I am now fully
              comfortable with.
            </p>
            <p>But that is business as usual! and I am not surprised.</p>
            <p>
              But Automotive spares is a big Business. No other Industry enjoys
              as much gross profitability from among the SIC classification of
              Average profitability across Industries. At least that is a reason
              enough to do this job better. Some common and frequent replacement
              parts have OE mark ups as high as 1000% (Air filters, Timer belts,
              oil filters, brake pads, bearings..) But OEMs seem to do precious
              little to plan demand ahead despite a wealth of data available in
              existing systems. Independent Automotive Chains on the other hand
              are the last guys that the customers know about. Esp. the ones
              with limited knowledge about how stuff works.
            </p>
            <p>
              A McKinsey Quarterly research estimates global Auto spares
              business at 760bn$ in 2015, expected to reach 1200bn$ by 2030.
              Largely fueled by demand from Asia with US and EU maintaining a
              steady growth of 1.5% pa
            </p>
            <img
              className="supply-chain-post-img"
              src="https://media.licdn.com/dms/image/C5112AQHx0ms9UP1I7Q/article-inline_image-shrink_1500_2232/0/1542012018318?e=1701907200&v=beta&t=eNhiXVrJFo6bEpb-QGKhxSVKFBQD8Q1CUK8bjnhEwqY"
              alt=""
            />
            <p>
              Typical Auto Spares Supply Network: <br /> Source: McKinsey
              Quarterly <br />
              McKinsey Analysts further emphasize.
            </p>

            <p
              style={{
                borderLeft: "0.4rem solid #56687a",
                paddingLeft: "1.6rem",
                color: "#56687a",
                margin: "1rem 0",
              }}
            >
              In the consolidated markets of Europe and North America, growth
              rates of the vehicle population over the last 10 years were below
              2% p.a. At the same time, the average car age increased from 10.5
              years to 11.5 in the US and from 8.4 years to 9.7 in Europe. These
              trends highlight the increasing need to deal with older vehicle
              segments. Overall, we expect automotive aftermarket revenues of
              approximately EUR 337 bn in North America and approximately EUR
              295 bn in Europe in 2030 – with annual growth rates in both
              markets around 1.5 % until then.
            </p>
            <p>
              The siloed nature of service and spares business, usually
              completely disconnected from the 'main' business, is where the
              problem lies. They are both{" "}
              <b>systemically and organizationally disjoint.</b>
            </p>
            <p>
              For a start Planning for estimating demand continues to be the
              same old fashioned aggregate time series methods that are totally
              unsuited for the underlying nature of demand. I marvel why they
              can't use simple probability models like Poisson distribution to
              estimate probability of a demand occurring in the time t. PLM data
              like{" "}
              <b>
                MTTF - Mean Time to Failure, Usable life, Predicted life,
                Substitute-ability rules, Effective from-to dates
              </b>{" "}
              are not used by planners in the typical parts planning systems.
              Not explicitly. Because the planning application weren't designed
              to integrate with PLM software. Even without the IoT prospects, a
              phenomenal amount of well meaning data is available for
              'Predictive Analysis' of demand. But 99 in 100 customers out there
              complain about Availability and Lead times issues for even the
              most commonly needed spares. Price is entirely beside the point.
              It is a deterrent to defer buying decisions for a while. or may be
              the elasticity can be factored based on how critical the part is,
              before he customer balks and moves to an IA counter or perhaps a
              spurious parts alley in some Gandhi market (most fake markets in
              India are incidentally named after some Gandhi . wonder why). If a
              part is available at the right place at the right time,
              profitability can go up by 25% or more.
            </p>
            <p>
              On the fulfillment side, lack of integration with PLM means{" "}
              <b>
                all rules of substitution are ill-advised or incorrectly
                maintained
              </b>{" "}
              or not updated. If maintained the 'effective from/to' dates are
              messed up. There is plenty of compatible spare parts in inventory.
              Across platforms. Across models. But they go buy again to fulfill
              the requirements.
            </p>
            <p>
              Then there are Geo specific external inputs that aren't factored
              in the planning process. Hot summers means kaput air conditioning
              system. Inundation means big demand for radiators, batteries and
              catalytic converters.{" "}
              <b>
                Known weather conditions are a clear determinant of demand for
                certain types of spares.
              </b>{" "}
              Often by a factor of 20 or more.
            </p>
            <p>
              On one instance (that I cannot cite), I was told that there is
              <b>
                enough inventory of a class of spares to last for next 10 years
                for models discontinued 5 years ago.
              </b>{" "}
              Collectively valued at 15 million dollars (procurement price). The
              platform continues to exist but no one made any effort to figure
              out which of these 'old' parts can be used! Their supply plans
              continue to generate proposals for 'new' parts. Neither the PLM,
              nor the production planning BOMs are updated. System inventory and
              physical inventory had irreconcilable differences. Stores issued
              spares that were 'good to go'.
            </p>
            <p>
              Even <b>legal requirements</b> of Parts availability is not
              factored. In most countries this is typically 6 to 8 years of
              parts availability assurance but most do not give a damn.
              Definitely not in markets where laws exist only on paper. I am
              told not even in the US markets where customers are almost always
              forced to buy new equipment. esp. Cars, phones and consumer
              durable.
            </p>
            <h3>Conclusion</h3>
            <p>
              Warranty or out of warranty, OEM or IAM, most Spare Parts Planning
              and fulfillment solutions leave much to be desired. There is a
              wealth of internal and external information that is available to
              generate more realistic demand and fulfillment plans for
              significant top and bottom-lines
            </p>
            <p>
              For the business savvy, here is a &nbsp;
              <a
                href="https://www.mckinsey.com/~/media/McKinsey/Industries/Automotive%20and%20Assembly/Our%20Insights/The%20changing%20aftermarket%20game%20and%20how%20automotive%20suppliers%20can%20benefit%20from%20arising%20opportunities/The-changing-aftermarket-game.ashx"
                style={{ textDecoration: "none", color: "#0a66c2" }}
              >
                further reading on 6 disruptive trends in Automotive Spares
                Business
              </a>
            </p>
            <p>The author is an independent Business Planning Principal.</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
