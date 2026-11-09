
import React from "react";
import "../index.css";

const otherBooks = [
    {
        title: "The Politics of Human Rights: The Quest for Dignity",
        image: "/politics-of-human-rights.jpg",
        link: "https://www.goodreads.com/book/show/5248103-the-politics-of-human-rights",
    },
    {
        title: "The Role of Networks in Advancing Human Rights: Making Human Connections",
        image: "/role-of-networks.png",
        link: "https://books.google.com/books/about/The_Role_of_Networks_in_Advancing_Human.html?id=F7yREQAAQBAJ&source=kp_book_description",
    },
    {
        title: "Watching Human Rights: The 101 Best Films",
        image: "/watching-human-rights.jpg",
        link: "https://www.goodreads.com/book/show/16694104-watching-human-rights",
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
                            src="/new-book-cover.jpg"
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

                        <cite>— quote from <em>Watching Human Rights</em></cite>
                    </blockquote>

                </div>
            </section>


            <section className="home-author">
                <div className="home-author-inner">

                    <img
                        src="/Mark-Gibney-Headshot.jpg"
                        alt="Dr. Mark Gibney"
                        className="home-author-image"
                    />

                    <div className="home-author-content">
                        <h3 className="home-eyebrow">
                            ABOUT THE AUTHOR
                        </h3>

                        <p>
                            Brief biography.
                        </p>
                    </div>

                </div>
            </section>


            <section className="home-publications">
                <div className="home-books-grid">


                    <h2>Other Books & Publications From the Author</h2>

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
                            </a>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}

export default Home;

