const condPagamento = 'quatro';
const precoProduto = 50;
const pDebito = 0.10;
const pDimOuPix = 0.15;
const acimaDoisVezes = 0.10;
let total;


switch (condPagamento) {
    case 'debito':
      total = precoProduto - (precoProduto * pDebito);
      console.log('Preço origial: R$ '+precoProduto.toFixed(2));  
      console.log('Preço total: R$ '+total.toFixed(2));
      break;
    case 'pix':
        total = precoProduto - (precoProduto * pDimOuPix);
        console.log('Preço origial: R$ '+precoProduto.toFixed(2));  
        console.log('Preço total: R$ '+total.toFixed(2));
        break;
    case 'duas':
        total = precoProduto;
        console.log('Preço origial: R$ '+precoProduto.toFixed(2));  
        console.log('Preço total: R$ '+total.toFixed(2));
        break;
    default:
        total = precoProduto + (precoProduto * acimaDoisVezes);
        console.log('Preço origial: R$ '+precoProduto.toFixed(2));  
        console.log('Preço total: R$ '+total.toFixed(2));
        break;
  }