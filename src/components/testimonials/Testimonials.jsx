import React from "react";
import "./testimonials.css";
import AVRT1 from "../../assets/avatar1.jpg";
import AVRT2 from "../../assets/avatar2.jpg";
import AVRT3 from "../../assets/avatar3.jpg";
import AVRT4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVRT1,
        name: "Tina Snow",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat id molestiae animi qui optio eligendi eaque expedita beatae voluptates quo, quae suscipit dolorum quod mollitia voluptate possimus minima vitae doloribus!",
    },
    {
        avatar: AVRT2,
        name: "Shatta Wale",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat id molestiae animi qui optio eligendi eaque expedita beatae voluptates quo, quae suscipit dolorum quod mollitia voluptate possimus minima vitae doloribus!",
    },
    {
        avatar: AVRT3,
        name: "Kwame Despite",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat id molestiae animi qui optio eligendi eaque expedita beatae voluptates quo, quae suscipit dolorum quod mollitia voluptate possimus minima vitae doloribus!",
    },
    {
        avatar: AVRT4,
        name: "Nana Ama McBrown",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat id molestiae animi qui optio eligendi eaque expedita beatae voluptates quo, quae suscipit dolorum quod mollitia voluptate possimus minima vitae doloribus!",
    },
];

export const Testimonials = () => {
    return (
        <section id="testimonial">
            <h5>Review from clientes</h5>
            <h2>Testimonial</h2>
            <Swiper className="container testimonials__container"
             // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
            >
                {data.map(({ avatar, name, review }, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonial">
                            <div className="client__avatar">
                                <img src={avatar} />
                            </div>
                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">{review}</small>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};
