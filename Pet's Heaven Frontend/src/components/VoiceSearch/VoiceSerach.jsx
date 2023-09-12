import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./VoiceSearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faSearch } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import AniCard from "../Card/AniCard";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Col, Row } from "react-bootstrap";

const VoiceSearch = () => {
  const [searchInput, setSearchInput] = useState("");

  const [animals, setAnimals] = useState(null);

  const [copydata, setCopyData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/auth/animal").then((res) => {
      setAnimals(res.data);
      setCopyData(res.data);
      console.log(copydata);
    });
  }, ["http://localhost:8080/auth/animal"]);

  console.log(copydata);

  const commands = [
    {
      command: ["*"],
      callback: (v) => {
        setSearchInput(v);
        let getchangedata = v.toLowerCase();

        if (getchangedata === "") {
          setCopyData(animals);
        } else {
          let storedata = copydata.filter((ele, k) => {
            return ele.name.toLowerCase().match(getchangedata);
          });

          setCopyData(storedata);
        }
      },
    },
  ];

  const {
    // transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    alert("Browser don't support speech rexognition");
  }

  const handleSpeech = () => {
    SpeechRecognition.startListening({ continuous: false, language: "en-IN" });
  };

  const handleReset = () => {
    resetTranscript();
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);

    let getchangedata = e.target.value.toLowerCase();

    if (getchangedata === "") {
      setCopyData(animals);
    } else {
      let storedata = copydata.filter((ele, k) => {
        return ele.name.toLowerCase().match(getchangedata);
      });

      setCopyData(storedata);
    }
  };

  //   console.log(searchInput);
  //   console.log(transcript);

  return (
    <div style={{ paddingBottom: "30px" }}>
      <h1 className="d-flex justify-content-center" style={{ padding: "50px 0px" }}>Pet Adoption Gallery</h1>
      <div className="row voice-search d-flex justify-content-center ">
        <div className="col-md-6">
          <p>{listening ? "Listening..." : ""}</p>
          <div className="form">
            <FontAwesomeIcon className="fa-search" icon={faSearch} />
            <input
              type="text"
              className="form-control form-input"
              placeholder="Search animals..."
              value={searchInput}
              onChange={(e) => handleSearch(e)}
              name="searchInput"
            />

            <span className="left-pan">
              <button
                onClick={(e) => {
                  handleSpeech();
                  handleReset();
                }}
                className="mic-button"
              >
                <FontAwesomeIcon className="mic" icon={faMicrophone} />
              </button>
            </span>
          </div>
        </div>
      </div>
      <Row style={{ padding: "50px 0px" }}>
        <Col></Col>
        <Col xs={7}>
          <div className="row mt-4 d-flex justify-content-around align-items-center">
            {copydata && copydata.length ? (
              <AniCard data={copydata} />
            ) : (
              <div>
                <p center>No Data to Display</p>
              </div>
            )}
          </div>
        </Col>
        <Col></Col>
      </Row>
    </div >
  );
};

export default VoiceSearch;
