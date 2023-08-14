const React = require("react");
const Layout = require("./Layout");

function UpdatePage({ title, user, photo }) {
  return (
    <Layout title={title} user={user}>
      <div className="container">
        <form data-id={photo.id} id="form-update">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              value={photo.title}
              name="title"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              ariaDescribedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Description
            </label>
            <input
              value={photo.description}
              name="description"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              ariaDescribedby="emailHelp"
            />
          </div>
          {/* <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Photo
            </label>
            <input
              value={photo.img}
              name="img"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div> */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = UpdatePage;
