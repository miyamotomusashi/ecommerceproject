import { useState } from "react";
import Review from "../../Reviews/Review";
import PropTypes from "prop-types";
import "./Tabs.css";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("desc");

  const handleTabClick = (e,tab) =>{
        e.preventDefault();
        setActiveTab(tab);
  }
  return (
    <div className="single-tabs">
      <ul className="tab-list">
        <li>
          <a href="#" className="tab-button active" data-id="desc" onClick={(e)=>handleTabClick(e,"desc")}>
            Description
          </a>
        </li>
        <li>
          <a href="#" className="tab-button" data-id="info" onClick={(e)=>handleTabClick(e,"info")}>
            Additional information
          </a>
        </li>
        <li>
          <a href="#" className="tab-button" data-id="reviews" onClick={(e)=> handleTabClick(e,"reviews")}>
            Reviews
          </a>
        </li>
      </ul>
      <div className="tab-panel">
        <div
          className={`tab-panel-descriptions content ${
            activeTab === "desc" ? "active" : ""
          }`}
          id="desc"
        >
          <p>
            Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin
            vitae magna in dui finibus malesuada et at nulla. Morbi elit ex,
            viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum
            iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales
            nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc
            tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt.
            Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.
          </p>
          <br />
          <p>
            Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin
            vitae magna in dui finibus malesuada et at nulla. Morbi elit ex,
            viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum
            iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales
            nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc
            tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt.
            Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.
          </p>
        </div>
        <div
          className={`tab-panel-descriptions content ${
            activeTab === "info" ? "active" : ""
          }`}
          id="info"
        >
          <h3>Additional information</h3>
          <table>
            <tbody>
              <tr>
                <th>Color</th>
                <td>
                  <p>
                    Apple Red, Bio Blue, Sweet Orange, Blue, Green, Pink, Black,
                    White
                  </p>
                </td>
              </tr>
              <tr>
                <th>Size</th>
                <td>
                  <p>XXS, XS, S, M, L, XL, XXL</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Review
          active={activeTab === "content reviews" ? "active" : "content"}
        />
      </div>
    </div>
  );
};

export default Tabs;

Tabs.protoTypes = {
  activeTab: PropTypes.String,
  setActiveTab: PropTypes.func,
};
