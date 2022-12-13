const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies
function getCookies(){
  setTimeout(()=>{
    let result='';
    cookies.forEach(cookie=>{
      result+=`<li>${cookie.name}</li>`
    });
    document.body.innerHTML=result;
  },1000);
}
  // Progression 2: using setTimeout() -- use 1000 units for time parameter

//Progression 3: Create a function to creat cookies and create an object of Promise.
function creatCookies(newCookie){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      cookies.push(newCookie);
      const error=false;
      if(!error){
        res()
      }
      else{
        rej('There are no such cookies')
      }
    },2000)
  })
}
    // Progression 4: adding two parameters and using setTimeout() -- use 2000 units for time parameter
      
      // Progression 5: handling errors and adding new cookie to the list

// Progression 6: call function using `.then`
creatCookies(newCookie).then(getCookies);

