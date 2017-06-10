$(function(){
	//切换白天黑夜
	$('.icon-yueliang3').on('click',function(){
		$('body').toggleClass('change_dn')
	})

	//获取时间并添加到页面上
	var q=new Date();
	var h=q.getHours();
	var m=q.getMinutes();
	var d=q.getDate();
	var mon=q.getMonth()+1;
	var w=q.getDay();
	if(m>=0&&m<10){
		m='0'+m
	}
	$('.time_now span').text(h+':'+m);
	$('.date .date_day').text(d);
	$('.date .date_mon').text(mon+'月');
	$('.week span').text('星期'+w)
	if(h>=0&&h<12){
		$('.AP span').text('AM');
	}else{
		$('.AP span').text('PM');
	}
	
	
	//第四页swiper轮播
	var mySwiper = new Swiper('.swiper-container',{
	    pagination: '.pagination1',
	    loop:true,
	    grabCursor: true,
	    paginationClickable: true
  	})
	
	//第二页选项卡
	var Tab=$('.shop_head .tab');
	var shopCon=$('.shop_bao .shop_con');
	Tab.on('touchstart',function(){
		Tab.removeClass('active').eq($(this).index()).addClass('active');
//		shopCon.removeClass('active').eq($(this).index()).addClass('active');
	})
  
  	//第四页选项卡
	var peacesTab=$('.dynamic_head .peces_tab');
	var pecesBaoBox=$('.peces_baoBox');
	peacesTab.on('touchstart',function(){
		peacesTab.removeClass('active').eq($(this).index()).addClass('active');
//		pecesBaoBox.removeClass('active').eq($(this).index()).addClass('active');
	})
})
