import React,{useState,useEffect} from 'react'
import {Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaRegAddressCard,FaCity} from 'react-icons/fa'
import {AiOutlinePhone} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'
import './UserList.css'
import axios from 'axios'
const UserList = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{setPosts(res.data)})
        .catch(err=>{console.log(err)})
    }, [])
    return (
            
            <Table striped bordered hover>
  <thead>

    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Username</th>
      <th>address</th>
      <th>Geo</th>
      <th>Contact</th>
      <th>Company</th>


    </tr>
  </thead>
  <tbody>
      {posts.map(data=>
    <tr>
      <td key={data.id}>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.username}</td>
      <td>
      <span>
      <FaRegAddressCard/>  {data.address.street}_{data.address.suite}</span><br/>
      <span> <FaCity/>{data.address.city}</span><br/>
      <span> {data.address.zipcode}</span><br/>

      </td>
      <td>
      <span>Lat: {data.address.geo.lat}</span><br/>
      <span>Lng: {data.address.geo.lng}</span><br/>
      </td>
      <td>
      <span><AiOutlinePhone/>{data.phone}</span><br/>
      <span> <CgWebsite/>{data.website}</span><br/>
      </td>
      <td>{data.company.name}-{data.company.catchPhrase}-{data.company.bs}</td>
          </tr>
      )}
     </tbody>
</Table>
        
    )
}

export default UserList
/*<ul>
                {
                    posts.map(data=>
                        <li key={data.id} className="cordonner">
                            {data.id}){data.name} {data.username}
                            <li>{data.email}</li>
                            <ul className="addresse">
                            <li>{data.address.street}{data.address.suite}{data.address.city}{data.address.zipcode}</li>
                            </ul>
                            <ul className="geo">
                                <li>{data.address.geo.lat}</li>
                                <li> {data.address.geo.lng}</li>
                            </ul>
                            <ul>
                                <li>{data.phone}</li>
                                <li>{data.website}</li>
                            </ul>
                            <ul className="company">
                                <li>{data.company.name}</li>
                                <li>{data.company.catchPhrase}</li>
                                <li>{data.company.bs}</li>

                            </ul>
                        </li>
                        )
                }
            </ul> */