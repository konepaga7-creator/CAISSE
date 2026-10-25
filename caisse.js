const budgetduclient = 20000;
const prixduncahier = 1500;
const quantitedecahier = 4;
const prixdunstylo = 500;
const quantitedestylo = 3;


const montantdescahiers = prixduncahier * quantitedecahier;
const montantdesstylos = prixdunstylo * quantitedestylo;
const montanttotaldesachats = montantdescahiers + montantdesstylos;

console.log("===== CAISSE =====");
console.log("Cahiers : ", montantdescahiers ," FCFA");
console.log("Stylos : ", montantdesstylos ," FCFA");
console.log("Total : " ,montanttotaldesachats ," FCFA");
console.log("Budget : ", budgetduclient ," FCFA");


if(montanttotaldesachats <= budgetduclient){
    console.log("budget suffisant")
}else {
    console.log("budget insuffisant")
}


