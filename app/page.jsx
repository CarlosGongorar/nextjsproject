async function fetchData() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  console.log(data)
  return data.data
}

async function Homepage() {
  const users = await fetchData()
  
  return(
    <ul>
      {users.map(user =>(
        <li key={user.id}>
          <div>
            <h1>{user.id} {user.first_name} </h1>
            <p>Email: {user.email}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Homepage