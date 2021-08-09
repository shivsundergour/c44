class Form {
   
    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
      this.musicButton = createButton('music');
      this.instruction = createButton('instruction');
      this.instructionstext = createElement('h4');
      
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.instruction.hide();
      this.musicButton.hide();
      this.instructionstext.hide();
    }
  
    display(){
      this.title.html("Tank Attack !!!");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.reset.position(displayWidth-100,20);
      this.musicButton.position(displayWidth-100,100)
      this.instruction.position(displayWidth/100,100)
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
      var a = 0;
       this.instruction.mousePressed(()=>{
           if(a === 0){
            this.instructionstext.html("instructions")
            this.instructionstext.position(displayWidth/8,150);
            a = 1 ;
           }
           else if(a === 1){
            this.instructionstext.html("");
            a = 0;
            console.log(a)
           } 
       });
       this.musicButton.mousePressed(()=>{
         
       });
       this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
       });
  
    }
  }
