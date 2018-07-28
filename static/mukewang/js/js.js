
// 拿父控件
const banner = document.getElementById('banner-img');
// 通过父控件找下面的元素
const imgs = banner.getElementsByTagName('img');

console.log(imgs);

//全局变量，用于记录当前页面的值
var current = 0;

function changeImg(){

	console.log(current);

	// 将除了自己以外的全部设为none
	//此时current应该是none的
	for(let i=0;i<3;i++){
		if (i!=current) {
			imgs[i].style.display="none";
		}
	}
	
	//全部消除了之后再设置
	imgs[current].style.display="block"
}

//存放interval的id
var result ;

console.log('hello');

// 添加hover事件，取消轮播
banner.addEventListener('mouseover',()=>{
	console.log('mouseover');
	clearInterval(result);
},true);

banner.addEventListener('mouseout',()=>{

	//定时轮播
	result= setInterval(()=>{

		// 超过2之后要从头开始
		if (current==3) {
			current=0;
		}

		//console.log(current);

		changeImg();
		changeDot(current);

		current++;
	
	},1000);

},true);


var dots = document.getElementById('dots').getElementsByTagName('span');

function changeDot(index){

	// 先取消全部
		for(let j=0;j<3;j++){
			dots[j].className = 'dot-native';
		}

		dots[index].className = 'dot-active';
}

for(let i=0;i<3;i++){

	let temp = dots[i];

	// 每个按钮的操作
	temp.addEventListener('click',()=>{

		changeDot(i);
		//切换图片
		current=i;
		changeImg();
	});

}


//定时轮播
result= setInterval(()=>{

	// 超过2之后要从头开始
	if (current==3) {
		current=0;
	}

	//console.log(current);

	changeImg();
	changeDot(current);

	current++;
	
},1000);