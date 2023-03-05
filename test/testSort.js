/**
 *
 * @type {number[]}
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
//Create const ref array
const T= [3,9,45,12,87,4,29,457,212,56];

//Create clone of array who will print results
let res;

function onLoad() {

    //Print ref array
    document.write("Le tableau de base: ");
    viewArray(T);

    //Print sorted array with Merge method
    document.write("Le tableau est trie grace a Merge: ");
    res = mergeSort(T);
    viewArray(res);

    //Print sorted array with Insert method
    document.write("Le tableau est trie grace a Insert: ");
    res = insertSort(T);
    viewArray(res);

    //Print sorted array with Shell method
    document.write("Le tableau est trie grace a Shell: ");
    res = shellSort(T);
    viewArray(res);

    //Print sorted array with Quick method
    document.write("Le tableau est trie grace a Quick: ");
    res = quickSort(T);
    viewArray(res);

    //Print sorted array with Bubble method
    document.write("Le tableau est trie grace a Bubble: ");
    res = bubbleSort(T);
    viewArray(res);

    //Print sorted array with Heap method
    document.write("Le tableau est trie grace a Heap: ");
    res = heapSort(T);
    viewArray(res);

    //Print sorted array with Select method
    document.write("Le tableau est trie grace a Select: ");
    res = selectSort(T);
    viewArray(res);

}

//Function for printing array
function viewArray(array) {
    let size, i;

    size = array.length;
    document.write("|");

    for (i = 0; i < size; i++) {
        document.write(array[i] + " | ");
    }
    document.write("<br><br>");
}

//Functions for Merge-Sort
function mergeSort(array) {
    if(array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0,middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left,right){
    let array = [];

    while (left.length && right.length){
        if (left[0] < right[0]){
            array.push(left.shift());
        } else {
            array.push(right.shift());
        }
    }

    return array.concat(left.slice()).concat(right.slice());
}

//Function for Insert-Sort
function insertSort(array) {
    let counter =0;
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j;
        for(j=i-1; j >= 0 && array[j] > current;j--) {
            array[j + 1] = array[j] }
        array[j + 1] = current
        counter++;
    }
    return array;
}

//Function for Shell-Sort
function shellSort(array) {
    let size, i, j, k, tmp, counter = 0;

    size = array.length;

    for (i = Math.floor(size/2); i > 0; i = Math.floor(i/2)) {
        for (j = i; j < size; j++) {
            tmp = array[j];
            for (k = j; (array[k - i] > tmp) && (k >= i) ; k = k - i) {
                array[k] = array[k - i];
            }
            array[k] = tmp;
            counter++;
        }
    }
    return array;
}

//Functions for Select-Sort
function selectSort(array){
    for (let i=0; i < array.length; i++){
        let min=i;

        for (let j=i+1; j < array.length; j++){
            if (array[j] < array[min]){
                min=j;
            }

            if (i !== min){
                [array[i], array[min]] = [array[min]. array[i]];
            }
        }
    }
    return array;
}

//Functions for Quick-Sort
function divide(array, left, right) {

    let pivot = array[Math.floor((right + left) / 2)];
    let l = left;
    let r = right;

    while (l <= r) {
        while (array[l] < pivot) {
            l++;
        }

        while (array[r] > pivot) {
            r--;
        }


        if (l <= r) {
            swap(array, l, r);
            l++;
            r--;
        }
    }
    return l;
}

function quickSort(array, left, right) {
    var index;

    if (array.length > 1) {
        index = divide(array, left, right);
        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }
        if (index < right) {
            quickSort(array, index, right);
        }
    }
    return array;
}

//Function for Bubble-Sort
function bubbleSort(array) {
    let i, j, size, tmp, counter = 0;

    size = array.length;

    for(i = 0; i < size; i++){
        for(j = 0; j < (size - i - 1 ); j++) {
            counter++;
            if(array[j] > array[j + 1]) {
                tmp = array[j];
                array[j] = array[j + 1];
                array[j+1] = tmp;
                pausecomp(1);
                update(array, myChart)
            }
        }
    }
    return array;
}

//Function for Heap-Sort
function becomeHeap(array, length, parentIndex) {
    let largest=parentIndex;
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

function heapSort(array) {
    let length=array.length;
    let lastParentNode=Math.floor(length/2-1);
    let lastChild=length-1;

    while (lastParentNode>= 0){
        becomeHeap(array,length,lastParentNode);
        lastParentNode--;
    }

    while (lastChild >= 0) {
        [array[0],array[lastChild]] = [array[lastChild],array[0]];
        becomeHeap(array,lastChild,0);
        lastChild--;
    }

    return array;
}