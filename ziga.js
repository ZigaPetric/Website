
    // Create a button element
    const button = document.getElementById('glavni')

// Set the button text to 'Can you click me?'


button.id = 'mainButton'

// Attach the "click" event to your button
button.addEventListener('click', () => {
  // When there is a "click"
  // it shows an alert in the browser
  alert('Oh, you clicked me!')
})
document.body.appendChild(button)