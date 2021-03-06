/**
 * Шаги для разбиения слайдеров на разные линейные зависимости.
 * Каждый элемент массива имеет вид [проценты, значение]
 *
 * Таким образом, чтобы задать поле от 50 000 до 30 000 000 с шагами:
 * 1) От 50 000 до 200 000 по 5000 (30 шагов)
 * 2) От 200 000 до 1 000 000 по 50 000 (16 шагов)
 * 3) От 1 000 000 до 30 000 000 по 500 000 (58 шагов)
 *
 * Нужно передать следующий keyStep (где 104 = 30 + 16 + 58 — общее число шагов):
 *  [
 *      [100 / 104 * 30, 200000],
 *      [100 / 104 * (30 + 16), 1000000]
 *  ];
 *
 */
export type TuiKeySteps = Array<[number, number]>;
