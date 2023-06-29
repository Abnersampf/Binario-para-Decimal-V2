const num = prompt('Digite um valor:');
const base = prompt('Digite a base para qual deseja converter [2 - Binário ou 10- Decimal]:');
if (base == '2'){
    alert(`${num} (dec) = ${(parseInt(num)).toString(2)} (bin)`);
}
else{
    alert(`${num} (bin) = ${parseInt(num, 2)} (dec)`);
}
