const nota1 = 7;
const nota2 = 7;
const nota3 = 7;

const media = ((nota1+nota2+nota3) / 3).toFixed(2);
console.log(media);

if (media < 5 ) {
    console.log('reprovado');
} else if (media <= 7) {
    console.log('recuperação');
} else {
    console.log('aprovado');

};
  