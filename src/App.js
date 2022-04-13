import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./App.css";
import { Home } from "./Home/Home";
import { Gallery } from "./Gallery/Gallery";
import { Navbars } from "./Navbar/Navbar";
import { Artikel } from "./Artikel/Artikel";
import { News } from "./News/News";
import { Contact } from "./Contact/Contact";
import { Dokumen } from "./Dokumen/Dokumen";
import { PdfView } from "./Dokumen/PdfView";
import { DetailNews } from "./News/DetailNews";
import { DetailArtikel } from "./Artikel/DetailArtikel";
import { Staticpage } from "./StaticPage/Staticpage";
import React, { Fragment, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="top-info">
        <div className="header">
          <div className="row">
            <div className="col-md-6">
              <p className="welcome">Selamat Datang | Badan Penanggulangan Bencana Daerah Lampung Timur</p>
            </div>
            <div className="col-md-6 medsos">
              <a href="https://www.instagram.com/bpbdlampungtimur/">
                <i className="instagram fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/groups/752954771849738">
                <i class="facebook fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCsfWr6jEWrJV_OzqkunTqQw/featured">
                <i class="youtube fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Profile BPBD */}
        <div className="profile row">
          <div className="col-md-4">
            <div className="logo">
              <img src="./Image/logobpbd.png" alt="..."></img>
              <span className="keteranganlogo"> BPBD Kab. Lampung Timur</span>
            </div>
          </div>
          <div className="telpon col-md-4">
            <div className="notelp">
              <img src="./Image/logotelepon.png" alt="..."></img>
              <span className="keterangantelp"> Call Us ? 08120000000</span>
            </div>
          </div>
          <div className="mail col-md-4">
            <div className="email">
              <img src="./Image/logoemail.png" alt="..."></img>
              <span className="keteranganemail"> Email Us : email_instansi@mail.com</span>
            </div>
          </div>
        </div>
        {/*Akhir Profile BPBD */}
      </div>
      {/* Navbar */}
      <Navbars />
      {/* Akhir Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="artikel" element={<Artikel />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dokumen" element={<Dokumen />} />
        <Route exact path="/pdf/:id" element={<PdfView />} />
        <Route path="/news/details/:id" element={<DetailNews />} />
        <Route path="/article/details/:id" element={<DetailArtikel />} />
        <Route path="static/:id" element={<Staticpage />} />
      </Routes>
      {/* Pengaduan Masyarakat */}
      <div className="pengaduanmasyarakat">
        <div className="row">
          <div className="col-md-4 pengaduanmasyarakat_">
            <h2>Pengaduan Masyarakat __</h2>
          </div>
          <div className="col-md-4 callus">
            <img className="telponpm" src="./Image/logotelepon.png" alt="..."></img>
            <span className="kettelponpm">Call Us (08120000000)</span>
          </div>
          <div className="col-md-4">
            <img className="emailpm" src="./Image/logoemail.png" alt="..."></img>
            <span className="ketemailpm">Email Us (email_instansi@mail.com)</span>
          </div>
        </div>
      </div>
      {/* Akhir Pengaduan Masyarakat */}
      {/* Tentang Kami, Maps, Buku Tamu */}
      <div className="row">
        <div className="col-md-4">
          <h5 className="tentang">Tentang Kami</h5>
        </div>
        <div className="col-md-4">
          <h5 className="maps">Maps</h5>
          <iframe
            className="lokasi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.357356906315!2d105.52245381412662!3d-5.045679852699176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40909870e6b2bd%3A0x7989854291c04b05!2sBPBD%20Lampung%20Timur!5e0!3m2!1sid!2sid!4v1645604083856!5m2!1sid!2sid"
            width="100%"
            height="250"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="col-md-4">
          <h5 className="bukutamu">Buku Tamu</h5>
          <Form className="form">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="warning" type="submit">
              Send
            </Button>
          </Form>
        </div>
      </div>
      {/* Akhir Tentang Kami, Maps, Buku Tamu */}
      {/* Footer */}
      <footer className="footer">
        <br></br>
        <p>Copyright © 2022 DISKOMINFO | All Rights Reserved</p>
      </footer>
      {/* Akhir Footer */}
    </div>
  );
}

export default App;
