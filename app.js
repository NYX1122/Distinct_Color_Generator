import iwanthue from 'iwanthue';

import colorDisplayer from 'color_displayer';

export default async function (colorAmount, colorOptions = null) {
  if (!colorOptions) {
    const colors = iwanthue(colorAmount, {
      attempts: 10,
      quality: 100,
      colorSpace: [0, 340, 60, 110, 20, 100],
      clustering: 'force-vector',
      seed: 1,
    });
    console.log('Generated colors: ');
    colorDisplayer(colors);
    return colors;
  } else {
    const colors = iwanthue(colorAmount, colorOptions);
    return colors;
  }
}
