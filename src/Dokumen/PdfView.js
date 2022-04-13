import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PdfView = () => {
  const [DataResponse, setDataResponses] = useState(0);
  const { id } = useParams();
  // console.log("ini id = ", id);
  const axios = require("axios");

  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/dokumen/" + id)
      .then(function (response) {
        setDataResponses(response.data.data);
        console.log("uu" + response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      {DataResponse &&
        DataResponse.map((item, index) => {
          //   console.log("222" + item.dokumen_file_name);
          console.log("match" + item.dokumen_file_name.replace(/\s/g, "") == id.replace(/\s/g, ""));
          //   if (item.dokumen_file_name.replace(/\s/g, "") == id.replace(/\s/g, "")) {
          return (
            <Fragment>
              <iframe className="iframe-pdf" style={{ width: "100%", height: "1000px", background: "#000" }} src={`data:application/pdf;base64,${item.dokumen_file_data}`} title="title">
                Presss me: <a href={`data:application/pdf;base64,${item.dokumen_file_data}`}>Download PDF</a>
              </iframe>
            </Fragment>
          );
          //   }
        })}
    </>
  );
};
