class TypeAnim {
  constructor({ wordslist, typing_speed, show_cursor, element, wait_time }) {
    // arrays of words you wanna show
    this.words = wordslist;
    // speed of the typing of words
    // higher the speed = higher wait time between individual characters
    this.speed = typing_speed || 100;
    // show the blinking cursor
    this.cursor = show_cursor || true;
    // the element where to show the typing animation
    this.element = element;
    // how long should we wait after we finish writing one word
    this.wait_time = wait_time || 1000;
    // index of the current word
    this.index = 0;
    this.write();
  }
  drawCursor() {
    const cursor = document.createElement("span");
    cursor.textContent = "|";
    this.element.append(cursor);
  }
  wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }
  async write() {
    while (true) {
      const current_word = this.words[this.index];
      for (let i = 0; i < current_word.length; i++) {
        this.element.innerText = current_word.substring(0, i + 1);
        this.drawCursor();
        await this.wait(this.speed);
      }
      await this.wait(this.wait_time);
      for (let i = current_word.length; i > 0; i--) {
        this.element.innerText = current_word.substring(0, i - 1);
        this.drawCursor();
        await this.wait(this.speed);
      }
      await this.wait(this.wait_time);
      if (this.index === this.words.length - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
    }
  }
}

export default TypeAnim;
