<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
</head>
<body>
    
    <h1>Form</h1>
    
    <form method="POST">
        <input type="text" name="something">
        <button>Submit</button>
    </form>
    
    <?php
        if(isset($_POST["something"])){
            $name = $_POST["something"];
            echo $name." is a good person";
            
        }

        
    ?>
    
    
</body>
</html>