<?php

var_dump($_post);

  $name = $_post['name'];
  $email = $_post['email'];
  $contactNumber=$_post['contactNumber'];
  $Menu=$_post['Menu'];
  $Price=$_post['Price'];
  $Quantity=$_post['Quantity'];
  $Amount=$_post['Amount'];
  $conn = new mysql('localhost','root','','test');
   
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(name,email,contactNumber,Menu,Price,Quantity,Amount) values(?,?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("sssssi",$name,$email,$contactNumber,$Menu,$Price,$Quantity,$Amount);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}	 
?>
