<template>
 <img src="http://ewem.oo0.site/res/images/cailiao/shangbiao.jpg" alt="" style="width: 40%; margin-left: 3rem; margin-top: 2rem;">
 
 <var-card 

    v-for="item,index in plans" :key="index"
     :title="item.title"
    :subtitle="item.subtitle"
    :description="item.description"
    :src="item.url"
    style="width: 80%; margin-left: 1rem; margin-top: 1rem;"
  />
  
</template>
<script>
import axios from 'axios';
export default{
  data(){
    return {
 plans: [{
  title:"Blocs spark concerns on divided world",
  subtitle:"2022-08-12 10:43",
  description:"The G7 foreign ministers issued a statement on Aug 3 expressing so-called 'concern' over China's actions. Similarly, another joint statement on Aug 5 by US Secretary of State Antony J. Blinken, Australian Foreign Minister Penny Wong and Japanese Foreign Minister Yoshimasa Hayashi claimed that China's countermeasures",
  url: 'https://img-blog.csdnimg.cn/img_convert/ec13b1d884b422ad6ac1746504fa0454.png',
      },
      {
         title:"Life｜Figuring things out",
  subtitle:"2022-08-12 10:43",
  description:"When he was younger, there were times when he wanted to give up the craft altogether, mostly because the locals didn't value his work and scorned him for not having a stable job with a regular income.",
        url: 'https://img-blog.csdnimg.cn/img_convert/462ba175388a6005201d8a73f186c527.png',
      },
      {
         title:"Sports｜Wang kicks off new adventure",
  subtitle:"2022-08-12 10:43",
  description:"Racing Louisville announced Wang's arrival on Wednesday, revealing it has signed the 2018 Asian Women's Footballer of the Year through the 2023 season after acquiring her NWSL playing rights via a trade with Seattle-based club OL Reign.",
        url: 'https://img-blog.csdnimg.cn/img_convert/213a362a143bd47b8b4e3dad5138d53d.png',
      }
      ],
    }
  },
   created(){
    axios.post('http://ewem.oo0.site/api/ewem/code/collect',{
"batchNumber":"123123",
"codeId":"1562090505947467782"
}).then((res)=>{
      console.log(res);
    });
   }

}
</script>