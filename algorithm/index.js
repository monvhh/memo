let arr=[];
function sumOfn(sum,n){
    if(sum<=0 || n<=0){
        return;
    }
    if(sum==n){
        arr.push(n)
        
    }
    arr.push(n)
    arr.push(sumOfn(sum-n,n-1))
    arr.pop()
    arr.push(sumOfn(sum,n-1))
}