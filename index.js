let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.innerText = 'Rizzo'
content.append(header)

//container
let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

// create image
let image = document.createElement('img')
image.setAttribute('src', './assets/rizzo.jpg')
image.setAttribute('class', 'dog-image')

dogContent.append(image)

// create dog details container
let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let dogDescription = document.createElement('h3')
dogDescription.innerText = 'Description:'
dogDetails.append(dogDescription)
