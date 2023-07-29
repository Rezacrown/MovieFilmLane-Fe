import { IonIcon } from "@ionic/react";
import { timeOutline, star } from "ionicons/icons";

interface CardFilmProps {
  image?: string;
  title: string;
  qualityVideo: 'HD' | '2K' | '4K';
  duration: number;
  rating: number;
  dateTime: number;
}

export default function CardFilm(props: CardFilmProps) {
  const {
    duration,
    image = "./assets/images/upcoming-1.png",
    qualityVideo,
    rating,
    title,
    dateTime,
  } = props;
  return (
    <>
      <div className="movie-card">
        <a href="./movie-details.html">
          <figure className="card-banner">
            <img
              src={`${image}` || "./assets/images/upcoming-1.png"}
              alt="The Northman movie poster"
            />
          </figure>
        </a>

        <div className="title-wrapper">
          <a href="./movie-details.html">
            <h3 className="card-title">{title}</h3>
          </a>

          <time dateTime="2022">{dateTime}</time>
        </div>

        <div className="card-meta">
          <div className="badge badge-outline">{qualityVideo}</div>

          <div className="duration">
            <IonIcon icon={timeOutline} />

            <time dateTime="PT137M">{duration} min</time>
          </div>

          <div className="rating">
            <IonIcon icon={star} />

            <data>{rating}</data>
          </div>
        </div>
      </div>
    </>
  );
}
