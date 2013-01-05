$.extend({
	myGetObj:function(obj){
		alert($(obj).val());
	},
	
	myGetId:function(id){
		alert($("#"+id).val())
	}
});
