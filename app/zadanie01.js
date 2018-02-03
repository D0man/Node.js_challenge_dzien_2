const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', (err, data) => {
    if (err === null){ 
        let out = JSON.parse(data).reduce( (prev,curr) => Number(prev)+Number(curr));
        fs.writeFile('./data/zadanie01/sum.txt', out, err => {
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