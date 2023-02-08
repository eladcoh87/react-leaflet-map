import { ActionConstant } from "./action-constant"
import { ActionsTypes } from "./action-type"


export type Rest = {
    id:number;
    name:string;
    description:string;
    imgUrl:string
    lon:number;
    lat:number
}


const initalState = {
    restList:[{id:234,name:'montreol Burguer',description:'NICE BURGER IN canda ',imgUrl:'https://generatorfun.com/code/uploads/Random-Restaurant-image-11.jpg',lon:-73.5718097,lat:45.4987358},
    {id:734,name:'PARIS Burgue',description:'NICE BURGER IN paris',imgUrl:'https://generatorfun.com/code/uploads/Random-Restaurant-image-8.jpg',lon:2.356832,lat:48.8611627},
    {id:147,name:'LONDON Burgue',description:'NICE BURGER IN london',imgUrl:'https://generatorfun.com/code/uploads/Random-Restaurant-image-12.jpg',lon:-0.1068886,lat:51.5329618},
    {id:956,name:'BRAZIL Burgue',description:'NICE BURGER IN brazil',imgUrl:'https://generatorfun.com/code/uploads/Random-Restaurant-image-10.jpg',lon:-49.288625,lat:-25.4698463},
    {id:125,name:'MEXICO Burgue',description:'NICE BURGER IN mexico',imgUrl:'https://generatorfun.com/code/uploads/Random-Restaurant-image-14.jpg',lon:-99.1724129,lat:19.4256783},


],
    choosenRest:{id:234,name:'montreol Burguer',description:'NICE BURGER IN canda',imgUrl:'https://generatorfun.com/code/uploads/Random-Restaurant-image-11.jpg',lon:-73.5718097,lat:45.4987358}
}





 export type State = {


    restList:Rest[];
    choosenRest:any;

}


const restReducer = (state:State = initalState, action:ActionsTypes):State => {
    switch (action.type) {
    
    

       
        case ActionConstant.CHOOSEN_REST:

        const newChoosenRest = state.restList.find((rest => rest.id === action.payload))

      return {...state,choosenRest:newChoosenRest}



            default: 
            return state


    }
    
    }
    export default restReducer
