import React from "react";
import axios from "axios";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "./Gallery.css";

export const Gallery = (params) => {
  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
  };
  return (
    <div>
      <h1 className="gallerykegiatan">Gallery Kegiatan</h1>
      <div className="fotogallery row">
        <div className="col-md-4">
          <LightGallery elementClassNames="custom-wrapper-class" onBeforeSlide={onBeforeSlide}>
            <a href={"./Image/kegiatanbpbdkebogor.jpg"}>
              <img className="fotokegiatanbpbd" alt="BPBD pergi ke Bogor" src="./Image/kegiatanbpbdkebogor.jpg" />
            </a>
          </LightGallery>
          <LightGallery elementClassNames="custom-wrapper-class" onBeforeSlide={onBeforeSlide}>
            <a href={"./Image/kegiatanbpbdpelatihan.jpeg"}>
              <img className="fotokegiatanbpbd2" alt="BPBD sedang melaksanakan pelatihan" src="./Image/kegiatanbpbdpelatihan.jpeg" />
            </a>
          </LightGallery>
          <LightGallery elementClassNames="custom-wrapper-class" onBeforeSlide={onBeforeSlide}>
            <a href={"./Image/kegiatanbpbdsar.jpeg"}>
              <img className="fotokegiatanbpbd3" alt="BPBD dan SAR" src="./Image/kegiatanbpbdsar.jpeg" />
            </a>
          </LightGallery>
        </div>
        <div className="col-md-4">
          <LightGallery elementClassNames="custom-wrapper-class" onBeforeSlide={onBeforeSlide}>
            <a href={"./Image/kegiatanbpbdmitigasibencana.jpg"}>
              <img className="fotokegiatanbpbd" alt="BPBD sedang melakukan mitigasi bencana " src="./Image/kegiatanbpbdmitigasibencana.jpg" />
            </a>
          </LightGallery>
          <LightGallery elementClassNames="custom-wrapper-class" onBeforeSlide={onBeforeSlide}>
            <a href={"./Image/kegiatanbpbdpendidikan.jpg"}>
              <img className="fotokegiatanbpbd2" alt="BPBD sedang melakukan pendidikan dan pelatihan" src="./Image/kegiatanbpbdpendidikan.jpg" />
            </a>
          </LightGallery>
          <LightGallery elementClassNames="custom-wrapper-class" onBeforeSlide={onBeforeSlide}>
            <a href={"./Image/kegiatanbpbdsiagabencana.jpg"}>
              <img className="fotokegiatanbpbd3" alt="BPBD sedang berlatih siaga bencana" src="./Image/kegiatanbpbdsiagabencana.jpg" />
            </a>
          </LightGallery>
        </div>
        <div className="col-md-4">
          <LightGallery elementClassNames="custom-wrapper-class" onBeforeSlide={onBeforeSlide}>
            <a href={"./Image/kegiatanbpbdpatuhiprokes.jpg"}>
              <img className="fotokegiatanbpbd" alt="BPBD patuhi protokol kesehatan" src="./Image/kegiatanbpbdpatuhiprokes.jpg" />
            </a>
          </LightGallery>
          <LightGallery elementClassNames="custom-wrapper-class" onBeforeSlide={onBeforeSlide}>
            <a href={"./Image/kegiatanbpbdrehabilitasi.jpg"}>
              <img className="fotokegiatanbpbd2" alt="BPBD sedang rehabilitasi" src="./Image/kegiatanbpbdrehabilitasi.jpg" />
            </a>
          </LightGallery>
          <LightGallery elementClassNames="custom-wrapper-class" onBeforeSlide={onBeforeSlide}>
            <a href={"./Image/kegiatanbpbdjembatanputus.jpg"}>
              <img className="fotokegiatanbpbd3" alt="BPBD sedang mengunjungi lokasi kejadian jembatan putus" src="./Image/kegiatanbpbdjembatanputus.jpg" />
            </a>
          </LightGallery>
        </div>
      </div>
      <div className="videokegiatan">
        <h1 className="video">Video Kegiatan</h1>
        <ul className="gallery">
          <li>
            <a href="https://youtu.be/sYLaUAoG1tA">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/sYLaUAoG1tA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </a>
          </li>
          <li>
            <a href="https://youtu.be/mbCOPtcPlDY">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/mbCOPtcPlDY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </a>
          </li>
          <li>
            <a href="https://youtu.be/BdciuYWIXVo">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/BdciuYWIXVo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </a>
          </li>
        </ul>
        <ul className="gallery">
          <li>
            <a href="https://youtu.be/-ndJiULm02o">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/-ndJiULm02o"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </a>
          </li>
          <li>
            <a href="https://youtu.be/fTgFUkyik98">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/fTgFUkyik98"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </a>
          </li>
          <li>
            <a href="https://youtu.be/Bmc-KNzQzZc">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Bmc-KNzQzZc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
