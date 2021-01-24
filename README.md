# IP_locator
#### Website to locate your ip address loaction
***
It is super fast and most importantly it uses new ES6 concept of fetch() rather than traditional ajax xml http request 

```javascript
fetch('your url')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  }); 
  ```
>what all it shows

1.Ip query status <br>
2.Country <br>
3.City <br>
4.Internet_service_provider <br>
5.Info_service_provider <br>
6.Latitude <br>
7.Longitude <br>
8.Region_name <br>
9.Region <br>
10.Time zone <br>
11.Zip <br>
12.Org <br>

![screenshot1](https://github.com/alikthehacker/IP_locator/blob/master/images/screenshot1.jpg)<br>
<br>
![screenshot2](https://github.com/alikthehacker/IP_locator/blob/master/images/screenshot2.jpg)

>There is no overall limit on query.
