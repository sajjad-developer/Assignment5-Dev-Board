// Click Event For Left Side Section Button Start

const buttons = document.getElementsByClassName("btn-click");

for (const button of buttons) {
  button.addEventListener("click", function (event) {
    // Alert For All Button Start
    alert("Submission Done");
    //  Alert for All Button Closed Above

    const lastButton = buttons[buttons.length - 1];

    if (event.target === lastButton) {
      alert("double alert");
    }

    // Button Disabled Feature On Start
    event.target.disabled = true;
    event.target.style.opacity = 0.5;
    event.target.style.cursor = "not-allowed";
    // Button Disabled Feature On Closed Above

    // Increase Navbar Number Counter Start
    const navBarNumberCounter = document.getElementById(
      "navBarNumberCounter"
    ).innerText;
    const convertedNavBarNumberCounter = parseInt(navBarNumberCounter) + 1;
    document.getElementById("navBarNumberCounter").innerText =
      convertedNavBarNumberCounter;
    // Increase Navbar Number Counter Closed Above

    //   Decrease Task Assigned Number Counter Start
    const numberCounter = document.getElementById("numberCounter").innerText;
    const convertedNumberCounter = parseInt(numberCounter) - 1;
    document.getElementById("numberCounter").innerText = convertedNumberCounter;
    // Decrease Task Assigned Number Counter Closed Above

    // Submitted Notification Add Section Start

    // Create Current Time Start
    const currentDateAndTime = new Date();
    const optionsTime = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

    const currentTime = currentDateAndTime.toLocaleTimeString(
      "en-US",
      optionsTime
    );

    // Create Current Time Closed Above

    const submittedTimeNotification = document.getElementById(
      "submittedTimeNotification"
    );
    const p = document.createElement("p");
    p.innerHTML = `
    <p> You have completed the assignment on <span style="font-weight: bold; color: green;"> ${currentTime} </span>  </p>
    
    `;

    submittedTimeNotification.appendChild(p);

    // Submitted Notification Add Section Closed Above
  });
}

// Click Event For Left Side Section Button Closed Above

// Activity Session Button Click Event Start
// document
//   .getElementById("btn-activity-log")
//   .addEventListener("click", function () {
//  Clear Submitted Notification Section

document
  .getElementById("btn-activity-log")
  .addEventListener("click", function () {
    const submittedTimeNotification = document.getElementById(
      "submittedTimeNotification"
    );
    if (submittedTimeNotification.hasChildNodes()) {
      submittedTimeNotification.innerHTML = "";
    }
  });
