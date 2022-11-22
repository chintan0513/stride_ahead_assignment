import { useState } from "react";

/* eslint-disable no-undef */
const List = () => {

    const [data,setData] = useState([])

    const handleItem = async (e) => {
        e.preventDefault();
        const endpoint = 'https://jsonplaceholder.typicode.com/todos';
        const res = await fetch(endpoint);
        const data = await res.json();
        console.log(data);
        setData(data);
        console.log('clicked');
    }
    return ( 
        <div>
            <button onClick={handleItem}>List</button>
            {
                data.map((item)=>(
                    <div>
                        <li>{item.title}</li>
                        </div>
                ))
            }
        </div>
     );
}
 
export default List;