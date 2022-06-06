export default function TravelCard({ travel }) {
  return (
    <article className="card">
      <div>
        <img className="card-img" src={travel.src} alt={travel.alt} />
      </div>

      <div className="card-info">
        <p className="country-name">
          {travel.country}{" "}
          <a className="maps" href={travel.maps}>
            View on Google Maps
          </a>
        </p>

        <h2 className="place-name">{travel.place}</h2>

        <p className="dates">
          {travel.arrival} - {travel.departure}
        </p>

        <p className="description">{travel.description}</p>
      </div>
    </article>
  );
}
