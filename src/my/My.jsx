/**
 * Created by army8735 on 2017/9/22.
 */

import User from './User.jsx';
import Author from './Author.jsx';

class My extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  render() {
    return <div class="my">
      <div class="status fn-clear">
        <User/>
        <Author/>
      </div>
    </div>;
  }
}

export default My;
