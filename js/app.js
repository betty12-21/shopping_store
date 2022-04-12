var app=angular.module("myApp",['ui.router',])
   .filter("totFilter",function($rootScope){
       return function(items){
           var tot=0
           items.forEach(function(item){
               tot+=item.price*item.qty
           })
           $rootScope.totPrice=tot
           return items

       }
   })
   .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state("app",{
                url:"/",
                views:{
                    main:{
                        templateUrl:"templates/main.html",
                        controller:"appCtrl"
                    }
                }
            })
            .state("app.home",{
                url:"home",
                views:{
                    sub:{
                        templateUrl:"templates/home.html",
                        controller:"homeCtrl"
                    }
                }
            })
            .state("app.store",{
                url:"store",
                views:{
                    sub:{
                       templateUrl:"templates/store.html",
                        controller:"storeCtrl"
                    }
                }
            })
            .state("app.contact",{
                url:"contact",
                views:{
                    sub:{
                        templateUrl:"templates/contact.html",
                        controller:"contCtrl"
                    }
                }
            })
            .state("app.about",{
                url:"about",
                views:{
                    sub:{
                        templateUrl:"templates/about.html",
                        controller:"abouteCtrl"
                    }
                }
            })

          
        $urlRouterProvider.otherwise("/")
    })


app.controller("homeCtrl",function($scope, $rootScope){



})

    app.controller("appCtrl",function($scope, $rootScope){
        $scope.openBasket=function(){
            $("#basket").modal("show");
        }
        $rootScope.basket=[]
        $rootScope.products=[
            {id:1,name:"laptop",img:'./assets/img/lap3.jpg',price:85000, company:"Toshiba",condition:"New"},
            {id:2,name:"laptop",img:'./assets/img/large-microsoft-surface-pro-4-typecover-128-gb.jpg',price:85000, company:"Toshiba",condition:"New"},
            {id:3,name:"smart ",img:'image/e3.jpg',price:7000, company:"laptop",condition:"New"},
            {id:4,name:"smart ",img:'image/m4.jpg',price:7000, company:"laptop",condition:"New"},
            {id:5,name:"case",img:'./assets/img/large-lenovo-legion-y520-gaming-pc.jpg',price:6000, company:"adidas",condition:"New"},
            {id:6,name:"case ",img:'./assets/img/large-lenovo-legion-y520-gaming-pc.jpg',price:9000, company:"laptop",condition:"New"},
            {id:7,name:"case ",img:'./assets/img/large-lenovo-legion-y520-gaming-pc.jpg',price:4000, company:"adidas",condition:"New"},
            {id:8,name:"case",img:'./assets/img/large-lenovo-legion-y520-gaming-pc.jpg',price:6000, company:"adidas",condition:"New"},
            {id:9,name:"case ",img:'./assets/img/large-lenovo-legion-y520-gaming-pc.jpg',price:9000, company:"laptop",condition:"New"},
           // {id:10,name:"case ",img:'image/c.png',price:4000, company:"adidas",condition:"New"},
            {id:11,name:"laptop",img:'./assets/img/lap2.jpg',price:85000, company:"Hp",condition:"New"},
            {id:12,name:"laptop",img:'./assets/img/lap1.jpg',price:85000, company:"Hp",condition:"New"},
            {id:13,name:"smart",img:'image/e2.jpg',price:7000, company:"laptop",condition:"New"},
            {id:14,name:"smart",img:'image/m6.jpg',price:7000, company:"laptop",condition:"New"},
                        ]



                        $( document ).ready(function() {
                            new WOW().init();
                          });
                        


    })
    


        app.controller("storeCtrl",function ($scope, $rootScope) {
            
         $scope.preAddToBasket=function(x){
             $scope.selectedProduct=x
             $("#singleProduct").modal("show")
         }  
         $scope.addToBasket=function(){
             var found=false
             $rootScope.basket.forEach(function(item){
                 if(item.id==$scope.selectedProduct.id){
                     found=true
                     item.qty+=$scope.selectedProduct.qty
                 }
             })

             if(!found)
                  $rootScope.basket.push($scope.selectedProduct)

             $("#singleProduct").modal("hide")     
         } 
         //  to show store
         $(document).ready(function () {
        timer = setTimeout(function () {
          $('#second-box').removeClass('hide');
          
                //  to hide loader
             timer = setTimeout(function () {
          $('#no').hide('hid');
      }, 2000);
      }, 1000);
 
         });

        //  to hide loader


        })

     


      app.controller("abouteCtrl",function($scope, $rootScope){


        $scope.emp=[ 
{name:"omer",photo:'image/call.jpg' ,comm:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur Nemo enim ipsam voluptatem quia voluptas sit Nemo enim ipsam voluptatem quia voluptas sit " },
{name:"adam",photo:'image/call.jpg' ,comm:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur Nemo enim ipsam voluptatem quia voluptas sit Nemo enim ipsam voluptatem quia voluptas sit "},
{name:"ali",photo:'image/call.jpg' ,comm:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur Nemo enim ipsam voluptatem quia voluptas sit Nemo enim ipsam voluptatem quia voluptas sit "}
    ]




    $scope.add=function(){
        $scope.emp.push({name:$scope.name ,comm:Scope.comm ,photo:$scope.photo})
        $scope.name=""
        $scope.comm=""
        $scope.photo=""
    }
    
    
    
//     $(document).ready(function(){
//         $(go).click(function(){
//   var x=$("name").val();
//   var z=$("photo").val();
//   var y=$("comm").val();

//   "<div>"+ x+"</div>"
//   "<div>"+ z+"</div>"
//   $("#g").append(x)

//         })
//         })
        })
   

      app.controller("contCtrl",function($scope,$rootScope){

       $("#do").click(function(){ 

        timer = setTimeout(function () {
          $('#sec').hide('se');
          
                //  to hide loader
                setTimeout(function(){ 
          $('#exampleModalCenter'). modal('show') 
             }, 800);
             
             setTimeout(function(){ 
          $('#exampleModalCenter'). modal('hide') 
             }, 1500);

             setTimeout(function(){ 
              $('#name').val('');
              $('#comm').val('');
              $('#email').val('');
              $('#sub').val('');
              $('#sec').show('se');
             }, 1800);
             
          

      }, 500);
   
  
})





})
      
    

    
    

   

   

