const fs = require('fs');

fs.readFile('./data/zadanieDnia/test.txt','utf8', (err, data) => {
    if (err === null){ 
        let out = [];
        data.split('').forEach( (element, index) => {
           index%2===0 ? out[index] = element.toUpperCase() : out[index] = element.toLowerCase();          
        });
        out=out.join('');
        fs.writeFile('./data/zadanieDnia/test.txt', out, err => {
            if (err === null){
                console.log('Zapisano poprawnie!');
            } else {
                console.log('Błąd podczas zapisu pliku!', err);
            }
        });
    } else {
        console.log('Błąd podczas odczytu pliku!', err);
    }
});