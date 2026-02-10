// JavaScript Document
function time()
{
today=new Date
year=today.getFullYear()
month=today.getMonth()+1
day=today.getDate()
hour=today.getHours()
if(hour<10){hour='0'+hour}
minute=today.getMinutes()
if(minute<10){minute='0'+minute}
second=today.getSeconds()
if(second<10){second='0'+second}
week=new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六')
num_week=week[today.getDay()]
document.write('现在是：'+year+'年'+month+'月'+day+'日&nbsp;'+num_week+'&nbsp;'+hour+':'+minute+':'+second+'&nbsp;')
if(hour<4){document.write('凌晨好！注意休息。')}
if(hour<12&&hour>=4){document.write('早上好！新的一天开始了。')}
if(hour>=12&&hour<14){document.write('中午好！忙了一早上了吧。')}
if(hour>=14&&hour<18){document.write('下午好！今天过的充实吧。')}
if(hour>=18&&hour<24){document.write('晚上好！该做点什么呢。')}
}
function cform()
{
if(document.form1.advice.value=='')
{
alert('意见内容不能为空！')
return false
}
return true
}