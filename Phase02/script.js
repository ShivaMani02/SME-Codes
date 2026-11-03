const demoBtn = document.getElementById('demoBtn');
const demoOutput = document.getElementById('demoOutput');

console.log('JavaScript Demo Started');

const course = 'Full Stack Web Development';
const age = 24;
const isStudent = true;
const resultValue = null;

console.log('Course:', course);
console.log('Age:', age);
console.log('Type of age:', typeof age);
console.log('Is Student:', isStudent);
console.log('Type of isStudent:', typeof isStudent);
console.log('Result Value:', resultValue);
console.log('Type of resultValue:', typeof resultValue);
console.log('Arithmetic Example:', 10 + 5, 10 - 5, 10 * 5, 10 / 5, 10 % 3);
console.log('Comparison Example:', 5 === '5');
console.log('Logical Example:', true && false, true || false, !false);

if (demoBtn && demoOutput) {
  demoBtn.addEventListener('click', function () {
    const name = 'Shivansh';
    const status = age >= 18 ? 'Adult' : 'Minor';
    const message = `Hi ${name}, you are ${status}.`;
    console.log('Demo Button Clicked');
    console.log('Message:', message);
    demoOutput.textContent = message;
  });
}

const marksForm = document.getElementById('marksForm');
const resultBox = document.getElementById('result');

if (marksForm && resultBox) {
  marksForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('studentName').value.trim();
    const marks1 = Number(document.getElementById('marks1').value);
    const marks2 = Number(document.getElementById('marks2').value);
    const marks3 = Number(document.getElementById('marks3').value);

    const inputs = [
      document.getElementById('marks1').value,
      document.getElementById('marks2').value,
      document.getElementById('marks3').value,
    ];

    if (
      !name ||
      inputs.some(value => value.trim() === '') ||
      [marks1, marks2, marks3].some(mark => !Number.isFinite(mark) || mark < 0 || mark > 100)
    ) {
      resultBox.textContent = 'Enter a name and valid marks between 0 and 100.';
      resultBox.style.background = 'rgba(255, 107, 107, 0.12)';
      resultBox.style.borderColor = 'rgba(255, 107, 107, 0.45)';
      return;
    }

    const total = marks1 + marks2 + marks3;
    const percentage = total / 3;
    const status = [marks1, marks2, marks3].every(mark => mark >= 33) ? 'Pass' : 'Fail';

    console.log('Student Name:', name);
    console.log('Marks:', marks1, marks2, marks3);
    console.log('Total:', total);
    console.log('Percentage:', percentage.toFixed(2));
    console.log('Final Status:', status);

    resultBox.textContent = `${name}: Total = ${total}/300, Percentage = ${percentage.toFixed(2)}%, Result = ${status}`;
    resultBox.style.background = 'rgba(70, 211, 154, 0.1)';
    resultBox.style.borderColor = 'rgba(70, 211, 154, 0.36)';
  });
}
