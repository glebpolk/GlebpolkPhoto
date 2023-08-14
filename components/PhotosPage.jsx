const React = require("react");
const Layout = require("./Layout");
const PhotoItem = require("./PhotoItem");

function PhotoPage({ title, photos, user }) {
  return (
    <Layout title={title} user={user}>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Все фотографии
      </h1>
      <div
        className="container cardsList"
        style={{ display: "flex", flexWrap: "wrap", width: "700px" }}
      >
        {photos.map((photo) => (
          <PhotoItem photo={photo} user={user} />
        ))}
      </div>
      <div className="container">
        <form id="form-add" enctype="multipart/form-data">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
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
              name="description"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              ariaDescribedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Photo
            </label>
            <input
              name="file"
              type="file"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = PhotoPage;
