import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

let Band = EmberObject.extend({
  name: '',
});

export default Route.extend({
  model() {
    let hocico = Band.create({ name: 'Hocico' });
    let leaetherStrip = Band.create({ name: 'Leæther Strip' });
    let kmfdm = Band.create({ name: 'KMFDM' });

    return A ([hocico, leaetherStrip, kmfdm]);
  }
});
