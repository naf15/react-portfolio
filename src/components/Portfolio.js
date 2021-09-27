const Portfolio = () => {
    return(
        <article id="portfolio">
        <h2>Portfolio</h2>

        <a
          target="_blank"
          class="portfolio-card-main"
          href="https://naf15.github.io/STKR/"
        >
          <div>
            <img class="img" src="./assets/images/STKR.jpg" />
            <h2 class="portfolio-card-title">STKR</h2>
          </div>
        </a>

        <section class="portfolio-cards enableBlur">
          <a
            target="_blank"
            class="disableBlur"
            href="https://naf15.github.io/code-quiz/"
          >
            <div class="portfolio-card">
              <img class="img" src="./assets/images/Code_Quiz.jpg" />
              <h3 class="portfolio-card-title">Code Quiz</h3>
            </div>
          </a>
          <a
            target="_blank"
            class="disableBlur"
            href="https://github.com/naf15/professional-readme-generator"
          >
            <div class="portfolio-card">
              <img class="img" src="./assets/images/README_Gen.jpg" />
              <h3 class="portfolio-card-title">README Generator</h3>
            </div>
          </a>
          <a
            target="_blank"
            class="disableBlur"
            href="https://note-taker66.herokuapp.com/"
          >
            <div class="portfolio-card">
              <img class="img" src="./assets/images/Note_Taker.jpg" />
              <h3 class="portfolio-card-title">Note Taker</h3>
            </div>
          </a>
        </section>
      </article>
    );
};

export default Portfolio;