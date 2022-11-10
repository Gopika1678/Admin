var editor;
function del()
{
    var isTable=document.getElementById('startuptable');
    var nboxes=document.getElementsByName('delbox');
    for(i=nboxes.length-1;i>=0;i--) {
        if(nboxes[i].checked == true)
        {
            isTable.deleteRow(i);
        }
    }
} 
/*for(i=1;i<nboxes.length+1;i++) {
    if(nboxes[i].checked==true) 
    {
        isTable.deleteRow(i-1);
    }
} */

/*function submit()
{
   var check=document.getElementsByName("delbox");
   for(var i=0;i<check.length;i++) {
    if(ele[i].type=="checkbox")
    {
        ele[i].checked=true;
    }
   }
}
function deselect()
{
    var check=document.getElementsByName("delbox");
    for(var i=0;i<check.length;i++) {
        if(ele[i].type=="checkbox") {
            ele[i].checked=false;
        }
    }
} */

document.getElementById("toggle").onclick = function() {
    var checkboxes = document.getElementsByName("delbox");
    for (var checkbox of checkboxes) {
        checkbox.checked = !checkbox.checked;
    }
}
//document.getElementById("edit" + no).style.display='block';
  //  editor.datatables.net/examples/inline-editing/fullRowCreate.html
    //HTML file
    //in edit btn,change to editbtn('1')
    //JS File
    //create four variables and get the values from textboxes
    //create another four variables and into it save .innerHTML ie var name_data=name.innerHTML
    //get values from textfields into .innerHTML

    
   function editbtn()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
   function editbtn1()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
   function editbtn2()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
   function editbtn3()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
   function editbtn4()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
   function editbtn5()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
   function editbtn6()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
   function editbtn7()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
   function editbtn8()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
   function editbtn9()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
   function editbtn10()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
   function editbtn11()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
   function editbtn12()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
   function editbtn13()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
   function editbtn14()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
   function editbtn15()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
   function editbtn16()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
   function editbtn17()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
   function editbtn18()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
   function editbtn19()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
   function editbtn20()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
   function editbtn21()
   {
    
    var edit_element=document.querySelector("[contenteditable=false]");
    edit_element.setAttribute("contenteditable",true);
   }
    function delbtn() {
        document.getElementById('startuptable').deleteRow(1);
    }
    function delbtn1()
    {
        document.getElementById('startuptable').deleteRow(2);
    }
    function delbtn3() {
        document.getElementById('startuptable').deleteRow(3);
    }
    function delbtn4()
    {
        document.getElementById('startuptable').deleteRow(4);
    }
    function delbtn5() {
        document.getElementById('startuptable').deleteRow(5);
    }
    function delbtn6()
    {
        document.getElementById('startuptable').deleteRow(6);
    }
    function delbtn7() {
        document.getElementById('startuptable').deleteRow(7);
    }
    function delbtn8()
    {
        document.getElementById('startuptable').deleteRow(8);
    }
    function delbtn9() {
        document.getElementById('startuptable').deleteRow(9);
    }
    function delbtn10()
    {
        document.getElementById('startuptable').deleteRow(10);
    }
    function delbtn11() {
        document.getElementById('startuptable').deleteRow(11);
    }
    function delbtn12()
    {
        document.getElementById('startuptable').deleteRow(12);
    }
    function delbtn13() {
        document.getElementById('startuptable').deleteRow(13);
    }
    function delbtn14()
    {
        document.getElementById('startuptable').deleteRow(14);
    }
    function delbtn15() {
        document.getElementById('startuptable').deleteRow(15);
    }
    function delbtn16()
    {
        document.getElementById('startuptable').deleteRow(16);
    }
    function delbtn17()
    {
        document.getElementById('startuptable').deleteRow(17);
    }
    function delbtn18() {
        document.getElementById('startuptable').deleteRow(18);
    }
    function delbtn19()
    {
        document.getElementById('startuptable').deleteRow(19);
    }
    function delbtn20() {
        document.getElementById('startuptable').deleteRow(20);
    }
    function delbtn21() {
        document.getElementById('startuptable').deleteRow(21);
    }
    