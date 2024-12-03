document.getElementById("btn").addEventListener("click", async () => {
  const text = document.getElementById("text").value; // Retrieve the text
  const delay = Number(document.getElementById("delay").value); // Retrieve the delay as a number
  const outputDiv = document.getElementById("output");

  // Validate the input fields
  if (!text || isNaN(delay) || delay < 0) {
    outputDiv.textContent = "Please enter valid text and a positive delay.";
    return;
  }

  // Function to create a delay using a promise
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  outputDiv.textContent = "Processing...";

  // Wait for the specified delay
  await wait(delay);

  // Display the text after the delay
  outputDiv.textContent = text;
});
