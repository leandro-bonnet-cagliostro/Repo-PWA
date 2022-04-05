import { Button } from "primereact/button";
import IFriterie from "../../../core/models/IFriteries";

interface FriterieNearestProps {
    friterie: IFriterie;
}

export default function FriterieNearest(props: FriterieNearestProps) {
    function openInGMap() : void {
        window.open(`https://maps.google.com/?q=${props.friterie.latitude},${props.friterie.longitude}`, "_blank");
        // paramètre target => "_blank" => pour ouvrir un nouvel onglet/fenetre en fct du navigateur
    }

    return (
        <div className="nearest">
            <span className="p-2">
                {props.friterie.name}
            </span>
            <span className="p-2">
                {props.friterie.address}
            </span>
            {props.friterie?.distance && <span className="p-2"> à {Math.round(props.friterie.distance)} mètres</span>}
            <Button label="Ouvrir dans GMap" onClick={openInGMap}/>
        </div>
    );
}