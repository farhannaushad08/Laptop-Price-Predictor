const BASE_URL = "https://laptop-price-predictor-1-37nu.onrender.com";

window.onload = async function () {
  const res = await fetch(`${BASE_URL}/options`);
  const options = await res.json();

  function populate(id, values) {
    const sel = document.getElementById(id);
    values.forEach(val => {
      const opt = document.createElement("option");
      opt.value = opt.text = val;
      sel.add(opt);
    });
  }

  populate("company", options.company);
  populate("types", options.types);
  populate("cpu", options.cpu);
  populate("gpu", options.gpu);
  populate("os", options.os);
  populate("resolution", options.resolution);
  populate("ram", options.ram);
  populate("hdd", options.hdd);
  populate("ssd", options.ssd);
};

document.getElementById("predict-form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = {
    company: document.getElementById("company").value,
    types: document.getElementById("types").value,
    ram: parseInt(document.getElementById("ram").value),
    weight: parseFloat(document.getElementById("weight").value),
    touchscreen: document.getElementById("touchscreen").value,
    ips: document.getElementById("ips").value,
    screen_size: parseFloat(document.getElementById("screen_size").value),
    resolution: document.getElementById("resolution").value,
    cpu: document.getElementById("cpu").value,
    hdd: parseInt(document.getElementById("hdd").value),
    ssd: parseInt(document.getElementById("ssd").value),
    gpu: document.getElementById("gpu").value,
    os: document.getElementById("os").value,
  };

  const response = await fetch(`${BASE_URL}/predict`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });

  const result = await response.json();
  document.getElementById("result").innerText = "Predicted Price: ₹" + result.predicted_price;
});
