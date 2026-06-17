// TEMA
document.getElementById("btnTema").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  // SIMULADOR
  const input = document.getElementById("hectaresInput");
  const agua = document.getElementById("resAgua");
  const carbono = document.getElementById("resCarbono");
  const prod = document.getElementById("resProd");
  
  input.addEventListener("input", (e) => {
    const h = Number(e.target.value);
  
    if (!h || h <= 0) {
      agua.textContent = 0;
      carbono.textContent = 0;
      prod.textContent = "0%";
      return;
    }
  
    agua.textContent = (h * 12000).toLocaleString() + " L";
    carbono.textContent = (h * 450).toLocaleString() + " kg";
    prod.textContent = (15 + h * 0.08).toFixed(1) + "%";
  });
  
  // FORM
  const form = document.getElementById("formContato");
  const msg = document.getElementById("mensagemSucesso");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    msg.classList.remove("hidden");
    form.reset();
  
    setTimeout(() => {
      msg.classList.add("hidden");
    }, 4000);
  });