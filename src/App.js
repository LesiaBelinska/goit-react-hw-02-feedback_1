import './App.css';
import { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }



  handleFeedback = ({target}) => {
    const {feedback} = target.dataset;
    this.setState((prevState) => {
      return {
        [feedback]: prevState[feedback] + 1
      };
  })
}

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className='App'>
        <Section title='Please leave feedback'>
          <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleFeedback}
        />
        </Section>
        <Section title='Statistics'>
          <Statistics
            good={good}
            neutral={neutral}
          bad={bad}/>
        </Section>

      </div>
    );
  }
}

export default App;
