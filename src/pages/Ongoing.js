import "./css/ongoing.css";

export default function Ongoing(){
    return (
        <div id="portfolio">
            <div class="section-title">
                <h2 class="sub-title">Ongoing</h2>
                <h3 class="title">Skills that I am learning</h3>
                <div class="project-list">
                    <div class="project">
                        <img src="https://www.tailwind-kit.com/images/blog/1.jpg" alt="project1"/>
                        <div class="layer">
                            <h3>Python</h3>
                            <p>
                            Python is a popular programming language. It was created by Guido van Rossum, and released in 1991. 
                            Python was designed for readability, and has some similarities to the English language with influence from mathematics.
                            </p>
                            <a href="#">Details</a>
                        </div>
                    </div>
                    <div class="project">
                        <img src="https://www.tailwind-kit.com/images/blog/4.jpg" alt="project2"/>
                        <div class="layer">
                            <h3>Communication</h3>
                            <p>
                            Communication is the sending and receiving of information and involves a sender who initiates communication and encodes, meaning transfers thoughts, into a message that is sent to the receiver
                            </p>
                            <a href="#">Details</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}