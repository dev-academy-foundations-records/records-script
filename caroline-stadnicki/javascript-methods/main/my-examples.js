// Write your two examples here
// replace() and replaceAll()
// Sometimes we want to update a part of a string. Using the replace() method we can 
// provide the string we want to replace, and the string that will be replacing the previous one.
// Example: childrenNames = "Arthur Silva, Thomas Silva, Oliver Silva"
//         updateChildName should return "Arthur Stadnicki, Thomas Silva, Oliver Silva"
const childrenNames = "Arthur Silva, Thomas Silva, Oliver Silva";

function updateName(childrenNames) {
    let updateChildName = childrenNames.replace('Silva', 'Stadnicki');
       return updateChildName
}

// Observe that the replace() method will not change the stirng it was called on, but will return a new string.
// Also, it will only change the first ocurrence in the string it was called. If we want to change all the ocurrences
// we can use the replaceAll().
// Example: childrenNames from the previous example would return: "Arthur Stadnicki, Thomas Stadnicki, Oliver Stadnicki"
   const childrenSurnames = "Arthur Silva, Thomas Silva, Oliver Silva";

function updateNames(childrenSurnames) {
    let updateChildrenNames = childrenSurnames.replaceAll('Silva', 'Stadnicki');
       return updateChildrenNames;
}


// .map()
// The .map() method creates a new array with the results of a given function, that will be passed in  every element of the 
// array it was called on.
// Example: gameScore = [3, 4, 2, 6, 73] should return newScore = [6, 8, 4, 12, 146]
    const gameScore = [3, 4, 2, 6, 73]
    function dblScore (gameScore){
        const newScore = gameScore.map(i => i * 2);
        return newScore;
    }


    // -------Calling functions------//
   const nameUpdate = updateName(childrenNames)
    console.log('replace Name:' + nameUpdate)

    const namesUpdate = updateNames(childrenSurnames)
    console.log('replaceAll Names:' + namesUpdate)

    const scoreResults = dblScore (gameScore)
    console.log('map gameScore:', scoreResults)