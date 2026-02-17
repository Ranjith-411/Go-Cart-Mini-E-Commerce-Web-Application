document.addEventListener("DOMContentLoaded",()=>{
    let productdetails=document.getElementById("productdetails");
    let allproducts=JSON.parse(localStorage.getItem("allproducts"))
    // console.log(productdetails);
    
    console.log(allproducts);
    let productid=localStorage.getItem("productid")
    console.log(productid);
   



    if(allproducts && productid){
        let selectedproduct=allproducts.find((v)=>{
            return v.id ==productid
            
        })
         if(selectedproduct){
            productdetails.innerHTML=`
            <main>
            <div id="main">
            <div>
                    <img src="${selectedproduct.thumbnail}"/>
            </div>

            <div id="content">
                    <h1 id="title">${ selectedproduct.title}</h1>
                    <P id="category"><b>Category : </b>${ selectedproduct.category}</P>
                    <p id="description"><b>Description</b> : ${ selectedproduct.description}</p>
                    <p id="p"><b>Price</b> ₹: ${Math.round(( selectedproduct.price)*90) }</p>
                       
                    <button  id="add">Add to Cart</button>  
                        <button id="back"> Back to Home</button> 
                    
            </div>
            </div>
            <div id="review>
            <h1>customer reviwe</h1>
            <hr>
            ${selectedproduct.reviews.map((review)=>`
               <div id="rating">${"❤️".repeat(review.rating)}${"🖤".repeat(5 - review.rating)}</div>

               <p id="comment">${ review.comment}</p>
                <p id="nam">By <b>${ review.reviewerName}</b> on ${new Date(review.date)}</p>

              <hr>
               `
            )}
            </div>
        </main> `

        document.getElementById("back").addEventListener("click",()=>{
            window.location.href="../ECOMMERS/HOME.HTML";
        })

        document.getElementById("add").addEventListener("click",()=>{
            addtocart(selectedproduct)
        })



         }else{
            productdetails.innerHTML=`<h1>prodct not found</h1>`

         }
        
    }else{
        productdetails.innerHTML=`<h1>product not found</h1>`
    }
    
})


function addtocart(product){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product)
    localStorage.setItem("cart",JSON.stringify(cart))
    alert("product added successfully")
}

