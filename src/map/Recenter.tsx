import React,{useEffect} from 'react'
import { useMap } from 'react-leaflet'
import { useSelector } from 'react-redux';
import { State } from '../store/restReducer';





const Recenter = ({lat,lon}:any) => {

    // const state = useSelector((state:State) => state)

    // const lat = state.choosenRest.lon
    // const lot = state.choosenRest.lon


    const map = useMap();




    useEffect(() => {


        map.setView([lat, lon]);



    }, [lat, lon]);




    return null;
}

export default Recenter