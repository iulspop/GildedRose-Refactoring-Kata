class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

function increaseQuality(item, increment = 1) {
  item.quality = Math.min(item.quality + increment, 50)
}

class Shop {
  constructor(items=[]) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      if (item.name == 'Aged Brie' || item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        increaseQuality(item)
        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.sellIn < 6) {
            increaseQuality(item, 2)
          } else if (item.sellIn < 11) {
            increaseQuality(item)
          }
        }
      } else {
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
          if (item.quality > 0) {
            item.quality = item.quality - 1;
          }
        }
      }
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
              if (item.name != 'Sulfuras, Hand of Ragnaros') {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          increaseQuality(item)
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}