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

window.onload = onLoad;

let myChart = new Chart;

/**
 * Makes an animated chart for a given array
 * @author Siham Tabbaa & Quentin Marchal & Yves-Robert Estrada
 * @param array The array to chart
 */
function chartIt(array) {

	// Initialise le tableau des index
    let arrayIndex =[];

	// Initialise le tableau des couleurs
    let colors =[];

	// Rempli le tableau des labels selon la taille du tableau choisi
    for (let i =0; i<array.length; i++){
        arrayIndex.push(i);
    }

	// Rempli le tableau des couleurs avec la couleur jaune
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
                label: "Graphique de l'algorithme Heap-sort",
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
        array[i] = Math.floor(Math.random() * (100 - 1)) + 1;
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

/**
 * Renders the animated chart and the summary table
 * @author Siham Tabbaa
 */
function checkValues() {
    let sz = document.getElementById("size");
    let s = document.getElementById("speed");
    let error = document.getElementById("error");

	// Affiche des messages d'érreurs si des champs sont vides/incorrectement remplis
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
        let animationSpeed=speed()*1000;

        let array;
        let getRadio = radioButton();

        if(getRadio === 1) {
            array = randomArray();
        }

        if(getRadio === 2) {
            array = randomBest();
        }

        if(getRadio === 3) {
            array = randomWorst();
        }
		//Réinitialise le graphique ( si il y en avait un avant)
        myChart.destroy();
		// Initialise un graphique avec le tableau donné en paramètre
        chartIt(array);

        let randomArrayValue=array;
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
        AfficherMasquer()
        getValueHeapSort();
        heapSort(randomArrayValue,animationSpeed);

    }
}

let counter = 0;

/**
 * Does Heap sort without animation parts
 * @author Sinclair Balivet
 * @param array 
 * @param length 
 * @param parentIndex 
 * @returns {*}
 */
function trueBecomeHeap(array, length, parentIndex) {
    let largest = parentIndex;
    let left = parentIndex*2+1;
    let right = left+1;

    if (left < length && array[left] > array[largest]){
        largest=left;
    }

    if (right < length && array[right] > array[largest]){
        largest=right;
    }

    if (largest !== parentIndex){
        [array[parentIndex], array[largest]] = [array[largest], array[parentIndex]];
        trueBecomeHeap(array,length,largest);
    }
    counter++;
    return array;
}

/**
 * Does Heap sort without animation parts
 * @author Sinclair Balivet
 * @param getArray The array to sort
 * @returns {*}
 */
function trueHeapSort(getArray) {
	//Assigne la taille du tableau en fonction de la taille choisi dans le menu taille
    let size = sizes();

	// Construit le tableau (réarrange le tableau)
    let lastParentNode=Math.floor(size/2-1);
    let lastChild=size-1;

    while (lastParentNode>= 0){
        trueBecomeHeap(getArray,size,lastParentNode);
        lastParentNode--;
    }

    while (lastChild >= 0) {
        [getArray[0],getArray[lastChild]] = [getArray[lastChild],getArray[0]];
        trueBecomeHeap(getArray,lastChild,0);
        lastChild--;
    }

	// renvoie le tableau trié
    return getArray;
}


/**
 * Gets the real results of Heap sort
 * @author Siham Tabbaa
 * @returns {*}
 */
function getValueHeapSort() {
    let array;
    let getRadio = radioButton();
	// Récupère le temps de début
    let begin = performance.now();

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

    console.log("type array dude : " + array)

    trueHeapSort(array);

    console.log("Tableau trié en : " + counter + " tours");

	// Récupère le temps de fin
    let ending = performance.now();

	// Calcul le temps d'éxecution
    let execute = ending - begin;

	// Convertie en secondes le temps d'éxecution
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
 * Animates Select sort
 * @author Sinclair Balivet
 * @param array The array to sort
 * @param length The length
 * @param animationSpeed The speed of the animation
 * @returns {*}
 */
function becomeHeap(array, length, parentIndex) {
    var largest = parentIndex; // Initialize largest as root
    var l = 2 * parentIndex + 1; // left = 2*i + 1
    var r = 2 * parentIndex + 2; // right = 2*i + 2

    if (l < length && array[l] > array[largest])
        largest = l;

    if (r < length && array[r] > array[largest])
        largest = r;

    if (largest != parentIndex) {
        var swap = array[parentIndex];
        array[parentIndex] = array[largest];
        array[largest] = swap;

        becomeHeap(array, length, largest);
    }
}

/**
 * Animates Heap sort
 * @author Yves-Robert Estrada & Sinclair Balivet
 * @param array The array to sort
 * @param animationSpeed The speed of the animation
 * @returns {*}
 */
async function heapSort(array,animationSpeed) {
    var n = array.length;

    for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
        becomeHeap(array, n, i);

    for (var i = n - 1; i > 0; i--) {
        await waitform(animationSpeed);
        var temp = array[0];

        await waitform(500);
        array[0] = array[i];
        myChart.data.datasets.forEach((dataset) => {
            dataset.data[0]=array[i];
        });;
        myChart.update();

        array[i] = temp;
        myChart.data.datasets.forEach((dataset) => {
            dataset.data[i]=temp;
        });;
        myChart.update();

        becomeHeap(array, i, 0);
    }

    console.log(array);
    return array;
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