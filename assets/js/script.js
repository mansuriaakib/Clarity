// PROGRESS BAR JS [START]
const progressBars = document.querySelectorAll(".progress-bar");

progressBars.forEach((progressBar) => {
  let isDragging = false; // Track if the user is dragging

  // Function to update progress
  function updateProgress(event) {
    const progressContainer = progressBar.parentElement; // Get the parent container
    const containerWidth = progressContainer.offsetWidth; // Container width
    let newWidth =
      event.clientX - progressContainer.getBoundingClientRect().left; // Mouse position

    // Ensure the new width is within bounds
    if (newWidth < 0) newWidth = 0;
    if (newWidth > containerWidth) newWidth = containerWidth;

    // Calculate percentage progress
    const progress = (newWidth / containerWidth) * 100;

    // Update progress bar styles and attributes
    progressBar.style.width = progress + "%";
    progressBar.innerText = Math.round(progress) + "%";
    progressBar.setAttribute("aria-valuenow", Math.round(progress));
  }

  // Start dragging and activate the progress bar
  progressBar.addEventListener("mousedown", (event) => {
    isDragging = true;

    // Add the "active" class to change color
    progressBar.classList.add("active");

    // Update progress immediately on click
    updateProgress(event);
  });

  // Update progress while dragging
  window.addEventListener("mousemove", (event) => {
    if (isDragging) {
      updateProgress(event);
    }
  });

  // Stop dragging
  window.addEventListener("mouseup", () => {
    isDragging = false;
  });
});

// PROGRESS BAR JS [END]
