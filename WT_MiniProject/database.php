<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = $_POST['subject'];
    $conn = new mysqli('localhost', 'root', '', 'contactdb');
    if ($conn->connect_error) {
        die('Connection Failed : ' .$conn->connect_error);
    } else {
        $stmt = $conn->prepare("insert into connect(name, email,  message,subject) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $name, $email, $message, $subject);
        $stmt->execute();
        echo "<script> window.location.href='Registrationdone.html';</script>";
        $stmt->close();
        $conn->close();
    }
?>
