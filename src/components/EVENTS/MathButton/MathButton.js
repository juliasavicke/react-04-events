/*

text = math operator + - * /

action = function that handles logic

numbers = array that handles numbers [2,3]

*/

export default function MathButton({ action, numbers }) {
  return (
    <button
      onClick={(e) => {
        let result = '';
        switch (action) {
          case '+':
            result = numbers[0] + numbers[1];
            break;
          case '-':
            result = numbers[0] - numbers[1];
            break;
          case '/':
            result = numbers[0] / numbers[1];
            break;
          case '*':
            result = numbers[0] * numbers[1];
            break;
          default:
            result = 0;
        }
        e.target.innerText = 'Answer is ' + result;
      }}
    >
      show {numbers[0]} {action} {numbers[1]} answer
    </button>
  );
}
