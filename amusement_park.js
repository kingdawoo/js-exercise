let userName = "David";
let userAge = 19;

const createVisitor = (a, b, c) => {
    const visitor = {
        name: a,
        age: b,
        ticketId: c,
    };
    console.log(visitor);
    return visitor;
}   

const revokeTicket = revoke => {
    revoke.ticketId = null;
    console.log(revoke);
}

const visitor = createVisitor(userName, userAge, '23LA9T41');
// revokeTicket(visitor);

const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'David'
};

ticketStatus = (ticketObj, ticketId) => {
    if(ticketObj.hasOwnProperty(ticketId) && ticketObj[ticketId] != null) {
        console.log(`sold to ${ticketObj[ticketId]}`);
    }
    else if(ticketObj.hasOwnProperty(ticketId)) {
        console.log("not sold");
    }
    else {
        console.log("unknown ticket id");
    }
}

ticketStatus(tickets, '23LA9T41');
ticketStatus(tickets, '0H2AZ123');
ticketStatus(tickets, '0H2AZ3');

simpleTicketStatus = (ticketObj, ticketId) => {
    if(ticketObj.hasOwnProperty(ticketId) && ticketObj[ticketId] != null) {
        console.log(`sold to ${ticketObj[ticketId]}`);
    }
    else {
        console.log("invalid ticket !!!");
    }
}

simpleTicketStatus(tickets, '23LA9T41');
simpleTicketStatus(tickets, '0H2AZ123');
simpleTicketStatus(tickets, 'RE90VAW7');

const gtcVersion = visitor => {
    if (visitor.gtc && visitor.gtc.signed && visitor.gtc.version) {
        return console.log(visitor.gtc.version);
    } else {return console.log(undefined);}
}
const visitorNew = {
    name: 'David',
    age: 45,
    ticketId: 'H32AZ123',
    gtc: {
      signed: true,
      version: '2.1',
    },
  };

  const visitorOld = {
    name: 'David',
    age: 45,
    ticketId: 'H32AZ123',
  };
gtcVersion(visitorNew);
gtcVersion(visitorOld);


