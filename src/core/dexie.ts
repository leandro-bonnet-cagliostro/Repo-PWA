import Dexie, {Table} from "dexie";
import IFriterie from "./models/IFriteries";

// Dexie => ce qui est exporté par default => une classe
// Table => ce qui est exporté sans le default => une classe aussi

class DexieDatabase extends Dexie {
    public friteries: Table<IFriterie, string>; // le string est pour l'identifiant et de base <> ne sert que pour le typescript

    constructor() {
        super("iFriteriesDB"); // nom de la db

        this.version(1)
            .stores({
                friteries: "id", // identifiant c'est ici qu'il le reconnait comme un identifiant dans la table todos
                // exemplete: "id, foreignKey" // indexes
            }); // version propre à l'indexed db pour savoir quel structure de données est gardée et on vient définir toutes nos tables
        
        this.friteries = this.table('friteries'); // le nom dans le store
    };
}

//export default new DexieDatabase();

const database = new DexieDatabase();

export default database;