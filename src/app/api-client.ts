export interface IPost{
    id : number;
    userId : number;
    title : string;
    body : string;

}

export interface IUser{
    id : number;
    name : string;
    email: string;
    phone : string;

}

export async function getPosts () : Promise <IPost[]> {
     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
    
}

export async function getUserById(id:number) : Promise <IUser> {
     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return response.json();
    
}

export async function getPostsByUser(userId:number)  : Promise <IPost[]>{
    const response = await fetch (`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    return response.json()

}
    
