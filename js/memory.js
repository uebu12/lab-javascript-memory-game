class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();
  }
  // cardOpen() {
  //   this.pickedCards.push(this);
  //   var len = this.pickedCards.length;
  //   if (len === 2) {
  //     moveCounter();
  //     if (this.pickedCards[0].type === this.pickedCards[1].type) {
  //       matched();
  //     } else {
  //       unmatched();
  //     }
  //   }
  // }

  shuffleCards(cards) {
    var currentIndex = this.cards.length,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex],
        this.cards[currentIndex]
      ];
    }

    return cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
