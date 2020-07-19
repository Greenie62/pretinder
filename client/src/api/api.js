



export const fetchUsers=async()=>{

    let users = await fetch(`https://randomuser.me/api/`)

    return users;
}




