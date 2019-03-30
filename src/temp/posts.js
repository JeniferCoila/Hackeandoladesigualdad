// ------------------------
// PÁGINA MURO DE PUBLICACIONES
/* import { postContent, postContentLs} from '../viewController.js';
import { editPost, deletePost, signOut, likePost} from '../services/FirebaseTools.js'; */

let post = {
  render: async() => {
    // --------------------------------
    // TEMPLATE DE MURO
    let view =
    `<header class="posts-header">
    <div class="container">
    <h1 class="rubik-font">Bienvenida </h1>
    <p class="rubik-font">¡Empoderate hoy!</p>
    <input id="post-content" type="text" placeholder="¿En que estas pensado?" class= "karla-font" >
    <p id="error-empty-input" class="error-message karla-font"></p>
    <button id="privacy" class="privacy-btn rubik-font" >Público</button><br><br>
    <a id="btn-to-pots-content" class= "button rubik-font purple-back center-text">Compartir</a><br><br><br>
    <a id="btn-Sign-Out" type="text/html" class= "button rubik-font gray-back black center-text">Cerrar sesión</a>
    <section id="post-content-list" class= "karla-font list-style"></section>
    </div>
    </header>
    `;
    return view;
  },
};
export default post;