

export const fetchUsers=async(gender="female")=>{

    let json = await fetch(`https://randomuser.me/api?results=25&gender=${gender}`)
    let  {results} = await json.json();
        console.log(results)
         return results;
}




