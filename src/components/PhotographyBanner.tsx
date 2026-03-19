import type React from "react"
import { useState, useEffect } from "react"

const PhotographyBanner: React.FC = () => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = ["ВЕСЕЛЬЕ.", "ПИЦЦУ.", "ШОУTIME!"]

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 100
    const currentFullText = texts[currentIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Montserrat:wght@400;700&family=Inter:wght@400&display=swap');

        .photography-banner,
        .photography-banner * {
          box-sizing: border-box;
        }

        .photography-banner {
          margin: 0;
          background-color: #0a0000;
          background-image: url("https://cdn.poehali.dev/projects/73aab150-2e47-432a-9a44-caea2536f0c2/files/f39f01ad-c00c-4532-9147-a0d69b2da7f2.jpg");
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: center;
          overflow-x: hidden;
          min-height: 100vh;
          width: 100%;
          position: relative;
        }

        .photography-banner::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.78);
          z-index: 0;
        }

        .photography-banner *::selection {
          background-color: rgba(180, 0, 0, 0.4);
          color: #ffffff;
        }

        /* =================== ШАХМАТНЫЙ УЗОР =================== */
        .checker-bar {
          width: 100%;
          height: 32px;
          background-image: repeating-conic-gradient(#cc0000 0% 25%, #fff 0% 50%);
          background-size: 32px 32px;
          position: relative;
          z-index: 10;
          flex-shrink: 0;
        }

        /* =================== HERO =================== */
        .info-section {
          height: 100vh;
          min-height: 780px;
          padding: 0 0 0 30px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          position: relative;
          z-index: 1;
          user-select: none;
          overflow: hidden;
        }

        .info-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.35;
          background: #cc0000;
          filter: blur(162px);
          height: 35%;
          width: 55%;
          position: absolute;
          top: -40%;
          left: -66%;
          transform: translate(50%, 50%);
          z-index: -1;
        }

        .left-part {
          padding: 20px 0 0;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }

        .fnaf-logo-text {
          font-family: "Creepster", cursive;
          font-size: clamp(14px, 2vw, 22px);
          color: #cc0000;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 10px;
          display: block;
        }

        .left-part h1 {
          margin: 0;
          color: #fff;
          font-family: "Creepster", cursive;
          font-weight: 400;
          font-size: clamp(48px, 12vw, 140px);
          line-height: 0.8;
          font-style: normal;
          text-transform: uppercase;
          text-shadow: 0 0 40px rgba(200,0,0,0.6), 2px 2px 0 #400000;
        }

        .left-part h1 .text {
          color: #ff2222;
          display: block;
          height: clamp(80px, 12vw, 118px);
          text-shadow: 0 0 30px #cc0000;
        }

        .left-part h1 .d-flex {
          display: flex;
          align-items: center;
        }

        .left-part h1 .char {
          transform: translateY(0);
          transition: transform 0.5s;
          animation: slideUp 0.3s ease-out forwards;
        }

        @keyframes slideUp {
          from { transform: translateY(-515px); }
          to { transform: translateY(0); }
        }

        .left-part p {
          width: 72%;
          margin: 20px 0 0;
          color: #ddd;
          font-size: 16px;
          font-style: normal;
          font-weight: normal;
          line-height: 2;
          font-family: "Montserrat";
          opacity: 0.85;
        }

        .book-link {
          margin: 40px 0 0;
          padding: 0;
          border: 0;
          font-size: 40px;
          line-height: 1;
          color: #f1f1f1;
          letter-spacing: 0.25px;
          text-transform: uppercase;
          font-family: "Montserrat";
          font-weight: 700;
          font-style: normal;
          display: inline-flex;
          align-items: center;
          gap: 28px;
          position: relative;
          text-decoration: none;
          cursor: pointer;
        }

        .book-link .linktext {
          position: relative;
          overflow: hidden;
          display: inline-block;
        }

        .book-link .linktext::before {
          position: absolute;
          content: "";
          left: 0;
          bottom: 6px;
          width: 100%;
          height: 3px;
          background-color: #cc0000;
          transform: scaleX(1);
          transition: transform 250ms ease-in-out;
          transform-origin: 0 0;
        }

        .book-link:hover .linktext:before {
          transform: scaleX(0);
          transform-origin: 100% 100%;
        }

        .book-link .arrow {
          height: 36px;
          width: 36px;
          top: -5px;
          display: inline-block;
          position: relative;
          overflow: hidden;
        }

        .book-link .arrow::before,
        .book-link .arrow::after {
          position: absolute;
          content: "";
          background-color: #cc0000;
          transition: all ease-in-out 0.35s;
          transform-origin: 0 0;
          border-radius: 30px;
        }

        .book-link .arrow::before {
          height: 2px;
          width: 100%;
          top: 0;
          right: 0;
        }

        .book-link .arrow::after {
          width: 2px;
          height: 100%;
          top: 0;
          right: 0;
        }

        .book-link:hover .arrow::before { width: 65%; }
        .book-link:hover .arrow::after { height: 65%; }

        .book-link .arrow span {
          background-color: #cc0000;
          height: 2px;
          width: 100%;
          display: inline-block;
          transform: rotate(-45deg) translate(-3px, -1px);
          transform-origin: right top;
          border-radius: 30px;
          position: absolute;
          top: 0;
          left: 0;
        }

        .book-link .arrow span::before {
          background-color: #cc0000;
          content: "";
          height: 100%;
          width: 15px;
          left: -15px;
          top: 0;
          position: absolute;
        }

        .right-part {
          background-color: transparent;
          height: 520px;
          width: 520px;
          margin: 0 0 0 auto;
          margin-right: -14px;
          display: block;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }

        .right-part::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.35;
          background: #cc0000;
          filter: blur(112px);
          height: 35%;
          width: 55%;
          position: absolute;
          top: 50%;
          right: 33%;
          transform: translate(50%, -50%);
          z-index: -1;
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .particle {
          position: absolute;
          background: rgba(200, 0, 0, 0.5);
          border-radius: 50%;
          pointer-events: none;
          animation: float linear infinite;
        }

        .particle:nth-child(odd) {
          background: rgba(255, 100, 0, 0.3);
        }

        .particle:nth-child(3n) {
          background: rgba(255, 255, 255, 0.15);
        }

        @keyframes float {
          0% { transform: translateX(-100px) translateY(0px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(calc(100vw + 100px)) translateY(-100px) rotate(360deg); opacity: 0; }
        }

        .bg-line {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 85px;
          z-index: -1;
          overflow: hidden;
          display: flex;
          white-space: nowrap;
        }

        .bg-line img {
          position: relative;
          flex-shrink: 0;
          animation: 26s linear infinite;
          filter: hue-rotate(330deg) saturate(3) brightness(0.8);
        }

        .bg-line img:nth-child(1) { animation-name: first-text; }
        .bg-line img:nth-child(2) { animation-name: second-text; }

        @keyframes first-text {
          50% { transform: translateX(-100%); opacity: 1; }
          50.05% { opacity: 0; }
          50.1% { transform: translateX(100%); opacity: 1; }
          100% { transform: translateX(0%); }
        }

        @keyframes second-text {
          50% { transform: translateX(-100%); }
          100% { transform: translateX(-200%); }
          0% { transform: translateX(0%); }
        }

        .bg-dash-circle {
          position: absolute;
          bottom: -35px;
          right: -13px;
          z-index: -1;
          width: 180px;
          aspect-ratio: 1/1;
        }

        .bg-dash-circle img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          animation: circle-rotate 18s linear infinite;
          filter: hue-rotate(330deg) saturate(3) brightness(0.8);
        }

        @keyframes circle-rotate {
          0% { transform: rotate(0); }
          100% { transform: rotate(360deg); }
        }

        /* =================== СЛАЙД 2: АУДИТОРИЯ =================== */
        .audience-section {
          padding: 100px 30px;
          background-color: #0d0000;
          position: relative;
          overflow: hidden;
        }

        .audience-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.25;
          background: #cc0000;
          filter: blur(140px);
          height: 40%;
          width: 40%;
          position: absolute;
          top: 20%;
          right: -20%;
          z-index: 0;
        }

        .section-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .section-label {
          font-family: "Creepster", cursive;
          font-size: 16px;
          color: #cc0000;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: block;
        }

        .section-title {
          color: #fff;
          font-family: "Creepster", cursive;
          font-weight: 400;
          font-size: clamp(48px, 7vw, 100px);
          line-height: 0.9;
          margin: 0 0 60px;
          text-transform: uppercase;
          text-shadow: 0 0 40px rgba(200,0,0,0.4);
        }

        .section-title .highlight { color: #ff2222; }

        .audience-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .audience-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid #330000;
          border-radius: 16px;
          padding: 40px 30px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .audience-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 4px; height: 100%;
          background: #cc0000;
          border-radius: 4px 0 0 4px;
        }

        .audience-card:hover {
          border-color: #cc0000;
          transform: translateY(-4px);
          background: rgba(200,0,0,0.06);
        }

        .audience-emoji {
          font-size: 48px;
          margin-bottom: 20px;
          display: block;
        }

        .audience-card h3 {
          font-family: "Creepster", cursive;
          font-size: 26px;
          color: #ff2222;
          margin: 0 0 12px;
          text-transform: uppercase;
        }

        .audience-card p {
          font-family: "Montserrat";
          font-size: 14px;
          color: #aaa;
          line-height: 1.8;
          margin: 0;
        }

        /* =================== СЛАЙД 3: МЕНЮ (ПИЦЦЫ) =================== */
        .menu-section {
          padding: 100px 30px;
          background-color: #080808;
          position: relative;
          overflow: hidden;
        }

        .checker-divider {
          width: 100%;
          height: 24px;
          background-image: repeating-conic-gradient(#cc0000 0% 25%, #fff 0% 50%);
          background-size: 24px 24px;
          position: relative;
          z-index: 10;
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 20px;
        }

        .menu-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid #2a0000;
          border-radius: 20px;
          padding: 35px 30px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .menu-card::after {
          content: "";
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #cc0000, transparent);
        }

        .menu-card:hover {
          border-color: #cc0000;
          transform: translateY(-5px);
          background: rgba(200,0,0,0.05);
          box-shadow: 0 20px 60px rgba(200,0,0,0.15);
        }

        .pizza-icon {
          font-size: 52px;
          margin-bottom: 16px;
          display: block;
        }

        .menu-card h3 {
          font-family: "Creepster", cursive;
          font-size: 28px;
          color: #fff;
          margin: 0 0 8px;
          text-transform: uppercase;
        }

        .menu-card .price {
          font-family: "Montserrat";
          font-size: 22px;
          font-weight: 700;
          color: #cc0000;
          margin: 0 0 12px;
        }

        .menu-card p {
          font-family: "Montserrat";
          font-size: 13px;
          color: #888;
          line-height: 1.7;
          margin: 0;
        }

        /* =================== СЛАЙД 4: ДОП ТОВАРЫ =================== */
        .extras-section {
          padding: 100px 30px;
          background-color: #0d0000;
          position: relative;
          overflow: hidden;
        }

        .extras-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          margin-top: 20px;
        }

        .extra-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid #2a0000;
          border-radius: 16px;
          padding: 30px 24px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .extra-card:hover {
          border-color: #cc0000;
          background: rgba(200,0,0,0.06);
          transform: scale(1.03);
        }

        .extra-emoji {
          font-size: 40px;
          margin-bottom: 14px;
          display: block;
        }

        .extra-card h3 {
          font-family: "Creepster", cursive;
          font-size: 22px;
          color: #ff2222;
          margin: 0 0 8px;
          text-transform: uppercase;
        }

        .extra-card p {
          font-family: "Montserrat";
          font-size: 13px;
          color: #888;
          line-height: 1.6;
          margin: 0 0 10px;
        }

        .extra-price {
          font-family: "Montserrat";
          font-size: 18px;
          font-weight: 700;
          color: #cc0000;
        }

        /* =================== СЛАЙД 5: АТМОСФЕРА =================== */
        .atmosphere-section {
          padding: 100px 30px;
          background-color: #060000;
          position: relative;
          overflow: hidden;
        }

        .atmosphere-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          align-items: center;
          margin-top: 20px;
        }

        .atmo-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .atmo-item {
          padding: 28px 0;
          border-bottom: 1px solid #1a0000;
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .atmo-num {
          width: 54px;
          height: 54px;
          background: #cc0000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Creepster", cursive;
          font-size: 22px;
          color: #fff;
          flex-shrink: 0;
        }

        .atmo-item h3 {
          font-family: "Creepster", cursive;
          font-size: 22px;
          color: #fff;
          margin: 0 0 6px;
          text-transform: uppercase;
        }

        .atmo-item p {
          font-family: "Montserrat";
          font-size: 13px;
          color: #888;
          margin: 0;
          line-height: 1.6;
        }

        .atmo-image-block {
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          border: 2px solid #330000;
          box-shadow: 0 0 60px rgba(200,0,0,0.2);
        }

        .atmo-image-block img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.7) saturate(0.8);
        }

        .atmo-image-block::after {
          content: "ОСТОРОЖНО: ОНИ ХОДЯТ";
          position: absolute;
          bottom: 20px; left: 20px;
          font-family: "Creepster", cursive;
          font-size: 18px;
          color: #ff2222;
          letter-spacing: 2px;
          text-shadow: 0 0 10px #cc0000;
        }

        /* =================== СЛАЙД 6: СПРОС (REVIEWS) =================== */
        .demand-section {
          padding: 100px 30px;
          background-color: #0a0000;
          position: relative;
          overflow: hidden;
        }

        .demand-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #cc0000;
          filter: blur(120px);
          height: 50%;
          width: 30%;
          position: absolute;
          top: 50%;
          left: -15%;
          transform: translateY(-50%);
          z-index: 0;
        }

        .demand-marquee-wrap {
          overflow: hidden;
        }

        .demand-marquee {
          display: flex;
          animation: scroll 30s linear infinite;
          gap: 30px;
          width: max-content;
        }

        .demand-marquee:hover { animation-play-state: paused; }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .review-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid #2a0000;
          border-radius: 20px;
          padding: 36px 28px;
          width: 360px;
          flex-shrink: 0;
          position: relative;
        }

        .review-card::before {
          content: '"';
          font-family: "Creepster", cursive;
          font-size: 80px;
          color: #cc0000;
          position: absolute;
          top: 10px; left: 20px;
          line-height: 1;
          opacity: 0.5;
        }

        .review-text {
          font-family: "Montserrat";
          font-size: 14px;
          color: #ccc;
          line-height: 1.8;
          margin: 0 0 24px;
          padding-top: 20px;
        }

        .review-author {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .review-avatar {
          width: 44px;
          height: 44px;
          background: #cc0000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Creepster", cursive;
          font-size: 16px;
          color: #fff;
          flex-shrink: 0;
        }

        .review-author h4 {
          font-family: "Montserrat";
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 2px;
        }

        .review-author p {
          font-family: "Montserrat";
          font-size: 12px;
          color: #666;
          margin: 0;
        }

        .stars {
          color: #cc0000;
          font-size: 14px;
          margin-bottom: 6px;
        }

        /* =================== СЛАЙД 7: CTA =================== */
        .cta-section {
          padding: 120px 30px;
          background-color: #060000;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .cta-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.5;
          background: #cc0000;
          filter: blur(180px);
          height: 60%;
          width: 80%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .cta-container {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .cta-eyebrow {
          font-family: "Creepster", cursive;
          font-size: 18px;
          color: #cc0000;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: block;
        }

        .cta-title {
          color: #fff;
          font-family: "Creepster", cursive;
          font-weight: 400;
          font-size: clamp(60px, 11vw, 140px);
          line-height: 0.85;
          margin: 0 0 30px;
          text-transform: uppercase;
          text-shadow: 0 0 60px rgba(200,0,0,0.6);
        }

        .cta-subtitle {
          color: #aaa;
          font-family: "Montserrat";
          font-size: 18px;
          line-height: 1.8;
          margin: 0 auto 50px;
          max-width: 560px;
        }

        .cta-buttons {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 18px 44px;
          background: #cc0000;
          color: #fff;
          text-decoration: none;
          font-family: "Montserrat";
          font-size: 15px;
          font-weight: 700;
          text-transform: uppercase;
          border-radius: 50px;
          transition: all 0.3s ease;
          border: 2px solid #cc0000;
          letter-spacing: 1px;
        }

        .cta-button:hover {
          background: transparent;
          color: #cc0000;
        }

        .cta-button.secondary {
          background: transparent;
          color: #fff;
          border: 2px solid #444;
        }

        .cta-button.secondary:hover {
          border-color: #cc0000;
          color: #cc0000;
        }

        /* =================== МЕДИА =================== */
        @media screen and (min-width: 1500px) { .info-section { padding-left: 120px; } }
        @media screen and (min-width: 1400px) { .info-section { padding-left: 100px; } }

        @media screen and (max-width: 1199px) {
          .right-part { height: 380px; width: 380px; }
          .bg-dash-circle { width: 130px; }
        }

        @media screen and (max-width: 767px) {
          .photography-banner { overflow-x: hidden; }
          .info-section { display: block; padding: 0; overflow: visible; min-height: auto; height: auto; }
          .left-part { padding: 40px 16px 60px; overflow: visible; }
          .right-part { height: 280px; width: 280px; margin: 0 auto; }
          .left-part h1 .text { height: 78px; }
          .left-part p { font-size: 13px; width: 96%; }
          .bg-dash-circle { width: 80px; }
          .audience-section, .menu-section, .extras-section, .atmosphere-section, .demand-section, .cta-section {
            padding: 60px 16px;
          }
          .audience-grid, .menu-grid, .extras-grid { grid-template-columns: 1fr; }
          .atmosphere-grid { grid-template-columns: 1fr; }
          .cta-buttons { flex-direction: column; align-items: center; }
          .cta-button { width: 100%; max-width: 300px; }
        }
      `}</style>

      <div className="photography-banner">
        {/* Шахматная полоска сверху */}
        <div className="checker-bar" />

        <main>
          {/* СЛАЙД 1: HERO */}
          <section className="info-section">
            <div className="left-part">
              <span className="fnaf-logo-text">★ Freddy Fazbear's Pizza ★</span>
              <h1>
                <span className="d-flex">
                  {["М", "Ы", " ", "Д", "А", "Ё", "М"].map((char, index) => (
                    <span key={index} className="char tracking-tighter" style={{ animationDelay: `${index * 0.08}s` }}>
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
                <span className="text tracking-tighter">{currentText}</span>
              </h1>
              <p className="tracking-wider">
                Единственное место, где детство встречается с незабываемым ужасом.
                Пицца, шоу аниматроников и атмосфера, которую ты не забудешь… никогда.
              </p>
              <a href="#menu" className="book-link">
                <span className="linktext tracking-tighter text-3xl">Посмотреть меню</span>
                <span className="arrow">
                  <span></span>
                </span>
              </a>
            </div>
            <div className="right-part">
              <div className="particles-container">
                {Array.from({ length: 20 }, (_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{
                      width: `${Math.random() * 8 + 4}px`,
                      height: `${Math.random() * 8 + 4}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDuration: `${Math.random() * 20 + 15}s`,
                      animationDelay: `${Math.random() * 10}s`,
                    }}
                  />
                ))}
              </div>
              <div className="bg-line">
                <img src="https://www.yudiz.com/codepen/photography-banner/wave.svg" alt="Line" />
                <img src="https://www.yudiz.com/codepen/photography-banner/wave.svg" alt="Line" />
              </div>
              <div className="bg-dash-circle">
                <img src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg" alt="dash-circle" />
              </div>
            </div>
          </section>

          {/* Шахматный разделитель */}
          <div className="checker-divider" />

          {/* СЛАЙД 2: ЦЕЛЕВАЯ АУДИТОРИЯ */}
          <section className="audience-section">
            <div className="section-container">
              <span className="section-label">Слайд 02 — Аудитория</span>
              <h2 className="section-title">Кто <span className="highlight">приходит</span> к нам?</h2>
              <div className="audience-grid">
                <div className="audience-card">
                  <span className="audience-emoji">👧🧒</span>
                  <h3>Дети 6–12 лет</h3>
                  <p>Главные герои вечеринок. Приходят ради шоу аниматроников, игровых зон и именинных тортов. Именно они уговаривают родителей вернуться снова.</p>
                </div>
                <div className="audience-card">
                  <span className="audience-emoji">👨‍👩‍👧</span>
                  <h3>Семьи с детьми</h3>
                  <p>Родители, ищущие место для детского праздника. Ценят безопасность, вкусную еду и возможность отдохнуть, пока дети развлекаются на шоу.</p>
                </div>
                <div className="audience-card">
                  <span className="audience-emoji">🎮</span>
                  <h3>Фанаты FNAF</h3>
                  <p>Подростки и взрослые, выросшие на игре. Приходят за ностальгией, мерчем и фото с культовыми персонажами. Активны в соцсетях.</p>
                </div>
                <div className="audience-card">
                  <span className="audience-emoji">🎂</span>
                  <h3>Организаторы событий</h3>
                  <p>Планируют корпоративы, квесты и тематические вечеринки. Заинтересованы в аренде зала и уникальной атмосфере для запоминающегося события.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Шахматный разделитель */}
          <div className="checker-divider" />

          {/* СЛАЙД 3: МЕНЮ — ПИЦЦЫ */}
          <section className="menu-section" id="menu">
            <div className="section-container">
              <span className="section-label">Слайд 03 — Меню</span>
              <h2 className="section-title">Наши <span className="highlight">пиццы</span></h2>
              <div className="menu-grid">
                <div className="menu-card">
                  <span className="pizza-icon">🍕</span>
                  <h3>«Фредди Спешиал»</h3>
                  <div className="price">490 ₽</div>
                  <p>Фирменный соус, двойной сыр, бекон, карамелизованный лук и чеснок. Хит продаж — любимица именинников.</p>
                </div>
                <div className="menu-card">
                  <span className="pizza-icon">🎸</span>
                  <h3>«Рок Бонни»</h3>
                  <div className="price">450 ₽</div>
                  <p>Острая пепперони, перец халапеньо, томатный соус и рикотта. Для тех, кто любит погорячее.</p>
                </div>
                <div className="menu-card">
                  <span className="pizza-icon">🐔</span>
                  <h3>«Чика Делюкс»</h3>
                  <div className="price">470 ₽</div>
                  <p>Куриное филе, моцарелла, сладкий перец, кукуруза и соус барбекю. Нежная и сытная.</p>
                </div>
                <div className="menu-card">
                  <span className="pizza-icon">🦊</span>
                  <h3>«Кракен Фокси»</h3>
                  <div className="price">530 ₽</div>
                  <p>Морепродукты, сливочный соус, тигровые креветки, осьминог и зелёный лук. Пиратский выбор.</p>
                </div>
                <div className="menu-card">
                  <span className="pizza-icon">🌙</span>
                  <h3>«Ночная Смена»</h3>
                  <div className="price">410 ₽</div>
                  <p>Четыре сыра, трюфельное масло и розмарин. Минималистичная, но невероятно вкусная классика.</p>
                </div>
                <div className="menu-card">
                  <span className="pizza-icon">🎉</span>
                  <h3>«Вечеринка Фанни»</h3>
                  <div className="price">390 ₽</div>
                  <p>Для детей: томатный соус, моцарелла, кукуруза и мини-сосиски. С рисунком аниматроника из соуса.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Шахматный разделитель */}
          <div className="checker-divider" />

          {/* СЛАЙД 4: ДОПОЛНИТЕЛЬНЫЕ ТОВАРЫ */}
          <section className="extras-section">
            <div className="section-container">
              <span className="section-label">Слайд 04 — Дополнения к меню</span>
              <h2 className="section-title">Больше, чем <span className="highlight">пицца</span></h2>
              <div className="extras-grid">
                <div className="extra-card">
                  <span className="extra-emoji">🥤</span>
                  <h3>Напитки</h3>
                  <p>Газировка, лимонады, молочные коктейли с тематическими названиями персонажей</p>
                  <div className="extra-price">от 90 ₽</div>
                </div>
                <div className="extra-card">
                  <span className="extra-emoji">🍟</span>
                  <h3>Картофель фри</h3>
                  <p>Классика, сырный, острый — три вида. Идеально к пицце и шоу на сцене</p>
                  <div className="extra-price">от 120 ₽</div>
                </div>
                <div className="extra-card">
                  <span className="extra-emoji">🎂</span>
                  <h3>Торты на заказ</h3>
                  <p>Тематические торты с аниматрониками. Доступны с предзаказом за 2 дня</p>
                  <div className="extra-price">от 1 200 ₽</div>
                </div>
                <div className="extra-card">
                  <span className="extra-emoji">🧸</span>
                  <h3>Мерч и игрушки</h3>
                  <p>Плюшевые Фредди, Бонни, Чика и Фокси. Постеры, кружки, значки и стикеры</p>
                  <div className="extra-price">от 250 ₽</div>
                </div>
                <div className="extra-card">
                  <span className="extra-emoji">🎮</span>
                  <h3>Игровые токены</h3>
                  <p>Жетоны на аркадные автоматы в игровой зоне. Призы за набранные очки</p>
                  <div className="extra-price">10 шт — 100 ₽</div>
                </div>
                <div className="extra-card">
                  <span className="extra-emoji">📸</span>
                  <h3>Фото с аниматроником</h3>
                  <p>Профессиональное фото с персонажем на память. Распечатка на месте</p>
                  <div className="extra-price">от 200 ₽</div>
                </div>
                <div className="extra-card">
                  <span className="extra-emoji">🍪</span>
                  <h3>Десерты</h3>
                  <p>Пончики, кексы и печенье с символикой заведения. Чики и Фредди в каждом укусе</p>
                  <div className="extra-price">от 80 ₽</div>
                </div>
                <div className="extra-card">
                  <span className="extra-emoji">🎁</span>
                  <h3>Вечеринка «под ключ»</h3>
                  <p>Аренда зала + декор + шоу + меню + торт. Полный пакет для незабываемого дня рождения</p>
                  <div className="extra-price">от 5 000 ₽</div>
                </div>
              </div>
            </div>
          </section>

          {/* Шахматный разделитель */}
          <div className="checker-divider" />

          {/* СЛАЙД 5: АТМОСФЕРА */}
          <section className="atmosphere-section">
            <div className="section-container">
              <span className="section-label">Слайд 05 — Дизайн и атмосфера</span>
              <h2 className="section-title">Атмосфера <span className="highlight">ужаса</span><br />и веселья</h2>
              <div className="atmosphere-grid">
                <ul className="atmo-list">
                  <li className="atmo-item">
                    <div className="atmo-num">01</div>
                    <div>
                      <h3>Шахматный пол</h3>
                      <p>Классический красно-белый рисунок пола — визитная карточка заведения. Создаёт ностальгическую атмосферу 80-х.</p>
                    </div>
                  </li>
                  <li className="atmo-item">
                    <div className="atmo-num">02</div>
                    <div>
                      <h3>Сцена аниматроников</h3>
                      <p>Главная сцена с живыми выступлениями Фредди, Бонни и Чики. Шоу каждые 30 минут — незабываемое зрелище.</p>
                    </div>
                  </li>
                  <li className="atmo-item">
                    <div className="atmo-num">03</div>
                    <div>
                      <h3>Приглушённое освещение</h3>
                      <p>Тёмные углы, мерцающие неоновые вывески и прожекторы на сцене. Таинственно и захватывающе.</p>
                    </div>
                  </li>
                  <li className="atmo-item">
                    <div className="atmo-num">04</div>
                    <div>
                      <h3>Декор из ретро-элементов</h3>
                      <p>Постеры, флажки, воздушные шары и тематические таблички. Интерьер как в 1987 году.</p>
                    </div>
                  </li>
                  <li className="atmo-item">
                    <div className="atmo-num">05</div>
                    <div>
                      <h3>Звуковые эффекты</h3>
                      <p>Музыка из игры, голоса персонажей и фирменные звуки. Погружение с первых секунд.</p>
                    </div>
                  </li>
                </ul>
                <div className="atmo-image-block">
                  <img
                    src="https://cdn.poehali.dev/projects/73aab150-2e47-432a-9a44-caea2536f0c2/files/f39f01ad-c00c-4532-9147-a0d69b2da7f2.jpg"
                    alt="Атмосфера пиццерии"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Шахматный разделитель */}
          <div className="checker-divider" />

          {/* СЛАЙД 6: СПРОС — ОТЗЫВЫ */}
          <section className="demand-section">
            <div className="section-container">
              <span className="section-label">Слайд 06 — Почему будет спрос</span>
              <h2 className="section-title" style={{ textAlign: "center", marginBottom: "60px" }}>
                Что говорят <span className="highlight">гости</span>
              </h2>
            </div>
            <div className="demand-marquee-wrap">
              <div className="demand-marquee">
                {[
                  { name: "Алёна М.", role: "Мама двух детей", text: "Мы были на дне рождения дочки — дети визжали от восторга во время шоу! Пицца тоже невероятно вкусная, заберите наши деньги ещё раз!", initials: "АМ" },
                  { name: "Игорь Р.", role: "Фанат FNAF с 2014 года", text: "Наконец-то настоящая пиццерия Фреди! Атмосфера — 10/10. Стоял в очереди за мерчем полчаса и ни капли не пожалел.", initials: "ИР" },
                  { name: "Семья Ковалёвых", role: "Постоянные посетители", text: "Ходим каждый месяц. Сын обожает аниматроников, муж влюблён в пиццу «Ночная Смена». Место стало нашим семейным ритуалом!", initials: "СК" },
                  { name: "Маша Т.", role: "Event-менеджер", text: "Организовывала корпоратив в стиле FNAF — ребята из команды заведения сделали всё идеально. Отдельное спасибо за торт!", initials: "МТ" },
                  { name: "Антон Ф.", role: "Блогер / YouTuber", text: "Снял видео о посещении — набрало 200к просмотров за неделю. Место само по себе контент. Это лучший маркетинг.", initials: "АФ" },
                  { name: "Дима В.", role: "Папа именинника", text: "Сын попросил провести день рождения здесь третий год подряд. Это говорит само за себя. Обожаем это место!", initials: "ДВ" },
                  { name: "Алёна М.", role: "Мама двух детей", text: "Мы были на дне рождения дочки — дети визжали от восторга во время шоу! Пицца тоже невероятно вкусная, заберите наши деньги ещё раз!", initials: "АМ" },
                  { name: "Игорь Р.", role: "Фанат FNAF с 2014 года", text: "Наконец-то настоящая пиццерия Фреди! Атмосфера — 10/10. Стоял в очереди за мерчем полчаса и ни капли не пожалел.", initials: "ИР" },
                  { name: "Семья Ковалёвых", role: "Постоянные посетители", text: "Ходим каждый месяц. Сын обожает аниматроников, муж влюблён в пиццу «Ночная Смена». Место стало нашим семейным ритуалом!", initials: "СК" },
                  { name: "Маша Т.", role: "Event-менеджер", text: "Организовывала корпоратив в стиле FNAF — ребята из команды заведения сделали всё идеально. Отдельное спасибо за торт!", initials: "МТ" },
                  { name: "Антон Ф.", role: "Блогер / YouTuber", text: "Снял видео о посещении — набрало 200к просмотров за неделю. Место само по себе контент. Это лучший маркетинг.", initials: "АФ" },
                  { name: "Дима В.", role: "Папа именинника", text: "Сын попросил провести день рождения здесь третий год подряд. Это говорит само за себя. Обожаем это место!", initials: "ДВ" },
                ].map((review, i) => (
                  <div key={i} className="review-card">
                    <div className="stars">★★★★★</div>
                    <p className="review-text">"{review.text}"</p>
                    <div className="review-author">
                      <div className="review-avatar">{review.initials}</div>
                      <div>
                        <h4>{review.name}</h4>
                        <p>{review.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Шахматный разделитель */}
          <div className="checker-divider" />

          {/* СЛАЙД 7: CTA */}
          <section className="cta-section" id="cta">
            <div className="cta-container">
              <span className="cta-eyebrow">★ Freddy Fazbear's Pizza ★</span>
              <h2 className="cta-title">
                Добро<br />пожаловать.
              </h2>
              <p className="cta-subtitle">
                Если ты читаешь это — ты уже почти здесь. Забронируй столик или вечеринку прямо сейчас. Аниматроники ждут.
              </p>
              <div className="cta-buttons">
                <a href="#" className="cta-button">Забронировать столик</a>
                <a href="#menu" className="cta-button secondary">Посмотреть меню</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default PhotographyBanner
