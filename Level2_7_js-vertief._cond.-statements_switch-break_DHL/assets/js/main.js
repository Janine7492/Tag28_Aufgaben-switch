const brief = "<b>Brief und Postkarte</b> <br> L: 10 - 23, 5 cm <br /> B: 7 - 12, 5 cm <br /> H: bis 1 cm";

const zweiKg = "<b>DHL Paket 2 kg</b> <br> bis 60 x 30 x 15 cm";

const funfKg = "<b> DHL Paket 5 kg</b > <br> bis 120 x 60 x 60 cm";

const zehnKg = "<b> DHL Paket 10 kg</b> <br> bis 120 x 60 x 60 cm";

const extra = "<b>Extra große Größe</b>";



function showtxt() {

    const package = document.getElementById("mylist");
    const valuePackage = Number(package.value);

    console.log(valuePackage);

    let output = "";

    switch (valuePackage) {
        case 0:
            output = brief;
            break;
        case 1:
            output = zweiKg;
            break;
        case 2:
            output = funfKg;
            break;
        case 3:
            output = zehnKg;
            break;
        default:
            output = extra;
    }

    console.log(output);

    document.getElementById("masse").innerHTML = output;
}
