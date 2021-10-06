alert("hello ,welcome to my world!!")

const btns=document.querySelectorAll(".Question-button");

btns.forEach(function (btn){
    btn.addEventListener("click",function(x)
    {
        // console.log(x.currentTarget.parentElement.parentElement.parentElement);
        const question =x.currentTarget.parentElement.parentElement.parentElement
        question.classList.toggle("show-text")
    });
});