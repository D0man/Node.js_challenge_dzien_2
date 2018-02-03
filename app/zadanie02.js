const fs = require('fs');

fs.readdir('./data/zadanie02', (err, data) => {
    if (!err){
        data.forEach( file => {
            fs.readFile('./data/zadanie02/' + file, 'utf-8' ,(err,text)=>{
                if(!err){
                    console.log(text);
                }
                else{
                    console.log('blad zaczytywania', err);
                }
            });
        });
    }
    else{
        console.log('cos poszło nie tak',err);
    }
}); 
