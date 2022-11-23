import { useEffect, useState } from "react";

/* eslint-disable no-undef */
const List = () => {

    const [data,setData] = useState([])

    const handleItem = async (e) => {
        e.preventDefault();
        const endpoint = 'https://jsonplaceholder.typicode.com/users';
        const res = await fetch(endpoint);
        const data = await res.json();
        console.log(data);
        setData(data);
        console.log('hi there');
    }

    // useEffect(() => {
    //     console.log("hi");        
    // },[])
    
    // useEffect(() => {
    //     setData(data);
    //     console.log("component changed");
    // },[data])

    return ( 
        <div className="list">
            <button onClick={handleItem} className="btn">List</button>
            {
                data.map((item)=>(
                    <div>
                        <li>{item.name}</li>
                        </div>
                ))
            }
        </div>
     );
}
 
export default List;