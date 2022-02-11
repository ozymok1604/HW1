namee = prompt("Введіть ім'я:");
function formatName(namee){
    index = namee.indexOf(' '); 


    let string = namee[0].toUpperCase() + namee.slice(1,index) +' ' + namee[index+1].toUpperCase() + namee.slice(index+2);
    console.log(string);


}
formatName("namee");