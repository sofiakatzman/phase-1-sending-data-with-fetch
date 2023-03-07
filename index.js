// Add your code here

function submitData (name, email){
    //In submitData, write a valid POST request to http://localhost:3000/users using fetch()
    return fetch ('http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
            "name": name,
            "email": email
        }) 
      })
      .then(res => res.json())
      .then(body => addNewData(body.id))
      .catch(error =>
          document.body.innerHTML = error.message
      )
      }

      function addNewData(newID){
          document.getElementsByTagName("body")[0].innerHTML = newID
      }

