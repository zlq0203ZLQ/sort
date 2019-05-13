//归并排序
// 融合两个有序数组，这里实际上是将数组 arr 分为两个数组
function funMergeArray(arr,first,mid,last,temp){
    let i = first;
    let m = mid;
    let j = mid + 1;
    let n = last;
    let k = 0;
    while(i<=m && j<=n){
        if(arr[i] < arr[j]){
            temp[k++] = arr[i++];
        }else{
            temp[k++] = arr[j++]
        }
    }
    while(i<=m){
        temp[k++] = arr[i++];
    }
    while(j<=n){
        temp[k++] = arr[j++];
    }
    for(let l = 0; l<k; l++){
        arr[first + l] = temp[l];
    }
    return arr
}

//递归实现归并排序

function funMergeSort(arr,first,last,temp){
    if(first < last){
        let mid = Math.floor((first+last)/2);
        funMergeSort(arr,first,mid,temp);
        funMergeSort(arr,mid+1,last,temp);
        arr = funMergeArray(arr,first,mid,last,temp)
    }
    return arr
}

let arr = [10, 3, 1, 5, 11, 2, 0, 6, 3];
let temp = new Array();
let SortedArr = funMergeSort(arr,0,arr.length-1,temp);

console.log(SortedArr);



