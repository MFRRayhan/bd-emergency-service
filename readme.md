### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

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

### ৩. **Event Bubbling and how does it work:**

**Event Bubbling** হলো এমন একটি প্রক্রিয়া যেখানে একটি ইভেন্ট যখন একটি এলিমেন্টে ট্রিগার হয়, তখন সেই ইভেন্টটি তার **parent** এলিমেন্টগুলোর মধ্য দিয়ে ক্রমান্বয়ে উপরের দিকে **bubbles up** হতে থাকে।

-   **how does it work:** যখন একটি **child** এলিমেন্টে ক্লিক করা হয়, তখন সেই ক্লিক ইভেন্টটি প্রথমে চাইল্ড এলিমেন্টের ইভেন্ট হ্যান্ডেলারকে ট্রিগার করে। এরপর এটি তার **immediate parent** এর ইভেন্ট হ্যান্ডলারকে ট্রিগার করে, তারপর **Grandparent**-এর, এবং এভাবে **DOM** ট্রি-এর একেবারে উপরে (`<body>` এবং `<html>`) পর্যন্ত চলতে থাকে। যদি কোনো প্যারেন্ট এলিমেন্টে **addEventListener** থাকে, তাহলে চাইল্ড এলিমেন্টে ক্লিক করলে সেই প্যারেন্টের **handler**-টিও **Active** হবে।

---
