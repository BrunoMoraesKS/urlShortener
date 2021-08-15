import React, { useState, useEffect } from "react";
import Axios from "axios";

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
      HOME
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
    </div>
  );
};

export default Home;
