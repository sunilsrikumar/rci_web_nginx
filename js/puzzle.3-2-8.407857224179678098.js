// JavaScript Document
    var picture = new Array(img1,img2,img3,img4,img5,img6,img7,img8,img9,img15,img14,img13,img12,img11,img10,imgblank);
	var img1 = new Image();
	img1.src="/images/responsive/service/web/ria/html5/games/1.jpg";
	var img2 = new Image();
	img2.src="/images/responsive/service/web/ria/html5/games/2.jpg";
	var img3 = new Image();
	img3.src="/images/responsive/service/web/ria/html5/games/3.jpg";
	var img4 = new Image();
	img4.src="/images/responsive/service/web/ria/html5/games/4.jpg";;
	var img5 = new Image();
	img5.src="/images/responsive/service/web/ria/html5/games/5.jpg";
	var img6 = new Image();
	img6.src="/images/responsive/service/web/ria/html5/games/6.jpg";
	var img7 = new Image();
	img7.src="/images/responsive/service/web/ria/html5/games/7.jpg";
	var img8 = new Image();
	img8.src="/images/responsive/service/web/ria/html5/games/8.jpg";
	var img9 = new Image();
	img9.src="/images/responsive/service/web/ria/html5/games/9.jpg";
	var img10 = new Image();
	img10.src="/images/responsive/service/web/ria/html5/games/10.jpg";
	var img11 = new Image();
	img11.src="/images/responsive/service/web/ria/html5/games/11.jpg";
	var img12 = new Image();
	img12.src="/images/responsive/service/web/ria/html5/games/12.jpg";
	var img13 = new Image();
	img13.src="/images/responsive/service/web/ria/html5/games/13.jpg";
	var img14 = new Image();
	img14.src="/images/responsive/service/web/ria/html5/games/14.jpg";
	var img15 = new Image();
	img15.src="/images/responsive/service/web/ria/html5/games/15.jpg";
	var img16 = new Image();
	img16.src="/images/responsive/service/web/ria/html5/games/16.jpg";
	var imgblank= new Image;
	imgblank.src="/images/responsive/service/web/ria/html5/games/null.jpg";
	var empty_block = 16; 
	var level;	
	function change_level(level)
	{
	switch(level){
		case 1: picture = new Array(img1,img2,img3,img4,img5,img6,img7,img8,img9,img15,img14,img13,img12,img11,img10,imgblank);
				empty_block = 16; 
				redraw();
				document.getElementById("beginner").style.borderColor ="#A76E00";
				document.getElementById("intermediate").style.borderColor ="";
				document.getElementById("expert").style.borderColor ="";
				break;
	
		case 2: picture = new Array(img1,img2,imgblank,img3,img4,img5,img6,img7,img14,img13,img12,img11,img10,img8,img9,img15);
				empty_block = 3; 
				redraw();
				document.getElementById("beginner").style.borderColor ="";
				document.getElementById("intermediate").style.borderColor ="#217100";
				document.getElementById("expert").style.borderColor ="";
				break;
		case 3: picture = new Array(img13,img1,img15,img8,img2,img3,img6,imgblank,img7,img9,img14,img12,img11,img10,img4,img5);
				empty_block = 8; 
				redraw();
				document.getElementById("beginner").style.borderColor ="";
				document.getElementById("intermediate").style.borderColor ="";
				document.getElementById("expert").style.borderColor ="#BA2B00";
				break;
		}
	}


	
	function redraw()
		{
	    imgctx.fillStyle='#999999';		
		imgctx.drawImage(picture[0], 5, 7);
		imgctx.drawImage(picture[1], 132, 7);
		imgctx.drawImage(picture[2], 260, 7);
		imgctx.drawImage(picture[3], 388, 7);
		imgctx.drawImage(picture[4], 5, 133);
		imgctx.drawImage(picture[5], 132, 133);
		imgctx.drawImage(picture[6], 260, 133);
		imgctx.drawImage(picture[7], 388, 133);
		imgctx.drawImage(picture[8], 5, 258);
		imgctx.drawImage(picture[9], 132, 258);
		imgctx.drawImage(picture[10], 260, 258);
		imgctx.drawImage(picture[11], 388, 258);
		imgctx.drawImage(picture[12], 5, 384);
		imgctx.drawImage(picture[13], 132, 384);
		imgctx.drawImage(picture[14], 260, 384);
		imgctx.drawImage(picture[15], 388, 384);
		imgctx.save();
		}
		
		
        function logic(e)
		{	
			var x;
			var y;
			if (e.pageX || e.pageY) { 
	  			x = e.pageX;
	  			y = e.pageY;
			}
			else { 
			  x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
			  y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
			} 
			console.log(canvas.offsetLeft);
			x -= canvas.offsetLeft;
			y -= canvas.offsetTop;
			if ((x > 380) && (y >380) )
				{
				clicked_block = 16;
				}
				
			if ((x > 250) && (y > 380)&&( x <380) && (y <500))
				{
				clicked_block = 15;
				}          
			if ((x > 125) && (y > 380)&&( x <250) && (y <500))
				{
				clicked_block = 14;
				}
			if ((x > 0) && (y > 380)&&( x < 125) && (y < 500))
				{
				clicked_block = 13;
				}
			if ((x > 380) && (y > 250)&&( x <500) && (y <380))
				{
				clicked_block = 12;
				}   
			if ((x > 250) && (y > 250)&&( x <380) && (y <380))
				{
				clicked_block = 11;
				}          
			if ((x > 125) && (y > 250)&&( x <250) && (y <380))
				{
				clicked_block = 10;
				}
			if ((x > 0) && (y > 250)&&( x < 120) && (y < 380))
				{
				clicked_block = 9;
				}
			if ((x > 380) && (y > 125)&&( x <500) && (y <250))
				{
				clicked_block = 8;
				}   
			if ((x > 250) && (y > 120)&&( x <380) && (y <250))
				{
				clicked_block = 7;
				}          
			if ((x > 120) && (y > 120)&&( x <250) && (y <250))
				{
				clicked_block = 6;
				}
			if ((x > 0) && (y > 120)&&( x < 120) && (y < 250))
				{
				clicked_block = 5;
				}
			if ((x > 380) && (y > 0)&&( x <500) && (y <125))
				{
				clicked_block = 4;
				}   
			if ((x > 250) && (y > 0)&&( x <380) && (y <125))
				{
				clicked_block = 3;
				}          
			if ((x > 125) && (y > 0)&&( x <250) && (y <125))
				{
				clicked_block = 2;
				}
			if ((x > 0) && (y > 0)&&( x < 125) && (y < 125))
				{
				clicked_block = 1;
				}
			
			if (((clicked_block == 1) && (empty_block == 8)) 
				|| ((clicked_block == 5) && (empty_block == 4))
				|| ((clicked_block == 5) && (empty_block == 12)) 
				|| ((clicked_block == 9) && (empty_block == 8)) 
				|| ((clicked_block == 9) && (empty_block == 16))
				|| ((clicked_block == 13) && (empty_block == 12)) 
				|| ((clicked_block == 4) && (empty_block == 5)) 
				|| ((clicked_block == 8) && (empty_block == 1)) 
				|| ((clicked_block == 8) && (empty_block == 9))
				|| ((clicked_block == 12) && (empty_block == 15))
				|| ((clicked_block == 12) && (empty_block == 13)))
					{
						return;				
					}
			
			
			
	if( ((clicked_block - 1) == empty_block ) || ((clicked_block +1) == empty_block) || 
			((clicked_block +4) == empty_block)|| ((clicked_block-4) == empty_block))
				{
				swap(clicked_block,empty_block);
				}
		}
		
	function swap(cell1,cell2)
		{
			
		var swap =picture[cell1-1];
	
		picture[cell1-1] = picture[cell2-1];
		picture[cell2-1]=swap;
		redraw();
		empty_block = cell1;
		var count;
			for(count=1; count <= 16;count++)
				{
					if((count == 15 ) && ((picture[count-1]) == count) && ((picture[16])==""))
					{
					alert("Congrats ");
					}
				}
		}
