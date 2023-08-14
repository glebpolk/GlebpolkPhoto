const React = require("react");
const Layout = require("./Layout");

function AuthorizationPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="container">
        <form id="form-log" className="put">
          <h1>Доброго дня, пожалуйста авторизируйтесь.</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <h3 style={{ color: "red" }} className="error"></h3>
      </div>
      <div
        className="card"
        style={{
          width: "18rem",
          marginLeft: "260px",
          marginTop: "20px",
          display: "flex",
          flexDirection: "row",
          gap: "10px",
        }}
        class="card-img-top"
        alt="photo"
      >
        <img src="./img/1.JPG" class="card-img-top" alt="photo" />
        <img src="./img/2.JPG" class="card-img-top" alt="photo" />
        <img src="./img/3.JPG" class="card-img-top" alt="photo" />
        <img src="./img/4.JPG" class="card-img-top" alt="photo" />
      </div>
    </Layout>
  );
}

module.exports = AuthorizationPage;
