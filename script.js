let fieldCount = 0;

function addField(type) {
  fieldCount++;

  const form = document.getElementById("formPreview");

  const wrapper = document.createElement("div");
  wrapper.className = "field";

  const label = document.createElement("label");
  label.textContent = "Field " + fieldCount;

  let input;

  if (type === "textarea") {
    input = document.createElement("textarea");
  } else {
    input = document.createElement("input");
    input.type = type;
  }

  input.placeholder = "Enter " + type + " here";

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";
  removeBtn.type = "button";
  removeBtn.onclick = function () {
    form.removeChild(wrapper);
  };

  wrapper.appendChild(label);
  wrapper.appendChild(input);
  wrapper.appendChild(removeBtn);

  form.appendChild(wrapper);
}
