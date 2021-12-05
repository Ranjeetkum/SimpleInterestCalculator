function simpleInterestCalculator()
{
    let p = document.getElementById("pa").value;
    let r = document.getElementById("rate").value;
    let t = document.getElementById("time").value;
    let result = (p*r*t/100);
    
    //console.log(result);
    document.getElementById("result").innerHTML= "Simple Interest  " + result;
    if(p=="" || r == "" || t == "");
        alert("enter the value first");
    else{
        var result = (p)
    }
}

function resetcalculator()
{
    // document.getElementsByClassName("reset")[0].value="";
    // document.getElementsByClassName("reset")[1].value="";
    for (let i=0; i< document.getElementsByClassName("reset").length ; i++)
    {
        document.getElementsByClassName("reset")[i].value="";
    }
    document.getElementById("result").innerText= "";
}