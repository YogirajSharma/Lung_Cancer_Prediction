// Adds an event listener for 'DOMContentLoaded' to ensure the HTML is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    
    // Fetches the risk level passed from the server as a dynamic variable
    const riskLevel = "{{ risk_level }}"; // Ensure this variable is passed correctly from the backend template

    // Get the 'prediction-result' div to display the result of the prediction
    const resultDiv = document.getElementById('prediction-result');

    // Get the 'home-btn' button to modify its styling based on risk level
    const homeBtn = document.getElementById('home-btn');

    // Get the 'shape-one' div element to apply dynamic styling to the shape
    const shapeOne = document.getElementById('shape-one');

    // Get the 'shape-two' div element to apply dynamic styling to the shape
    const shapeTwo = document.getElementById('shape-two');

    // Check the risk level and apply the corresponding content and styles
    if (riskLevel === 'low') { // If the risk level is 'low'
        
        // Set the text content of the result div to 'Low Risk'
        resultDiv.textContent = 'Low Risk';
        
        // Add the 'low-risk' class to the result div to style it appropriately
        resultDiv.classList.add('low-risk');

        // Add the 'low-risk-shape' class to shape one to modify its appearance for low risk
        shapeOne.classList.add('low-risk-shape');

        // Add the 'low-risk-shape' class to shape two to modify its appearance for low risk
        shapeTwo.classList.add('low-risk-shape');

        // Add the 'low-risk-btn' class to the home button to style it for low risk
        homeBtn.classList.add('low-risk-btn');

    } else if (riskLevel === 'medium') { // If the risk level is 'medium'
        
        // Set the text content of the result div to 'Medium Risk'
        resultDiv.textContent = 'Medium Risk';

        // Add the 'medium-risk' class to the result div for medium risk styling
        resultDiv.classList.add('medium-risk');

        // Add the 'medium-risk-shape' class to shape one for medium risk appearance
        shapeOne.classList.add('medium-risk-shape');

        // Add the 'medium-risk-shape' class to shape two for medium risk appearance
        shapeTwo.classList.add('medium-risk-shape');

        // Add the 'medium-risk-btn' class to the home button for medium risk styling
        homeBtn.classList.add('medium-risk-btn');

    } else if (riskLevel === 'high') { // If the risk level is 'high'
        
        // Set the text content of the result div to 'High Risk'
        resultDiv.textContent = 'High Risk';

        // Add the 'high-risk' class to the result div to apply high risk styling
        resultDiv.classList.add('high-risk');

        // Add the 'high-risk-shape' class to shape one to modify its appearance for high risk
        shapeOne.classList.add('high-risk-shape');

        // Add the 'high-risk-shape' class to shape two to modify its appearance for high risk
        shapeTwo.classList.add('high-risk-shape');

        // Add the 'high-risk-btn' class to the home button to apply high risk styling
        homeBtn.classList.add('high-risk-btn');
    }
});
