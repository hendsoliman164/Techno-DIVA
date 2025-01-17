<?php
// إعدادات الاتصال بقاعدة البيانات
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "techno_diva_events";

// إنشاء الاتصال
$conn = new mysqli($servername, $username, $password, $dbname);

// التحقق من الاتصال
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// تحقق من أن الطلب هو POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // الحصول على البيانات المدخلة من نموذج التذاكر
    $event_name = $_POST['event_name'];
    $attendee_name = $_POST['attendee_name'];
    $attendee_email = $_POST['attendee_email'];
    $ticket_type = $_POST['ticket_type']; // Regular or other types if needed

    // إضافة الحجز إلى قاعدة البيانات
    $sql = "INSERT INTO bookings (event_name, attendee_name, attendee_email, ticket_type) 
            VALUES ('$event_name', '$attendee_name', '$attendee_email', '$ticket_type')";

    if ($conn->query($sql) === TRUE) {
        echo "Booking successfully saved!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// إغلاق الاتصال بقاعدة البيانات بعد الانتهاء
$conn->close();
?>
