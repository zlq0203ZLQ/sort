//快速排序
function funQuickSort(arr){
    if(arr.length <= 1) {
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    // let pivot = arr[pivotIndex];
    let pivot = arr.splice(pivotIndex,1)[0];
    let left = [],
        right = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i])
        }
    }
    return funQuickSort(left).concat([pivot],funQuickSort(right));
}

let arr = [10, 3, 1, 5, 11, 2, 0, 6, 3];
console.log(funQuickSort(arr));
