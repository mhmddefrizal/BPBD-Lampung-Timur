import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const Staticpage = (params) => {
  const { id } = useParams();
  const [DataStatic, setDataStatic] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(null);
    axios
      .get("http://adminmesuji.embuncode.com/api/static-page/" + id)
      .then(function (Umum) {
        setDataStatic(Umum.data.data);
        console.log(Umum.data);
        setLoading(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      {console.log("data" + DataStatic)}
      <h1></h1>
      <div dangerouslySetInnerHTML={{ __html: DataStatic.content }} />
    </div>
  );
};
