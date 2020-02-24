export class Deck {
    constructor() {
        this.cards = [];
        this.SUITS = 4;
        this.CARDS_PER_SUIT = 13;
        this.NUM_CARDS = this.SUITS * this.CARDS_PER_SUIT;
        for(let ii = 0; ii < this.NUM_CARDS; ii++) {
            this.cards.push(ii);
        }
        this.current_card = 0;
    }
    shuffle() {
        for(let ii = 0; ii < this.NUM_CARDS; ii++) {
            let randint = Math.floor(Math.random() * this.NUM_CARDS);
            this.cards[ii] = this.cards[randint];
        }
        this.current_card = 0;
    }
    deal() {
        let card = this.cards[this.current_card];
        this.current_card = (this.current_card + 1) % this.NUM_CARDS;
        return card;
    }
    suit(card) {
        return Math.floor(card / this.CARDS_PER_SUIT);
    }
    value(card) {
        return card % this.CARDS_PER_SUIT;
    }
}

export default Deck;
