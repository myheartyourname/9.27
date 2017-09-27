/*
* @Author: lenovo
* @Date:   2017-09-27 18:26:46
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-27 19:53:26
*/
window.addEventListener('load',function(){
	let dl=document.querySelector('dl');
	let info=[
	    {name:'爸',tel:18434374740,py:'ba'},
	    {name:'卫津宇',tel:18434374741,py:'weijinyu'},
	    {name:'李碧莹',tel:18434374742,py:'libiying'},
	    {name:'胡蝶',tel:18434374743,py:'hudie'},
	    {name:'胡慧亚',tel:18434374744,py:'huhuiya'},
	    {name:'吕晓阳',tel:18434374745,py:'lvxiaoyang'},
	    {name:'魏英',tel:18434374746,py:'weiying'},
	    {name:'李倩竹',tel:18434374747,py:'liqianzhu'},
	    {name:'钟丹阳',tel:18434374748,py:'zhongdanyang'},
	    {name:'李多',tel:18434374749,py:'liduo'},
	    {name:'李奇',tel:18434374750,py:'liqi'},
	    {name:'汪书宇',tel:18434374751,py:'wangshuyu'},
	    {name:'王茹',tel:18434374752,py:'wangru'},
	    {name:'祁佳玺',tel:18434374753,py:'qijiaxi'}
	];
    
	render(info);
	function render(data){
		dl.innerHTML='';
        let obj={};
        data.forEach(function (element){
        	let first=element.py.charAt(0).toUpperCase();
        	if (!obj[first]){
        		obj[first]=[];
        	}
        	obj[first].push(element);
        })
        let char=Object.keys(obj).sort();
        char.forEach(element=>{
        	dl.innerHTML+=`
        	<dt>${element}</dt>
        	`
        	obj[element].forEach(value=>{
        	   dl.innerHTML+=`
        	   <dd><a href="tel:${value.tel}">${value.name}</a></dd>
        	   `
        })
        })
       
	}
})
