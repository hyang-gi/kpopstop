const ALL="All",
HYBE="HYBE",
JYP="JYP",
SM="SM",
YG="YG";
const tours=[
{
link: 'https://www.viator.com/tours/Seoul/Private-Tour-to-BTS-Film-Locations-in-Seoul/d973-192016P7',
agency: [HYBE],
title:"Private BTS Location Tour around Seoul City",
imageSrc:"https://media.tacdn.com/media/attractions-splice-spp-674x446/0e/7f/d0/6f.jpg"
},
{
link: 'https://www.viator.com/tours/Seoul/1-Day-K-Pop-Tour-in-Seoul/d973-14882P39',
agency: [HYBE],
title:"BTS Tour with optional 1 day Dance Class",
imageSrc:"https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/07/35/72.jpg"
},
{
link: 'https://www.indiway.com/en/prod/seoul-kpop-fan-tour',
agency: [JYP],
title:"Seoul Hallyu K-pop Fan Tour",
imageSrc:"https://d3grk8ie9x2qe9.cloudfront.net/products/2746/big-20220923DUbdrdHXfZ.jpg"
},
{
link: 'https://www.viator.com/tours/Seoul/Private-Tour-Discover-the-Korean-Wave-in-Gangnam/d973-15527P8',
agency: [SM],
title:"Private Tour: Discover the Korean Wave in Gangnam",
imageSrc:"https://media.tacdn.com/media/attractions-splice-spp-674x446/09/34/ac/d7.jpg"
},
{
link: 'https://www.viator.com/tours/Seoul/Private-A-Tour-Guide-for-K-Pop-and-K-Drama-Hallyu-Tour-in-Gangnam/d973-139289P183',
agency: [SM],
title:"Private A Tour Guide for K-Pop and K-Drama Hallyu Tour in Gangnam",
imageSrc:"https://media.tacdn.com/media/attractions-splice-spp-674x446/09/10/e3/b1.jpg"
},
{
link: 'https://www.trazy.com/experience/detail/smtown-studio-tour-coex-smtown-artium-seoul',
agency: [SM],
title:"SMTOWN Studio Tour & COEX SMTOWN Artium",
imageSrc:"https://d3h30waly5w5yx.cloudfront.net/images/tour/pictures/smtown2.jpg"
},
{
link: 'https://www.triphobo.com/places/seoul-south-korea/yg-entertainment',
agency: [YG],
title:"YG Entertainment",
imageSrc:"https://i.ytimg.com/vi/-6nBTYg2iOg/maxresdefault.jpg"
},
{
link: 'https://www.koreaetour.com/product/1-day-k-pop-star-tour-private-tour/',
agency: [YG,SM],
title:"1 Day K-Pop Star Tour (Private Tour)",
imageSrc:"https://www.koreaetour.com/wp-content/uploads/2018/04/1Day-K-pop-Star-Tour.jpg"
},
{
link: 'https://iamyourguide.net/product/full-day-private-tour-of-k-pop-k-wave-experience/',
agency: [YG,SM,HYBE,JYP],
  title:"Full Day Private Tour of K-Pop & K-Wave Experience",
  imageSrc:"https://iamyourguide.net/wp-content/uploads/%EA%B0%95%EB%82%A8%EA%B4%80%EA%B4%80%EC%A0%95%EB%B3%B4269.jpg"
},
{
link: 'https://www.trazy.com/experience/detail/kpop-entertainment-idol-tour-seoul',
agency: [YG,SM,HYBE,JYP],
  title:"K-Pop Entertainment Companies & Idol Restaurant Private Tour",
  imageSrc:"https://d3h30waly5w5yx.cloudfront.net/images/tour/pictures/kpop-agency-idol-restaurant-tour-bft-20.jpg"
},
{
link: 'https://tntkoreatravel.com/tour/kpop-tour-kdrama-tour/?ckattempt=1',
agency: [YG,SM,JYP],
title:"BTS Tour with optional 1 day Dance Class",
imageSrc:"https://www.onedaykorea.com/wp-content/uploads/2018/07/article-what-to-expect-during-k-pop-k-drama-tours-bts-bangtan-boys-tours-800x423.jpg"
},
{
link: 'https://18616.partner.viator.com/tours/Seoul/K-pop-Agencies-and-Idol-Restaurant-Visit-in-Seoul-with-Guide-and-Transport/d973-139289P157?SUBPUID=T8EYirv2',
agency: [YG,SM,HYBE,JYP],
title:"K-pop Agencies and Idol Restaurant Visit in Seoul with Guide & Transport",
imageSrc:"https://media.tacdn.com/media/attractions-splice-spp-674x446/08/2e/4e/ff.jpg"
}
];
$(document).ready(function() {
$(".filter-header").click(function() {
$(".filter-icon").toggleClass("rotate");
$(".filter-options").toggleClass("show");
});

$(".filter-option").click(function() {
if (!$(this).hasClass("disabled")) {
$(".filter-option").removeClass("disabled");
$(this).addClass("disabled");
$(".filter-selected").text($(this).text());
$(".filter-icon").removeClass("rotate");
$(".filter-options").removeClass("show");
const $tour_list = $("#tour-list");
  $tour_list.empty();
renderList($(this).text());
}
});
renderList(ALL);
});
function renderList(filter){

  var filteredTours = tours;
if(filter !== ALL){
  filteredTours = tours.filter(function(tour){
      return tour.agency.includes(filter);
  });
}

const $list = $("#tour-list");
filteredTours.forEach(function(tour) {
const $item = $("<li>").appendTo($list);
const $link = $("<a>").attr("href", tour.link).appendTo($item);
const $imageContainer = $("<div>").addClass("image-container").appendTo($link);
const $image = $("<img>").attr("src", tour.imageSrc).appendTo($imageContainer);
const $titleContainer = $("<div>").addClass("title-container").appendTo($link);
const $title = $("<div>").addClass("main-title").text(tour.title).appendTo($titleContainer);
const $agency = $("<div>").addClass("agency").appendTo($titleContainer);

if (tour.agency.includes(HYBE)) {
$("<span>").text("HYBE ").addClass("hybe").appendTo($agency);
}
if (tour.agency.includes(JYP)) {
$("<span>").text("JYP ").addClass("jyp").appendTo($agency);
}
if (tour.agency.includes(SM)) {
$("<span>").text("SM ").addClass("sm").appendTo($agency);
}
if (tour.agency.includes(YG)) {
$("<span>").text("YG ").addClass("yg").appendTo($agency);
}
});
}
