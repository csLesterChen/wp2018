$(document).ready(function() {   
    $('#slider').cycle({   
        fx:    'fade',
        timeout:  3000,
        random:  1
       });
  }); 


  function format_time(hour,min,second)
  {
    var time;
    if(second<10 && min<10 && hour<10)
      time = '0'+hour+':0'+min+':0'+second;
    else if(second<10 && min<10)
      time = hour+':0'+min+':0'+second;
    else if(hour<10 && min<10)
      time = '0'+hour+':0'+min+':'+second;
    else if(second<10 && hour<10)
      time = '0'+hour+':'+min+':0'+second;
    else if(second<10)
      time = hour+':'+min+':0'+second;
    else if(min<10)
      time = hour+':0'+min+':'+second;
    else if(hour<10)
      time ='0'+hour+':'+min+':'+second;
    else
      time = +hour+':'+min+':'+second;

    return time;
  }
  function update_time() 
  {   
    var d = new Date();
    var second = d.getSeconds();
    var min = d.getMinutes();
    var hour = d.getHours();
    var date = d.getDate();
    var month = d.getMonth()+1;
    var year = d.getFullYear();
    var full_time = year + '/'+ month +'/'+ date +'&nbsp;&nbsp;&nbsp;';
    full_time += format_time(hour,min,second);
    document.getElementById("date_label").innerHTML = full_time;
    setTimeout("update_time()", 500);
  }

  let display = false;
  function showMenu(){
    if (display)
    {
      $("#menu-content").hide();
    }
    else
    {
      $("#menu-content").show();
    }
    display = !display;
    //$("#menu-content").toggle();
  }
  function hideMenu(){
    if (display)
    {
      $("#menu-content").hide();
      display = !display;
    }

  }