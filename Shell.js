//希尔排序
function funShellSort(arr){
    let len = arr.length
    for (let fraction = Math.floor(len / 2); fraction > 0; fraction = Math.floor(fraction / 2)) {
        for (let i = fraction; i < len; i++) {
            for (let j = i - fraction; j >= 0 && arr[j] > arr[fraction + j]; j -= fraction) {
                let temp = arr[j];
                arr[j] = arr[fraction + j];
                arr[fraction + j] = temp;
            }
        }
    }
    console.log(arr);
}

let arr = [3,1,4,2,5]
funShellSort(arr)