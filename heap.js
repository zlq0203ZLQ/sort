//堆排序
let len;

function buildMaxHeap(arr){ //建立大顶堆
    len = arr.length;
    for(let i = Math.floor(len/2); i>=0; i--){
        heapify(arr, i);
    }
}

function heapify(arr, i){  //堆调整
    let left = 2 * i + 1,
        right = 2 * i +2,
        largest = i;
    if(left < len && arr[left] > arr[largest]){
        largest = left;
    }   
    if(right < len && arr[right] > arr[largest]){
        largest = right
    }
    if(largest !== i){
        swap(arr,i,largest);
        heapify(arr,largest);
    }
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function funHeapSort(arr){
    buildMaxHeap(arr);
    for(let i = arr.length - 1; i > 0; i--){
        swap(arr, 0, i);
        len -- ;
        heapify(arr,0);
    }
    return arr;
}

let arr = [10, 3, 1, 5, 11, 2, 0, 6, 3];
console.log(funHeapSort(arr));