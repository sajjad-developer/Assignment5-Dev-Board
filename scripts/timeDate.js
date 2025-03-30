function currentDate() {
  // Date object includes current time and date
  const currentDateAndTime = new Date();

  //   Declare weekday options
  const optionsWeekDay = {
    weekday: "short",
  };

  // Declare date options
  const optionsDate = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };

  // get current weekday
  const currentWeekDay = currentDateAndTime.toLocaleDateString(
    "en-US",
    optionsWeekDay
  );
  //   get current date
  const currentDate = currentDateAndTime.toLocaleDateString(
    "en-US",
    optionsDate
  );

  //   create currentWeekday and currentDate using two paragraph elemnets

  const pCurrentWeekday = document.createElement("p");
  const pCurrentDate = document.createElement("p");

  pCurrentWeekday.innerText = currentWeekDay + " ,";
  pCurrentDate.innerText = currentDate;

  //   parent element
  const currentDateParent = document.getElementById("current-date");
  // append day and date to parent
  currentDateParent.appendChild(pCurrentWeekday);
  currentDateParent.appendChild(pCurrentDate);
  pCurrentWeekday.style.fontWeight = "regular";
  pCurrentWeekday.style.fontSize = "20px";
  pCurrentDate.style.fontWeight = "bold";
  pCurrentDate.style.fontSize = "20px";
}

currentDate();
