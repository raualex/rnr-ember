import Route from '@ember/routing/route';
import { A } from '@ember/array';
import EmberObject, { computed } from '@ember/object';
import { dasherize } from '@ember/string';

let Band = EmberObject.extend({
  name: '',

  slug: computed('name', function() {
    return dasherize(this.name);
  })
});

let Song = EmberObject.extend({
  title: '',
  rating: 0,
  band: ''
});

export default Route.extend({
  model() {
    let bornToBeHated = Song.create({
      title: 'Born to be Hated',
      band: 'Hocico',
      rating: 3
    });

    let strapMeDown = Song.create({
      title: 'Strap Me Down',
      band: 'Leæther Strip',
      rating: 3
    });

    let megalomaniac = Song.create({
      title: 'Megalomaniac',
      band: 'KMFDM',
      rating: 3
    });

    let hocico = Band.create({ name: 'Hocico', songs: A([bornToBeHated]) });
    let leaetherStrip = Band.create({ name: 'Leæther Strip', songs: A([strapMeDown]) });
    let kmfdm = Band.create({ name: 'KMFDM', songs: A([megalomaniac]) });

    return A([hocico, leaetherStrip, kmfdm]);
  }
});
