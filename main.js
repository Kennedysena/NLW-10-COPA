function createGame(player1, hour, player2) {
  return `
  <li>
 
                           <div style="width: 90px; height: 80px; color: white;"> 
                            <img src="./assets/${player1}.svg" alt="Bandeira do ${player1}">
                            <p>${player1}</p>
                            </div>
                            <strong>${hour}</strong>

                            <div style="width: 90px; height: 80px;color: white;"> 
                            <img src="./assets/${player2}.svg" alt="Bandeira da ${player2}">
                            <p>${player2}</p>
                          
                            </div>
                        </li>
`
}
let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return ` <div class="card" style="animation-delay: ${delay}s">
                    
                    <h2>${date} <span>${day}</span></h2>
                    
                    <ul>
                         ${games}
                    </ul>
                </div>`
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("qata", "12:00", "equador")) +
  createCard(
    "21/11",
    "segunda-feira",
    createGame("england", "09:00", "iran") +
      createGame("senegal", "12:00", "netherlands") +
      createGame("inited states", "15:00", "wales")
  ) +
  createCard(
    "22/11",
    "terça-feira",
    createGame("argentina", "06:00", "saudi") +
      createGame("denmark", "09:00", "tunisia") +
      createGame("mexico", "12:00", "poland") +
      createGame("france", "15:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta-feira",
    createGame("marocco", "06:00", "croatia") +
      createGame("germany", "09:00", "japan") +
      createGame("spain", "12:00", "costa rica") +
      createGame("belgium", "15:00", "canada")
  )
 
