const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Montserrat:wght@400;700&display=swap');

        .fnaf-footer {
          background-color: #050000;
          position: relative;
          overflow: hidden;
          border-top: none;
        }

        .checker-footer {
          width: 100%;
          height: 28px;
          background-image: repeating-conic-gradient(#cc0000 0% 25%, #fff 0% 50%);
          background-size: 28px 28px;
        }

        .fnaf-footer::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.2;
          background: #cc0000;
          filter: blur(140px);
          height: 60%;
          width: 50%;
          position: absolute;
          top: 20%;
          left: -25%;
          z-index: 0;
        }

        .footer-inner {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 70px 30px 30px;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.2fr 2fr;
          gap: 80px;
          margin-bottom: 60px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
        }

        .footer-logo-icon {
          width: 52px;
          height: 52px;
          background: #cc0000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
        }

        .footer-logo-name {
          font-family: "Creepster", cursive;
          font-size: 22px;
          color: #fff;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .footer-logo-name span {
          display: block;
          font-family: "Montserrat";
          font-size: 11px;
          font-weight: 400;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 2px;
        }

        .footer-desc {
          font-family: "Montserrat";
          font-size: 14px;
          line-height: 1.9;
          color: #666;
          margin-bottom: 32px;
          max-width: 380px;
        }

        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }

        .footer-col h4 {
          font-family: "Creepster", cursive;
          font-size: 18px;
          color: #cc0000;
          text-transform: uppercase;
          margin: 0 0 20px;
          letter-spacing: 1px;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-col li {
          margin-bottom: 12px;
        }

        .footer-col a {
          font-family: "Montserrat";
          font-size: 13px;
          color: #666;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-col a:hover {
          color: #fff;
        }

        .footer-bottom {
          border-top: 1px solid #1a0000;
          padding-top: 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-copy {
          font-family: "Montserrat";
          font-size: 13px;
          color: #444;
        }

        .footer-copy span {
          color: #cc0000;
        }

        .footer-tagline {
          font-family: "Creepster", cursive;
          font-size: 16px;
          color: #2a0000;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        @media screen and (max-width: 900px) {
          .footer-top { grid-template-columns: 1fr; gap: 40px; }
          .footer-links-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media screen and (max-width: 500px) {
          .footer-links-grid { grid-template-columns: 1fr; }
          .footer-inner { padding: 40px 16px 24px; }
        }
      `}</style>

      <footer className="fnaf-footer">
        <div className="checker-footer" />
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">🐻</div>
                <div className="footer-logo-name">
                  Freddy Fazbear's Pizza
                  <span>Est. 1987 · Horror & Fun</span>
                </div>
              </div>
              <p className="footer-desc">
                Единственное место, где аниматроники выходят на сцену каждые 30 минут,
                а пицца приготовлена с настоящей тёмной страстью. Добро пожаловать в семью Фредди.
              </p>
            </div>

            <div className="footer-links-grid">
              <div className="footer-col">
                <h4>Меню</h4>
                <ul>
                  <li><a href="#">Пиццы</a></li>
                  <li><a href="#">Напитки</a></li>
                  <li><a href="#">Десерты</a></li>
                  <li><a href="#">Детское меню</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Мероприятия</h4>
                <ul>
                  <li><a href="#">Дни рождения</a></li>
                  <li><a href="#">Корпоративы</a></li>
                  <li><a href="#">Квест-вечера</a></li>
                  <li><a href="#">Аренда зала</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>О нас</h4>
                <ul>
                  <li><a href="#">История</a></li>
                  <li><a href="#">Аниматроники</a></li>
                  <li><a href="#">Вакансии</a></li>
                  <li><a href="#">Пресса</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Контакты</h4>
                <ul>
                  <li><a href="#">📍 ул. Фредди, 5</a></li>
                  <li><a href="#">📞 8-800-FREDDY</a></li>
                  <li><a href="#">✉️ pizza@freddy.ru</a></li>
                  <li><a href="#">🕐 Пн–Вс: 11:00–23:00</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copy">
              © 1987–2024 <span>Freddy Fazbear's Pizza</span>. Все права защищены.
            </div>
            <div className="footer-tagline">
              Мы всегда наблюдаем за тобой 👀
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
