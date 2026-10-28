
import React from "react";
import "../index.css";

const otherBooks = [
    {
        title: "Book Title",
        image: "/book-two.jpg",
        link: "#",
    },
    {
        title: "Book Title",
        image: "/book-three.jpg",
        link: "#",
    },
    {
        title: "Book Title",
        image: "/book-four.jpg",
        link: "#",
    },
];

function Home() {
    return (
        <main className="home">

            {/* Featured New Book */}
            <section className="home-hero">
                <div className="home-hero-inner">

                    <div className="home-hero-cover">
                        <img
                            src="/book-cover.jpg"
                            alt="Cover of the new book"
                            className="home-book-cover"
                        />
                    </div>

                    <div className="home-hero-content">

                        <p className="home-hero-description">
                            Explore films examining human rights,
                            international law, and the questions that shape
                            our understanding of justice.
                        </p>

                        <a href="#featured-book" className="home-button">
                            Explore the Book
                        </a>
                    </div>

                </div>
            </section>

            <section
                className="home-featured-book"
                id="featured-book"
            >
                <div className="home-section-inner">

                    <h2>A Closer Look</h2>

                    <p className="home-book-description">

                        Description of book -- central themes -- what is included in the book.
                    </p>

                    <blockquote className="home-quote">
                        <span className="home-quote-mark">“</span>

                        <p>
                            Compelling quote from book
                            <span className="home-quote-mark"> " </span>
                        </p>

                        <cite>— Dr. Mark Gibney</cite>
                    </blockquote>

                </div>
            </section>

            {/* About the Author */}
            <section className="home-author">
                <div className="home-author-inner">

                    <img
                        src="/professor.jpg"
                        alt="Dr. Mark Gibney"
                        className="home-author-image"
                    />

                    <div className="home-author-content">
                        <p className="home-eyebrow">
                            ABOUT THE AUTHOR
                        </p>

                        <h2>Dr. Mark Gibney</h2>

                        <p>
                           Brief biography. 
                        </p>
                    </div>

                </div>
            </section>

            {/* Other Publications */}
            <section className="home-publications">
                <div className="home-section-inner">

                    <p className="home-eyebrow">
                        EXPLORE HIS WORK
                    </p>

                    <h2>Other Books & Publications</h2>

                    <div className="home-books-grid">
                        {otherBooks.map((book, index) => (
                            <a
                                href={book.link}
                                className="home-book-card"
                                key={index}
                            >
                                <img
                                    src={book.image}
                                    alt={`Cover of ${book.title}`}
                                />

                                <h3>{book.title}</h3>

                                <span>Learn More →</span>
                            </a>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}

export default Home;
