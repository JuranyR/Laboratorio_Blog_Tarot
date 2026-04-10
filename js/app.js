let boton = document.getElementById("btn-enviar")
let result = document.getElementById("formularioEnviado")

boton.addEventListener("click", () => {
  result.style.display = "block"; 
  result.textContent = "Solicitud enviada con éxito";
});

function voltear(card) {
  card.classList.toggle('flipped');
}
