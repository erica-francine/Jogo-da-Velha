
    window.onload = ()=>{


        let squares = document.querySelectorAll('.square');
        let button = document.getElementById("botao");
        
        events(squares);

       
        button.addEventListener("click", ()=>{
            reiniciar(squares);
        });
        
        

    };