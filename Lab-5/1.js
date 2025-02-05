function getUser(){
    let xhtp=new XMLHttpRequest();
    xhtp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            console.log(JSON.parse(this.responseText))
    }
}
xhtp.open("GET","https://jsonplaceholder.typicode.com/users",true);
xhtp.send();
}
getUser();