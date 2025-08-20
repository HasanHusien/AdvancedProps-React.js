import "./content.css";
export default function (props) {
  const { imgSrc, imgAlt, place, title, date, content } = props;
  return (
    <div className="perant">
      <div className="my-img">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="info">
        <i className="fa-solid fa-location-dot"></i>
        <span className="place">{place}</span>
        <span className="view">view on google maps</span>
        <h1>{title}</h1>
        <p className="date">{date}</p>
        <p className="content">{content}</p>
      </div>
    </div>
  );
}
