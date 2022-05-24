// ******************************************************
// fiyatlar dizisinde her bir fiyata %10 zam yapalım. NOT: FOREACH kullanılmalı ve orjinal dizi değiştirilmeli.

// let fiyatlar = [100, 250, 50, 89];

// let newFiyat = ""; 
// fiyatlar.forEach(deneme);

// function deneme(value) {
//     newFiyat = value * 1.1
//     console.log(Math.round(newFiyat)); 
// }



// ******************************************************
// fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri konsola tek tek bastırınız.

// let fiyatlar = [100, 250, 50, 89];

// let buyuk18fiyatlar =fiyatlar.filter(deneme);

// function deneme(value) {
//     return  value > 90
     
// }
// console.log(buyuk18fiyatlar);


// ******************************************************
// fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

// let fiyatlar = [100, 250, 50, 89];


// let buyuk18fiyatlar = fiyatlar.filter(deneme);

// function deneme(value) {
//     return  value < 110
     
// }

// console.log(buyuk18fiyatlar);

// let sonfiyat = "";
// buyuk18fiyatlar.forEach(deneme2)

// function deneme2(value2){
//     sonfiyat = value2*1.1
//    console.log(Math.round(sonfiyat)); 
// }


//******************************************************** 
// maaslar dizisinde 4000'den düsük olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.

// const maaslar = [3000, 5000, 4000, 6000, 6500];

// let kucuk4000 = maaslar.filter(deneme);

// function deneme(value) {
//     return  value < 4000
     
// }

// let sonmaas = kucuk4000.map(deneme2)

// function deneme2(value2){
//     return value2*1.5
  
// }
//  console.log(sonmaas); 



//******************************************************** 
// Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari konsolda yazdiralim.

// const maaslar = [3000, 5000, 4000, 6000, 6500];
// let buyuk4000 = maaslar.filter(deneme);

// function deneme(value) {
//     return  value >= 4000
     
// }

// let sonmaas = buyuk4000.map(deneme2)

// function deneme2(value2){
//     return value2*1.25
  
// }
//  console.log(sonmaas);
 


 //******************************************************** 
//  Maaslarin toplamini hem forEach methodu ile çözünüz.

// const maaslar = [3000, 5000, 4000, 6000, 6500];

// let toplammaaslar = 0
// maaslar.forEach(deneme);

// function deneme(value) {
//     toplammaaslar += value  
      
// }
// console.log(toplammaaslar);  




 //******************************************************** 
//  Maaslarin toplamini hem reduce methodu ile çözünüz.

const maaslar = [3000, 5000, 4000, 6000, 6500];

let toplammaaslar = maaslar.reduce(deneme);

function deneme(toplam, value) {
    return toplam + value  
      
}
console.log(toplammaaslar);  
