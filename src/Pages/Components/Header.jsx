import { Link } from "react-router-dom";
import "../Components/Header.css";
function Header() {
  return (
    <header style={{ width: "100%" }}>
      <div class="logo">
        <img class="logo-img" src="https://downloader.disk.yandex.ru/preview/316983f474d11db64cba41a46d0e7186f1df1e7f5123595fa35167e1fdfc52f4/656f3584/9zHZpDC65yV6MVCZ3QpCqarClZ0lzo1vJR6jKCU2CDg4jD_lBn06jQiwKCeXBSQhuGS4c74HkWusFC0daZvfTQ%3D%3D?uid=0&filename=LOGO.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1920x931" alt="" />
      </div>
      <div class="button-content">
        <Link to="/">
          <button className="button">Главная</button>
        </Link>
        <Link to="/login">
          <button className="button">Вход</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
