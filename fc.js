function submitForm() {
    var searchValue = document.getElementById("search").value;
    if (searchValue.trim() !== "") {
      // Redirect to the next page
      window.location.href = "search.html";
    }
    return false;
  }