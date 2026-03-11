import React, { useState, useEffect } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Testimonials.css";

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            quote: "Ward boys were trained and uniformed from day one. Smooth onboarding.",
            author: "Operations, Sunrise Hospital",
        },
        {
            id: 2,
            quote: "The cleaning staff is incredibly punctual and fully compliant with our strict hygiene standards.",
            author: "Principal, City International School",
        },
        {
            id: 3,
            quote: "Having a dedicated manager for our society guards and helpers relieved us of all administrative burden.",
            author: "Secretary, Green Valley Housing Society",
        },
    ];

    // Auto-play timer
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // 5 seconds per slide
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const goToNextSlide = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <section className="testimonials-section">
            <div className="testimonials-header">
                <button className="badge testimonials-badge">
                    <FaStar className="badge-icon" /> Testimonials
                </button>
                <h2 className="testimonials-title">Trusted by schools, offices, and hospitals</h2>
                <p className="testimonials-subtitle">
                    Hear from teams who rely on UrbanCrew to keep operations running smoothly.
                </p>
            </div>

            <div className="testimonials-slider-container">
                {/* Left Arrow */}
                <button className="slider-arrow left-arrow" onClick={goToPrevSlide} aria-label="Previous Testimonial">
                    <FaChevronLeft />
                </button>

                {/* Carousel Content */}
                <div className="testimonial-card">
                    <FaQuoteLeft className="quote-icon" />
                    <p className="testimonial-quote">"{testimonials[currentIndex].quote}"</p>
                    <p className="testimonial-author">{testimonials[currentIndex].author}</p>
                </div>

                {/* Right Arrow */}
                <button className="slider-arrow right-arrow" onClick={goToNextSlide} aria-label="Next Testimonial">
                    <FaChevronRight />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="slider-dots">
                {testimonials.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentIndex ? "active-dot" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
