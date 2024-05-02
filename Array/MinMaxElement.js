const arr=[2,3,1,4,26,7,4,2,7,4,7];

MinMax(arr);

function MinMax(arr){
    let minValue=arr[0];
    let maxValue=arr[0];
    for(let ele of arr){
        if(ele<minValue){
            minValue=ele;
        }else if(ele>maxValue){
            maxValue=ele;
        }
    }
    console.log(`Min : ${minValue}\nMax : ${maxValue}`);
}