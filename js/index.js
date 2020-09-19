document.addEventListener('DOMContentLoaded', () => {


function fetchMonsters(){
     fetch("http://localhost:3000/monsters")
     .then(resp => resp.json())
     .then(monsters => renderMonsters(monsters))
}

function renderMonster(monster) {
     const monsterDiv = document.createElement("div")
     monsterDiv.classList.add('monster')
     monsterDiv.innerHTML = `
     <h2>Name: ${monster.name}</h2>
     <p>Age: ${monster.age}</p>
     <p>Description: ${monster.description}</p>
     <p>ID: ${monster.id}</p>
      `
     return monsterDiv 
     }

function renderMonsters(monsters){
     const monsterCollection = document.querySelector("#monster-container")
     for (let monster of monsters){
          let monsterDiv = renderMonster(monster)
          monsterCollection.append(monsterDiv) 
     }
}


 
     document.addEventListener('submit', e => {
       e.preventDefault()
       const form = e.target 
       const name = form.name.value
       const age = form.age.value
       const description = form.description.value 
       
 
       const monster = {
         name: name,
         age: age,
          description: description 
       }
       
       const options = {
          method: 'POST',
          headers: {
               "Content-Type": "application/json",
               "Accept": "application/json"
             },

          body: JSON.stringify(monster)
       }

       fetch("http://localhost:3000/monsters", options)
          .then(resp => resp.json())
          .then(data => {
               console.log(data)
               const newMonster = renderMonster(data)
               const monsterCollection = document.querySelector("#monster-container")
               monsterCollection.append(newMonster)
               
          })
     })

    












fetchMonsters()


})







