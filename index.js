var button = document.getElementById("button");
var dark_theme = false;

function change_background(){
    if(dark_theme == false){
            dark_theme = true;
        document.body.style.background = "#ffffff"
        button.style.background = "#000000"
        button.style.color =  "#ffffff"

    }else{
            dark_theme = false;
            document.body.style.background = "#000000"
            button.style.background = "#ffffff"
            button.style.color = "#000000"
    }
}