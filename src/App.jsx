import Footer from "./Footer";
function App(){
  const name = "LEONARDO FABIAN CUELLAR TEJADA";
  return (
    <div>
      <h3>Lista de Hobbies de {name}</h3>
      <ul>
        <li>Tocar guitarra</li>
        <li>Jugar video juegos </li>
        <li>escuchar musica </li>
      </ul>
      <hr />
      <Footer/>
    </div>
  )
}
export default App;
