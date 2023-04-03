const polls = [
    {
      id:'CC749',
      title:'What is your favourite programming language?',
      description:'there are lot of popular programming languages available.Among them what is your favourite',
      option:[
          {id:'1a' , value:'C programming' ,vote:0},
          {id:'2a' , value:'Java' ,vote:0},
          {id:'3a' , value:'JavaScript' ,vote:0},
          {id:'4a' , value:'Python' ,vote:0}
      ],
      created:new Date(),
      totalVote:0,
      opinions:[]
  },
  {
    id:'C750',
    title:'Which frontend Framework do you Prefer?',
    description:'I like jascript so  much',
    option:[
        {id:'5a' , value:'Angular' ,vote:0},
        {id:'6a' , value:'React' ,vote:0},
        {id:'7a' , value:'Vue' ,vote:0}
    ],
    created:new Date(),
    totalVote:0,
    opinions:[]
},
{
    id:'751',
    title:'What is the best way to create an android app?',
    description:'I want to create an andriod app but i dont  understand which technology would be better?',
    option:[
        {id:'9a' , value:'Kotlin' ,vote:0},
        {id:'10a' , value:'Java' ,vote:0},
        {id:'11a' , value:'React Native' ,vote:0},
        {id:'12a' , value:'Fluter' ,vote:0},
        {id:'13a' , value:'Ionic' ,vote:0}
    ],
    created:new Date(),
    totalVote:0,
    opinions:[]
}
];
  export default polls;