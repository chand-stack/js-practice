const lyrics ='tumi bondhu kala pakhi ami jeno ki. bosonto kale tomay bolte parini'

const searchString= 'Pakhi'
const result = lyrics.toLowerCase().includes(searchString.toLowerCase());

console.log(result);