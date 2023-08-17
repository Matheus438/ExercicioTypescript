let numero: number = 200;
let segundoNumero = 100;

console.log(numero+segundoNumero);

let idade: number = 16
let texto: string = "Minha idade é: "+idade;

console.log(texto);


let idadeNova: number = 13
let textoNovo: string = "Minha idade é: ";

console.log(textoNovo + idadeNova);

let verdadeiro: boolean = false;
console.log(verdadeiro);

let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(arr);
console.log("tamanho do array" + arr.length);
console.log("acesseando a posição do array:" + arr[12]);
console.log("a possição do array é" + arr.indexOf(13));

let arrayTexto: Array<string>;

arrayTexto = ['ab', 'bc', 'cd', 'de'];
console.log(arrayTexto);
console.log(arrayTexto.length);
console.log(arrayTexto.indexOf('cd'));


function exibirTexto(){
    console.log('Exibindo meu texto')
}

exibirTexto();

function exibirOutroTexto(){
    return "Exibir outro texto";
}

console.log(exibirOutroTexto());

function retornaNumero(): number{
    return 10;
}

console.log(retornaNumero());

function retornaTexto(): string{
    return "retornando string";
}

console.log(retornaTexto());

function soma(a:number, b:number):number{
    return a + b
}

console.log("O valor da soma é:" + soma(50, 100));

/**exercicio 1 */

function multiplicação(a:number, b:number):number{
    return a * b
}

console.log("O valor da multiplicação é:" + multiplicação(13, 53));

/**exercicio 2 */

function multiplicação2(a:number, b:number, c:number):number{
    return (a + b) * c
}

console.log("O valor da operação é:" + multiplicação2(32, 31, 13));

/**exercicio 3 */

function multiplicação3(a:number, b:number):string{
    return "O resultado da multiplicação é:" + a * b
}

console.log( multiplicação3(10, 20));
