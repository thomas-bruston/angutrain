type Statut = "en_attente" | "expédiée" | "livrée" | "annulée";

export interface Commande{
    id : number;
    client : string;
    montant: number;
    statut: Statut;
}

export function filterArray<T>(tableau : T[], critere : (item:T) => boolean) : T[]{
    return tableau.filter(critere)
}

export function calculerTotal (commandes : Commande[]) : number{
    return commandes.reduce((total, c) => total + c.montant, 0);
}

export function findById <T extends {id : number}>(tableau : T[], id : number) : T | undefined{
    return tableau.find(item => item.id === id);
}

export const commandes: Commande[] = [
  { id: 1, client: "Alice", montant: 150, statut: "livrée" },
  { id: 2, client: "Bob", montant: 80, statut: "en_attente" },
  { id: 3, client: "Carol", montant: 320, statut: "expédiée" },
  { id: 4, client: "David", montant: 50, statut: "annulée" },
];



