const priceData = {
  therapy: [
    ["Консультация и план лечения", "0 ₽", "При записи через сайт"],
    ["Лечение кариеса", "от 5 900 ₽", "Анестезия, изоляция, фотополимер"],
    ["Профессиональная гигиена", "от 6 500 ₽", "Air Flow и реминерализация"],
    ["Эндодонтия", "от 9 900 ₽", "Лечение каналов под увеличением"]
  ],
  surgery: [
    ["Удаление зуба", "от 5 500 ₽", "Атравматичная техника"],
    ["Имплантация", "от 39 000 ₽", "Система подбирается врачом"],
    ["Пластика десны", "от 12 000 ₽", "Микрохирургический подход"],
    ["Синус-лифтинг", "от 28 000 ₽", "По КТ и плану лечения"]
  ],
  ortho: [
    ["Диагностика ортодонта", "от 2 500 ₽", "Снимки, расчет, план"],
    ["Элайнеры", "от 140 000 ₽", "Прозрачная коррекция прикуса"],
    ["Брекет-система", "от 95 000 ₽", "Металл или керамика"],
    ["Ретейнер", "от 8 000 ₽", "Фиксация результата"]
  ]
};

const tabs = document.querySelectorAll(".tab");
const priceList = document.querySelector(".price-list");
const menuToggle = document.querySelector(".menu-toggle");
const mobilePanel = document.querySelector(".mobile-panel");

function renderPrices(category = "therapy") {
  priceList.innerHTML = priceData[category].map(([title, price, note]) => `
    <article class="rounded-2xl border border-slateDeep/10 bg-white p-6 shadow-soft">
      <div class="flex items-start justify-between gap-5">
        <div>
          <h3 class="text-xl font-extrabold">${title}</h3>
          <p class="mt-2 text-sm leading-6 text-slateDeep/55">${note}</p>
        </div>
        <strong class="shrink-0 text-lg text-teal-600">${price}</strong>
      </div>
      <a href="#yclients" class="ms_booking mt-6 inline-flex rounded-xl bg-slateDeep px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-600">Записаться</a>
    </article>
  `).join("");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("bg-slateDeep", "text-white"));
    tab.classList.add("bg-slateDeep", "text-white");
    renderPrices(tab.dataset.category);
  });
});

menuToggle?.addEventListener("click", () => {
  const isOpen = !mobilePanel.classList.contains("hidden");
  mobilePanel.classList.toggle("hidden", isOpen);
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
});

document.querySelectorAll(".mobile-panel a").forEach((link) => link.addEventListener("click", () => mobilePanel.classList.add("hidden")));

renderPrices();
document.querySelector(".tab.active")?.classList.add("bg-slateDeep", "text-white");
