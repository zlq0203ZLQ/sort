//插入排序
function funInsertSort(arr){
    let j
    for (let i=1;i<arr.length;i++){
        let temp = arr[i]
        j = i -1
        while(j>-1&&temp<arr[j]){
            arr[j+1] = arr[j]
            j --
        }
        arr[j+1] = temp
    }
    console.log(arr)
}

let arr = [3,1,4,2,5]
funInsertSort(arr)