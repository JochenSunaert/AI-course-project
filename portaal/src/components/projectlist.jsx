import { useState } from 'react';
import { Link } from 'react-router-dom';

function Projectlist({ searchQuery }) {

    const fairyTales = [
        { title: "Repelsteeltje", author: "Jochen Sunaert", link: "/frontend-courseproject-JochenSunaert/repelsteeltje" },
        { title: "Hans en Grietje", author: "Maxime Bastien", link: "https://ehb-mct.github.io/frontend-courseproject-Maxime122004/HansGrietje" },
        { title: "Klein duimpje", author: "Kobe Berckmans", link: "https://github.com/EHB-MCT/frontend-courseproject-KobeBerckmans" },
        { title: "De wolf en de zeven geitjes", author: "Mikolaj Buelens", link: "https://ehb-mct.github.io/frontend-courseproject-mikolajbuelens/" },
        { title: "Beauty and the Beast", author: "Wail El Majdoubi", link: "https://github.com/EHB-MCT/frontend-courseproject-Wail-ELM" },
        { title: "De kleine zeemeermin", author: "Nelle Favoreel", link: "https://scaling-adventure-yrzmqkw.pages.github.io/" },
    ];
    

    const nietBepaaldTale = fairyTales.find(tale => tale.title === "Niet bepaald");

    const filteredTales = fairyTales.filter(tale =>
        (searchQuery === '' ||
            tale.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tale.author.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <>
            <h2 className="titletext">Populair vandaag</h2>
            <main className="container">
                <div className="maingrid">
                    {filteredTales.map((tale, index) => (
                        <section key={index}>
                            <div class="imagewrap">
                                  {tale.title !== "Niet bepaald" && <img src={`personen/sprookje-${tale.title.toLowerCase()}-${tale.author.toLowerCase()}.png`} alt={tale.title} />}
                                    {tale.title === "Niet bepaald" && <img src={`personen/sprookje-niet-bepaald.png`} alt={tale.title} />}
                            </div>
                            <div className="projectinfo">
                                <div>
                                    <h4>{tale.title}</h4>
                                    <p>{tale.author}</p>
                                </div>
                                <a href={tale.link} className="externlinkarrow" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </>
    );
}

export default Projectlist;