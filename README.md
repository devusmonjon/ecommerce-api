
# E-Commerce API

Bu loyiha Node.js, Express.js, MongoDB, JWT, BcryptJS va Multer kutubxonalaridan foydalangan holda yaratilgan.

## Texnologiyalar

- **Node.js** 
- **Express.js**
- **MongoDB**
- **JWT** (JSON Web Token)
- **BcryptJS** (parollarni shifrlash)
- **Multer** (fayllarni yuklash)

## O'rnatish

### Talablar
- Node.js va npm
- MongoDB

### O'rnatish bo'yicha ko'rsatmalar

1. **Loyihani klonlash:**
    ```bash
    git clone https://github.com/username/repo-name.git
    cd repo-name
    ```

2. Zaruriy modullarni o'rnatish:
    ```bash
    npm install
    ```

3. Muhit o'zgaruvchilarini sozlash: `.env` faylini yarating va quyidagi ma'lumotlarni kiriting:
    ```bash
    MONGO_URI=mongodb://<username>:<password>@localhost:27017/<dbname>
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```

4. Serverni ishga tushirish:
    ```bash
    npm start
    ```

## API Endpointlar

### Foydalanuvchilar

#### Ro'yxatdan o'tish
- **URL:** `/api/auth/register`
- **Metod:** `POST`
- **Ma'lumotlar:** 
    ```json
    {
      "name": "User Name",
      "email": "user@example.com",
      "password": "yourpassword"
    }
    ```

#### Kirish
- **URL:** `/api/auth/login`
- **Metod:** `POST`
- **Ma'lumotlar:** 
    ```json
    {
      "email": "user@example.com",
      "password": "yourpassword"
    }
    ```

#### Foydalanuvchi profilini olish
- **URL:** `/api/users/profile`
- **Metod:** `GET`
- **Hujjat:** 
    `Authorization: Bearer <token>`

### Mahsulotlar

#### Mahsulot qo'shish
- **URL:** `/api/products`
- **Metod:** `POST`
- **Ma'lumotlar:**
    - `name` : Mahsulot nomi
    - `price` : Mahsulot narxi
    - `description` : Mahsulot tavsifi
    - `countInStock` : Mahsulot miqdori
    - `image` : Mahsulot rasm (file)

#### Barcha mahsulotlarni olish
- **URL:** `/api/products`
- **Metod:** `GET`

#### Bitta mahsulotni olish
- **URL:** `/api/products/:id`
- **Metod:** `GET`

#### Mahsulotni yangilash
- **URL:** `/api/products/:id`
- **Metod:** `PUT`
- **Ma'lumotlar:**
    - `name` : Mahsulot nomi
    - `price` : Mahsulot narxi
    - `description` : Mahsulot tavsifi
    - `countInStock` : Mahsulot miqdori
    - `image` : Mahsulot rasm (file)

#### Mahsulotni o'chirish
- **URL:** `/api/products/:id`
- **Metod:** `DELETE`

## Xatolarni boshqarish
API ichida xatolarni boshqarish uchun `errorMiddleware.js` fayli orqali barcha xatolarni umumiy formatda qaytarish imkoniyati mavjud.

## Yordam kerakmi?
Agar sizda biron bir savol yoki muammo bo'lsa, albatta, murojaat qiling!
