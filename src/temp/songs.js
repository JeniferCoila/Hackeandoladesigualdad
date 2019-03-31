

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
      Es linda y apasionada <br>
      es buena y adinerada <br>
      no cela nunca por nada <br>
    </p>
    <p class="entry-title font">
      y sabe hacerlo todo en la casa. 
    </p>
  </div>
  <div class= "container-cover green"></div>
  <div class= "container-cover dark-green"></div>
  <div class= "hands-container"> 
  <img class= "hand positive" src= "Css/img/positive-vote.png">
  <img class= "hand negative" src= "Css/img/negative-vote.png">
  </div>
  </section> `;
  
    return view;
  },
  afterRender: async() => {
  }
};
export default song;

