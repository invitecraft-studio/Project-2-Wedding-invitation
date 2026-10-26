// ─────────────────────────────────────────────────────────────
//  Everything on the site comes from this one file.
//  Change the names, date, venues, story and RSVP number here.
// ─────────────────────────────────────────────────────────────

// ▼▼ RE-DATE THE WHOLE SITE WITH THESE TWO LINES ▼▼
const WEDDING_DATE = "2027-03-06"; // YYYY-MM-DD (ceremony + reception, same day)
const RSVP_BY_DATE = "2027-02-20"; // YYYY-MM-DD
// ▲▲ labels, calendar files and the countdown all follow ▲▲

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const WEEKDAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function parts(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, d, dow: WEEKDAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()], month: MONTHS[m - 1] };
}
function longDay(iso) {
  const p = parts(iso);
  return `${p.dow}, ${p.d} ${p.month} ${p.y}`;
}
function shortDay(iso) {
  const p = parts(iso);
  return `${p.d} ${p.month} ${p.y}`;
}

export const couple = {
  bride: "Esther",
  groom: "Daniel",
  brideFull: "Esther Grace Raju",
  groomFull: "Daniel Samuel Kumar",
  hashtag: "#EstherWedsDaniel",
};

export const weddingDayLong = longDay(WEDDING_DATE);      // Saturday, 6 March 2027
export const weddingDayShort = shortDay(WEDDING_DATE);    // 6 March 2027
export const weddingWeekday = parts(WEDDING_DATE).dow;    // Saturday
export const weddingDotted = WEDDING_DATE.split("-").reverse().join(".");
export const rsvpDeadline = shortDay(RSVP_BY_DATE);
export const weddingTarget = `${WEDDING_DATE}T11:00:00+05:30`; // countdown ends at the service

export const place = "Vijayawada, Andhra Pradesh";

export const verse = {
  text: "A threefold cord is not quickly broken.",
  ref: "Ecclesiastes 4:12",
  note: "We are asking God to be the third strand in our marriage, and we would love for you to pray with us.",
};

// ── Venues (sample places in Vijayawada; swap for the real ones) ──
export const venues = {
  ceremony: {
    name: "St. Mary's Church",
    address: "Gunadala, Vijayawada, Andhra Pradesh 520004",
    mapsQuery: "St.+Mary%27s+Church+Gunadala+Vijayawada",
    mapsEmbed: "https://maps.google.com/maps?q=St.%20Mary%27s%20Church%20Gunadala%20Vijayawada&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  reception: {
    name: "Novotel Vijayawada Varun",
    hall: "V Convention",
    address: "Bharathi Nagar, Gunadala, Vijayawada, Andhra Pradesh 520008",
    mapsQuery: "Novotel+Vijayawada+Varun",
    mapsEmbed: "https://maps.google.com/maps?q=Novotel%20Vijayawada%20Varun&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
};

// ── The two celebrations ──
export const events = {
  ceremony: {
    key: "ceremony",
    title: "Holy Matrimony",
    day: weddingDayLong,
    time: "11:00 AM",
    until: "about 12:30 PM",
    venue: `${venues.ceremony.name}, Gunadala, Vijayawada`,
    quote: "Join us as we exchange our vows before God, our families and friends.",
    icsStart: `${WEDDING_DATE}T11:00:00+05:30`,
    icsEnd: `${WEDDING_DATE}T12:30:00+05:30`,
  },
  reception: {
    key: "reception",
    title: "Wedding Reception",
    day: weddingDayLong,
    time: "6:30 PM",
    until: "about 10:00 PM",
    venue: `${venues.reception.name}, Vijayawada`,
    quote: "An evening of dinner, music and dancing to celebrate the newlyweds.",
    icsStart: `${WEDDING_DATE}T18:30:00+05:30`,
    icsEnd: `${WEDDING_DATE}T22:00:00+05:30`,
  },
};

// ── Our story (sample copy; replace with the couple's own) ──
export const story = [
  {
    year: "2019",
    title: "A shared Bible",
    text: "Daniel left his Bible at home on the day of youth fellowship in Guntur. Esther slid hers across the pew, with her favourite verses already underlined.",
  },
  {
    year: "2021",
    title: "Coffee after Sunday service",
    text: "One coffee turned into long talks about faith, family and the work they each hoped to do. By the end of the year they were praying for each other every night.",
  },
  {
    year: "2025",
    title: "The question on the barrage",
    text: "At sunset on the Prakasam Barrage, with both families waiting at the far end, Daniel asked. Esther said yes before he finished the sentence.",
  },
  {
    year: "2027",
    title: "Today, and always",
    text: "In front of the people who prayed us here, we promise to love, honour and walk together with God at the centre.",
  },
];

// ── Order of the day ──
export const schedule = {
  morning: {
    heading: "The ceremony",
    venue: venues.ceremony.name,
    items: [
      { time: "10:30 AM", what: "Guests arrive and are seated", note: "Ushers will help you find a seat." },
      { time: "11:00 AM", what: "Bridal procession", note: "Please stand as the bride enters." },
      { time: "11:15 AM", what: "Service of Holy Matrimony", note: "Scripture, vows, ring exchange and the pastor's blessing." },
      { time: "12:30 PM", what: "Blessings and photographs", note: "Greet the families and join the group photos." },
      { time: "1:00 PM", what: "Wedding lunch", note: "Served at the church hall." },
    ],
  },
  evening: {
    heading: "The reception",
    venue: `${venues.reception.name}, ${venues.reception.hall}`,
    items: [
      { time: "6:30 PM", what: "Guests arrive", note: "Welcome drinks and a photo wall." },
      { time: "7:15 PM", what: "Grand entrance of the couple", note: "" },
      { time: "7:30 PM", what: "Toasts and cake cutting", note: "Best man and maid of honour speak first." },
      { time: "8:00 PM", what: "First dance, then dancing for everyone", note: "" },
      { time: "8:45 PM", what: "Dinner", note: "Vegetarian and non-vegetarian menus." },
      { time: "9:45 PM", what: "Send-off", note: "" },
    ],
  },
};

// ── People ──
export const families = [
  {
    side: "The bride’s family",
    names: "Mr. Joseph Raju and Mrs. Mary Raju",
    note: "Parents of Esther, Guntur",
  },
  {
    side: "The groom’s family",
    names: "Mr. Paul Kumar and Mrs. Ruth Kumar",
    note: "Parents of Daniel, Eluru",
  },
];

export const party = [
  { initials: "RJ", name: "Rebecca Joseph", role: "Maid of honour", note: "Esther’s sister, and the first to hear every secret." },
  { initials: "JK", name: "Jonathan Kumar", role: "Best man", note: "Daniel’s brother, who has been rehearsing his speech since 2025." },
  { initials: "SP", name: "Sarah Paul", role: "Bridesmaid", note: "Esther’s friend since school." },
  { initials: "AM", name: "Abraham Moses", role: "Groomsman", note: "Daniel’s friend from the fellowship choir." },
  { initials: "NR", name: "Naomi Rao", role: "Bridesmaid", note: "Esther’s college roommate." },
  { initials: "IP", name: "Isaac Prasad", role: "Groomsman", note: "Daniel’s cousin and designated photographer’s assistant." },
];

// ── Good to know ──
export const goodToKnow = [
  {
    title: "What to wear",
    text: "Soft pastels and earth tones look lovely with our colours: sage, dusty blue, champagne and blush. Please leave white and ivory to the bride. Sarees, suits and formal Indian wear are all welcome.",
  },
  {
    title: "An unplugged ceremony",
    text: "Our photographer will capture the service. Please keep phones on silent and put them away during the vows, then take as many photos as you like afterwards.",
  },
  {
    title: "Children are welcome",
    text: "We would love to have the little ones with us. A few seats near the back are kept for families who may need to step out.",
  },
  {
    title: "Gifts",
    text: "Your presence and your prayers are the best gift. If you would like to give something, a blessing card is just as dear to us.",
  },
];

export const travel = [
  { title: "By air", text: "Vijayawada Airport (Gannavaram) is about 45 minutes from both venues by road." },
  { title: "By train", text: "Vijayawada Junction is the main station, and autos and cabs are available outside." },
  { title: "Where to stay", text: "The reception venue is also a hotel, so guests travelling from out of town can stay on site. Please book early; March is a busy month." },
  { title: "Between venues", text: "Both venues are in Gunadala, a short drive apart. A shuttle will run from the church to lunch and then to the hotel." },
];

// ── RSVP ──
// Put the number that should receive RSVPs, with country code and no + or spaces
// (for example "919876543210"). If left empty, WhatsApp opens and lets the guest pick a contact.
export const rsvp = {
  whatsapp: "",
  deadline: rsvpDeadline,
};

export const credit = "Website by InviteCraft Studio";
