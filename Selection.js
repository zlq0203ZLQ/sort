//简单选择排序
function funSelectionSort(arr){
    for(let i = 0;i<arr.length-1;i++){
        let mink = i
        for(let j = i+1;j<arr.length;j++){
            if(arr[j]<arr[mink]){
                mink = j
            }
        }
        if(mink != i){
            let tem = arr[mink]
            arr[mink] = arr[i]
            arr[i] = tem
        }
    }
    console.log(arr)
}
let arr = [3,1,4,2,5]
funSelectionSort(arr)

// 当i=1时，需进行n-1次比较；当i=2时，需进行n-2次比较；依次类推，共需要进行的比较次数是(n-1)+(n-2)+…+2+1=n(n-1)/2，即进行比较操作的时间复杂度为 O(n^2) ，进行移动操作的时间复杂度为 O(n) 。总的时间复杂度为 O(n^2) **。
// 简单选择排序是不稳定排序。