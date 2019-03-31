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
       <p class="type-it">¿Sabes más que yo?</p>
       <a href="#/song" id="button-to-create-new-user" type="text/html"
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
{/* <a href="#/Login" id="btn-log-in" class="btn-init btns-beside front-btn">
Iniciar sesión
</a>   */}