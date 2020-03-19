let fortune=() =>{
    console.log("hi");
    let a = ["succesfull","married","accident","blunder","jail","kill","money","new ride","meet Chris Martin","Heaven","hell"]; 
    let c = Math.floor(Math.random() * 11);
    console.log(c);
    return a[c];
}
window.alert(fortune());