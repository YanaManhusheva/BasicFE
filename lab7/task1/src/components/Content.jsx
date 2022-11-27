import React, { Component } from "react";

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      first: { backgroundColor: "transparent", color: "black" },
      second: { backgroundColor: "transparent", color: "black" },
    };
    this.changeColorFirst = this.changeColorFirst.bind(this);
    this.changeColorSecond = this.changeColorSecond.bind(this);
  }
  getRandomColor() {
    return Math.round(Math.random() * (256 - 1) + 1).toString();
  }
  changeColorFirst() {
    this.setState({
      first: {
        backgroundColor: `rgb(${this.getRandomColor()},${this.getRandomColor()},${this.getRandomColor()})`,
        color: `rgb(${this.getRandomColor()},${this.getRandomColor()},${this.getRandomColor()})`,
      },
    });
  }
  changeColorSecond() {
    this.setState({
      second: {
        backgroundColor: `rgb(${this.getRandomColor()},${this.getRandomColor()},${this.getRandomColor()})`,
        color: `rgb(${this.getRandomColor()},${this.getRandomColor()},${this.getRandomColor()})`,
      },
    });
  }

  render() {
    return (
      <div className="Content">
        <section className="main__hobby">
          <h3
            onClick={this.changeColorFirst}
            style={{
              backgroundColor: this.state.first.backgroundColor,
              color: this.state.first.color,
            }}
          >
            My hobbies are
          </h3>
          <ul>
            <li
              onClick={this.changeColorSecond}
              style={{
                backgroundColor: this.state.second.backgroundColor,
                color: this.state.second.color,
              }}
            >
              Studying
            </li>
            <li>Walking</li>
            <li>Taking photos</li>
          </ul>
        </section>
        <section className="main__film">
          <h3>My favourite films are</h3>
          <ol>
            <li>Interstellar</li>
            <li>Harry Potter</li>
            <li>Bride corpse</li>
          </ol>
        </section>
        <hr />
        <section className="main__towm">
          <p>
            Ivano-Frankivsk , formerly Stanisławów, city, western Ukraine. It
            lies along the Bystritsa River just above its confluence with the
            Dniester River. Founded in 1662 as the Polish town of Stanisławów
            (Ukrainian: Stanyslaviv), it occupied an important position on the
            northern approach to the Yablonitsky Pass over the Carpathians. From
            1772 to 1919 it was held by Austria; in 1945 it was ceded to the
            Soviet Union and named Stanislav; and in 1962 it was given its
            present name, honouring the Ukrainian political activist and writer
            Ivan Franko. Industries in the modern city have included light
            engineering, timber working, furniture making, and food processing.
            There are medical and teacher-training institutes and vocational
            schools.
          </p>
        </section>
      </div>
    );
  }
}
