// Add bubble
document.querySelector('#add').addEventListener('click', addBubble);

function addBubble() {
    console.log('addBubble runs');
    const thoughtText = document.querySelector('#insert').value; // get input turn into text

    if (thoughtText) { // once you get the text 
        const newBubble = document.createElement('div');
        newBubble.classList.add('thoughts');
        const bubbleContent = document.createElement('p');
        bubbleContent.classList.add('text');

        bubbleContent.innerText = thoughtText; // Set the text content of the bubble

        newBubble.appendChild(bubbleContent);

        const main = document.querySelector('.sea');
        main.appendChild(newBubble); // Append the new bubble to the main container

        document.querySelector('#insert').value = ''; // Clear the input field
    }
}

// Removing bubble 
document.querySelector('.sea').addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('thoughts')) {
        event.target.remove();
    }
});

