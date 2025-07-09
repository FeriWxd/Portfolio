import React from "react";
import Title from "../components/Title";
import Swipper from "../components/Swipper";
import Skills from "../components/Skills";
import Footer from "./Footer";
import Marquee from "../components/Marquee";

const HomePage = () => {
  return (
    <>
    <Marquee/>
      <style>{`
        /* Tüm sayfanın tam yüksekliğini ve margin/padding sıfırlama */
        html, body, #root {
          height: 1400px;
          margin: 0;
          padding: 0;
        }
        /* Ana sayfa arka plan ve ortalama stili */

        .homepage {
          background-image: url('http://cdn.prod.website-files.com/67fb46459daf80597440ed56/67fb74a44edb14179b3fb019_Bg%20pattern.avif');
          background-repeat: repeat;
          background-position: center;
          background-size: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }
        /* İçerik kapsayıcı - max genişlik ve ortalanmış */
        .homepage > .content {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }
      `}</style>

      <div className="bigger-container">
        <div className="homepage">
          <div className="content">
            <Title />
          </div>
        </div>

        <div className="swiperContainer">
          <Swipper />
        </div>

        <div className="skills">
          <Skills />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default HomePage;
