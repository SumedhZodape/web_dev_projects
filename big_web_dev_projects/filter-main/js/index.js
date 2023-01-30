let products = [
    {
        id:1,
        name:"Maggie Noodles",
        price:10,
        category:"food",
        quantity:150,
        pic:"https://static.wixstatic.com/media/2f3275_5bd57b791c9e4bafb77a1272ee3492ff~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
    },

    {
        id:2,
        name:"Cocacola",
        price:40,
        category:"drink",
        quantity:200,
        pic:"https://icon2.cleanpng.com/20171220/ree/coca-cola-bottle-png-image-5a3ac111117330.71397511151379995307157705.jpg"
    },

    {
        id:3,
        name:"Amul Cheese",
        price:90,
        category:"dairy",
        quantity:30,
        pic:"https://www.jiomart.com/images/product/600x600/490010199/amul-cheese-block-1-kg-carton-product-images-o490010199-p490010199-4-202203170249.jpg"
    },

    {
        id:4,
        name:"Gatorate Energy Drink",
        price:70,
        category:"drink",
        quantity:50,
        pic:"https://p.kindpng.com/picc/s/546-5460600_gatorade-bottle-png-dark-purple-blue-gatorade-transparent.png"
    },

    {
        id: 5,
        name: "Go Cheese",
        price: 120,
        category: "Dairy",
        quantity: 22,
        pic: "https://www.gocheese.in/wp-content/themes/gocheese/images/go_cheese_slice.png"
    }

]   



//display data function

//pass a argumnet
//beaouse we want to diplay other array data
function displayData(arr){

    //whenever call th diplay data to clear old data
    //make it blank
    document.getElementById("data").innerHTML="";
    
    arr.forEach((product,index)=>{

        let row= document.createElement("tr"); //create element tr

        let numberTD = document.createElement("td");//create element td
        numberTD.append(index+1);

        let nameTD = document.createElement("td");
        nameTD.append(product.name);

        let priceTD= document.createElement("td");
        priceTD.append(product.price);

        let categoryTD= document.createElement("td");
        categoryTD.append(product.category);

        let quantityTD=document.createElement("td");
        quantityTD.append(product.quantity);

        let picTD=document.createElement("td"); //create element td
        let proPic=document.createElement("img"); //create element img
        proPic.setAttribute("src",product.pic); //set the attribute of img
        picTD.appendChild(proPic); //join td and img

        row.appendChild(numberTD);
        row.appendChild(nameTD);
        row.appendChild(priceTD);
        row.appendChild(categoryTD);
        row.appendChild(quantityTD)
        row.appendChild(picTD);


        document.getElementById("data").appendChild(row);

    })

}

//display the data
//pass original array parameter for display data    
displayData(products)







// filter box open function

let filterStatus = false;

function openFilterSection(){
    if(filterStatus==false){
        document.getElementById("filter_box").style.marginLeft="0px";
        filterStatus=true;
    }
    else{
        document.getElementById("filter_box").style.marginLeft="-30%"
        filterStatus=false;
    }
}




//close filter section function
function closeFilterSection(){
    document.getElementById("filter_box").style.marginLeft="-30%";
}








// setfilter read value
// function setFilters(){
    
//     let quantity = document.getElementById("quantity").value;
//     console.log(quantity);

// }






// all input value object
let filters={
    category:null,
    quantity:null,
    minPrice:null,
    maxPrice:null
}


//  filteration functionality 
// set the all filters
function setFilters(propety, value){
    

    if(value!==""){

        filters[propety]=value; //user select the propery and get the value

        //condition for change the max value 
        if(propety=="minPrice"){
            document.getElementById("maxPrice").value=Number(value)+1; //we can also set the atribute'

            //change max price min and diplay
            document.getElementById("lowMaxPriceLabel").innerText=Number(value)+1;
        }

    }
    else{
        filters[propety]=null;
    }

    // console.log(filters);

}














//Filter all the data function

function filter(){

    let filterData=[] = products; //copy of product and not manipulating the array thats why it dosnt harm orignial array

    // filter for category
    if(filters.category !==null){
        filterData = filterData.filter((product, index)=>{
            return product.category.toLocaleLowerCase() === filters.category.toLocaleLowerCase();
        })
    }


    // filter for quantity
    if(filters.quantity!==null){
        filterData=filterData.filter((product,index)=>{
            return product.quantity>=Number(filters.quantity);
        })
    }


    //filter for minPrice
    if(filters.minPrice !==null){
        filterData=filterData.filter((product,index)=>{
            return product.price>=filters.minPrice;
        })
    }


    //filter for maxPrice
    if(filters.maxPrice!==null){
        filterData=filterData.filter((product,index)=>{
            return product.price<filters.maxPrice;
        })
    }


    // console.log(filterData);



    //pass the parameter and diplay parameter data
    displayData(filterData);

}




