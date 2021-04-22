import { useState } from "react";


function Userform() { // controller
    //model
    const [userform, setUserform] = useState({ // usestate = hook
        name:'Ram',
        age:0
    })
    return ( // view
        <div>
            <input value={userform.name} onChange={handleEvent}></input>
            <input value={userform.age} onChange={handleEvent}></input>
            <button onClick={save}>Save</button>
        </div>
    )
    function save(){
        console.log(userform.name);
        console.log(userform.age);  
    }
    function handleEvent(event){
        setUserform({
            name:event.target.value,
            age:event.target.value
        })
    }
}

export default Userform;