import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Master test', function () {

    it('should', function() {
        //given
        const item1 : Item = new Item('Aged Brie', 20,25);
        const item2 : Item = new Item('Phone', 0, 24);
        const item3: Item = new Item('Backstage passes to a TAFKAL80ETC concert', 4, 7);
        const item4: Item = new Item('In piata la Obor', -1, 13);
        const item5: Item = new Item('Conjured Mana Cake', 3, 19);
        const item6: Item = new Item('Conjured Mana Cake', 4, 1);
        const item7: Item = new Item('Conjured Mana Cake', -1, 15);
        const gildedRose : GildedRose = new GildedRose([ item1, item2, item3, item4, item5, item6, item7]);
        const items : Item[] = gildedRose.updateQuality();
        const correct1: Item = new Item('Aged Brie', 19, 26);
        const correct2 : Item = new Item('Phone', -1, 23);
        const correct3: Item = new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10);
        const correct4: Item = new Item('In piata la Obor', -2, 11);
        const correct5: Item = new Item('Conjured Mana Cake', 2, 17);
        const correct6: Item = new Item('Conjured Mana Cake', 3, 0);
        const correct7 :Item = new Item('Conjured Mana Cake', -2, 11);
        const correctitems : Item[] = [correct1, correct2, correct3,  correct4, correct5, correct6, correct7];
        expect(items).deep.equal(correctitems);
    });

});
