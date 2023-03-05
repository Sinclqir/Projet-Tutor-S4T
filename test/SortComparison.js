/**
 * the purpose of this class is to return an array with information like time and performance
 * wich result in a shape like this one [ 1 , time , performance]
 * 1 correspond to a sort, here insert sort
 * Each sort has its number
 * insert sort = 1
 * select sort =2
 * heap sort = 3
 * merge sort = 4
 * shell sort = 5
 * quick sort = 6
 * bubble sort= 7
 */

class SortComparison {

    constructor() {

    }

    comparison(array) {
        let result = new Float64Array(8);
        for (let i = 1; i < 8; i++) {
            result[i] =timeSort(i, array)
        }

        function timeSort(sort, array) {
            if (sort == 1) {
                let duration=0
                while (""+duration=="0"){
                    let start = performance.now();
                    insertSort(array);
                    duration = performance.now() - start;

                }
                console.log("insert"+duration)
                return duration

            } else if (sort == 2) {
                let duration=0
                while (""+duration=="0"){
                    let start = performance.now();
                    selectSort(array);
                    duration = performance.now() - start;
                }

                console.log("selectSort"+duration)
                return duration

            } else if (sort == 3) {
                let duration=0
                while (""+duration=="0"){
                    let start = performance.now();
                    heapSort(array);
                    duration = performance.now() - start;
                }
                console.log("heapSort"+duration)
                return duration

            } else if (sort == 4) {
                let duration=0
                while (""+duration=="0"){
                    let start = performance.now();
                    mergeSort(array);
                    duration = performance.now() - start;
                }
                console.log("mergeSort"+duration)
                return duration

            } else if (sort == 5) {
                let duration=0
                while (""+duration=="0"){
                    let start = performance.now();
                    shellSort(array);
                    duration = performance.now() - start;
                }

                console.log("shellSort"+duration)
                return duration

            } else if (sort == 6) {
                let duration=0
                while (""+duration=="0"){
                    let start = performance.now();
                    quickSort(array);
                    duration = performance.now() - start;
                }
                console.log("quickSort"+duration)
                return duration

            } else if (sort == 7) {
                let duration=0
                while (""+duration=="0"){
                    let start = performance.now();
                    bubbleSort(array);
                    duration = performance.now() - start;
                }
                console.log("bubbleSort"+duration)
                return duration
            }


        }
        return result;
    }


}
function onLoad() {
    let comp =new SortComparison()
    let integers = [1,2,3,7,9,3,5,4];

    let array =comp.comparison(integers);
    for (let i=0;i<array.length;i++){
        console.log(i+"="+array[i]);
    }
}
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

function selectSort(array){
    for (let i=0; i < array.length; i++){
        let min=i;

        for (let j=i+1; j < array.length; j++){
            if (array[j] < array[min]){
                min=j;
            }

            if (i !== min){
                [array[i], array[min]] = [array[min],array[i]];
            }
        }
    }
    return array;
}

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