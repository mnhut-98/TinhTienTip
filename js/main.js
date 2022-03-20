

let calculate = function () {

    let total = document.getElementById("total").value;
    let tip = document.getElementById('tip').value;
    let share = document.getElementById('share').value;
    let price = document.getElementById("price")

    let sum = 0;


    if (total === '' || tip == 0) {
        alert('nhap du thong tin!');
        return;

    }

    if (share == 0) {
        sum = (total * tip);
        document.querySelector(".info").style.display = 'block';
        price.innerHTML = sum;
    } else {
        sum =( (total * tip) / share).toFixed(2);
        console.log('sum',sum)
        price.innerHTML = sum;
        document.querySelector(".person").style.display = 'block';
        
        document.querySelector(".info").style.display = 'block';


    }





}

document.querySelector(".person").style.display = 'none';
document.querySelector(".info").style.display = 'none';


document.getElementById("caculator").onclick = calculate;