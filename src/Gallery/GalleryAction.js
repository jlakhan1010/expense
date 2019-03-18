import axios from 'axios';
import { Redirect } from 'react-router-dom';
export const DISPLAY_EXPENSE='DISPLAY_EXPENSE';
import { toast } from 'react-toastify';


export const displayImages= ()=>{
    
    return (dispatch)=>{
        const images=JSON.parse(localStorage.getItem('myImages'));
        dispatch({
            type:'DISPLAY_IMAGE',
            payload:images
        });    
    }
    
};

export const deleteImage = (imgLink) =>{
    console.log("delete action");
    return (dispatch)=>{
        dispatch({
            type:'DELETE_IMAGE',
            payload:imgLink
        });    
    }
    
};


export const addImage= (fd,history)=>{
    
    return (dispatch)=>{

        return axios.post("https://dev-api.meshup.biz/api/users/images/upload",fd)
        .then((response)=>{
          console.log(response.data);
           dispatch({
                type:'ADD_IMAGE',
                payload:response.data 
            });
           
            toast.success("Image uploaded successfully!!!");
         
        })
        .catch((error)=>{
            console.log(error);
            toast.error("Failed!!!"); 
        });
    }
    
};


/*
 axios.post("https://dev-api.meshup.biz/api/users/images/upload",fd)
        .then((response)=>{
           var str=localStorage.getItem('myImages')?localStorage.getItem('myImages'):'';
           str=str+response.data.link+',';
           localStorage.setItem('myImages',str);
        })
        .catch((error)=>{
            console.log(error);
        });
*/