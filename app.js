const lyrics ='tumi bondhu kala pakhi ami jeno ki. bosonto kale tomay bolte parini'

const searchString= 'Pakhi'
const lyricsLower = lyrics.toLowerCase();
const doesExist = searchString.toLowerCase();

const result = lyricsLower.includes(doesExist);

console.log(result);