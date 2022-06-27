import React, {useState} from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


function ItemCount ({stock}) {
    const [counter, setCounter] = useState(0);

    const onAdd = () => {
        setCounter(counter +1)
        if(counter >= 5){
            alert('No more units available')
            setCounter(5)
        }
      }

    const onRemove = () => {
        setCounter(counter -1)
        if(counter <= 0){
            alert("You can't go below 0")
            setCounter(0)
        }
      }

    const onReset = () => {
        setCounter(0)
      }

    return(
        <div style={styles.container}>
            <RemoveIcon onClick={onRemove}/>
            <span>{counter}</span>
            <AddIcon onClick={onAdd} />
            <div style={styles.containertwo}>
                <span>{stock} units available</span>
                <button onClick={onReset}>Reset</button>
            </div> 
        </div>

    )

}

export default ItemCount; 

const styles = {
    container :{
        display :'flex',
        justifyContent :'center',
        gap :'10px',
        fontSize :'20px'
    },
    containertwo : {
        display :'flex',
        flexDirection :'column',
        marginLeft :'10px'
    }
}