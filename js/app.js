// Initialize the conversation on page load
window.onload = startConversation;

// Function to start the chat with the initial prompt
function startConversation() {
    displayMessage("Please select: 1. Register, 2. Check Payment, 3. Other", 'bot');
}

// Function to handle sending the user's message
function sendMessage() {
    const userMessage = document.getElementById("user-input").value;
    displayMessage(userMessage, 'user');
    processUserInput(userMessage);
}

// Function to display a message in the chat interface
function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add(sender);
    document.getElementById("messages").appendChild(messageElement);
}

// Function to process the user's input and provide a response based on the selected option
function processUserInput(input) {
    const userMessage = input.trim();

    let botResponse;
    if (userMessage === "1") {
        botResponse = "You chose to Register. Please provide your name and email.";
    } else if (userMessage === "2") {
        botResponse = "You chose to Check Payment. Please enter your payment ID to continue.";
    } else if (userMessage === "3") {
        botResponse = "You selected 'Other.' Please describe your query, and I’ll do my best to help.";
    } else {
        botResponse = "I'm sorry, I didn't understand that. Please select: 1. Register, 2. Check Payment, 3. Other";
    }

    displayMessage(botResponse, 'bot');
}
