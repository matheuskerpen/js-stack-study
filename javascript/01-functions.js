//funções normais possuem contrutor. Criam seu próprio this.
function myFunction() {
    this.name = 'matheus';
}
console.log(new myFunction());

// Arrow function herda o this do contexto onde ela foi criada
const myArrowFunction = () => {
    this.name = 'matheus'
    myArrowFunction();
};
console.log(myArrowFunction());

