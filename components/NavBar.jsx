const React = require("react");

function NavBar({ user }) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/photos">
                Все фотографии
              </a>
            </li>
            {user ? (
              <>
                <li className="nav-item nav-link active">
                  Привет, {user.name}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/api/auth/logout"
                  >
                    Выйти
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Регистрация
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/auth"
                  >
                    Авторизация
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;
