function findMissing(arr1, arr2){

 var i;
 var missing_num;
 if ((arr1.length === 0) && (arr2.length === 0)){
   return 0;
 }
 for (i in arr2){
   if (arr1.length === arr2.length){
     return 0;
   }
   if (arr1.indexOf(arr2[i]) === -1){
     return missing_num = arr2[i];
   }
 }
};
module.exports = findMissing