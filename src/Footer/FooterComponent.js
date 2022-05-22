import React, { useEffect } from "react";
import "./Footerstyles.css";
import { SocialMediaIconsReact } from "social-media-icons-react";
import { useDispatch, useSelector } from "react-redux";
import { dataList } from "../actions/timerAction";

const FooterComponent = () => {
  const dispatch = useDispatch();
  const FooterData = useSelector((state) => state.dataList);
  const {
    appData: {
      socialIcons = [],
      usefulLinks = [],
      brands = [],
      cities = [],
      keepInTouch = "",
      poweredBy = "",
      experienceWithUs = "",
      usefulLink = "",
      topBrands = "",
      topCities = "",
    },
  } = FooterData;
  useEffect(() => {
    dispatch(dataList());
  }, [dispatch]);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col col-md-3 col-sm-3 col-xl-3">
          <h3 className="heading">{keepInTouch}</h3>
          <ul className="social-ul">
            {socialIcons.map((i) => (
              <li className="social-li">
                <SocialMediaIconsReact
                  icon={i.icon}
                  iconColor="white"
                  borderColor="none"
                  borderWidth="0"
                  roundness="5px"
                  url="https://some-website.com/my-social-media-url"
                  size="30px"
                />
              </li>
            ))}
          </ul>
          <p className="paragraph">
            {experienceWithUs}
            <span>{poweredBy}</span>
          </p>
        </div>
        <div className="col col-md-3 col-sm-3 col-xl-3">
          <h3 className="heading">{usefulLink}</h3>
          <ul className="mb-2">
            {usefulLinks.map((i) => (
              <li className="list">
                <a href="https://www.getveris.com/">{i.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col col-md-3 col-sm-3 col-xl-3">
          <h3 className="heading">{topBrands}</h3>
          <ul className="mb-2">
            {brands.map((i) => (
              <li className="list">
                <a href="https://www.cars24.com/buy-used-cars/">{i.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col col-md-3 col-sm-3 col-xl-3">
          <h3 className="heading">{topCities}</h3>
          <ul className="mb-2">
            {cities.map((city) => (
              <li className="list">
                <a href="https://www.cars24.com/buy-used-cars/">{city.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
