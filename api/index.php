<?php
	
	require '../vendor/autoload.php';
	$app = new \Slim\Slim();

	$app->post('/login', 'login');
	$app->post('/newaccount', 'createAccount');
	$app->post('/paymentinfo', 'getPaymentInfo');
	$app->post('/orders', 'createOrder');
	$app->get('/locations', 'findTrucks');
	$app->get('/menu', 'getMenu');

	$app->run();

	// WORKING
	function login()
	{
		$app = \Slim\Slim::getInstance();
		$request = $app->request();
		$loginInfo = json_decode($request->getBody());
		$sql = "SELECT user_id, given_name, surname, email FROM Users WHERE email = :email and password = :password";
		try 
		{
			if(isset($loginInfo))
			{
				$db = getConnection();
				$stmt = $db->prepare($sql);
				$stmt->bindParam("email", $loginInfo->email);
				$stmt->bindParam("password", md5($loginInfo->password));
				$stmt->execute();
				$userinfo = $stmt->fetch(PDO::FETCH_OBJ);
				$db = null;
				$response['info'] = $userinfo;
				echo json_encode($response);
			}
			else
				echo '{"error":{"text": "Bad things happend! JSON was not valid" }}'; 		
		} 
		catch(PDOException $e) 
		{
			echo '{"error":{"text":'. $e->getMessage() .'}}'; 
		}
	}

	// WORKING
	function createAccount()
	{
		$sql = "INSERT INTO Users (`given_name`, `surname`, `email`, `password`, `phone_no`, `credit_type`, `credit_no`)
		VALUES (:fname, :lname, :email, :password, :phonenumber, :creditcard, :ccnumber)";
		$app = \Slim\Slim::getInstance();
		$request = $app->request();
		$newAccount = json_decode($request->getBody());
		try 
		{
			if(isset($newAccount))
			{
				$db = getConnection();
				$stmt = $db->prepare($sql);
				$stmt->bindParam("fname", $newAccount->fname);
				$stmt->bindParam("lname", $newAccount->lname);
				$stmt->bindParam("email", $newAccount->email);
				$stmt->bindParam("password", md5($newAccount->password));
				$stmt->bindParam("phonenumber", $newAccount->phonenumber);
				$stmt->bindParam("ccnumber", $newAccount->ccnumber);
				$stmt->bindParam("creditcard", $newAccount->creditcard);
				$stmt->execute();
				$db = null;
			}
			else
				echo '{"error":{"text": "Bad things happend! JSON was not valid" }}'; 		
		} 
		catch(PDOException $e) 
		{
			echo '{"error":{"text":'. $e->getMessage() .'}}'; 
		}

		$sql = "SELECT user_id, given_name, surname, email FROM Users WHERE email = :email and password = :password";

		try
		{
			$db = getConnection();
			$stmt = $db->prepare($sql);
			$stmt->bindParam("email", $newAccount->email);
			$stmt->bindParam("password", md5($newAccount->password));
			$stmt->execute();
			$userinfo = $stmt->fetch(PDO::FETCH_OBJ);
			$db = null;
			$response['info'] = $userinfo;
			echo json_encode($response);
		}
		catch(PDOException $e) 
		{
			echo '{"error":{"text":'. $e->getMessage() .'}}'; 
		}

	}

	// NOT TESTED, BUT FUNCTIONAL
	function getPaymentInfo()
	{
		$request = \Slim\Slim::getInstance()->request();
		$userID = json_decode($request->getBody());
		$sql = "SELECT given_name, surname, email, phone_no, credit_type, credit_no FROM Users WHERE user_id = :id";
		try
		{
			$db = getConnection();
			$stmt = $db->prepare($sql);
			$stmt->bindParam("id", $userID->user_id);
			$stmt->execute();
			$userInfo = $stmt->fetch(PDO::FETCH_OBJ);
			$db = null;
			$response['info'] = $userInfo;
			echo json_encode($response);
		}
		catch(PDOException $e) 
		{
			echo '{"error":{"text":'. $e->getMessage() .'}}'; 
		}
	}

	// NOT COMPLETED
	function createOrder()
	{
		//change for Taco Orders
		$request = \Slim\Slim::getInstance()->request();
		$order = json_decode($request->getBody());
		$sql = "INSERT INTO Orders  VALUES (:name, :grapes, :country, :region, :year, :description)";
		try {
			$db = getConnection();
			$stmt = $db->prepare($sql);  
			$stmt->bindParam("name", $wine->name);
			$stmt->bindParam("grapes", $wine->grapes);
			$stmt->bindParam("country", $wine->country);
			$stmt->bindParam("region", $wine->region);
			$stmt->bindParam("year", $wine->year);
			$stmt->bindParam("description", $wine->description);
			$stmt->execute();
			$wine->id = $db->lastInsertId();
			$db = null;
			echo json_encode($wine); 
		} catch(PDOException $e) {
			error_log($e->getMessage(), 3, '/var/tmp/php.log');
			echo '{"error":{"text":'. $e->getMessage() .'}}'; 
		}
	}

	// WORKING
	function findTrucks()
	{
		$sql = "SELECT location_name, address, city, state, zipcode FROM Locations ORDER BY location_name";
		try
		{
			$db = getConnection();
			$stmt = $db->query($sql);
			$locations = $stmt->fetchAll(PDO::FETCH_OBJ);
			$db = null;
			echo '{"locations": ' . json_encode($locations) . '}';
		}
		catch(PDOException $e) 
		{
			echo '{"error":{"text":'. $e->getMessage() .'}}'; 
		}
	}

	function getMenu()
	{
		$sql = "SELECT * FROM Menu";
		try
		{
			$db = getConnection();
			$stmt = $db->query($sql);
			while($row = $stmt->fetch(PDO::FETCH_ASSOC))
			{
				$type = $row['itemType'];
				$info = array('id' => $row['tacoFixinId'], 'name' => $row['name'], 'price' => (double)$row['price'], 'heatRating' => $row['heatRating']);
				$menu[$type][] = $info;
			}
			echo '{"menu": ' . json_encode($menu) . '}';
		}
		catch(PDOException $e) 
		{
			echo '{"error":{"text":'. $e->getMessage() .'}}'; 
		}
	}

	// WORKING
	function getConnection() 
	{
		$dbhost="127.0.0.1";
		$dbuser="root";
		$dbpass="root";
		$dbname="TacoTruck";
		$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
		$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		return $dbh;
	}

?>