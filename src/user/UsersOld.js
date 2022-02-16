import './App.css';
import { useState, useEffect } from 'react';
import api from '../api/users'
import Feed from '../Feed'

const UserComponent =()=>{

  const [users, setUsers] = useState()
  const [formValues, setFormValue] = useState({})

  useEffect(()=> {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/users');
        setUsers(response.data);
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range.
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        } else {
          // error response is undefined. 
          console.log(`Error: ${err.message}`)
        }
      }
    }

    fetchPosts();
  }, [])

  const handleChange = (feild) => (e)=> {
    const inputValue = e.target.value
    setFormValue({ ...formValues, [feild]: inputValue })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await api.post('/users', formValues)
      // Using the response to set user, insures that we get the new ID from the back-end. 
      console.log(response.data)
      setUsers( array => [...array, response.data]) 
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
  }

  const addUserForm =()=>(
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'> First Name</label>
      <input id='name' onChange={handleChange('name')} required/>

      <label htmlFor='lastName'> Last Name</label>
      <input id='lastName' onChange={handleChange('lastName')} required/>

      <label htmlFor='age'> Age</label>
      <input id='age' onChange={handleChange('age')} required/>

      <button type="submit">Submit</button>
    </form>
  )


return (
  <div>
    <h2>Add another setUsers</h2>

    {addUserForm()}

    <h2>Here is the list of people</h2>
    { 
      users && users.length
      ? <Feed users={users} setUsers={setUsers}/> 
      : <p>No Users to display</p>
    }

  </div>
)

}


export default UserComponent;
