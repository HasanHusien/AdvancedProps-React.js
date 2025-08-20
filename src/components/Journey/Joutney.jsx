import "./journey.css";
export default function (props) {
  const { title, img, date, country, description, view } = props;
  return (
    <div className="perant">
      <div className="my-img">
        <img src={img} alt="our place" />
      </div>
      <div className="info">
        <i className="fa-solid fa-location-dot"></i>
        <span className="country">{country}</span>
        <a href={view} className="view">
          View On Google Map
        </a>
        <h1>{title}</h1>
        <p className="date">{date}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
