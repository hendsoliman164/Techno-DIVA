// استخدم الـ CLIENT_ID و CLIENT_SECRET الخاص بك هنا
const clientId = 'AWlCMKO6vVm4Lfaqzkk7ztJbVMRKFlIIur83A0o4z1Cmh9DxScO5tNQnGBvQlWNuCkHu4DTL_CGPmpiH'; // استبدل بـ CLIENT_ID الخاص بك
const clientSecret = 'ECCQoEqWsqwNsbalTn8-JLynxao7Oq1pKmgQSEIKCfsukjrrnhP18rHnKtkFYcDmLXR8bFgMmfthEUVu'; // استبدل بـ CLIENT_SECRET الخاص بك

// دمجهم معاً باستخدام الفاصلة (:)
const credentials = `${clientId}:${clientSecret}`;

// تشفير السلسلة في Base64
const encodedCredentials = btoa(credentials);

// الآن يمكنك استخدام السلسلة المشفرة في الـ API

// إعداد الطلب
fetch('https://api.paypal.com/v1/oauth2/token', {
  method: 'POST',
  headers: {
    'Authorization': `Basic ${encodedCredentials}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams({
    'grant_type': 'client_credentials'
  })
})
  .then(response => response.json())
  .then(data => {
    console.log('Access Token:', data.access_token); // طباعة التوكن
  })
  .catch(error => {
    console.error('Error:', error);
  });
