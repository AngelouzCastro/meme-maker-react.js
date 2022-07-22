import './App.css';
import {useState} from "react";
import html2canvas from "html2canvas";

function App() {
    const [linea1, setlinea1] = useState('');
    const [linea2, setlinea2] = useState('');
    const [imagen, setImagen] = useState('');

    const onChangeLinea1 = (e) => setlinea1(e.target.value);
    const onChangeLinea2 = (e) => setlinea2(e.target.value);
    const onChangeImagen = (e) => setImagen(e.target.value);
    const exportar = function (e) {
        html2canvas(document.querySelector("#meme")).then(canvas => {
            var img = canvas.toDataURL("image/png");
            var link = document.createElement('a');
            link.download = 'meme.png';
            link.href = img;
            link.click();
        });
    };

    return (
        <div className="App">
          <select onChange={onChangeImagen}>
            <option value="fire">casa en llamas</option>
              <option value="futurama">Futurama</option>
              <option value="history">aliens</option>
              <option value="matrix">matrix</option>
              <option value="philosoraptor">dinosaurio</option>
              <option value={"smart"}>chico listo</option>
          </select>

          <input onChange={onChangeLinea1} type={"text"} placeholder={"linea1"}/> <br />

          <input onChange={onChangeLinea2} type={"text"} placeholder={"linea2"}/> <br/>

          <button onClick={exportar}>Exportar meme</button>
          <div className={"meme"} id={"meme"}>
              <span>{linea1}</span>
              <span>{linea2}</span>
              <img src={"/memes/"+ imagen +".jpg"}/>
          </div>

        </div>
    );
}

export default App;
