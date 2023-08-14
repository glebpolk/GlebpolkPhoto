const React = require("react");
const NavBar = require("./NavBar");

function Layout({ title, children, user }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="./styles/style.css" />
        <script defer src="/scripts/reg.js" />
        <script defer src="/scripts/update.js" />
        <script defer src="/scripts/log.js" />
        <script defer src="/scripts/add.js" />
        <script defer src="/scripts/delete.js" />
      </head>
      <body>
        <NavBar user={user} />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
