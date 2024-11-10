// Initialize the Google API Client
gapi.load('client:auth2', initClient);

function initClient() {
    gapi.client.init({
        apiKey: 'YOUR_API_KEY',
        clientId: 'YOUR_CLIENT_ID',
        discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
        scope: "https://www.googleapis.com/auth/spreadsheets"
    }).then(function() {
        gapi.auth2.getAuthInstance().signIn().then(function() {
            console.log('Signed in');
            appendDataToSheet();
        });
    });
}

function appendDataToSheet() {
    const sheetId = 'YOUR_SHEET_ID';
    const range = 'Sheet1!A1:B1';  // Adjust based on your sheet's structure
    const values = [["User", "Input"]];  // Change as needed based on form data

    const body = {
        values: values
    };

    gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: range,
        valueInputOption: 'RAW',
        resource: body
    }).then((response) => {
        console.log('Data written to sheet: ', response);
    });
}

function sendMessage() {
    const userMessage = document.getElementById("user-input").value;
    displayMessage(userMessage, 'user');
    processUserInput(userMessage);
}

function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add(sender);
    document.getElementById("messages").appendChild(messageElement);
}

function processUserInput(input) {
    displayMessage("Processing your input...", 'bot');
    setTimeout(() => displayMessage("Thank you for your input!", 'bot'), 1000);
}
