"use strict";

function showOrderTable() {
  const orderContainer = document.getElementById("orderContainer");
  const fullName = localStorage.getItem("fullName");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");

  const orderTable = document.createElement("table");
  orderTable.innerHTML = `
    <thead>
        <tr>
            <th class="jsThead">ПІБ</th>
            <th class="jsThead">ПОШТА</th>
            <th class="jsThead">ТЕЛЕФОН</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="jsInput">${fullName}</td>
            <td class="jsInput">${email}</td>
            <td class="jsInput">${phone}</td>
        </tr>
    </tbody>
  `;

  orderContainer.innerHTML = "";
  orderContainer.appendChild(orderTable);
}

document.addEventListener("DOMContentLoaded", function () {
  showOrderTable();
});

function goBack() {
  window.history.back();
}
