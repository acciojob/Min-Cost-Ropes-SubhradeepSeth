function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort(function(a,b){
		return a-b;
	});
	let sum=0,sum1=0;
   for(let i=1;i<arr.length;){
        sum1=arr[i]+arr[i-1];
        arr[i]=sum1;
	   sum+=sum1;
       sum1=0;
	   arr.splice(0,1);
	   arr.sort(function(a,b){
		   return a-b;
	   })
   }
   return sum;
}

module.exports=mincost;
