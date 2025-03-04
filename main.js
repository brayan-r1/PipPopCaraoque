//coneccion con HTML (seleccionar el elemento)

const songForm = document.getElementById('song_Form');
const playList = document.getElementById('play_list');

//Funcion para agregar una canción a la lista
function addSong(songName, artistName, sonUrl) {
    const listSong = document.createElement('li');
    
    listSong.innerHTML = `
            <strong>${songName}</strong>
            - ${artistName}
            <a href="${sonUrl}" target="_black">Reproducir</a>
            <button class="delete-btn">Eliminar </button>
    `;

    //Agrega al HTML
    playList.appendChild(listSong);
}

// Manejo de envio de formulario (ENVENTOS)


songForm.addEventListener('submit',(event) =>{  
    event.preventDefault();

    // OBtener datos del formulario

    const songName = document.getElementById("song_name").value;
    const artistName = document.getElementById("artist_name").value;
    const songUrl = document.getElementById("url_song").value;

    addSong(songName, artistName, songUrl);

    songForm.reset();
});