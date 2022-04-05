import axios from "axios";
import IFriterie from "../models/IFriteries";

const API_URL = "https://fakedatatechnocitelucas.azurewebsites.net/api";
// const API_URL = "http://localhost:7071";

class FriterieService {
    public async getAll() : Promise<IFriterie[]> {
        return (await axios.request<IFriterie[]>({url : API_URL + "/GetFriteries"})).data;
    }

    // public async getAllBis() : Promise<IFriterie[]> {
    //     return (await axios.request<IFriterie[]>({url : API_URL + "/GetFriteries", method: ""})).data;
    // }
}

const friterieService = new FriterieService();
export default friterieService;
// ce qui va demander à la fausse api