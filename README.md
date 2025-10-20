# 🎁 Crowdfunding Product Page

A fully interactive crowdfunding product page built with **React**, **TypeScript**, and **Tailwind CSS**.  
Back a beautiful bamboo monitor riser, select or customize your pledge, and watch live funding progress in an engaging user interface.

---

## 📸 Preview

![Crowdfunding Product Page Screenshot](/screenshot.jpg)

LIVE: [https://dzik0.github.io/crowdfunding-product-page](https://dzik0.github.io/crowdfunding-product-page)

---

## 🚀 Features

- 🪵 **Product Presentation:**  
  Modern, accessible showcase for a handcrafted bamboo monitor riser.

- 💸 **Dynamic Crowdfunding Logic:**  
  Real-time goal tracking, animated progress bar, current backers and days left.

- 🏆 **Rewards Selection:**  
  Choose from multiple rewards or set a custom pledge. Only available rewards can be selected.

- 📝 **Custom & Minimum Pledge Logic:**  
  Inputs with validation—users can’t pledge less than the minimum or to sold-out rewards.

- 📈 **Instant UI Updates:**  
  Funding progress, total backers, and items left update in real time after pledging.

- ✅ **Donation Flow & Confirmation:**  
  Seamless donation modal/popup and animated thank you message after submitting a pledge.

- 📱 **Fully Responsive:**  
  Mobile-first layouts and desktop support via Tailwind CSS.

---

## 🛠️ Tech Stack

- [React](https://react.dev/) (Hooks, functional components)
- [TypeScript](https://www.typescriptlang.org/) (type safety)
- [Tailwind CSS](https://tailwindcss.com/) (utility classes & responsiveness)
- [Vite](https://vitejs.dev/) (bundling & development)

---

## 📁 File Structure

```
src/
│
├── components/
│   ├── HeaderMobile.tsx
│   ├── HeaderPc.tsx
│   ├── RewardCard.tsx
│   ├── DonationComponent.tsx
│   ├── DonationCard.tsx
│   └── DoneMessage.tsx
├── rewards.ts         # Reward options & types
├── fund.ts            # Fund progress data & types
├── App.tsx            # Main product & workflow logic
├── index.css          # Tailwind and custom styles
public/
├── screenshot.jpg     # Preview screenshot
├── logo-mastercraft.svg
├── icon-check.svg
└── ...
```

---

## 🧠 How It Works

- **Goal progress, backers, and days left** are calculated as state and update in real time with every pledge.
- **Rewards and custom pledges**:
  - Users select a reward or enter a custom amount (with validation).
  - Sold out rewards are visually disabled.
- **Donation flow**:
  - Modal interface guides users through donation or reward selection.
  - Successful pledge triggers a “Thank you!” popup.
- **Bookmarking**:
  - Bookmark button toggles and persists visual state until page refresh.

---

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Dzik0/crowdfunding-product-page.git
   cd crowdfunding-product-page
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

---

## ✅ Roadmap

- [ ] Persistent local storage for backers/funding/bookmarks
- [ ] Accessibility improvements
- [ ] Tests (React Testing Library, Vitest)
- [ ] More animations & microinteractions

---

## 👨‍💻 Author

**Dzik0**  
_GitHub: [Dzik0](https://github.com/Dzik0)_

---

## 📝 License

This project is open-source under the [MIT License](LICENSE).

---
