export enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
    MODERATEUR = "MODERATEUR"
}

export interface IUtilisateur{
    id : number;
    nom: string;
    email : string;
    role : Role ;
    actif : boolean

}

export function hasAccess ( user: IUtilisateur,roleRequis : Role, ):boolean{
    if (user.role === roleRequis){
    return true
    }
    else{
        return false
    }
   

}

export function getUsersByRole (users : IUtilisateur [], roleRequis : Role) : IUtilisateur[]{

return users.filter(user =>user.role === roleRequis)
}