$(function(){
		var mydate = new Date();//建立date对象
		var year = mydate.getFullYear();//获取年份
		var month = (mydate.getMonth());//此0为1月份
		var day = mydate.getDate();//获取当前日期
		var month_olypic = [31,29,31,30,31,30,31,31,30,31,30,31];//闰年12个月每月日数
		var month_normal = [31,28,31,30,31,30,31,31,30,31,30,31];//平年12个月每月日数				

		//判断某年是否为闰年,并且返回当前月有多少日
		function rn(month,year){
			var temp = year % 4;
			if(temp == 0){
				return month_olypic[month];
			}else{
				return month_normal[month];
			}
		}

		//判断某月第一天是星期几
		function st(month,year){
			var tmp = new Date(year,month,1);
			return tmp.getDay();//获取当前星期X(0-6,0代表星期天)
		}
		
		function refreshDate(){
			var str = ""//空白处
			var Mon = "";
			switch(month){
				case 0: Mon = "January" 
						break;
				case 1: Mon = "February" 
						break;
				case 2: Mon = "March"
						break;
				case 3: Mon = "April" 
						break;
				case 4: Mon = "May" 
						break;
				case 5: Mon = "June " 
						break;
				case 6: Mon = "July" 
						break;
				case 7: Mon = "August" 
						break;
				case 8: Mon = "September" 
						break;
				case 9: Mon = "October" 
						break;
				case 10: Mon = "November" 
						break;
				case 11: Mon = "December" 
						break;
			}
			var totalDays = rn(month,year);//某月总天数
			var firstDay = st(month,year);//某月第一天是星期几
			for(var i = 1; i < firstDay; i++){
				str = document.createElement("li");
				document.getElementById("days").appendChild(str);
				//第一天之前的空白位置
			}
			for(var i = 1; i <= totalDays; i++){
				str = document.createElement("li");
				str.setAttribute("class","lightgrey");
				document.getElementById("days").appendChild(str).appendChild(document.createTextNode(i));
				if(i == day && year == mydate.getFullYear() && month == mydate.getMonth()){
					str.setAttribute("class","greenbox green");
					//当天日期以绿色显示
				}else if(i > day || year != mydate.getFullYear() || month != mydate.getMonth()){
					str.setAttribute("class","darkgrey");
				}
			}
			$(".calendar .title .green").text(Mon);
			$(".calendar .title .green-small").text(year);	
		}

		//上一页
		$(".calendar .title #prev").on('click',function(e){
			e.preventDefault();//阻止元素发生默认的行为
			$("#days li").remove();
			month--;
			if(month < 0){
				year--;
				month = 11;
			}
			refreshDate();
		});
		//下一页
		$(".calendar .title #next").on("click",function(e){
			e.preventDefault();//阻止元素发生默认的行为
			$("#days li").remove();
			month++;
			if(month > 11){
				year++;
				month = 0;
			}
			refreshDate();
		});
		refreshDate();
	});