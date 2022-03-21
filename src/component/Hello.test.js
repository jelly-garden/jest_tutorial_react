import { render, screen } from '@testing-library/react';
import Hello from './Hello';


const user = {
    name: 'Tom',
    age: 30
};

const user2 = {
    age: 20
};

test('snapshot: name 있음', () => {
    const el = render(<Hello user={user} />);
    expect(el).toMatchSnapshot();
});
test('snapshot: name 없음', () => {
    const el = render(<Hello user={user2} />);
    expect(el).toMatchSnapshot();
});