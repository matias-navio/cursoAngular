// interface para definir audio player
interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

// interface para detalles de la cancion
interface Details {
    author: string;
    year: number;
}

// definimon un objeto con datos reales
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Love Yourself",
    details: {
        author: 'Justin Bieber',
        year: 2018
    }
}

// desestrucuramos para obtener solo algunos datos de audio player y details
const {song: anotherSong, 
    songDuration: duration,
    audioVolume: volume,
    details: {author}
} = audioPlayer;

console.log('Song: ', anotherSong, 
    ', duration: ', duration, 
    ', volume: ', volume,
    ', author: ', author
);

// manera de desestructurar un arreglo
const [, , p3 = 'Not Found']: string[] = ['Goku', 'Vegeta', 'Picolo'];

console.log('Personaje 3: ', p3);

export{};