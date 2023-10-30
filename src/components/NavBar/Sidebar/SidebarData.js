import * as RiIcons from "react-icons/ri";
export const SidebarData = [
  {
    title: "About Us",
    path: "/about-us",
    isSub: false,
  },
  {
    title: "Products",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Intelligent Supply Chain Extensions",
        path: "/intelligent-supply-chain-extensions",
      },
      {
        title: "Autonomous Forecasting and Replenishment",
        path: "/autonomous-forecasting-and-replenishment",
      },
      {
        title: "Middle Ware",
        path: "/middle-ware",
      },
      {
        title: "Boosters and Accelerators",
        path: "/boosters-and-accelerators",
      },
      {
        title: "Portals",
        path: "/portals",
      },
    ],
    isSubNav: true,
  },
  {
    title: "Services",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Audit",
        path: "/audit",
      },
      {
        title: "Implementation",
        path: "/implementation",
      },
      {
        title: "Solution Operation ( Run & Maintain)",
        path: "/solution-operation",
      },
      {
        title: "Independent Software Evaluation",
        path: "/independent-software-evaluation",
      },
      {
        title: "Enterprise Application Integration(EAI)",
        path: "/enterprise-application-integration",
      },
      {
        title: "System Landscape Optimization(SLO - M&A)",
        path: "/system-landscape-optimization",
      },
      {
        title: "User & Application Productivity",
        path: "/user-and-application-productivity",
      },
      {
        title: "CIO Advisory",
        path: "/cio-advisory",
      },
      {
        title: "Use Case Development",
        path: "/use-case-developement",
      },
      {
        title: "Training & Capability Building",
        path: "/training-and-capability-building",
      },
    ],
    isSubNav: true,
  },

  {
    title: "Industries",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Agri business",
        path: "/agri-business",
      },
      {
        title: "Dairy",
        path: "/diary",
      },
      {
        title: "FMCG & CPG",
        path: "/fmcg-cpg",
      },
      {
        title: "Retail",
        path: "/retail",
      },
      {
        title: "MRO & Spares(After Market)",
        path: "/mro-and-spares",
      },
      {
        title: "Pharmaceuticals",
        path: "/pharmaceuticals",
      },
    ],
    isSubNav: true,
  },
  {
    title: "Technologies",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "SAP SCM",
        path: "/sap-scm",
      },
      {
        title: "SAP S4HANA",
        path: "/sap-s4hana",
      },
      {
        title: "SAP BW on HANA",
        path: "/sap-bw-on-hana",
      },
      {
        title: "SAP SAC",
        path: "/sap-sac",
      },
      {
        title: "SAP IBP",
        path: "/sap-ibp",
      },
      {
        title: "SAP BTP",
        path: "/sap-btp",
      },
      {
        title: "RPA - Automation Anywhere",
        path: "/rpa-automation-anywhere",
      },
      {
        title: "HANA DB",
        path: "/hana-db",
      },
      {
        title: "BODS",
        path: "/bods",
      },
      {
        title: "ODATA",
        path: "/odata",
      },
      {
        title: "Native HANA",
        path: "/native-hana",
      },
      {
        title: "ABAP on HANA",
        path: "/abap-on-hana",
      },
      {
        title: "Mendix",
        path: "/mendix",
      },
      {
        title: "SAP TMS",
        path: "/sap-tms",
      },
      {
        title: "BY TMS",
        path: "/by-tms",
      },
    ],
    isSubNav: true,
  },
  {
    title: "Partners",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Logility",
        path: "/logility",
      },
      {
        title: "Arkieva",
        path: "/arkieva",
      },
      {
        title: "Novobi",
        path: "/novobi",
      },
      {
        title: "Kinaxis",
        path: "/kinaxis",
      },
    ],
    isSubNav: true,
  },

  {
    title: "People",
    path: "/people",
    isSubNav: false,
  },
];
