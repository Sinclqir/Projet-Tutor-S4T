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
let createElement = document.createElement("table");

/**
 * Gives a click event to the submit button on load
 * @author Siham Tabbaa
 */
function onLoad() {
    console.log("Page chargé");

    let button = document.getElementById("submit");

    button.addEventListener("click", () => {
        checkValues();
    });
    createElement.innerHTML=""
}

// Créer le graphique myChart
window.onload = onLoad;

let myChart = new Chart;
/**
 * Make animation for a given array
 * @author Siham Tabbaa & Quentin Marchal & Yves-Robert Estrada
 * @param array The array to chart
 */
function chartIt(array) {

    let arrayIndex =[];
    let colors =[];

    for (let i =0; i<array.length; i++){
        arrayIndex.push(i);
    }

    for (let i=0; i<array.length; i++){
        colors[i]="yellow";
    }

    const data = {
        ys: array
    };

    const barColors={
        c: colors
    };

    const ctx = document.getElementById('chart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'bar',

        data: {
            labels: arrayIndex,
            datasets: [{
                label: "Graphique de l'algorithme Merge-sort",
                data: data.ys,
                fill: true,
                backgroundColor: barColors.c,
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                borderWidth: 1
            }]
        },
        options: {
            aspectRatio: 3,
            responsive: true,
            maintainAspectRatio: true,
            beginAtZero: true,
            tooltips: {
                mode: 'single',
            },
            animation: {
                duration:100,
            },
            scales: {
                x: {
                    title: {
                        color: 'white',
                        display: true,
                        text: 'Indice du tableau'
                    },
                    ticks: {
                        color: 'white',
                    },
                    grid: {
                        color: 'grey'
                    }
                },
                y: {
                    title: {
                        color: 'white',
                        display: true,
                        text: 'Valeur du tableau'
                    },

                    ticks: {
                        color: 'white',
                    },

                    grid: {
                        color: 'grey'
                    }
                }
            }
        }

    });
}

/**
 * Puts in pause the current instruction in async functions. 
 * @author Yves-Robert Estrada
 * @param ms The duration of the pause in ms
 */
function waitform(ms){
    return new Promise(resolve => {
        setTimeout(() =>{resolve('')},ms);
    })
}

/**
 * Gets the size written in the HTML form
 * @author Siham Tabbaa
 * @returns {*}
 */
function sizes() {
    let getSize;
	// Récupére la valeur saisie de par l'utilisateur dans le champ Taille
    getSize = document.getElementById("size").value;
    console.log("taille sizes: " + getSize);
    return getSize;
}

/**
 * Gets the animation speed written in the HTML form
 * @author Siham Tabbaa
 * @returns {*}
 */
function speed() {
    let getSpeed;
	// Récupére la valeur saisie de par l'utilisateur dans le champ Vitesse
    getSpeed = document.getElementById("speed").value;
    console.log("vitesse : " + getSpeed);
    return getSpeed;
}

/**
 * Gets which radio button is checked in the HTML form
 * @author Siham Tabbaa
 * @returns {*}
 */
function radioButton() {
    let getChoice, res;
	// Récupére sous forme de tableau la liste des éléments possédents un attribut name égale à "choices"
    getChoice = document.getElementsByName("choices")
    for(let i = 0; i < getChoice.length; i++) {
        if(getChoice[i].type == "radio") {
            if(getChoice[i].checked) {
                if(getChoice[i].value == "random") {
                    res = 1;
                }

                if(getChoice[i].value == "best") {
                    res = 2;
                }

                if(getChoice[i].value == "worst") {
                    res = 3;
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
		// Créer des valeurs alétoires entre 1 et 100
        array[i] = Math.floor(Math.random() * (100 - 1)) + 1;
        console.log("i : " + i + "  array : " + array);
    }

    let res = "Tableau : ";
    for (let i = 0; i < getSize; i++) {
        res = res + array[i] + " | ";
    }
    console.log("res : " + res);
    console.log("fin tab : " + array);
    console.log(array)
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
		// Créer des valeurs alétoires entre 1 et 100
        array[i] = Math.floor(Math.random() * (1000 - 1)) + 1;
    }
    array.sort(function(a, b) {
        return a - b;
    });
    let res = "Tableau : ";
    for (let i = 0; i < getSize; i++) {
        res = res + array[i] +" | ";
    }
    console.log("res : " + res);
    console.log("fin tab : " + array);
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
		// Créer des valeurs alétoires entre 1 et 100
        array[i] = Math.floor(Math.random() * (100 - 1)) + 1;
    }
    array.sort(function(a, b) {
        return b - a;
    });
    let res = "Tableau : ";
    for (let i = 0; i < getSize; i++) {
        res = res + array[i] + " | ";
    }
    console.log("res : " + res);
    console.log("fin tab : " + array);
    return array;
}

let arr;
let itmd = [], visited = []
var arrayLength;
var animationSpeed;

/**
 * Asynchronous MergeSort function
 * @author Sinclair Balivet
 * @returns {*}
 */
const performer = async () => {
    await mergeSort(0, arrayLength - 1);
}

/**
 * Renders the animated chart and the summary table
 * @author Siham Tabbaa
 */
function checkValues() {
    let sz = document.getElementById("size");
    let s = document.getElementById("speed");
    let error = document.getElementById("error");

    if ((sz.value < 5 || sz.value > 10000) && (s.value < 0 || s.value > 60)) {
        error.innerHTML = "Erreur il faut mettre une taille comprise entre  5 ou 10000 et une vitesse comprise entre 0 et 60"
        error.style.color = "red";
    } else if (sz.value < 5 || sz.value > 10000) {
        error.innerHTML = "Erreur il faut mettre une taille comprise entre  5 ou 10000"
        error.style.color = "red";
    } else if (s.value < 0 || s.value > 60) {
        error.innerHTML = "Erreur il faut mettre une vitesse comprise entre  0 ou 60"
        error.style.color = "red";
    } else {
        animationSpeed=speed()*1000;

        let array;
        let getRadio = radioButton();

		// Vérifie le numéro récupéré par getRadio
		// 1 = tableau aléatoire
		// 2 = tableau d'ordre croissant
		// 3 = tableau d'ordre décroissant
        if(getRadio === 1) {
            array = randomArray();
        }

        if(getRadio === 2) {
            array = randomBest();
        }

        if(getRadio === 3) {
            array = randomWorst();
        }

        arr=array;
		// Réinitialise le graphique (si il y en avait un avant)
        myChart.destroy();
		// Initialise un graphique avec le tableau donné en paramètre
        chartIt(arr);

		createElement.setAttribute("class", "table");
        createElement.innerHTML=
            '<tr>\n' +
            '<th class="thead2" rowspan="2">nombre de tours</th>\n' +
            '<th class="thead2" colspan="2">temps d\'éxécution</th>\n' +
            '</tr>\n' +
            '<tr>\n'+
            '<th class="thead2">milliseconde</th>\n'+
            '<th class="thead2">seconde</th>\n'+
            '</tr>\n'+
            '<tr>\n'+
            '<td class="tbody" id="l1">x</td>\n'+
            '<td class="tbody" id="l2">x</td>\n'+
            '<td class="tbody" id="l3">x</td>\n'+
            '</tr>\n';
        document.body.appendChild(createElement);

        arrayLength=arr.length;

        for (var i = 0; i < arrayLength; i++) {
            itmd.push(0);
        }
        
        AfficherMasquer();
        getValueMergeSort();

        console.log(arr);
        mergeSort(0, arrayLength - 1);
        performer();
        console.log("tab:"+arr);
        update(arr,myChart);
    }
}

let counter=0;

/**
 * Gets the real results of Merge sort
 * @author Siham Tabbaa
 * @returns {*}
 */
function getValueMergeSort() {
    let array;
    let getRadio = radioButton();
    let begin = performance.now();

    if(getRadio === 1) {
        array = randomArray();
    }

    if(getRadio === 2) {
        array = randomBest();
    }

    if(getRadio === 3) {
        array = randomWorst();
    }

    mergeSortTopDown(array);

    console.log("Tableau trié en : " + counter + " tours");
    let ending = performance.now();
    let execute = ending - begin;
    let getSecond = execute / 1000;
	document.getElementById("l1").innerHTML = counter;
    document.getElementById("l2").innerHTML = execute;
    document.getElementById("l3").innerHTML = getSecond;
    console.log("algo exécuté en : " + execute + " milisecondes.");
    console.log("algo exécuté en : " + getSecond + " secondes.");
	console.log("tableau trié : " + array);
    return array;
}

/**
 * Does Merge sort without animation parts
 * @author Yves-Robert Estrada
 * @param getArray The array to sort
 * @returns {*}
 */
function mergeSortTopDown(getArray) {
	counter++;
    if(getArray.length <= 1) {
        return getArray;
    }

    const middle = Math.floor(getArray.length / 2);
    const left = getArray.slice(0,middle);
    const right = getArray.slice(middle);

    return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}

/**
 * Does Merge sort without animation parts
 * @author Yves-Robert Estrada
 * @param left 
 * @param right 
 * @returns {*}
 */
function mergeTopDown(left,right){
    let getArray = [];

    while (left.length && right.length){
        if (left[0] < right[0]){
            getArray.push(left.shift());
        } else {
            getArray.push(right.shift());
        }
    }
    return getArray.concat(left.slice()).concat(right.slice());
}

/**
 * Sorts using Merge Sorting method
 * @author Sinclair Balivet
 * @param start
 * @param end
 * @returns {*}
 */
const mergeSort = async (start, end) => {
    if (start < end) {
        let mid = parseInt((start + end) >> 1);
        await mergeSort(start, mid);
        await mergeSort(mid + 1, end);
        await mergeArray(start, end);

        await timeout(animationSpeed);
        console.log("start:" +start+"  "+"mid:"+mid+"  end:"+end);
        console.log(arr);
        update(arr,myChart);
    }
}

/**
 * Updates the chart
 * @author Quentin Marchal
 * @param array
 * @param chart
 */
function update(array, chart) {
    chart.config.data.label = array;
    chart.update();
}

/**
 * Merging of two sub-arrays
 * @author Sinclair Balivet
 * @param start
 * @param end
 */
function mergeArray(start, end) {
    let mid = parseInt((start + end) >> 1);
    let start1 = start, start2 = mid + 1;
    let end1 = mid, end2 = end;

    let index = start

    while (start1 <= end1 && start2 <= end2) {
        if (arr[start1] <= arr[start2]) {
            itmd[index] = arr[start1];
            index = index + 1;
            start1 = start1 + 1;
        }
        else if(arr[start1] > arr[start2]) {
            itmd[index] = arr[start2];
            index = index + 1;
            start2 = start2 + 1;
        }
    }

    while (start1 <= end1) {
        itmd[index] = arr[start1];
        index = index + 1;
        start1 = start1 + 1;
    }

    while (start2 <= end2) {
        itmd[index] = arr[start2];
        index = index + 1;
        start2 = start2 + 1;
    }

    index = start;
    while (index <= end) {
        arr[index] = itmd[index];
        index++;
    }
}

/**
 * Puts in pause the current instruction in async functions. 
 * @author Sinclair Balivet
 * @param ms The duration of the pause in ms
 */
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Moves automatically to the chart once the submit button is clicked
 * @author Antoine Bondet
 */
jQuery(function($) {
    $('#submit').click(function () {
        //recuperation de ce qui a dans le href de la balise
        var ancre = "chart";
        var size = $("#" + ancre).offset().top;
        //scrool jusqu'a id = à l'ancre avec une animation
        $("html, body").animate({
            scrollTop: size
        }, 1000);
    });
});

/**
 * Displays the chart
 * @author Antoine Bondet
 */
function AfficherMasquer()
{
    let divInfo = document.getElementById('chartPos');

    if (divInfo.style.display == 'none')
        divInfo.style.display = 'block';

}