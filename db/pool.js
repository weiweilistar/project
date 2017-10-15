var mysql=require('mysql');
var pool=global.pool;
if(!pool){
    //创建连接池
	pool=mysql.createPool({
		database:'web1702',
		user:'root',
		password:'root'
	});
    //将连接池挂载到global
	global.pool=pool;
}
//封装获取链接的方法
function getConnection(){
	return new Promise(function(resolve,reject){
    		pool.getConnection(function(err,conn){
    			if(!err){
    				resolve(conn);
    			}else{
    				reject(err);
    			}
    		});
    	});
}
//封装执行sql的方法
//此时的getConnection()是上面定义的getConnection方法
function execute(sql){
    return new Promise(function(resolve,reject){      
        var connection;
        getConnection().then(function(conn){
            connection=conn;
            conn.query(sql,function(err,result){
                if(!err){
                    resolve(result);
                }else{
                    reject(err);
                }
            });
        }).catch(function(err){
            reject(err);
        }).finally(function(){
            if(connection){
                connection.release();
                console.log("释放完成");  
            }
        });
    }); 
}
module.exports={getConnection,execute};

/*当关闭连接池的时候，test会在控制台上打印出报错!表明数据传递pool-studentDB-test*/