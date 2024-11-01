import React from 'react'

const contactus = () => {
  return (
    <>
        <section id="contact">
            <div class="contact container">
            <div>
                <h1 class="section-title">Contact <span>info</span></h1>
            </div>
            <div class="contact-items">
                <div class="contact-item">
                <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
                <div class="contact-info">
                    <h1>Phone</h1>
                    <h2>+62 1234-567-890</h2>
                </div>
                </div>
                <div class="contact-item">
                <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
                <div class="contact-info">
                    <h1>Email</h1>
                    <h2>22334411@students.mikroskil.ac.id</h2>
                </div>
                </div>
                <div class="contact-item">
                <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
                <div class="contact-info">
                    <h1>Address</h1>
                    <h2>Universitas Mikroskil</h2>
                </div>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default contactus