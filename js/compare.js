"use strict";
/**
 *
 * @type {Chart}
 *
 *
 *
 * Copyright (C) 2022 Sinclair BALIVET, Antoine BONDET, Yves-Robert ESTRADA, Quentin MARCHAL, Pierre SAVE et Siham TABBAA
 *
 * This file is part of ComparaisonTri.
 *
 * ComparaisonTri is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 *
 * ComparaisonTri is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with ComparaisonTri. If not, see <https://www.gnu.org/licenses/>. 
 */
let message = "JavaScript is ok :)";
console.log(message);
let table = document.getElementById("animationTab");


/**
 * Gives a click event to the submit button on load
 * @author Siham Tabbaa
 */
function onLoad() {
    console.log("Page chargé");
    let button = document.getElementById("submit");
    button.addEventListener("click", init);
}

window.onload = onLoad;
let time = [];

/**
 * initialization of comparison variables
 * @author Siham Tabbaa
 */
function init() {
    table.innerHTML=""; // permet de reinitialiser notre tableau
    let getArray = array();
    let getSpeed = speed();
    let getSort = checkBox();

    let arraySelect = [...getArray];
    let arrayInsert = [...getArray];
    let arrayHeap = [...getArray];
    let arrayShell = [...getArray];
    let arrayBubble = [...getArray];
    let arrayMerge = [...getArray];
    let arrayQuick = [...getArray];

    if(getSort.includes(1)) {
        let durationInsert = 0;
        let start = performance.now();
        insertSort(arrayInsert, getSpeed);
        durationInsert = (performance.now() - start) / 1000;
        document.getElementById("executeInsert").innerHTML = durationInsert;
        time.push(durationInsert)

        console.log("durée insert : " + durationInsert)
    }

    if(!getSort.includes(1)) {
        time.push(0)
    }

    if(getSort.includes(2)) {
        let durationSelect = 0;
        let start = performance.now();
        console.log("start : " + start)
        selectSort(arraySelect, getSpeed);
        durationSelect = (performance.now() - start) / 1000;
        document.getElementById("executeSelect").innerHTML = durationSelect;
        time.push(durationSelect)
        console.log("durée select : " + durationSelect)
    }
    if(!getSort.includes(2)) {
        time.push(0)
    }

    if(getSort.includes(3)) {
        let duration = 0;
        let start = performance.now();
        doHeapSort(arrayHeap);
        duration = (performance.now() - start) / 1000;
        document.getElementById("executeHeap").innerHTML = duration;
        time.push(duration)
        console.log("durée heap : " + duration)
    }
    if(!getSort.includes(3)) {
        time.push(0)
    }

    if(getSort.includes(4)) {
        let duration = 0;
        let start = performance.now();
        doMergeSort(arrayMerge);
        duration = (performance.now() - start) / 1000;
        document.getElementById("executeMerge").innerHTML = duration;
        time.push(duration)
        console.log("durée merge : " + duration)
    }

    if(!getSort.includes(4)) {
        time.push(0)
    }

    if(getSort.includes(5)) {
        let duration = 0;
        let start = performance.now();
        shellSort(arrayShell, getSpeed);
        duration = (performance.now() - start) / 1000;
        document.getElementById("executeShell").innerHTML = duration;
        time.push(duration)
        console.log("durée shell : " + duration)
    }

    if(!getSort.includes(5)) {
        time.push(0)
    }

    if(getSort.includes(6)) {
        let duration = 0;
        let start = performance.now();
        doQuickSort(arrayQuick)
        duration = (performance.now() - start) / 1000;
        document.getElementById("executeQuick").innerHTML = duration;
        time.push(duration)
        console.log("durée quick : " + duration)
    }

    if(!getSort.includes(6)) {
        time.push(0)
    }

    if(getSort.includes(7)) {
        let duration = 0;
        let start = performance.now();
        bubbleSort(arrayBubble, getSpeed);
        duration = (performance.now() - start) / 1000;
        document.getElementById("executeBubble").innerHTML = duration;
        time.push(duration)
        console.log("durée buble : " + duration)
    }

    if(!getSort.includes(7)) {
        time.push(0)
    }
    ShowHide();
    performanceBestTime();
    performanceWorstTime();
    performanceBestTurn();
    performanceWorstTurn();
    console.log("dudeeee time " + time);

    console.log("TURNS OF CHEKED ALGORYTHMS : "  + tabBestTurn);

}

let arrayTime = time;
/**
 * Retrieves the algorithm that gives the best sorting time.
 *@author Siham Tabbaa
 */
function performanceBestTime() {
    let getTime = [...arrayTime], resultWorstTime = 0, worstResult;
    let getVersTime = []
    for(let i = 0; i < getTime.length; i++) {
        if(getTime[i] === 0) {
            getVersTime[i] = 0;
        }
        else {
            getVersTime[i] = 1 / getTime[i];
        }

    }
    console.log("getVersTime" + getVersTime);
    for(let i = 0; i < getVersTime.length; i++) {
        console.log("gestTime" + getTime[i]);
        if(getVersTime[i] === Math.max(...getVersTime)) {
            console.log(getVersTime[i])
            resultWorstTime = Math.max(...getVersTime);
            worstResult = getVersTime.indexOf(resultWorstTime);
        }
    }
    console.log("best result = " + worstResult);
    switch (worstResult) {
        case 0:
            document.getElementById("bestTime").innerHTML = "Insert sort";
            break;
        case 1:
            document.getElementById("bestTime").innerHTML = "Select sort";
            break;
        case 2:
            document.getElementById("bestTime").innerHTML = "Heap sort";
            break;
        case 3:
            document.getElementById("bestTime").innerHTML = "Merge sort";
            break;
        case 4:
            document.getElementById("bestTime").innerHTML = "Shell sort";
            break;
        case 5:
            document.getElementById("bestTime").innerHTML = "Quick sort";
            break;
        case 6:
            document.getElementById("bestTime").innerHTML = "Bubble sort";
            break;
    }
    return time;
}

/**
 * Retrieves the algorithm that gives the worst sorting time.
 *@author Siham Tabbaa
 */
function performanceWorstTime() {
    let getTime = [...arrayTime], resultWorstTime = 0, worstResult;
    console.log(getTime);
    for(let i = 0; i < getTime.length; i++) {
        if(getTime[i] === Math.max(...getTime)) {
            resultWorstTime = Math.max(...getTime);
            worstResult = getTime.indexOf(resultWorstTime);
        }
    }

    console.log("worst result = " + worstResult);
    switch (worstResult) {
        case 0:
            document.getElementById("worstTime").innerHTML = "Insert sort";
            break;
        case 1:
            document.getElementById("worstTime").innerHTML = "Select sort";
            break;
        case 2:
            document.getElementById("worstTime").innerHTML = "Heap sort";
            break;
        case 3:
            document.getElementById("worstTime").innerHTML = "Merge sort";
            break;
        case 4:
            document.getElementById("worstTime").innerHTML = "Shell sort";
            break;
        case 5:
            document.getElementById("worstTime").innerHTML = "Quick sort";
            break;
        case 6:
            document.getElementById("worstTime").innerHTML = "Bubble sort";
            break;
    }
    return time;
}

/**
 * Retrieves the algorithm with the lowest number of iterations.
 *@author Siham Tabbaa & Pierre Save
 */
function performanceBestTurn() {
    let getTurn = tabBestTurn, resultBestTurn = 0, bestResult;

    for(let i = 0; i < getTurn.length; i++) {
        console.log("gestTurn" + getTurn[i]);
        if(getTurn[i] === Math.min(...getTurn)) {
            console.log(getTurn[i])
            resultBestTurn = Math.min(...getTurn);
            bestResult = getTurn.indexOf(resultBestTurn);
        }
    }
    console.log("best result = " + bestResult);
    switch (bestResult) {
        case 0:
            document.getElementById("bestTurn").innerHTML = "Insert sort";
            break;
        case 1:
            document.getElementById("bestTurn").innerHTML = "Select sort";
            break;
        case 2:
            document.getElementById("bestTurn").innerHTML = "Heap sort";
            break;
        case 3:
            document.getElementById("bestTurn").innerHTML = "Merge sort";
            break;
        case 4:
            document.getElementById("bestTurn").innerHTML = "Shell sort";
            break;
        case 5:
            document.getElementById("bestTurn").innerHTML = "Quick sort";
            break;
        case 6:
            document.getElementById("bestTurn").innerHTML = "Bubble sort";
            break;
    }
    return tabBestTurn;
}

/**
 * Retrieves the algorithm with the highest number of iterations
 *@author Siham Tabbaa & Pierre Save
 */
function performanceWorstTurn() {
    let getTurn = [...tabBestTurn], resultWorstTurn = 0, worstResult;
    console.log(getTurn);
    for(let i = 0; i < getTurn.length; i++) {
        if(getTurn[i] === Math.max(...getTurn)) {
            resultWorstTurn = Math.max(...getTurn);
            worstResult = getTurn.indexOf(resultWorstTurn);
        }
    }

    console.log("worst result = " + worstResult);
    switch (worstResult) {
        case 0:
            document.getElementById("worstTurn").innerHTML = "Insert sort";
            break;
        case 1:
            document.getElementById("worstTurn").innerHTML = "Select sort";
            break;
        case 2:
            document.getElementById("worstTurn").innerHTML = "Heap sort";
            break;
        case 3:
            document.getElementById("worstTurn").innerHTML = "Merge sort";
            break;
        case 4:
            document.getElementById("worstTurn").innerHTML = "Shell sort";
            break;
        case 5:
            document.getElementById("worstTurn").innerHTML = "Quick sort";
            break;
        case 6:
            document.getElementById("worstTurn").innerHTML = "Bubble sort";
            break;
    }
    return tabBestTurn;
}

/**
 * Gets the size written in the HTML form
 * @author Siham Tabbaa
 * @returns {*}
 */
function sizes() {
    let getSize;
    getSize = document.getElementById("size").value;
    document.getElementById("arraySize").innerHTML = getSize;
    return getSize;
}

/**
 * Gets the animation speed written in the HTML form
 * @author Siham Tabbaa
 * @returns {*}
 */
function speed() {
    let getSpeed;
    getSpeed = document.getElementById("speed").value;
    console.log("vitesse : " + getSpeed + " secondes entre chaque itération");
    document.getElementById("arraySpeed").innerHTML = getSpeed;
    return getSpeed;
}

/**
 * Allows you to initialize the table to be sorted according to the chosen situations
 * @author Siham Tabbaa
 */
function array() {
    let getSort = radioButton();
    let getArray;

    if(getSort === 1) {
        getArray = randomArray();
    }

    if(getSort === 2) {
        getArray = randomBest();
    }

    if(getSort === 3) {
        getArray = randomWorst();
    }

    return getArray;
}

/**
 * Gets which radio button is checked in the HTML form
 * @author Siham Tabbaa
 * @returns {*}
 */
function radioButton() {
    let getChoice, res;
    getChoice = document.getElementsByName("choices")
    for(let i = 0; i < getChoice.length; i++) {
        if(getChoice[i].type === "radio") {
            if(getChoice[i].checked) {
                if(getChoice[i].value === "random") {
                    res = 1;
                }

                if(getChoice[i].value === "best") {
                    res = 2;
                }

                if(getChoice[i].value === "worst") {
                    res = 3;
                }
            }
        }
    }
    return res;
}
/**
 * allows to retrieve what has been checked to compare the algorithms
 *@author Siham Tabbaa
 */
function checkBox() {
    let getChoice, res = [];
    getChoice = document.getElementsByName("checkSort")
    for(let i = 0; i < getChoice.length; i++) {
        if(getChoice[i].type === "checkbox") {
            if(getChoice[i].checked) {
                if(getChoice[i].value === "1") {
                    res.push(1);
                }

                if(getChoice[i].value === "2") {
                    res.push(2);
                }

                if(getChoice[i].value === "3") {
                    res.push(3);
                }

                if(getChoice[i].value === "4") {
                    res.push(4);
                }

                if(getChoice[i].value === "5") {
                    res.push(5);
                }

                if(getChoice[i].value === "6") {
                    res.push(6);
                }

                if(getChoice[i].value === "7") {
                    res.push(7);
                }
            }
        }
    }
    return res;
}

/**
 * Creates a random array
 * Its length is equal to the size written in the HTML form
 * The random values are between 0 and 100
 * @author Yves-Robert Estrada
 * @returns {*}
 */
function randomArray(){
    let array =[];
    let getSize = sizes();

    console.log("taille : " + getSize);
    for (let i = 0 ; i < getSize; i++){
        array[i] = Math.floor(Math.random() * (100 - 1)) + 1;
        console.log("i : " + i + "  array : " + array);
    }

    let res = "Tableau : ";
    for (let i = 0; i < getSize; i++) {
        res = res + array[i] + " | ";
    }
    console.log("res : " + res);
    return array;
}

/**
 * Creates an array sorted in ascending order
 * Its length is equal to the size written in the HTML form
 * The random values are between 0 and 100
 * @author Yves-Robert Estrada
 * @returns {*}
 */
function randomBest(){
    let array =[];
    let getSize = sizes();

    for (let i=0;i<getSize;i++) {
        array[i] = Math.floor(Math.random() * (100 - 1)) + 1;
    }
    array.sort(function(a, b) {
        return a - b;
    });
    let res = "Tableau : ";
    for (let i = 0; i < getSize; i++) {
        res = res + array[i] +" | ";
    }
    return array;
}


/**
 * Creates an array sorted in descending order
 * Its length is equal to the size written in the HTML form
 * The random values are between 0 and 100
 * @author Yves-Robert Estrada
 * @returns {*}
 */
function randomWorst() {
    let array = [];
    let getSize = sizes();
    for (let i = 0; i < getSize; i++) {
        array[i] = Math.floor(Math.random() * (100 - 1)) + 1;
    }
    array.sort(function(a, b) {
        return b - a;
    });
    let res = "Tableau : ";
    for (let i = 0; i < getSize; i++) {
        res = res + array[i] + " | ";
    }
    return array;
}


/**
 * Allows  to display iterations more slowly
 *@author Siham Tabbaa
 */
function sleep(ms){
    return new Promise(sleep => {
        setTimeout(() =>{sleep('')},ms);
    })
}




let bestTurn = document.getElementById("bestTurn");
let tabBestTurn = [];



//INSERT SORT
/**
 * insertSort algorithm adapted for comparison
 *@author Sinclair BALIVET
 */
function insertSort(getArray, getSpeed) {
    let i, j, tmp, counterInsert = 0;
    let size = sizes();
    console.log("DEBUT INSERT SORT");
    displayArray("Insert sort");
    for(i = 0; i < size; i++){
        for(j = 0; j < (size - i - 1 ); j++) {
            sleep( 1000 * getSpeed);
            if(getArray[j] > getArray[j + 1]) {
                displayValues(counterInsert, getArray);
                tmp = getArray[j];
                getArray[j] = getArray[j + 1];
                getArray[j+1] = tmp;
                console.log("itération insert: " + counterInsert + " array = " + getArray);
                counterInsert++;
            }
        }
    }
    document.getElementById("counterInsert").innerHTML = counterInsert;
    tabBestTurn.push(counterInsert);
    console.log("FIN INSERT SORT");
    return getArray;
}

//SELECT SORT
/**
 * selectSort algorithm adapted for comparison
 *@author Siham Tabbaa
 */
function selectSort(getArray, getSpeed) {
    let counterSelect = 0, tmp, i = 0;
    let size = sizes();
    console.log("DEBUT SELECT SORT");
    displayArray("Select sort");
    for (i = 0; i < size; i++) {
        sleep( 1000 * getSpeed);
        let minVal = i;
        for (let j = i+1;j<size;j++) {
            if (getArray[minVal] > getArray[j]) {
                minVal=j;
            }
        }
        if (minVal !== i) {
            let tmp = getArray[i];
            getArray[i] = getArray[minVal];
            getArray[minVal] = tmp;
            displayValues(counterSelect, getArray);
            counterSelect++;
            console.log("itération select: " + counterSelect + " array = " + getArray);
        }
    }
    document.getElementById("counterSelect").innerHTML = counterSelect;
    tabBestTurn.push(counterSelect);
    console.log("FIN SELECT SORT");
    return getArray;
}

//HEAP SORT
/**
 * becomeHeap algorithm adapted for comparison
 *@author Sinclair Balivet
 */
function becomeHeap(array, length, parentIndex) {
    let largest = parentIndex;
    let left=parentIndex*2+1;
    let right=left+1;

    if (left < length && array[left] > array[largest]){
        largest=left;
    }

    if (right < length && array[right] > array[largest]){
        largest=right;
    }

    if (largest !== parentIndex){
        [array[parentIndex], array[largest]] = [array[largest], array[parentIndex]];
        becomeHeap(array,length,largest);
    }
    return array;
}

/**
 * heapSort algorithm adapted for comparison
 *@author Sinclair Balivet
 */
function heapSort(getArray) {
    let size = sizes();
    let getSpeed = speed();
    let lastParentNode=Math.floor(size/2-1);
    let lastChild=size-1;
    let counterHeap = 0;
    displayArray("Heap sort");
    while (lastParentNode>= 0){
        becomeHeap(getArray,size,lastParentNode);
        lastParentNode--;
    }

    while (lastChild >= 0) {
        displayValues(counterHeap, getArray);
        sleep( 1000 * getSpeed);
        [getArray[0],getArray[lastChild]] = [getArray[lastChild],getArray[0]];
        becomeHeap(getArray,lastChild,0);
        lastChild--;
        console.log("itération heap : " + counterHeap + " array = " + getArray);
        counterHeap++;
    }
    console.log("heap trié en " + counterHeap + " tour");
    document.getElementById("counterHeap").innerHTML = counterHeap;
    tabBestTurn.push(counterHeap);
    return getArray;
}
/**
 * execute heapSort
 *@author Siham Tabbaa
 */
function doHeapSort(getArray) {
    console.log("DEBUT HEAP ");
    heapSort(getArray)
}

//MERGE SORT
let counterMerge = 0;
/**
 * mergeSortTopDown algorithm adapted for comparison
 *@author Yves-Robert Estrada
 */
function mergeSortTopDown(getArray) {
    if(getArray.length <= 1) {
        return getArray;
    }
    const middle = Math.floor(getArray.length / 2);
    const left = getArray.slice(0,middle);
    const right = getArray.slice(middle);

    return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}
/**
 * mergeTopDown algorithm adapted for comparison
 *@author Yves-Robert Estrada
 */
function mergeTopDown(left,right){
    let getArray = [];

    while (left.length && right.length){
        if (left[0] < right[0]){
            getArray.push(left.shift());
        } else {
            getArray.push(right.shift());
        }
        displayValues(counterMerge, getArray);
        counterMerge++;
    }
    return getArray.concat(left.slice()).concat(right.slice());
}
/**
 *  execute MergeSort
 *@author Siham Tabbaa
 */
function doMergeSort(getArray) {
    console.log("DEBUT MERGE");
    displayArray("Merge sort");
    getArray = mergeSortTopDown(getArray);
    console.log(getArray);
    console.log("nombre de tour : " + counterMerge);
    tabBestTurn.push(counterMerge);
    document.getElementById("counterMerge").innerHTML = counterMerge;
}

//SHELL SORT
/**
 * shellSort algorithm adapted for comparison
 *@author 
 */
function shellSort(getArray, getSpeed){
    console.log("DEBUT SHELL");
    displayArray("Shell sort");
    let l = getArray.length;
    let counterShell = 0;
    for (let k = Math.floor(l/2); k > 0; k = Math.floor(k/2)) { // k = écart
        for (let i = k; i < l; i += 1){
            displayValues(counterShell, getArray);
            sleep(getSpeed*1000);
            let temp = getArray[i];
            let j;
            for (j = i; j >= k && getArray[j - k] > temp; j -= k){
                getArray[j] = getArray[j - k];
            }
            getArray[j] = temp;
            console.log("Itération shell : " + counterShell + " array = " + getArray);
            counterShell++;
        }
    }
    table.innerHTML+="</div>"
    document.getElementById("counterShell").innerHTML = counterShell;
    tabBestTurn.push(counterShell);
    console.log("FIN SHELL");
    return getArray;
}

//QUICK SORT

let counterQuick = 0;
/**
 * division for quickSort algorithm adapted for comparison 
 *@author Pierre Save
 */
function division(array, left, right) {
    counterQuick++;
    let pivot = array[Math.floor((right + left) / 2)]; //élément au millieu du tableau
    let l = left; //pointeur de recherche gauche
    let r = right; //pointeur de recherche droit
    let getSpeed = speed();
    while (l <= r) {
        sleep(getSpeed*1000);
        console.log("itération quick3 : " + counterQuick + " array = " + array);
        //Pour partie du côté gauche du pivot du tableau Array
        while (array[l] < pivot) {
            l++;
        }
        //Pour partie du côté droit du pivot du tableau Array
        while (array[r] > pivot) {
            r--;
        }
        if (l <= r) {
            let tmp = array[l];
            array[l] = array[r];
            console.log("itération quick1 : " + " array = " + array);
            array[r] = tmp;
            l++;
            r--;
            console.log("itération quick2 : " + " array = " + array);
        }
    }
    return l;
}

/**
 * quickSort algorithm adapted for comparison 
 *@author Pierre Save
 */
function quickSort(array, left, right) {
    let index, getSpeed = speed();
    displayValues(counterQuick, array);
    if (array.length > 1) {
        index = division(array, left, right); //index retourné par la division

        sleep(getSpeed*1000);
        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }
        if (index < right) {
            quickSort(array, index, right);
        }
    }
    return "FIN : " + array;
}

/**
 * execute QuickSort
 *@author Siham Tabbaa
 */
function doQuickSort(getArray) {
    displayArray("Quick sort");
    console.log(getArray);
    getArray = quickSort(getArray, 0, getArray.length-1);
    document.getElementById("counterQuick").innerHTML = counterQuick;
    tabBestTurn.push(counterQuick);
    console.log(getArray);
}

//BUBBLE SORT
/**
 * bubbleSort algorithm adapted for comparison 
 *@author Siham Tabbaa
 * @returns {*}
 */
function bubbleSort(getArray, getSpeed) {
    let i, j, size, tmp, counterBubble = 0;
    size = getArray.length;
    console.log("DEBUT BUBBLE");
    displayArray("Bubble sort");
    for(i = 0; i < size; i++){
        for(j = 0; j < (size - i - 1 ); j++) {
            displayValues(counterBubble, getArray);
            sleep(getSpeed*1000);
            if(getArray[j] > getArray[j + 1]) {
                tmp = getArray[j];
                getArray[j] = getArray[j + 1];
                getArray[j+1] = tmp;
                console.log("Itération bubble : " + counterBubble + " array = " + getArray);
                counterBubble++;
            }
        }
    }
    table.innerHTML+="</div>"
    document.getElementById("counterBubble").innerHTML = counterBubble;
    tabBestTurn.push(counterBubble);
    console.log("FIN BUBBLE");
    displayValues(counterBubble, getArray);
    return getArray;
}

//Affiche les titres "Itérations" et le nom de l'algo
/**
 * Display Array
 *@author Pierre Save
 */
function displayArray(arrayName) {
    table.innerHTML += `<div class="headAnim">Iteration</div><div class="headAnim" id="algoname">${arrayName}</div>`;
}

//Affiche les valeurs dedans
/**
 * Display values
 *@author Pierre Save
 */
function displayValues(nbIteration, array) {
    table.innerHTML += `<div class="items">${nbIteration}</div>`;
    table.innerHTML += `<div class="items">${array.toString()}</div>`;
}

/**
 * show hide
 *@author Antoine Bondet
 */
function ShowHide()
{
    let divInfo = document.getElementById('box');
    let boiteInfo = document.getElementById('boite');

    if (divInfo.style.display == 'none')
        divInfo.style.display = 'block';

    if (boiteInfo.style.display == 'none')
        boiteInfo.style.display = 'block';
}


/**
 * redirection to the graph when clicking the compare button
 *@author Antoine Bondet
 */
jQuery(function($) {
    $('#submit').click(function () {
        //recuperation de ce qui a dans le href de la balise
        var ancre = "boite";
        var size = $("#" + ancre).offset().top;
        //scrool jusqu'a id = à l'ancre avec une animation
        $("html, body").animate({
            scrollTop: size
        }, 1000);
    });
});
