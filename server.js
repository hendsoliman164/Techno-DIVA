const express = require('express');
const paypal = require('@paypal/checkout-server-sdk');
const bodyParser = require('body-parser');

// إعداد التطبيق
const app = express();
app.use(bodyParser.json());

// إعداد بيانات الاتصال بـ PayPal (Client ID و Secret Key)
const clientId = 'AWlCMKO6vVm4Lfaqzkk7ztJbVMRKFlIIur83A0o4z1Cmh9DxScO5tNQnGBvQlWNuCkHu4DTL_CGPmpiH';
const clientSecret = 'ECCQoEqWsqwNsbalTn8-JLynxao7Oq1pKmgQSEIKCfsukjrrnhP18rHnKtkFYcDmLXR8bFgMmfthEUVu';

// إعداد البيئة الخاصة بـ PayPal
const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const paypalClient = new paypal.core.PayPalHttpClient(environment);

// طلب إنشاء الدفع
app.post('/create-order', async (req, res) => {
    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD',
                value: '100.00', // المبلغ
            },
        }],
    });

    try {
        const order = await paypalClient.execute(request);
        res.json(order); // رد الطلب إلى العميل
    } catch (error) {
        res.status(500).send(error);
    }
});

// طلب التقاط المعاملة بعد الموافقة من العميل
app.post('/capture-order', async (req, res) => {
    const { orderId } = req.body;

    const request = new paypal.orders.OrdersCaptureRequest(orderId);
    request.requestBody({});

    try {
        const capture = await paypalClient.execute(request);
        res.json(capture);
    } catch (error) {
        res.status(500).send(error);
    }
});

// تشغيل الخادم على المنفذ 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
