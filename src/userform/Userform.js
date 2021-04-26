import { useState } from "react";
import axios from "axios";


function Userform() { // controller
    //model
    const [userform, setUserform] = useState({ // usestate = hook
        name: 'Ram',
        phoneNumber: 1
    })
    const save = function () {
        console.log(userform.name);
        console.log(userform.age);
        axios.post("http://localhost:8080/user", userform)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return ( // view JSX
        <div>
            <input value={userform.name} name='name' onChange={updateState}></input>
            <input value={userform.phoneNumber} placeholder="phone number" name='phoneNumber' onChange={updateState}></input>
            <button onClick={save}>Save</button>
        </div>
    )

    function updateState(event) {
        const current = {...userform, 
            [event.target.name]: event.target.value
        };
        setUserform(current);
    }
}

export default Userform;