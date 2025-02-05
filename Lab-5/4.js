const event=require('events')
const emit=new event()
emit.on('User Details',(name,age)=>{
    console.log(`Hello ${name}! You are ${age} years old`)
})
emit.emit('User Details','Rahul',25);
emit.emit('User Details','Nikhitha',20);
emit.emit('User Details','Preethi',19);

