const React = require("react");
const Layout = require("./Layout");

function PhotoPage({ title, user, photo }) {
  return (
    <Layout title={title} user={user}>
      <div
        data-id={photo.id}
        className="card"
        style={{ width: "30rem", marginTop: "20px", marginLeft: "600px" }}
      >
        <img src={photo.img} class="card-img-top" alt="photo" />
        <div class="card-body">
          <h5 class="card-title">{photo.title}</h5>
          <p>{photo.description}</p>
        </div>
        {user && user.id === photo.user_id && (
          <>
            <h6 style={{ marginLeft: "18px" }}>Ваша карточка</h6>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <a
                href={`/photos/${photo.id}/form-update`}
                className="btn btn-warning btn-update"
              >
                Изменить
              </a>
              <button className="btn btn-danger btn-delete">Удалить</button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

module.exports = PhotoPage;
