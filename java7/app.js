// 1. Create a simple event that prints a message when the user clicks
// on an element.

// Create an event that hides an element when the user clicks on a
// different element
 // Get a reference to the button element by its ID
        var button = document.getElementById("myButton");

        // Add a click event listener to the button
        button.addEventListener("click", function() {
            // This code will be executed when the button is clicked
            console.log("Button Clicked!");
        });
// Get a reference to the link element
var scrollToTopLink = document.getElementById("scrollToTopLink");

// Add a click event listener to the link
scrollToTopLink.addEventListener("click", function(event) {
    // Prevent the default behavior of the link (to avoid jumping to a new page)
    event.preventDefault();

    // Scroll to the top of the page smoothly
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Get references to the elements
var elementToHide = document.getElementById("elementToHide");
var clickTrigger = document.getElementById("clickTrigger");

// Add a click event listener to the trigger element
clickTrigger.addEventListener("click", function() {
    // Hide the element to hide
    elementToHide.style.display = "none";
});
 // Function to hide the element
 function hideElement() {
    var elementToHide = document.getElementById("elementToHide");
    elementToHide.style.display = "none";
}

 // Function to display an alert message
 function alertMessage() {
    alert("Mouse over detected!");
}

 // Get a reference to the button element
 var playSoundButton = document.getElementById("playSoundButton");

 // Get a reference to the audio element
 var audio = document.getElementById("myAudio");

 // Add a click event listener to the button
 playSoundButton.addEventListener("click", function() {
     // Play the audio
     audio.play();
 });

 <script>
 // JavaScript code can be added here if needed
</script>


 // Get a reference to the link element
 var playSoundLink = document.getElementById("playSoundLink");

 // Get a reference to the audio element
 var audio = document.getElementById("myAudio");

 // Add a click event listener to the link
 playSoundLink.addEventListener("click", function(event) {
     // Prevent the default behavior of the link (to avoid jumping to a new page)
     event.preventDefault();

     // Play the audio
     audio.play();
 });


         // Get a reference to the link element
         var openWindowLink = document.getElementById("openWindowLink");

         // Add a click event listener to the link
         openWindowLink.addEventListener("click", function(event) {
             // Prevent the default behavior of the link (to avoid jumping to a new page)
             event.preventDefault();
 
             // Get the current mouse position
             var mouseX = event.clientX;
             var mouseY = event.clientY;
 
             // Calculate the width and height for the new window based on mouse position
             var windowWidth = mouseX + 100; // Add 100 pixels to the right
             var windowHeight = mouseY + 100; // Add 100 pixels below
 
             // Open a new window with the calculated size
             var newWindow = window.open("", "_blank", "width=" + windowWidth + ",height=" + windowHeight);
 
             // Add content to the new window
             newWindow.document.write("<h1>New Window</h1>");
             newWindow.document.write("<p>This is a new window with a close button.</p>");
             newWindow.document.write('<button id="closeWindowButton">Close Window</button>');
 
             // Add a click event listener to the close button in the new window
             newWindow.document.getElementById("closeWindowButton").addEventListener("click", function() {
                 // Close the new window
                 newWindow.close();
             });
         });


           // Get references to the input element and the submit button
        var userInput = document.getElementById("userInput");
        var submitButton = document.getElementById("submitButton");

        // Add a click event listener to the submit button
        submitButton.addEventListener("click", function() {
            // Read the value of the input element
            var inputValue = userInput.value;

            // Print the value to the console
            console.log("User Input:", inputValue);
        });

        // Get references to the checkbox element and the submit button
        var myCheckbox = document.getElementById("myCheckbox");
        var submitButton = document.getElementById("submitButton");

        // Add a click event listener to the submit button
        submitButton.addEventListener("click", function() {
            // Read the state of the checkbox (true if checked, false if unchecked)
            var isChecked = myCheckbox.checked;

            // Print the state to the console
            console.log("Checkbox Value:", isChecked);
        });

          // Get references to the select element and the submit button
          var mySelect = document.getElementById("mySelect");
          var submitButton = document.getElementById("submitButton");
  
          // Add a click event listener to the submit button
          submitButton.addEventListener("click", function() {
              // Read the selected value from the select element
              var selectedValue = mySelect.value;
  
              // Print the selected value to the console
              console.log("Selected Value:", selectedValue);
          });

            // Get a reference to the text field by its made-up ID
        var textField = document.getElementById("myTextField");

        // Set some text in the text field
        textField.value = "This is some text in the field.";

         // Function to update the status field based on the checkbox value
         function updateStatus() {
            // Get the checkbox element
            var maritalStatusCheckbox = document.getElementById("maritalStatus");
            
            // Get the status field element
            var statusField = document.getElementById("status");
            
            // Check if the user is married
            var married = maritalStatusCheckbox.checked;
            
            // Set the value of the status field based on marital status
            if (married) {
                statusField.value = "Married";
            } else {
                statusField.value = "Available";
            }
            
            // Enable or disable the status field based on marital status
            statusField.disabled = married;
        }

        // Get references to the input element and the fill button
        var myInput = document.getElementById("myInput");
        var fillButton = document.getElementById("fillButton");

        // Add a click event listener to the fill button
        fillButton.addEventListener("click", function() {
            // Check if the input is empty (has no value)
            if (myInput.value === "") {
                // Fill the input with a default string
                myInput.value = "Default Text";
            }
        });

        function validateForm() {
            // Get references to the form fields
            var nameField = document.getElementById("name");
            var emailField = document.getElementById("email");
            var passwordField = document.getElementById("password");
            
            // Get references to error message elements
            var nameError = document.getElementById("nameError");
            var emailError = document.getElementById("emailError");
            var passwordError = document.getElementById("passwordError");

            // Reset error messages
            nameError.textContent = "";
            emailError.textContent = "";
            passwordError.textContent = "";

            // Validation logic
            var valid = true;

            // Name validation: Required and at least 3 characters
            if (nameField.value.length < 3) {
                nameError.textContent = "Name must be at least 3 characters.";
                valid = false;
            }

            // Email validation: Required and must have a valid format
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailPattern.test(emailField.value)) {
                emailError.textContent = "Enter a valid email address.";
                valid = false;
            }

            // Password validation: Required and at least 6 characters
            if (passwordField.value.length < 6) {
                passwordError.textContent = "Password must be at least 6 characters.";
                valid = false;
            }

            // Return true if the form is valid; otherwise, prevent submission
            return valid;
        }