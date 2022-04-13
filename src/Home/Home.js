import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import Button from "react-bootstrap/Button";
import "./Home.css";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

export const Home = (params) => {
  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
  };
  const [DataResponse, setDataResponses] = useState(0);
  const axios = require("axios");

  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/news?instansi_id=3&per_page=2")
      .then(function (response) {
        setDataResponses(response.data.data.data);
        // console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {/* Foto BPBD */}
      <Carousel>
        <Carousel.Item>
          <img className="gambarbpbdlamtim" src="./Image/bpbd.jpg" alt="..."></img>
        </Carousel.Item>
        <Carousel.Item>
          <img className="gambarbpbdlamtim" src="./Image/bpbd2.jpg" alt="..."></img>
        </Carousel.Item>
        <Carousel.Item>
          <img className="gambarbpbdlamtim" src="./Image/bpbd3.jpg" alt="..."></img>
        </Carousel.Item>
      </Carousel>
      {/* Akhir Foto BPBD */}
      {/* Berita */}
      <div className="headerberita">
        <h2>
          Berita <span className="terbaru">Terbaru</span> __
        </h2>
      </div>
      <div className="portalberita row">
        <div className="col-md-8">
          <div className="row">
            {DataResponse &&
              DataResponse.map((item, index) => {
                return (
                  <div className="col-md-6" key={{ index }}>
                    <Card style={{ width: "25rem" }}>
                      <img src={item.image_file_data} alt={item.title}></img>
                      <Card.Body>
                        <Card.Text className="textputingbeliung">{item.created_at} | Berita Terbaru</Card.Text>
                        <Card.Title className="judulputingbeliung">{item.title}</Card.Title>
                        <Card.Text className="textputingbeliung">{item.intro}</Card.Text>
                        <Link variant="light" className="readmore" to={`/news/details/${item.id}`}>
                          Baca Selengkapnya...
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="col-md-4">
          <ListGroup>
            <ListGroup.Item>
              <a className="linkberita" href="/pdf/3-dok-pasca-bencana-tahun-2021">
                <h5 className="headerlg">Dok Pasca Bencana Tahun 2021</h5>
              </a>
              <span className="textlg1">11 Februari 2021</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <a className="linkberita" href="/pdf/3-dok-pasca-bencana-tahun-2020">
                <h5 className="headerlg">Dok Pasca Bencana Tahun 2020</h5>
              </a>
              <span className="textlg2">2 Oktober 2020</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <a className="linkberita" href="/pdf/3-dok-pasca-bencana-tahun-2019">
                <h5 className="headerlg">Dok Pasca Bencana Tahun 2019</h5>
              </a>
              <span className="textlg3">29 Mei 2019</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <a className="linkberita" href="/article/details/3-pengetahuan-tentang-bencana-angin-puting-beliung">
                <h5 className="headerlg">Pengetahuan Bencana Puting Beliung</h5>
              </a>
              <span className="textlg4">11 Februari 2022</span>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      {/* Akhir Berita */}
      {/* Support Us */}
      <div className="supportus">
        <div className="row">
          <div className="col-md-3">
            <a href="https://lapor.iainpare.ac.id/instansi/pemerintah-kabupaten-lampung-timur">
              <img className="logolaporan" src="./Image/logolaporanonlinerakyat.png" alt="..."></img>
            </a>
          </div>
          <div className="col-md-3">
            <a href="https://lampungtimurkab.bps.go.id/">
              <img className="logobadanpusat" src="./Image/logobadanpusatstati.png" alt="..."></img>
            </a>
          </div>
          <div className="col-md-3">
            <a href="https://blc.bersatulawancovid.id/">
              <img className="logolawancovid" src="./Image/logobersatulawancovid.png" alt="..."></img>
            </a>
          </div>
          <div className="col-md-3">
            <a href="http://jdih.lampungtimurkab.go.id/">
              <img className="logojdih" src="./Image/logojdih.png" alt="..."></img>
            </a>
          </div>
        </div>
      </div>
      {/* Akhir Support Us */}
      {/* Info Cuaca, Berita Umum, Kepala Badan */}
      <div className="icbukb">
        <div className="row infocuaca">
          <div className="col-md-4">
            <h4 className="infocuaca_">Info Cuaca __</h4>
            <a className="weatherwidget-io" href="https://forecast7.com/en/n5d11105d69/east-lampung-regency/" data-label_1="LAMPUNG TIMUR" data-label_2="WEATHER" data-theme="original">
              LAMPUNG TIMUR WEATHER
            </a>
            {/* Info Gempa */}
            <div className="infogempa">
              <h4>Info Gempa __</h4>
              <div className="row">
                <div className="col-md-6">
                  <a href="https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg">
                    <Button className="btngempaorange" variant="warning">
                      M≥5.0SR
                    </Button>
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg">
                    <Button className=" btngempaputihorange" variant="outline-warning">
                      Dirasakan
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            {/* Akhir Info Gempa */}
          </div>
          <div className="col-md-6">
            <h4 className="headerberitaumum">Berita Umum __</h4>
            <Card className="beritaumum" style={{ width: "35rem" }}>
              <img className="beritaumumputingbeliung" src="./Image/putingbeliung.jpeg" alt="..."></img>
              <Card.Body>
                <a className="linkberita" href="/news/details/3-verifikasi-lapangan-bencana--angin-puting-beliung">
                  <Card.Title className="titleberitaumum">Verifikasi Lapangan Bencana Angin Puting Beliung</Card.Title>
                </a>
                <Card.Text className="textberitaumum">11 Februari 2022 | Berita Umum</Card.Text>
              </Card.Body>
            </Card>
            <ListGroup className="beritaumumlg">
              <ListGroup.Item>
                <a className="linkberita" href="/news/details/3-kepala-pelaksana-bpbd-kabupaten-lampung-timur">
                  <h5>Kepala Pelaksana BPBD Kabupaten Lampung Timur</h5>
                </a>
                <span>12 Februari 2022 | Berita Umum</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Patroli Terpadu Peningkatan Disiplin dan Prokes</h5>
                <span>13 Februari 2022 | Berita Umum</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>BPBD Lampung Timur Salurkan Bantuan Sembako</h5>
                <span>14 Februari 2022 | Berita Umum</span>
              </ListGroup.Item>
            </ListGroup>
            {/* Pemerintah Kabupaten */}
            <div className="pemerintahkabupaten">
              <h3 className="headerpemkab">
                Pemerintah <span className="kabupaten">Kabupaten</span> __
              </h3>
              <ListGroup className="pemkablg">
                <ListGroup.Item>
                  <h5>Penandatanganan Perjanjian Kerjasama Pendataan</h5>
                  <span>21 Februari 2022 | Dinas Kependudukan dan Catatan Sipil</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Pemkab Lampung Timur Raih Predikat Kepatuhan Tinggi</h5>
                  <span>20 Februari 2022 | Dinas Kependudukan dan Catatan Sipil</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>PKS Pemanfaatan Data Kependudukan Penerbitan Akta</h5>
                  <span>19 Februari 2022 | Dinas Kependudukan dan Catatan Sipil</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Bupati Lampung Timur Menghadiri Acara Pelantikan</h5>
                  <span>18 Februari 2022 | Dinas Kependudukan dan Catatan Sipil</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Workshop Peningkatan Kapasitas Lampung Timur</h5>
                  <span>17 Februari 2022 | Dinas Pertanian</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Pelantikan Ketua Pengadilan Negeri Menggala</h5>
                  <span>16 Februari 2022 | Pemerintah Kabupaten</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Bupati Lampung Timur inginkan Sinergita</h5>
                  <span>15 Februari 2022 | Pemerintah Kabupaten</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Bupati Pimpin Rakor Dengan Para Camat dan Ka. P</h5>
                  <span>14 Februari 2022 | Pemerintah Kabupaten</span>
                </ListGroup.Item>
              </ListGroup>
            </div>
            {/* Akhir Pemerintah Kabupaten */}
          </div>

          <div className="col-md-2">
            <div className="row">
              <div className="col-md-7">
                <span className="kepalabadan">Kepala___</span>
              </div>
              <div className="col-md-5">
                <span className="kepalabadan">Badan</span>
              </div>
            </div>
            <img className="kepalabpbdlamtim" src="./Image/kepalabpbdlamtim.jpg" alt="..."></img>
            <div className="row">
              <div className="col-md-4">
                <p className="namakepalabpbd">Imade</p>
              </div>
              <div className="col-md-4">
                <p className="namakepalabpbd">Ketuta</p>
              </div>
              <div className=" col-md-4">
                <p className="namakepalabpbd">Budiase</p>
              </div>
            </div>
            {/* Pengumuman, Publikasi, Tabel */}
            <div className="pengumuman">
              <ListGroup.Item className="lgpengumuman">
                <h3 className="headerpengumuman">Pengumuman __</h3>
              </ListGroup.Item>
            </div>
            <div className="publikasi">
              <ListGroup.Item className="lgpublikasi">
                <h3 className="headerpublikasi">Publikasi __</h3>
              </ListGroup.Item>
            </div>
            {/* Jumlah Pengunjung */}
            <div className="jumlahpengunjung">
              <ListGroup className="jumlahpengunjunglg">
                <ListGroup.Item className="jmlhpengunjung">
                  <span>--Jumlah Pengunjung--</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="hari">Hari Ini</span>
                    </div>
                    <div className="col-md-6">
                      <span className="angka">1</span>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="minggu">Minggu Ini</span>
                    </div>
                    <div className="col-md-6">
                      <span className="angka">2</span>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="bulan">Bulan Ini</span>
                    </div>
                    <div className="col-md-6">
                      <span className="angkabulan">19</span>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="tahun">Tahun Ini</span>
                    </div>
                    <div className="col-md-6">
                      <span className="angkatahun">46</span>
                    </div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
            <div className="jumlahpengunjung">
              <ListGroup className="jumlahpengunjunglg">
                <ListGroup.Item className="jmlhpengunjung">
                  <span>--Hit Pengunjung--</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="hari">Hari Ini</span>
                    </div>
                    <div className="col-md-6">
                      <span className="angka">8</span>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="minggu">Minggu Ini</span>
                    </div>
                    <div className="col-md-6">
                      <span className="angka">9</span>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="bulan">Bulan Ini</span>
                    </div>
                    <div className="col-md-6">
                      <span className="angkabulan">40</span>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="tahun">Tahun Ini</span>
                    </div>
                    <div className="col-md-6">
                      <span className="angkatahun">95</span>
                    </div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
            {/* Akhir Jumlah Pengunjung */}
            {/* Akhir Pengumuman, Publikasi, Tabel */}
          </div>
        </div>
      </div>
      {/* Akhir Info Cuaca, Berita Umum, Kepala Badan */}
      {/* Gallery Kegiatan */}
      <div className="headergallery">
        <h2>
          Gallery <span className="kegiatan">Kegiatan</span> __
        </h2>
      </div>
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
        </div>
      </div>
      {/* Akhir Gallery Kegiatan */}
    </div>
  );
};
