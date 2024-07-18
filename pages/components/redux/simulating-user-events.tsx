import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const SimulatingUserEvents = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // react testing library can to simulate different user events like clicking, typing and ... you can to use fireEvent and userEvent methods for this.
    // fireEvent:
    // fireEvent allow us to simulate all of the user events:
    // clicking example:
        import React from 'react';
        import { render, fireEvent } from '@testing-library/react';

        function Button() {
          const [clicked, setClicked] = React.useState(false);
          return (
            <button onClick={() => setClicked(true)}>
              {clicked ? 'Clicked' : 'Click me'}
            </button>
          );
        }

        test('button changes text after click', () => {
          const { getByText } = render(<Button />);
          const button = getByText('Click me');
          fireEvent.click(button);
          expect(getByText('Clicked')).toBeInTheDocument();
        });
    
    // typing example:

        import React from 'react';
        import { render, fireEvent } from '@testing-library/react';
        
        function Input() {
          const [value, setValue] = React.useState('');
          return (
            <input value={value} onChange={e => setValue(e.target.value)} />
          );
        }

        test('input changes value after typing', () => {
          const { getByDisplayValue, getByRole } = render(<Input />);
          const input = getByRole('textbox');
          fireEvent.change(input, { target: { value: 'Hello' } });
          expect(getByDisplayValue('Hello')).toBeInTheDocument();
        });

    // userEvent:
    // userEvent allows us to simulate all user events reality and with more details.
    // first we must to install this package:
        npm install @testing-library/user-event
    // clicking example:
        import React from 'react';
        import { render } from '@testing-library/react';
        import userEvent from '@testing-library/user-event';
        
        function Button() {
          const [clicked, setClicked] = React.useState(false);
          return (
            <button onClick={() => setClicked(true)}>
              {clicked ? 'Clicked' : 'Click me'}
            </button>
          );
        }

        test('button changes text after click', () => {
          const { getByText } = render(<Button />);
          const button = getByText('Click me');
          userEvent.click(button);
          expect(getByText('Clicked')).toBeInTheDocument();
        });
    // typing example:
        
        import React from 'react';
        import { render } from '@testing-library/react';
        import userEvent from '@testing-library/user-event';
        
        function Input() {
          const [value, setValue] = React.useState('');
          return (
            <input value={value} onChange={e => setValue(e.target.value)} />
          );
        }
        
        test('input changes value after typing', () => {
          const { getByRole } = render(<Input />);
          const input = getByRole('textbox');
          userEvent.type(input, 'Hello');
          expect(input).toHaveValue('Hello');
        });

    // Comparison of fireEvent and userEvent:
    // Detail and accuracy: userEvent simulates user behavior more accurately. For example, userEvent.
    // type actually simulates how a user types character by character, while fireEvent.change simply changes the value in one go.
    //Simplicity of use: fireEvent is simpler and more direct, suitable for fast and simple simulation of events. 
    // But userEvent is better for more complex interactive tests due to its more precision and detail.
    // Flexibility: userEvent provides more tools and methods for simulating user behavior and is therefore more flexible.
        `}
      />
    </div>
  );
};

export default SimulatingUserEvents;
