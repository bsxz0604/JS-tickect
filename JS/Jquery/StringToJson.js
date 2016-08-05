/*
Nic.Li(bsxz0604@126.com)
 */


///转化Form.serialize()
///form.serialize()=a111&b=2222&c=3333
///然后经过DataDeal.formToJson 转化为 {a:111,b:2222,c:3333}
 
//添加到JS中
//转JSON
var DataDeal = {
//将从form中通过$('#form').serialize()获取的值转成json
   formToJson: function (data) {
       data=data.replace(/&/g,"\",\"");
       data=data.replace(/=/g,"\":\"");
       data="{\""+data+"\"}";
       data=JSON.parse(data);
       return data;
    },
};


///使用方法
var formData =$('form').serialize();
formData= decodeURIComponent(formData,true);//防止中文乱码
var formjson=DataDeal.formToJson(formData);//转化为json
