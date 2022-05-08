let  count = 0;
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
// value.style.fontSize="50px";
btns.forEach(element => {
    console.log(element);
   let generate = (e)=>{
       const styles = e.currentTarget.classList;
       console.log(styles);
       if(styles.contains("Dec")){
           count--;
           value.style.color="red";
       }else if(styles.contains("Inc")){
           count++;
           value.style.color="yellowgreen";
       }else{
           count=0;
           value.style.color="black";
       }
       value.innerHTML=`${count}`
    //    value.style.fontSize="50px";

   }

    element.addEventListener('click',generate)
});
