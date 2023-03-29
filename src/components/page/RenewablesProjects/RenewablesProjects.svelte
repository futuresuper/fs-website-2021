<script>
  import Title from "./Title.svelte";
  import Logo from "../../images/Logo.svelte";
  import ProjectCard from "./ProjectCard.svelte";
  import LikeCard from "./LikeCard.svelte";
  import AppDownloadCard from "./AppDownloadCard.svelte";
  import QrCodeCard from "./QrCodeCard.svelte";
  import SitePassword from "../../ui/SitePassword.svelte";
  import JoinNow from "../../ui/JoinNow.svelte";

  const projects = [
    {
      projectName: "Brigalow Solar Farm",
      mainImageUrl:
        "https://images.ctfassets.net/phy8w0z2ccbs/1N0w0kGV1q3i2F8fQox5Lq/2ad479297a3763c4d352af9fdeb79ae7/brigalow2.png",
      description:
        "The Brigalow solar farm in Queensland, is located about 30 minutes rive south west of Toowoomba. It is expected to displace fossil fuel generation that will avoid 580 respiratory illnesses each year over the solar farm’s expected operating life.",
      stateLocatedIn: "QLD",
      renewablesType: "Utility Scale Solar",
      readMoreLink:
        "https://reneweconomy.com.au/impact-completes-brigalow-solar-farm-now-looking-at-project-financing/",
      powerInMegawatts: 35,
      homesPowered: 10550,
      location: {
        latitude: -26.8442,
        longitude: 150.7909,
      },
      __type: "renewablesProject",
    },
    {
      projectName: "Murra Warra Wind Farm - Stage 2",
      mainImageUrl:
        "https://images.ctfassets.net/phy8w0z2ccbs/7poFdmG6woKK5PCiN0Bb3A/4aadea229fe1c679ffb516b1a76f2828/murrawarra.png",
      description:
        "The Murra Warra Wind Farm project is located in North Western Victoria. Situated on 4250Ha of farmland used for sheep grazing and broadacre cropping, the wind farm footprint is less than 2% of the area. In addition to its minimal effects on agricultural productivity, Murra Warra was chosen for its good wind resource, close transport links, and an on-site connection to the grid network.",
      stateLocatedIn: "VIC",
      renewablesType: "Utility Scale Wind",
      readMoreLink:
        "http://murrawarrawindfarm.com/press-release-murra-warra-ii-wind-farm-to-commence-construction-following-successful-completion-of-development-phase-and-financial-close/",
      powerInMegawatts: 209,
      homesPowered: 0,
      location: {
        latitude: -36.431016741520224,
        longitude: 142.31436394604185,
      },
      __type: "renewablesProject",
    },
    {
      projectName: "Ti Tree",
      mainImageUrl:
        "https://images.ctfassets.net/phy8w0z2ccbs/701oZIq0kvhCG6IaAeQLrB/d47818b58dfde6313fffdad365f932cc/ti-tree.png",
      description:
        "Ti Tree supplies three of Australia's most remote aboriginal townships with essential power. It has a sophisticated battery backup Grid Stability System (GSS) which maximises solar energy input.",
      stateLocatedIn: "NT",
      renewablesType: "Off-grid Solar and Battery",
      readMoreLink: "https://epuron.com.au/solar/tkln-solar-ti-tree/",
      powerInMegawatts: 0.323,
      homesPowered: 0,
      location: {
        latitude: -22.126863612869425,
        longitude: 133.4105681041717,
      },
      __type: "renewablesProject",
    },
    {
      projectName: "Chinchilla Solar Farm",
      mainImageUrl:
        "https://images.ctfassets.net/phy8w0z2ccbs/3C05yeGK3bCkan2j01xP4M/58e1dfaf0d79895c9167fe7fbfcdaee2/chinchilla.png",
      description:
        "Chinchilla Solar Farm is located in southeast Queensland. Located on 73 ha of land it has approximately 61,000 solar panels. It commenced operations in July 2019 and is expected to produce 41,940 MWh in its first year of operation, enough to power the equivalent of approximately 7,200 Australian homes.",
      stateLocatedIn: "QLD",
      renewablesType: "Utility Scale Solar ",
      readMoreLink: "https://diamondenergy.com.au/chinchilla-solar/",
      powerInMegawatts: 19.9,
      homesPowered: 7200,
      location: {
        latitude: -26.72172335364175,
        longitude: 150.55161428861598,
      },
      __type: "renewablesProject",
    },
    {
      projectName: "Swan Hill Solar Farm",
      mainImageUrl:
        "https://images.ctfassets.net/phy8w0z2ccbs/1dGBXPUsEkmJuMVQLYrCxB/47c9ba9d09be077327278a7a6944413c/swan-hill2.png",
      description:
        "Swan Hill Solar Farm is located in Northwest Victoria. Located on 38 ha of land, it has approximately 53,000 solar panels. It commenced operations in July 2018 and produced 35,400 MWh in its first year of operation, enough to power the equivalent of approximately 6,200 Australian homes.",
      stateLocatedIn: "VIC",
      renewablesType: "Utility Scale Solar",
      readMoreLink: "https://diamondenergy.com.au/swan-hill-solar-farm/",
      powerInMegawatts: 19.3,
      homesPowered: 6200,
      location: {
        latitude: -35.3402,
        longitude: 143.5441,
      },
      __type: "renewablesProject",
    },
  ];
</script>

<SitePassword>
  <div class="bg-outer">
    <div class="bg">
      <div class="header">
        <Title />
        <div class="logo">
          <Logo colour="white" size="100%" />
        </div>
      </div>
      <div class="card-container">
        <div class="description">
          <h3>
            Explore some renewables projects Future Super is invested in. Tap on
            each card for more information.
          </h3>
          <p>
            Exposure in some of these projects is obtained through Future Super's
            investment in Infradebt. Infradebt is an investment in the
            Renewables Plus, Balanced Impact, and Balanced Growth Pension
            investment options only.
          </p>
        </div>
        <div class="cards">
          {#each projects as project}
            <ProjectCard {project} />
          {/each}
          <LikeCard />
          <!-- <AppDownloadCard /> -->
          <QrCodeCard />
        </div>
      </div>
    </div>
  </div>
</SitePassword>

<style lang="scss">
  @use "../../../styles/" as *;

  h3,
  p {
    color: $white;
  }

  .bg-outer {
    background-color: $black;
  }

  .bg {
    width: 100%;
    min-height: 200vh;
    padding: 20px;
    background: radial-gradient(
      circle,
      rgba(61, 250, 82, 0.4) 0%,
      rgba(61, 250, 82, 0.03) 40%,
      rgba(33, 33, 33, 1) 100%
    );
  }

  .header {
    position: relative;
    width: 100%;
    .logo {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 11%;
    }
  }

  .description {
    margin-bottom: 80px;
  }

  .card-container {
    padding: 100px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
  }

  @media (max-width: 1200px) {
    .cards {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 900px) {
    .cards {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .card-container {
      padding: 80px 0px;
    }
  }
</style>
