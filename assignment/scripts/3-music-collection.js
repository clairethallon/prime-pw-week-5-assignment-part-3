console.log('***** Music Collection *****')


//////////
// Create a variable collection that starts as an empty array.
let collection = [];

let thePickOfDestinyTracks = ['Kickapoo', 'Classico', 'Baby', 'Destiny', 'History', 'The Government Totally Sucks', 'Master Exploder', 'The Divide', 'Papagenu (He\'s my Sassafrass)', 'Dude'];
let thePickOfDestinyTrackDurations = ['4:14', '0:59', '1:36', '0:37', '1:42', '1:35', '2:25', '0:22', '2:24', '2:54'];

let shrekTwoTracks = ['Accidentally in Love', 'Holding out for a Hero', 'Changes', 'As Lovers Go', 'Funkytown', 'I\'m on My way', 'I Need Some Sleep', 'Ever Falled in Love'];
let shrekTwoTrackDurations = ['3:09', '3:23', '3:22', '3:29', '3:57', '3:22', '2:28', '2:32'];

let shrekThreeTracks = ['Royal Pain', 'Do You Remember Rock n Roll Radio?', 'Immigrant Song', 'Barracuda', 'Live and Let Die', 'Best Days', 'Joker & The Thief', 'Other Ways'];
let shrekThreeTrackDurations = ['2:28', '3:51', '2:25', '4:39', '3:13', '3:01', '4:40', '3:25'];

let fetchTheBoltCuttersTracks = ['I Want You To Love Me', 'Shameika', 'Fetch The Bolt Cutters', 'Under The Table', 'Relay', 'Rack of His', 'Newspaper', 'Ladies'];
let fetchTheBoltCuttersDurations = ['3:58', '4:09', '4:59', '3:21', '4:49', '3:42', '5:33', '5:25'];

let gallowsTracks = ['Hopes Up', ' Forever\'s Gone', 'Barely Friends', 'Billy', ' Walk Away', ' Fuck Dave', 'Low Tide', 'Falling'];
let gallowsDurations = ['3:27', '3:48', '3:57', '3:31', '4:19', '3:44', '3:48', '3:35'];

let theLionsRoarTracks = ['The lion\'s Roar', ' Emmylou', 'In the Hearts of Men', 'Blue', 'This Old Routine', ' To a Poet', 'I Found a Way', ' Dance to Another Tune'];
let theLionsRoarDurations = ['5:05', '4:18', '4:13', '3:12', '4:24', '4:13', '4:50'];

// Add a function named addToCollection. This function should:
function addToCollection(titleInput, artistInput, yearPublishedInput, tracksInput, trackDurationInput) {
    // Create a new object having the above properties
    let album = {
        title: titleInput,
        artist: artistInput,
        yearPublished: yearPublishedInput,
        track: tracksInput,
        trackDuration: trackDurationInput
    }
    // Add the new object to the end of the collection array
    collection.push(album);
    // Return the newly created object
    return album;
}//end addToCollection

// Take in the album's title, artist, yearPublished as input parameters
// Create a new object having the above properties
// Take in the album's title, artist, yearPublished as input parameters
console.log(addToCollection('The Pick of Destiny', 'Tenacious D', 2007, thePickOfDestinyTracks, thePickOfDestinyTrackDurations));
console.log(addToCollection('Shrek 2', 'Dreamworks', 2004, shrekTwoTracks, shrekTwoTrackDurations));
console.log(addToCollection('Shrek 3', 'Dreamworks', 2007, shrekThreeTracks, shrekThreeTrackDurations));
console.log(addToCollection('Fetch The Bolt Cutters', 'Fiona Apple', 2020, fetchTheBoltCuttersTracks, fetchTheBoltCuttersDurations));
console.log(addToCollection('Gallows', 'DRAMA', 2016, gallowsTracks, gallowsDurations));
console.log(addToCollection('The Lion\'s Roar', 'First Aid Kit', 2012, theLionsRoarTracks, theLionsRoarDurations));


// Test the addToCollection function:
console.log(collection);

// Add a function named showCollection. This function should:
// Take in an array parameter. (This allows it to be reused to show any collection)
function showCollection(collectionArrayInput) {

    // Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.

    for (let i = 0; i < collectionArrayInput.length; i++) {
        console.log(collectionArrayInput[i].title, 'by', collectionArrayInput[i].artist, 'published in', collectionArrayInput[i].yearPublished);

    }
    // Console.log the number of items in the array.
    console.log(collectionArrayInput.length);

}//end showCollection

// Test the showCollection function.
showCollection(collection);

// Add a function named findByArtist. This function should:
// Take in artist (a string) parameter


// Stretch goals
// Create a function called search. This function should:


// Create your solution based on a search object that has these properties:
// { artist: 'Ray Charles', year: 1957 }
// The returned output from search should meet these requirements:
// Return a new array of all items in the collection matching all of the search criteria.
// If no results are found, return an empty array.
// If there is no search object or an empty search object provided as input, then return all albums in the collection.
// Add an array of tracks to your album objects. Each track should have a name and duration. You will need to update the functions to support this new property:

// Take an input parameter for a search criteria object. 


let stretchObjectOne = {
    artist: null,
    yearPublished: null,
    track: null,
}
let stretchObjectTwo = {
    artist: 'Fiona Apple',
    yearPublished: 2020,
    track: null
}
let stretchObjectThree = {
    artist: 'DRAMA',
    yearPublished: 2016,
    track: 'Billy'
}
let stretchObjectFour = {
    artist: 'Dreamworks',
    yearPublished: null,
    track: null
}
let stretchObjectFive = {
    artist: 232,
    yearPublished: null,
    track: 'Kickapoo'
}

/////   THIS STRETCH GOAL FUNCTION WORKS EXCEPT WHEN THERE ARE MULTIPLE MATCHES
////    Any ideas?
function stretchSearchGoalOne(collection, objectSearch) {
    // Create an array to hold any results, empty to start
    let stretchAlbumFound = [];
    count = 0;
    console.log(objectSearch);

    if (objectSearch.artist === null && objectSearch.yearPublished === null
        && objectSearch.track === null) {
        console.log('No search parameters found. Entire collection: ', collection);
        return collection;
    }
    // Loop through the collection and add any objects with a matching artist to the array.
    for (let i = 0; i < collection.length; i++) {
        if (objectSearch.artist === collection[i].artist &&
            objectSearch.yearPublished === collection[i].yearPublished) {
            for (let j = 0; j < collection.length; j++) {

                if (objectSearch.track === collection[i].track[j]) {

                    count++;
                    stretchAlbumFound.push(collection[i]);
                    console.log(count, 'exact match found. album found matching search: ', stretchAlbumFound);
                    return collection;
                }
                else if (!objectSearch.track) {

                    count++;
                    stretchAlbumFound.push(collection[i]);
                    console.log(count, ' match found. album found matching search: ', stretchAlbumFound);
                    return collection;
                }
            }
        }

        else if (!objectSearch.artist &&
            objectSearch.yearPublished === collection[1].yearPublished) {
            for (let j = 0; j < collection.length; j++) {

                if (objectSearch.track === collection[i].track[j]) {

                    count++;
                    stretchAlbumFound.push(collection[i]);
                    console.log(count, ' match found. album found matching search: ', stretchAlbumFound);
                    return collection;
                }
                else if (!objectSearch.track) {

                    count++;
                    stretchAlbumFound.push(collection[i]);
                    console.log(count, ' match found. album found matching search: ', stretchAlbumFound);
                    return collection;
                }
            }
        }

        else if (objectSearch.artist === collection[i].artist &&
            !objectSearch.yearPublished) {
            for (let j = 0; j < collection.length; j++) {

                if (objectSearch.track === collection[i].track[j]) {

                    count++;
                    stretchAlbumFound.push(collection[i]);
                    console.log(count, ' match found. album found matching search: ', stretchAlbumFound);
                    return collection;
                }
                else if (!objectSearch.track) {

                    count++;
                    stretchAlbumFound.push(collection[i]);
                    console.log(count, ' match found. album found matching search: ', stretchAlbumFound);
                    return collection;
                }
            }
        }

        else if (!objectSearch.artist &&
            !objectSearch.yearPublished) {
            for (let j = 0; j < collection.length; j++) {

                if (objectSearch.track === collection[i].track[j] || !objectSearch.track) {
                    count++;
                    stretchAlbumFound.push(collection[i]);
                    console.log(count, ' match found. album found matching search: ', stretchAlbumFound);
                    return collection;
                }
            }
        }

    }
    console.log(count, 'no matches found. Try some new music: ', collection);
    return collection;
}//end function


///testing functions
stretchSearchGoalOne(collection, stretchObjectOne);
stretchSearchGoalOne(collection, stretchObjectTwo);
stretchSearchGoalOne(collection, stretchObjectThree);
stretchSearchGoalOne(collection, stretchObjectFour);
stretchSearchGoalOne(collection, stretchObjectFive);
// Return the array with the matching results. If no results are found, return an empty array.
// Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

// When testing your functions, write all tests in the JavaScript file!

/////////////////////



// Update the addToCollection function to also take an input parameter for the array of tracks.
// Update search to allow a trackName search criteria.
// Update the showCollection function to display the list of tracks for each album with its name and duration.
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION


//////////////////////////////////////////////


function showStretchCollection(stretchCollectionArrayInput) {

    // Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.
    for (let i = 0; i < stretchCollectionArrayInput.length; i++) {
        console.log(stretchCollectionArrayInput[i].title, 'by', stretchCollectionArrayInput[i].artist, 'published in', stretchCollectionArrayInput[i].yearPublished);
        for (let j = 0; j < stretchCollectionArrayInput[i].track.length; j++) {
            console.log(j + 1, stretchCollectionArrayInput[i].track[j], ':', stretchCollectionArrayInput[i].trackDuration[j]);
        }
    }

}//end showCollection

// Test the showCollection function.
showStretchCollection(collection);