import peliculas from './peliculas.js'

const accionDiv = document.getElementById("genero-28");
const thrillerDiv = document.getElementById("genero-53");
const aventuraDiv = document.getElementById("genero-12");
const link = "https://image.tmdb.org/t/p/w500"

const accionFilter= peliculas.filter(pelicula => pelicula.genre_ids.includes(28));

accionFilter.forEach(pelicula => {

    const peliculaDiv = document.createElement("div");
    const imagenDiv = document.createElement("img");
    const tituloH = document.createElement("h3");
    
    tituloH.textContent = pelicula.title;
    imagenDiv.src = `${link}${pelicula.poster_path}`;

    peliculaDiv.appendChild(imagenDiv);
    peliculaDiv.appendChild(tituloH);
    accionDiv.appendChild(peliculaDiv);
    
});
const thrillerFilter= peliculas.filter(pelicula => pelicula.genre_ids.includes(53));
//este filtro puede funcionar con .includes(53)
thrillerFilter.forEach(pelicula => {

    const peliculaDiv = document.createElement("div");
    const imagenDiv = document.createElement("img");
    const tituloH = document.createElement("h3");
    
    tituloH.textContent = pelicula.title;
    imagenDiv.src = `${link}${pelicula.poster_path}`;

    peliculaDiv.appendChild(imagenDiv);
    peliculaDiv.appendChild(tituloH);
    thrillerDiv.appendChild(peliculaDiv);
    
});
const aventuraFilter= peliculas.filter(pelicula => pelicula.genre_ids.includes(12));

aventuraFilter.forEach(pelicula => {

    const peliculaDiv = document.createElement("div");
    const imagenDiv = document.createElement("img");
    const tituloH = document.createElement("h3");
    
    tituloH.textContent = pelicula.title;
    imagenDiv.src = `${link}${pelicula.poster_path}`;

    peliculaDiv.appendChild(imagenDiv);
    peliculaDiv.appendChild(tituloH);
    aventuraDiv.appendChild(peliculaDiv);
    
});

