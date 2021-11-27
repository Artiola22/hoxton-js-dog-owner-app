console.log(dogs);

// WRITE YOUR CODE BELOW!
// Instructions
// - Use this template as a starting point (don't do Codesandbox, (do recreational drugs instead). Download it to your device) => https://codesandbox.io/s/day-8-dog-owners-app-template-t4um2?file=/src/index.js
// - You'll find a variable called data in the console.log. That's your list of dogs
// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - There should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog



console.log(dogs)



function createDogTag (dog) {
  const liEl = document.createElement('li')
  liEl.setAttribute('class', 'dog-list__button')
  liEl.textContent = dog.name
  
  liEl.addEventListener('click', function () {
      displayDogInfo(dog)
      
  })
  const dogListUl = document.querySelector('.dogs-list')
  dogListUl.append(liEl)
}
 for (const dog of dogs) {
     createDogTag(dog)
 }

  function displayDogInfo(dog) {
      const sectionEl = document.querySelector('.main__dog-section')
      sectionEl.innerHTML = ''

    const titleEl = document.createElement('h2')
    titleEl.textContent = dog.name
    
    
    const imageEl = document.createElement('img')
    imageEl.setAttribute('src', dog.image)
    imageEl.setAttribute('alt', '')

    const descEl = document.createElement('div')
    descEl.setAttribute('class', 'main__dog-section__desc')


    const bioTitle = document.createElement('h3')
    bioTitle.textContent = 'Bio'

    const textEl = document.createElement('p')
    textEl.textContent= dog.bio

    descEl.append(bioTitle, textEl)

    const naughtyEl = document.createElement('p')
    const emEl = document.createElement('em')
    emEl.textContent = 'Is naughty?'
    naughtyEl.append(emEl, dog.isGoodDog? ' No!' : ' Yes!')

    const goodButton = document.createElement('button')
    goodButton.textContent = dog.isGoodDog ? 'Bad dog!' : 'Good dog!'

    goodButton.addEventListener('click', function (){
        toggleGoodDog(dog)
    })
 sectionEl.append(titleEl, imageEl, descEl, naughtyEl, goodButton)
}


 function toggleGoodDog (dog) {
     dog.isGoodDog = !dog.isGoodDog
     displayDogInfo(dog)
 }




