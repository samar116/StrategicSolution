var divTeam = document.getElementById("team");
    function start(){
    
    const btn1 = document.getElementById("btnEmp1");
    btn1.addEventListener("click",setEmp1,false);
    
    const btn2 = document.getElementById("btnEmp2");
    btn2.addEventListener("click",setEmp2,false);
    
    const btn3 = document.getElementById("btnEmp3");
    btn3.addEventListener("click",setEmp3,false);
    
    const btn4 = document.getElementById("btnEmp4");
    btn4.addEventListener("click",setEmp4,false);
    
   const btn5 = document.getElementById("btnEmp5");
    btn5.addEventListener("click",setEmp5,false);
    
    setEmp1();
    }
    
    function setEmp1(){
        divTeam.classList.add("emp1");
        divTeam.classList.remove("emp2");
        divTeam.classList.remove("emp3"); 
        divTeam.classList.remove("emp4");
        divTeam.classList.remove("emp5"); 
    }
    
    
    function setEmp2(){
        divTeam.classList.remove("emp1");
        divTeam.classList.add("emp2");
        divTeam.classList.remove("emp3");
        divTeam.classList.remove("emp4");
        divTeam.classList.remove("emp5"); 
    }
    
    function setEmp3(){
        divTeam.classList.remove("emp1");
        divTeam.classList.remove("emp2");
        divTeam.classList.add("emp3");
        divTeam.classList.remove("emp4");
        divTeam.classList.remove("emp5"); 
    }
    
    function setEmp4(){
        divTeam.classList.remove("emp1");
        divTeam.classList.remove("emp2");
        divTeam.classList.remove("emp3");
        divTeam.classList.add("emp4");
        divTeam.classList.remove("emp5"); 
    }
    
    function setEmp5(){
        divTeam.classList.remove("emp1");
        divTeam.classList.remove("emp2");
        divTeam.classList.remove("emp3");
        divTeam.classList.remove("emp4");
        divTeam.classList.add("emp5"); 
    }
    
    function showText(num,btn){
        const span = document.getElementById("text"+num);
        const btnRead = document.getElementById("btn"+num);
        if(btnRead.innerHTML.includes("more") ){
            span.classList.add("show");
            btnRead.innerHTML = "read less <i class='fa-solid fa-chevron-up'></i>";
    
        }else if (btnRead.innerHTML.includes("less")){
            btnRead.innerHTML = "read more <i class='fa-solid fa-chevron-down'></i>";
            span.classList.remove("show");
        }
    }
    
    
    
    window.addEventListener("load",start,false);