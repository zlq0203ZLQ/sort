//冒泡排序
function funBubbleSort(array){
    let flag = true
    for(let i = 0;i<array.length-1&&flag;i++){
        flag = false
        for(let j = 0;j<array.length-1-i;j++){
            if(array[j]>array[j+1]){
                let tem = array[j]
                array[j] = array[j+1]
                array[j+1] = tem
                flag = true
            }
        }
    }
    console.log(array)
    
}
let arr = [3,1,4,2,5]
funBubbleSort(arr)

// 最佳情况下冒泡排序只需一次遍历就能确定数组已经排好序，不需要进行下一次遍历，所以最佳情况下，时间复杂度为** O(n)。
// 最坏情况下冒泡排序需要n-1次遍历，第一次遍历需要比较n-1次，第二次遍历需要n-2次，...，最后一次需要比较1次，最差情况下时间复杂度为** O(n^2)

