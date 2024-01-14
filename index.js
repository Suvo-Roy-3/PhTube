const loaddata1= () => {
    document.getElementById("product").innerHTML = " ";
    loaddata(1000);
    
};
const loaddata2= () => {
    document.getElementById("product").innerHTML = " ";
    loaddata(1001);
    
};
const loaddata3= () => {
    document.getElementById("product").innerHTML = " ";
    loaddata(1003);
    
};
const loaddata= (data) => {
    
    fetch(`https://openapi.programming-hero.com/api/videos/category/${data}`)
    .then((res)=>res.json())
    .then((data)=>display(data.data));
};



const loaddata4= () => {
    document.getElementById("product").innerHTML = " ";
    const getdata=new Promise(function(resolve,reject)
    {return reject("Oops!! Sorry,there is no content hare")});

    getdata.then(data =>console.log(data)).catch((eror)=>displaydata(eror));
};
const displaydata=(eror)=>{
    const card=document.getElementById("product");
    card.innerHTML=`
    <div class="divv"><img class="iimgp" src="PHero-Tube-main/PHero-Tube-main/Icon.png" alt="">
    <h1>${eror}</h1></div>
    `;

};
const hour=(min)=>{
    return parseInt(min/60);
};
const min=(sec)=>{
    if(sec!=''){
        var secc=parseInt(sec);
        var min= secc/60;
        if(min>=60){var h=hour(min);}else {h=0;}
    
        var initue=parseInt(min-60*h);
    
        return `${h} hour ${initue} mintue ago `
    }
    else {return ' '}
};

const fuc=(el)=>{
    if(el==true){
        return "PHero-Tube-main/Group.png"
    }
    else{return ""}
}
const sortt =()=>{
    document.getElementById("product").innerHTML = " ";
    fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
    .then((res)=>res.json())
    .then((data)=>display(data.data.sort((a,b)=>a.others[1]-b.others[1])));
   

}

const display =(data)=>{
   
console.log(data);
const card=document.getElementById("product");
data.forEach((element)=> {
    const entity=document.createElement("div");
    entity.classList.add("box");
    entity.classList.add("col-md-3");
    entity.innerHTML=`<div>
    <img class="iimg" src="${element?.thumbnail}"  alt="">
   
        <h5 class="txt text-end">${min(element.others.posted_date)}</h5>
        </div>
    
   <div class="row d-flex">
   <div class="col-md-3"><img class="iim" src="${element?.authors[0].profile_picture}" alt=""></div>
   <div class="col-md-9"> <h6 class="text-start">${element.title}</h6>
   <span><img  src="${fuc(element.authors[0].verified)}"></span>
   <p class="text-start">${element.authors[0].profile_name}</p>
   <p class="text-start">${element.others.views}</p></div>
   </div>

    `;
    card.append(entity);
});
};

