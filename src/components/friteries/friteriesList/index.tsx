import IFriterie from "../../../core/models/IFriteries";
import FriterieNearest from "../friterieNearest";
import FriterieItem from "./friterieItem";

interface FriterieListProps {
    friteries: IFriterie[];
}

export default function FriterieList(props: FriterieListProps) {
    return (
        <div>
            <h1>Liste des friteries:</h1>
            {
                props.friteries?.length && <FriterieNearest friterie={props.friteries[0]}/>
            }
            {
                props.friteries?.length ? props.friteries
                    .map((friterie,index) => <FriterieItem key={friterie.id} friterie={friterie} nearest={index == 0} />)
                    : "Rien à afficher"
            }
        </div>
    );
}