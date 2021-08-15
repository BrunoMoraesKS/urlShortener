import React, { useState, useEffect } from "react";
import Axios from "axios";

import illustrationWorking from "../images/illustration-working.svg";
import brandRecognition from "../images/icon-brand-recognition.svg";
import detailedRecords from "../images/icon-detailed-records.svg";
import fullyCustomizable from "../images/icon-fully-customizable.svg";

const Home = () => {
  const [longLink, setLongLink] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [shortLinksArray, setShortLinksArray] = useState([]);

  const [inputError, setInputError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [shortLinksArray]);

  const shortenBtn = () => {
    return (
      <button
        onClick={(e) => {
          getShortLink(e);
        }}
      >
        Shorten It!
      </button>
    );
  };

  const loadingApi = () => {
    return (
      <button className="disabled" disabled>
        Loading...
      </button>
    );
  };

  const getShortLink = async (e) => {
    setLoading(true);
    setInputError("");

    e.preventDefault();

    await Axios.get(`https://api.shrtco.de/v2/shorten?url=${longLink}`)
      .then(function (response) {
        setShortLinksArray([
          ...shortLinksArray,
          response.data.result.short_link2,
        ]);
      })
      .catch((err) => {
        setLoading(false);

        setInputError("Please add a valid link");
      });
  };

  return (
    <div className="home">
      <img
        className="illustrationWorking"
        src={illustrationWorking}
        alt="Working illustration"
      />

      <section className="presentation">
        <h2>More than just shorter links</h2>

        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>

        <button className="getStarted">
          <h3>Get Started</h3>
        </button>
      </section>

      <main>
        <section className="linkShortenerSection">
          <form action="" className="linkShortenerForm">
            <input
              onChange={(e) => {
                setLongLink(e.target.value);
              }}
              type="text"
              placeholder="Shorten a link here..."
            />

            <span>{inputError}</span>

            {loading ? loadingApi() : shortenBtn()}
          </form>
        </section>
      </main>

      <section className="statistics">
        <h3>Advanced Statistics</h3>

        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>

        <section className="statisticsCards">
          <div>
            <div className="iconCircle">
              <img src={brandRecognition} alt="Brand Recognition" />
            </div>

            <h4>Brand Recognition</h4>

            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <div className="verticalLine"></div>

          <div>
            <div className="iconCircle">
              <img src={detailedRecords} alt="Detailed Records" />
            </div>

            <h4>Detailed Records</h4>

            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          <div className="verticalLine"></div>

          <div>
            <div className="iconCircle">
              <img src={fullyCustomizable} alt="Fully Customizable" />
            </div>

            <h4>Fully Customizable</h4>

            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
