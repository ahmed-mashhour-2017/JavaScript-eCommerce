

   var i=-1;var interval1;

    function loadpage()
    {
    i+=0.5;
    document.querySelector("#loadpage_parts1").style.cssText="right:"+i+"%;width:"+(100-i)+"%";
    document.querySelector("#loadpage_parts3").style.cssText="right:"+i+"%;width:"+(100-i)+"%";
    document.getElementById("loadpage_parts2").style.cssText="left:"+i+"%;width:"+(100-i)+"%";
    document.getElementById("loadpage_parts4").style.cssText="left:"+i+"%;width:"+(100-i)+"%";			
    if(i==100)
    {clearInterval(interval1)}
    else
    {interval1=setTimeout("loadpage()",10);}

    }
 



     