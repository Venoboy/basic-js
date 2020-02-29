const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    value === undefined ? this.chain.push(' ') : this.chain.push(`${value}`);
    return this
  },
  removeLink(position) {
    if (Number.isInteger(position) && position > 0 && position <= this.chain.length) {
      this.chain.splice(position - 1, 1)
    } else {
      this.chain = [];
      throw new Error
    }
    return this
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this
  },
  finishChain() {
    this.chain = this.chain.map(item => {
      return item === ' ' ? '( )' :`( ${item} )`
    });
    return this.chain.splice(0, this.chain.length).join('~~')
  }
};

module.exports = chainMaker;
