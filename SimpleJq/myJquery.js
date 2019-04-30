/***
	This is a jquery based framework
	create 2017.04.26
**/
var $my = myJquery = (function(root){
	var _proxy = function(selector){
		return root.document.querySelectorAll(selector);
	}
	var $ = function(selector){
		return _proxy(selector);
	}

	$.extend =function(target){
		for(var i = 1; i < arguments.length; i++){
			for(var prop in arguments[i]){
				target[prop] = arguments[i][prop];
			}
		}
		return target;
	}

	//原型对象
	var _Proto_ = {
		addclass : function(){
			console.log("11111");
			return this;
		}
	}
	$.fn = $.extend(NodeList.prototype,_Proto_);

	//闭包
	return $;
}(window));