if ($paymentId && $payerId) {
    $sql = "INSERT INTO tickets (ticket_type, quantity, total_price, payment_id, payer_id)
            VALUES ('$ticketType', $quantity, $totalPrice, '$paymentId', '$payerId')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['status' => 'success', 'message' => 'تم الدفع بنجاح!']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'حدث خطأ أثناء إدخال البيانات في قاعدة البيانات.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'حدث خطأ أثناء إتمام الدفع.']);
}
