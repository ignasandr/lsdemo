import React from 'react';
import './App.css';
import { Card } from './components/Card';
// import { Clock } from './components/Clock';
// import { Notice } from './components/Notice';
import { Wrapper } from './components/Wrapper';
import { Button } from './components/Button';
import { Article } from './components/Article';
import { Counter } from './components/Counter';
import Tick from './step/Tick';
import Calculator from './step/Calculator';
import Bcentral from './step/Bcentral';
import Login from './step/Login';
import Mailbox from './step/Mailbox';
import NumberList from './step/NumberList';
import Blog from './step/Blog';

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to the jungle'},
  {id: 2, title: 'Instigation', content: 'You can do it, I believe'}
]

function App() {
return (
    <div className="App">
      <Login />
      <Wrapper>
        <Card title="OK" paragraph="Whatever, dude" />
        <Card title="L8r">
          <Button>Baronkinas</Button>
        </Card>
        <Mailbox unreadMessages={['one', 'two', 'three', 'four']}/>
        {/* Try conditional rendering probably need Context/hooks*/}
        {/* <Clock />
        <Notice msg="overriding..." /> */}
        <Article title="O kaip tik" />
        <Counter />
      </Wrapper>
      <Wrapper>
        <Blog posts={posts}/>
        <Tick />
        <NumberList numbers={[1, 2, 3]}/>
      </Wrapper>
      <Bcentral />
      <Wrapper>
        <Calculator />
      </Wrapper>
    </div>
  );
}

export default App;