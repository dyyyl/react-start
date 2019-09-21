import React, { useState } from 'react';

import Button from 'shared/components/Button';
import Form from 'shared/components/Form';
import Input from 'shared/components/Input';
import Layout from 'shared/components/Layout';
import Title from 'shared/components/Title';
import GlobalStyle from 'shared/styles/GlobalStyle';

const App = () => {
  const [nameInput, setNameInput] = useState('');
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setNameInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(nameInput);
  };

  return (
    <Layout>
      <Title>Hello, {name || 'world'}!</Title>
      <Form onSubmit={handleSubmit}>
        {/* eslint-disable-next-line */}
        <label htmlFor="name">
          Your Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            data-testid="name"
            required
          />
        </label>
        <Button type="submit">Submit</Button>
      </Form>
      <GlobalStyle />
    </Layout>
  );
};

export default App;
