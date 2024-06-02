// Create a variable to hold your NFTs
let nftCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function value_NFT(title, artist, year, genre) {
    const j = {
        title: title,
        artist: artist,
        year: year,
        genre: genre,
    };
    nftCollection.push(j);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function display_nft() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("NFT #" + (i + 1));
        console.log("Title: " + nftCollection[i].title);
        console.log("Artist: " + nftCollection[i].artist);
        console.log("Year: " + nftCollection[i].year);
        console.log("Genre: " + nftCollection[i].genre);
        console.log("--------------------");
    }
}

// Print the total number of NFTs we have minted to the console
function Total_artist() {
    return nftCollection.length;
}

// Call your functions below this line
value_NFT("Starry Night", "Vincent van Gogh", 1889, "Post-Impressionism");
value_NFT("The Persistence of Memory", "Salvador Dali", 1931, "Surrealism");
value_NFT("Girl with a Pearl Earring", "Johannes Vermeer", 1665, "Baroque");
value_NFT("Mona Lisa", "Leonardo da Vinci", 1503, "Renaissance");
value_NFT("The Scream", "Edvard Munch", 1893, "Expressionism");

// List all NFTs
display_nft()

// Print the total number of NFTs
console.log("Total artisted entered= " ,Total_artist());
