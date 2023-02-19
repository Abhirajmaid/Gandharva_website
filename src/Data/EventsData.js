import default_poster from "../images/gandharva_website.png";
import default_banner from "../images/gandharva_landscape.png";
import fandf from "../images/Event_poster/FandF_AI.png";
import SandS from "../images/Event_poster/SandS_AI.png";
import dd from "../images/Event_poster/DD_AI.png";
import fz from "../images/Event_poster/FZ_AI.png";
import addcad from "../images/Event_poster/ADDCAD.png";
import bridgeIT from "../images/Event_poster/BridgeIT.png";
import dayofsolution from "../images/Event_poster/dayofsolution.png";
import treasurehunt from "../images/Event_poster/treasurehunt.png";
import pseudosearch from "../images/Event_poster/PSEUDO SEARCH.jpg";
import legotech from "../images/Event_poster/legotech.png";
import waterrocket from "../images/Event_poster/waterrocket.png";
import rcracing from "../images/Event_poster/rcracing .png";
import viitauction from "../images/Event_poster/viitauction.png";
import codepad from "../images/Event_poster/Codepad.png";
import tagteammania from "../images/Event_poster/tagteammania.png";
import interlock from "../images/Event_poster/ACM.jpeg";
import whatthehack from "../images/Event_poster/what_the_hack.jpeg";
import warofwords from "../images/Event_poster/warofwords.jpeg";
import thatstatsay from "../images/Event_poster/thatstatsay.jpeg";
const EventsData = [
  {
    id: "0",
    EventName: "Valorant(Team)",
    EventPoster: default_poster,
    EventBanner: default_banner,
    Description: (
      <div>
        {" "}
        There will be up to 35 teams in the Tournament. <br />
        Teams will consist of five players , one of whom will be designated
        captain and will be the main point of contact with the Tournament
        organisers.
        <br />
        By participating in the Valorant Community Tournament, Participants
        acknowledge they will, without limitation, comply with the Tournament
        Rules and with the statements and decisions made by the Administration.{" "}
      </div>
    ),
    EventHost: "Ajinkya Ghawale: (+919970282868) Gokul B: (+917758946564)",
    Date: "20-02-2023, 21-02-2023",
    DateWord: "Mon & Tue , Feb 20 & 21",
    Time: "6:00 - 9:00",
    Location: "C-005 , C-006 , C-106 , C-108 C Building, VIIT",
    Dept: "EnTC",
    EntryFee: "250",
  },

  {
    id: "1",
    EventName: "Pseudo Search (Team)",
    EventPoster: pseudosearch,
    EventBanner: default_banner,
    Description: (
      <div>
        A treasure hunt in which each clue will lead to a component and in the
        end, you have to assemble the component and work on the prototype model.
        <br />
        <br /> - Register individually
        <br />
        -Event Duration: 4hr{" "}
      </div>
    ),
    EventHost: "Mrunal Hedau:(+919552179944)  Shreeyash Kelkar:(+919137823508)",
    Date: "To be Announced",
    DateWord: "To be Announced",
    Time: "",
    Location: "C-108, C-107, C-105 C Building, VIIT",
    Dept: "EnTC",
    EntryFee: "250",
  },
  {
    id: "2",
    EventName: "Debug Thugs(Individual)",
    EventPoster: default_poster,
    EventBanner: default_banner,
    Description: (
      <div>
        We have to debug the repositories file which is being stored in github
        in given time frame and maximum bug solver will be the winner.
        Leaderboard will assign through max no of bug solver.
        <br />
        Event Duration: 4hr
      </div>
    ),
    EventHost: "Gokul B:(+917758946564)  Tejas Ugale:(+917666703180)",
    Date: "To be Announced",
    DateWord: "To be Announced",
    Time: "",
    Location: "C-106, C-006, C-005, C Building, VIIT",
    Dept: "EnTC",
    EntryFee: "50",
  },

  {
    id: "3",
    EventName: "ADD CAD (Both)",
    EventPoster: addcad,
    EventBanner: default_banner,
    Description: (
      <div>
        ADD CAD will be a event in which the participants will be tested for
        their knowledge in AutoCad Software And Also their knowledge in Building
        Planning. It will be conducted in 3 Rounds Respectively
        <br />
        <br />
        A) Round 1 :- MCQs Test For their Knowledge Related To AUTOCAD (30 - 45
        mins)
        <br />
        B) Round 2 :- It Will Be a Round Testing the participants proficiency in
        the Software (45 mins)
        <br />
        c) Round 3 :- Will Consist of Planning a Building (1Hr 15Mins)
        <br />- Event Duration: 5 Hrs
      </div>
    ),
    EventHost: "Rachita Munot (+918080362147)",
    Date: " 20-02-2023",
    DateWord: "Mon , Feb 20 ",
    Time: "",
    Location: "D-001 & D-108, D-Building, VIIT, Pune ",
    Dept: "CIVIL",
    EntryFee: "50",
  },

  {
    id: "4",
    EventName: "Fix and Find (Team)",
    EventPoster: fandf,
    EventBanner: default_banner,
    Description: (
      <div>
        This event will not only test your coding abilities but also your
        physical fitness. The task is to run codes and burn calories in real
        life, to obtain clues and progress to the next level. Teams must run
        around campus looking for clues that contain a code which they must
        solve/correct. This will be done in three rounds, and your logical,
        error-solving and DSA skills will be tested. Let’s see who can code and
        run their way to the top! <br />
        <br /> - Entry Fee is Rs.200/Team.
      </div>
    ),
    EventHost:
      "Shardul Khandebharad: (+919829704334) Kalpak Nemade: (+917350103025)",
    Date: "20-02-2023",
    DateWord: "Mon, Feb 20",
    Time: "13:00 - 17:00",
    Location: "304, D-building, VIIT ",
    Dept: "AI&DS",
    EntryFee: "200",
  },

  {
    id: "5",
    EventName: "Data Dash(Team)",
    EventPoster: dd,
    EventBanner: default_banner,
    Description: (
      <div>
        What makes Data Dash unique is that rather than writing the entire code,
        you make incremental progress and pass it onto the next contributor just
        like in a relay race. Team members will come ahead and contribute to the
        visualizations one by one ,with the final person creating a creative and
        appealing dashboard. However, knowledge transfer is critical to success.
        <br /> Can you race your way to victory? <br />
        <br />- Entry Fee is Rs.200/Team.
      </div>
    ),
    EventHost:
      "Shruti Jadhav: (+91 7030057089), Noopur Phadke:(+91 7498819779)",
    Date: "20-02-2023",
    DateWord: "Mon, Feb 20",
    Time: "14:00 - 15:30",
    Location: "D-305,D Building,VIIT",
    Dept: "AI&DS",
    EntryFee: "200",
  },

  {
    id: "6",
    EventName: "Fun Zone(Individual)",
    EventPoster: fz,
    EventBanner: default_banner,
    Description: (
      <div>
        As the name suggests, this event is going to be one of the most fun and
        exciting one.
        <br />
        <br />
        Fun zone has total 6 amazing games namely: <br />
        <br />
        a) Shrink the Circle: Huge circle will be drawn and participants will be
        placed inside that circle ,we will give some tasks to them and we will
        eliminate them if they failed to do so, we will shrink the circle
        simultaneously and when very few people are left ,we will play RST game.
        RST game is the quick game in which we will ask them to start with any
        word which will not contain R or S or T and next person should speak a
        word which was related to previous one. <br />
        <br />
        b) X/O: One frame will be created and it will be covered with nets.
        Participants will be marked X and O .If the same team participants are
        able to go through that frame in a sequential way (XXX or OOO) then that
        team wins that game.
        <br />
        <br /> c) Retro Games:(Entire day) Our old retro games will be installed
        on some of the laptops and we will create a competition on the Clash
        Royal game and other games will be random fun game. i.(Clash Royal)
        -Flagship, ii.Crazy taxi, iii.pocket tank, iv.Road rash, v.Angry Birds.{" "}
        <br />
        <br />
        d) RC rocket league: In this game, we will make a football ground with
        two goal posts. There will be 2 teams playing against each other. Here
        instead of people, Remote Control Cars will play football and the team
        who bags maximum goals in the given time, wins the game. <br />
        <br /> -Entry Fee is Rs.100/Person.
      </div>
    ),
    EventHost:
      "Atharva Jadhav: (+91 9763390976), Sahil Soujani (+91 9822713136)",
    Date: "20-02-2023, 21-02-2023",
    DateWord: "Mon & Tue, Feb 20 & 21",
    Time: "",
    Location: "301, D Building, VIIT",
    Dept: "AI&DS",
    EntryFee: "100",
  },

  {
    id: "7",
    EventName: "Snap the Snippet(Individual)",
    EventPoster: SandS,
    EventBanner: default_banner,
    Description: (
      <div>
        This event will test the critical thinking abilities and your
        understanding of solving problem statements through programming. There
        will be 4 rounds each of 5 mins where participants individually will be
        challenged with a Pseudo Code and they have to identify the problem
        statement from the same. As soon as the participant cracks the pseudo
        code, they will hit the buzzer. Winners will be decided by the accuracy
        of the answer and the time taken. <br />
        <br /> - Entry Fee is Rs.100/Person.{" "}
      </div>
    ),
    EventHost: "Ruchika Taware (+918888844659 Shreya Patil (+919730836615))",
    Date: "21-02-2023",
    DateWord: "Tue, Feb 21",
    Time: "11:00-12:00 & 14:00-15:00",
    Location: "D-301,D Building VIIT",
    Dept: "AI&DS",
    EntryFee: "100",
  },

  {
    id: "8",
    EventName: "War of Words(Both)",
    EventPoster: warofwords,
    EventBanner: default_banner,
    Description: (
      <div>
        The participants will be given a basic Idea of the topic not the entire
        topic the entire topic will be revealed during the debate Two teams will
        debate on the given topic for a total of 10 mins the winning team will
        be decided on the basis of a marking system.
        <br />
        -Event Duration: Depends on the number of participants{" "}
      </div>
    ),
    EventHost: "Parth Bhosale:(+919284833611) Priya Chougale (+919421102099)",
    Date: "20-02-2023",
    DateWord: "Mon, Feb 20",
    Time: "10:00am-14:00pm",
    Location: "B-001, B-Building, VIIT",
    Dept: "CS",
    EntryFee: "100",
  },

  {
    id: "9",
    EventName: "Interlock (Team)",
    EventPoster: interlock,
    EventBanner: default_banner,
    Description: (
      <div>
        Each team will be assigned 2 PCs and the team can divide the tasks
        within themselves.
        <br />
        Every PC will have 5 questions for the first round. The questions will
        be interlinked with each other. Solving the questions on PC 1 will
        unlock the questions on PC 2.
        <br />
        After the last question will be solved, the outputs will be concatenated
        to get the key for the next round. First 7 teams to finish the first
        round will be qualified for the second round.
        <br />
        Round 2 is similar but the difficulty level will be raised.
        <br />
        <br />
        Flow : <br />
        Round 1) 5 questions - 1 hr.
        <br />
        Round 2) 3 questions - 1 hr.
        <br />
        <br />
        Requirements:
        <br />
        - Team of 2-4 members
        <br />- Basic knowledge of aptitude and coding
      </div>
    ),
    EventHost: "Ayan Sayyad (+917058575810) Ansfred D'Souza (+918788944520)",
    Date: "21-02-2023",
    DateWord: "Tue, Feb 21",
    Time: "10am Onwards",
    Location: "B Building Labs, VIIT",
    Dept: "CS",
    EntryFee: "100",
  },

  {
    id: "10",
    EventName: "RC Racing Compt.(Team)",
    EventPoster: rcracing,
    EventBanner: default_banner,
    Description: (
      <div>
        RC racing is an event in which the participants have to compete for with
        each other using RC cars. RC-car provided by the organizer can be used
        in the race. It is Off-road racing competition; it means race is
        conducted over ground or red soil road with a lot of obstacles. Race is
        conducted in knock-out format with 2 Phases. Participant who will
        complete laps in least time will be considered as winner.
      </div>
    ),
    EventHost: " Sandesh Pawar:(+917385559713)",
    Date: "20-02-2023",
    DateWord: "Mon, Feb 20",
    Time: "10:00-12:00 & 14:00-15:00",
    Location: "Ground, VIIT Pune",
    Dept: "MECH",
    EntryFee: "200",
  },

  {
    id: "11",
    EventName: "VIIT Auction House (Team)",
    EventPoster: viitauction,
    EventBanner: default_banner,
    Description: (
      <div>
        VIIT AUCTION HOUSE is a mini auction which represents an actual replica
        of an IPL auction event. Here you will have to bid for cricket players
        and form a team of 7 players. (2 batsmen, 3 bowlers, 1 wicketkeeper, 1
        all-rounder) Based on the stats (of players) , You must bid with the
        intent to buy and enjoy with your fellow participants. The team with
        maximum points will be declared as the winner. <br />
        <br />- The team should be group of 3-4 members. <br />- From these 7
        players, assign 1 as a captain who will be getting 2x points. <br /> -
        After every list of players, there will be a 15 min break in which each
        team will get to know about their remaining balance and number of assets
        they bought."
      </div>
    ),
    EventHost: "Atharv Khanzode (+918698978193)",
    Date: "20-02-2023",
    DateWord: "Mon, Feb 20",
    Time: "11:00AM",
    Location: "Seminar Hall and E-105, VIIT",
    Dept: "MECH",
    EntryFee: "200",
  },

  {
    id: "12",
    EventName: "Water Rocket (Team)",
    EventPoster: waterrocket,
    EventBanner: default_banner,
    Description: (
      <div>
        Water Rocket Challenge is one of the very exciting Technical events of
        Gandharva. <br />
        Teams design and build a water rocket within the specified dimensions,
        robust enough to withstand the pressure and when launched from the
        launch pad, it achieves the maximum altitude above ground level. <br />
        The team with the maximum air time will be nominated as the winner.
      </div>
    ),
    EventHost: "Hrushikesh Akhare(+917385056268)",
    Date: "21-02-2023",
    DateWord: "Tue, Feb 21",
    Time: "15:00",
    Location: "Ground, VIIT Pune",
    Dept: "MECH",
    EntryFee: "100",
  },

  {
    id: "13",
    EventName: "Code Pad (Individual)",
    EventPoster: codepad,
    EventBanner: default_banner,
    Description: (
      <div>
        Code Pad will be an offline debugging challenge. The participants will
        be given sheets of paper with C++ code written on it, which the
        participants will have to debug. <br />
        <br /> Participants have to mark and correct syntactical and other
        errors in the program that might occur at compile time or run time. The
        participants will be given a limited amount of time for this activity.{" "}
        <br /> <br />
        Top 2 participants who have detected and corrected the highest number of
        errors will be selected as the winners.
        <br />
        <br /> Event Duration : 45 min
      </div>
    ),
    EventHost: "Pranav Andhale (+919011685970) Akash Gulge (+9172182 21823)",
    Date: "20-02-2023",
    DateWord: "20th Feb",
    Time: "10:00-10:45",
    Location: "C-301, C-304, C building VIIT",
    Dept: "IT",
    EntryFee: "50",
  },

  {
    id: "14",
    EventName: "The Tag Team Mania (Team)",
    EventPoster: tagteammania,
    EventBanner: default_banner,
    Description: (
      <div>
        - ROUND 1 : Round 1 is elimination round <br />
        Round 1 is a blend of mcq questions from OOPS(object oriented
        programming) in Java and 2 puzzle questions, ending with 2 coding
        questions. (Time Duration : 45min/1 hr) <br />
        <br />
        - ROUND 2 : Final Round <br />
        The qualified teams will move ahead to Round 2 which is a coding contest
        consisting of 3 coding questions. (Time Duration: 1 hr)
        <br />
        <br />- The participation in the event is team wise.
        <br />- The teams will be having 2 members each.
      </div>
    ),
    EventHost: "Aman Deshpande (+918956393974)",
    Date: "20-02-2023",
    DateWord: "20th Feb",
    Time: "Round 1 : 15:00-16:00 Round 2 : 16:00-17:30",
    Location: "C building Labs, VIIT",
    Dept: "IT",
    EntryFee: "100",
  },

  {
    id: "15",
    EventName: "Dive in Design (Team)",
    EventPoster: default_poster,
    EventBanner: default_banner,
    Description: (
      <div>
        - Dive-in-Design will be an offline design competition. It will consist
        of two rounds.
        <br />
        <br />
        A) ROUND 1 : Teams will create one template or poster using tools such
        as Canva, Figma, or others. The judging panel will select teams for
        Round 2 based on the quality and appeal of their designs.
        <br />
        <br />
        B) ROUND 2 : Selected teams will implement the design using web
        development or mobile app development technologies, including HTML, CSS,
        JavaScript, React.js, Flutter, Jetpack Compose, Kotlin, Java, Swift, or
        React-Native. Teams will be evaluated based on their ability to
        accurately replicate the design template from Round 1. The judges for
        Round 2 will be VIIT faculty members.
        <br />
        <br />- Team Size: 1 to 3 (maximum of 3 people per team)
      </div>
    ),
    EventHost: "Kalyani Londhe (+917447715770) Pratham Raka (+919511660800)",
    Date: "20-02-2023",
    DateWord: "20th Feb",
    Time: "Round 1 : 11:15-12:15 Round 2 : 13:00-15:00",
    Location: " C-301 and C-304, 2 labs on the 3rd floor, C Building VIIT",
    Dept: "IT",
    EntryFee: "100",
  },

  {
    id: "16",
    EventName: "Squid Game (Team)",
    EventPoster: default_poster,
    EventBanner: default_banner,
    Description: (
      <div>
        Squid Game is theme-based team competition with lots of fun activities.
        It will be conducted in three successive rounds followed by
        eliminations.
        <br />
        <br />
        A) Round 1 (London London Stop!) : 5-10 teams would compete against each
        other with their legs tied. Teams that cross the finish line first would
        be proceeding to the next round. It’s not as simple as it sounds because
        teams are allowed to move only when the music’s playing once the music
        stops no movements.
        <br />
        <br />
        B) Round 2 (Team Vs Team): In this round a random game would be picked
        and two teams will compete for winning it. Winning team proceeds to the
        final round while the loosing team gets eliminated.
        <br />
        <br />
        c) Round 3 (Balloon Race): The final round will be a balloon race.
        Successive team members would have a balloon between them, and they have
        to reach the finish line. But the balloon must not fall or must not
        burst.
        <br />
        <br />
        -Team Size : 4 (Not less than or greater than 4)
      </div>
    ),
    EventHost: "Tejas Jadhav (+918308840161)",
    Date: "21-02-2023",
    DateWord: "21st Feb",
    Time: "11:00am Onwards",
    Location: "Road B/W B and C building, VIIT",
    Dept: "IT",
    EntryFee: "100",
  },

  {
    id: "17",
    EventName: "Robo Race (Team)",
    EventPoster: default_poster,
    EventBanner: default_banner,
    Description: (
      <div>The robots have to trace the course.Fastest Robot wins</div>
    ),
    EventHost:
      "Yash Sunne: (+91 7798020997),Ashish Dhairyakar: (+91 9834607010)",
    Date: "20-02-2023, 21-02-2023",
    DateWord: "Mon & Tue, Feb 20 & 21",
    Time: "",
    Location: "C-001 , Open Space in C building, VIIT",
    Dept: "EnTC",
    EntryFee: "250",
  },

  {
    id: "18",
    EventName: "LEGO TECH (Team)",
    EventPoster: legotech,
    EventBanner: default_banner,
    Description: (
      <div>
        LEGO TECH is an event where teams have to build a car using Lego. Teams
        have to find Legos in the first round, a treasure hunt. The treasure
        hunt will consist of 3 sub-rounds, where each team will have to find the
        Legos using the clues and codes provided to them. Teams have to build
        cars within their allotted time. The team with the maximum points will
        be declared the winner.
        <br />
        <br /> - The team should be a group of 4 members only
        <br />- Each team will have 30 minutes to build the cars using the Lego
        kit.
        <br />- All the team members should be present at the allotted time.
      </div>
    ),
    EventHost: "Samiksha Sonawane (+919011820673)",
    Date: " 21-02-2023",
    DateWord: "Tue, Feb 21",
    Time: "11:00 AM to 04:00 PM",
    Location: "MESA Logo at E-Building, VIIT, Pune ",
    Dept: "MECH",
    EntryFee: "200",
  },

  {
    id: "19",
    EventName: "The Stats Say…(Team)",
    EventPoster: thatstatsay,
    EventBanner: default_banner,
    Description: (
      <div>
        The theme of the event is data story-telling. The participant teams will
        be given problem statements which will contain basic information of the
        company such as the domain, keywords related to products, aim, target
        audience. A small dataset describing company’s past performance will
        also be given.
        <br />
        The teams have to design a website that will describe the company’s
        entire details in best possible way. The site can be developed using any
        means which can include frameworks or programming languages or even
        tools such as figma/wordpress. Participating teams are expected to make
        use of attractive charts that best describe the growth of company. The
        evaluation will be done considering design factors and other criteria
        such as readability of the content.
        <br />
        <br />
        Requirements:
        <br />- Bring your own laptop.
      </div>
    ),
    EventHost:
      "Priyanshu Nikam (+919561451705) Swarangi Gulalkari (+917038370827)",
    Date: " 21-02-2023",
    DateWord: "Tue, Feb 21",
    Time: "2:00PM Onwards",
    Location: "B201, B-Building, VIIT, Pune ",
    Dept: "CS",
    EntryFee: "80",
  },

  {
    id: "20",
    EventName: "A Day Of Solutions (Both)",
    EventPoster: dayofsolution,
    EventBanner: default_banner,
    Description: (
      <div>
        A Day Of Solutions will be an offline problem solving challenge. The
        participants will be given notepads. Problems will be provided to the
        mail id of respected participants, which the participants have to give a
        effective and relevant solution of the any one problem.Participants will
        be given problem statements 48 hours prior, of which they must provide
        solutions in the form of presentation by presenting the solution infront
        of the judges.Participants have to submit the solutions on the Google
        Form circulated before 9am on the day of event. Top 2 participant groups
        who have presented the most effective solutions will be selected as
        winners. <br />
        Event Duration: 4 hours (10mins for each presentation)
      </div>
    ),
    EventHost: "Sahil Ingle  (+919579534587) Shubham Anawade (+919156789105)",
    Date: " 20-02-2023",
    DateWord: "Mon, Feb 20",
    Time: "",
    Location: "D-007, D-Building, VIIT, Pune ",
    Dept: "CIVIL",
    EntryFee: "100",
  },

  {
    id: "21",
    EventName: "BridgeIT (Team)",
    EventPoster: bridgeIT,
    EventBanner: default_banner,
    Description: (
      <div>
        BridgeIT is a model making event, a model of bridge is to be constructed
        using structural knowledge about trusses. All the dimension criteria and
        necessary material will be provided to the participants at the time of
        the event.
        <br />
        Event Duration: 3 hours
      </div>
    ),
    EventHost: "Muzaffar Solanki (+919175493115)",
    Date: " 20-02-2023,21-02-2023",
    DateWord: "Mon & Tue, Feb 20 & 21",
    Time: "",
    Location: "D-007, D-Building, VIIT, Pune ",
    Dept: "CIVIL",
    EntryFee: "150",
  },

  {
    id: "22",
    EventName: "Tech Hunt",
    EventPoster: treasurehunt,
    EventBanner: default_banner,
    Description: (
      <div>
        An enthralling escape from a monotonous routine to an exhilarating hunt.
        Treasure hunt is a game where you will be setting up a treasure hunt by
        hiding clues and the treasure. Each clue will tell you where to find the
        next clue. The final clue will lead to the treasure. <br />
        Event Duration: 4hrs
      </div>
    ),
    EventHost: "Rachita Munot (+918080362147)",
    Date: " 20-02-2023,21-02-2023",
    DateWord: "Mon & Tue, Feb 20 & 21",
    Time: "",
    Location: "D-101, D-Building, VIIT, Pune ",
    Dept: "CIVIL",
    EntryFee: "200",
  },

  {
    id: "23",
    EventName: "What The Hack",
    EventPoster: whatthehack,
    EventBanner: default_banner,
    Description: (
      <div>
        A workshop on Cybersecurity and Linux followed by a quiz based on
        cybersecurity as well as coding fundamentals. The quiz will serve as the
        first round for qualification which will be further followed by a
        traditional coding contest on Hackerrank and a Tag team coding contest
        as the last and final round. Registrations for the above will be in
        teams of two (both team members have to register). <br />
        *Individual participation is allowed up till the final round where a
        teammate will be assigned to you. <br />
        Flow: 1 Hour Workshop <br /> Round 1: Quiz (Duo or Individual) <br />
        Round 2: Traditional Coding Contest (Duo or Individual)
        <br /> Final Round: Tag Team Coding Contest (Duo Only)
      </div>
    ),
    EventHost: "Jay Subhedar (+9198601 9204)",
    Date: "20-02-2023",
    DateWord: "Mon, Feb 20",
    Time: "13:00  Workshop 14:00-18:00 Quiz and Coding Rounds",
    Location: "B-101",
    Dept: "CS",
    EntryFee: "50",
  },
];

export default EventsData;
