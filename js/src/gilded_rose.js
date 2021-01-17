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

function decreaseQuality(item){
  if (item.quality > 0) {
    item.quality = item.quality - 1;
  }
}

const AGEDBRIE = 'Aged Brie'
const BACKSTAGEPASS = 'Backstage passes to a TAFKAL80ETC concert'
const SULFURAS = 'Sulfuras, Hand of Ragnaros'


class Shop {
  constructor(items=[]) {
    this.items = items;
  }

  changeQualityBeforeUpdate(item) {
    switch (item.name) {
      case AGEDBRIE:
        increaseQuality(item)
        break;
      case BACKSTAGEPASS:
        increaseQuality(item)
        if (item.sellIn < 6) {
          increaseQuality(item, 2)
        } else if (item.sellIn < 11) {
          increaseQuality(item)
        }
        break;
      default:
        decreaseQuality(item)
    }
  }

  changeQualityAfterUpdate(item) {
    if (item.sellIn < 0) {
      switch (item.name) {
        case AGEDBRIE:
          increaseQuality(item)
          break;
        case BACKSTAGEPASS:
          item.quality = 0;
          break;
        default:
          decreaseQuality(item)
      }
    }
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      if (item.name == SULFURAS) { continue; }
      this.changeQualityBeforeUpdate(item)
      item.sellIn--;
      this.changeQualityAfterUpdate(item)
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}