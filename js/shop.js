document.addEventListener("DOMContentLoaded", function () {
  // Page Check
  var primaryData = JSON.parse(localStorage.getItem("primaryData"));
  if (primaryData === null) {
    window.location.href = "../index.html";
  }
  var tyre_quantity = 1;
  // Checking status of Checkbox
  var check = "no";

  document.getElementById("flat").addEventListener("change", () => {
    const flat = document.getElementById("flat"); // Get the checkbox element
    check = flat.checked ? "yes" : "no"; // Use ternary operator to set check value
  });

  //Appending Tyre section
  const appendingContainer = document.querySelector(
    ".specify-detail-forms-container"
  );
  const addMoreBtn = document.querySelector(".add-more-btn");
  const removeTyreBtn = document.querySelector(".remove-tyre-btn");

  addMoreBtn.addEventListener("click", () => {
    tyre_quantity += 1;
    var appendData = `  <form  class="specify-details-form">
    <h5>Specify Tyre Details</h5>
    <div class="specify-details-form-part-1">
      <div>
        <label for="wheelPosition">Wheel Position</label>
  
        <select name="wheelPosition" id="wheelPosition" required>
          <option value="driverSideFront">Driver Side Front</option>
          <option value="passengerSideFront">
            Passenger Side Front
          </option>
          <option value="driverSideRear">Driver Side Rear</option>
          <option value="passengerSideRear">Driver Side Rear</option>
        </select>
      
      </div>
      <div>
        <label for="width">Width</label>
        <input type="number" required id="width" name="width" />
     
      </div>
    </div>
  
    <!-- <div>
      <label class="switch">
        <input type="checkbox" required />
        <span class="slider round"></span>
      </label>
    </div> -->
    <div class="specify-details-form-part-2">
      <div>
        <label for="profile">Profile</label>
        <input type="number" required id="profile" name="profile" />
     
      </div>
      <div>
        <label for="loadIndex">Load Index</label>
        <input
          type="number"
          required
          id="loadIndex"
          name="loadIndex"
          max="126"
          min="62"
        />
    
      </div>
    </div>
  
    <div class="specify-details-form-part-3">
      <div>
        <label for="rim">Rim</label>
        <input
          type="number"
          required
          id="rim"
          name="rim"
          min = "1"
        />
     
      </div>
      <div>
        <label for="speedRating">Speed Rating</label>
  
        <select name="speedRating" id="speedRating" required >
          <option value="H">H</option>
          <option value="Q">Q</option>
          <option value="R">R</option>
          <option value="S">S</option>
          <option value="H">U</option>
          <option value="Q">V</option>
          <option value="R">W</option>
          <option value="S">Y</option>
        </select>
      
      </div>
    </div>
  
  </form>`;
    removeTyreBtn.style.display = "block";

    appendingContainer.insertAdjacentHTML("beforeend", appendData);

    if (tyre_quantity === 4) {
      addMoreBtn.disabled = true;
    } else {
      addMoreBtn.disabled = false;
    }
  });
  // Remove Tyre Button Functionality
  removeTyreBtn.addEventListener("click", () => {
    var lastChild = appendingContainer.lastElementChild;
    appendingContainer.removeChild(lastChild);
    if (appendingContainer.children.length === 1) {
      removeTyreBtn.style.display = "none";
    }
    tyre_quantity -= 1;
    if (tyre_quantity === 4) {
      addMoreBtn.disabled = true;
    } else {
      addMoreBtn.disabled = false;
    }
  });

  // Form Data Handling and Redirection
  var view_price_btn = document.querySelector(".view-price-btn");
  view_price_btn.addEventListener("click", (e) => {
    e.preventDefault();
    var wheelPosition = document.getElementsByName("wheelPosition");
    var width = document.getElementsByName("width");
    var profile = document.getElementsByName("profile");
    var rim = document.getElementsByName("rim");
    var loadIndex = document.getElementsByName("loadIndex");
    var speedRating = document.getElementsByName("speedRating");
    var specify = document.querySelectorAll(".specify-details-form");
    var form_input_warning = document.querySelector(".form-input-warning");

    // Curent Time Fetching
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var price;
    var exvat;
    var data;
    var mainArray = [];
    var status = true;

    hours >= 8 && hours <= 16 ? (price = 72) : (price = 162);
    exvat = Math.round(price - (16.666 / 100) * price);
    specify.forEach((item, index) => {
      data = [
        { key: "wheelPosition", value: wheelPosition[index].value },
        { key: "width", value: width[index].value },
        { key: "profile", value: profile[index].value },
        { key: "rim", value: rim[index].value },
        { key: "loadIndex", value: loadIndex[index].value },
        { key: "speedRating", value: speedRating[index].value },
        { key: "flat", value: check },
        { key: "price", value: price },
        { key: "exvat", value: exvat },
      ];

      mainArray.push(data);
    });

    var jsonData = JSON.stringify(mainArray);
    localStorage.setItem(`tyreData`, jsonData);
    mainArray.forEach((item) => {
      item.forEach((ele) => {
        if (ele.value === "" || null || undefined) {
          form_input_warning.style.display = "block";
          status = false;
        }
      });
    });

    if (status === true) {
      var jsonData = JSON.stringify(mainArray);
      localStorage.setItem(`tyreData`, jsonData);
      window.location.href = "./cart.html";
    }
  });
});
