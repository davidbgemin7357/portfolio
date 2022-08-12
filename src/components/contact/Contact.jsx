import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'

export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>davidbgemin@gmail.com</h5>
            <a href="mailto:davidbgemin@mail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>davidbgemin</h5>
            <a href="https://facebook.com">Send a message</a>
          </article>

          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>davidbgemin@gmail.com</h5>
            <a href="mailto:davidbgemin@mail.com">Send a message</a>
          </article>
        </div>
        <form action="">

        </form>
      </div>
    </section>
  )
}

// https://youtu.be/G-Cr00UYokU?t=8174