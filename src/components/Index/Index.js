import { version } from 'inferno';
import Component from 'inferno-component';
import '../../registerServiceWorker';
import Logo from '../../logo';
import './Index.css';

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <header className="Index-header">
          <Logo width="80" height="80" />
          <h1>{`Welcome to Inferno ${version}`}</h1>
        </header>
        <p className="Index-intro">
          To get started, edit <code>src/Index.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Index;
