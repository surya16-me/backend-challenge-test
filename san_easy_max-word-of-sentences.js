/**
 * Direction:
 * Find maximum number of words from given sentences.
 *
 * Expected:
 * 23
 */
const sentences = [
  'Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.',
  'Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.',
  'Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.',
];


function result(sentences) {
  let TemphitungKata = 0; // variabel tampung

  for (let i = 0; i < sentences.length; i++) {
    const Hitungkata = sentences[i].split(' ').length;
    if (Hitungkata > TemphitungKata) {
      TemphitungKata = Hitungkata;
    }
  }

  return TemphitungKata;
}
console.log(result(sentences));
