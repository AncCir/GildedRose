export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            // folosim o variabila pt this.items[i] ca sa fie mai usor de citit
            const currentItem = this.items[i];
            // retinem in urmatoarele 3 variabile daca item-ul curent este cumva din cele 3 exceptii
            const isAgedBrie: Boolean = currentItem.name === 'Aged Brie';
            const isBackstagePass : Boolean = currentItem.name === 'Backstage passes to a TAFKAL80ETC concert';
            const isSulfuras : Boolean = currentItem.name === 'Sulfuras, Hand of Ragnaros';
            const isConjured : Boolean = currentItem.name === 'Conjured Mana Cake';
            // daca este Aged Brie
            if (isAgedBrie) {
                if ( currentItem.quality < 50) {
                    currentItem.quality++;
                }
            } else if (isBackstagePass) {
                //daca este Backstage Passes
                if ( currentItem.quality < 50) {
                    currentItem.quality++;
                    if (currentItem.sellIn < 11 &&  currentItem.quality < 50) {
                        currentItem.quality++;
                    }
                    if (currentItem.sellIn < 6 &&  currentItem.quality< 50) {
                        currentItem.quality++;
                    }
                }
                // daca se duce termenul de vanzare , quality se face 0
                if (currentItem.sellIn < 0) {
                    currentItem.quality = 0;
                }
            } else if (isConjured) {
                // daca este Conjured, scadem quality de 2 ori daca nu devine negativ
                if ( currentItem.quality > 0) {
                    currentItem.quality--;
                }
                if (currentItem.quality > 0) {
                    currentItem.quality--;
                }
                // daca Sellin este negativ, atunci scade "twice as fast", adica mai scadem de 2 ori
                if(currentItem.sellIn < 0) {
                    if ( currentItem.quality > 0) {
                        currentItem.quality--;
                    }
                    if ( currentItem.quality > 0) {
                        currentItem.quality--;
                    }
                }
            } else if (!isSulfuras) {
                //daca este element normal, scadem o data
                if ( currentItem.quality > 0) {
                    currentItem.quality--;
                }
                // daca a expirat sellIn, mai scadem o data quality
                if (currentItem.sellIn < 0 &&  currentItem.quality > 0) {
                    currentItem.quality--;
                }
            }

            if (!isSulfuras) {
                currentItem.sellIn--;
            }
        }

        return this.items;
    }
}