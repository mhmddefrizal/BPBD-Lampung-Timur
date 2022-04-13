import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import React, { Fragment, useState, useEffect } from "react";
export const Navbars = (params) => {
  const [DataResponse, setDataResponses] = useState(0);
  const axios = require("axios");

  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/menus?instansi_id=3")
      .then(function (response) {
        setDataResponses(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <Navbar className="nav" bg="warning" variant="light" expand="lg" collapseOnSelect>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto justify-content">
          {DataResponse &&
            DataResponse.map((m, i) => {
              console.log("DataResponse22", DataResponse);
              return (
                <Fragment key={m.id}>
                  {m.children.length > 0 ? (
                    <NavDropdown className="f-size" title={m.name} key={i} id="basic-nav-dropdown">
                      {m.children &&
                        m.children.map((h, k) => {
                          return (
                            <Fragment key={h.id}>
                              {h.children.length > 0 ? (
                                <NavDropdown className="f-size" title={h.name} key={k} id="basic-nav-dropdown">
                                  {h.children &&
                                    h.children.map((j, l) => {
                                      return (
                                        <Fragment key={j.id}>
                                          {j.children.length > 0 ? (
                                            <NavDropdown className="f-size" title={j.name} key={l} id="basic-nav-dropdown">
                                              {j.children &&
                                                j.children.map((k, l) => {
                                                  return (
                                                    <NavDropdown.Item className="f-size" key={k.id} as={Link} to={k.url}>
                                                      {k.name}
                                                    </NavDropdown.Item>
                                                  );
                                                })}
                                            </NavDropdown>
                                          ) : j.static_page != null ? (
                                            <Nav.Link className="f-size" as={Link} key={j.id} to={`/static/${j.static_page}`}>
                                              {j.name}
                                            </Nav.Link>
                                          ) : (
                                            <Nav.Link className="f-size" as={Link} key={j.id} to={j.url}>
                                              {j.name}
                                            </Nav.Link>
                                          )}
                                        </Fragment>
                                      );
                                    })}
                                </NavDropdown>
                              ) : h.static_page != null ? (
                                <Nav.Link className="f-size" as={Link} key={h.id} to={`/static/${h.static_page}`}>
                                  {h.name}
                                </Nav.Link>
                              ) : (
                                <Nav.Link className="f-size" as={Link} key={h.id} to={h.url}>
                                  {h.name}
                                </Nav.Link>
                              )}
                            </Fragment>
                          );
                        })}
                    </NavDropdown>
                  ) : m.static_page != null ? (
                    <Nav.Link className="f-size" as={Link} key={m.id} to={`/static/${m.static_page}`}>
                      {m.name}
                    </Nav.Link>
                  ) : (
                    <Nav.Link className="f-size" as={Link} key={m.id} to={m.url}>
                      {m.name}
                    </Nav.Link>
                  )}
                </Fragment>
              );
            })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
