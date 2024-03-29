import React,{useState} from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import FormAddService from './formAddService';

const ButtonAddService =()=> {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick=()=>{
        setIsClicked(true)
    }
   
  return (  <>
    {/* {isClicked && <FormAddService />} */}
    <Fab sx={{position: 'fixed', left:'25px', bottom:'25px'}} color="warning" aria-label="add" onClick={handleClick}>
        <AddIcon />
    </Fab>
    {isClicked && <FormAddService setIsClicked={setIsClicked}/>}
    </>)
    
};

export default ButtonAddService;