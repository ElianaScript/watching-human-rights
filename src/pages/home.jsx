import React from 'react';
import "../index.css";

function home() {
    return (
        <main className="home">

            <section className="hero">
                <img
                 className="portrait"
                    src="book-cover.jpg"
                    alt="book cover"
                />

                <p>
                    Dr. Mark Gibney
                </p>

            </section>
        </main>
    );
}
export default home;