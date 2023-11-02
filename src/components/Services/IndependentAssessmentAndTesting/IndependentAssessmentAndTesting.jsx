import React from "react";
import "./IndependentAssessmentAndTesting.css";
import { NavLink } from "react-router-dom";
import iaat_1 from "../Images/IAAT_1.jpg";
import iaat_2 from "../Images/IAAT_2.jpg";
const IndependentAssessmentAndTesting = () => {
  return (
    <>
      <div id="independent-assessment-and-testing-image-container">
        <img
          id="independent-assessment-and-testing-image"
          src={iaat_1}
          alt=""
        />
        <h2 id="independent-assessment-and-testing-heading">
          Independent Assessment And Testing
        </h2>

        <div id="independent-assessment-and-testing-crumbs">
          <NavLink to={"/"}>Home</NavLink>
          <span className="independent-assessment-and-testing-gap">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
          <span className="independent-assessment-and-testing-current">
            Independent Assessment And Testing
          </span>
        </div>
      </div>

      <div id="independent-assessment-and-testing-content">
        <img src={iaat_2} alt="" />
        <div className="independent-assessment-and-testing-data">
          <h1>Independent Assessment And Testing</h1>
          <span>
            <p>
              Lorem ipsum dolor sit amet. Qui provident rerum aut quae
              doloremque sed atque veniam et voluptatem dolore? Qui fugit
              aliquam aut dolorem illo ut dicta enim. Cum voluptas quis rem
              facere quibusdam vel saepe assumenda sit eligendi voluptatem est
              tempore quisquam vel aperiam sint ad nisi nihil? Et quia ratione
              non voluptas sunt qui voluptatem officiis ad totam repellat aut
              dolor labore.
            </p>
            <p>
              Aut repellat illo et eveniet dolorem et voluptas consequatur 33
              provident consequuntur in ullam dolorem ut commodi sint est omnis
              minus. Est quod quia non quaerat ducimus non atque temporibus eum
              iste nemo sit dolorem sunt id vitae quidem.
            </p>
            <p>
              Hic laboriosam mollitia nam beatae quis eos accusamus earum. Et
              assumenda quidem quo assumenda laboriosam sit rerum dolores ut
              suscipit repudiandae eos molestiae itaque.
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default IndependentAssessmentAndTesting;
