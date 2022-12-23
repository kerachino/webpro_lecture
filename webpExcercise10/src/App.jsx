import { useEffect, useState } from "react";
import { fetchImages } from "./api";
import { breeds_select } from "./api";
import Image_box from "./Image_box";
import MouseCursor from "./MouseCursor";
import useSound from 'use-sound';
import Cat_Voice from './cat_voice.mp3';
import Reload_Voice from './cat_voice2.mp3';

function Loading() {
  return <p className="load">Loading...</p>;
}

function Header() {
  return (
    <header className="hero is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Cute Cat Images</h1>
        </div>
      </div>
    </header>
  );
}

function Image(props) {
  if (props.urls == null) {
    return <Loading />;
  }
  const [play] = useSound(Cat_Voice, { volume: 0.2});
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image" onClick={() => play()}>
          <Image_box>
            <img src={props.urls} alt="cute Cat!" />
          </Image_box>
        </figure>
      </div>
    </div>
  );
}


function Button(props) {
  function window_reload(event) {
    window.location.reload();
  }
  return (
    <form onSubmit={window_reload} className="form">
      <button className="reload_button">
        <a>♡Reload♡</a>
      </button>
    </form>
  );
}

function Main() {
  let num = Math.floor(Math.random() * 66) + 0;
//  const breed = breeds_select(num);
  const [breed, setBreed] = useState(null);

  console.log(breed);
  const [urls, setUrls] = useState(null);
  useEffect(() => {
    breeds_select(num).then((breed) => {
      setBreed(breed);
    });
    fetchImages(breed).then((urls) => {
      setUrls(urls);
    });

  }, []);

  return (
    <main>
      <section className="section">
        <div className="container">
          <Button onFormSubmit />
        </div>
      </section>
      <section className="">
        <div className="container">
          <Image urls={urls} />
        </div>
      </section>
      <section className="section">
        <section className="cat_breeds_font">
          猫種：{breed}
        </section>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="cat_footer">
      <div className="footer_content has-text-centered">
        <p>Cat images are retrieved from The Cat API</p>
        <p>
          <a href="https://thecatapi.com" target="_blank">Donate to The Cat API</a>
        </p>
        <p>created by 5421077 吉田捷馬</p>
        <p>当サイトは日本大学文理学部情報科学科 Webプログラミングの演習課題として作成されました。</p>
      </div>
    </footer>
  );
}

/*function cursor_moving(props){
  for(var i=0; i<6; i++){
    target = document.getElementsByClassName('cursor')[i];
    target.style.cssText = 'transform:translate(' + e.clientX + 'px, ' + e.clientY + 'px);transition: transform 0.'+ i*i +'s; transition-timing-function: ease-out;';
  }
  alert("a");
}*/

/*function Cursor2() {
  return(
    <section onMousemove ={cursor_moving}>
      <div className="cursor"><img src="cursor.png"/></div>
      <div className="cursor"><img src="cursor.png"/></div>
      <div className="cursor"><img src="cursor.png"/></div>
      <div className="cursor"><img src="cursor.png"/></div>
      <div className="cursor"><img src="cursor.png"/></div>
      <div className="cursor"><img src="cursor.png"/></div>
    </section>
  );
}*/

function App() {  
  const [play] = useSound(Reload_Voice, { volume: 0.2});
  return (
    <div onLoad ={() => play()}>
      <MouseCursor>
        <Header />
        <Main />
        <Footer />
      </MouseCursor>
    </div>
  );
}

export default App;
/*
const useMove = () => {
  const [state, setState] = useState({x: 0, y: 0})

  const handleMouseMove = e => {
    e.persist()
    setState(state => ({...state, x: e.clientX, y: e.clientY}))
  }
  return {
    x: state.x,
    y: state.y,
    handleMouseMove,
  }
}

const Hook = () => {
  return (
    <div className="mouseArea" onMouseMove={this.handleMouseMove}>
          <Component {...this.props} mouse={this.state} />
        </div>
  )
}
*/
