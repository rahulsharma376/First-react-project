import "./css/Hero.css";

export default function Home(){
    return <div className='hero_sec'>
    <div className='hero_txt'>
      <h1>Web Dev</h1>
      <h2>Coder</h2>
      <div className='line1'></div>
      <p>I am a student of btech cse 7th semester. I am from northeast part of India. I am interested in coding.</p>
      <a href="https://drive.google.com/file/d/1oRT32-5xIF0jRAZBvC6pr8HlDUzoPdeV/view" target="_blank"><button id='btn'>Download CV</button></a>
      <button id='btn'>More Info</button>
    </div>
    <div className='hero_img'><img src="https://i.pinimg.com/736x/9e/03/c2/9e03c22014f2ef886fc1bef619d82f65.jpg" alt="watch-png" /></div>
  </div>
}