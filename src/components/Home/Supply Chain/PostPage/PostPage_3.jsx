import { NavLink } from "react-router-dom";
import "./PostPage.css";
import React, { useEffect } from "react";
import postbanner from "../Images/post-banner.jpg";
import post3 from "../Images/post3.jpg";
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
        <img src={post3} alt="" />
        <div className="supply-chain-post-data">
          <h1>Predicting Auto Sales: Science or Scientology!</h1>
          <span>
            <p>
              Motorcycle Customers may become first time car buyers in
              developing markets but you do not study combined demand for
              Motorcycles and Passenger cars. Or should you? Sales data from
              various markets show that Motorcycle Sales and Passenger Car Sales
              grow (or lose) in tandem and that there is a very high correlation
              between the two!
            </p>
            <p>
              Estimating medium term demand (for keeping availability and
              delivery promises) for passenger cars is tricky and perhaps
              futile. There could be hundreds of exogenous factors that can be
              force plot to establish a degree of ‘linear’ correlation but in
              reality, there were other causal factors at work. A first-time car
              buyer is much unalike a second time car buyer who may want to own
              his premium SUV or MUV. But unlike firms that sell potato chips
              and ice creams, the good thing about automobile industry is about
              availability of quality granular historical data on sales from a
              variety of sources. Regional Transport Office, Manufacturers own
              data. SIAM, Ministry of Industry and Dept of Statistics, Market
              Research firms like AC Nielsen and other independent insights
              providers like www.statista.com. Yet predicting sales of
              individual models on a monthly basis seem very hard. They are
              wrong by a huge margin.
            </p>
            <p
              style={{
                borderLeft: "0.4rem solid #56687a",
                paddingLeft: "1.6rem",
                color: "#56687a",
                margin: "1rem 0",
              }}
            >
              There is very limited shallow academic literature in this area.
              Some 'research' published out there is about testing existing
              modified time series and 'simplistic' regression models with no
              rigor .
            </p>
            <p>
              Here the entire risk of bad forecast is borne usually by dealers
              who are forced to sell old model years inventory at almost
              throwaway prices. Not the OEM’s problem. (Though the only reason
              dealers have to forecast is for maintaining reordering levels and
              buffering for lead time (un)certainties of both buy and sell side
            </p>
            <p
              style={{
                borderLeft: "0.4rem solid #56687a",
                paddingLeft: "1.6rem",
                color: "#56687a",
                margin: "1rem 0",
              }}
            >
              While at a ‘segment’ level aggregate demand itself may be smooth
              and predictable (as in the case of Indian Markets with two minor
              dips in a year and more or less level rest of the year),
              estimating sales for individual auto brands-models is about
              predicting market share shifts and segment shifts.
            </p>
            <p>
              These graphs below reveal quite some easy to grasp information on
              Indian Passenger Car Markets. (Calendar year and financial year
              dips for reasons of model year impacting resale price and
              depreciation tax shield resp)
              <br />
              Source: www.team-bhp.com
            </p>
            <img
              className="supply-chain-post-img"
              src="https://media.licdn.com/dms/image/C5112AQF8_5piu14ssA/article-inline_image-shrink_1000_1488/0/1540388592153?e=1701302400&v=beta&t=UGXVLoyccw2EgckajcYH9kb9_jvKL0GkiWc4BbUtFcQ"
              alt=""
            />
            <p>
              Despite stiff competition from almost all known auto makers on
              earth, Maruti Suzuki acquired more than 50% market share from its
              competition through ingenious marketing. It got all the after
              sales niceties that others do not seem to match or perhaps not
              interested to offer. Used cars buyback value assurance, extended
              warranties at a ‘nominal’ cost, attractive refinance costs, low
              cost of service etc. While customers may have a desire to buy a
              Honda or VW, they end up buying (the not so good looking) DZire
              that sold more units than all of competition between 2015 and
              2018. A keen analyst can spot capacity insufficiency at Maruti
              costing them lost sales of about 25% in the year 2017. Honda Amaze
              was well timed and managed to make a big dent to DZire for a while
              and then it fizzled out. Honda delivered in under 2 weeks. DZire
              had a waiting time of 8 to 10 weeks depending on where you buy it!
            </p>

            <img
              className="supply-chain-post-img"
              src="https://media.licdn.com/dms/image/C5112AQGPlXcRYSIP7A/article-inline_image-shrink_1000_1488/0/1540388605761?e=1701302400&v=beta&t=XZ-cImsp3jJyX61DZjrcjDwbOEo9h_LkhQBKqdJlVGg"
              alt=""
            />
            <img
              className="supply-chain-post-img"
              src="https://media.licdn.com/dms/image/C5112AQEhUUEJXpcILw/article-inline_image-shrink_1000_1488/0/1540388618969?e=1701302400&v=beta&t=n6IaX9HTjfSpx0W411Jz_XsKY0dYxIl-yPz73QT1SSQ"
              alt=""
            />
            <img
              className="supply-chain-post-img"
              src="https://media.licdn.com/dms/image/C5112AQGWRsZZL39S-w/article-inline_image-shrink_400_744/0/1540388632048?e=1701302400&v=beta&t=EZDyIgFCIpDNkbd9t4Ek4-K3bONORvaAAGEVgcV3pDQ"
              alt=""
            />

            <img
              className="supply-chain-post-img"
              src="https://media.licdn.com/dms/image/C5112AQEr7nldBElpJg/article-inline_image-shrink_1000_1488/0/1540388640673?e=1701302400&v=beta&t=iuj7qjmhhwDog9ttUoBo8az4TavWUODjw7Ula3IXbLE"
              alt=""
            />
            <img
              className="supply-chain-post-img"
              src="https://media.licdn.com/dms/image/C5112AQFVebuWhA5Kgg/article-inline_image-shrink_1000_1488/0/1540388648430?e=1701302400&v=beta&t=PyJLrdfkcWnvwWSzfLkIxyhVPZwO5-e-Ox4xwQrIzic"
              alt=""
            />
            <img
              className="supply-chain-post-img"
              src="https://media.licdn.com/dms/image/C5112AQEKK_EPnOll-w/article-inline_image-shrink_1000_1488/0/1540388721213?e=1701302400&v=beta&t=77YPdQoEOahhHPHpZ83hK8gir1MP1I263NfOFYLyzlc"
              alt=""
            />
            <img
              className="supply-chain-post-img"
              src="https://media.licdn.com/dms/image/C5112AQGRyq4R64AuRg/article-inline_image-shrink_1000_1488/0/1540388730486?e=1701302400&v=beta&t=QM88srjKnRKzZ3Q5Zm41E40tPBVBX6sGz9u6X_lEsrk"
              alt=""
            />
            <p>
              Given the availability of such useful information, how do we
              develop and test the right models for forecasting passenger cars?
              What exogenous and endogenous causal variables should be
              considered in the model? (do not forget customer facing aspects
              like choice of color, availability of show cars, salesman’s
              personality and the woman with the man who showed up to explore).
            </p>
            <p>
              Do popular planning software offer tools to implement
              sophisticated models with ease? What tools are available for such
              ‘Analytics’? How and where do we capture all such customer
              experience information? What other meaningful correlations and
              relationships can be derived to establish new cars demand?
              <br />
              E.g.
            </p>

            <ul>
              <li>Do new home owners tend to buy new cars?</li>
              <li>
                Whether and to extent is the correlation between price of
                Gasoline and Car segment preference?
              </li>
              <li>
                Whether and to what extent is the correlation between price
                points and Car segment preference? Within the same brand or
                another brand ?
              </li>
              <li>
                What are the dominant geographical preferences in
                intention-to-buy? (someone mentioned that it is always a Black
                or White Scorpio SUV first for a particular region in Northern
                India. Even for a first time car buyer)
              </li>
              <li>
                What is the likely market shift to battery powered Cars? Will it
                cannibalize sales of A segment Cars? Or will both see jump in
                sales?
              </li>
              <li>
                What about tax incentives for Hybrid and battery cars? Is this
                shift apparent and visible now? Or is this like the Motorcycle
                Segment?
              </li>
              <li>
                Does used car price assurance drive new car sales? What other
                factors prompt customers to buy new cars more frequently? What
                is the brand loyalty factor in purchase?
              </li>
              <li>
                Do New and Used Cars exhibit similar seasonality? (If US market
                data is to be believed, then yes)
              </li>
              <li>Do rebates and freebies bring in commensurate sales?</li>
              <li>
                What are the various decision drivers involved in the purchase
                of a new car or the intention to buy surveys?
              </li>
              <li>
                What about fleet sales and taxi operators like Ola and Uber? Is
                there a correlation between sales to this market segment and
                sales to private individuals ? (hat tip: @Procyon Mukherjee)
              </li>
            </ul>

            <p>
              <b>
                Is there a base case for base demand when all the causal
                variables seem to be at its worst?
              </b>{" "}
              E.g. Unemployment, Interest rates, GDP growth, Inflation, Consumer
              price index, Govt. expenditure, disposable income Quartile,
              Exchange rates. BTW despite the worst exchange rate in history,
              SIAM has predicted a 12% growth in Auto Sales in 2018-19. (The
              credit does not go to usual appropriators of all things good with
              the economy but to a growing middle class. From 5% to perhaps 6%)
            </p>
            <p>********</p>
            <p>
              The author is a Business Planning Principal with Lydian Global
              Business Services. Lydian’s compelling combination of deep
              industry expertise and Solution vision wrt its ability to mix and
              match the right set of software design help customers derive the
              additional value that businesses expect from their investments in
              Enterprise Technologies.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
