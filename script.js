document.addEventListener("DOMContentLoaded", function () {
    const btnEncode = document.getElementById("btnEncode");
    const btnDecode = document.getElementById("btnDecode");

    if (btnEncode) {
        btnEncode.addEventListener("click", maHoa);
    }

    if (btnDecode) {
        btnDecode.addEventListener("click", giaiMa);
    }
});

// Hàm mã hóa chuỗi (Dịch chuyển mã ASCII +1)
function maHoa() {
    const inputStr = document.getElementById("inputStr");
    const outputStr = document.getElementById("outputStr");
    let text = inputStr.value;

    if (!text) {
        alert("Vui lòng nhập chuỗi cần mã hóa!");
        return;
    }

    let result = "";
    for (let i = 0; i < text.length; i++) {
        let code = text.charCodeAt(i);
        result += String.fromCharCode(code + 1);
    }
    outputStr.value = result;
}

// Hàm giải mã chuỗi (Dịch chuyển mã ASCII -1)
function giaiMa() {
    const inputStr = document.getElementById("inputStr");
    const outputStr = document.getElementById("outputStr");
    let text = outputStr.value;

    if (!text) {
        alert("Không có chuỗi mã hóa để giải mã!");
        return;
    }

    let result = "";
    for (let i = 0; i < text.length; i++) {
        let code = text.charCodeAt(i);
        result += String.fromCharCode(code - 1);
    }
    inputStr.value = result;
}