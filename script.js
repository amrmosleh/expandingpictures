const panels = document.querySelectorAll('.panel')
// const in JavaScript means “ one-time assignment ” . It doesn’t mean constant. It means you can assign the a variable or object once.
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
// panel is a variable
function removeActiveClasses() {
    // A function is a block of code that performs a task. 
    // It can be called and reused multiple times. You can pass information to a function and it can send information back.
    panels.forEach(panel => {
        panel.classList.remove('active')
        // The classList property returns the CSS classnames of an element
        // The classList property returns a DOMTokenList
        // Link to definitions https://www.w3schools.com/jsref/prop_element_classlist.asp
    })
}