import api from '../api/users'
import { useContext } from "react"
import { UserContext } from '../userContext.js'

const Card =({ user })=>{

    const [users, setUsers] = useContext(UserContext)

    const handleDelete = async (id)=>{
        try {
            const response = await api.delete(`/users/${id}`)
            const filterObject = users.filter(user=> user.id != id )
            setUsers( filterObject )
        } catch (err) {
            console.log(`Error: ${err.message}`)
        }
    }

    const handlePatch = async (id)=>{
        
        const updatedUser = 
            {
                "name": "Bat",
                "lastName": "Man",
            }

        try {
          const response = await api.patch(`/users/${id}`, updatedUser)
          setUsers(users.map(user => user.id === id ? response.data : user))

        } catch (err) {
          console.log(`Error: ${err.message}`)
        }
    }

    return(
    <ul>
        <li>{user.name}</li>
        <li>{user.lastName}</li>
        <li>{user.age}</li>
        <button onClick={()=>handleDelete(user.id)}>Delete</button>
        <button onClick={()=>handlePatch(user.id)}>Upgrade user to Batman</button>
    </ul>
    )
}

export default Card