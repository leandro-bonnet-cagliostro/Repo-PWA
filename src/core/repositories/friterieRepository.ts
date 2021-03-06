import database from "../dexie";
import IFriterie from "../models/IFriteries";

class FriterieRepository {
    public async bulkAdd(friteries: IFriterie[]):Promise<void> {
        // await database.friteries.bulkAdd(friteries);
        await database.friteries.bulkPut(friteries);
    }

    public async getAll():Promise<IFriterie[]> {
        return await database.friteries.toArray();
    }
}

const friterieRepository = new FriterieRepository();

export default friterieRepository;