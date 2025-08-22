function convertTemperature() {
  const input = document.getElementById("tempInput").value.trim();
  const unit = document.getElementById("unitSelect").value;
  const resultDisplay = document.getElementById("resultDisplay");
  const historyList = document.getElementById("historyList");

  // Validate input
  if (isNaN(input) || input === "") {
    resultDisplay.textContent = "Please enter a valid number.";
    resultDisplay.classList.add("show");
    return;
  }

  const temp = parseFloat(input);
  let converted = "";

  // Conversion logic
  switch (unit) {
    case "celsius":
      converted = `Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)} °F | Kelvin: ${(temp + 273.15).toFixed(2)} K`;
      break;
    case "fahrenheit":
      converted = `Celsius: ${((temp - 32) * 5/9).toFixed(2)} °C | Kelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K`;
      break;
    case "kelvin":
      converted = `Celsius: ${(temp - 273.15).toFixed(2)} °C | Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
      break;
  }

  // Temperature feedback
  const celsius = unit === "celsius" ? temp :
                  unit === "fahrenheit" ? (temp - 32) * 5/9 :
                  temp - 273.15;

  let feedback = "";
  if (celsius < 0) {
    feedback = "❄️ Brrr! That's freezing.";
  } else if (celsius < 20) {
    feedback = "🌬️ A bit chilly.";
  } else if (celsius < 30) {
    feedback = "😊 Pleasant weather.";
  } else {
    feedback = "🔥 That's hot!";
  }

  // Display result with animation
  resultDisplay.textContent = `${converted}\n${feedback}`;
  resultDisplay.classList.remove("show");
  void resultDisplay.offsetWidth; // Trigger reflow
  resultDisplay.classList.add("show");

  // Add to history
  const historyItem = document.createElement("li");
  historyItem.textContent = `${input} ${unit} → ${converted}`;
  historyList.prepend(historyItem);
}

