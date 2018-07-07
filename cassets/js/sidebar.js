 /* Sidebar Starts */
        ! function() {
              var viewPortWidth = window.innerWidth;
             if (viewPortWidth > 767) {

                  var imgsArray = [
                                   "truck_model_001_blue_left",
                                   "truck_model_001_blue_right",
                                   "truck_model_001_green_left",
                                   "truck_model_001_green_right",
                                   "truck_model_001_orange_left",
                                   "truck_model_001_orange_right",
                                   "truck_model_001_red_left",
                                   "truck_model_001_red_right",
                                   "truck_model_002_blue_left",
                                   "truck_model_002_blue_right",
                                   "truck_model_002_darkblue_left",
                                   "truck_model_002_darkblue_right",
                                   "truck_model_002_orange_left",
                                   "truck_model_002_orange_right",
                                   "truck_model_002_pink_left",
                                   "truck_model_002_pink_right",
                                   "truck_model_003_green_left",
                                   "truck_model_003_green_right",
                                   "truck_model_003_white_left",
                                   "truck_model_003_white_right",
                                   "truck_model_004_blue_left",
                                   "truck_model_004_blue_right",
                                   "truck_model_004_green_left",
                                   "truck_model_004_green_right",
                                   "truck_model_004_orange_left",
                                   "truck_model_004_orange_right",
                                   "truck_model_004_red_left",
                                   "truck_model_004_red_right",
                                   "truck_model_005_orange_left",
                                   "truck_model_005_orange_right",
                                   "truck_model_005_red_left",
                                   "truck_model_005_red_right",
                                   "truck_model_005_violet_left"
                                   // "truck_model_005_violet_right",
                                   ];
                  //console.log(imgsArray.length);

                  var truck_folder_name = $("#truck_folder_name").html();
                  //console.log('mini truck Image folder: '+truck_folder_name);
                  var linksMainString = $('#truck_links').data('links');
                  //console.log(linksMainString);
                  var linksArray = linksMainString.split(",");
                  //console.log(linksArray);
                  if(linksArray === undefined){
                      console.log("Error: There is no link for the trucks");
                      linksArray = [];
                      for(let i=0; i<=imgsArray.length; i++ ){
                          linksArray[i]="#";
                      }
                  }
             //      //var baseURL = location.protocol+'//'+location.hostname+'/';
             //      // var baseURL = location.href;
             //      //var baseURL = prot+'//'+hst+'/';
                  var baseURL = 'http://gondolas01.dbrqx.com/index1/';
                  //console.log(baseURL);

                  function generateRandomForArray() {
                      var num = Math.floor(Math.random() * imgsArray.length);
                      return num;
                  }

                  function getRandom(min, max) {
                      return Math.floor(Math.random() * (max - min)) + min;
                  }

                  var leftWidth = $('.left_sidebar').width();
                  var leftHeight = $('.left_sidebar').height();
                 function setLeftImage(img_index){
                      var imageName = imgsArray[img_index];
                      $(".left_sidebar").append("<a href='"+linksArray[img_index]+"'><img index='"+img_index+"' src='"+baseURL+truck_folder_name+"/trucks_light/" + imageName + ".svg'></a>");
                      //$(".left-sidebar a").last().css({"top": top + "px", "left": left + "px"});
                  }
                  function setRightImage(img_index){
                      var imageName = imgsArray[img_index];
                      $(".right_sidebar").append("<a href='"+linksArray[img_index]+"'><img index='"+img_index+"' src='"+baseURL+truck_folder_name+"/trucks_light/" + imageName + ".png'></a>");
                      //$(".right-sidebar a").last().css({"top": top + "px", "right": right + "px"});
                  }

                  //Setting image on both sidebar
                  var top=0, pos = 0;
                  var quarterWidth = Math.floor(leftWidth/4);
                  if(viewPortWidth > 991) {
                     for(top = 0; top < leftHeight; top+=pos) {
                         pos = getRandom(pos, quarterWidth);
                         //console.log(pos);
                         top+=pos;
                         //console.log(top);
                        var img_index = generateRandomForArray();
                        setLeftImage(img_index);

                        img_index = generateRandomForArray();
                        setRightImage(img_index);                     
                    }
                  }
                  //console.log(quarterWidth);
                   // while( top < leftHeight){
                   //     pos = getRandom(pos, quarterWidth);
                   //     //console.log(pos);
                   //     top+=pos;
                   //     //console.log(top);
                   //    var img_index = generateRandomForArray();
                   //    setLeftImage(img_index);

                   //    img_index = generateRandomForArray();
                   //    setRightImage(img_index); 

                   //    // if((quarterWidth > leftWidth) && pos!=0){
                   //    //     //quarterWidth = Math.floor(leftWidth/4);
                   //    //     pos = 0;
                   //    //     if(userAgent.width() >= 1601){
                   //    //         top+=160;
                   //    //     } else if (userAgent.width() >=1441) {
                   //    //         top+=130;
                   //    //     }else if (userAgent.width() >=1367) {
                   //    //         top+=120;
                   //    //     }else {
                   //    //         top+=100;
                   //    //     }
                   //    // }

                   // }
              }
         }();
        /* Sidebar End */
