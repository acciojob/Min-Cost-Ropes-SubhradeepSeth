function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort(function(a,b){
		return a-b;
	})
	let sum2=0;
	let n=arr.length;
	for(let i=1;i<;i++){
		let sum1=0
		sum1=arr[i]+arr[i-1];
		sum2+=sum1;
	}
	if(n%2!==0) sum2+=arr[n-1];
   return sum2;
}

module.exports=mincost;
