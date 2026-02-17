let product=[];


function fetchData(){
    fetch("https://dummyjson.com/products").then((res)=>{
        return res.json();
    }).then((v)=>{
        // console.log(v.products);
        product=v.products
        localStorage.setItem("allproducts",JSON.stringify(product))
        console.log(product);
        displayproduct(product)
})
}
fetchData()
function displayproduct(pord){
        let output=""
        pord.map((v)=>{
        output +=`
        <main>
            <div id="img"><img src="${v.thumbnail}"/>
            </div>

            <h2 id="title">${v.title}</h2>

            
            <div id="rp">
            <h4 id="r">category: ${v.category} </h4>
            <h3 id="p">price rs : ${Math.round((v.price)*90) }</h3>
            </div>
            
            
            <div id="button">
            <button ><a href="">Order</a></a></button>  
            <button onclick="details('${v.id}')"> <a>Viwe Details</a> </button> 
            </div> 
        </main>
        `;
    })

document.getElementById("root").innerHTML=output;
}


document.getElementById("searchbar").addEventListener("input",function searchterm(event){
    let searchterm=event.target.value.toLowerCase();
    let fillterproduct=product.filter((v)=>{
        
        return (
            v.title.toLowerCase().includes(searchterm) ||  v.category.toLowerCase().includes(searchterm)
    );
    });
    displayproduct(fillterproduct);
});


function details(productid){
    console.log(productid);
    localStorage.setItem("productid",productid);
    window.location.href="../viwedetails-product/viwedetails.html"
    
}