import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import PageUnderConstruction from "./components/PageUnderConstruction/PageUnderConstruction";
import DesignAudit from "./components/Services/DesignAudit/DesignAudit";
import IndependentAssessmentAndTesting from "./components/Services/IndependentAssessmentAndTesting/IndependentAssessmentAndTesting";
import ProgramManagement from "./components/Services/ProgramManagement/ProgramManagement";
import EffortEstimationAndValidation from "./components/Services/EffortEstimationAndValidation/EffortEstimationAndValidation";
import Industry from "./components/Services/Industry/Industry";
import WorldwideContract from "./components/Services/WorldwideContract/WorldwideContract";
import Blog from "./components/Blog/Blog";
import PostPage1 from "./components/Home/Supply Chain/PostPage/PostPage_1";
import PostPage2 from "./components/Home/Supply Chain/PostPage/PostPage_2";
import PostPage3 from "./components/Home/Supply Chain/PostPage/PostPage_3";
import PostPage4 from "./components/Home/Supply Chain/PostPage/PostPage_4";
import { Analytics } from "@vercel/analytics/react";
import Team from "./components/Team/team";
import AboutUs from "./components/AboutUs/AboutUs";
import Loknath from "./components/Team/teamResume/Loknath"
import Denis from "./components/Team/teamResume/Denis"
import Vivek from "./components/Team/teamResume/Vivek"
import Raghunath from "./components/Team/teamResume/Raghunath"
import Ashish from "./components/Team/teamResume/Ashish"
import Akhilesh from "./components/Team/teamResume/akhilesh"
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/program-management" element={<ProgramManagement />} />
        <Route
          path="/effort-estimation-and-validation"
          element={<EffortEstimationAndValidation />}
        />
        <Route path="/design-audit" element={<DesignAudit />} />
        <Route
          path="/independent-assessment-and-testing"
          element={<IndependentAssessmentAndTesting />}
        />
        <Route path="/industry-4-0-advisory" element={<Industry />} />
        <Route
          path="/worldwide-contract-staffing"
          element={<WorldwideContract />}
        />

        <Route path="/supply-chain-post-page-1" element={<PostPage1 />} />
        <Route path="/supply-chain-post-page-2" element={<PostPage2 />} />
        <Route path="/supply-chain-post-page-3" element={<PostPage3 />} />
        <Route path="/supply-chain-post-page-4" element={<PostPage4 />} />

        <Route path="/people" element={<Team />} />
        <Route path="/people/people1" element={<Loknath />} />
        <Route path="/people/people2" element={<Denis />} />
        <Route path="/people/people3" element={<Vivek />} />
        <Route path="/people/people4" element={<Raghunath />} />
        <Route path="/people/people5" element={<Ashish />} />
        <Route path="/people/people6" element={<Akhilesh />} />
        
        {/* <Route path="/blogs" element={<Blog />} /> */}

        <Route path="/about-us" element={<AboutUs/>}/>

        <Route path="*" element={<PageUnderConstruction />} />
      </Routes>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
