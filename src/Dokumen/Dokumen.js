import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import "./Dokumen.css";
export const Dokumen = (params) => {
  const [DataResponse, setDataResponses] = useState();
  const axios = require("axios");
  useEffect(() => {
    console.log("hit");
    axios
      .get("http://adminmesuji.embuncode.com/api/dokumen?instansi_id=3")
      .then(function (response) {
        console.log("Response " + response.data);
        setDataResponses(response.data.data.data);
        // setDataResponses("test");
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1 className="dokumen">Dokumen</h1>
      {console.log("saa", +DataResponse)}
      {DataResponse &&
        DataResponse.map((item, index) => {
          return item.dokumen_item.map((itm, idx) => {
            return (
              <Row className="deretandokumen">
                <Col sm={12} md={6} lg={4} key={idx} className="wrapper-pdf">
                  <Link to={"/pdf/" + item.slug.replace(/\s/g, "")} className="content-pdf">
                    <i className="fa-solid fa-file-pdf"></i>
                    <div className="content-meta-pdf">
                      <div className="item-pdf">
                        <h5>{itm.dokumen_file_name}</h5>
                        <p>{itm.description_dokumen}</p>
                      </div>
                    </div>
                  </Link>
                </Col>
              </Row>
            );
          });
        })}
    </div>
  );
};
