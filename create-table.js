import { sql}  from './db.js'

//sql `
//  DROP TABLE IF EXISTS VIDEOS;
//`.then(()=>{
//  console.log("Apagado")
//})

sql `
    CREATE TABLE VIDEOS (
        id          TEXT PRIMARY KEY,
        title       TEXT,
        description TEXT,
        duration    INTEGER
    );
`.then(()=>{
    console.log("Tabela criada")
})