function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort(function(a,b){
		return a-b;
	});
	let sum=0;
   for(let i=1;i<arr.length;){
	   sum+=arr[i]+arr[i-1];
	   arr[i]=sum;
	   arr.splice(0,1);
	   arr.sort(function(a,b){
		   return a-b;
	   });
   }
}

module.exports=mincost;
