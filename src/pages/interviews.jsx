
import React from "react";
import "../index.css";

// Replace these sample entries with real interviews.
const interviewsData = [
  {
    id: 1,
    title: "Interview title",
    interviewer: "Jane Doe ",
    interviewee: " Dr. Mark Gibney",
    publishedAt: "2026-10-20",
    duration: "24 min ",
    category: "Human Rights",
    description:
      "Description of interview here.",
    youtubeId: "21hYFWDGdhI",
  },

];

function isNew(publishedAt) {
  const date = new Date(`${publishedAt}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const daysOld = (today - date) / (1000 * 60 * 60 * 24);

  return daysOld >= 0 && daysOld < 14;
}

function InterviewCard({ interview, featured = false }) {
  const {
    title,
    interviewer,
    interviewee,
    publishedAt,
    duration,
    category,
    description,
    youtubeId,
  } = interview;

  const videoUrl = `https://www.youtube.com/watch?v=${youtubeId}`;
  const thumbnailUrl =
    `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  const formattedDate = new Date(
    `${publishedAt}T12:00:00`
  ).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <article
      className={`interview-card ${
        featured ? "interview-card--featured" : ""
      }`}
    >
      <a
        className="interview-thumbnail"
        href={videoUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Watch ${title} on YouTube`}
      >
        <img src={thumbnailUrl} alt="" loading="lazy" />
        <span className="interview-play" aria-hidden="true">
          ▶
        </span>

        {isNew(publishedAt) && (
          <span className="interview-new-badge">
            <span className="interview-new-dot" />
            NEW INTERVIEW
          </span>
        )}
      </a>

      <div className="interview-card-content">
        <div className="interview-meta">
          <span>{category}</span>
          <span>{formattedDate}</span>
        </div>

        <h3>{title}</h3>

        <p className="interview-participants">
          <strong>{interviewer}</strong>
          <span className="interview-between">in conversation with</span>
          <strong>{interviewee}</strong>
        </p>

        <p className="interview-description">{description}</p>

        <div className="interview-card-footer">
          <span className="interview-duration">
            <span aria-hidden="true">◷</span> {duration}
          </span>

          <a
            className="interview-watch-link"
            href={videoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Watch interview <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function Interviews() {
  const sortedInterviews = [...interviewsData].sort(
    (a, b) =>
      new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  const featuredInterview = sortedInterviews[0];
  const archivedInterviews = sortedInterviews.slice(1);

  return (
    <main className="interviews-page">
      <header className="interviews-hero">
        <div className="interviews-hero-inner">

          <h1>Conversations That Matter.</h1>

          <p className="interviews-hero-description">
            Thoughtful discussions with the people, scholars,
            and filmmakers exploring human rights around the world.
          </p>

        </div>
      </header>

      <section className="interviews-content">
        {featuredInterview && (
          <section className="interviews-featured-section">
            <div className="interviews-section-heading">
              <div>
                <p className="interviews-eyebrow">
                  THE LATEST CONVERSATION
                </p>
              </div>


            </div>

            <InterviewCard
              interview={featuredInterview}
              featured
            />
          </section>
        )}

        <section
          className="interviews-archive-section"
          id="interview-archive"
        >
          <div className="interviews-section-heading">
          </div>

          {archivedInterviews.length > 0 ? (
            <div className="interviews-grid">
              {archivedInterviews.map((interview) => (
                <InterviewCard
                  key={interview.id}
                  interview={interview}
                />
              ))}
            </div>
          ) : (
            <p className="interviews-empty">
              More interviews are on the way. Check back soon.
            </p>
          )}
        </section>

        <footer className="interviews-footer">

        </footer>
      </section>
    </main>
  );
}

export default Interviews;
