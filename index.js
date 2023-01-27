const { Bot , InlineKeyboard , Keyboard  , session , SessionFlavor , Context , freeStorage , SessionData} = require("grammy");
const { Menu } = require("@grammyjs/menu");
const {
  conversations,
  createConversation,
} = require("@grammyjs/conversations");
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
function enable_number(){
  console.log(input)
  input1 = input
  console.log(input)


}
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
.submenu("نان تنوری", "bread_tanori" ,  (ctx) => { ctx.reply("Wellcome to wrnoon")
enable_number();
}).row(
  
  )
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
  .text("Show Credits", (ctx) => ctx.reply("Wellcome to wrnoon"))
  .submenu("3", (ctx) => { ctx.reply("Wellcome to wrnoon")

}).row()
const bread_sangak = new Menu("bread_sangak")
//.url("slm","https://telegram.com").row()
.submenu("1", (ctx) => 
ctx.reply("Wellcome to wrnoon"),
).row()
.submenu("3", (ctx) => ctx.reply("Wellcome to wrnoon")).row()
.submenu("4", (ctx) => ctx.reply("Wellcome to wrnoon")).row()

.back("برگشت" , (ctx) => ctx.editMessageText('کاربر'+ctx.chat.first_name+'به ربات ورنون خوش امدی'+'🌹' + "\n \n"+" برای ثبت سفارش روی سفارش نان ضربه بزنید"));
//ctx.reply("Wellcome to wrnoon")).row()

main.register(Order);
main.register(Wallet);
main.register(Support);
main.register(Channel);
main.register(panel);
main.register(Rules);
main.register(bread_tanori);
main.register(bread_sangak);
bot.use(main);

/*bot.use(session({ 
    initial: () => ({ count: 0 }),
    storage: freeStorage<SessionData>(bot.token),
    
  }));
  */
  
bot.command("start", async (ctx) => {
  
  //connection.query(`INSERT INTO tbl_user (user_id,username)
    //  VALUES (${ctx.chat.id},'${ctx.chat.username}');`)
    await ctx.replyWithPhoto(logo , );
   
     //https://ibb.co/hfnLP3w
  // Send the menu.
    await ctx.reply(

    'کاربر'+ctx.chat.first_name + 'به ربات ورنون خوش امدی' +'🌹' + "\n \n"+" برای ثبت سفارش روی سفارش نان ضربه بزنید" ,
    
     { reply_markup: main , force_reply: true  , reply_to_message_id: ctx.msg.message_id }); 
    
      console.log(ctx.from?.id.toString() , /*sql*/ )
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
bot.start();

  
function doStuff() {
  console.log("Bot is working ..." , input )
  
  setTimeout(doStuff, 5000);
}
setTimeout(doStuff, 5000);
/*
if (input == true){
  bot.on("message", (ctx) => ctx.reply("ویت" , 
  {reply_to_message_id: ctx.msg.message_id}))
}else{
  bot.on("message", (ctx) => ctx.reply("غیر مجاز!" , 
    {reply_to_message_id: ctx.msg.message_id}))
}
*/
//bot.on("message", (ctx) => ctx.reply(check_num(input)))
bot.on("message", ctx => {
  if (input == true) {ctx.reply("ویت" , 
  {reply_to_message_id: ctx.msg.message_id}) 
  console.log(ctx.message.text);

}else{
    ctx.reply("غیر مجاز!" , 
    {reply_to_message_id: ctx.msg.message_id})
  }
})
  

  

  