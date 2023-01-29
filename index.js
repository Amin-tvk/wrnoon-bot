const { Bot , InlineKeyboard , Keyboard  , session , SessionFlavor , Context , SessionData} = require("grammy");
const { freeStorage } = require("@grammyjs/storage-free");
const { Menu } = require("@grammyjs/menu");
const {
  conversations,
  createConversation,
} = require("@grammyjs/conversations");
var validator = require('validator');
//import { md } from 'telegram-md';
//import { MenuRange } from "https://deno.land/x/grammy_menu@v1.1.2/mod.ts";
const { count } = require("console");
var types = require('typology');
//import { createReadStream } from "fs";
let  mysql = require('mysql2');
var Kavenegar = require('kavenegar');
let config = require('./config.js');
let connection = mysql.createConnection(config);
//varible

let input = false;
this.data = false;
this.inputut_number = false;
const logo = "https://ibb.co/hfnLP3w"
//import { freeStorage } from "https://deno.land/x/grammy_storage_free/mod.ts";
// Create a bot.
const bot = new Bot("5959897233:AAG5Kv-eHSeKl39DfK_s8DVcoTjZ78eYUxk" , {
  polling: false 
});
var api = Kavenegar.KavenegarApi({
  apikey: '395656654936314A36784F347346654B5831534F70366F44666F687559396D7350445055764C56525059383D'
});
let test = false;
//Connect to mysql
connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});
function enable_name(){ 
  input = true
}
function name(){
  return ctx.editMessageText("please enter name ")
}
bot.use(session({
  initial: () => ({ count: 0 }),
  storage: freeStorage(bot.token),
}));
/*
const inlineKeyboard = new InlineKeyboard()
  .text("« 1", "first")
  .text("‹ 3", "prev")
  .text("· 4 ·", "stay")
  .text("5 ›", "next")
  .text("31 »", "last");
const keyboard = new Keyboard()
  .text("Yes, they certainly are").row()
  .text("I'm not quite sure").row()
  .text("No. 😈")
  .resized();
  */
const main = new Menu("root-menu")
  //.text("سفارش نان", (ctx) => ctx.reply("Hi!")).row()
  .submenu("سفارش نان" + "🍞", "credits-menu").row()
  .submenu("💰کیف پول" , "wallet")
  .submenu("✨پنل کاربری" , "panel")
  .submenu("📜قوانین" , "Rules").row()
  .submenu("📞پشتیبانی" ,  "Support")
  .text("Channel Wrnoon" +"📢", (ctx) => ctx.reply("@Wrnoon_channel") )
//منو اصلی
const Order = new Menu("credits-menu")
.submenu("نان تنوری", "bread_tanori" ,  (ctx) => { 
  ctx.session.type = [1 , "تنوری"]
}).row()
.submenu("نان سنگک", "bread_sangak" ,  (ctx) => { 
  ctx.session.type = [2 , "سنگک"]
}).row()
  //.text("نان تنوری", (ctx) => ctx.editMessageText("تعداد نان را انتخاب کنید")  ,).row()
  //.submenu("نان سنگک" , "bread_sangak" , (ctx) => ctx.editMessageText("تعداد نان را انتخاب کنید")).row()
  .back("برگشت");
  //منو کیف پول
const Wallet = new Menu("wallet")
  //.text("Show Credits", 
  //(ctx) => ctx.reply("Wellcome to wrnoon" ))
  .text(
    () => new Date().toLocaleString(), // button label is current time
    (ctx) => ctx.menu.update(), // update time on button click
  )
  .back("برگشت");
  // منو کاربری 
const panel = new Menu("panel")
  .text("Show Credits", (ctx) => ctx.reply("Wellcome to wrnoon"))
  .back("برگشت");
  //منو قوانین 
const Rules = new Menu("Rules")
    .text("Show Credits", (ctx) => ctx.editMessageText("@Wrnoon_channel"))
    .back("برگشت");
  // منو پشتیبانی
const Support = new Menu("Support")
  .text("Show Credits", (ctx) => ctx.reply("Wellcome to wrnoon"))
  .back("برگشت")
  // منو چنل 
const Channel = new Menu("Channel")
  .text("Show Credits", (ctx) => ctx.reply("Wellcome to wrnoon"))
  .back("برگشت");
const bread_tanori = new Menu("bread_tanori")
  .submenu("1", "name_on_1" , (ctx) => {
    ctx.editMessageText(  " نام خود را به انگلیسی وارد کنید " + "\n \n" + "♦" + "(بیشتر از سه حرف باشد) ")
    ctx.session.number_bread = [ 1 , "یک"]
    ctx.session.input = true
  }).row()
  .submenu("2", "name_on_1" ,  (ctx) => {
    ctx.editMessageText(  " نام خود را به انگلیسی وارد کنید " + "\n \n" + "♦" + "(بیشتر از سه حرف باشد) ")
    ctx.session.number_bread = [ 2 , "دو"]
    ctx.session.input = true
  }).row()
  .submenu("3","name_on_1" ,  (ctx) => {
    ctx.editMessageText(  " نام خود را به انگلیسی وارد کنید " + "\n \n" + "♦" + "(بیشتر از سه حرف باشد) ")
    ctx.session.number_bread = [ 3 , "سه"]
    ctx.session.input = true
  }).row()
  .submenu("4","name_on_1" ,  (ctx) => {
    ctx.editMessageText(  " نام خود را به انگلیسی وارد کنید " + "\n \n" + "♦" + "(بیشتر از سه حرف باشد) ")
    ctx.session.number_bread = [ 4 , "چهار"]
    ctx.session.input = true
  }).row()
  .submenu("5","name_on_1" ,  (ctx) => {
    ctx.editMessageText(  " نام خود را به انگلیسی وارد کنید " + "\n \n" + "♦" + "(بیشتر از سه حرف باشد) ")
    ctx.session.number_bread = [ 5 , "پنج"]
    ctx.session.input = true
  }).row()
  .back("بازگشت" , (ctx) => ctx.editMessageText('کاربر'+ctx.chat.first_name+'به ربات ورنون خوش امدی'+'🌹' + "\n \n"+" برای ثبت سفارش روی سفارش نان ضربه بزنید") )
const name1 = new Menu("name_on_1")
.back("بازگشت" , (ctx) => {ctx.editMessageText('کاربر'+ctx.chat.first_name+'به ربات ورنون خوش امدی'+'🌹' + "\n \n"+" برای ثبت سفارش روی سفارش نان ضربه بزنید") ,  ctx.session.input = false})
const name2 = new Menu("name_on_2")
.back("بازگشت" , (ctx) => {ctx.editMessageText('کاربر'+ctx.chat.first_name+'به ربات ورنون خوش امدی'+'🌹' + "\n \n"+" برای ثبت سفارش روی سفارش نان ضربه بزنید") ,  ctx.session.input = false})
const bread_sangak = new Menu("bread_sangak")
//.url("slm","https://telegram.com").row()
.submenu("1", "name_on_2" , (ctx) => {
  ctx.editMessageText(  " نام خود را به انگلیسی وارد کنید " + "\n \n" + "♦" + "(بیشتر از سه حرف باشد) ")
  ctx.session.number_bread = [ 1 , "یک"]
  ctx.session.input = true
}).row()
.submenu("2", "name_on_2" ,  (ctx) => {
  ctx.editMessageText(  " نام خود را به انگلیسی وارد کنید " + "\n \n" + "♦" + "(بیشتر از سه حرف باشد) ")
  ctx.session.number_bread = [ 2 , "دو"]
  ctx.session.input = true
}).row()
.submenu("3","name_on_2" ,  (ctx) => {
  ctx.editMessageText(  " نام خود را به انگلیسی وارد کنید " + "\n \n" + "♦" + "(بیشتر از سه حرف باشد) ")
  ctx.session.number_bread = [ 3 , "سه"]
  ctx.session.input = true
}).row()
.submenu("4","name_on_2" ,  (ctx) => {
  ctx.editMessageText(  " نام خود را به انگلیسی وارد کنید " + "\n \n" + "♦" + "(بیشتر از سه حرف باشد) ")
  ctx.session.number_bread = [ 4 , "چهار"]
  ctx.session.input = true
}).row()
.submenu("5","name_on_2" ,  (ctx) => {
  ctx.editMessageText(  " نام خود را به انگلیسی وارد کنید " + "\n \n" + "♦" + "(بیشتر از سه حرف باشد) ")
  number_bread = 5
  ctx.session.number_bread = [ 5 , "پنج"]
  ctx.session.input = true
  console.log(ctx.session.number_bread)
  //enable_name()
}).row()
.back("بازگشت" , (ctx) => ctx.editMessageText('کاربر'+ctx.chat.first_name+'به ربات ورنون خوش امدی'+'🌹' + "\n \n"+" برای ثبت سفارش روی سفارش نان ضربه بزنید") )
//ctx.reply("Wellcome to wrnoon")).row()
const peyment = new Menu("peyment")
.url("پرداخت", "http://google.com").row()
.back("بازگشت به منو اصلی")
main.register(Order);
main.register(Wallet);
main.register(Support);
main.register(Channel);
main.register(panel);
main.register(Rules);
Order.register(bread_tanori)
Order.register(bread_sangak)
bread_tanori.register(name1)
bread_sangak.register(name2)
main.register(peyment);
bot.use(main);

// Stores data per user.
function getSessionKey(ctx) {
  // Give every user their personal session storage
  // (will be shared across groups and in their private chat)
  return ctx.from?.id.toString();
}


bot.command("start", async (ctx) => {
  ctx.session.input  = false
  //connection.query(`INSERT INTO tbl_user (user_id,username)
    //  VALUES (${ctx.chat.id},'${ctx.chat.username}');`)
    await ctx.replyWithPhoto(logo  );
    ctx.session.count++ ;
    console.log(ctx.session.count);
     //https://ibb.co/hfnLP3w
  // Send the menu.
    await ctx.reply(
      
    'کاربر'+ctx.chat.first_name + 'به ربات ورنون خوش امدی' +'🌹' + "\n \n"+" برای ثبت سفارش روی سفارش نان ضربه بزنید" ,
    
     { reply_markup: main , force_reply: true  , reply_to_message_id: ctx.msg.message_id }); 
    
      console.log(ctx.from?.id.toString() , /*sql*/  )
});
bot.command("stop", async (ctx) => {
  await ctx.reply(
    'بکیرم')
});

  
  const photo = bot.on("message:photo", (ctx) => {
  if(this.test == true){
  ctx.reply("در حال تایید مدیریت ...")}
  console.log(photo) 
  console.log("ok")
  });
/*
bot.on("message", (ctx) => {
      const message = ctx.message; // the message object
    });
*/
bot.catch((err) => console.error(err));
bot.start();

  
function doStuff() {
  date = Date().toLocaleString()
  console.log("Bot is working ..." , input , date , validator.isNumeric('21vsd') )
  
  setTimeout(doStuff, 5000);
}
setTimeout(doStuff, 5000);
/*
if (input == true){
  bot.on("message", (ctx) => ctx.reply("ویت" , 
  {reply_to_message_id: ctx.msg.message_id}))
}else{
  bot.on("message", (ctx) => ctx.reply("داده غیر مجاز!" , 
    {reply_to_message_id: ctx.msg.message_id}))
}
*/
//bot.on("message", (ctx) => ctx.reply(check_num(input)))
bot.on("message", (ctx) => {
  if (ctx.session.input == true) {
    name = ctx.message.text
    if(validator.isNumeric(name) == false && name.length >= 3){
      ctx.reply(`  
      ${name} عزیز سفارش شما بصورت زیر میباشد 

        ${ctx.session.number_bread[1]} عدد نان ${ctx.session.type[1]}
       
       ` , 
      { reply_markup: peyment , reply_to_message_id: ctx.msg.message_id} )
    }else{
      ctx.reply("داده غیر مجاز!" , 
      {reply_to_message_id: ctx.msg.message_id})
    }
  console.log(name)
}else{
    ctx.reply("داده غیر مجاز!" , 
    {reply_to_message_id: ctx.msg.message_id})
  }
})
  

  

  