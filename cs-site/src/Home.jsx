import "./App.css";

function Contact() {
  return (
    <div>
      <div id="splash-container" class="container">
        <div class="row">
          <div class="card">
            <h1 class="card-title">Catherine Stevenson - Artist</h1>
            <section class="about-artist">
              <p class="card-text">
                After graduating in Fine Art from Edinburgh College of Art,
                Catherine Stevenson taught in schools in West Lothian and
                Edinburgh. Throughout her career she continued to develop her
                own ideas and art practices and she now paints full time in her
                Edinburgh studio. Catherine has exhibited her paintings at the
                Torrance Gallery and with the Society of Women Artists in
                London.
              </p>
              <p class="card-text">
                She is also one of four artists whose watercolour illustrations
                feature in the book <i>A Sketchbook of Edinburgh</i>, first
                published in 2017 by Birlinn Ltd.
              </p>
            </section>
          </div>
        </div>
        <div class="row main-img">
          <img
            id="splashimg"
            class="center-block"
            src="media/artworks/thecabinet2.jpeg"
            alt="splashimg"
          />
          <span class="center-block">
            <small>
              <i>The Cabinet 2</i> - oil on board - 60x60cms
            </small>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
