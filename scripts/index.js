
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"></script>
 
  <script type='text/javascript'> 
    $(document).ready(function() { 
      $("A#1").toggle(function() { 
      	
        $("DIV#box").fadeIn(); 
        return false; 
      },  
      function() { 
         
        $("DIV#box").fadeOut();
        return false; 
      }); 
    }); 
  </script> 
  
  <script type='text/javascript'> 
    $(document).ready(function() { 
      $("A#2").toggle(function() { 
      	
      
        $("DIV#box1").fadeIn();
        return false; 
      },  
      function() { 
        
        $("DIV#box1").fadeOut(); 
        return false; 
      }); 
    }); 
  </script> 

