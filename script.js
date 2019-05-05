var ip; 
 function myFunc() {
  var a1= document.getElementById('input1').value;
  var a2= document.getElementById('input2').value;
  var a3= document.getElementById('input3').value;
  var a4= document.getElementById('input4').value;
 
  var a = a1+"."+a2+"."+a3+"."+a4;
  ip=a; 
  if(a=='...')
  {
    alert("please enter your ip first ")
  }
  else
  {
  a = a.toString()
if (a.match(/[a-z]/i)) {
  no()
}
else {
 b = a.split(".")
if (b.length == 4) {
   c = true
   for (var d in b) {
     if (Number(b[d]) > 255) {
       c = false
       break
     }
   }
   if (c) {
     console.log(ip)
url='https://ip-api.com/json/'+ip
fetch('http://bar.com/data.json', {
  mode: 'no-cors' // 'cors' by default
}
.then((resp) => resp.json())}
.then(function(data) 
{   console.log(data)
    const result = JSON.stringify(data)
    mydata(result)
})
function mydata(take){
  const takejosn=JSON.parse(take)
  if(takejosn.status=='success')
  {
    document.getElementById("ip").innerHTML = ip;
    document.getElementById("stat").innerHTML = takejosn.status;
    document.getElementById("country").innerHTML = takejosn.country;
    document.getElementById("city").innerHTML = takejosn.city;
    document.getElementById("isp").innerHTML = takejosn.isp;
    document.getElementById("as").innerHTML = takejosn.as;
    document.getElementById("lat").innerHTML = takejosn.lat;
    document.getElementById("log").innerHTML = takejosn.lon;
    document.getElementById("regionName").innerHTML = takejosn.regionName;
    document.getElementById("region").innerHTML = takejosn.region;
    document.getElementById("timezone").innerHTML = takejosn.timezone;
    document.getElementById("zip").innerHTML = takejosn.zip;
    document.getElementById("org").innerHTML = takejosn.org;
  }
  else{
    document.getElementById("stat").innerHTML = takejosn.status;
   console.log("sorry but cant find any data ")
   console.log(takejosn.message);   
  } 
}
   } 
   else 
   {
     no()
   }

}
}
function no() {
 alert("please enter a valid ip")
    }
  }
}
