// addMore function=> add more services by enabling display
function addMore(e){
    
    const spanMore=document.getElementById('moreServices');
    const addButton=document.getElementById('addButton');
    
    if(spanMore.style.display==="none")
    {
       
        spanMore.style.display="block";
        addButton.innerHTML="View Less Services";

    }else
    {
       
        spanMore.style.display="none";
        addButton.innerHTML="View All Services";
    }
}