
let total = 0;

function addCart(price) {
    total = total + price;
    console.log(total);
    return total;
}

function calculateTaxes() {
    subtotal = addCart(2);

    let totalTax = subtotal * 1.11;

    document.getElementById
        ("receipt").innerHTML =
        `<p<Subtotal = ${subtotal}</p>
    <p> Total = ${totalTax}</p>`;

}



