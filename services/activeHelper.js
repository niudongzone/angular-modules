"use strict"
function service(){
	this.updateActive=function(item){
		item.active=item.active==true?false:true;
	}
	//请保证项目上面存在active属性
	this.updateActiveTrue=function(dataSource,index){
		angular.forEach(dataSource,function(data,i){
			if(index!=i)//如果index不为选中的item
				data.active=false;
			else
				data.active=true;
		});
	}
	this.updateActiveFalse=function(dataSource,index){
		angular.forEach(dataSource,function(data,i){
			if(index!=i)//如果index不为选中的item
				data.active=true;
			else
				data.active=false;
		});
	}
	this.initActivesTrue=function(dataSource){
		angular.forEach(dataSource,function(data){
			data.active=true;
		});
	}
	this.initActivesFalse=function(dataSource){
		angular.forEach(dataSource,function(data){
			data.active=false;
		});
	}
	this.isHaveTrue=function(dataSource){
		let len=dataSource.length;
		if(len){
			for(let i=0;i<len;i++){
				if(dataSource[i].active===true)
					return true;
			}
			return false;
		}
		return null;
	}
	this.isHaveFalse=function(dataSource){
		let len=dataSource.length;
		if(len){
			for(let i=0;i<len;i++){
				if(dataSource[i].active===false)
					return true;
			}
			return false;
		}
		return null;
	}
}
module.exports=service;