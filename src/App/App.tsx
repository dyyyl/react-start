import React, { useState } from 'react';

import Button from 'shared/components/Button';
import Form from 'shared/components/Form';
import Input from 'shared/components/Input';
import Layout from 'shared/components/Layout';
import Title from 'shared/components/Title';
import GlobalStyle from 'shared/styles/GlobalStyle';

const App: React.FC = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [showName, setShowName] = useState<string>('');

  const handleChange = (
    event: React.SyntheticEvent<HTMLInputElement>,
  ): void => {
    setName(event.currentTarget.value);
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setShowName(name);
  };

  return (
    <Layout>
      <Title>Hello, {showName || 'world'}!</Title>
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
