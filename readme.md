### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

### 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll:

-   **getElementById:** একটি এলিমেন্টের ইউনিক আইডি ব্যবহার করে ঐ নির্দিষ্ট এলিমেন্ট খুঁজে বের করে।
-   **getElementsByClassName:** এটি ব্যবহার করে এক বা একাধিক নির্দিষ্ট ক্লাসের এলিমেন্ট খুঁজে বের করা যায়।
-   **querySelector / querySelectorAll:**
    -   **querySelector:** শুধুমাত্র **প্রথম** ম্যাচিং এলিমেন্টটি রিটার্ন করে।
    -   **querySelectorAll:** সব ম্যাচিং এলিমেন্টগুলো একটি **static NodeList** হিসেবে রিটার্ন করে।

---

### 2. **Create and insert a new element into the DOM**

-   **এলিমেন্ট তৈরি:** `document.createElement()` ব্যবহার করে একটি নতুন এলিমেন্ট তৈরি করা যায়।
    -   উদাহরণ: `const newDiv = document.createElement('div');`
-   **DOM-এ ইনসার্ট করা:** `appendChild()`, `insertBefore()`, বা `insertAdjacentElement()` ব্যবহার করে নতুন এলিমেন্টটিকে DOM-এর কোনো বিদ্যমান এলিমেন্টের মধ্যে ইনসার্ট করা যায়।
    -   উদাহরণ: `document.body.appendChild(newDiv);`

---

### 3. **Event Bubbling and how does it work:**

**Event Bubbling** হলো এমন একটি প্রক্রিয়া যেখানে একটি ইভেন্ট যখন একটি এলিমেন্টে ট্রিগার হয়, তখন সেই ইভেন্টটি তার **parent** এলিমেন্টগুলোর মধ্য দিয়ে ক্রমান্বয়ে উপরের দিকে **bubbles up** হতে থাকে।

-   **how does it work:** যখন একটি **child** এলিমেন্টে ক্লিক করা হয়, তখন সেই ক্লিক ইভেন্টটি প্রথমে চাইল্ড এলিমেন্টের ইভেন্ট হ্যান্ডেলারকে ট্রিগার করে। এরপর এটি তার **immediate parent** এর ইভেন্ট হ্যান্ডলারকে ট্রিগার করে, তারপর **Grandparent**-এর, এবং এভাবে **DOM** ট্রি-এর একেবারে উপরে (`<body>` এবং `<html>`) পর্যন্ত চলতে থাকে। যদি কোনো প্যারেন্ট এলিমেন্টে **addEventListener** থাকে, তাহলে চাইল্ড এলিমেন্টে ক্লিক করলে সেই প্যারেন্টের **handler**-টিও **Active** হবে।

---

### 4. **Event Delegation**

**Event Delegation** হলো একটি **technique** যেখানে একটি **parent element** তার **child elements** -এর ইভেন্ট handle করে। অর্থাৎ, আমরা প্রতিটি **child element** -এ আলাদা **listener** বসানোর বদলে, **parent element** -এ একটি **listener** বসাই এবং সেই **listener**, **child element** -এ ঘটানো ইভেন্টকে **detect** করে **handle** করে।

-   **Why is it useful:**
    -   এটি মেমরি ব্যবহার কমায়, কারণ অনেকগুলো **EventListener** তৈরি করার পরিবর্তে কেবল একটি **listener** তৈরি করতে হয়।
    -   এটি ডায়নামিকভাবে তৈরি করা নতুন এলিমেন্টগুলোর জন্যও কাজ করে, কারণ নতুন এলিমেন্ট যোগ হলেও প্যারেন্টে যুক্ত ইভেন্ট লিসেনারটি সেগুলোকে ধরতে পারে।

---

### 5. **difference between preventDefault() and stopPropagation() methods**

এই দুটি পদ্ধতি **Event**-কে নিয়ন্ত্রণ করার জন্য ব্যবহৃত হয়,

**পার্থক্য নিম্নরূপঃ**

-   **preventDefault():** এটি ইভেন্টের **default action** বন্ধ করে দেয়। যেমন, একটি লিংকে (`<a>`) ক্লিক করলে সাধারণত অন্য একটি পেজে চলে যায়। যদি `event.preventDefault()` ব্যবহার করা হয়, তাহলে এই ডিফল্ট নেভিগেশন বন্ধ হয়ে যায়।
-   **stopPropagation():** এটি **Event Bubbling** বন্ধ করে দেয়। যখন কোনো এলিমেন্টে এই পদ্ধতি ব্যবহার করা হয়, তখন ইভেন্টটি আর তার প্যারেন্ট এলিমেন্টগুলোতে প্রবাহিত হয় না। অর্থাৎ, এটি **Event Bubbling**-এর প্রক্রিয়াকে থামিয়ে দেয়।
