import React from "react";
import './Contacts.scss'
import me from './me.jpg'

const Contacts = () => {
    return(
        <section className="contacts-page">
            <div className="contacts-left">
                <h1><a href="tel:+375333856595">+375-(33)-385-65-95</a></h1>
                <p className="contacts-name">
                    Bondareu<br/>
                    Mikita
                </p>
                <a href="mailto:nikitabondarev_10@mail.ru">
                    nikitabondarev_10@mail.ru
                </a>
                <p>
                    JavaScript developer
                </p>
                <p>
                ES5, ES6, <span>React</span>
                </p>
            </div>
            <div className="contacts-right">
                <img src={me} alt="me"></img>
            </div>
        </section>
    )
}

export default Contacts;