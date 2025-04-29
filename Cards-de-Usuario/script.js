const userName = document.getElementById('userName')
const userEmail = document.getElementById('userEmail')
const userCareer = document.getElementById('userCareer')
const cardCreatorBtn = document.getElementById('createCard')
const cardContainer = document.getElementById('child-container')

cardCreatorBtn.addEventListener('click', () => {
    
    const nameText = userName.value
    const emailText = userEmail.value
    const careerText = userCareer.value
    
    if (nameText === "") {
        return 
    }

    if (emailText === "") {
        return 
    }
    
    if (careerText === "") {
        return 
    }

    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'Remover Card'
    removeBtn.style.marginLeft = '10px'
    removeBtn.style.borderStyle = 'none'
    removeBtn.addEventListener('click', () => {
        cardContainer.removeChild(card)
    })

    const card = document.createElement('div')
    card.classList.add('card-div')
    card.innerHTML = `Nome: <br> ${nameText} <br>
    E-Mail: <br> ${emailText} <br>
    Profissão: <br> ${careerText} <br>`



    cardContainer.appendChild(card)
    card.appendChild(removeBtn)

    userName.value = ''
    userEmail.value = ''
    userCareer.value = ''

})