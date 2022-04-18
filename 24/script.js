class Sirket {
    constructor(sirketAdi, filialAdi) {
        this.sirekt = sirketAdi,
            this.filial = filialAdi
    }


    isciler = [
        [],
        [],
        [],
        []
    ]



    gonder() {
        let data = this.isciler;
        let ad = document.querySelector("#ad").value;
        let vezife = document.querySelector("#vezife").value;
        let maas = document.querySelector('#maas').value;
        let il = document.querySelector('#il').value;

        data[0].push(ad);
        data[1].push(vezife);
        data[2].push(maas);
        data[3].push(il);

    }




    tableQur() {
        let data = this.isciler;
        let tbl = `
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Ad</th>
          <th scope="col">Vezife</th>
          <th scope="col">Maas</th>
          <th scope="col">Il</th>

        </tr>
        
        
      </thead>`
        for (let i = 0; i < data[0].length; i++) {
            tbl += `
            <tr>
              <th scope="row">${i+1}</th>
              <td> ${data[0][i]} </td>
              <td> ${data[1][i]}</td>
              <td>${data[2][i]}</td>
              <td>${data[3][i]}</td>
              <td> <button onclick="sil()">Sil</button> </td>
            </tr>
            `
        };
        return tbl;
    }

    // add() {


    //     let yeniBtn = document.createElement('button');
    //     yeniBtn.className = 'btn btn-danger btn-sm';
    //     yeniBtn.textContent = 'Sil';
    //     yeniBtn.setAttribute('onclick', 'DomSil(this)')
    //     thead.appendChild(yeniBtn);
    // }
}

function Sil(silinenElement) {
    silinenElement.parentElement.remove();
    let text = silinenElement.parentElement.textContent;
    let yeniText = text.substr(0, text.length - 3);
    LocalSil(yeniText)
}



let filalArr = [];

let a = new Sirket('Yup Technology', 'Nizami');
let b = new Sirket('Yup Technology', 'Elmler');
let c = new Sirket('Yup Technology', 'Yasamal');

filalArr.push(a.filial, b.filial, c.filial);


document.getElementsByTagName('h1')[0].innerHTML = a.sirekt;


let opt = "<option selected disabled>Filial Secin menu</option>"
for (let i = 0; i < filalArr.length; i++) {
    opt += ` <option value="${i}"> ${filalArr[i]} </option>`
};
document.getElementById('slc').innerHTML = opt;


let btn = document.querySelector('#btn');

btn.disabled = true;

function Secim() {

    let slc = document.getElementById('slc').value;
    btn.disabled = false;
    if (slc == 0) {
        document.getElementsByTagName('p')[0].innerHTML = a.filial;
        document.querySelector('#exampleModalLabel').innerHTML = a.filial;
    } else if (slc == 1) {
        document.getElementsByTagName('p')[0].innerHTML = b.filial;
        document.querySelector('#exampleModalLabel').innerHTML = b.filial;

    } else if (slc == 2) {
        document.getElementsByTagName('p')[0].innerHTML = c.filial;
        document.querySelector('#exampleModalLabel').innerHTML = c.filial;

    }
}




function send() {
    let inp = document.querySelectorAll('input');
    let slc = document.getElementById('slc').value;
    if (inp[0].value == "" || inp[1].value == "" || inp[2].value == "") {
        alert("Bos olmaz!")
    } else {
        if (slc == 0) {
            a.gonder();
            document.querySelector("table").innerHTML = a.tableQur();
        } else if (slc == 1) {
            b.gonder();
            document.querySelector("table").innerHTML = b.tableQur();
        } else if (slc == 2) {
            c.gonder();
            document.querySelector("table").innerHTML = c.tableQur();
        }
    }
    for (let i = 0; i < inp.length; i++) {
        inp[i].value = "";
    }
}