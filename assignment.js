 
 //
                                                
                                                
                                                //kilometerToMeter//
 
                  
                  function kilometerToMeter (kilometer)
                  {
                          var Distance = kilometer*1000; //1km = 1000m
                           return Distance;
                            
                            
                            }
                  var meter = kilometerToMeter (5)
                  console.log(meter)
                                                      
                  
                  
                                            //budgetCalculator//

                  function budgetCalculator (watch,mobile,laptop)
                  {
                            
                            var total = watch*50+mobile*100+laptop*300;
                            return total;
                            
                            
                            
                    }
                  var result = budgetCalculator(2,1,1);
                  console.log(result);
 
                                     //hotelCost//
          
          function hotelCost (duration){
                    var livingCost =0;
                    if(duration <= 10){
                    livingCost = duration*100; //first 10 day =100tk;
                    }
                    else if(duration <= 20){
                              var firstday =10*100;
                              var remaining = duration - 10;
                              var secendDay = remaining * 80;   //  next 10days cost = 80taka
                              livingCost =firstday+secendDay;
                    }
                    else{
                              var firstday =10*100;
                              var secendDay =10*80;
                              var remaining =duration -20;
                              var thirdDay =remaining*50 // 21 tarikh to 31 tarikh 50 taka
                              livingCost=firstday+secendDay+thirdDay;
                             
                              
                    }
                    return livingCost;
                    
          }
                   var totalcost = hotelCost(38);
                    console.log(totalcost);
                    
                    
                    
                                               //04-megafriend

    function megaFriend(friendsName) {
      var longestName = '';
      for (var i = 0; i < friendsName.length; i++) {
          if (longestName.length < friendsName[i].length) {
              longestName = friendsName[i];
          }
      }
      return longestName;
  }
  
  // Friends Name

  var getMegaFriend = megaFriend([
      'Hridoy Arafat',
      'komol Ahmed shuvo',
      'Tamim Ahmed',
  ]);
  
  // Console Output

  console.log(getMegaFriend);
