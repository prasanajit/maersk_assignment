var parentSelector = document.getElementsByClassName('main-container__box')[0],
    sourceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    box;

// Dynamically insert boxes
let viewArray = (arr) => {
    parentSelector.innerHTML = " ";
    for (var i = 0; i < arr.length; i++) {
        box = document.createElement('div');
        box.setAttribute('class', 'main-container__box' + arr[i]);
        box.innerHTML = arr[i];
        parentSelector.appendChild(box);
    }
}

viewArray(sourceArray);

// Shuffle Array
let shuffleArray = (sourcearr) => {
    for (var i = sourcearr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = sourcearr[i];
        sourcearr[i] = sourcearr[j];
        sourcearr[j] = temp;
    }
}

// Sort Array
let sortArray = (shuffledarr) => {
    shuffledarr.sort((a, b) => {
        return a-b
    });
}


document.getElementsByClassName('button__shuffle')[0].onclick = function () {
    shuffleArray(sourceArray);
    viewArray(sourceArray);
};

document.getElementsByClassName('button__sort')[0].onclick = function () {
    sortArray(sourceArray);
    viewArray(sourceArray);
};