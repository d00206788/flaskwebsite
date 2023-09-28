var sidemeu = document.getElementById("sidemenu");

    function openmenu(){
        sidemeu.style.right = "0";
    }
    function closemenu(){
        sidemeu.style.right = "-200px";
    }

    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
     }

     var tablinks = document.getElementsByClassName("tab-links");
     var tabcontents = document.getElementsByClassName("tab-contents");
 
     function opentab(tabname){
         for(tablink of tablinks){
             tablink.classList.remove("active-link");
         }
         for(tabcontent of tabcontents){
             tabcontent.classList.remove("active-tab");
         }
         event.currentTarget.classList.add("active-link");
         document.getElementById(tabname).classList.add("active-tab");
     }

     filterSelection("all")
     function filterSelection(c) {
       var x, i;
       x = document.getElementsByClassName("column");
       if (c == "all") c = "";
       for (i = 0; i < x.length; i++) {
         w3RemoveClass(x[i], "show");
         if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
       }
     }
     
     function w3AddClass(element, name) {
       var i, arr1, arr2;
       arr1 = element.className.split(" ");
       arr2 = name.split(" ");
       for (i = 0; i < arr2.length; i++) {
         if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
       }
     }
     
     function w3RemoveClass(element, name) {
       var i, arr1, arr2;
       arr1 = element.className.split(" ");
       arr2 = name.split(" ");
       for (i = 0; i < arr2.length; i++) {
         while (arr1.indexOf(arr2[i]) > -1) {
           arr1.splice(arr1.indexOf(arr2[i]), 1);     
         }
       }
       element.className = arr1.join(" ");
     }
     
     
     // Add active class to the current button (highlight it)
     var btnContainer = document.getElementById("myBtnContainer");
     var btns = btnContainer.getElementsByClassName("btn");
     for (var i = 0; i < btns.length; i++) {
       btns[i].addEventListener("click", function(){
         var current = document.getElementsByClassName("active");
         current[0].className = current[0].className.replace(" active", "");
         this.className += " active";
       });
     }

    
     var imgArray = [
        'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/08/wyrm.jpg?q=50&fit=crop&w=1500&dpr=1.5',
        'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/08/city-2.jpg?q=50&fit=crop&w=1500&dpr=1.5',
        'https://preview.redd.it/ym5uqtodsip71.png?width=2560&format=png&auto=webp&s=d2f6eecd8fef140a943ca16f0fae6c073cd3a2f5',
        'https://preview.redd.it/foolutjesip71.png?width=2560&format=png&auto=webp&s=06c02d237765099340dd037c3b9a781f64251bf4',
        'https://preview.redd.it/vifixn4fsip71.png?width=2560&format=png&auto=webp&s=749db62a672cbefb048b6afca39af35c40183d0f',
        'https://preview.redd.it/wkm4evsfsip71.png?width=2560&format=png&auto=webp&s=eeb40fa899dff8f71c0cdf4a7925f5c09a543da0'
    ];
    var curIndex = 0;
    var imgDuration = 5000;

    function slideShow() {
        document.getElementById('image1').src = imgArray[curIndex];
        curIndex++;
        if (curIndex == imgArray.length) { curIndex = 0; }
        setTimeout("slideShow()", imgDuration);
    }
    slideShow();