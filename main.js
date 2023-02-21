let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: rgb(253, 13, 133);"> Desarrollo sitios web y cuido la salud de mis pacientes.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
