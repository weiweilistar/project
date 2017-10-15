let express=require('express');
let route=express.Router();
let studentDB=require('../db/studentDB');
let Student=require('../model/Student');
route.get('/findAll',(req,resp)=>{
	studentDB.findAll().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});
//通过id查询
route.get('/findById',(req,resp)=>{
	studentDB.findById(req.query.id).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});
//模糊查询
route.get('/query/:keys',(req,resp)=>{
	//console.log(req.params);
	studentDB.query(req.params.keys).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	})
});
//录入
route.post('/save',(req,resp)=>{
	let student=new Student();
	Object.assign(student,req.body);
	studentDB.save(student).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});
//修改
route.post('/update',(req,resp)=>{
	let student=new Student();
	Object.assign(student,req.body);
	studentDB.update(student).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});
//删除
route.post('/batchDelete',(req,resp)=>{
	studentDB.batchDelete(req.body).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});
module.exports = route;