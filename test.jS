var totalItem = 0;
let cart = document.querySelector(".cart")



let count = document.createElement("div")
count.innerHTML = totalItem
cart.append(count)


let main = document.querySelector(".main")






for(let i =0 ;i <5; i++){
    let item = document.createElement("div")
    item.className ="item"


    let button = document.createElement("button")
    button.innerHTML = "add to cart"
    button.className ="add"

        button.addEventListener("click", () => {
            totalItem++;
            count.innerHTML = totalItem
        })
    
    
    let img  = document.createElement("img")

    img.src = "./images/Untitled.jpg"

    item.append(img)
    item.append(button)
    main.append(item)
}

