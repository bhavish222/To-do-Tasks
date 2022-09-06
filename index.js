var h=1,j=1;

function add_task() 
{
    var head_part = document.getElementById("input").value;
    var item_part = Number(prompt("Enter Number of Tasks i.e.1,2,3,...."));
    var new_arr =  new Array();                       
        
    // initiate an array
    for (var i = 0; i < item_part; i++) 
    {
        new_arr[i] = prompt("ENTER " + (i+1) + " ELEMENT");
    }
    var boxd = document.getElementById("box-div");
    var box1 = document.createElement("div");
    
    box1.id=`box_id${h}`;
    h++;

    box1.className = "box auto";
    box1.innerHTML += `<h3 class="head_hr" id="head_hr1" onclick="add2(${box1.id})"> ${head_part} </h3> <hr/> `;

    // For making header line in box after Task heading
    for (var i = 0; i < item_part; i++) 
    {
        if(new_arr[i]!="")
        {
            box1.innerHTML += `<h4>             
                                <input type="checkbox" id="id${j}" onclick="checkl()">
                                <label for="id${j}" id="label${j}">${new_arr[i]}</label>
                                </h4>`;
            j++;
        }
    }
    
    if((head_part!=="" && item_part!=null))
        boxd.appendChild(box1); 
        
    document.querySelector("#newtask input").value = "";
}

/* To Add New Element Again in tasks list*/
function add2(bid)
{
    var box1=bid;
    var item_part = Number(prompt("Enter Number of Tasks.."));
    var new_arr =  new Array();  // initiate a new array again
    
    for (var i = 0; i < item_part; i++)
    {
        new_arr[i] = prompt("ENTER " + (i+1) + " ELEMENT");
    }

    for (var i = 0; i < item_part; i++)
    {
        if(new_arr[i]!="")
        {
            box1.innerHTML += `<h4>             
                                <input type="checkbox" id="id${j}" onclick="checkl()">
                                <label for="id${j}" id="label${j}">${new_arr[i]}</label>
                                </h4>`;
            j++;
        }
    }
}

/*Checkbox js */

function checkl() {
    for (var i = 1; i <= j; i++) {
        var checkb = document.getElementById("id" + i);
        if (checkb.checked == true) {
            document.getElementById("label" + i).style.textDecorationLine = "line-through";
            document.getElementById("label" + i).style.color = "#C2C2C2";
        } else {
            document.getElementById("label" + i).style.textDecorationLine = "none";
            document.getElementById("label" + i).style.color = "#424242";
        }
    };
}