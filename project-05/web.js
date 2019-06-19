function handleForm(){
    alert('hello')
    var name=document.getElementById("name").value
    console.log(name);
    /*
    var class=document.getElementById("class").value
    console.log(class);*/
    var password=document.getElementById("password").value
    console.log(password);
    var email=document.getElementById("email").value
    console.log(email);
    var date=document.getElementById("date").value
    console.log(date);
    var address=document.getElementById("address").value
    console.log(address);

    // getting data from dropdown 
    var activity = document.getElementById('skill');
   console.log(activity.options[activity.selectedIndex].value);
    /*
    var skill=document.getElementById("skill").value
    console.log(skill);*/
}