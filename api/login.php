<?php
    $user = $_POST["user"];
    $pass = $_POST["pass"];
    if ($user == "admin" && $pass == "admin") {
        header("Location: ../home-login.html")
    }
    else {
        echo "wrong password"
    }
?>