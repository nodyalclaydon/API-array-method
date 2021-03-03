// return only names and emails of users with "K"

async function getUsers() {
    // get user data
    const promise = await fetch("https://jsonplaceholder.typicode.com/users")
    const userData = await promise.json()

    // filter out emails and names that don't contain "K"
    const filteredData = userData.filter(obj => 
        obj.name.toLowerCase().includes("k") || 
        obj.email.toLowerCase().includes("k")
        )
        
    // map over the data to only return name and email
    const result = filteredData.map(({ name, email }) => ({ name, email }))
    
    console.log(result)
}

getUsers()