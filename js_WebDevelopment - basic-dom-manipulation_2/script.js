const body=document.body

class List {
    index=0;
    data="";
    constructor(index, data) {
      this.index = index;
      this.data = data;
    }
  }

const list1=[]

//from js we can create element
//from js we can remove or hide existing or created element
//from js we can change add and delete attribute of a element
//from js we can connect existing function with new created element
/*
document.getElementById("btn").addEventListener("click", myFunction); 
function myFunction() {
  do things
}
*/

//innerHTML lets us write raw html inside a created element
//we can then appened that element containing raw html as child of any part of the main html document
//we can write raw css code exactly like style sheets and add them to the head under the style element which stylesheet will then be available from 
//always add a element as append child to save the destruction of other child
//---child count: 1. let numb = document.getElementById("myDIV").childElementCount;
//--------------  2. let numb = document.getElementById("myDIV").children.length;
//inserting in specific position: parentElement.insertBefore(newElement, parentElement.children[2]);
/*
Accessing the child:
var elements=document.getElementById('myDiv').children;
    for(var i=0; i<elements.length; i++) {
        console.log(elements.item(i));
        console.log(elements[i]);
    }
*/
//JQuery can solve this requirement


const div1=document.createElement('div')
body.append(div1)
const div2=document.createElement('div')
body.append(div2)

//input 1 initialization
const label1=document.createElement('p')
label1.innerText="Text: "
div1.append(label1)
const input1=document.createElement('input')
input1.setAttribute("id","input_1")
input1.setAttribute("type","text")
div1.append(input1)

//input 2 initialization with innerHTML
const input2_full=document.createElement('div')
input2_full.innerHTML="<p>Id: </p><input>"
input2_full.children[1].setAttribute("id","input_2")
input2_full.children[1].setAttribute("type","number")
input2_full.children[1].setAttribute("min","1")
input2_full.children[1].setAttribute("max","1")
input2_full.children[1].setAttribute("step","1")
div1.append(input2_full)

//buttons initialization
const button1=document.createElement('button')
button1.innerText="Create"
button1.setAttribute("id","button1")
button1.addEventListener("click", Create)
div1.append(button1)

const button2=document.createElement('button')
button2.innerText="Delete"
button2.setAttribute("id","button2")
button2.addEventListener("click",Delete)
div1.append(button2)


function Create() {
    

    if(document.getElementById('input_2').value==null||document.getElementById('input_2').value=="")
    {
       // list_element.innerText="1. "+input1.value
       // div2.insertBefore(list_element, div2.children[0]) 
        list1.unshift({
            index: 1,
            data: input1.value
        });

        for(let i=1;i<list1.length;i++)
        {
            list1[i].index=list1[i].index+1;
        } 
     
        if(div2.children.length==0)
        {
            const list_element=document.createElement('p')
            list_element.innerText=list1[0].index+". "+list1[0].data
            div2.append(list_element)
        }
        else{

            let temp_size=div2.children.length
            
            for(let i=0;i<temp_size;i++)
            {
                div2.removeChild(div2.children[0])//only removing first element multiple times
            }

            for(let i=0;i<list1.length;i++){    
                const list_element=document.createElement('p')
                list_element.innerText=list1[i].index+". "+list1[i].data
                div2.append(list_element)
            }
        }    
    }
    else{
        //list_element.innerText=document.getElementById('input_2').value+". "+input1.value
        //div2.insertBefore(list_element, div2.children[document.getElementById('input_2').value-1]);

        /*
        list1.unshift({
            index: parseInt(document.getElementById('input_2').value),
            data: input1.value
        });*/
        list1.splice(parseInt(document.getElementById('input_2').value)-1, 0, {
            index: parseInt(document.getElementById('input_2').value),
            data: input1.value
        });

        for(let i=parseInt(document.getElementById('input_2').value);i<list1.length;i++)
        {
            list1[i].index=list1[i].index+1;
        } 
     
        if(div2.children.length==0)
        {
            const list_element=document.createElement('p')
            list_element.innerText=list1[0].index+". "+list1[0].data
            div2.append(list_element)
        }
        else{

            let temp_size=div2.children.length
            
            for(let i=0;i<temp_size;i++)
            {
                div2.removeChild(div2.children[0])//only removing first element multiple times
            }

            for(let i=0;i<list1.length;i++){    
                const list_element=document.createElement('p')
                list_element.innerText=list1[i].index+". "+list1[i].data
                div2.append(list_element)
            }
        } 

    }
   
    
    //setting up max value
    var myString = div2.children.length.toString();
    input2_full.children[1].setAttribute("max",myString)
};

function Delete() {

    if(document.getElementById('input_2').value!=null&&document.getElementById('input_2').value!=""&&list1.length>0){

    list1.splice(parseInt(document.getElementById('input_2').value)-1, 1); 

    for(let i=parseInt(document.getElementById('input_2').value)-1;i<list1.length;i++)
    {
        list1[i].index=list1[i].index-1;
    } 
 
   
    let temp_size=div2.children.length
        
    for(let i=0;i<temp_size;i++)
    {
        div2.removeChild(div2.children[0])//only removing first element multiple times
    }

    for(let i=0;i<list1.length;i++){    
        const list_element=document.createElement('p')
        list_element.innerText=list1[i].index+". "+list1[i].data
        div2.append(list_element)
    }
     

    //setting up max value
    var myString = (div2.children.length).toString();
    input2_full.children[1].setAttribute("max",myString)
    document.getElementById('input_2').value=""
}

};

//method 2: using built in list element/tag for html, which will make life a lot easier


