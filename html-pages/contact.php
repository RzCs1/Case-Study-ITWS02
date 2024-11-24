<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    $dateTime = date('Y-m-d H:i:s');

    $file = 'submissions.txt';
    $data = "Name: $name, Email: $email, Message: $message, DateTime: $dateTime\n";
    file_put_contents($file, $data, FILE_APPEND);
}

if (file_exists('submissions.txt')) {
    echo "<h2>Previous Submissions</h2>";
    echo "<table border='1' cellpadding='10'>";
    echo "<tr><th>Name</th><th>Email</th><th>Message</th><th>Date and Time</th></tr>";

    $submissions = file('submissions.txt');
    foreach ($submissions as $submission) {
        list($namePart, $emailPart, $messagePart, $dateTimePart) = explode(", ", $submission);
        
        $name = str_replace("Name: ", "", $namePart);
        $email = str_replace("Email: ", "", $emailPart);
        $message = str_replace("Message: ", "", $messagePart);
        $dateTime = str_replace("DateTime: ", "", $dateTimePart);
        
        echo "<tr>";
        echo "<td>$name</td>";
        echo "<td>$email</td>";
        echo "<td>$message</td>";
        echo "<td>$dateTime</td>";
        echo "</tr>";
    }
    echo "</table>";
}
?>
</body>
</html>