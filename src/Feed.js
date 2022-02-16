import { useContext } from "react"
import { UserContext } from './userContext.js'
import Card from "./user/Card"

const Feed =()=>{
  
  const [users,] = useContext(UserContext)
  
  return(
    users && users.map(user=>(
      <Card key={user.id} user={user}/>
    ))
  )
}

export default Feed 