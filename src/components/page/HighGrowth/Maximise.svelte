<script>
  const rows = [
    {
      image:
        "https://res.cloudinary.com/future-super/image/upload/v1702023452/Brick.png",
      title: "The Nightingale Fund",
      description:
        "Help to create affordable and sustainable housing, including housing for essential workers in a sustainably designed apartment complex.",
    },
    {
      image:
        "https://res.cloudinary.com/future-super/image/upload/v1702023452/panel_1.png",
      title: "Infradebt Ethical Fund",
      description:
        "Provide loans to renewable energy and social infrastructure projects in Australia, making renewable energy projects possible, and reducing Australia’s reliance on fossil fuels. ",
    },
    {
      image:
        "https://res.cloudinary.com/future-super/image/upload/v1702023452/droplet.png",
      title: "Kilter Rural Water Fund",
      description:
        "Invest in water credits, which are essential to Australian farmers, while also donating water to rehabilitate wetlands in the Murray-Darling basin.",
    },
  ];
</script>

<section>
  <div class="container">
    <div class="intro">
      <div>
        <h2>Maximise your super while investing responsibly</h2>
        <p>
          When you invest in High Growth, you’re investing in changing the world
          for the better. Here’s some of the impressive climate and social
          impact causes you’ll be supporting.
        </p>
      </div>
      <div>
        <p>
          Our high growth option comes with a higher risk. This option is
          designed for members who are prepared to accept an aggressive asset
          allocation which has the potential to provide higher returns, but also
          increases the risk of a negative return. Find out more in the
          <a href="https://www.futuresuper.com.au/aib">
            Additional Information Booklet
          </a>
          or explore our other investment options.
        </p>
        <a href="/investment-options" class="button secondary"
          >Compare Investment Options</a
        >
      </div>
    </div>
    <div class="box">
      {#each rows as row}
        <div class="row">
          <img src={row.image} alt={row.title} />
          <h3>{row.title}</h3>
          <p>{row.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  @use "../../../styles/" as *;

  section {
    padding: 40px 0;
  }

  .intro {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div {
      max-width: 45%;
    }
  }

  .box {
    background-color: $black850;
    border-radius: 30px;
    color: $white;
    padding: 20px 40px;
    margin-top: 40px;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 2fr 4fr;
    background-color: $black850;
    border-bottom: 1px solid $white;
    grid-gap: 20px;
    padding: 20px 0;
    h3,
    p {
      font-size: 24px;
      margin: 0;
    }
    img {
      width: 120px;
      transition: all 0.6s ease-in-out;
    }
    &:last-child {
      border-bottom: none;
    }
    &:hover {
      img {
        transform: translateY(-30px);
        rotate: 20deg;
      }
    }
  }

  @media (max-width: 700px) {
    .intro {
      flex-direction: column;
      div {
        max-width: 100%;
      }
    }
    .box {
      padding: 20px;
    }
    .row {
      grid-template-columns: 1fr;
      grid-gap: 0;
      padding: 20px 0;
      text-align: center;
      justify-items: center;
      h3,
      p {
        font-size: 18px;
      }
      img {
        width: 50%;
        margin-bottom: 20px;
      }
    }
  }
</style>
