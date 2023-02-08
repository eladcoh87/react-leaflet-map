import React from 'react';
import './style.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useDispatch} from 'react-redux'
import { ActionsTypes } from '../../store/action-type';
import { choosenRestAction } from '../../store/action-creator';




type OwnProps = {

  id:number;
  name:string;
  description:string;
  imgUrl:string
  lon:number;
  lat:number

  
}



const RestCard = ({id,name,description,imgUrl,lon,lat}:OwnProps) => {


const dispatch = useDispatch()



const handleClick = (event:React.MouseEvent<HTMLDivElement>) => {


  dispatch(choosenRestAction(id))



}


  return (
    <div className='cardDiv' onClick={handleClick}>
       <Card className='card-container'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgUrl}
          alt="green iguana"
        />
        <CardContent>
         <h3>{name}</h3>
       <p>{description}</p>

       
        </CardContent>
      </CardActionArea>
      
    </Card>
    
    </div>
  )
}

export default RestCard