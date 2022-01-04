export default class Board {
  constructor(columns, rows) {
    this.origin = document.querySelector('.board');
    this.columns = columns;
    this.rows = rows;
  }

  generate() {
    for (let i = 0; i < this.rows; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      row.style.flexDirection = i % 2 === 0 ? '' : 'row-reverse'

      for (let j = 0; j < this.columns; j++) {
        const square = document.createElement('div');

        if (j % 2 === 0) {
          square.classList.add('white-square')
        } else {
          square.classList.add('black-square')
        }

        // square.style.backgroundColor = j % 2 === 0 ? 'white' : 'black';
        row.appendChild(square);
      }
      this.origin.appendChild(row);
    }
  }

  rotateBoardForWhitePieces() {
    this.origin.classList.add('rotate-white');
  }

  init() {
    this.generate();
    this.rotateBoardForWhitePieces();
  }
}