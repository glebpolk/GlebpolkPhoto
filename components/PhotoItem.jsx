const React = require("react");

function PhotoItem({ title, photo, user }) {
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        margin: "20px",
      }}
    >
      <img src={photo.img} class="card-img-top" alt="photo" />
      <div class="card-body">
        <h5 class="card-title">{photo.title}</h5>
        <a href={`/photos/${photo.id}`} class="btn btn-primary">
          Подробнее
        </a>
      </div>
      <div>
        {user && user.id === photo.user_id && (
          <>
            <h6 style={{ marginLeft: "18px" }}>Ваша карточка</h6>
          </>
        )}
      </div>
    </div>
  );
}

module.exports = PhotoItem;
