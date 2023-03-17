const history = {
  hybe: {
    title: "HYBE Entertainment",
    titleText1: `HYBE Corporation is considered among the top 4 Big Companies of the South Korean K-pop industry and is home to global K-pop superstars, BTS. The company started out as ‘Big Hit Entertainment’ when it was founded in 2005 by Bang Si-hyuk, who continues to run the business today. In 2021, the company changed its name to HYBE to reflect the new labels and divisions within the entire Corporation.`,
    titleText2: `HYBE operates as a record label, talent agency, music production company, event management and concert production company, and music publishing house. Currently, it manages many popular K-pop groups such as BTS, Tomorrow X Together, Enhypen, Le Sserafim, NewJeans, and Seventeen. In 2021, the company was named as one of the "100 Most Influential Companies of 2021" by ‘Time’ magazine.`,
    heading1: `Building Details`,
    heading1Text: `With the name change to HYBE in 2021 came a new and lavish home for the company, the new HYBE Building located in Yeongsan, Seoul. The 19-stories tall structure of smooth, vertical office design was opened on March 30th, 2021 on an approximate area of 60,000 square metres. The building is divided into three parts: the employee’s welfare section making up the topmost half, the office section in the middle, and the entertainment production section which makes up the lower half.`,
    heading2Text: `According to HYBE CBO Min Heejin, the building was designed to emphasise flexibility, horizontal communication, and connectivity. The HYBE building’s first to sixth floors house the music production facilities while the seventh floor is used as storage. The eighth to sixteenth floors serve as the office floors, and every one of these floors carries a uniform look with mobile racks and modular walls that can be adjusted to make private office spaces or meeting rooms. The building’s eighth to tenth floors also serve as the libraries while the 11th to 13th floors serve as the employee’s rest areas. There is also a fitness zone on the 14th to 16th floors.`,
    heading3Text: `And for all the ARMYs out there, the HYBE building also houses a two-level museum dedicated to BTS’s rich history and achievements.`,
    img1Src: "../images/buildings/hybe/1_building.png",
    img2Src: "../images/buildings/hybe/hybe_full.jpg",
    img3Src: "../images/buildings/hybe/img12.png",
    img4Src: "../images/buildings/hybe/img13.jpg",
    img5Src: "../images/buildings/hybe/hybe_insight_entrance.jpg",
  },
  yge: {
    title: "YG Entertainment",
    titleText1: `YG Entertainment is a South Korean multinational entertainment agency established in 1996 by Yang Hyun-suk. It is considered one of the top four entertainment companies in South Korea and the K-pop company who was at the forefront of the popularisation of hip-hop music in South Korea with its mega popular groups Big Bang and 2NE1. Currently, the company is most known internationally for being the managing company of the super famous group Blackpink.`,
    titleText2: `YG Entertainment is known for being the company that debuted and managed many popular and influential South Korean K-pop groups and artists such as Epik High, Gummy, Seven, 2NE1, Psy, CL, Lee Hi, and iKON. The company is currently home to very popular groups such as Big Bang, Akdong Musician, Winner, Blackpink, and Treasure. Other notable artists also include Jeon Somi, who is under YG Entertainment's subsidiary The Black Label.`,
    heading1: `Building Details`,
    heading1Text: `In 2021, YG Entertainment unveiled its new futuristic-looking building located in Seoul’s Mapo district. The building’s construction began in 2017 and was designed by the Dutch architectural practice UNStudio, and since the building’s completion, it has become a pilgrimage for fans hoping to catch a glimpse of their favourite K-pop idols.`,
    heading2Text: `The new building has nine top floors, five additional floors underground, and an internal bridge that connects it to the old YG Building. The building's futuristic exterior was designed to resemble an "urban speaker". Glass and aluminium panels curve around the structure, and BIPV (building-integrated photovoltaics) solar cells are integrated in the south-facing facade and on the roof to provide electrical power. The interior design of the building continues to follow the futuristic theme, with plenty of white tones and playful geometric lines. The brightly lit space contrasts sharply with the former headquarters' all-black interiors. Large open spaces and high ceilings give the space a lofty feel, while the glass roof floods the central atrium with natural light in the day.`,
    heading3Text: `Other amenities in the new building include a two-story auditorium, seven large dance practice rooms, seven recording studios outfitted with cutting-edge technology, and 30 personal studios for the company's songwriters and artists. The second floor of the building houses a large modern cafeteria, which was a popular and well-known feature in all of YG Entertainment's previous headquarters, while the basement floors include large-scale fitness and recreational facilities for the company's employees and artists.`,
    img1Src: "../images/buildings/yge/1_building.png",
    img2Src: "../images/buildings/yge/img10.jpg",
    img3Src: "../images/buildings/yge/img12.png",
    img4Src: "../images/buildings/yge/img13.jpg",
    img5Src: "../images/buildings/yge/img1.jpg",
  },
  sme: {
    title: "SM Entertainment",
    titleText1: "Lorem ipsum",
    titleText2: "Lorem ipsum",
    heading1: `Building Details`,
    heading1Text: ``,
    uppperImageSrc: "",
    middleImageSrc: "",
    lowerImageSrc: "",
  },
  jype: {
    title: "JYP Entertainment",
    titleText1: "Lorem ipsum",
    titleText2: "Lorem ipsum",
    heading1: `Building Details`,
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
  $(".titleText2").text(buildingData.titleText2);
  $("#building-img2").attr("src", buildingData.img2Src);
  $(".heading1").text(buildingData.heading1).css("color", `var(--${id})`);
  $(".heading1Text").text(buildingData.heading1Text);
  $(".heading2Text").text(buildingData.heading2Text);
  $(".heading3Text").text(buildingData.heading3Text);
  $("#building-img3").attr("src", buildingData.img3Src);
  $("#building-img4").attr("src", buildingData.img4Src);
  $("#building-img5").attr("src", buildingData.img5Src);
});
