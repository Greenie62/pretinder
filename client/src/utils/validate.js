


export const measureLength=(password)=>{
    if(password.length < 9){
        return {error:`Password is too short!\n Needs ${9-password.length} more characters!`}
    }
    else{
        return;
    }
}



export const measureAlphaNum=(password)=>{
    let nums=['1','2','3','4','5','6','7','8','9']
    let letters =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let noNums=false;
    let noLetters=false;

    nums.forEach(n=>{
        if(password.split("").indexOf(n) !== -1){
            noNums=true
        }
    })

    letters.forEach(n=>{
        if(password.split("").indexOf(n) !== -1){
            noLetters=true
        }
    })
    
    if(!noNums){
        return {error:"password needs to have a number"}
    }

    if(!noLetters){
        return {error:"password needs to have letters"}
    }
    return;
}


