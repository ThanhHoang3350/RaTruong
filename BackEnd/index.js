const express = require('express');
const cors = require ('cors');
const mysql = require('mysql2');
var bodyParser = require('body-parser');

const app = express();

var SELLECT_ALL_CUSTOMER_QUERY = "SELECT * FROM user WHERE user.type = 'customer'";
var SELLECT_ALL_SHIPPER_QUERY = "SELECT * FROM Shipper";
var SELLECT_BOOKING_QUERY = 'SELECT booking.id, user.firstName, user.lastName, booking.shipperId, service.name, booking.description, booking.address, booking.rating,booking.feedback,booking.createdAt,booking.updatedAt FROM booking INNER JOIN user ON user.id = booking.customerId INNER JOIN service ON booking.serviceId = service.id';
var SELLECT_ALL_PRODUCT_QUERY = "SELECT * FROM Product";
var SELLECT_ALL_TYPEPRODUCT_QUERY = "SELECT * FROM TypeProduct";
var SELLECT_ALL_MARKET_QUERY = "SELECT * FROM Market";
var DELETE_FROM_USER = "DELETE FROM user WHERE id = ?";

const connection = mysql.createConnection({
 	host: 'localhost',
 	user: 'root',
 	password: '12345678',
 	database: 'MarketOnline'
});

connection.connect(function(err) {
 	if (err) {
 		throw err;
 	}else {
 		console.log('connected')
 	}
});

app.use(cors());

//show booking
app.get('/booking', (req, res)=>{
	connection.query(SELLECT_BOOKING_QUERY, (err,results)=>{
		if(err) {
			return res.send(err)
		}
		else {
			return res.json({
				data: results
			})
		}
	});
});

//show type-product
app.get('/typeproduct', (req, res)=>{
  connection.query(SELLECT_ALL_TYPEPRODUCT_QUERY, (err,results)=>{
    if(err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: results
      })
    }
  });
});

//show market
app.get('/market', (req, res)=>{
  connection.query(SELLECT_ALL_MARKET_QUERY, (err,results)=>{
    if(err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: results
      })
    }
  });
});

//show customer
app.get('/customer', (req, res)=>{
	connection.query(SELLECT_ALL_CUSTOMER_QUERY, (err,results)=>{
		if(err) {
			return res.send(err)
		}
		else {
			return res.json({
				data: results
			})
		}
	});
});

//show product
app.get('/products', (req, res)=>{
  connection.query(SELLECT_ALL_PRODUCT_QUERY, (err,results)=>{
    if(err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: results
      })
    }
  });
});

// delete user
app.delete('/deleteUser/:id',(req,res) =>{
	connection.query(DELETE_FROM_USER, [req.params.id], (err,results)=>{
		if(err) {
			return res.send(err)
		}
		else {
			return res.send('delete succcess')
		}
	});
})

//show shiper
app.get('/shipper', (req, res)=>{
	connection.query(SELLECT_ALL_SHIPPER_QUERY,(err,results)=>{
		if(err) {
			return res.send(err)
		}
		else {
			return res.json({
				data: results
			})
		}
	});
});

//get an customer+shipper
app.get('/user/:id', (req, res)=>{
	var SELLECT_FORM_USER = "SELECT * FROM user WHERE user.id="+req.params.id
	connection.query(SELLECT_FORM_USER,(err,results)=>{
		if(err) {
			return res.send(err)
		}
		else {
			return res.json({
				data: results
			})
		}
	});
});

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }));

//update an customer+shiper
app.post('/user/:id',(req, res)=>{
	const {id} = req.params;
	const {email, phoneNumber, lastName, firstName} = req.body;
	//console.log(req.body);
	var UPDATE_FORM_USER = `UPDATE user SET email="${email}",phoneNumber="${phoneNumber}",lastName="${lastName}",firstName="${firstName}" WHERE user.id="${id}"`
	connection.query(UPDATE_FORM_USER,(err,results)=>{
		if(err) {
			return res.send(err)
		}
		else {
			return res.send('update succcess')
		}
	});
});

//thêm user
app.post('/adduser', (req, res)=>{
	const {id,email,emailVerified,phoneNumber,password,firstName,type,lastName,walletValue,createdAt,updatedAt} = req.body;
	console.log(req.body);
	var INSERT_USER_QUERY = `INSERT INTO user (id,email,emailVerified,phoneNumber,password,firstName,type,lastName,walletValue,createdAt,updatedAt)
	VALUES ('${id}','${email}','${emailVerified}','${phoneNumber}','${password}','${firstName}','${type}','${lastName}','${walletValue}','${createdAt}','${updatedAt}')`
	connection.query(INSERT_USER_QUERY,(err,result)=>{
		if(err) {
			return res.send(err)
		}
		else {
			return res.send('successfully added user')
		}
	});
});

//thêm product
app.post('/addproduct', (req, res)=>{
  const { productName, price, info, image, mass, origin, status, typeId, marketId } = req.body;
  console.log(req.body);
  var INSERT_PRODUCT_QUERY = `INSERT INTO product (productName, price, info, image, mass, origin, status, typeId, marketId)
  VALUES ('${productName}', '${price}', '${info}', '${image}', '${mass}', '${origin}', '${status}', '${typeId}', '${marketId}')`
  connection.query(INSERT_PRODUCT_QUERY ,(err,result)=>{
    if(err) {
      return res.send(err)
    }
    else {
      return res.send('successfully added product')
    }
  });
});


app.listen(4000, () =>{
	console.log(`Products server listening on port 4000`)
});

