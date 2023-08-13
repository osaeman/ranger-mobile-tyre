//Appending Tyre section
const appendingContainer = document.querySelector(
  ".specify-detail-forms-container"
);
const addMoreBtn = document.querySelectorAll(".add-more-btn");
const removeTyreBtn = document.querySelector(".remove-tyre-btn");
addMoreBtn.forEach((item, index) => {
  item.addEventListener("click", clickAppend);
});
function clickAppend() {
  var appendData = `  <form action="" class="specify-details-form">
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
        <div class="input-form-custom-button"></div>
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
        <div class="input-form-custom-button"></div>
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
        <div class="input-form-custom-button"></div>
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
          max="126"
          min="62"
        />
        <div class="input-form-custom-button"></div>
      </div>
      <div>
        <label for="speedRating">Speed Rating</label>
  
        <select name="speedRating" id="speedRating" required>
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
  // appendingContainer.appendChild(appendData);
  appendingContainer.insertAdjacentHTML("beforeend", appendData);
}

removeTyreBtn.addEventListener("click", () => {
  var lastChild = appendingContainer.lastElementChild;
  appendingContainer.removeChild(lastChild);
  if (appendingContainer.children.length === 1) {
    removeTyreBtn.style.display = "none";
  }
});
