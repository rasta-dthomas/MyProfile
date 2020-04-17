import React, { Component } from 'react';

class Cards extends Component {
    render() {
        return (
            <section>
                <h2>Skill Cards</h2>

                <div className="row">
                    <div className="column">
                        <div className="card">
                            <h3>Frontend Development</h3>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Javascript</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h3>Backend Development</h3>
                            <h4>Servers:</h4>
                            <p>MongoDB</p>
                            <p>MySQL</p>
                            <p>PostgreSQL</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h3>Programming Languages</h3>
                            <p>C/C++</p>
                            <p>Java</p>
                            <p>Python</p>
                            <p>Perl</p>
                            <p>Ruby</p>
                            <p>C#</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h3>Development Frameworks</h3>
                            <p>Node.js</p>
                            <p>Rails</p>
                            <p>ASP.NET</p>
                            <p>Bootstrap</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Cards;