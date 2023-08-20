import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  const upperHalfOptions = [
    { title: "Contact Us", link: "contact-us" },
    { title: "Location", link: "location" },
    { title: "Careers", link: "/careers" },
    { title: <i class="fa fa-linkedin" aria-hidden="true"></i>, link: "#" },
    { title: <i class="fa fa-search" aria-hidden="true"></i>, link: "#" },

    "LinkedIn",
  ];
  const lowerHalfOptions = [
    {
      title: "Products",
      subTopics: [
        {
          title: "Intelligent Supply Chain Extensions",
          link: "/intelligent-supply-chain-extensions",
        },
        {
          title: "Automatic Forecasting and Replenishment",
          link: "/automatic-forecasting-and-replenishment",
        },
        {
          title: "Boosters and Accelerators",
          link: "/boosters-and-accelerators",
        },
        {
          title: "Portals",
          link: "/portals",
        },
      ],
      isSub: true,
    },
    {
      title: "Services",
      subTopics: [
        {
          title: "Supply Chain Solutions Audit",
          link: "/supply-chain-solution-audit",
        },
        {
          title: "Forecasting as a Service",
          link: "/forecasting-as-a-service",
        },
        {
          title: "Optimizer Tuning",
          link: "/optimizer-tuning",
        },
        {
          title: "Forecast Model Tuning",
          link: "/forecast-model-tuning",
        },
        {
          title: "Data Engineering",
          link: "/data-engineering",
        },
        {
          title: "Implementation (SCP&M)",
          link: "/implementation",
        },
        {
          title: "SAP APO Be-Spoke Support",
          link: "/sap-apo-be-spoke-support",
        },
        {
          title: "Machine Learning Integration",
          link: "/machine-learning-integration",
        },
        {
          title: "Migrations and Upgrades",
          link: "/migrations-and-upgrades",
        },
        {
          title: "Machine Learning Integration",
          link: "/machine-learning-integration",
        },
        {
          title: "Hosting",
          link: "/hosting",
        },
        {
          title: "Be-Spoke Support (SAP Legacy)",
          link: "/be-spoke-support",
        },
        {
          title: "Systems Integration",
          link: "/system-integration",
        },
        {
          title: "Sizing and Tuning Databases",
          link: "/sizing-and-tuning-databases",
        },
        {
          title: "GDPR and CCPA Compliance Audit",
          link: "/gdpr-and-ccpa-compliance-audit",
        },
        {
          title: "Web Applications",
          link: "/web-applications",
        },
        {
          title: "Project Reports",
          link: "/project-reports",
        },
        {
          title: "Software Evalution",
          link: "/software-evaluation",
        },
        {
          title: "Mobile Applications ",
          link: "/mobile-applications",
        },
      ],
      isSub: true,
    },
    {
      title: "Industries",
      subTopics: [
        {
          title: "Agri business",
          link: "/agri-business",
        },
        {
          title: "Diary",
          link: "/diary",
        },
        {
          title: "FMCG & CPG",
          link: "/fmcg-cpg",
        },
        {
          title: "Retail",
          link: "/retail",
        },
        {
          title: "MRO & Spares(After Market)",
          link: "/mro-and-spares",
        },
        {
          title: "Pharmaceuticals",
          link: "/pharmaceuticals",
        },
      ],
      isSub: true,
    },
    {
      title: "Technologies",
      subTopics: [
        {
          title: "SAP SCM",
          link: "/sap-scm",
        },
        {
          title: "SAP S4HANA",
          link: "/sap-s4hana",
        },
        {
          title: "SAP BW on HANA",
          link: "/sap-bw-on-hana",
        },
        {
          title: "SAP SAC",
          link: "/sap-sac",
        },
        {
          title: "SAP IBP",
          link: "/sap-ibp",
        },
        {
          title: "SAP BTP",
          link: "/sap-btp",
        },
        {
          title: "RPA - Automation Anywhere",
          link: "/rpa-automation-anywhere",
        },
        {
          title: "HANA DB",
          link: "/hana-db",
        },
        {
          title: "BODS",
          link: "/bods",
        },
        {
          title: "ODATA",
          link: "/odata",
        },
        {
          title: "Native HANA",
          link: "/native-hana",
        },
        {
          title: "ABAP on HANA",
          link: "/abap-on-hana",
        },
        {
          title: "Mendix",
          link: "/mendix",
        },
        {
          title: "SAP TMS",
          link: "/sap-tms",
        },
        {
          title: "BY TMS",
          link: "/by-tms",
        },
      ],
      isSub: true,
    },
    {
      title: "Partners",
      subTopics: [
        {
          title: "Logility",
          link: "/logility",
        },
        {
          title: "Arkieva",
          link: "/arkieva",
        },
        {
          title: "Novobi",
          link: "/novobi",
        },
        {
          title: "Kinaxis",
          link: "/kinaxis",
        },
      ],
      isSub: true,
    },
    {
      title: "Blogs",
      link: "/blogs",
      isSub: false,
    },
    {
      title: "People",
      link: "/people",
      isSub: false,
    },
    {
      title: "Project Trainings",
      link: "/project-trainings",
      isSub: false,
    },
  ];
  return (
    <div>
      <div id="upper-nav">
        <div id="inner-upper-nav">
          {upperHalfOptions.map((item, key) => (
            <NavLink to={item.link}>{item.title}</NavLink>
          ))}
        </div>
      </div>
      <div id="lower-nav"></div>
    </div>
  );
};

export default NavBar;
