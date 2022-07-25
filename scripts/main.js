// Wait for the webpage to fully load before running any of our JS code.
$(document).ready(function () {

    // Listen for a click on the CALCUlATE TAX button. Run some code for every click.
    $("#total-button").click(function () {

        // Grab the value in the input box, and store that value in the userValue variable.
        // JS NOTE: Any values that come from outside of JavaScript are AUTOMATICALLY a string type.
        var userValue = $("#expense").val();
        
        // indexOf() looks at a single character in a string, using index numbers.
        console.log(userValue);
        console.log(userValue.charAt());

        if (userValue.charAt(0) == "") {

            $("#results").html("Please type in a valid number!");

            return;

        }

        // Convert the userValue value from a string to a number.
        userValue = parseFloat(userValue);

        // Current California tax rate 7.25%
        var californiaRate = .0725;

        // Multiply the value provided by the user with the California tax rate.
        var taxAmount = userValue * californiaRate;

        // Add or Remove decimal points to fit a monetary value.
        taxAmount = taxAmount.toFixed(2);

        // Build the sentence that describes the sales tax on a specific purchase value.
        var sentence = "The California Sales Tax on a $" + userValue.toFixed(2) + " purchase is $" + taxAmount + ".";

        // Put the sentence we built onto the webpage (under Results).
        $("#results").html(sentence);

    });
    
    

});