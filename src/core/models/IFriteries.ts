export default interface IFriterie {
    id: string;
    name: string;
    desription: string;
    address: string;
    latitude:number;
    longitude: number;
    distance?: number;
    nearest:boolean;
}