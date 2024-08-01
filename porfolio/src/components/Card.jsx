import "./card.style.css";

export function Card({ title, image, url }) {
  return (
    <div className="card bg-dark animate__animated animate__fadeInBottomRight">
      <img src={image} alt="" className="card-img-top animate__animated animate__fadeInBottomLeft" />
      <div className="card-body d-flex">
        <h5 className="card-title text-white text-center">{title}</h5>
        <a href={url} className="btn btn-primary" target="_blank">
          Enlace a: {title}
        </a>
      </div>
    </div>
  );
}
