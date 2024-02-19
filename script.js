const passwordbox=document.getElementById("Password");
const length =12;
const uppercase="QWERTYUIOPASDFGHJKLZXCVBNM";
const lowercase="qwertyuioplkjhgfdsazxcvbnm";
const number="0987654321";
const symbol="@#$&*()_-+=|\%[]{}~"
const allchars=uppercase+lowercase+number+symbol;

function createpassword(){
    let password="";
    password+=uppercase[Math.floor(Math.random() * uppercase.length)];
    password+=lowercase[Math.floor(Math.random() * lowercase.length)];
    password+=number [Math.floor(Math.random() * number.length)];
    password+=symbol [Math.floor(Math.random() * symbol.length)];
    

    while(length>password.length){
        password+=allchars[Math.floor(Math.random()*allchars.length)];
    }

 passwordbox.value=password;
}

function copypassword(){
    passwordbox.select();
    document.execCommand("copy");
}