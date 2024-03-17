document.getElementById("alertString").onclick =Function () 

    let fullName ="alert('Hussain Mehdi ')"

    alert(fullName)     

    let statement = "alert(' Hussain Mehdi')"

    document.getElementById("statement").innerHTML = statement;
    
    document.getElementById("alertNumber").onclick = function() {
        alert(112233)
        let statement = "alert(112233)"
        document.getElementById("statement").innerHTML = statement;
    }
    document.getElementById("variableNames").onclick = function(){
        
        // document.getElementById("statement").innerHTML =statement;
        // document.getElementById("output").innerHTML =output;
        let html = "<ul><li>A varible name cant contain any space.</li><li>A varible name can contain only letters,number,dollarsings,and underscore.</li><li>A varible name cant be of any javascript keywords.For Example<b><code>userAlert</code></b>and<b><code>myvar</code></b>are legal.</li> <li>Capital letter are fine , but be careful. Vaeiable names are casesensitive.A <b><code>rose<code/></b>isnot a if you assing the string to the variable floribuds   to the variable <b><code>rose</code><b>,and ask  the Javascript for the value assing to <b><code>Rose</code></b>, you will come up empty</li> </ul> "
        document.getElementById("output").innerHTML =html;
    }
    document.getElementById("camelCaseExample").onclick = function(){

        let html = "<ul><li><b><code>uers<code/></b></li> <li><b><code>userResponse<code/></b></li> <li><b><code>userResponceTime<code/></b></li> <li><b><code>user ResponceTimeLimit<code/><</b>/li></ul> "
        document.getElementById("output").innerHTML =html;

    }
    document.getElementById("sum2Number").onclick = function(){
        let num1=10;
        let num2=5;
        let sum =num1+num2;
        let statement = "<ul><li>let num1=10;</li><li> let num2=5;</li> <li>let sum=num1+num2;</li></ul>"
        document.getElementById("statement").innerHTML =statement;
        document.getElementById("output").innerHTML =sum;
    }
    document.getElementById("substract2Num").onclick = function(){
        let num1=10;
        let num2=5;
        let substract =num1-num2;
        let statement = "<ul><li>let num1=10;</li><li> let num2=5;</li> <li>let sum=num1-num2;</li></ul>"
        document.getElementById("statement").innerHTML =statement;
        document.getElementById("output").innerHTML =substract;
    }
    document.getElementById("multiply2Number").onclick = function(){
        let num1=10;
        let num2=5;
        let multiply =num1*num2;
        let statement = "<ul><li>let num1=10;</li><li> let num2=5;</li> <li>let sum=num1*num2;</li></ul>"
        document.getElementById("statement").innerHTML =statement;
        document.getElementById("output").innerHTML =multiply;
    }

    document.getElementById("divide2Number").onclick = function(){
        let num1=10;
        let num2=5;
        let devide =num1/num2;
        let statement = "<ul class= text-center><li>let num1=10;</li><li> let num2=5;</li> <li>let sum=num1/num2;</li></ul>"
        document.getElementById("statement").innerHTML =statement;
        document.getElementById("statement").innerHTML ="<p class='text-center '>";
        document.getElementById("output").innerHTML =devide;
    }
    
    document.getElementById("divide2Number").onclick = function(){
        let num1=10;
        let num2=5;
        let devide =num1/num2;
        let statement = "<ul><li>let num1=10;</li><li> let num2=5;</li> <li>let sum=num1/num2;</li></ul>"
        document.getElementById("statement").innerHTML =statement;
        document.getElementById("output").innerHTML =devide;
    }
    document.getElementById("clearStatementbutton").onclick = function(){

        document.getElementById("statement").innerHTML ="";

    }
    document.getElementById("clearOutputButton").onclick = function(){

        document.getElementById("output").innerHTML ="";

    }
    document.getElementById("culculateSomeNumber").onclick = function(){
      let num1 =36;
      let num2 =6;
      let num3 =3;
      let num4 =2;
      let num5 =4;
      let num6 =3;
      let num7 =5;
      let culculation=36 / 6 * 3 + 2 ** 4 -(3+2);
        
        

            document.getElementById("output").innerHTML = culculation;
            let statement = "<p class='text-center '> let SomeCulculation 36 / 6 * 3 + 2 ** 4 -(3+2)</p>";

            document.getElementById("statement").innerHTML =statement;
            
    
        }