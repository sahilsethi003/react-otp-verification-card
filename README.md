# React OTP Input Component

A customizable React component for seamless and user-friendly OTP (One-Time Password) input. Ideal for authentication flows requiring multi-digit numeric codes.

## Features

- Render a configurable number of input boxes (default: 6) for OTP digits.
- Accept only a single numeric character per input.
- Automatically shift focus to the next input when a digit is entered.
- On backspace, if the current input is empty, move focus to the previous input and clear its value.
- Automatically focus the first input on component mount.
- Support pasting the entire OTP to fill inputs correctly.
- Navigate between inputs using left and right arrow keys.
- Trigger a callback on OTP completion with the full code.
- Basic numeric validation and error feedback.
- Accessible with keyboard and screen readers.

Accessibility
Each input has an ARIA label indicating its position.

Keyboard navigation using arrow keys.

Focus management for smooth input experience.

License
MIT

Feel free to customize the styles and validation logic to fit your needs!
