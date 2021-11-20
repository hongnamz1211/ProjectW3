let lishProduct = []
let saveIndex
function btnAdd() {
    let product = document.getElementById("txt-add").value;
    lishProduct.push(product);
    document.getElementById("txt-add").value = ""
    displayProduct()
}

function btnSave() {
    let product = document.getElementById("txt-save").value;
    lishProduct[saveIndex] = product
    document.getElementById("txt-save").value = ""
    displayProduct()
}

function displayProduct() {
    let nameProduct = "<table>";
    nameProduct += '<tr><td colspan="2">Product Name</td><td>' + lishProduct.length + " products </td><tr>"
    for (let i = 0; i < lishProduct.length; i++) {
        nameProduct += "<tr><td>" + (i + 1) + "</td>";
        nameProduct += "<td>" + lishProduct[i] + "</td>";
        nameProduct += "<td>" + "<input type='button' value='Edit' id='txt-edit' class=\"btn\" onclick='btnEdit(" + i + ")'>"
        nameProduct +=          "<input type='button' value='Delete' id='txt-delete' class=\"btn\" onclick='btnDelete(" + i + ")'>"
        nameProduct +=          "<input type='button' value='View' id='txt-view' class=\"btn\" onclick='btnView(" + i + ")'>"  + "</td>";
        nameProduct += "</tr>";
    }
    nameProduct += "</table>";
    document.getElementById('product').innerHTML = nameProduct;
}

function btnEdit(index) {
    // let product = prompt("Nhập", lishProduct[index])
    // lishProduct[index] = product;
    document.getElementById("txt-save").value = lishProduct[index]
    saveIndex = index
    displayProduct()
}

function btnDelete(index) {
    lishProduct.splice(index,1)
    displayProduct()
}

function btnView(index) {
    document.getElementById("product").innerHTML ="Sản phẩm thứ " + (index + 1) + " là: " + lishProduct[index]
}
