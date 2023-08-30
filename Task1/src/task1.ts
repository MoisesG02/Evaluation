//Write a function to reverse the elements of a given array while keeping special characters in their original positions. The function should handle dynamic changes in the array and special character positions\\

/*Input:

['n', 2, '&', 'a', 'l', 9, '$', 'q', 47, 'i', 'a', 'j', 'b', 'z', '%', 8]

Expected Output:

[8, 'z', '&', 'b', 'j', 'a', '$', 'i', 47, 'q', 9, 'l', 'a', 2, '%', 'n']*/


export const array1: Array<string|number> = ['n', 2, '&', 'a', 'l', 9, '$', 'q', 47, 'i', 'a', 'j', 'b', 'z', '%', 8]


function identify_SpecialCharacters(item: any){
        
    const regexp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    // console.log(regexp.test(item))
      return regexp.test(item)
    


}


export function swapElements(Arr1: Array<String|Number>) {
    
    const newArray : Array<String|Number> = [] // New array





   for(let i = 0 ; i< Arr1.length;i++){         // Using a for cicle i am pushing the index of the special characters in an array if the function "identify_SpecialCharacters" returns true, if not the "newArray" catch the "normal characters "
    if(identify_SpecialCharacters(Arr1[i])){
        console.log("is special")
    }
    else{
        newArray.push(Arr1[i])
    }

   }

   newArray.reverse()// using reverse, i swap the positions of the elements.

   for(let i = 0 ; i<Arr1.length;i++){
    if(identify_SpecialCharacters(Arr1[i]) == true ){ // i use the original array to get the especial characters index, so i can use splice in the "newArray" inserting the special character in the index "i", with the Arr1[i] element (special character)
        newArray.splice(i,0,Arr1[i])
    }
    
    else{
        console.log("no changue")
    }

   }
   
   console.log(newArray)

}




