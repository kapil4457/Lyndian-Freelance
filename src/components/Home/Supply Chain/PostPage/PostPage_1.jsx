import { NavLink } from "react-router-dom";
import "./PostPage.css";
import React, { useEffect } from "react";
import postbanner from "../Images/post-banner.jpg";
import post1 from "../Images/post1.jpg";
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
        <img src={post1} alt="" />
        <div className="supply-chain-post-data">
          <h1>Last Mile Logistics: Who Must Optimize?</h1>
          <span>
            <p>
              No one ever paid for a Pizza delivery service. It was always free.
              It is best kept hidden in transaction value. These days every
              delivery service is a ‘product’. 2 hours, 4 hours, next day,
              second day, standard delivery for the same stuff are functionally
              different products. Customers balk when they are expected to pay
              premium for faster delivery.
            </p>
            <p>
              In just over a decade the B2C E-Commerce firms in India too have
              managed to match or exceed International delivery standards as far
              as last mile logistics go. Both business discipline and enabling
              platforms. Amazon still leads on the technology investments in
              this space. Others with varying motivations have their own
              business models. Some addressing the main pain of shippers
              (connecting them to freight forwarders), some of customers (not a
              good business idea, Doorman failed), some of the fleet owners,
              some of the delivery boys, some of payment collection agencies.
              Some leverage synergies in existing businesses in this space. Some
              struggle with Industry specific last mile issues e.g. replenishing
              gas stations (SAP Secondary Sales/).
            </p>
            <p>
              Logistics ‘industry’ experts put last mile unit delivery costs to
              be roughly half of total door to door laid down costs. Which means
              for low cost products, free delivery simply does not make business
              sense. The costs depend on several factors like customer density,
              distance from nearest warehouse/delivery center, route options,
              city restrictions on certain modes of transport, acceptance time
              windows, product type, value, volume, weather etc. Some last mile
              operators also offer collections and returns service and that
              often means a phenomenal cost to serve. Esp. in newly pampered
              consumer markets, customers tend to be more demanding and often
              unreasonable with the level of service they expect! Someone is
              paying for it.
            </p>
            <p>
              Expectations in B2B last mile are no different. Retailers of
              hardware, home furnishings, pharmaceuticals, Auto spares,
              construction supplies, bars and restaurants now routinely expect
              similar delivery speed and timeliness. Esp. since some start ups
              were funded upwards of 100mn$ in early stage. They now employ 25
              yo tall, fair, handsome double masters rock stars as directors and
              pay them upwards of 100lpa to solve some of the most challenging
              problems in this space. Something that the brick and mortar
              empires could not. Back then they used terms like secondary and
              tertiary transportation when whole of the country was their
              fiefdom and everything was ‘under the control of a 1944 born
              manager. Every service provider their de-facto slave! No science.
              No math. No logic. Just shout.
            </p>
            <p>
              Expectations are bound to rise and there are many finer elements
              to consider to achieve an ‘Optimal’ last mile delivery. Most
              importantly making the experience more interactive with end
              customers. Esp when somethings that can go wrong certainly will.
            </p>
            <ul>
              <li>
                <b>Change of time window and/or location –</b> How late can the
                customer decide to choose another time or place of delivery?
                Amazon still talks the language of day and date. Your order
                number so and so is out for delivery and you should received it
                on 10th of Feb, 2019.. (meanwhile 2 members in my family die.)
              </li>
              <li>
                <b>Scheduling the deliveries –</b> What sophisticated scheduling
                heuristics should the last mile provider run to reschedule
                deliveries and returns? FIFO, least cost, fastest completion,
                LIFO
              </li>
              <li>
                <b>Consolidating Loads –</b> How can the shipping company
                maximize the weight to volume ratio to reduce unit shipping
                costs?
              </li>
              <li>
                <b>Rewards and Penalties –</b> What metrics should make the
                basis of good working relationship between last mile service
                provider and the business?
              </li>
              <li>
                <b>Integration with digital core-</b> How to scope a program to
                integrate last mile delivery platforms with your fulfillment/ERP
                applications? What information should you capture to make
                meaningful conclusions about your fill rates and costs to
                serve?– By line, by order, by Customer, by location...
              </li>
              <li>
                <b>Choosing the right last mile platform –</b> Not everyone
                needs Amazon’s capabilities. Some out there are cheap for the
                purpose.
              </li>
            </ul>
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
