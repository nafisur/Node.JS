var assignment = {
    checkPrime: function(x) {
        var flag
        for (i = 2; i <= Math.sqrt(x) / 2; i++) { 
  
            // If n is divisible by any number between 
            // 2 and n/2, it is not prime 
            if (x % i == 0) { 
                flag = 0; 
                break; 
            } 
        } 
      
        if (flag == 1) { 
            return true
        } 
        else { 
            return false
        }
    },







    checkPalimdrome: function(str) {
        var l = 0; 
        var h = len(str) - 1; 
  
    // Keep comparing characters while they are same 
    while (h > l) 
    { 
        if (str[l++] != str[h--]) 
        { 
            console.log("Palindrome")
            return; 
        } 
    } 
    console.log("Not Palindrome") 
    },








    calculateOdd: function(x) {
        
        if (x % 2 == 0) {

            return false
        }
        else {
            return true
        }
    },



    

    calculatePrime: function(lower,upper) {
        var prime, n;
        for(n=lower+1; n<upper; n++)
        {
          prime = 1;
          for(i=2; i<n/2; i++)
            if(n%i == 0)
            {
              prime = 0;
              break;
            }
          if(prime)
            console.log(n)
        }
    }
}

module.exports = assignment
