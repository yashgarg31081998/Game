$(function(){

   var player= $(".Player");
    var obstacle1= $(".obstacle1");
    var obstacle2= $(".obstacle2");
    var destination= $(".destination");
    var box=$("#Arena");


    box.click(function(){

        var p=player.offset();
        var o1=obstacle1.offset();
        var o2=obstacle2.offset();
        var d=destination.offset();


        if(d.left-p.left<40)
        {
            alert("You won");
            console.log("won");
            window.stop();


        }
        if((o1.left-p.left<15&&p.top-o1.top<15&&o1.top-p.top<15)||(o2.left-p.left<15&&p.top-o2.top<15&&o2.top-p.top<15))
        {
            console.log("Lose")
            alert("You Lose");

           window.stop();
        }

    })


})