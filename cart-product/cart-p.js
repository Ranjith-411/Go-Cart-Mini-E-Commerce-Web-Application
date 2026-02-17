document.addEventListener("DOMContentLoaded",()=>{
    displaycart()
})

function displaycart(){
    let cart=JSON.parse(localStorage.getItem("cart"))
    
    let cartcontent=document.getElementById("cartcontent")
    let total_price=document.getElementById("total_price")
    console.log(cart);
    console.log(cartcontent);
    console.log(total_price);
     cartcontent.innerHTML = "";
    if(cart.length==0){
        cartcontent.innerHTML="your cart is empty.start shopping....."
         return;
    }
    
    cart.map((product,i)=>{
        // totalbill+=Math.floor((product.Price)*90)
       if (!product) return;
        let newprod=document.createElement("div");
        newprod.setAttribute("class","prod_info");
        newprod.innerHTML=`
        <main>
        <div id="img">
               <img src="${product.thumbnail}"/>
                <div id="item" >
                    <h1 id="title">${product.title}</h1>
                    
                    <p id="description"><b>price ₹</b>  : ${Math.round((product.price)*90) }</p>
                    <p id="description"><b>Brand</b> : ${product.brand} </p>
                    <P id="description"><b>Category : </b>${product.category}</P>
                    <p id="description"><b>WarrantyInformation</b> : ${ product.warrantyInformation}</p>
            
                    <p id="description"><b>ShippingInformation</b> : ${ product.shippingInformation}</p>

                     <p   id="description"><b>DiscountPercentage</b> : ${ product.discountPercentage}</p>
           
                
                </div> 
                <button onclick="removefromcart(${i})" id="remove">remove</button>
        </div>
        </main>`
        cartcontent.append(newprod) 
//         totalPrice.innerHTML=`<h2>Total Price:<i class="fa-solid
//    fa-indian-rupee-sign"></i>${totalBill.toFixed(2,)}</h2>`

    })  
 
}
function removefromcart(index){
    let cart=JSON.parse(localStorage.getItem("cart"))
    cart.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(cart))
    displaycart()
}