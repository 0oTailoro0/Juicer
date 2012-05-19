//YayaTemplate
//author:yaya,jihu
//uloveit.com.cn/template
//how to use?  YayaTemplate("xxx").render({});
var YayaTemplate = YayaTemplate || function(str){
	//���ķ�������
	var  _analyze=function(text){
		return text.replace(/{\$(\s|\S)*?\$}/g,function(s){	
			return s.replace(/("|\\)/g,"\\$1")
					.replace("{$",'_s.push("')
					.replace("$}",'");')
					.replace(/{\%([\s\S]*?)\%}/g, '",$1,"')
		}).replace(/\r|\n/g,"");
	};
	//�м����
	var _temp = _analyze(document.getElementById(str)?document.getElementById(str).innerHTML:str);
	//����������render����
	return {
		render : function(mapping){
			var _a = [],_v = [],i;
			for (i in mapping){
					_a.push(i);
					_v.push(mapping[i]);
			}
			return (new Function(_a,"var _s=[];"+_temp+" return _s;")).apply(null,_v).join("");
		}
	}
};