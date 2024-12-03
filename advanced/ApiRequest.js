

// Ajax and js engine v8

const apiUrl = "https://api.github.com/users/MAHESH04022004"

const xhr = new XMLHttpRequest();
xhr.open('GET',apiUrl)
xhr.onreadystatechange = () =>{
    if(xhr.readyState == 4){
        const data = JSON.parse(xhr.responseText)
        console.log(data);
        console.log(data.name);
        
        
    }
    
};
xhr.send();