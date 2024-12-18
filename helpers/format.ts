export const priceRu = (price: number): string =>
    price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        .concat(" ₽");

export const declOfNum = (num: number, titles: [string, string, string]): string => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]];
};