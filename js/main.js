let table = document.querySelector(".table");
let inputField = document.querySelector(".myInput");
let array = [];

// التحقق من وجود بيانات مسبقة في Local Storage
if (localStorage.getItem("Numbers")) {
  array = JSON.parse(localStorage.getItem("Numbers"));
  populateTable(array); // ملء الجدول بالبيانات المخزنة
}

// إنشاء عنصر جديد عند النقر على الزر

function createElement(value) {
  if (value === "" || isNaN(value)) {
    document.querySelector("p").innerHTML = "Please enter a valid number.";
    return;
  }

  document.querySelector("p").innerHTML = ""; // تنظيف رسالة الخطأ
  let number = Number(value);
  array.push(number);

  addRowToTable(number); // إضافة الصف الجديد للجدول
  addToLocalStorage(array); // تحديث Local Storage
  inputField.value = ""; // تنظيف حقل الإدخال
}

function addRowToTable(number) {
  let tr = document.createElement("tr");
  let evenCell = document.createElement("td");
  let oddCell = document.createElement("td");
  let deleteButton = document.createElement("button");

  // إعداد زر الحذف
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";
  deleteButton.addEventListener("click", () => {
    deleteNumber(number, tr);
  });

  if (number % 2 === 0) {
    evenCell.textContent = number;
    oddCell.textContent = "";
  } else {
    evenCell.textContent = "";
    oddCell.textContent = number;
  }

  tr.appendChild(evenCell);
  tr.appendChild(oddCell);
  tr.appendChild(deleteButton);
  table.appendChild(tr);
}

function deleteNumber(number, row) {
  // حذف الرقم من المصفوفة
  array = array.filter((item) => item !== number);

  // تحديث Local Storage
  addToLocalStorage(array);

  // حذف الصف من الجدول
  row.remove();
}

function addToLocalStorage(arrayOfData) {
  localStorage.setItem("Numbers", JSON.stringify(arrayOfData));
}

function populateTable(data) {
  data.forEach((number) => {
    addRowToTable(number);
  });
}

document.querySelector(".check").addEventListener("click", () => {
  createElement(inputField.value.trim());
});
