// ------------------------
// PÁGINA INICIO 
let initPage = {
  render: async() => {
    let view = `
    <section class= "template-register rps-design-form" >
    <img src="imagenes/logo.png" alt="" class="playLogo">
     <form class="auth">
     <div class="container">
     <div class="gray-div">
     </div>
       <div class= "btn-div">
       <p class="type-letter">CEREBRÓN</p>
       <a href="#/Post" id="button-to-create-new-user" type="text/html"
       class= "button center-text green showme">DEMUÉSTRALO ! </a>
          </div>
     </div>
     </form>
     </section> 

  `;
    return view;
  },
  afterRender: async() => {}
};
export default initPage;
/* <section class= "template-register rps-design-form" >
<img src="imagenes/logo.png" alt="" class="playLogo">
 <form class="auth">
 <div class="container">
 <div class="gray-div">
 </div>
   <div class= "btn-div">
   <p class="type-letter">CEREBRÓN</p>
   <p> ¿Sabía</p>

 </div>
 </div>
 </form>
 </section> 

    // <a id="btn-Sign-Out" type="text/html" class= "button rubik-font gray-back black center-text">Cerrar sesión</a>
    // export default initPage; */

/* <section class= "template-register rps-design-form" >
<img src="imagenes/cerebron.png" alt="" class="playLogo">
<form class="auth">
<div class="container">
<div class="gray-div">
<h2 class= "center-text rubik-font">¿Sabes más que yo?</h2>
</div>
  <div class= "btn-div">
  <a href="#/Post" id="button-to-create-new-user" type="text/html"
  class= "button center-text green">DEMUÉSTRALO ! </a>
</div>
</div>
</form>
</section> */

/* <div class="img-ppl">
<img src="imagenes/frame.png" alt="Logo purpura en forma de ola, simbolo de evolución, equidad y transformación " class="set-back mySlides">
</div> */