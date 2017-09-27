/*
* @Author: lenovo
* @Date:   2017-09-26 16:37:51
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-27 16:54:36
*/
window.addEventListener('load',function(){
	let table=document.querySelector('tbody');
	let addBtn=document.querySelector('.addBtn');
	// let students=[
	// {name:'张三',age:20,sex:'男',phone:18746352234,address:'山西太原'},
	// {name:'张三',age:20,sex:'男',phone:18746352234,address:'山西太原'},
	// {name:'张三',age:20,sex:'男',phone:18746352234,address:'山西太原'},
	// {name:'张三',age:20,sex:'男',phone:18746352234,address:'山西太原'},
	// {name:'张三',age:20,sex:'男',phone:18746352234,address:'山西太原'}
	// ];
	let ss=new storage();
	load();
	function load(){
		let tt=ss.getData();
        tt.forEach((element,index)=>{
            createTr(element,index);
        })
	}
	addBtn.ondblclick=function(){
        let obj={name:'',age:'',sex:'',phone:'',address:''};
        createTr(obj,table.childElementCount);
        ss.push(obj);
    }
    function createTr(obj,i){
        let trs=document.createElement('tr');
        trs.id=i;
   //      trs.innerHTML=`
   //          <td type='name'>${obj.name}</td>
			// <td type='age'>${obj.age}</td>
			// <td type='sex'>${obj.sex}</td>
			// <td type='phone'>${obj.phone}</td>
			// <td type='address'>${obj.address}</td>
			// <td class='del'><button class='delBtn'>删除</button></td>
   //      `;
        for (let j in obj){
        	trs.innerHTML+=`
        	    <td type='${j}'>${obj[j]}</td>
        	`;
        }
        trs.innerHTML+=`<td class='del'><button class='delBtn'>删除</button></td>`;
        table.appendChild(trs);
    }
	table.ondblclick=function(e){
		let element=e.target;
		if (element.nodeName=='TD'&&element.className!='del'){
		    let oldv=element.innerText;
		    element.innerText='';
			let inputs=document.createElement('input');
		    inputs.value=oldv;
            element.appendChild(inputs);
            
            inputs.onblur=function(){
            	let newv=inputs.value.trim();
                element.removeChild(inputs);
            	if (!newv){
            		newv=oldv;
            	}
            	element.innerText=newv;
            	let row=element.parentNode.id;
            	let type=element.getAttribute('type');
            	ss.upDate(row,type,newv);
            }
		}else if(element.nodeName=='BUTTON'){
			let trs=element.parentNode.parentNode;
			table.removeChild(trs);
			let index=element.parentNode.parentNode.id;
			ss.cancle(index);
			table.innerHTML='';
			load();
		}
	}
})