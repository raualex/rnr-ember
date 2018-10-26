import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

let Song = EmberObject.extend({
  title: '',
  band: '',
  rating: 0
});

export default Route.extend({
  model() {
    let bornToBeHated = Song.create({
      title: 'Born To Be Hated',
      band: 'Hocico',
      rating: 4
    });

    let strapMeDown = Song.create({
      title: 'Strap Me Down',
      band: 'Leæther Strip',
      rating: 4
    });

    let megalomaniac = Song.create({
      title: 'Megalomaniac',
      band: 'KMFDM',
      rating: 5
    });

    return [bornToBeHated, strapMeDown, megalomaniac];
  }
});
