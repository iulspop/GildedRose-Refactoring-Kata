class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        this.decrementItemQuality(item);
      } else {
        this.incrementItemQualityIfLessThanFifty(item);
        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.sellIn < 11) {
            this.incrementItemQualityIfLessThanFifty(item);
          }
          if (item.sellIn < 6) {
            this.incrementItemQualityIfLessThanFifty(item);
          }
        }
      }
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name == 'Aged Brie') {
          this.incrementItemQualityIfLessThanFifty(item);
        } else {
          if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            item.quality = item.quality - item.quality;
          } else {
            this.decrementItemQuality(item)
          }
        }
      }
    }

    return this.items;
  }

  decrementItemQuality(item) {
    if (item.quality > 0) {
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.quality = item.quality - 1;
      }
    }
  }

  incrementItemQualityIfLessThanFifty(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }
}

module.exports = {
  Item,
  Shop
}