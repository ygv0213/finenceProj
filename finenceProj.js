function save(){
    let table = document.getElementById("table");    
    const price = document.getElementById("price1");
    const pro = document.getElementById("pro1");
    const name = document.getElementById("name1");
    const num = document.getElementById("num1");
    const time = new Date();

    let btn = document.createElement('button');

    btn.innerText = "Delete";
    btn.setAttribute("id", "btn1");

    let line = document.createElement("tr");
    
    let name1 = document.createElement("td");
    name1.innerText = name.value;
    let num1 = document.createElement("td");
    num1.innerText = num.value;
    let pro1 = document.createElement("td");
    pro1.innerText = pro.value;
    let price1 = document.createElement("td");
    price1.innerText = price.value;
    let date1 = document.createElement("td");
    date1.innerText = time.getFullYear() + "/" + time.getMonth() + "/" + time.getDay();
    let time1 = document.createElement("td");
    time1.innerText = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

    if(price.value!="" && pro.value != ""){

        line.appendChild(name1);
        line.appendChild(num1);
        line.appendChild(pro1);
        line.appendChild(price1);
        line.appendChild(date1);
        line.appendChild(time1);
        line.appendChild(btn);
    
        table.appendChild(line);
    
    }
    btn.addEventListener("click", e => {
        table.removeChild(line);
    })

    pro.setAttribute("onfocus", "this.value=''");
    price.setAttribute("onfocus", "this.value=''");
    name.setAttribute("onfocus", "this.value=''");
    num.setAttribute("onfocus", "this.value=''");
}