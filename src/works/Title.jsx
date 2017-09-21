/**
 * Created by army8735 on 2017/9/21.
 */

class Title extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  @bind title
  @bind subTitle
  render() {
    return <div class="title">
      <h1>{ this.title}</h1>
      <h2>{ this.subTitle }</h2>
    </div>;
  }
}

export default Title;
