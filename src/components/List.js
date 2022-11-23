import { useState, useEffect } from "react";
import '../styles/list.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

/* eslint-disable no-undef */
const List = () => {

    const [data,setData] = useState([])
    const sprite = [
        "male", "female", "human", "identicon", "initials", "bottts", "avataaars", "jdenticon", "gridy" , "micah"
    ];
    const seed = [
        "male", "female", "human", "identicon", "initials", "bottts", "avataaars", "jdenticon", "gridy" , "micah"
    ];
    const [imgUrl, setImgUrl] = useState("");

    useEffect(() => {
        // console.log("component mounted");
        const endpoint = 'https://jsonplaceholder.typicode.com/users';
        fetch(endpoint)
        .then(res => res.json())
        .then(data => {
            setData(data);
        })
        setImgUrl(`https://avatars.dicebear.com/api/${sprite['0']}/${seed['']}.svg`)
            setData(data);
    },[])

    useEffect(()  => {
        // console.log("component updated");
    },[data])
    
    return ( 
        <div className="list">
            <div className="uname">
            {
                data.map((item, num)=>(
                    <div className="card" key={num}>
                        <div className="header">
                            <LazyLoadImage effect="blur" src={imgUrl} alt="avatar" height={500} width={500}/>
                        </div>    
                        <div className="content">
                            <h3>{item.username}</h3>
                            <p>{item.name}</p>
                            <p>{item.email}</p>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
     );
}
 
export default List;