<div align="center">

# 📊 داش‌استک

### قالب حرفه‌ای داشبورد ادمین

[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-purple)](https://vitejs.dev/)
[![Material UI](https://img.shields.io/badge/MUI-6.4-blue)](https://mui.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](./LICENSE)

[English](./README.md) | [فارسی](./README.fa.md)

</div>

---

## 📋 درباره پروژه

**داش‌استک** یک قالب مدرن و جامع برای داشبورد ادمین است که با React، Material UI و TailwindCSS v4 ساخته شده است. این پروژه مجموعه کاملی از کامپوننت‌ها و صفحات را برای شروع سریع توسعه پنل‌های ادمین با رابط کاربری زیبا، واکنش‌گرا و حرفه‌ای فراهم می‌کند.

**ویژگی‌های کلیدی:**

- 🎨 کامپوننت‌های زیبای Material UI با استایل‌دهی TailwindCSS
- 📊 نمودارهای تعاملی و مصورسازی داده‌ها
- 📅 تقویم کامل با قابلیت مدیریت رویدادها
- 📋 جداول پیشرفته داده با فیلتر و مرتب‌سازی
- 🌓 پشتیبانی از تم روشن/تاریک
- 📱 طراحی کاملاً واکنش‌گرا
- ⚡ توسعه سریع با Vite

---

## ✨ ویژگی‌ها

### 📊 داشبورد و تحلیل‌ها

- کارت‌های آمار بلادرنگ
- نمودارهای تعاملی (ApexCharts)
- مصورسازی داده‌ها با انواع مختلف نمودار
- نشانگرهای پیشرفت و متریک‌ها
- پیگیری فروش و درآمد

### 📅 تقویم و رویدادها

- یکپارچه‌سازی کامل تقویم (React Big Calendar)
- زمان‌بندی و مدیریت رویدادها
- پشتیبانی از رویدادهای تکرارشونده (RRule)
- نمای چندگانه تقویم (ماه، هفته، روز)
- قابلیت کشیدن و رها کردن

### 📋 مدیریت داده‌ها

- گریدهای پیشرفته داده (MUI Data Grid)
- مرتب‌سازی، فیلتر و صفحه‌بندی
- قابلیت ویرایش درون‌خطی
- قابلیت صادرات داده
- عملیات دسته‌ای

### 🛍️ ویژگی‌های فروشگاهی

- لیست و مدیریت محصولات
- نمایش جزئیات محصول
- لیست و پیگیری سفارشات
- مدیریت موجودی انبار
- جداول قیمت‌گذاری

### 👥 مدیریت کاربران

- لیست کاربران با فیلتر
- صفحات پروفایل کاربر
- آیتم‌های اطلاعات حرفه‌ای
- مدیریت مخاطبین
- کنترل دسترسی مبتنی بر نقش

### 🎨 کامپوننت‌های UI

- ناوبری سایدبار مدرن
- جداول داده واکنش‌گرا
- فرم‌ها و ورودی‌های زیبا
- انتخابگر تاریخ/زمان
- کتابخانه آیکون‌ها (React Icons)
- اعلان‌های Toast
- دیالوگ‌های Modal

### 🌐 مسیریابی و ناوبری

- یکپارچه‌سازی React Router v7
- مسیرهای تودرتو
- مسیرهای محافظت‌شده
- صفحه 404 (یافت نشد)
- انتقال نرم بین صفحات

---

## ⚙️ پشته فناوری

### فریم‌ورک فرانت‌اند

- **React 18.3** - کتابخانه UI
- **Vite 6.0** - ابزار بیلد و سرور توسعه
- **React Router DOM 7.1** - مسیریابی سمت کلاینت

### کتابخانه‌های UI

- **Material UI 6.4** - کتابخانه کامپوننت
- **MUI Icons** - سیستم آیکون
- **MUI X Data Grid 7.25** - جداول پیشرفته
- **MUI X Date Pickers 7.26** - ورودی‌های تاریخ/زمان
- **TailwindCSS 4.0** - CSS utility-first
- **React Icons 5.4** - آیکون‌های اضافی

### نمودارها و مصورسازی

- **ApexCharts 4.4** - کتابخانه نمودار مدرن
- **React ApexCharts 1.7** - Wrapper React

### تقویم

- **React Big Calendar 1.17** - کامپوننت تقویم
- **RRule 2.8** - رویدادهای تکرارشونده
- **Dayjs 1.11** - کتابخانه تاریخ
- **Moment 2.30** - تجزیه تاریخ
- **Moment Timezone 0.5** - پشتیبانی منطقه زمانی

### ابزارهای توسعه

- **ESLint 9.17** - بررسی کد
- **Prettier 3.4** - فرمت‌بندی کد
- **Prettier Plugin TailwindCSS** - مرتب‌سازی کلاس‌ها

---

## 🏗️ ساختار پروژه

```
dashstack/
├── src/
│   ├── assets/                 # فایل‌های استاتیک (تصاویر، فونت‌ها و...)
│   ├── components/             # کامپوننت‌های قابل استفاده مجدد
│   │   ├── charts/            # کامپوننت‌های نمودار
│   │   │   ├── Contacts.jsx
│   │   │   ├── DashboardStats.jsx
│   │   │   ├── Events.jsx
│   │   │   ├── LastProductsData.jsx
│   │   │   ├── LastVisited.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── ProductsListTable.jsx
│   │   │   ├── ProductsStatsData.jsx
│   │   │   ├── ProgressData.jsx
│   │   │   ├── SalesData.jsx
│   │   │   ├── SidebarLinks.jsx
│   │   │   ├── UserProfessionalInfoItems.jsx
│   │   │   └── Users.jsx
│   │   └── common/            # کامپوننت‌های مشترک
│   ├── constants/             # ثابت‌ها و پیکربندی‌ها
│   ├── pages/                 # کامپوننت‌های صفحه
│   │   ├── Calendar/          # صفحه تقویم
│   │   ├── Contact/           # صفحه تماس
│   │   ├── Favorites/         # صفحه علاقه‌مندی‌ها
│   │   ├── Home/              # داشبورد/صفحه اصلی
│   │   ├── Inbox/             # صفحه پیام‌ها
│   │   ├── NotFound/          # صفحه 404
│   │   ├── OrderLists/        # صفحه سفارشات
│   │   ├── Pricing/           # صفحه قیمت‌گذاری
│   │   ├── Products/          # صفحه محصولات
│   │   ├── ProductStock/      # صفحه موجودی انبار
│   │   ├── Settings/          # صفحه تنظیمات
│   │   ├── Todo/              # صفحه وظایف
│   │   ├── User/              # صفحه پروفایل کاربر
│   │   └── UsersList/         # صفحه لیست کاربران
│   ├── utils/                 # توابع کمکی
│   │   └── userUtils.jsx
│   ├── App.jsx                # کامپوننت اصلی برنامه
│   ├── index.css              # استایل‌های سراسری
│   ├── main.jsx               # نقطه ورود
│   ├── routes.jsx             # پیکربندی مسیرها
│   └── theme.js               # پیکربندی تم MUI
├── public/                     # فایل‌های عمومی
├── index.html                  # قالب HTML
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 شروع سریع

### پیش‌نیازها

- Node.js (نسخه 18 یا بالاتر)
- npm یا yarn یا pnpm

### نصب

```bash
# 1. کلون کردن مخزن
git clone https://github.com/yourusername/dashstack.git
cd dashstack

# 2. نصب وابستگی‌ها
npm install
# یا
yarn install
# یا
pnpm install

# 3. شروع سرور توسعه
npm run dev
# یا
yarn dev
# یا
pnpm dev

# 4. باز کردن مرورگر
# از آدرس http://localhost:5173 بازدید کنید
```

### اسکریپت‌های موجود

```bash
# توسعه
npm run dev              # شروع سرور توسعه

# بیلد
npm run build           # بیلد برای تولید
npm run preview         # پیش‌نمایش بیلد تولید

# کیفیت کد
npm run lint            # اجرای ESLint
```

---

## 🖼️ تصاویر محیط برنامه

### داشبورد

![Dashboard](./docs/screenshots/dashboard.webp) _نمای کلی آمار، شاخص‌های کلیدی عملکرد و تحلیل‌ها با نمودارهای تعاملی_

![Dashboard Analytics](./docs/screenshots/dashboard_2.webp) _نمای تحلیل‌های تفصیلی با روندهای فروش و متریک‌های عملکرد_

### محصولات

![Products](./docs/screenshots/products.webp) _رابط لیست محصولات با فیلتر پیشرفته، مرتب‌سازی و مدیریت موجودی_

### جزئیات محصول

![Product Details](./docs/screenshots/products_details.webp) _نمای جامع اطلاعات محصول با تصاویر، قیمت و جزئیات موجودی_

### وبلاگ‌ها

![Blogs](./docs/screenshots/blogs.webp) _مدیریت پست‌های وبلاگ با لیست، ویرایش و کنترل‌های انتشار_

### نمای تقویم

![Calendar](./docs/screenshots/calendar.webp) _تقویم تعاملی با زمان‌بندی رویدادها، رویدادهای تکرارشونده و نمای چندگانه_

### مخاطبین

![Contacts](./docs/screenshots/contacts.webp) _رابط مدیریت مخاطبین با جستجو، فیلتر و دسترسی سریع_

### قیمت‌گذاری

![Pricing](./docs/screenshots/pricing.webp) _جداول حرفه‌ای قیمت‌گذاری با مقایسه پلن‌ها و ویژگی‌ها_

### کاربران

![Users](./docs/screenshots/users.webp) _مدیریت کاربران با گرید پیشرفته داده، تخصیص نقش و کنترل وضعیت_

### جزئیات کاربر

![User Details](./docs/screenshots/user_details.webp) _پروفایل کاربری با اطلاعات حرفه‌ای، تاریخچه فعالیت و تنظیمات_

---

## 📄 نمای صفحات

### 📊 داشبورد (صفحه اصلی)

- آمار کلی و شاخص‌های کلیدی عملکرد
- نمودارهای فروش و تحلیل‌ها
- فعالیت‌های اخیر
- دسترسی‌های سریع

### 📅 تقویم

- نمای کامل تقویم
- مدیریت رویدادها
- رویدادهای تکرارشونده
- نمای چندگانه (ماه/هفته/روز)

### 🛍️ محصولات

- لیست محصولات با فیلتر
- جزئیات محصول
- آمار محصولات
- مدیریت موجودی

### 👥 کاربران

- لیست کاربران با گرید پیشرفته
- پروفایل‌های کاربری
- اطلاعات حرفه‌ای
- مدیریت مخاطبین

### 📦 سفارشات

- لیست سفارشات
- پیگیری سفارشات
- جزئیات سفارش
- مدیریت وضعیت

### 📬 صندوق ورودی

- مدیریت پیام‌ها
- رابط شبیه ایمیل
- وضعیت خوانده‌شده/خوانده‌نشده

### ⭐ علاقه‌مندی‌ها

- آیتم‌های مورد علاقه
- دسترسی سریع
- محتوای نشان‌شده

### ✅ وظایف

- مدیریت وظایف
- لیست کارها
- تنظیم اولویت
- پیگیری تکمیل

### 💰 قیمت‌گذاری

- جداول قیمت
- مقایسه پلن‌ها
- لیست ویژگی‌ها

### 📦 موجودی انبار

- مدیریت انبار
- سطوح موجودی
- هشدار موجودی کم

### ⚙️ تنظیمات

- ترجیحات کاربر
- تنظیمات برنامه
- مدیریت پروفایل

---

## 🎨 کامپوننت‌ها

### کامپوننت‌های نمودار

- **DashboardStats** - متریک‌های کلیدی و KPIها
- **SalesData** - نمودارهای فروش و روندها
- **ProductsStatsData** - تحلیل‌های محصول
- **ProgressData** - نشانگرهای پیشرفت
- **LastProductsData** - محصولات اخیر
- **LastVisited** - موارد اخیراً مشاهده‌شده
- **Contacts** - آمار مخاطبین
- **Events** - مصورسازی داده‌های رویداد
- **Pricing** - نمودارهای قیمت
- **Users** - آمار کاربران

### کامپوننت‌های جدول

- **ProductsListTable** - جدول پیشرفته محصولات
- **UserProfessionalInfoItems** - نمایش اطلاعات کاربر

### کامپوننت‌های مشترک

- **SidebarLinks** - ناوبری سایدبار
- **Data Grids** - پیاده‌سازی‌های MUI X Data Grid
- **Date Pickers** - انتخابگر تاریخ/زمان MUI X

---

## 🌐 ساختار مسیریابی

```javascript
// مسیرهای اصلی
/               → داشبورد/صفحه اصلی
/calendar       → تقویم
/contact        → تماس
/favorites      → علاقه‌مندی‌ها
/inbox          → صندوق ورودی
/orders         → لیست سفارشات
/pricing        → قیمت‌گذاری
/products       → محصولات
/product-stock  → موجودی انبار
/settings       → تنظیمات
/todo           → وظایف
/user           → پروفایل کاربر
/users-list     → لیست کاربران
*               → یافت نشد (404)
```

---

## 🎯 ویژگی‌های کلیدی به تفصیل

### 📊 گرید پیشرفته داده

- مرتب‌سازی (چند ستونه)
- فیلتر (فیلتر سریع، فیلتر ستون)
- صفحه‌بندی
- انتخاب سطر
- تغییر اندازه ستون
- صادرات به CSV/PDF

### 📅 ویژگی‌های تقویم

- کشیدن و رها کردن رویدادها
- رویدادهای تکرارشونده (روزانه، هفتگی، ماهانه)
- دسته‌بندی و رنگ رویدادها
- پشتیبانی از منطقه زمانی
- رندر سفارشی رویداد

### 📈 نمودارها و تحلیل‌ها

- نمودار خطی
- نمودار میله‌ای
- نمودار ناحیه‌ای
- نمودار دایره‌ای/حلقه‌ای
- نمودارهای ترکیبی
- به‌روزرسانی بلادرنگ

### 🎨 سیستم تم

- حالت روشن/تاریک
- پالت‌های رنگ سفارشی
- MUI theme provider
- utilityهای TailwindCSS
- breakpoints واکنش‌گرا

---

## 🔧 پیکربندی

### پیکربندی Vite

موقعیت: `vite.config.js`:

- پلاگین React SWC برای refresh سریع
- یکپارچه‌سازی TailwindCSS v4
- بهینه‌سازی‌های بیلد

### پیکربندی ESLint

- بهترین روش‌های React
- قوانین Hooks
- پلاگین refresh

### پیکربندی Prettier

- فرمت‌بندی خودکار کد
- مرتب‌سازی کلاس‌های TailwindCSS
- سبک کد یکپارچه

---

## 📱 طراحی واکنش‌گرا

**نقاط شکست:**

- موبایل: کوچک‌تر از 600px
- تبلت: 600px تا 1200px
- دسکتاپ: بزرگ‌تر از 1200px

**ویژگی‌ها:**

- رویکرد موبایل-اول
- سایدبار واکنش‌گرا (قابل جمع‌شدن)
- جداول داده سازگار
- کنترل‌های لمسی بهینه
- بهینه‌شده برای همه دستگاه‌ها

---

## 🌍 پشتیبانی مرورگر

- Chrome (آخرین نسخه)
- Firefox (آخرین نسخه)
- Safari (آخرین نسخه)
- Edge (آخرین نسخه)
- Opera (آخرین نسخه)

---

## 📝 مثال‌های کد

### استفاده از Data Grid

```jsx
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'نام', width: 150 },
  { field: 'email', headerName: 'ایمیل', width: 200 },
]

function MyComponent() {
  return <DataGrid rows={rows} columns={columns} pagination pageSize={10} />
}
```

### استفاده از تقویم

```jsx
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

function CalendarPage() {
  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor='start'
      endAccessor='end'
    />
  )
}
```

---

## 🤝 مشارکت

از مشارکت شما استقبال می‌شود! لطفاً این مراحل را دنبال کنید:

1. Fork کردن مخزن
2. ایجاد شاخه ویژگی (`git checkout -b feature/AmazingFeature`)
3. Commit کردن تغییرات (`git commit -m 'Add some AmazingFeature'`)
4. Push به شاخه (`git push origin feature/AmazingFeature`)
5. باز کردن Pull Request

---

## 📄 مجوز

این پروژه تحت مجوز MIT مجوزدهی شده است - برای جزئیات فایل [LICENSE](LICENSE) را ببینید.

---

## 👨‍ نویسنده

**نام شما**

- GitHub: [@yourusername](https://github.com/Rezaabdollahi7)
- ایمیل: srezaabdollahi7@gmail.com

---

## 🙏 تقدیر و تشکر

- [React](https://reactjs.org/)
- [Material UI](https://mui.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [ApexCharts](https://apexcharts.com/)
- [Vite](https://vitejs.dev/)

---

<div align="center">

**نسخه:** 1.0.0  
**آخرین به‌روزرسانی:** 2025  
**وضعیت:** ✅ آماده تولید

ساخته شده با ❤️ با استفاده از React، MUI و TailwindCSS

</div>