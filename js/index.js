// Автоматическая прокрутка слайдов - Создайте слайд-шоу на веб-странице,
// который автоматически прокручивает слайды с картинками через определенные
// промежутки времени, используя `setInterval`.

// const cars_url = [
//   "https://bsmedia.business-standard.com/_media/bs/img/article/2024-01/11/full/1704993456-7402.jpg?im=FeatureCrop,size=(826,465)",
//   "https://cdn.motor1.com/images/mgl/NGOMej/s1/bmw-i5-edrive40-2023.jpg",
//   "https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13fGVufDB8fDB8fHww",
//   "https://motorillustrated.com/wp-content/uploads/2021/09/2021-BMW-M4-Competition-44034.jpg",
//   "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/fastlane/bmw-individual/2023/bmw-individual-mg-01-06.jpg",
// ];
// const slayder = document.querySelector(".slayder");
// let count = 0;
// setInterval(() => {
//   slayder.style.cssText = `background-image: url('${cars_url[count]}');
//   background-size: cover;
//   background-position: center;
//   width: 800px;
//   height:500px;
//   border-radius:30px ;
//   margin:0 auto;
//   `;
//   count += 1;
//   if (count === cars_url.length) {
//     count = 0;
//   }
// }, 2000);

//--------------------------------------------------------------------------------

// Показ случайных цитат - Напишите программу, которая показывает случайную
// цитату через определенные интервалы времени, используя setInterval. Также добавьте
// смены стилей при смене цитаты ( цвет заднего фона,текста и тд )

// const quotes = [
//   ["Vaxti xerclemek deyil,ona investisiya etmek gerekdir.", "Stiven Kovi"],
//   ["Zaman ozu vaxtini oldurmek isteyenlerin axirina cixir.", "P.Buast"],
//   [
//     "Men hec zaman gelecek haqqinda dusunmurem, o heddinden cox tez gelir.",
//     "A.Eynsteyn",
//   ],
//   [
//     "Heyatda sonradan anlayagin seyleri nedense, onceden yasamaq lazim gelir.",
//     "S.Kerkeqor",
//   ],
//   [
//     "Gelecekle bagli sexavetlilik - indi ile bagli olan her seyi feda ede bilmekdir.",
//     "A.Kamyu",
//   ],
// ];

// let quote = 0;
// let current_quote = document.querySelector(".current_quote");
// let current_author = document.querySelector(".current_author");
// let quote_container = document.querySelector(".quote_container");
// quote_container.style.cssText = `background-color:lightsalmon;
//    padding:25px;
//    font-size: 16px;
//    width:300px;
//    border-radius:20px;
//    margin-bottom:15px;
//    `;

// setInterval(() => {
//   current_quote.textContent = quotes[quote][0];
//   current_author.textContent = quotes[quote][1];
//   quote += 1;
//   if (quote === quotes.length) {
//     quote = 0;
//   }
// }, 2000);

// const quote_form = document.querySelector(".add_quote_form");
// quote_form.style.cssText =
//   "width:300px;border: 1px solid lightsalmon;padding:25px;border-radius:20px;";

// const add_div = document.querySelector(".add_div");
// add_div.style.cssText = `display: flex;justify-content: space-between;margin-bottom:10px`;

// const add_div1 = document.querySelector(".add_div1");
// add_div1.style.cssText = `display: flex;justify-content: space-between;margin-bottom:10px`;
// const add_btn = document.querySelector(".add_btn");
// add_btn.style = "width:100%;";

// quote_form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const { elements } = e.currentTarget;
//   quotes.push([elements.stat.value, elements.author.value]);
//   elements.stat.value = "";
//   elements.author.value = "";
// });

// -------------------------------------------------------------------------------------
//
// Таймер обратного отсчета - Создайте таймер обратного отсчета, который
// отображает сколько времени осталось до определенного события. Также добавьте
// поля ввода времени для начала отсчета

// const timer_form = document.querySelector(".timer_form");
// const time_result = document.querySelector(".time_result");
// let timer;
// timer_form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const { elements } = e.currentTarget;
//   let count = elements.number.value;
//   timer = setInterval(() => {
//     time_result.textContent = count;
//     count -= 1;
//     if (count === 0) {
//       time_result.textContent = 0;
//       clearInterval(timer);
//     }
//   }, 1000);
// });
