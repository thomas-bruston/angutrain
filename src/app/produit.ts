// J2 - Interfaces & Classes TypeScript
export interface IProduit {
    id:number;
    nom:string;
    prix:number;
    stock: boolean;
    categorie?:string;
}

const Laptop : IProduit =  {
    id: 1,
    nom: "Apple",
    prix: 1200,
    stock : true,
    categorie : "Portable",


}

export class Produit implements IProduit {
    id: number;
    nom : string;
    prix : number;
    stock : boolean;
    categorie?: string;



constructor (id:number,nom:string,prix:number,stock:boolean,categorie?:string){
    this.id = id;
    this.nom = nom;
    this.prix = prix;
    this.stock = stock;
    this.categorie = categorie;
}

IsEnStock():boolean{
    return this.stock 

}
appliquerRemise(pourcentage:number):number{
    return this.prix *(1-pourcentage/100)


}}

