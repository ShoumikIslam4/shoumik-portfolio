# 🚀 তাড়াতাড়ি শুরু করুন (Quick Start Guide)

## ধাপ ১: ফোল্ডার খুলুন
```bash
cd portfolio-project
```

## ধাপ ২: Dependencies Install করুন
```bash
npm install
```
এটি সব প্রয়োজনীয় packages install করবে (React, Vite, Tailwind, Lucide Icons ইত্যাদি)

## ধাপ ৩: Development Server চালু করুন
```bash
npm run dev
```

## ধাপ ৪: ব্রাউজারে দেখুন
আপনার ব্রাউজারে যান: **http://localhost:5173**

🎉 **সম্পূর্ণ!** আপনার portfolio এখন চলছে!

---

## 📝 আপনার তথ্য যোগ করুন

### 1. নাম এবং Title পরিবর্তন করুন
📁 **src/components/Home.jsx** খুলুন
```jsx
<h1>
  <span>CREATIVE</span>
  <span>DEVELOPER</span>  {/* এখানে আপনার title লিখুন */}
</h1>
```

### 2. About Section আপডেট করুন
📁 **src/components/About.jsx** খুলুন
```jsx
<p>
  I'm a full-stack developer...  {/* আপনার সম্পর্কে লিখুন */}
</p>
```

### 3. আপনার Skills যোগ করুন
📁 **src/components/Skills.jsx** খুলুন
```jsx
const skills = [
  { 
    name: 'Frontend Magic',  // আপনার skill category
    techs: ['React', 'Next.js', ...]  // আপনার technologies
  },
  // আরো skills যোগ করুন...
]
```

### 4. Projects যোগ করুন
📁 **src/components/Projects.jsx** খুলুন
```jsx
const projects = [
  {
    title: 'AI SaaS Platform',  // আপনার project এর নাম
    description: '...',  // project description
    tech: ['Next.js', 'TensorFlow', ...]  // ব্যবহৃত technologies
  },
  // আরো projects যোগ করুন...
]
```

### 5. Contact Info আপডেট করুন
📁 **src/components/Contact.jsx** খুলুন
```jsx
const socialLinks = [
  { 
    icon: <Mail />, 
    label: 'Email', 
    value: 'your@email.com',  // আপনার email
    href: 'mailto:your@email.com' 
  },
  // আপনার GitHub, LinkedIn links আপডেট করুন
]
```

---

## 🎨 রঙ পরিবর্তন করতে চান?

সব জায়গায় এই classes আছে:
- `from-cyan-500` → যে কোনো Tailwind color (blue, green, red ইত্যাদি)
- `to-purple-500` → gradient এর শেষ রঙ
- `text-cyan-400` → text color

Example: Cyan থেকে Green করতে:
```jsx
// আগে
className="from-cyan-500 to-purple-500"

// পরে
className="from-green-500 to-emerald-500"
```

---

## 🏗️ Production এ Deploy করতে

### Build করুন:
```bash
npm run build
```

### Deploy করুন (Vercel):
1. [vercel.com](https://vercel.com) এ account বানান
2. GitHub এ আপনার code push করুন
3. Vercel এ import করুন
4. Deploy! 🚀

---

## ❓ সমস্যা হলে

### সব কিছু সাদা দেখাচ্ছে?
```bash
npm run build
npm run dev
```

### Icons দেখা যাচ্ছে না?
```bash
npm install lucide-react
```

### Port 5173 already in use?
```bash
npm run dev -- --port 3000
```

---

## 📚 কোথায় কি আছে?

```
portfolio-project/
├── src/
│   ├── components/         ← সব sections এখানে
│   │   ├── Home.jsx       ← Hero section
│   │   ├── About.jsx      ← About section
│   │   ├── Skills.jsx     ← Skills grid
│   │   ├── Projects.jsx   ← Projects showcase
│   │   ├── Blog.jsx       ← Blog articles
│   │   ├── Contact.jsx    ← Contact form
│   │   └── ...
│   ├── App.jsx            ← Main app
│   └── index.css          ← Global styles
└── package.json           ← Dependencies
```

---

## 💡 Pro Tips

1. ✏️ **Live Editing**: `npm run dev` চালু রাখুন, save করলেই browser update হবে
2. 🎨 **Colors**: [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors) দেখুন
3. 🔍 **Icons**: [Lucide Icons](https://lucide.dev) এ আরো icons আছে
4. 📱 **Mobile**: Chrome DevTools দিয়ে mobile view test করুন

---

এখন আপনার পালা! Code খুলুন এবং customize করা শুরু করুন! 💪

**প্রশ্ন থাকলে README.md দেখুন** 📖
