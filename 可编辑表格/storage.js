/*
* @Author: lenovo
* @Date:   2017-09-27 11:55:01
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-27 15:50:48
*/
class storage{
	constructor(){
		this.data=[];
	}
	_init(){
        this.data=[
	        {name:'张三',age:20,sex:'男',phone:18746352234,address:'山西太原'},
	        {name:'张三',age:20,sex:'男',phone:18746352234,address:'山西太原'},
	        {name:'张三',age:20,sex:'男',phone:18746352234,address:'山西太原'},
	        {name:'张三',age:20,sex:'男',phone:18746352234,address:'山西太原'},
	        {name:'张三',age:20,sex:'男',phone:18746352234,address:'山西太原'}
	    ];
	    localStorage.setItem('students',JSON.stringify(this.data)); 
	}
	getData(){
		let data=localStorage.getItem('students');
		if (!data){
			this._init();
		}
		return this.data=JSON.parse(localStorage.getItem('students')); 
	}
	upDate(row,type,value){
        this.data[row][type]=value;
        this.save();
	}
	cancle(index){
		this.data.splice(index,1)
		this.save();
	}
	push(obj){
		this.data.push(obj);
		this.save();
	}
	save(data){
		localStorage.students=JSON.stringify(this.data);
	}
}