// async function fetchData() {
//     try {
//         const result = await axios.get('https://restcountries.eu/rest/v2/all');
//         console.log(result);
//     } catch(e) {
//         console.error(e);
//     }
// }
//
// fetchData();

// const result = await axios.get('https://restcountries.eu/rest/v2/all');
// const countries = result.data;


// let op: dit is uiteraard geen werkend voorbeeld, maar slechts een illustratie

// try {
//     const gebakkenTaart = await taartBakkenPromise;
//     const resultaat = await haalUitOven(gebakkenTaart);
//     resultaat.steekKaarsjesAan();
// } catch (e) {
//     sendMessage("Taart is mislukt…");
// }


// taartBakkenPromise
//     .then((gebakkenTaart) => {
//         return haalUitOven(gebakkenTaart);
//     }).then((resultaat) => {
//     return resultaat.steekKaarsjesAan();
// }).catch((e) => {
//     return sendMessage("De taart is mislukt...");
// });



// voorbeeld van het ophalen van data middels de oude en de nieuwe manier

// async function fetchDataNew() {
//     try {
//         const result = await axios.get('https://restcountries.eu/rest/v2/all');
//         console.log(result);
//     } catch (e) {
//         console.error(e);
//     }
// }
//
// fetchDataNew();
//
// function fetchDataOld() {
//     axios.get('https://restcountries.eu/rest/v2/all')
//         .then((result) => {
//             return console.log(result);
//         }).catch((e) => {
//         return console.error(e);
//     });
// }
//
// fetchDataOld();