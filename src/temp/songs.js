

let song = {
  render: async() => {
    // --------------------------------
    // TEMPLATE DE MURO
    let view =
    `<section class= "song-tittle">
    <div class= "message"> 
    ¿Las siguientes frases te parecen mensajes machistas?
    </div>
    <div class="card">
    <p class="font">
    Estoy enamorado de cuatro babys <br>
    Siempre me dan lo que quiero <br>
    </p>
    <p class="entry-title font">
    Chingan cuando yo les digo 
    </p>
    <p class="font">
        Ninguna me pone pero
        </p>
  </div>
  <div class= "container-cover green-cover"></div>
  <div class= "container-cover dark-green"></div>
  <div class= "hands-container"> 
  <a href= "" class= "hand positive"> </a>
  <a href= ""class= "hand negative"> </a>  </div>
  </section> `;
  
    return view;
  },
  afterRender: async() => {
  }
};
export default song;

