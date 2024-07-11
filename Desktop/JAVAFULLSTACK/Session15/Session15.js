// let root = prompt("Moi ban nhap vao 1 chuoi bat ky").split("");
// return root;
//['h', 'e', 'l', 'l', 'o']
//['h','e','l','l'], ['e','l','l','o']

//........

//['h','e','l','l','o']

// let subArray = [];
// for (let i = 0; i < root.length - 1; i = i + 1) {
//   subArray.push(root[i]);
// }

// let subArray2 = [];
// for (let i = 1; i <= root.length - 1; i = i + 1) {
//   subArray2.push(root[i]);
// }
// return(subArray, subArray2);

// let subArray3 = [];
// for (let i = 0; i <= root.length - 3; i = i + 1) {
//   subArray3.push(root[i]);
// }

// let subArray4 = [];
// for (let i = 1; i <= root.length - 2; i = i + 1) {
//   subArray4.push(root[i]);
// }

// let subArray5 = [];
// for (let i = 2; i <= root.length - 1; i = i + 1) {
//   subArray5.push(root[i]);
// }

// return(subArray3);
// return(subArray4);
// return(subArray5);

// let arr = prompt("Enter a string : ");
// function findSubString(str) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (j = i + 1; j <= arr.length; j++) {
//       newArr.push(arr.slice(i, j));
//     }
//   }
//   return newArr;
// }
// return(findSubString(arr));

// length của mảng con=1
// for (let i = 0; i <= root.length - 1; i = i + 1) {
//   let subArr = [];
//   subArr.push(root[i]);
//   return(subArr);
// }

//length của mảng con=2 => n
// let result = [];
// for (let k = 1; k <= root.length - 1; k = k + 1) {
//   for (let i = 0; i <= root.length - k; i = i + 1) {
//     // Do phần tử cuối cùng bị thừa nên không xét đến phần tử cuối cùng nữa
//     let subArr = [];
//     for (let j = i; j < i + k; j = j + 1) {
//       subArr.push(root[j]);
//     }
//     result.push(subArr.join(""));
//   }
// }
// result.push(root.join(""));
// return(result);

// let todoList = [
//   "Go to sleep early",
//   "Take a shower",
//   "Do homework",
//   "Learn a new thing!!!",
// ];
// let loop = true;
// while (loop) {
//   let command = prompt(
//     "Mời bạn nhập vào các chữ cái C/R/U/D để điều khiển dnah sách Todo List"
//   );
//   if (command === "C") {
//     //Thêm mới một todo vào danh sách todo List
//     let todo = prompt("Mời bạn nhập vào todo mới");
//     todoList.push(todo);
//     printTdo();
//   } else if (command == "R") {
//     //In ra toàn bộ todo trong danh sách todoList
//     printTdo();
//   } else if (command == "U") {
//     //Cho người dùng chọn vị trí của todo muốn cập nhật
//     let index = +prompt("Mời bạn nhập vào vị trí của todo muốn cập nhập");
//     //Cho người dùng nhập vào nội dung cập nhật mới của todo đó
//     let updateTodo = prompt("Mời bạn nhập vào nội dug mới của todo");
//     //Tiến hành cập nhật
//     todoList[index - 1] = updateTodo;
//     //In ra toàn bộ todo có trong danh sách todo List
//     printTdo();
//   } else if (command == "D") {
//     //Cho người dùng chọn vị trí của todo muốn xóa
//     let index = +prompt("Mời bạn nhập vào vị trí muốn xóa");
//     //Tiến hành xóa
//     todoList.splice(index - 1, 1);
//     //In ra toàn bộ todo có trong danh sáh  todoList (Để kiểm tra xóa thành công chưa?)
//     printTdo();
//   } else if (command == "E") {
//     // Kết thúc chương trình
//     loop = false;
//   } else {
//     return("Invalid command!!!!!");
//   }
// }

// function printTdo() {
//   for (let i = 0; i < todoList.length; i++) {
//     return(`${i + 1}, ${todoList[i]}`);
//   }
// }

//DEMO

//Xây dựng một ứng dụng máy bán nước tự động
//Biết
//Nhét vào 5000 ---Lavie
//Nhét vào 10k ---Coca
//Nhét vào 20k ---Sting

// Parameter( Tham số đại diện)
// function mayBanHang(money) {
//   if (money === "5000") {
//     return "Lavie";
//   } else if (money === "10000") {
//     return "Coca";
//   } else if (money === "20000") {
//     return "Sting";
//   } else {
//     return "Chúng tôi không chấp nhận giá tiền này,";
//   }
// }

// //Argument - Đối số thực tế
// mayBanHang("5000"); //Lavie
// mayBanHang("10000"); //Coca
// mayBanHang("20000"); //Sting

//Viết 1 hàm (chương trình con, nhận vào 2 tham số)
// là 2 số cần tính tổng
//Tính tổng và trả về kết quả

// function tinhTong(soHang1, soHang2) {
//   let total = soHang1 + soHang2;
//   return total;
// }
// tinhTong(1, 2);
// tinhTong(4, 2);
// tinhTong(-1, 1);

//Cơ chế hoisting trong Javácrip???

// function processConfirm(answer) {
//   let result = "";
//   if (answer) {
//     result = "Excellent. We'll play a nice game of chess.";
//   } else {
//     result = "Maybe later then.";
//   }
//   return result;
// }
// // let confirmAnswer = confirm("Shall we play a game?");
// // let theAnswer = processConfirm(confirmAnswer);
// // alert(theAnswer);
// console.log(processConfirm(0));

// [THỰC HÀNH] CHUYỂN ĐỔI NHIỆT ĐỘ

// function temperatureConverter(valNum) {
//   valNum = parseFloat(valNum);
//   document.getElementById("outputCelsius").innerHTML = (valNum - 32) / 1.8;
// }

//TÌM GIÁ TRỊ NHỎ NHẤT CỦA MẢNG
// arr1 = [3, 5, 1, 8, -3, 7, 8];
// arr2 = [7, 12, 6, 9, 20, 56, 89];
// arr3 = [];
// arr4 = [0, 0, 0, 0, 0, 0];

// function minArray(arr) {
//   let min = arr[0];
//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }
// console.log(minArray(arr1));

//TH MỞ RỘNG
// let A = [0, 1, 2, 3, 4, 5];
// function minArray(arr) {
//   if (arr.length == 0) {
//     return -1;
//   }
//   let min = arr[0];
//   let vitri = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       vitri = i;
//       min = arr[i];
//     }
//   }
//   return vitri;
// }
// console.log(minArray(A));

//HÀM KIỂM TRA ĐỐI XỨNG
// let input = prompt("Nhập vào chuỗi kí tự bất kì");
// function isPalindrome(str) {
//   // Chuyển chuỗi về dạng chữ thường và loại bỏ khoảng trắng và dấu câu
//   str = str.toLowerCase().replace(/[a-ZA-Z0-9]/g, "");

//   // Đảo ngược chuỗi
//   let reversed = str.split("").reverse().join("");

//   // So sánh chuỗi gốc với chuỗi đảo ngược
//   return str === reversed;
// }
// console.log(isPalindrome(input));

// let a ="Nguyễn Văn Anh";
// a.toLowerCase();
// a.split(" ");

// [Thực hành] HÀM QUY ĐỔI NHIỆT ĐỘ
// (ĐỘ C SANG ĐỘ F)

// function celsiusToFahrenheit(celsius) {
//   let fahrenheit = celsius * 1.8 + 32;
//   return fahrenheit;
// }
// function fahrenheitToCelsius(fahrenheit) {
//   let celsius = (fahrenheit - 32) / 1.8;
//   return celsius;
// }
// console.log(celsiusToFahrenheit(26)); // Kết quả: 78.8
// console.log(fahrenheitToCelsius(88)); // Kết quả: 31.1

// [Thực hành] HÀM TÍNH TỔNG CÁC PHẦN TỬ TRONG MẢNG
// function sum(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i];
//   }
//   return sum;
// }
// let arr = [1, 2, 3, 4, 5, 6];
// let arr2 = [10, 20, 30, 40, 50];
// let arr3 = [1, 3, 5, 7, 9];

// console.log(sum(arr)); // 21
// console.log(sum(arr2)); // 150
// console.log(sum(arr3)); // 25

// [Thực hành] HÀM VIẾT HOA CHỮ CÁI ĐẦU TIÊN
// a = "NguyễN VĂn Anh";
// b = "LÊ THị A";
// function change(str) {
//   let work = str.toLowerCase().split(" ");
//   for (i = 0; i <= work.length - 1; i = i + 1) {
//     work[i] = work[i][0].toUpperCase() + work[i].slice(1);
//   }
//   return work.join(" ");
// }
// console.log(change(a));
// console.log(change(b));
