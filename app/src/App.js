import React, { Component } from 'react';
import logo from './img1.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div class="container">
          <h1>Welcome to Your Favorite Website!</h1>
          </div>
        </header>

        <section>
          <div class="container">
          <h1>About Me:</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae placeat cupiditate est fugiat magni reiciendis, sapiente tempore voluptatem neque, et at doloremque dolorum porro ipsa veniam sint nisi quisquam architecto tempora labore iusto dolore pariatur quos. Necessitatibus omnis reiciendis impedit rem earum debitis explicabo quibusdam nisi aspernatur mollitia neque, beatae minima eum aliquid quod velit dolorum nobis pariatur dicta. Eius dolores sapiente error molestias nobis magni distinctio mollitia, doloremque tempore praesentium qui voluptatem amet recusandae molestiae quaerat neque deserunt suscipit rem fugiat modi beatae aut consectetur. Inventore qui laborum delectus voluptates voluptatem. Maxime magni molestiae assumenda illum, voluptates aspernatur!</p>
          </div>
        </section>

        <aside>
          <div class="container">
          <h3>What Is Your Favorite Color?</h3>

          <input type="radio" id="red" name="color" value="red"></input>
          <label for="red">Red</label><br></br>

          <input type="radio" id="blue" name="color" value="blue"></input>
          <label for="blue">Blue</label><br></br>

          <input type="radio" id="yellow" name="color" value="yellow"></input>
          <label for="yellow">Yellow</label><br></br>

          <input type="radio" id="green" name="color" value="green"></input>
          <label for="green">Green</label><br></br>

          <input type="radio" id="other" name="color" value="other"></input>
          <label for="other">Other</label>

          </div>
        </aside>

        <footer>
          <p>Blake Engquist &copy; 2018</p>
        </footer>
      </div>
    );
  }
}

export default App;
