const React = require("react");
const Layout = require("./Layout");

function RegisterForm({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="container">
        <h1>Привет любителям фотографий!</h1>
        <h2>Скорее заходи, новый контент уже на сайте!</h2>
        <form id="form-reg">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              ariaDescribedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              ariaDescribedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
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
        <img src="./img/2.JPG" class="card-img-top" alt="photo" />
        <img src="./img/3.JPG" class="card-img-top" alt="photo" />
        <img src="./img/1.JPG" class="card-img-top" alt="photo" />
        <img src="./img/4.JPG" class="card-img-top" alt="photo" />
      </div>
    </Layout>
  );
}

module.exports = RegisterForm;
