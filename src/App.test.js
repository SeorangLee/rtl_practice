import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Form from './pages/Home/Form';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';


function setupApp(){
  return  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
}

function setupForm(){
  return render(
    <MemoryRouter>
      <Form />
    </MemoryRouter>
  )
}
describe('<App />',()=>{
  // it('<App /> snapshot', () => {
  //   const utils = render(<App />);
  //   expect(utils.container).toMatchSnapshot();
  // });

  it('renders learn react link', () => {
    setupApp();
    // const link = screen.getByRole('link', {name: /how it works/i});
    // userEvent.click(link);
    const subredditInput = screen.getByLabelText('r /');
    userEvent.type(subredditInput, 'reactjs');
    const submitButton = screen.getByRole('button', { name: /search/i });
    userEvent.click(submitButton);
    expect(screen.getByText(/is loading/i)).toBeInTheDocument();
    screen.debug();

  });

})


// describe('<Form />', ()=>{
  
//   it('loads posts and renders them on the page', ()=>{
//     setupForm();


//     screen.debug();
//   })
// })