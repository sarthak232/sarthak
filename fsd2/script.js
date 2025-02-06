// JavaScript DOM Manipulation
document.getElementById("submitButton").addEventListener("click", function () {
    const userName = document.getElementById("userName").value.trim();
    if (userName === "") {
      alert("Please enter your name.");
    } else {
      document.getElementById("formOutput").innerHTML = `Hello, ${userName}!`;
    }
  });
  
  // Change image source
  document.getElementById("changeImage").addEventListener("click", function () {
    document.getElementById("image").src = "https://via.placeholder.com/200/ff6347";
  });
  
  // Add and Delete Node
  document.getElementById("addNode").addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.className = "list-group-item";
    newItem.textContent = `Item ${document.querySelectorAll("#itemList li").length + 1}`;
    document.getElementById("itemList").appendChild(newItem);
  });
  
  document.getElementById("deleteNode").addEventListener("click", function () {
    const itemList = document.getElementById("itemList");
    if (itemList.children.length > 0) {
      itemList.removeChild(itemList.lastElementChild);
    } else {
      alert("No items to delete.");
    }
  });
  
  // jQuery Manipulations
  $(document).ready(function () {
    // Change button text
    $("#changeButtonText").click(function () {
      $(this).text("Button Text Changed!");
    });
  
    // Set background image
    $("#setBackground").click(function () {
      $("#background-section").css({
        "background-image": "url('https://via.placeholder.com/400')",
        "color": "#333"
      });
    });
  });
  