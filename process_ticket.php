<?php
// إعدادات قاعدة البيانات
$servername = "localhost"; // عادةً ما يكون localhost
$username = "hend"; // اسم المستخدم
$password = "Qwer123aa"; // كلمة المرور
$dbname = "mrgex855"; // اسم قاعدة البيانات

// إنشاء الاتصال
$conn = new mysqli($servername, $username, $password, $dbname);

// التحقق من الاتصال
if ($conn->connect_error) {
    die("فشل الاتصال: " . $conn->connect_error);
}

// استلام البيانات من الفورم
$paymentId = $_POST['paymentId'];
$payerId = $_POST['payerId'];
$ticketType = $_POST['ticketType'];
$quantity = $_POST['quantity'];
$totalPrice = $_POST['totalPrice'];

// الحصول على تفاصيل الدفع من PayPal (تأكد من أن PayPal الإعدادات تعمل بشكل صحيح)
// في هذا المثال، نتعامل مع تفاصيل الدفع من PayPal بعد اكتمال العملية

// التحقق من نجاح الدفع (هنا مثال: الدفع تم بنجاح)
if ($paymentId && $payerId) {
    // دفع ناجح، الآن نقوم بإدخال البيانات في قاعدة البيانات
    $sql = "INSERT INTO tickets (ticket_type, quantity, total_price, payment_id, payer_id)
            VALUES ('$ticketType', $quantity, $totalPrice, '$paymentId', '$payerId')";

    if ($conn->query($sql) === TRUE) {
        // الدفع تم بنجاح وأُدخلت البيانات في قاعدة البيانات
        echo json_encode(['status' => 'success', 'message' => 'تم الدفع بنجاح!']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'حدث خطأ أثناء إدخال البيانات في قاعدة البيانات.']);
    }
} else {
    // حدث خطأ أثناء الدفع
    echo json_encode(['status' => 'error', 'message' => 'حدث خطأ أثناء إتمام الدفع.']);
}

// إغلاق الاتصال
$conn->close();
?>
