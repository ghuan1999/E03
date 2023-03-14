function demo():void{
    console.log("abc");
    let input:HTMLInputElement = <HTMLInputElement>document.getElementById("img-name");
    let name=input.value;
    let result:string="./img/" + name+ ".png";
    let h:HTMLImageElement=<HTMLImageElement>document.getElementById("dice-1");
    console.log(result);
    h.src=result;
}
export{};
function lac(): void{
    const max:number=6;
    const min:number=1;
    let a:number=Math.floor(Math.random()*(max-min+1))+min;
    let h1:HTMLImageElement=<HTMLImageElement>document.getElementById("dice-1");
    let result1:string="./img/dice" +a+ ".png";
    h1.src=result1;
    let b:number=Math.floor(Math.random()*(max-min+1))+min;
    let h2:HTMLImageElement=<HTMLImageElement>document.getElementById("dice-2");
    let result2:string="./img/dice" +b+ ".png";
    h2.src=result2;

}