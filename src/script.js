// write your JavaScript here
document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.getElementById("openModalBtn");
  const feedbackModal = document.getElementById("feedbackModal");
  const cancelBtn = document.getElementById("cancel");
  const submitBtn = document.getElementById("submit");
  const thankYouMessage = document.getElementById("thankYouMessage");
  const ratingButtons = document.querySelectorAll(".rating button");
  const ratingDescription = document.getElementById("ratingDescription");

  let selectedRating = null;

  openModalBtn.addEventListener("click", () => {
    feedbackModal.classList.add("show");
    thankYouMessage.style.display = "none";
    selectedRating = null;
    ratingDescription.textContent = "";
    ratingButtons.forEach(button => button.style.backgroundColor = "#eee");
  });

  ratingButtons.forEach(button => {
    button.addEventListener("click", () => {
      selectedRating = button.getAttribute("data-rating");
      ratingButtons.forEach(btn => btn.style.backgroundColor = "#eee");
      button.style.backgroundColor = "#007bff";

      const ratingNum = parseInt(selectedRating);

      if ([1, 2, 3].includes(ratingNum)) {
        ratingDescription.textContent = "Not likely";P
      } else if ([5, 6, 8, 9].includes(ratingNum)) {
        ratingDescription.textContent = "Maybe";
      } else if (ratingNum === 10) {
        ratingDescription.textContent = "Most likely";
      } else {
        ratingDescription.textContent = "";
      }
    });
  });

  cancelBtn.addEventListener("click", () => {
    feedbackModal.classList.remove("show");
  });

  submitBtn.addEventListener("click", () => {
    if (selectedRating) {
      thankYouMessage.style.display = "block";
      console.log(`User gave a rating of ${selectedRating}`);
      setTimeout(() => {
        feedbackModal.classList.remove("show");
      }, 2000);
    } else {
      alert("Please select a rating before submitting.");
    }
  });
});
