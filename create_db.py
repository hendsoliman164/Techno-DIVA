import sqlite3  # استيراد مكتبة SQLite

# إنشاء قاعدة البيانات وفتح اتصال بها
connection = sqlite3.connect("my_database.db")  # اسم قاعدة البيانات (سيتم إنشاؤها إذا لم تكن موجودة)

# إنشاء كائن لتنفيذ الأوامر
cursor = connection.cursor()

# إنشاء جدول المستخدمين (Users)
cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,  -- رقم تسلسلي
    name TEXT NOT NULL,                    -- الاسم (نصي)
    email TEXT NOT NULL UNIQUE             -- البريد الإلكتروني (فريد)
)
""")

# إنشاء جدول المنتجات (Products)
cursor.execute("""
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,  -- رقم تسلسلي
    name TEXT NOT NULL,                    -- اسم المنتج
    price REAL NOT NULL                    -- السعر (رقم عشري)
)
""")

# إدخال بيانات في جدول المستخدمين
cursor.execute("INSERT INTO users (name, email) VALUES (?, ?)", ("Hend Suleiman", "hend@example.com"))

# إدخال بيانات في جدول المنتجات
cursor.execute("INSERT INTO products (name, price) VALUES (?, ?)", ("Laptop", 999.99))

# قراءة جميع المستخدمين
cursor.execute("SELECT * FROM users")
users = cursor.fetchall()  # جلب جميع النتائج
print("Users:")
for user in users:
    print(user)

# قراءة جميع المنتجات
cursor.execute("SELECT * FROM products")
products = cursor.fetchall()
print("\nProducts:")
for product in products:
    print(product)

# حفظ التغييرات وإغلاق الاتصال
connection.commit()
connection.close()

print("Database created, data inserted, and data retrieved successfully!")
