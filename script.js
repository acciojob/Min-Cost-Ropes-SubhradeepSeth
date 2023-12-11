function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort(function(a,b){
		return a-b;
	});
   console.log(arr);
   let x=[];
   let y=0;
	let n=arr.length;	
	let res=arr.reduce(function(p,c){
		x[y]=p+c;
      y++;
      return p+c;
	});
   console.log(x);
   let sum1=0;
   for(let i=0;i<x.length;i++){
      sum1+=x[i];
   }
   return sum1;
}

module.exports=mincost;
