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

const AGEDBRIE = 'Aged Brie'
const BACKSTAGEPASS = 'Backstage passes to a TAFKAL80ETC concert'
const SULFURAS = 'Sulfuras, Hand of Ragnaros'

class Shop {
  constructor(items=[]) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      if (item.name == AGEDBRIE || item.name == BACKSTAGEPASS) {
        increaseQuality(item)
        if (item.name == BACKSTAGEPASS) {
          if (item.sellIn < 6) {
            increaseQuality(item, 2)
          } else if (item.sellIn < 11) {
            increaseQuality(item)
          }
        }
      } else {
        if (item.name != SULFURAS) {
          if (item.quality > 0) {
            item.quality = item.quality - 1;
          }
        }
      }
      if (item.name != SULFURAS) {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != AGEDBRIE) {
          if (item.name != BACKSTAGEPASS) {
            if (item.quality > 0) {
              if (item.name != SULFURAS) {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality = 0;
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