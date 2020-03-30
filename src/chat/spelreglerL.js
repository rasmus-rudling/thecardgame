import React from 'react';

var reglerLong = <div>
    <i>The Card Game</i> går ut på att ni tillsammans i laget ska välja ett rött eller blått kort. Ni tävlar mot det andra laget och poängen fördelas enligt:
    <br />
    <br /><img src={require('../blue_card.png')}/><img src={require('../blue_card.png')}/> Båda lagen väljer det blåa kortet. Alla deltagare får 50 poäng.
    <br /><img src={require('../red_card.png')}/><img src={require('../blue_card.png')}/> Ni väljer det röda kortet. Det andra laget väljer det blåa kortet. Alla deltagare i ditt lag får 100 poäng <i>var</i>. Alla deltagare i det andra laget får 0 poäng.
    <br /><img src={require('../blue_card.png')}/><img src={require('../red_card.png')}/> Ni väljer det blåa kortet. Det andra laget väljer det röda kortet. Alla deltagare i ditt lag får 0 poäng. Alla deltagare i det andra laget får 100 poäng var.
    <br /><img src={require('../red_card.png')}/><img src={require('../red_card.png')}/><i><b>Men </b></i> väljer <i>båda</i> lagen det röda kortet får alla deltagare, i båda lagen, 0 poäng.
    <br />
    <br />
    <b>Pris: </b> Du kommer spela spelet två gånger - vid två olika tillfällen. Du har vid båda dessa tillfällen möjlighet att samla poäng. Deltagaren som i
    slutändan har flest poäng vinner presentkort på 200 kr på valfri butik listad på <i><u>gogift.com</u></i>, där finns tex Clas Ohlsson, Åhlens, MatHem, H&M och många mer.
    < br/>
    <br />
    Nu är det dags för er i laget att diskutera och komma fram till vilket kort ni vill välja. En bot kommer efter en stund kolla med er om ni är redo att gå till beslut.
    När alla lagmedlemmar bekräftat att ni är redo kommer en ruta för röstning dyka upp. Annars får ni fortsätta diskutera, och boten återkommer igen efter en stund.
    Ni kan som längst diskutera i 10 minuter. Det är inte möjligt att kommunicera med det andra laget.
    < br/>
    <br />
    När båda lagen har tagit sitt beslut kommer en ruta upp med vilka som vann. Motståndarlaget kan inte se att ni gått till beslut förrän efter spelet är över.
    < br/>
    <br />
    <font color="red"><b>Ni kommer alltså endast köra <u>en</u> match idag, som pågår i 10 minuter. (Och inte 45 minuter som stod i Doodlen). </b> Ni som kommer via kursen DM1578 på KTH får fortfarande högskolepoäng för de 45 minuterna.</font>
    <br />
    <br />
    <b><i>Lycka till!</i></b>

</div>;

export default reglerLong;