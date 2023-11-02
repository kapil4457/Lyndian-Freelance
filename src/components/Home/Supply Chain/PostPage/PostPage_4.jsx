import { NavLink } from "react-router-dom";
import "./PostPage.css";
import React, { useEffect } from "react";
import postbanner from "../Images/post-banner.jpg";
import post4 from "../Images/post4.jpg";
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
        <img src={post4} alt="" />
        <div className="supply-chain-post-data">
          <h1>Every Manager Wants a Control Tower!</h1>
          <span>
            <p>
              Dashboards, Control Towers, Cockpits, Scorecards, Control Panels,
              Visibility. Every Manager fancies one. Rightfully. Given the
              current App economy that has made life so easy for so many of us
              in so many ways.
            </p>
            <p>
              A <b>Control Tower App</b> can be so empowering. Esp. if you get
              to know just about everything you need to know at the start of the
              day. Meaningful, well-classified and actionable metrics that
              collectively convey just about everything re health of your
              business or function. About your own performance as a manager! At
              a glance. In less than 5 minutes. While driving to work. Makes for
              a productive day at work as usual. An app for supply chain
              manager, An App for finance head. An App for category manager. An
              app for Human Resources manager. An app for the CEO. It lends huge
              legitimacy to their real jobs.{" "}
              <b>
                A set of KPIs. A set of summary statistics, A set of descriptive
                stats. A set of predictive stats (I will call it Expected values
                of certain KPIs in near future). A set of current Alerts. A set
                of graphs. A set of notifications. A set of upcoming events. A
                set of comparisons. A set of top ten and bottom ten lists by
                this and that criteria.
              </b>{" "}
              Add some drilldown capabilities too for self-help insights anyone
              cares to slice further. As it relates to their roles, functions
              and expectations in the firm. So many things to do. So many guys
              to pull up and seek explanation. So many things to retro-fix. So
              many shortages to fulfil. So many 'facts' to challenge. So many
              people to answer to in the next meeting with CEO.
            </p>
            <p
              style={{
                borderLeft: "0.4rem solid #56687a",
                paddingLeft: "1.6rem",
                color: "#56687a",
                margin: "1rem 0",
              }}
            >
              A Role based Relevant set of KPIs, Statistics and forward looking
              insights in one single place with a consistent look and feel is
              what Business and Functional Managers always wanted.
            </p>

            <p>That's a mouthful!</p>
            <p>
              But strictly speaking, very few implementation projects had
              cockpits and dashboards development as part of any large scale
              transformation initiatives. It was at best a lip service. 'Towards
              the end' thing. No cross functional treatment that it needs.
              Apparently very few managed to get the 'Dashboards' they wanted.
              The usual 'reporting sub-tracks' within a 'module' (esp. first
              time implementations) passed off as some sort of 'intelligence'
              requirements that respective managers had. Like summarized lists,
              a couple of statuses and occasionally an email notification of a
              critical situation like shipment delays made for all the
              intelligence they could consume. Occasionally some data
              maintenance utilities also passed off as 'intelligence'. If there
              is an expert BI consultant around, he would offer to 'design' just
              about every 'report' on BW. Incl ad-hoc lists that one could get
              on the fly from their ERP systems. Like sales to date by this geo
              and that category. Followed by a lecture on why you should not use
              ERP systems for generating reports! (these days they don't).
              Typically taking a month to build one from cryptic sounding data
              sources meant for implementation by discovery till you find a
              relevant one. Else build one from scratch. Thanks to
              documentation. Want another column or a new 'advanced' metric ?
              You engage him again. It is like a 10000$ affair per report esp.
              when there are half a dozen analysts taking a couple of weeks to
              decide the 'layout' to make it sound 'intelligible' enough for the
              demanding customer (Manager from a top B-School). And then they
              expected from the managers to login to so many systems to see so
              many things on a daily basis.{" "}
              <b>Many of them not even real time. Not actionable.</b>
            </p>
            <p
              style={{
                borderLeft: "0.4rem solid #56687a",
                paddingLeft: "1.6rem",
                color: "#56687a",
                margin: "1rem 0",
              }}
            >
              Reports, KPIs and 'Analytics' in SAP was all over the place. ERP,
              BW, SCM, EPM, BPC.. CRM, SRM, Excel. No one single source met the
              needs of functional intelligence that discerning managers sought.
            </p>

            <h2>
              How do you go about building the right role specific dashboards?
            </h2>

            <h4>A Cockpit for Supply Chain (Whatever) Manager</h4>

            <ul>
              <li>
                What descriptive and predictive KPIs and summary data functional
                managers seek on a daily basis? Inventory days supply? Supply
                shortages? Overage? Underage? Inventory expiration risk?
                Capacity Utilization (who cares?)? Shipment delays? Fill rates?
                Inventory turnover? Freight expedite costs%. Freight recovery.
                Average cost per ton mile? Last year? Next S&OP meeting, Cost of
                forecast error, Out of Stock products, Out of stock warehouse,
                ATP to average demand - Top 10, Bottom10.
              </li>
              <li>
                Does every firm out there 'strive' for Perfect Order Fulfilment?
                Does every firm take every KPI equally seriously?
              </li>
              <li>
                What SCOR KPIs make sense for a consumer electronics contract
                manufacturer vis-à-vis a Unilever or a Whirlpool?
              </li>
              <li>
                What is the Supply Chain Organization of the firm? How are
                managers roles defined? What are they expected to manage? Are
                they expected to track trucks in transit (expected delivery
                delays) or to improve demand plan accuracy? How do you want the
                Cockpit to show the shipment delays? As data visuals or as Alert
                messages to your 3PL company?
              </li>
              <li>
                Is there a ready made taxonomy of Supply Chain KPIs based on
                &nbsp;
                <b>Industry emphasis</b> (not everyone out there is motivated by
                Gartner's top20 ITO and 3 year ROA though that can at best serve
                to juxtapose)?. If I were a Supply Chain VP of a Pharmaceutical
                company, I would like an insightful KPI on{" "}
                <b>expected returns from the market.</b> That is a good proxy
                for how good is the quality of demand and supply plan. Typical
                formulation firms expect to keep it below 1.5%. Some call it
                inventory expiration risk. Anything above 2.5% means the whole
                system needs refresh
              </li>
            </ul>

            <h4>A Cockpit for CFO? </h4>
            <p>
              COGS, Return on Assets last quarter, Expected ROA next quarter,
              Current Cash to Cash cycle time, Cost of working cap, working cap
              tied in inventory Gross Profitability YTD, AP, AR, Abnormally
              overdue payables
            </p>
            <h4>A Cockpit for CHRO?</h4>
            <p>
              Attrition Rate, Employee Costs%, ARPE, Current SCR (where are the
              data sources?). Absentee rate, Hiring cycle time, Open positions
              and applicants, #full time vs contract employees, Average
              retention rate, Gender diversity, resignations in process, hires
              in process, Employee Satisfaction index, # Retirals settlements
              due, Payroll costs, Department costs%
            </p>
            <h4>A Cockpit for CMO?</h4>
            <p>
              Category Revenue Growth YTD, QoQ, Sales Cycle time, Gross
              Profitability YTD, Promotions in Progress, Promotions
              effectiveness index, Sales Targets current quarter, Non-Moving
              inventory at Warehouses, Key Account Sales, Top 10 products by
              revenue contribution, Bottom 10, Top 10 products by gross margins.
              Bottom 10.
            </p>
            <h4>A Cockpit for CEO?</h4>
            <p>
              Revenue Targets Attainment (Budget to Sales), Current Market value
              share, Current market volume share, Exp. market share, Attrition
              Rate, Gross contribution margins top10, Return on Assets, Accounts
              Payables, #Customers, #New Products, #Vendors, #Available
              warehouse space, Total unbilled Inventory, Top10 markets by
              Revenue, Top 10 markets by Volume.
            </p>
            <h4>How should you group the KPIs?</h4>
            <p>
              Every firm is unique. Culturally. What is important to them is not
              necessarily important for others. The language is different. The
              KPIs and 'formulas' are slightly different.
            </p>
            <h4>How should you separate the KPIs?</h4>
            <p>
              Keep a few KPIs confidential. Everyone need not know everything.
              Keep a few KPIs exclusively for the CEO. Nice to know is ok as
              long as you do not need to care.
            </p>
            <h4>How About Benchmark?</h4>
            <p>
              Internal 'ideal', last year, external, competition. Gartner top20.
            </p>
            <h4>How do you measure Manager's Performance?</h4>
            <p>
              Is it all about numbers? No human element? How do you know if
              managers took proactive decisions? How do you measure employee
              engagement ? Delegation? With report cards available on a minute
              by minute basis. What internal projects did the managers take to
              fix the root cause? or did the finance budget some monies towards
              such onetime project? Can the manufacturing head blame the
              customer supply chain manager for bad capacity utilization? High
              cost of production because of 'bad' production schedules? It is a
              chain reaction. One thing leading to another but you do what you
              do best. As long you can formulate the problem in context. In
              entirety. There is always a root cause.
            </p>

            <p>
              These are important questions. You can't always blame the Supply
              Chain Manager for shipment delays. You can't fire your 3PL for
              things out of his control. Like a broken truck or a transhipment
              delay awaiting another container ship.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
