var obj =[{a:1},{b:2}];

for (i=0;i<obj.length;i++) {
		for(var key in obj[i]){
			alert(key); alert(obj[i][key]);
		};
};