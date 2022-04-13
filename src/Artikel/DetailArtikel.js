import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { Container, Row, Col, ListGroup, Badge } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import "./DetailArtikel.css";
export const DetailArtikel = (params) => {
  const { id } = useParams();

  const [DataResponse, setDataResponses] = useState([]);
  const [Categories, setDataCategories] = useState([]);
  const [PostPopular, setPostPopular] = useState([]);
  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/article/" + id)
      .then(function (response) {
        console.log(response.data.data);
        setDataResponses(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [axios]);
  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/article/categories/3")
      .then(function (response) {
        setDataCategories(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/article?instansi_id=3&per_page=5&sort_type=desc&sort_by=total_hit")
      .then(function (response) {
        setPostPopular(response.data.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  function handleLength(value, lengths) {
    if (value.length < lengths) {
      return value;
    } else {
      return value.substring(0, lengths).substring(0, value.substring(0, lengths).lastIndexOf(" ")) + "...";
    }
  }
  return (
    <section className="section">
      <Container>
        <Container>
          {console.log(DataResponse)}
          <Row>
            <Col md={8} sm={12} xs={12}>
              <Row>
                <h2>{DataResponse.title}</h2>
                <img src={DataResponse.image_file_data} alt={DataResponse.title} className="pict"></img>
                <div dangerouslySetInnerHTML={{ __html: DataResponse.content }}></div>
              </Row>
            </Col>
            <Col md={4} sm={12} xs={12}>
              <div className="sidebar sidebar-right">
                <div className="seacrh-widget">
                  <form method="get" action="">
                    <input name="keyword" type="text" placeholder="Search..." />
                  </form>
                </div>
                <div className="single-sidebar recent-post-widget">
                  <div className="title">
                    <h3>Popular Posts</h3>
                  </div>
                  <div id="popular" className="recent-post-list">
                    <div className="single-recent-post">
                      <div id="popular" className="recent-post-list">
                        <div className="single-recent-post">
                          <ul>
                            {PostPopular &&
                              PostPopular.map((item, index) => {
                                return (
                                  <li key={index}>
                                    <div className="item-thumbnail">
                                      <span className="title">
                                        <Link title=" " to="">
                                          {handleLength(item.title, 80)}
                                        </Link>
                                      </span>
                                    </div>
                                  </li>
                                );
                              })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-sidebar category-widget">
                  <div className="title">
                    <h3>Kategori</h3>
                    <div id="category" className="category-list">
                      <ListGroup as="ol">
                        {Categories &&
                          Categories.map((value, idx) => {
                            return (
                              // <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={idx}>
                              <a as="li" className="list-group-item  d-flex justify-content-between align-items-start " href="#" key={idx}>
                                <div className="me-auto">{value.nama_kategori}</div>
                                <Badge variant="primary" pill>
                                  {value.artikel_count}
                                </Badge>
                                {/* </ListGroup.Item> */}
                              </a>
                            );
                          })}
                      </ListGroup>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};
