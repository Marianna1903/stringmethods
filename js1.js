// let str = "Im anunn e Anna";
// let arr = str.split("");
// for(var i=0;i<arr.length;i++){
// 	if(arr[i]==="n"){
// 		arr[i]="xy";
// 	}
// }
// let str2 = arr.join("");
// console.log(str2)


// function sim(){
// 	var a = prompt();
// 	var arr = a.split("");
// 	for(var i=0;i<arr.length/2;i++){
// 		for(var j=arr.length-1;j>arr.length/2;j++){
// 			if(arr[i]==arr[j]){
// 				return "simetrik";
// 			}else{
// 				return "simetrik che";
// 			}
// 		}
// 	}
// }
// console.log(sim());


// function fullName(){
// 	var name = prompt("Name");
// 	var surname = prompt("Surname");
// 	var fathers_name = prompt("Fathers name");
// 	console.log(name+" "+surname+" "+fathers_name)
// } 
// fullName();


// let p = prompt("Hayastani mayraqaxaqy");
// let answer = "erevan";
// let lower = p.toLowerCase();
// if(lower == answer){
// 	alert("chisht e");
// }else{
// 	alert("chisht che");
// }


// var students = ["Տիգրան","Սամվել","John"];	
// for(var i=0;i<students.length;i++){
// 	for(var j=0;j<students[i].length;j++){
// 		if(students[i].charCodeAt([j])<1328 || students[i].charCodeAt([j])>1423){
// 			console.log(students[i].charCodeAt([j])+" "+students[i][j]);
// 		}
// 	}
// }

// let str = "Ես սիրում եմ ծրագրավորել";
// console.log(str.length);

// console.log(str.toUpperCase());

// console.log(str.indexOf("գ"));

// if(str.includes("ո")==true){
// 	console.log(str.lastIndexOf("ո"));
// }else{
// 	console.log("chi gtnvel");
// }

// var str = "My name is Marianna";
// var arr = str.split(" ");
// var arr2 = arr.join(",")
// console.log(arr2);

var arr = ["john","JACOB","jinGleHeimer","schmidt"];
var arr2 = arr.map((v)=>{
	return v.toUpperCase();
})
console.log(arr2)







