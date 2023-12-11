function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort(function(a,b){
		return a-b;
	});
	let sum2=0;
	let n=arr.length;
	// for(let i=0;i<n;i+=2){
	// 	let sum1=0;
	// 	sum1=arr[i]+arr[i-1];
	// 	sum2+=sum1;
	// }
	// if(n%2!==0) sum2+=arr[n-1];
	
	let res=arr.reduce(function(prev,current){
		return prev+current;
	})
   return res;
}

module.exports=mincost;
