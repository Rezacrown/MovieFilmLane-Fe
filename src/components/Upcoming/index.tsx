import { IonIcon } from "@ionic/react";
import { timeOutline, star } from "ionicons/icons";
import CardFilm from "../Card-film";

export default function Upcoming() {
  return (
    <>
      <section className="upcoming">
        <div className="container">
          <div className="flex-wrapper">
            <div className="title-wrapper">
              <p className="section-subtitle">Online Streaming</p>

              <h2 className="h2 section-title">Upcoming Movies</h2>
            </div>

            <ul className="filter-list">
              <li>
                <button className="filter-btn">Movies</button>
              </li>

              <li>
                <button className="filter-btn">TV Shows</button>
              </li>

              <li>
                <button className="filter-btn">Anime</button>
              </li>
            </ul>
          </div>

          <ul className="movies-list  has-scrollbar">
            <li>
              {/* <div className="movie-card">
                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/upcoming-1.png"
                      alt="The Northman movie poster"
                    />
                  </figure>
                </a>

                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">The Northman</h3>
                  </a>

                  <time dateTime="2022">2022</time>
                </div>

                <div className="card-meta">
                  <div className="badge badge-outline">HD</div>

                  <div className="duration">
                    <IonIcon icon={timeOutline} />

                    <time dateTime="PT137M">137 min</time>
                  </div>

                  <div className="rating">
                    <IonIcon icon={star} />

                    <data>8.5</data>
                  </div>
                </div>
              </div> */}
              <CardFilm dateTime={2022} duration={228} title="frozen" rating={4.5} qualityVideo="HD" />
            </li>

            <li>
              <div className="movie-card">
                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/upcoming-2.png"
                      alt="Doctor Strange in the Multiverse of Madness movie poster"
                    />
                  </figure>
                </a>

                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">
                      Doctor Strange in the Multiverse of Madness
                    </h3>
                  </a>

                  <time dateTime="2022">2022</time>
                </div>

                <div className="card-meta">
                  <div className="badge badge-outline">4K</div>

                  <div className="duration">
                    <IonIcon icon={timeOutline} />

                    <time dateTime="PT126M">126 min</time>
                  </div>

                  <div className="rating">
                    <IonIcon icon={star} />

                    <data>NR</data>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="movie-card">
                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/upcoming-3.png"
                      alt="Memory movie poster"
                    />
                  </figure>
                </a>

                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">Memory</h3>
                  </a>

                  <time dateTime="2022">2022</time>
                </div>

                <div className="card-meta">
                  <div className="badge badge-outline">2K</div>

                  <div className="duration">
                    <IonIcon icon={timeOutline} />

                    <time dateTime="">N/A</time>
                  </div>

                  <div className="rating">
                    <IonIcon icon={star} />

                    <data>NR</data>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="movie-card">
                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/upcoming-4.png"
                      alt="The Unbearable Weight of Massive Talent movie poster"
                    />
                  </figure>
                </a>

                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">
                      The Unbearable Weight of Massive Talent
                    </h3>
                  </a>

                  <time dateTime="2022">2022</time>
                </div>

                <div className="card-meta">
                  <div className="badge badge-outline">HD</div>

                  <div className="duration">
                    <IonIcon name="time-outline" />

                    <time dateTime="PT107M">107 min</time>
                  </div>

                  <div className="rating">
                    <IonIcon icon={star} />

                    <data>NR</data>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
