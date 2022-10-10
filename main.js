// Sameh Elmeligy 406
const searchBtn = document.querySelector(".icon")
const searchBtnPerent = document.querySelector(".lineSearch")
const boxes = document.querySelector(".boxes")
const numShowProduct = 10
let product = [
    {
        name: "camera",
        price: 3000,
        img: "1.jpg"
    },
    {
        name: "lap top",
        price: 5000,
        img: "2.jpg"
    },
    {
        name: "iphone 6",
        price: 11000,
        img: "3.jpg"
    },
    {
        name: "watch",
        price: 6000,
        img: "4.jpg"
    },
    {
        name: "oppo",
        price: 5000,
        img: "5.jpg"
    },
    {
        name: "lighter",
        price: 5000,
        img: "6.jpg"
    },
    {
        name: "lap top",
        price: 4000,
        img: "7.jpg"
    },
    {
        name: "memory",
        price: 90,
        img: "8.jpg"
    },
    {
        name: "classic watch",
        price: 500,
        img: "9.jpg"
    },
    {
        name: "phone Stand",
        price: 500,
        img: "10.jpg"
    },
    {
        name: "mic",
        price: 1000,
        img: "11.jpg"
    },
    {
        name: "classic watch",
        price: 500,
        img: "12.jpg"
    },
    {
        name: "air tag",
        price: 5000,
        img: "13.jpg"
    },
    {
        name: "samasung",
        price: 7000,
        img: "14.jpg"
    },
    {
        name: "ear phone",
        price: 5000,
        img: "15.jpg"
    },
    {
        name: "camera",
        price: 3000,
        img: "1.jpg"
    },
    {
        name: "lap top",
        price: 5000,
        img: "2.jpg"
    },
    {
        name: "iphone 6",
        price: 11000,
        img: "3.jpg"
    },
    {
        name: "watch",
        price: 6000,
        img: "4.jpg"
    },
    {
        name: "oppo",
        price: 5000,
        img: "5.jpg"
    },
    {
        name: "lighter",
        price: 5000,
        img: "6.jpg"
    },
    {
        name: "lap top",
        price: 4000,
        img: "7.jpg"
    },
    {
        name: "memory",
        price: 90,
        img: "8.jpg"
    },
    {
        name: "classic watch",
        price: 500,
        img: "9.jpg"
    },
    {
        name: "phone Stand",
        price: 500,
        img: "10.jpg"
    },
    {
        name: "mic",
        price: 1000,
        img: "11.jpg"
    },
    {
        name: "classic watch",
        price: 500,
        img: "12.jpg"
    },
    {
        name: "air tag",
        price: 5000,
        img: "13.jpg"
    },
    {
        name: "samasung",
        price: 7000,
        img: "14.jpg"
    },
    {
        name: "ear phone",
        price: 5000,
        img: "15.jpg"
    }
]
for (let i = 0; i < product.length; i++) {
    boxes.innerHTML += `
    <div class="card" style="display: none;">
            <img src="img/${i + 1}.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product[i].name}</h5>
                <p class="card-text">price : ${product[i].price}</p>
                <a href="#" class="btn btn-primary">Shop Now</a>
            </div>
    </div>
    `
}
let cardClass = document.querySelectorAll(".card")
for (let i = 0; i < numShowProduct; i++) {
    cardClass[i].style.display = "block"
}
const input = document.getElementById("input")
const search = document.querySelector(".search")
search.onclick = () => {
    boxes.innerHTML = ""
    btnInfo.forEach((btn)=>{
        btn.style.display = "none"
    })
    let valueNow = input.value.trim().toLowerCase()
    let filter = product.filter((ele) => {
        if (ele.price == valueNow) {
            boxes.innerHTML += ""
            return ele.price == valueNow
        }
        if (ele.name == valueNow) {
            boxes.innerHTML += ""
            return ele.name == valueNow
        }
    })
    filter.forEach((ele) => {
        boxes.innerHTML += `
            <div class="card" >
                <img src="img/${ele.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${ele.name}</h5>
                    <p class="card-text">price : ${ele.price}</p>
                    <a href="#" class="btn btn-primary">Shop Now</a>
                </div>
            </div>
    `
    })
    if (filter.length == 0) {
        boxes.innerHTML += `<h2 class="noFound">NO PRODUCT FOUND<h2>`
    }
}
searchBtn.onclick = () => {
    searchBtnPerent.classList.toggle("open")
    searchBtn.classList.toggle("openNow")
    let openNow = document.querySelector(".openNow")
    openNow.onclick = () => {
        boxes.innerHTML = ""
        for (let i = 0; i < product.length; i++) {
            boxes.innerHTML += `
            <div class="card" style="display: none;">
                    <img src="img/${i + 1}.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${product[i].name}</h5>
                        <p class="card-text">price : ${product[i].price}</p>
                        <a href="#" class="btn btn-primary">Shop Now</a>
                    </div>
            </div>
            `
        }
        let cardClass = document.querySelectorAll(".card")
        for (let i = 0; i < numShowProduct; i++) {
            cardClass[i].style.display = "block"
        }
        openNow.classList.remove("openNow")
        searchBtnPerent.classList.toggle("open")
        btnInfo.forEach((btn)=>{
            btn.style.display = "block"
        })
    }
}
let numOfBtn = product.length / numShowProduct
let btnOfPage = document.querySelector(".btnS")
for (let i = 0; i < numOfBtn; i++) {
    btnOfPage.innerHTML += `<button class="btn btn-info">${i + 1}</button>`
}
let btnInfo = document.querySelectorAll(".btn-info")
let loadPage = document.querySelectorAll(".card")
btnInfo.forEach((btn, i) => {
    let showPro = (i) * numShowProduct
    btn.onclick = () => {
        let cardClass = document.querySelectorAll(".card")
        cardClass.forEach((ele) => {
            ele.style.display = "none"
        })
        for (let e = showPro; e < showPro + numShowProduct; e++) {
            cardClass[e].style.display = "block"
        }
    }
})