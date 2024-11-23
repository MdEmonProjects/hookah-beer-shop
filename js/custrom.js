$('.run_num').counterUp({
    delay: 100,
    time: 1500
});


const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let birthday = "Sep 10, 2022 00:00:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerHTML = Math.floor(distance / (day)),
          document.getElementById("hours").innerHTML = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerHTML = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerHTML = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          // let headline = document.getElementById("headline"),
          //     countdown = document.getElementById("countdown"),
          //     content = document.getElementById("content");

          // // headline.innerText = "It's my birthday!";
          // countdown.style.display = "none";
          // content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)


      $(function(){

        $(document).ready(function(){
            
            $('.venobox').venobox({
                framewidth : '400px',                            
                frameheight: '300px',                            
                border     : '10px',                             
                bgcolor    : '#5dff5e',                          
                titleattr  : 'data-title',                       
                numeratio  : true,                               
                infinigall : true,                               
                share      : ['facebook', 'twitter', 'download'] 
            });
        });
    
        
    });



      