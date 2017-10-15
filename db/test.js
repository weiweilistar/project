require('babel-polyfill');
var studentDB=require('./studentDB');
var Student=require('../model/Student');
/*测试findAll方法,后台可以接受到数据库的数据
studentDB.findAll().then(function(data){
	console.log(data);
}).catch(function(error){
	console.log(error);
	console.log("报错");
});

*/
/*添加
var student=new Student(null,'李四','男','1999-01-01',null);

studentDB.save(student).then(function(data){
	console.log(data);
}).catch(function(error){
	console.log(error);
	console.log("报错");
});
*/
/*
//通过ｉｄ进行更新
var student=new Student(14,'王二','男','1994-01-01',null);

studentDB.update(student).then(function(data){
	console.log(data);
}).catch(function(error){
	console.log(error);
	console.log("报错");
});
*/
/*
//删除ids一定是数组类型的值
var ids = [12,13];
studentDB.batchDelete(ids).then(function(data){
	console.log(data);
}).catch(function(error){
	console.log(error);
	console.log("报错");
});
*/
/*
studentDB.query('l').then(function(data){
	console.log(data);
}).catch(function(error){
	console.log(error);
	console.log("报错");
});
*/
/*
studentDB.findById(4).then(function(data){
	console.log(data);
}).catch(function(error){
	console.log(error);
	console.log("报错");
});
*/