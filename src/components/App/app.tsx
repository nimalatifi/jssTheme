import * as React from "react";
import './app.scss';
import Header from "../Header/header"
import Footer from "../Footer/footer"
import Button from '../Button/button'


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Button />
        <Footer />
      </React.Fragment>
    )
  }
}
export default App
