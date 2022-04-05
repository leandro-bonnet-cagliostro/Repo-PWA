import { useEffect, useState } from "react";
import ICoordinates from "../../core/models/ICoordinates";
import IFriterie from "../../core/models/IFriteries";
import friterieService from "../../core/services/friterieService";
import FriterieList from "./friteriesList";
import { getDistance } from "geolib";
import friterieFacade from "../../core/facades/friterieFacade";

export default function Friteries() {
    const [friteries, setFriteries] = useState<IFriterie[]>([]);

    // ICI ON VA CHERCHER LES DONNEES

    // test
    // function test(value: IFriterie, index: number, array: IFriterie[]) {
    //     return null;
    // }

    const [coords, setCoords] = useState<ICoordinates>();

    const fetchData = async () => {
        //setFriteries(await friterieService.getAll());
        // const friteries = await friterieService.getAll();
        const friteries = await friterieFacade.getAll();
        if(coords) {
            setFriteries(friteries.map(friterie => {
                return {...friterie, 
                    distance: getDistance(
                        {lat: coords?.latitude, lon: coords?.longitude},
                        {lat: friterie.latitude, lon: friterie.longitude},
                        coords.accuracy,
                        )};
            }).sort((a,b) => a.distance - b.distance));
            // let indiceBas = 0;
            // let distanceProche = friteries[0].distance || 0;
            // let list = friteries.map((friterie,position) => {
            //     if(distanceProche) {
            //         if(friterie.distance! < distanceProche)
            //         {
            //             distanceProche = friterie.distance!;
            //             indiceBas = position;
            //         }
            //     }
            // })

            // friteries[indiceBas].nearest = true;

            //console.log(friteries.sort((a,b) => a.distance! - b.distance!))
            //setFriteries(friteries.sort((a,b) => a.distance! - b.distance!));
            //console.log(list);
        }
    }

    useEffect(() => {
        // Aller chercher mes données 
        // friterieService.getAll().then(setFriteries);
        // friterieService.getAll().then(friteries => setFriteries(friteries)); fait la même chose
        

        // fetchData();
        // console.log(coords);

        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((value) => {
                // console.log(value);
                // https://maps.google.com/?q=<lat>,<lng>
                // console.log(value.coords.latitude,value.coords.longitude);
                setCoords(value.coords); // contient tout l'objet => pas juste lat et long 
                // set est pas async du coup le changement ne se fait pas tout de suite
                // les set state se font à priori à la fin, si on veut afficher qlq chose ce sera value.coords
                /*console.log(getDistance({lat:value.coords.latitude,lon:value.coords.longitude}, {lat:50.4711063920335,lon:3.7645444425284627}, value.coords.accuracy));*/
            },
            (error) => {
                console.log(error);
            });


        }

        // syntaxe différente
        //friteries.map((value, index, array) => test(value, index, array))
        //friteries.map(test) // mais ne fct pas si les paramètres sont dans un ordre différents
    }, []);

    useEffect(() => {
        if(coords) {
            fetchData();
        }
    }, [coords])

    /*useEffect(() => {
        // Code au chargement et à tout changement du composant
        // va trigger le composant, à chaque changement on reload
        setFriteries([]);
    })// sans liste de dépendances, se charge à chaque changement du composant, useState, etc.*/

    return (
        <FriterieList friteries={friteries} />
    );
}