// Start the chat conversation when the page loads
window.onload = startConversation;

// Function to display the initial prompt
function startConversation() {
    displayMessage("Please select: 1. Register, 2. Check Payment, 3. Other", 'bot');
}

// Function to handle sending the user's message
function sendMessage() {
    const userMessage = document.getElementById("user-input").value;
    
    if (userMessage.trim() !== "") { // Check that input is not empty
        displayMessage(userMessage, 'user'); // Display the user's message
        processUserInput(userMessage); // Process the message to determine a response
        document.getElementById("user-input").value = ""; // Clear the input field
    }
}

// Function to display a message in the chat interface
function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add(sender); // Add a class to style the message
    document.getElementById("messages").appendChild(messageElement);

    // Scroll to the bottom of the chat to show the latest message
    const chatContainer = document.getElementById("messages");
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Function to process the user's input and respond based on the selected option
function processUserInput(input) {
    const userMessage = input.trim();
    let botResponse;

    // Handle different options based on user input
    if (userMessage === "1") {
        botResponse = "You chose to Register. Please provide your name and email.";
    } else if (userMessage === "2") {
        botResponse = "You chose to Check Payment. Please enter your payment ID to continue.";
    } else if (userMessage === "3") {
        botResponse = "You selected 'Other.' Please describe your query, and I’ll do my best to help.";
    } else {
        botResponse = "I'm sorry, I didn't understand that. Please select: 1. Register, 2. Check Payment, 3. Other";
    }

    // Display the bot's response
    displayMessage(botResponse, 'bot');
}
