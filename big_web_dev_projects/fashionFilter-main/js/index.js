products = [

    {
        id: 1,
        pName: "Solid Men Polo Neck Red T-Shirt",
        price: 761,
        category: "T-Shirt",
        pic: "https://rukminim1.flixcart.com/image/660/792/kupuljk0/t-shirt/g/6/n/m-ustsh0517-u-s-polo-assn-original-imag7rx59yqucnar.jpeg?q=50"
    },
    {
        id: 2,
        pName: "Men Slim Fit Solid Formal Shirt",
        price: 409,
        category: "Formal Shirts",
        pic: "https://rukminim1.flixcart.com/image/660/792/kh80vww0-0/shirt/o/y/c/m-fo-shrt-499-wht-5th-anfold-original-imaeue3b4zycypnw.jpeg?q=50"
    },
    {
        id: 3,
        pName: "Regular Men Grey Jeans",
        price: 299,
        category: "Jeans",
        pic: "https://rukminim1.flixcart.com/image/660/792/kk2wl8w0/jean/0/f/h/36-r1101-rasso-original-imafzgbhbgufmfmu.jpeg?q=50"
    },
    {
        id: 4,
        pName: "Solid Men Black Sports Shorts",
        price: 199,
        category: "Shorts",
        pic: "https://rukminim1.flixcart.com/image/660/792/kzzw5u80/short/v/w/v/s-tbl-shortt-tripr-original-imagbvyaftsgyudb.jpeg?q=50"
    },
    {
        id: 5,
        pName: "Printed Men Black Regular Shorts",
        price: 229,
        category: "Shorts",
        pic: "https://rukminim1.flixcart.com/image/660/792/l01blow0/short/h/s/0/xl-tblshortabs1-tripr-original-imagbwnwhkdh8and.jpeg?q=50"
    },
    {
        id: 6,
        pName: "Striped Men Round Neck Maroon",
        price: 159,
        category: "T-Shirt",
        pic: "https://rukminim1.flixcart.com/image/660/792/keykscw0-0/t-shirt/l/d/q/3xl-bmrgyrnful-z12-blive-original-imafvgzkyjghf7ba.jpeg?q=50"
    },
    {
        id: 7,
        pName: "Solid Men Collared Neck Green T-Shirt",
        price: 861,
        category: "T-Shirt",
        pic: "https://rukminim1.flixcart.com/image/660/792/kuipea80/t-shirt/e/d/x/s-ustsh0548-u-s-polo-assn-original-imag7mnrydqxwez2.jpeg?q=50"
    },
    {
        id: 8,
        pName: "Skinny Men Blue Jeans",
        price: 759,
        category: "Jeans",
        pic: "https://rukminim1.flixcart.com/image/660/792/ke0a7ww0-0/jean/b/w/8/28-11274476-roadster-original-imafusgzfqds3hmz.jpeg?q=50"
    },
    {
        id: 9,
        pName: "Solid Men Dark Grey Sports Shorts",
        price: 289,
        category: "Shorts",
        pic: "https://rukminim1.flixcart.com/image/660/792/kkwwu4w0/short/n/w/5/m-ic-4046-indiclub-original-imagy5tnm3us9wbv.jpeg?q=50"
    },
    {
        id: 10,
        pName: "Men Slim Fit Solid Spread Collar",
        price: 399,
        category: "Formal Shirts",
        pic: "https://rukminim1.flixcart.com/image/660/792/krntoy80/shirt/i/t/n/m-maroon-5-jai-textiles-original-imag5efnjxs6bmhp.jpeg?q=50"
    },
    {
        id: 11,
        pName: "Skinny Men Blue Jeans",
        price: 759,
        category: "Jeans",
        pic: "https://rukminim1.flixcart.com/image/660/792/jvtujrk0/jean/w/u/m/32-8813589-roadster-original-imafgmsbtbbvgw3s.jpeg?q=50"
    },
    {
        id: 12,
        pName: "Men Slim Fit Solid Formal Shirt",
        price: 501,
        category: "Formal Shirts",
        pic: "https://rukminim1.flixcart.com/image/660/792/kh80vww0-0/shirt/z/q/e/xxl-fo-shrt-499-drkgry-5th-anfold-original-imafxamjqyygfhmw.jpeg?q=50"
    }

]






function displayData(arr) {

    document.getElementById("data").innerHTML="";

    arr.forEach((product, index) => {

        let row = document.createElement("div");
        row.classList.add("data-content");


        let newCls = document.createElement("div");
        newCls.classList.add("fashion-img");

        let proPic = document.createElement('img');
        proPic.setAttribute("src", product.pic);


        let rowCls = document.createElement("div");
        rowCls.classList.add("info");

        let para = document.createElement("p");
        para.append(product.pName)

        let head = document.createElement("h4");
        head.append(product.price, " ₹");

        let catTd = document.createElement("p");
        catTd.className = "hidePara";
        catTd.append(product.category);

        row.appendChild(newCls);
        newCls.appendChild(proPic)
        row.appendChild(rowCls);
        rowCls.appendChild(para);
        rowCls.appendChild(head);
        rowCls.appendChild(catTd);


        document.getElementById("data").appendChild(row);

    })
}

displayData(products);







let filterStatus = false;

function openFilterSection() {

    if (filterStatus == false) {
        document.getElementById("filter-box").style.marginLeft = "0px";
        filterStatus = true;
    }
    else {
        document.getElementById("filter-box").style.marginLeft = "-30%"
        filterStatus = false;
    }

}






// close filter tables

function closeFilter(){
    document.getElementById("filter-box").style.marginLeft="-30%"
}




let filters = {
    category: null,
    minPrice: null,
    maxPrice: null,
}


// read value

function setFilters(property, value) {

    // let price =  document.getElementById("minPrice").value;
    // console.log(price);

    if (value !== "") {
        filters[property] = value;

        if (property === "minPrice") {
            document.getElementById("maxPrice").value = Number(value) + 1;
            document.getElementById("lowMaxPriceLabel").innerText = Number(value) + 1;
        }

    }
    else {
        filters[property] = null;
    }


    // console.log(filters)
}


 

//aply filters
function filter(){

    let filterData = products; //set the copy of main array

    if(filters.category !==null){
        filterData = filterData.filter((product, index)=>{
            return product.category.toUpperCase() === filters.category.toUpperCase();
        })
    }

    if(filters.minPrice !== null){
        filterData = filterData.filter((product, index)=>{
            return product.price >= Number(filters.minPrice);
        })
    }

    if(filters.maxPrice !== null){
        filterData = filterData.filter((product, index)=>{
            return product.price <= Number(filters.maxPrice);
        })
    }

    // console.log(filterData)

    displayData(filterData);
}