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

const agedBrie = 'Aged Brie'
const backstagePass = 'Backstage passes to a TAFKAL80ETC concert'
const sulfuras = 'Sulfuras, Hand of Ragnaros'


class Shop {
  constructor(items=[]) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      if (item.name == agedBrie || item.name == backstagePass) {
        increaseQuality(item)
        if (item.name == backstagePass) {
          if (item.sellIn < 6) {
            increaseQuality(item, 2)
          } else if (item.sellIn < 11) {
            increaseQuality(item)
          }
        }
      } else {
        if (item.name != sulfuras) {
          if (item.quality > 0) {
            item.quality = item.quality - 1;
          }
        }
      }
      if (item.name != sulfuras) {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != agedBrie) {
          if (item.name != backstagePass) {
            if (item.quality > 0) {
              if (item.name != sulfuras) {
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