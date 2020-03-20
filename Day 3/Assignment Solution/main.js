function getFortuneCookie(){
    let fortunes=[
      "The world may be your oyster, but it doesn\'t mean you\'ll get its pearl.",
          "You will be hungry again in one hour.",
          "The road to riches is paved with homework.",
          "You can always find happiness at work on Friday.",
          "Actions speak louder than fortune cookies.",
          "Because of your melodic nature, the moonlight never misses an appointment."
  ];
    return fortunes[Math.floor(Math.random()*fortunes.length)]
  }
  
  console.log(getFortuneCookie())
  