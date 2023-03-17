const history = {
  hybe: {
    title: "HYBE Entertainment",
    titleText1: `HYBE Corporation is considered among the top 4 Big Companies of the South Korean K-pop industry and is home to global K-pop superstars, BTS. The company started out as ‘Big Hit Entertainment’ when it was founded in 2005 by Bang Si-hyuk, who continues to run the business today. In 2021, the company changed its name to HYBE to reflect the new labels and divisions within the entire Corporation.`,
    titleText2: `HYBE operates as a record label, talent agency, music production company, event management and concert production company, and music publishing house. Currently, it manages many popular K-pop groups such as BTS, Tomorrow X Together, Enhypen, Le Sserafim, NewJeans, and Seventeen. In 2021, the company was named as one of the "100 Most Influential Companies of 2021" by ‘Time’ magazine.`,
    heading1: `Building Information`,
    heading1Text: `With the name change to HYBE in 2021 came a new and lavish home for the company, the new HYBE Building located in Yeongsan, Seoul. The 19-stories tall structure of smooth, vertical office design was opened on March 30th, 2021 on an approximate area of 60,000 square metres. The building is divided into three parts: the employee’s welfare section making up the topmost half, the office section in the middle, and the entertainment production section which makes up the lower half.`,
    heading2Text: `According to HYBE CBO Min Heejin, the building was designed to emphasise flexibility, horizontal communication, and connectivity. The HYBE building’s first to sixth floors house the music production facilities while the seventh floor is used as storage. The eighth to sixteenth floors serve as the office floors, and every one of these floors carries a uniform look with mobile racks and modular walls that can be adjusted to make private office spaces or meeting rooms. The building’s eighth to tenth floors also serve as the libraries while the 11th to 13th floors serve as the employee’s rest areas. There is also a fitness zone on the 14th to 16th floors.`,
    heading3Text: `And for all the ARMYs out there, the HYBE building also houses a two-level museum dedicated to BTS’s rich history and achievements.`,
    img1Src: "../images/buildings/hybe/1_building.png",
    img2Src: "",
    img3Src: "",
    img4Src: "",
    img5Src: "",
  },
  yge: {
    title: "YG Entertainment",
    titleText1: "Lorem ipsum",
    titleText2: "Lorem ipsum",
    heading1: `Building Information`,
    heading1Text: ``,
    uppperImageSrc: "",
    middleImageSrc: "",
    lowerImageSrc: "",
  },
  sme: {
    title: "SM Entertainment",
    titleText1: "Lorem ipsum",
    titleText2: "Lorem ipsum",
    heading1: `Building Information`,
    heading1Text: ``,
    uppperImageSrc: "",
    middleImageSrc: "",
    lowerImageSrc: "",
  },
  jype: {
    title: "JYP Entertainment",
    titleText1: "Lorem ipsum",
    titleText2: "Lorem ipsum",
    heading1: `Building Information`,
    heading1Text: ``,
    uppperImageSrc: "",
    middleImageSrc: "",
    lowerImageSrc: "",
  },
};

const gallery = {
  hybe: {
    imageSrcs: [],
    text: [],
  },
  yge: {
    imageSrcs: [],
    text: [],
  },
  sme: {
    imageSrcs: [],
    text: [],
  },
  jype: {
    imageSrcs: [],
    text: [],
  },
};

$(document).ready(() => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');
  const buildingData = history[id];
  console.log(buildingData);
  $(".building-img").attr("src", buildingData.img1Src);
  $(".title").text(buildingData.title).css("color", `var(--${id})`);
  $(".titleText1").text(buildingData.titleText1);
});
