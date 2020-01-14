const sentence = "hello there from lighthouse labs";
let time = 50;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time)
  time += 50;
}
let newLine = setTimeout(() => {console.log()}, time);