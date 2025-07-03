function App() {
  return (
    <>
      <header>
        <hgroup>
          <h1 className="blue">ESCAPE WILL MAKE ME GOD</h1>
          <h2>(TYPE SHIT)</h2>
        </hgroup>
      </header>
      <button className="black">click me!</button>
      <br />
      <p>
        <abbr>Sed</abbr> ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
        esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      </p>
      <a href="https://tynichols.com">unto the wild blue yonder</a>
      <br />
      <address>
        <a href="https://www.tynichols.com">Homepage</a>
      </address>
      <br />
      <form>
        <label>An Input: </label>
        <input type="text" placeholder="Some input" />
      </form>
      <article>
        <h2>This is some shit</h2>
        <p>Why is my roommate tilting? The world may never know
          <aside>There are at least 6 eggs that are considered edible under international law</aside>
        </p>
      </article>
      <br />
      <p>I am a <b>bold</b> element, but <strong>strong</strong> is recommended now.</p>
      <blockquote><p>"DLM is a punishment for our sins."</p></blockquote>
      <code>This is source code (vile stuff, N95s required)</code>
      <br />
      <p>Following are some definitions.</p>
      <dl>
        <dt>Large Fish</dt>
        <dd>There are none of these</dd>
      </dl>
      <p>There is some text <del className="red">Deleted</del> here</p>
      <p>
        Some text is:
        <del className="red"><p>Deleted text</p></del>
        <ins className="green"><p>Inserted text</p></ins>
      </p>
      <p>Press <kbd>DIE</kbd> to die instantly.</p>
      <fieldset>
        <legend>Choose your favorite monster</legend>

        <input type="radio" id="kraken" name="monster" value="K" />
        <label htmlFor="kraken">Kraken</label><br />

        <input type="radio" id="sasquatch" name="monster" value="S" />
        <label htmlFor="sasquatch">Sasquatch</label><br />

        <input type="radio" id="mothman" name="monster" value="M" />
        <label htmlFor="mothman">Mothman</label>
      </fieldset>

      <details>
        <summary>Detail Summary</summary>
        There are some dragons nearby.
      </details>
      <p>A <dfn>Dfn</dfn> is for defining things</p>
      <dl>
        <dt>A</dt>
        <dd>The letter A</dd>
        <dt>B</dt>
        <dd>The letter B</dd>
      </dl>
      <p>Me when I <em>emphasize</em></p>
      <figure>
        The wall
        <figcaption>meow</figcaption>
      </figure>
      <p>Another paragraph, this time with <i>i</i></p>
      <ul>
        <li>An element</li>
        <li>Another element</li>
      </ul>
      <ol>
        <li>An elem</li>
        <li>another</li>
      </ol>
      <p>THINK, <mark>Mark!</mark></p>
      <menu>
        <li><button>One</button></li>
        <li><button>Two</button></li>
      </menu>
      <p>The meter, which is probably incomplete:</p>
      <meter id="fuel" min="0" max="100" low={33} high={66} optimum={80} value="50"></meter>
      <br />
      <nav>
        <ol>
          <li><a href="#">Bikes</a></li>
          <li><a href="#">BMX</a></li>
          <li>Jump Bike 3000</li>
        </ol>
      </nav>
      <form>
        {/** TODO you were here, and need to fix the select/optgroup */}
        <label htmlFor="dino-select">Choose a dinosaur:</label>
        <select id="dino-select">
          <optgroup label="Theropods">
            <option>Tyrannosaurus</option>
            <option>Velociraptor</option>
            <option>Deinonychus</option>
          </optgroup>
          <optgroup label="Sauropods">
            <option>Diplodocus</option>
            <option>Saltasaurus</option>
            <option>Apatosaurus</option>
          </optgroup>
        </select>
      </form>
      <table className="bordered">
        <caption>Me when I caption a table</caption>
        <tr>
          <th>
            One
          </th>
          <th>
            Two
          </th>
          <th>
            Three
          </th>
        </tr>
        <tr>
          <td>
            Datum 1
          </td>
          <td>{new Date().toString()}</td>
          <td><button className="yellow">destroy</button></td>
        </tr>
      </table>
      <footer>
        <p>Created by someone with too much time</p>
      </footer>
    </>
  )
}

export default App
