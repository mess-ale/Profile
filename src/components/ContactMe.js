import "./ContactMeStyle.css"

import React from 'react'

const ContactMe = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Your Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows={6} placeholder="Type your Message Hear" />
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default ContactMe
