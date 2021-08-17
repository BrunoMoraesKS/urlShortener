import React, { useState, useEffect } from "react";
import Axios from "axios";

import illustrationWorking from "../images/illustration-working.svg";
import brandRecognition from "../images/icon-brand-recognition.svg";
import detailedRecords from "../images/icon-detailed-records.svg";
import fullyCustomizable from "../images/icon-fully-customizable.svg";

const Home = () => {
  const [longLink, setLongLink] = useState("");
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

          { shortLink: response.data.result.short_link2, longLink: longLink },
        ]);
      })
      .catch((err) => {
        setLoading(false);

        setInputError("Please add a valid link");
      });
  };

  const longLinkSize = (link) => {
    if (link.length >= 25) {
      return <h4>{link.slice(0, 25)}...</h4>;
    } else {
      return <h4>{link}</h4>;
    }
  };

  return (
    <div className="home">
      <section className="illustrationAndPresentation">
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

        <section className="shortenedLinks">
          {shortLinksArray.map((item, index) => {
            return (
              <div key={index} className="shortLinksMap">
                {longLinkSize(item.longLink)}
                <div className="horizontalLine"></div>
                <h3>{item.shortLink}</h3>
                <button
                  id={`copyButton${index}`}
                  className="copyButton"
                  onClick={() => {
                    const buttonClass =
                      document.getElementsByClassName("copyButton");

                    let i = 0;

                    do {
                      buttonClass[i].classList.remove("copied");
                      buttonClass[i].innerHTML = "Copy";

                      i++;
                    } while (i !== buttonClass.length);

                    navigator.clipboard.writeText(item.shortLink);

                    const buttonId = document.getElementById(
                      `copyButton${index}`
                    );
                    buttonId.classList.add("copied");
                    buttonId.innerHTML = "Copied!";
                  }}
                >
                  Copy
                </button>
              </div>
            );
          })}
        </section>
      </main>

      <section className="statistics">
        <h3>Advanced Statistics</h3>

        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>

        <section className="statisticsCards">
          <div className="card card1">
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

          <div className="card card2">
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

          <div className="card card3">
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

      <section className="boostYourLink">
        <h3>Boost your links today</h3>

        <button className="getStarted">Get Started</button>
      </section>
    </div>
  );
};

export default Home;
