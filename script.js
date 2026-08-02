
var PRODUCTS = [
  // ===== HEADPHONES =====
  { id:"mh-001", name:"Monster Mission ANC200", model:"MH-MN-ANC200", category:"headphones",
    regularPrice:18999, discountPrice:12399, rating:0, stock:"In Stock", badge:"Best Seller",
    media:[
      {type:"image", url:"images/anc200.jpg", caption:"Front view"},
      {type:"image", url:"images/anc200_1.jpg", caption:"Side profile"},
      {type:"image", url:"images/anc200_3.jpg", caption:"Ear cup detail"},
      {type:"image", url:"images/anc200_2.jpg", caption:"Ear cup detail"},
      {type:"image", url:"images/anc200_7.jpg", caption:"Ear cup detail"},
      {type:"image", url:"images/anc200_4.jpg", caption:"Ear cup detail"},
      {type:"image", url:"images/anc200_6.jpg", caption:"Ear cup detail"},
      {type:"image", url:"images/anc200_5.jpg", caption:"Ear cup detail"},
      // {type:"video", url:"https://cdn.coverr.co/videos/coverr-headphones-on-table-2633/1080p.mp4", caption:"Product video"}
    ],
    description:"Experience immersive gaming with the Monster Mission ANC200. Featuring Active Noise Cancellation (ANC), ultra-low latency wireless connectivity, AI noise-cancelling microphone, dual Game & Music modes, RGB lighting, and up to 70 hours of battery life for exceptional performance and comfort.",
    specs:[{label:"Bluetooth Version",value:"6.0"}
      ,{label:"Wireless Technology",value:"2.4GHz Wireless"}
      ,{label:"Surround Sound",value:"7.1 Virtual Surround Sound"},{label:"Sound Modes",value:"Game Mode & Music Mode"},{label:"Battery",value:"Up to 70 Hours"},{label:"Latency",value:"Ultra-Low(<20ms)"},{label:"Noise Cancellation",value:"ANC up to 32dB"}
      ,{label:"RGB Lighting",value:"Yes"},{label:"Charging Time",value:"Approx. 3 Hours"},{label:"Charging",value:"USB-C"},{label:"Warranty",value:"1 Year"}] },
  
    { id:"mh-002", name:"Monster Persona SE ANC", model:"MH-PS-SE", category:"headphones",
    regularPrice:16499, discountPrice:8999, rating:0, stock:"In Stock", badge:"Hot Deal",
    media:[
      {type:"image", url:"images/se_b.jpg", caption:"Front view"},
      {type:"image", url:"images/se_w.jpg", caption:"Front view"},
      {type:"image", url:"images/se13.jpeg", caption:"Front view"},
      {type:"image", url:"images/se.jpeg", caption:"Front view"},
      {type:"image", url:"images/se5.jpg", caption:"Front view"},
      {type:"image", url:"images/se8.jpg", caption:"Front view"},
      {type:"image", url:"images/se9.jpg", caption:"Front view"},
      {type:"image", url:"images/se7.jpg", caption:"Front view"},
       {type:"image", url:"images/se10.jpg", caption:"Front view"},
      
      // {type:"image", url:"https://images.pexels.com/photos/3741115/pexels-photo-3741115.jpeg", caption:"Folded"},
      // {type:"video", url:"https://cdn.coverr.co/videos/coverr-using-headphones-2634/1080p.mp4", caption:"In use"}
    ],
    description:"The Monster Persona SE ANC wireless over-ear headphones combine active noise cancellation, signature audio tuning, and extended battery life for all-day listening. They block up to 98% of ambient noise while offering up to 60 hours of total playtime.",
    specs:[{label:"Driver",value:"40mm"},{label:"Battery",value:"Up to 60 Hours"},{label:"Bluetooth",value:"5.4"},{label:"ANC",value:"Blocks 98% background noise"},{label:"Charge",value:"5 mins gives 4 hours"},{label:"Charging",value:"USB-C"},{label:"Warranty",value:"1 Year"}] },
 

    { id:"mh-006", name:"Monster Aura Fit XH11", model:"MH-AF-XH11", category:"headphones",
    regularPrice:6499, discountPrice:2799, rating:0, stock:"Low Stock", badge:"HOT DEAL",
    media:[
      {type:"image", url:"images/xh11m.jpeg", caption:"Front view"},
      {type:"image", url:"images/xh11br.jpeg", caption:"Front view"},
      {type:"image", url:"images/xh11b.jpeg", caption:"Front view"},
      {type:"image", url:"images/xh11w.jpeg", caption:"Front view"},
      {type:"image", url:"images/xh11_.jpeg", caption:"Front view"},
      {type:"image", url:"images/xh11_1.jpeg", caption:"Front view"},
      {type:"image", url:"images/xh11_br.jpeg", caption:"Action"}
    ],
    description:"Experience immersive sound with the Monster Aura Fit XH11. Featuring powerful 40mm drivers, Bluetooth 5.4 connectivity, ANC noise cancellation, and up to 22 hours of battery life, it's built for music, gaming, and everyday use. The foldable design and soft ear cushions provide lasting comfort",
    specs:[{label:"Driver",value:"40mm"},{label:"Battery",value:"22 hours"},{label:"Bluetooth",value:"5.4"},{label:"ANC",value:"Supported"},{label:"Connectivity",value:"Bluetooth + Wired Mode"},{label:"Charging Time",value:"About 2 Hours"},{label:"Warranty",value:"1 Yaer"}] },


    { id:"mh-018", name:"Monster Airstar AH100", model:"MH-AS-AH100", category:"headphones",
    regularPrice:6199, discountPrice:2999, rating:0, stock:"Out Of Stock", badge:"",
    media:[
      {type:"image", url:"img/ah100.jpeg", caption:"Front view"},
      {type:"image", url:"img/ah100_1.jpeg", caption:"Front view"},
      {type:"image", url:"img/ah100_2.jpeg", caption:"Front view"},
      {type:"image", url:"img/ah100_3.jpeg", caption:"Front view"},
      {type:"image", url:"img/ah100_4.jpeg", caption:"Front view"},
      {type:"image", url:"img/ah100_5.jpeg", caption:"Action"}
    ],
    description:"The Monster Harmonic N22 is a premium ANC headphone featuring Bluetooth 6.0, powerful 40mm drivers, and an incredible 110-hour battery life. With Hybrid ANC, Transparency Mode, and multipoint connectivity, it's designed for immersive music, travel, work, and gaming.",
    specs:[{label:"Driver",value:"40mm"},{label:"Battery",value:"Upto 110 hours"},{label:"Bluetooth",value:"6.0"},{label:"ANC",value:"Hybrid"},{label:"Connectivity",value:"Bluetooth + Wired Mode"},{label:"ANC Depth",value:"Up to -45dB"},{label:"Warranty",value:"1 Year "}] },



    { id:"mh-007", name:"Monster Maxstar MQH08", model:"MH-MS-MQH08", category:"headphones",
    regularPrice:5899, discountPrice:2199, rating:0, stock:"Low Stock", badge:"",
    media:[
      {type:"image", url:"img/mqh08wb.jpeg", caption:"Front view"},
      {type:"image", url:"img/mqh08_b.jpeg", caption:"Front view"},
      {type:"image", url:"img/mqh08_w.jpeg", caption:"Front view"},
      {type:"image", url:"img/mqh08_p.jpeg", caption:"Front view"},
      {type:"image", url:"img/mqh08_.jpeg", caption:"Front view"},
      {type:"image", url:"img/mqh08_t.jpeg", caption:"Front view"},
      {type:"image", url:"img/mqh08_bh.jpeg", caption:"Front view"},
      {type:"image", url:"img/mqh08bt.jpeg", caption:"Front view"},
      {type:"image", url:"img/mqh08ft.jpeg", caption:"Front view"},
      {type:"image", url:"img/mqh08s.jpeg", caption:"Front view"},
      {type:"image", url:"img/mqh08.jpeg", caption:"Action"}
    ],
    description:"Enjoy powerful sound, premium comfort, and long-lasting performance with the Monster MQH08. Featuring 40mm titanium-coated drivers, immersive 360° spatial audio, Bluetooth 5.4 connectivity, and an impressive 60-hour battery life, these headphones are designed for music lovers, gamers, and everyday users alike. The lightweight 200g design, soft protein leather ear cushions, and dual-device connectivity ensure all-day comfort and convenience.",
    specs:[{label:"Driver",value:"40mm"},{label:"Battery",value:"Upto 60 hours"},{label:"Bluetooth",value:"5.4"},{label:"ANC",value:"Supported"},{label:"Connectivity",value:"Bluetooth + Wired Mode"},{label:"Latency",value:"Ultra-Low (0.038s)"},{label:"Warranty",value:"1 Year"},] },

 
    { id:"mh-003", name:"Monster Storm XKH01", model:"MH-ST-XKT01", category:"headphones",
    regularPrice:8499, discountPrice:3799, rating:0, stock:"In Stock", badge:"",
    media:[
      {type:"image", url:"images/xkh01_main.jpeg", caption:"Front view"},
      {type:"video", url:"images/xkh01v.mp4", caption:"Product video"},
      {type:"image", url:"images/xkh01b.jpg", caption:"Detail"},
      {type:"image", url:"images/xkh11_3.jpeg", caption:"Detail"},
      {type:"image", url:"images/xkh01r.jpg", caption:"Detail"},
      {type:"image", url:"images/xkh01_.jpg", caption:"Detail"},
      {type:"image", url:"images/xkh01_4.jpeg", caption:"Detail"},
      {type:"image", url:"images/xkh01_6.jpeg", caption:"Detail"},
      {type:"image", url:"images/xkh01_5.jpeg", caption:"Detail"},
      {type:"image", url:"images/xkh01_7.jpeg", caption:"Detail"},
      {type:"image", url:"images/xkh01_8.jpeg", caption:"Detail"},
      {type:"image", url:"images/xkh01_9.jpeg", caption:"Case"}
    ],
    description:"Experience powerful Hi-Fi sound with the Monster Storm XKH01. Featuring Bluetooth 5.3, 40mm dynamic drivers, up to 25 hours of battery life, and low-latency gaming mode, it's the perfect choice for music, gaming, and daily use. Its lightweight foldable design and soft ear cushions ensure all-day comfort.",
    specs:[{label:"Driver",value:"40mm"},{label:"Battery",value:"25 hours"},{label:"Bluetooth",value:"5.3"},{label:"ENC",value:"Noise Reduction"},{label:"Latency",value:"Low Latency(≤65ms)"},{label:"Charging",value:"USB-C"},{label:"Warranty",value:"1 Year"}] },
  
  
  
    { id:"mh-004", name:"Monster Storm XKH02", model:"MH-ST-XKT02", category:"headphones",
    regularPrice:9499, discountPrice:4899, rating:0, stock:"In Stock", badge:"",
    media:[
      {type:"image", url:"images/xkh02bwr.jpeg", caption:"Front view"},
      {type:"image", url:"images/xkh02b.jpeg", caption:"Front view"},
      {type:"image", url:"images/xkh02w.jpeg", caption:"Front view"},
      {type:"image", url:"images/xkh02r.jpeg", caption:"Front view"},
      {type:"image", url:"images/xkh02_.jpeg", caption:"Front view"},
      {type:"image", url:"images/xkh02_com.jpeg", caption:"Front view"},
      {type:"image", url:"images/xkh02wp.jpeg", caption:"Side"}
    ],
    description:"Enjoy immersive audio with the Monster XKH02, featuring advanced Bluetooth 5.4 connectivity, powerful 40mm drivers, and up to 25 hours of battery life. Designed for music, gaming, and everyday use, it offers reliable wireless performance with the flexibility of wired AUX connectivity.",
    specs:[{label:"Driver",value:"40mm"},{label:"Battery",value:"upto 25 hours"},{label:"Bluetooth",value:"5.4"},{label:"Frequency Response",value:"20Hz-20kHz Wide"},{label:"ENC",value:"Present"},{label:"Charging",value:"Micro-USB"},{label:"Warranty",value:"1 Year"}] },
  { id:"mh-005", name:"Monster Storm XKH03", model:"MH-ST-XKT03", category:"headphones",
    regularPrice:19999, discountPrice:7499, rating:0, stock:"In Stock", badge:"GAMING",
    media:[
      {type:"image", url:"images/xkh03rbw.jpeg", caption:"Front view"},
      {type:"image", url:"images/xkh03b.jpeg", caption:"Front view"},
      {type:"image", url:"images/xkh03w.jpeg", caption:"Front view"},
      {type:"image", url:"images/xkh03r.jpeg", caption:"Front view"},
      {type:"image", url:"images/xkh03_.jpeg", caption:"Front view"},
      {type:"image", url:"images/xkh03_1.jpeg", caption:"Front view"},
      // {type:"image", url:"https://images.pexels.com/photos/5775840/pexels-photo-5775840.jpeg", caption:"Ear cup"},
      // {type:"video", url:"https://cdn.coverr.co/videos/coverr-headphones-on-table-2633/1080p.mp4", caption:"Product video"}
    ],
    description:"Enjoy powerful Hi-Fi audio and immersive gaming with the Monster XKH03. Equipped with Bluetooth 5.3, large 40mm dynamic drivers, Active Noise Cancellation, and a massive 600mAh battery, it delivers up to 25 hours of wireless playback. The foldable over-ear design ensures comfort for gaming, music, and daily use. ",
    specs:[{label:"Driver",value:"40mm Dynamic"},{label:"Battery",value:"Up to 25 Hours"},{label:"Bluetooth",value:"5.3"},{label:"ANC + ENC",value:"Supported"},{label:"Microphone",value:"Built-in HD"},{label:"Range",value:"Up to 10m"},{label:"Connectivity",value:" Bluetooth + AUX Cable"},{label:"Frequency Response",value:"20Hz–20kHz"}] },
  
  
  
    // { id:"mh-006", name:"Monster Aura Fit XH11", model:"MH-AF-XH11", category:"headphones",
    // regularPrice:6499, discountPrice:2799, rating:0, stock:"Low Stock", badge:"HOT DEAL",
    // media:[
    //   {type:"image", url:"images/xh11m.jpeg", caption:"Front view"},
    //   {type:"image", url:"images/xh11br.jpeg", caption:"Front view"},
    //   {type:"image", url:"images/xh11b.jpeg", caption:"Front view"},
    //   {type:"image", url:"images/xh11w.jpeg", caption:"Front view"},
    //   {type:"image", url:"images/xh11_.jpeg", caption:"Front view"},
    //   {type:"image", url:"images/xh11_1.jpeg", caption:"Front view"},
    //   {type:"image", url:"images/xh11_br.jpeg", caption:"Action"}
    // ],
    // description:"Experience immersive sound with the Monster Aura Fit XH11. Featuring powerful 40mm drivers, Bluetooth 5.4 connectivity, ANC noise cancellation, and up to 22 hours of battery life, it's built for music, gaming, and everyday use. The foldable design and soft ear cushions provide lasting comfort",
    // specs:[{label:"Driver",value:"40mm"},{label:"Battery",value:"22 hours"},{label:"Bluetooth",value:"5.4"},{label:"ANC",value:"Supported"},{label:"Connectivity",value:"Bluetooth + Wired Mode"},{label:"Charging Time",value:"About 2 Hours"},{label:"Warranty",value:"1 Yaer"}] },


    // { id:"mh-007", name:"Monster Maxstar MQH08", model:"MH-MS-MQH08", category:"headphones",
    // regularPrice:5899, discountPrice:2199, rating:0, stock:"Low Stock", badge:"",
    // media:[
    //   {type:"image", url:"img/mqh08wb.jpeg", caption:"Front view"},
    //   {type:"image", url:"img/mqh08_b.jpeg", caption:"Front view"},
    //   {type:"image", url:"img/mqh08_w.jpeg", caption:"Front view"},
    //   {type:"image", url:"img/mqh08_p.jpeg", caption:"Front view"},
    //   {type:"image", url:"img/mqh08_.jpeg", caption:"Front view"},
    //   {type:"image", url:"img/mqh08_t.jpeg", caption:"Front view"},
    //   {type:"image", url:"img/mqh08_bh.jpeg", caption:"Front view"},
    //   {type:"image", url:"img/mqh08bt.jpeg", caption:"Front view"},
    //   {type:"image", url:"img/mqh08ft.jpeg", caption:"Front view"},
    //   {type:"image", url:"img/mqh08s.jpeg", caption:"Front view"},
    //   {type:"image", url:"img/mqh08.jpeg", caption:"Action"}
    // ],
    // description:"Enjoy powerful sound, premium comfort, and long-lasting performance with the Monster MQH08. Featuring 40mm titanium-coated drivers, immersive 360° spatial audio, Bluetooth 5.4 connectivity, and an impressive 60-hour battery life, these headphones are designed for music lovers, gamers, and everyday users alike. The lightweight 200g design, soft protein leather ear cushions, and dual-device connectivity ensure all-day comfort and convenience.",
    // specs:[{label:"Driver",value:"40mm"},{label:"Battery",value:"Upto 60 hours"},{label:"Bluetooth",value:"5.4"},{label:"ANC",value:"Supported"},{label:"Connectivity",value:"Bluetooth + Wired Mode"},{label:"Latency",value:"Ultra-Low (0.038s)"},{label:"Warranty",value:"1 Year"},] },


     { id:"mh-008", name:"Monster Persona 3rd ANC", model:"MH-PS-3ANC", category:"headphones",
    regularPrice:7499, discountPrice:2999, rating:0, stock:"Out Of Stock", badge:"",
    media:[
      {type:"image", url:"img/per3.jpeg", caption:"Front view"},
      {type:"image", url:"img/per3_1.jpeg", caption:"Front view"},
      {type:"image", url:"img/per3_2.jpeg", caption:"Front view"},
      {type:"image", url:"img/per3_3.jpeg", caption:"Front view"},
      {type:"image", url:"img/per3_4.jpeg", caption:"Front view"},
      {type:"image", url:"img/per3_5.jpeg", caption:"Front view"},
      {type:"image", url:"img/per3_6.jpeg", caption:"Front view"},
      {type:"image", url:"img/per3_7.jpeg", caption:"Front view"},
      {type:"image", url:"img/per3_8.jpeg", caption:"Front view"},
      {type:"image", url:"img/per3_9.jpeg", caption:"Front view"},
      {type:"image", url:"img/per3_10.jpeg", caption:"Front view"},
      {type:"image", url:"img/per3_13.jpeg", caption:"Front view"},
      {type:"image", url:"img/per3_12.jpeg", caption:"Front view"},
      {type:"image", url:"img/per3_11.jpeg", caption:"Action"}
    ],
    description:"The Monster Persona 3rd ANC is a premium over-ear headphone featuring Bluetooth 5.4, Hybrid Active Noise Cancellation, and an impressive battery life of up to 70 hours. Designed for music lovers, travelers, and daily users, it delivers powerful sound, deep bass, and all-day comfort.",
    specs:[{label:"Driver",value:"40mm"},{label:"Battery",value:"Upto 70 hours"},{label:"Bluetooth",value:"5.4"},{label:"ANC",value:"Supported"},{label:"Connectivity",value:"Bluetooth + Wired Mode"}
      ,{label:"Warranty",value:"1 Year "}] },



     { id:"mh-009", name:"Monster Persona 4th ANC", model:"MH-PS-4ANC", category:"headphones",
    regularPrice:8499, discountPrice:3299, rating:0, stock:"Out Of Stock", badge:"",
    media:[
      {type:"image", url:"img/per4.jpeg", caption:"Front view"},
      {type:"image", url:"img/per4_1.jpeg", caption:"Front view"},
      {type:"image", url:"img/per4_2.jpeg", caption:"Front view"},
      {type:"image", url:"img/per4_4.jpeg", caption:"Front view"},
      {type:"image", url:"img/per4_5.jpeg", caption:"Front view"},
      {type:"image", url:"img/per4_7.jpeg", caption:"Front view"},
      {type:"image", url:"img/per4_8.jpeg", caption:"Front view"},
      {type:"image", url:"img/per4_9.jpeg", caption:"Front view"},
      {type:"image", url:"img/per4_10.jpeg", caption:"Front view"},
      {type:"image", url:"img/per4_11.jpeg", caption:"Front view"},
      {type:"image", url:"img/per4_6.jpeg", caption:"Front view"},
      {type:"image", url:"img/per4_14.jpeg", caption:"Front view"},
      {type:"image", url:"img/per4_12.jpeg", caption:"Front view"},
      {type:"image", url:"img/per4_13.jpeg", caption:"Action"}
    ],
    description:"The Monster Persona 4th ANC is a premium over-ear headphone featuring Bluetooth 5.4, powerful 40mm drivers, and advanced 45dB Active Noise Cancellation. With up to 60 hours of battery life, three listening modes, and a lightweight foldable design, it's ideal for music, gaming, travel, and daily use.",
    specs:[{label:"Driver",value:"40mm"},{label:"Battery",value:"Upto 60 hours"},{label:"Bluetooth",value:"5.4"},{label:"ANC",value:"Supported"},{label:"Connectivity",value:"Bluetooth + Wired Mode"},{label:"ANC Depth",value:"Up to 45dB"},{label:"Warranty",value:"1 Year "}] },



     { id:"mh-010", name:"Monster Persona 5th ANC", model:"MH-PS-5ANC", category:"headphones",
    regularPrice:8999, discountPrice:3499, rating:0, stock:"Out Of Stock", badge:"",
    media:[
      {type:"image", url:"img/per5.jpeg", caption:"Front view"},
      {type:"image", url:"img/per5_1.jpeg", caption:"Front view"},
      {type:"image", url:"img/per5_2.jpeg", caption:"Front view"},
      {type:"image", url:"img/per5_3.jpeg", caption:"Front view"},
      {type:"image", url:"img/per5_4.jpeg", caption:"Front view"},
      {type:"image", url:"img/per5_5.jpeg", caption:"Front view"},
      {type:"image", url:"img/per5_6.jpeg", caption:"Front view"},
      {type:"image", url:"img/per5_8.jpeg", caption:"Front view"},
      {type:"image", url:"img/per5_7.jpeg", caption:"Front view"},
      {type:"image", url:"img/per5_9.jpeg", caption:"Front view"},
      {type:"image", url:"img/per5_10.jpeg", caption:"Front view"},
      {type:"image", url:"img/per5_11.jpeg", caption:"Action"}
    ],
    description:"The Monster Persona 5th ANC is a premium over-ear headphone featuring Bluetooth 6.0, powerful 40mm drivers, and advanced Active Noise Cancellation. With up to 70 hours of battery life, multipoint connectivity, and a foldable design, it's built for music, gaming, travel, and everyday use.",
    specs:[{label:"Driver",value:"40mm"},{label:"Battery",value:"Upto 70 hours"},{label:"Bluetooth",value:"6.0"},{label:"ANC",value:"Up to 45dB Noise Reduction"},{label:"Connectivity",value:"Bluetooth + Wired Mode"},{label:"Frequency Response",value:"20Hz–20kHz"},{label:"Warranty",value:"1 Year "}] },


     { id:"mh-011", name:"Monster Persona 6th ANC", model:"MH-PS-6ANC", category:"headphones",
    regularPrice:14999, discountPrice:10099, rating:0, stock:"Out Of Stock", badge:"PREMIUM",
    media:[
      {type:"image", url:"img/per6.jpeg", caption:"Front view"},
      {type:"image", url:"img/per6_1.jpeg", caption:"Front view"},
      {type:"image", url:"img/per6_2.jpeg", caption:"Front view"},
      {type:"image", url:"img/per6_3.jpeg", caption:"Front view"},
      {type:"image", url:"img/per6_4.jpeg", caption:"Front view"},
      {type:"image", url:"img/per6_5.jpeg", caption:"Front view"},
      {type:"image", url:"img/per6_6.jpeg", caption:"Front view"},
      {type:"image", url:"img/per6_8.jpeg", caption:"Front view"},
      {type:"image", url:"img/per6_7.jpeg", caption:"Front view"},
      {type:"image", url:"img/per6_9.jpeg", caption:"Front view"},
      {type:"image", url:"img/per6_10.jpeg", caption:"Action"}
    ],
    description:"The latest Persona series headphone from Monster, featuring Bluetooth 6.0, powerful ANC, multipoint connectivity, and up to 60 hours of battery life. Designed for premium music listening, travel, work, and gaming.",
    specs:[{label:"Driver",value:"40mm"},{label:"Battery",value:"Upto 60 hours"},{label:"Bluetooth",value:"6.0"},{label:"ANC",value:"Supported"},{label:"Connectivity",value:"Bluetooth + Wired Mode"},{label:"Latency",value:"Ultra-Low (0.038s)"},{label:"Warranty",value:"1 Year "}] },







     { id:"mh-012", name:"Monster MIssion 100", model:"MH-MN-100", category:"headphones",
    regularPrice:3899, discountPrice:1599, rating:0, stock:"Out Of Stock", badge:"",
    media:[
      {type:"image", url:"img/m100.jpeg", caption:"Front view"},
      {type:"image", url:"img/m100_1.jpeg", caption:"Front view"},
      {type:"image", url:"img/m100_2.jpeg", caption:"Front view"},
      {type:"image", url:"img/m100_3.jpeg", caption:"Front view"},
      {type:"image", url:"img/m100_4.jpeg", caption:"Front view"},
      {type:"image", url:"img/m100_5.jpeg", caption:"Front view"},
      {type:"image", url:"img/m100_6.jpeg", caption:"Front view"},
      {type:"image", url:"img/m100_7.jpeg", caption:"Action"}
    ],
    description:".The Monster Mission 100 combines powerful sound, Bluetooth 5.4 connectivity, and up to 40 hours of battery life in a lightweight, comfortable design. Perfect for music, gaming, work, and daily use with AI noise reduction and wired AUX support.",
    specs:[{label:"Driver",value:"40mm"},{label:"Battery",value:"Upto 40 hours"},{label:"Bluetooth",value:"5.4"},{label:"Microphone",value:"AI Noise Reduction Mic"},{label:"Connectivity",value:"Bluetooth + Wired Mode"},{label:"Frequency Response",value:"20Hz–20kHz"},{label:"Warranty",value:"1 Year "}] },

     { id:"mh-013", name:"Monster MIssion 200", model:"MH-MN-200", category:"headphones",
    regularPrice:4999, discountPrice:3599, rating:0, stock:"Out Of Stock", badge:"",
    media:[
      {type:"image", url:"img/m200.jpeg", caption:"Front view"},
      {type:"image", url:"img/m200_1.jpeg", caption:"Front view"},
      {type:"image", url:"img/m200_2.jpeg", caption:"Front view"},
      {type:"image", url:"img/m200_3.jpeg", caption:"Front view"},
      {type:"image", url:"img/m200_4.jpeg", caption:"Front view"},
      {type:"image", url:"img/m200_5.jpeg", caption:"Front view"},
      {type:"image", url:"img/m200_6.jpeg", caption:"Front view"},
      {type:"image", url:"img/m200_8.jpeg", caption:"Action"}
    ],
    description:"The Monster Mission 200 delivers powerful Hi-Fi audio with 40mm dynamic drivers, Bluetooth 5.4 connectivity, and an impressive 60-hour battery life. Featuring AI call noise cancellation, 3 EQ sound modes, and a comfortable foldable design, it's perfect for music, gaming, work, and travel.",
    specs:[{label:"Driver",value:"40mm"},{label:"Battery",value:"Upto 60 hours"},{label:"Bluetooth",value:"5.4"},{label:"Microphone",value:"AI Noise Reduction Mic"},{label:"Connectivity",value:"Bluetooth + Wired Mode"},{label:"Charging",value:"Type-C Fast"},{label:"Warranty",value:"1 Year "}] },


     { id:"mh-014", name:"Monster MIssion 300", model:"MH-MN-300", category:"headphones",
    regularPrice:20999, discountPrice:12299, rating:0, stock:"Out Of Stock", badge:"GAMING BEAST",
    media:[
     {type:"image", url:"img/m300.jpeg", caption:"Front view"},
      {type:"image", url:"img/m300_1.jpeg", caption:"Front view"},
      {type:"image", url:"img/m300_2.jpeg", caption:"Front view"},
      {type:"image", url:"img/m300_3.jpeg", caption:"Front view"},
      {type:"image", url:"img/m300_4.jpeg", caption:"Front view"},
      {type:"image", url:"img/m300_5.jpeg", caption:"Front view"},
      {type:"image", url:"img/m300_6.jpeg", caption:"Front view"},
      {type:"image", url:"img/m300_7.jpeg", caption:"Front view"},
      {type:"image", url:"img/m300_10.jpeg", caption:"Front view"},
      {type:"image", url:"img/m300_8.jpeg", caption:"Front view"},
      {type:"image", url:"img/m300_9.jpeg", caption:"Action"}
    ],
    description:"The Monster Mission 300 is a gaming-focused wireless headset featuring 50mm drivers, ultra-low latency 2.4GHz connectivity, Bluetooth support, and immersive 7.1 surround sound. Built for gamers who need powerful audio, clear communication, and long-lasting comfort.",
    specs:[{label:"Driver",value:"50mm"},{label:"Battery",value:"Upto 48 hours"},{label:"Bluetooth",value:"6.0"},{label:"Latency",value:"Under 20ms"},{label:"RGB Lighting",value:"Yes"},{label:"Connectivity",value:"2.4GHz Wireless + Bluetooth + 3.5mm AUX"},{label:"Microphone",value:"Detachable Noise-Cancelling Mic"},{label:"Warranty",value:"1 Year "}] },






     { id:"mh-015", name:"Monster Harmonic N10", model:"MH-HM-N10", category:"headphones",
    regularPrice:5099, discountPrice:2199, rating:0, stock:"Out Of Stock", badge:"",
    media:[
      {type:"image", url:"img/n10.jpeg", caption:"Front view"},
      {type:"image", url:"img/n10_1.jpeg", caption:"Front view"},
      {type:"image", url:"img/n10_2.jpeg", caption:"Front view"},
      {type:"image", url:"img/n10_3.jpeg", caption:"Front view"},
      {type:"image", url:"img/n10_4.jpeg", caption:"Action"}
    ],
    description:"The Monster Harmonic N10 is a comfortable, over-ear wireless Bluetooth headset featuring 40mm dynamic drivers for rich bass. It offers up to 10 hours of battery life, advanced Bluetooth 6.0 connectivity, and an AI-enhanced microphone for crystal-clear calls.",
    specs:[{label:"Driver",value:"40mm"},{label:"Battery",value:"Upto 60 hours"},{label:"Bluetooth",value:"6.0"},{label:"Water Resistance",value:"IPX3"},{label:"Connectivity",value:"Bluetooth + Wired Mode"},{label:"Warranty",value:"1 Year "}] },


     { id:"mh-016", name:"Monster Harmonic N21", model:"MH-HM-N21", category:"headphones",
    regularPrice:5999, discountPrice:2099, rating:0, stock:"Out Of Stock", badge:"",
    media:[
      {type:"image", url:"img/n21.jpeg", caption:"Front view"},
      {type:"image", url:"img/n21_1.jpeg", caption:"Front view"},
      {type:"image", url:"img/n21_2.jpeg", caption:"Front view"},
      {type:"image", url:"img/n21_3.jpeg", caption:"Front view"},
      
      {type:"image", url:"img/mqh08.jpeg", caption:"Action"}
    ],
    description:"Experience powerful sound and all-day comfort with the Monster Harmonic N21. Featuring Bluetooth 6.0, 40mm dynamic drivers, dual EQ modes, and up to 25 hours of battery life, it's designed for music, calls, gaming, and everyday use.",
    specs:[{label:"Driver",value:"40mm"},{label:"Battery",value:"Upto 25 hours"},{label:"Bluetooth",value:"6.0"},{label:"Connectivity",value:"Bluetooth + Wired Mode"},{label:"Frequency Response",value:"20Hz–20kHz"},{label:"Warranty",value:"1 Year "}] },


 { id:"mh-017", name:"Monster Harmonic N22", model:"MH-HM-N22", category:"headphones",
    regularPrice:31499, discountPrice:14799, rating:0, stock:"Out Of Stock", badge:"LUXURY",
    media:[
      {type:"image", url:"img/n22.jpeg", caption:"Front view"},
      {type:"image", url:"img/n22_1.jpeg", caption:"Front view"},
      {type:"image", url:"img/n22_2.jpeg", caption:"Front view"},
      {type:"image", url:"img/n22_3.jpeg", caption:"Front view"},
      {type:"image", url:"img/n22_4.jpeg", caption:"Front view"},
      {type:"image", url:"img/n22_5.jpeg", caption:"Front view"},
      {type:"image", url:"img/n22_6.jpeg", caption:"Front view"},
      {type:"image", url:"img/n22_7.jpeg", caption:"Front view"},
      {type:"image", url:"img/n22_8.jpeg", caption:"Front view"},
      {type:"image", url:"img/n22_9.jpeg", caption:"Action"}
    ],
    description:"The Monster Harmonic N22 is a premium ANC headphone featuring Bluetooth 6.0, powerful 40mm drivers, and an incredible 110-hour battery life. With Hybrid ANC, Transparency Mode, and multipoint connectivity, it's designed for immersive music, travel, work, and gaming.",
    specs:[{label:"Driver",value:"40mm"},{label:"Battery",value:"Upto 110 hours"},{label:"Bluetooth",value:"6.0"},{label:"ANC",value:"Hybrid"},{label:"Connectivity",value:"Bluetooth + Wired Mode"},{label:"ANC Depth",value:"Up to -45dB"},{label:"Warranty",value:"1 Year "}] },



  //  { id:"mh-018", name:"Monster Airstar AH100", model:"MH-AS-AH100", category:"headphones",
  //   regularPrice:6199, discountPrice:2999, rating:0, stock:"Out Of Stock", badge:"",
  //   media:[
  //     {type:"image", url:"img/ah100.jpeg", caption:"Front view"},
  //     {type:"image", url:"img/ah100_1.jpeg", caption:"Front view"},
  //     {type:"image", url:"img/ah100_2.jpeg", caption:"Front view"},
  //     {type:"image", url:"img/ah100_3.jpeg", caption:"Front view"},
  //     {type:"image", url:"img/ah100_4.jpeg", caption:"Front view"},
  //     {type:"image", url:"img/ah100_5.jpeg", caption:"Action"}
  //   ],
  //   description:"The Monster Harmonic N22 is a premium ANC headphone featuring Bluetooth 6.0, powerful 40mm drivers, and an incredible 110-hour battery life. With Hybrid ANC, Transparency Mode, and multipoint connectivity, it's designed for immersive music, travel, work, and gaming.",
  //   specs:[{label:"Driver",value:"40mm"},{label:"Battery",value:"Upto 110 hours"},{label:"Bluetooth",value:"6.0"},{label:"ANC",value:"Hybrid"},{label:"Connectivity",value:"Bluetooth + Wired Mode"},{label:"ANC Depth",value:"Up to -45dB"},{label:"Warranty",value:"1 Year "}] },





  // EARBUDS
  { id:"tws-001", name:"Monster Aura Fit GT17", model:"TWS-AF-GT17", category:"tws",
    regularPrice:2600, discountPrice:1400, rating:0, stock:"In Stock", badge:"Best Seller",
    media:[
      {type:"image", url:"earbud/gt17.jpeg", caption:"Earbuds"},
      {type:"image", url:"earbud/gt17_1.jpeg", caption:"Earbuds"},
      {type:"image", url:"earbud/gt17_2.jpeg", caption:"Earbuds"},
      {type:"image", url:"earbud/gt17_6.jpeg", caption:"Earbuds"},
      {type:"image", url:"earbud/gt17_4.jpeg", caption:"Earbuds"},
      {type:"image", url:"earbud/gt17_3.jpeg", caption:"Earbuds"},
      {type:"image", url:"earbud/gt17_5.jpeg", caption:"Earbuds"}
      // {type:"image", url:"https://images.pexels.com/photos/3780654/pexels-photo-3780654.jpeg", caption:"Case"},
      // {type:"video", url:"https://cdn.coverr.co/videos/coverr-putting-in-earbuds-2635/1080p.mp4", caption:"In use"}
    ],
    description:"Experience premium sound in a compact design with the Monster Aura Fit GT17. Featuring Bluetooth 5.4, ANC + ENC noise cancellation, low-latency gaming mode, and up to 24 hours of total battery life, it's perfect for music, gaming, calls, and everyday use",
    specs:[{label:"Driver",value:"10mm"},{label:"Battery",value:"6h + 24h case"},{label:"Bluetooth",value:"5.4"},{label:"Latency",value:"45ms"},{label:"Waterproof Rating",value:"IPX4/IPX5"}
      ,{label:"ANC + ENC",value:"Supported"},{label:"Wireless Range",value:"10m+"},{label:"Charging",value:"Type-C"},{label:"Warranty",value:"1 Year "}] },
  
  
      { id:"tws-002", name:"Monster Aura Fit GT19", model:"TWS-AF-GT19", category:"tws",
    regularPrice:9800, discountPrice:7490, rating:4.7, stock:"In Stock", badge:"ANC",
    media:[
      {type:"image", url:"https://images.pexels.com/photos/4109591/pexels-photo-4109591.jpeg", caption:"Earbuds"},
      {type:"image", url:"https://images.pexels.com/photos/4109592/pexels-photo-4109592.jpeg", caption:"Case"},
      {type:"image", url:"https://images.pexels.com/photos/4109593/pexels-photo-4109593.jpeg", caption:"Detail"}
    ],
    description:"Active noise cancelling TWS earbuds with transparency mode, 11mm drivers, and 30-hour total playback. Crystal clear calls with dual mic ENC.",
    specs:[{label:"Driver",value:"11mm"},{label:"Battery",value:"8h + 22h case"},{label:"Bluetooth",value:"5.3"},{label:"ANC",value:"Hybrid ANC"},{label:"Rating",value:"IPX5"},{label:"Charging",value:"USB-C + Qi"},{label:"Warranty",value:"1 Year "}] },
  
    { id:"tws-003", name:"Monster Aura Fit GT22", model:"TWS-AF-GT22", category:"tws",
    regularPrice:4200, discountPrice:3290, rating:4.2, stock:"In Stock", badge:"Budget Pick",
    media:[
      {type:"image", url:"https://images.pexels.com/photos/4109655/pexels-photo-4109655.jpeg", caption:"Earbuds"},
      {type:"image", url:"https://images.pexels.com/photos/4109656/pexels-photo-4109656.jpeg", caption:"Case"}
    ],
    description:"Affordable true wireless earbuds with decent sound, touch controls, and 20-hour total battery. Perfect entry into wireless audio.",
    specs:[{label:"Driver",value:"10mm"},{label:"Battery",value:"5h + 15h case"},{label:"Bluetooth",value:"5.2"},{label:"ANC",value:"No"},{label:"Rating",value:"IPX4"},{label:"Charging",value:"USB-C"}] },
  
  
    { id:"tws-004", name:"Monster Aura Fit GT23", model:"TWS-AF-GT23", category:"tws",
    regularPrice:11500, discountPrice:8990, rating:4.8, stock:"In Stock", badge:"Premium",
    media:[
      {type:"image", url:"https://images.pexels.com/photos/4109610/pexels-photo-4109610.jpeg", caption:"Earbuds"},
      {type:"image", url:"https://images.pexels.com/photos/4109611/pexels-photo-4109611.jpeg", caption:"Case"},
      {type:"image", url:"https://images.pexels.com/photos/4109612/pexels-photo-4109612.jpeg", caption:"Detail"},
      {type:"video", url:"https://cdn.coverr.co/videos/coverr-putting-in-earbuds-2635/1080p.mp4", caption:"Product video"}
    ],
    description:"Premium TWS with hi-res audio, dual driver setup, adaptive ANC, and wireless charging case. Studio-grade sound in your pocket.",
    specs:[{label:"Driver",value:"Dual 8mm+10mm"},{label:"Battery",value:"7h + 24h case"},{label:"Bluetooth",value:"5.3 + LDAC"},{label:"ANC",value:"Adaptive ANC"},{label:"Rating",value:"IPX5"},{label:"Charging",value:"USB-C + Qi"},{label:"Warranty",value:"1 Year "}] },
 
 
    { id:"tws-005", name:"Monster Aura Fit GT31", model:"TWS-AF-GT31", category:"tws",
    regularPrice:6800, discountPrice:5290, rating:4.5, stock:"Low Stock", badge:"",
    media:[
      {type:"image", url:"https://images.pexels.com/photos/4109620/pexels-photo-4109620.jpeg", caption:"Earbuds"},
      {type:"image", url:"https://images.pexels.com/photos/4109621/pexels-photo-4109621.jpeg", caption:"Action"}
    ],
    description:"Sports-focused TWS with ear hooks, IPX7 water resistance, and secure fit. Powerful bass to fuel your workouts.",
    specs:[{label:"Driver",value:"10mm"},{label:"Battery",value:"6h + 18h case"},{label:"Bluetooth",value:"5.3"},{label:"ANC",value:"No"},{label:"Rating",value:"IPX7"},{label:"Charging",value:"USB-C"},{label:"Warranty",value:"1 Year "}] },
  
  
    { id:"tws-006", name:"Monster Aura Fit GT34", model:"TWS-AF-GT34", category:"tws",
    regularPrice:10500, discountPrice:8250, rating:4.7, stock:"In Stock", badge:"Hot Deal",
    media:[
      {type:"image", url:"https://images.pexels.com/photos/4109630/pexels-photo-4109630.jpeg", caption:"Earbuds"},
      {type:"image", url:"https://images.pexels.com/photos/4109631/pexels-photo-4109631.jpeg", caption:"Case"},
      {type:"video", url:"https://cdn.coverr.co/videos/coverr-putting-in-earbuds-2635/1080p.mp4", caption:"In use"}
    ],
    description:"Next-gen Clarity with stronger ANC, longer battery, and improved call quality. The upgrade everyone's been waiting for.",
    specs:[{label:"Driver",value:"11mm"},{label:"Battery",value:"8h + 26h case"},{label:"Bluetooth",value:"5.3"},{label:"ANC",value:"Hybrid ANC"},{label:"Rating",value:"IPX5"},{label:"Charging",value:"USB-C + Qi"},{label:"Warranty",value:"1 Year "}] },

    { id:"tws-007", name:"Monster Aura Fit GT36", model:"TWS-AF-GT36", category:"tws",
    regularPrice:10500, discountPrice:8250, rating:4.7, stock:"In Stock", badge:"Hot Deal",
    media:[
      {type:"image", url:"https://images.pexels.com/photos/4109630/pexels-photo-4109630.jpeg", caption:"Earbuds"},
      {type:"image", url:"https://images.pexels.com/photos/4109631/pexels-photo-4109631.jpeg", caption:"Case"},
      {type:"video", url:"https://cdn.coverr.co/videos/coverr-putting-in-earbuds-2635/1080p.mp4", caption:"In use"}
    ],
    description:"Next-gen Clarity with stronger ANC, longer battery, and improved call quality. The upgrade everyone's been waiting for.",
    specs:[{label:"Driver",value:"11mm"},{label:"Battery",value:"8h + 26h case"},{label:"Bluetooth",value:"5.3"},{label:"ANC",value:"Hybrid ANC"},{label:"Rating",value:"IPX5"},{label:"Charging",value:"USB-C + Qi"},{label:"Warranty",value:"1 Year "}] },


    { id:"tws-008", name:"Monster Aura Fit XT02", model:"TWS-AF-GT33", category:"tws",
    regularPrice:10500, discountPrice:8250, rating:4.7, stock:"In Stock", badge:"Hot Deal",
    media:[
      {type:"image", url:"https://images.pexels.com/photos/4109630/pexels-photo-4109630.jpeg", caption:"Earbuds"},
      {type:"image", url:"https://images.pexels.com/photos/4109631/pexels-photo-4109631.jpeg", caption:"Case"},
      {type:"video", url:"https://cdn.coverr.co/videos/coverr-putting-in-earbuds-2635/1080p.mp4", caption:"In use"}
    ],
    description:"Next-gen Clarity with stronger ANC, longer battery, and improved call quality. The upgrade everyone's been waiting for.",
    specs:[{label:"Driver",value:"11mm"},{label:"Battery",value:"8h + 26h case"},{label:"Bluetooth",value:"5.3"},{label:"ANC",value:"Hybrid ANC"},{label:"Rating",value:"IPX5"},{label:"Charging",value:"USB-C + Qi"},{label:"Warranty",value:"1 Year "}] },

    { id:"tws-009", name:"Monster Aura Fit GT36", model:"TWS-CL-102", category:"tws",
    regularPrice:10500, discountPrice:8250, rating:4.7, stock:"In Stock", badge:"Hot Deal",
    media:[
      {type:"image", url:"https://images.pexels.com/photos/4109630/pexels-photo-4109630.jpeg", caption:"Earbuds"},
      {type:"image", url:"https://images.pexels.com/photos/4109631/pexels-photo-4109631.jpeg", caption:"Case"},
      {type:"video", url:"https://cdn.coverr.co/videos/coverr-putting-in-earbuds-2635/1080p.mp4", caption:"In use"}
    ],
    description:"Next-gen Clarity with stronger ANC, longer battery, and improved call quality. The upgrade everyone's been waiting for.",
    specs:[{label:"Driver",value:"11mm"},{label:"Battery",value:"8h + 26h case"},{label:"Bluetooth",value:"5.3"},{label:"ANC",value:"Hybrid ANC"},{label:"Rating",value:"IPX5"},{label:"Charging",value:"USB-C + Qi"},{label:"Warranty",value:"1 Year "}] },

    { id:"tws-010", name:"Monster Aura Fit GT36", model:"TWS-CL-102", category:"tws",
    regularPrice:10500, discountPrice:8250, rating:4.7, stock:"In Stock", badge:"Hot Deal",
    media:[
      {type:"image", url:"https://images.pexels.com/photos/4109630/pexels-photo-4109630.jpeg", caption:"Earbuds"},
      {type:"image", url:"https://images.pexels.com/photos/4109631/pexels-photo-4109631.jpeg", caption:"Case"},
      {type:"video", url:"https://cdn.coverr.co/videos/coverr-putting-in-earbuds-2635/1080p.mp4", caption:"In use"}
    ],
    description:"Next-gen Clarity with stronger ANC, longer battery, and improved call quality. The upgrade everyone's been waiting for.",
    specs:[{label:"Driver",value:"11mm"},{label:"Battery",value:"8h + 26h case"},{label:"Bluetooth",value:"5.3"},{label:"ANC",value:"Hybrid ANC"},{label:"Rating",value:"IPX5"},{label:"Charging",value:"USB-C + Qi"},{label:"Warranty",value:"1 Year "}] },

    { id:"tws-011", name:"Monster Aura Fit GT36", model:"TWS-CL-102", category:"tws",
    regularPrice:10500, discountPrice:8250, rating:4.7, stock:"In Stock", badge:"Hot Deal",
    media:[
      {type:"image", url:"https://images.pexels.com/photos/4109630/pexels-photo-4109630.jpeg", caption:"Earbuds"},
      {type:"image", url:"https://images.pexels.com/photos/4109631/pexels-photo-4109631.jpeg", caption:"Case"},
      {type:"video", url:"https://cdn.coverr.co/videos/coverr-putting-in-earbuds-2635/1080p.mp4", caption:"In use"}
    ],
    description:"Next-gen Clarity with stronger ANC, longer battery, and improved call quality. The upgrade everyone's been waiting for.",
    specs:[{label:"Driver",value:"11mm"},{label:"Battery",value:"8h + 26h case"},{label:"Bluetooth",value:"5.3"},{label:"ANC",value:"Hybrid ANC"},{label:"Rating",value:"IPX5"},{label:"Charging",value:"USB-C + Qi"},{label:"Warranty",value:"1 Year "}] },

    { id:"tws-012", name:"Monster Aura Fit GT36", model:"TWS-CL-102", category:"tws",
    regularPrice:10500, discountPrice:8250, rating:4.7, stock:"In Stock", badge:"Hot Deal",
    media:[
      {type:"image", url:"https://images.pexels.com/photos/4109630/pexels-photo-4109630.jpeg", caption:"Earbuds"},
      {type:"image", url:"https://images.pexels.com/photos/4109631/pexels-photo-4109631.jpeg", caption:"Case"},
      {type:"video", url:"https://cdn.coverr.co/videos/coverr-putting-in-earbuds-2635/1080p.mp4", caption:"In use"}
    ],
    description:"Next-gen Clarity with stronger ANC, longer battery, and improved call quality. The upgrade everyone's been waiting for.",
    specs:[{label:"Driver",value:"11mm"},{label:"Battery",value:"8h + 26h case"},{label:"Bluetooth",value:"5.3"},{label:"ANC",value:"Hybrid ANC"},{label:"Rating",value:"IPX5"},{label:"Charging",value:"USB-C + Qi"},{label:"Warranty",value:"1 Year "}] },

  // ===== OPEN EARBUDS =====
  { id:"open-001", name:"Monster OpenFit 100", model:"OPEN-OF-100", category:"open",
    regularPrice:9500, discountPrice:7490, rating:4.5, stock:"In Stock", badge:"New",
    media:[
      {type:"image", url:"https://images.pexels.com/photos/4109640/pexels-photo-4109640.jpeg", caption:"Earbuds"},
      {type:"image", url:"https://images.pexels.com/photos/4109641/pexels-photo-4109641.jpeg", caption:"Side"},
      {type:"video", url:"https://cdn.coverr.co/videos/coverr-putting-in-earbuds-2635/1080p.mp4", caption:"In use"}
    ],
    description:"Open-ear earbuds with air conduction technology, keeping you aware of your surroundings. Comfortable silicone hooks for all-day wear.",
    specs:[{label:"Driver",value:"16mm Air"},{label:"Battery",value:"7h + 21h case"},{label:"Bluetooth",value:"5.3"},{label:"ANC",value:"No (Open)"},{label:"Rating",value:"IPX4"},{label:"Charging",value:"USB-C"},{label:"Warranty",value:"1 Year "}] },
  { id:"open-002", name:"Monster OpenFlow Pro", model:"OPEN-OF-PRO", category:"open",
    regularPrice:12500, discountPrice:9990, rating:4.7, stock:"In Stock", badge:"Premium",
    media:[
      {type:"image", url:"https://images.pexels.com/photos/4109645/pexels-photo-4109645.jpeg", caption:"Earbuds"},
      {type:"image", url:"https://images.pexels.com/photos/4109646/pexels-photo-4109646.jpeg", caption:"Case"},
      {type:"image", url:"https://images.pexels.com/photos/4109647/pexels-photo-4109647.jpeg", caption:"Detail"}
    ],
    description:"Premium open-ear earbuds with directional audio, premium build, and 28-hour total battery. Ideal for outdoor activities and office use.",
    specs:[{label:"Driver",value:"18mm Air"},{label:"Battery",value:"8h + 20h case"},{label:"Bluetooth",value:"5.3"},{label:"ANC",value:"No (Open)"},{label:"Rating",value:"IPX5"},{label:"Charging",value:"USB-C + Qi"},{label:"Warranty",value:"1 Year "}] },
  { id:"open-003", name:"Monster AirClip Lite", model:"OPEN-AC-LT", category:"open",
    regularPrice:5500, discountPrice:4290, rating:4.3, stock:"In Stock", badge:"Budget Pick",
    media:[
      {type:"image", url:"https://images.pexels.com/photos/4109650/pexels-photo-4109650.jpeg", caption:"Earbuds"},
      {type:"image", url:"https://images.pexels.com/photos/4109651/pexels-photo-4109651.jpeg", caption:"Side"}
    ],
    description:"Affordable open-ear clip-on design with decent sound and comfortable fit. Great for casual listening while staying aware.",
    specs:[{label:"Driver",value:"14mm Air"},{label:"Battery",value:"6h + 18h case"},{label:"Bluetooth",value:"5.2"},{label:"ANC",value:"No"},{label:"Rating",value:"IPX4"},{label:"Charging",value:"USB-C"},{label:"Warranty",value:"1 Year "}] },
  { id:"open-004", name:"Monster OpenSport X", model:"OPEN-OS-X", category:"open",
    regularPrice:7800, discountPrice:6290, rating:4.4, stock:"Low Stock", badge:"",
    media:[
      {type:"image", url:"https://images.pexels.com/photos/4109660/pexels-photo-4109660.jpeg", caption:"Earbuds"},
      {type:"image", url:"https://images.pexels.com/photos/4109661/pexels-photo-4109661.jpeg", caption:"Action"},
      {type:"video", url:"https://cdn.coverr.co/videos/coverr-putting-in-earbuds-2635/1080p.mp4", caption:"In use"}
    ],
    description:"Sports open-ear earbuds with flexible titanium hooks, IPX6 rating, and powerful bass. Built for runners and cyclists.",
    specs:[{label:"Driver",value:"16mm Air"},{label:"Battery",value:"7h + 21h case"},{label:"Bluetooth",value:"5.3"},{label:"ANC",value:"No"},{label:"Rating",value:"IPX6"},{label:"Charging",value:"USB-C"},{label:"Warranty",value:"1 Year "}] },
  { id:"open-005", name:"Monster OpenLite Air", model:"OPEN-OL-AIR", category:"open",
    regularPrice:6200, discountPrice:4990, rating:4.2, stock:"In Stock", badge:"",
    media:[
      {type:"image", url:"https://images.pexels.com/photos/4109670/pexels-photo-4109670.jpeg", caption:"Earbuds"},
      {type:"image", url:"https://images.pexels.com/photos/4109671/pexels-photo-4109671.jpeg", caption:"Case"}
    ],
    description:"Lightweight open-ear earbuds with comfortable fit, balanced sound, and 22-hour total battery. All-day comfort for calls and music.",
    specs:[{label:"Driver",value:"15mm Air"},{label:"Battery",value:"6h + 16h case"},{label:"Bluetooth",value:"5.2"},{label:"ANC",value:"No"},{label:"Rating",value:"IPX4"},{label:"Charging",value:"USB-C"},{label:"Warranty",value:"1 Year "}] },
  { id:"open-006", name:"Monster OpenStudio Pro", model:"OPEN-OS-PRO", category:"open",
    regularPrice:13500, discountPrice:10990, rating:4.8, stock:"In Stock", badge:"Premium",
    media:[
      {type:"image", url:"https://images.pexels.com/photos/4109680/pexels-photo-4109680.jpeg", caption:"Earbuds"},
      {type:"image", url:"https://images.pexels.com/photos/4109681/pexels-photo-4109681.jpeg", caption:"Case"},
      {type:"image", url:"https://images.pexels.com/photos/4109682/pexels-photo-4109682.jpeg", caption:"Detail"},
      {type:"video", url:"https://cdn.coverr.co/videos/coverr-putting-in-earbuds-2635/1080p.mp4", caption:"Product video"}
    ],
    description:"Reference open-ear earbuds with studio tuning, premium materials, and 30-hour battery. The finest open-ear listening experience.",
    specs:[{label:"Driver",value:"20mm Air"},{label:"Battery",value:"9h + 21h case"},{label:"Bluetooth",value:"5.3 + LDAC"},{label:"ANC",value:"No (Open)"},{label:"Rating",value:"IPX5"},{label:"Charging",value:"USB-C + Qi"},{label:"Warranty",value:"1 Year "}] }
];

var CATEGORIES = [
  { id:"headphones", label:"Headphones" },
  { id:"tws", label:"TWS Earbuds" },
  { id:"open", label:"Open Earbuds" }
];

var POLICIES = {
  terms: { title:"Terms & Conditions", body:"<p>By purchasing from Monster Music BD (operated by Tech n' Trinkets), you agree to the following terms:</p><h5>1. Orders</h5><p>All orders are subject to product availability. We reserve the right to cancel any order before delivery.</p><h5>2. Pricing</h5><p>Prices are listed in Bangladeshi Taka (BDT) and include applicable taxes. Discounted prices are valid for the promotional period stated.</p><h5>3. Delivery</h5><p>Inside Dhaka: 24-48 hours. Outside Dhaka: 2-4 working days via courier. Delivery charges are calculated at checkout.</p><h5>4. Authenticity</h5><p>All Monster products sold by us are 100% genuine and sourced from authorized distributors.</p>" },
  warranty: { title:"Warranty Claim Rules", body:"<p>Monster audio products come with a warranty as specified on each product page. To claim warranty:</p><h5>Eligibility</h5><ul><li>Original invoice / order confirmation must be presented.</li><li>Product must be within the warranty period.</li><li>Warranty sticker / serial number must be intact.</li></ul><h5>Covered</h5><ul><li>Manufacturing defects in sound, battery, or Bluetooth.</li><li>Charging port or button malfunctions under normal use.</li></ul><h5>Not Covered</h5><ul><li>Physical damage, drops, water damage (unless IP-rated failure).</li><li>Damage from unauthorized repair or modification.</li><li>Normal wear and tear of ear pads, cables, or case.</li></ul><h5>How to Claim</h5><p>Message us on WhatsApp or Messenger with your order ID and a short video of the issue. We will arrange pickup or service.</p>" },
  returns: { title:"Return & Refund", body:"<h5>7-Day Return Window</h5><p>Unopened products can be returned within 7 days of delivery for a full refund or exchange.</p><h5>Condition</h5><p>Returned items must be in original packaging with all accessories. Opened items are only eligible for return if defective.</p><h5>Refund Process</h5><p>Refunds are processed within 5-7 working days to the original payment method after inspection.</p>" },
  privacy: { title:"Privacy Policy", body:"<p>We only collect the information necessary to process your order (name, phone, address). We never sell your data to third parties. Chat links (Messenger, WhatsApp) open directly to our official pages.</p>" }
};

function formatPrice(n){ return "\u09F3" + n.toLocaleString("en-US"); }
function getProductById(id){ for(var i=0;i<PRODUCTS.length;i++){ if(PRODUCTS[i].id===id) return PRODUCTS[i]; } return null; }
function searchProducts(q){
  q = q.trim().toLowerCase();
  if(!q) return PRODUCTS;
  return PRODUCTS.filter(function(p){
    return p.name.toLowerCase().indexOf(q)>-1 ||
           p.model.toLowerCase().indexOf(q)>-1 ||
           p.category.toLowerCase().indexOf(q)>-1 ||
           p.description.toLowerCase().indexOf(q)>-1;
  });
}
function starsFor(r){ var r2=Math.round(r); return "\u2605\u2605\u2605\u2605\u2605".slice(0,r2) + "\u2606\u2606\u2606\u2606\u2606".slice(0,5-r2); }
function discountPct(p){ return Math.round((1 - p.discountPrice/p.regularPrice)*100); }

function productCardHTML(p){
  var dp = discountPct(p);
  return '<div class="product-card" data-id="'+p.id+'">' +
    '<div class="pc-media">' +
      (p.badge ? '<span class="pc-badge">'+p.badge+'</span>' : '') +
      (dp>0 ? '<span class="pc-discount">-'+dp+'%</span>' : '') +
      '<span class="pc-stock '+(p.stock==="Low Stock"?"low":"")+'">'+p.stock+'</span>' +
      '<img src="'+p.media[0].url+'" alt="'+p.name+'" loading="lazy" />' +
    '</div>' +
    '<div class="pc-body">' +
      '<div class="pc-name">'+p.name+'</div>' +
      '<div class="pc-model">'+p.model+'</div>' +
      '<div class="pc-rating"><span class="stars">'+starsFor(p.rating)+'</span><span>'+p.rating+'</span></div>' +
      '<div class="pc-prices"><span class="reg">'+formatPrice(p.regularPrice)+'</span><span class="now">'+formatPrice(p.discountPrice)+'</span></div>' +
      '<button class="pc-cta">View Details</button>' +
    '</div>' +
  '</div>';
}

function goToDetails(id){ window.location.href = "details.html?id=" + id; }

/* ============= SHARED INIT ============= */
function initNavToggle(){
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if(!toggle || !links) return;
  toggle.addEventListener("click", function(){ links.classList.toggle("open"); });
  var as = links.querySelectorAll("a");
  for(var i=0;i<as.length;i++){ as[i].addEventListener("click", function(){ links.classList.remove("open"); }); }
}

function initHeaderScroll(){
  var header = document.getElementById("siteHeader");
  if(!header) return;
  function onScroll(){ header.classList.toggle("scrolled", window.scrollY > 20); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive:true });
}

function initPolicies(){
  var overlay = document.getElementById("modalOverlay");
  var body = document.getElementById("modalBody");
  var close = document.getElementById("modalClose");
  if(!overlay) return;

  var links = document.querySelectorAll("[data-modal]");
  for(var i=0;i<links.length;i++){
    links[i].addEventListener("click", function(e){
      e.preventDefault();
      var key = this.getAttribute("data-modal");
      var p = POLICIES[key];
      if(!p) return;
      body.innerHTML = '<h3 class="modal-title">'+p.title+'</h3>'+p.body;
      overlay.style.display = "flex";
      requestAnimationFrame(function(){ overlay.classList.add("show"); });
    });
  }
  function hide(){ overlay.classList.remove("show"); setTimeout(function(){ overlay.style.display = "none"; }, 250); }
  if(close) close.addEventListener("click", hide);
  overlay.addEventListener("click", function(e){ if(e.target===overlay) hide(); });
  document.addEventListener("keydown", function(e){ if(e.key==="Escape") hide(); });
}

function setYear(){
  var el = document.getElementById("year");
  if(el) el.textContent = new Date().getFullYear();
}

/* ============= HOME PAGE ============= */
function initHome(){
  // Featured product in hero
  var featured = null;
  for(var i=0;i<PRODUCTS.length;i++){ if(PRODUCTS[i].badge==="Best Seller"){ featured=PRODUCTS[i]; break; } }
  if(!featured) featured = PRODUCTS[0];
  document.getElementById("heroImg").src = featured.media[0].url;
  document.getElementById("heroImg").alt = featured.name;
  document.getElementById("heroName").textContent = featured.name;
  document.getElementById("heroModel").textContent = featured.model;
  document.getElementById("heroReg").textContent = formatPrice(featured.regularPrice);
  document.getElementById("heroNow").textContent = formatPrice(featured.discountPrice);
  document.getElementById("heroCard").addEventListener("click", function(){ goToDetails(featured.id); });

  // Category cards
  var catIcons = {
    headphones: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>',
    tws: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M8 8a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0v-6a4 4 0 0 1 4-4Z"/><path d="M16 8a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0v-6a4 4 0 0 1 4-4Z"/></svg>',
    open: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M3 12a9 9 0 0 1 18 0"/><path d="M3 12v3a4 4 0 0 0 4 4M21 12v3a4 4 0 0 1-4 4"/></svg>'
  };
  var catDesc = {
    headphones:"Over-ear comfort with powerful sound and ANC.",
    tws:"True wireless freedom with crisp, clear audio.",
    open:"Open-ear design that keeps you aware."
  };
  var catHTML = "";
  for(var c=0;c<CATEGORIES.length;c++){
    var cat = CATEGORIES[c];
    var count = 0;
    for(var k=0;k<PRODUCTS.length;k++){ if(PRODUCTS[k].category===cat.id) count++; }
    catHTML += '<a href="#'+cat.id+'" class="cat-card" data-cat="'+cat.id+'">' +
      '<div class="cat-icon">'+(catIcons[cat.id]||"")+'</div>' +
      '<h3>'+cat.label+'</h3>' +
      '<p>'+catDesc[cat.id]+'</p>' +
      '<span class="cat-count">'+count+' products &rarr;</span>' +
    '</a>';
  }
  document.getElementById("catGrid").innerHTML = catHTML;
  document.querySelectorAll(".cat-card").forEach(function(card){
    card.addEventListener("click", function(e){
      e.preventDefault();
      var cat = this.getAttribute("data-cat");
      filterByCategory(cat);
      document.getElementById("all").scrollIntoView({ behavior:"smooth" });
    });
  });

  // Product grid with filter + sort
  var currentCat = "all";
  var currentSort = "featured";

  function renderGrid(){
    var list = [];
    for(var i=0;i<PRODUCTS.length;i++){
      if(currentCat==="all" || PRODUCTS[i].category===currentCat) list.push(PRODUCTS[i]);
    }
    if(currentSort==="price-asc") list.sort(function(a,b){ return a.discountPrice - b.discountPrice; });
    else if(currentSort==="price-desc") list.sort(function(a,b){ return b.discountPrice - a.discountPrice; });
    else if(currentSort==="rating") list.sort(function(a,b){ return b.rating - a.rating; });
    else if(currentSort==="name") list.sort(function(a,b){ return a.name.localeCompare(b.name); });

    var grid = document.getElementById("productGrid");
    var empty = document.getElementById("emptyState");
    document.getElementById("resultCount").textContent = list.length + " product" + (list.length!==1?"s":"");

    if(list.length===0){ grid.innerHTML=""; empty.style.display="block"; return; }
    empty.style.display = "none";
    grid.innerHTML = list.map(productCardHTML).join("");
    grid.querySelectorAll("[data-id]").forEach(function(card){
      card.addEventListener("click", function(){ goToDetails(this.getAttribute("data-id")); });
    });
  }

  function filterByCategory(cat){
    currentCat = cat;
    var pills = document.querySelectorAll(".pill");
    pills.forEach(function(p){ p.classList.toggle("active", p.getAttribute("data-cat")===cat); });
    renderGrid();
  }

  var pills = document.querySelectorAll(".pill");
  pills.forEach(function(p){
    p.addEventListener("click", function(){
      filterByCategory(this.getAttribute("data-cat"));
    });
  });

  document.getElementById("sortSelect").addEventListener("change", function(e){
    currentSort = e.target.value;
    renderGrid();
  });

  // Check URL hash for category filter
  if(location.hash){
    var hashCat = location.hash.replace("#","");
    if(hashCat==="headphones"||hashCat==="tws"||hashCat==="open"){
      filterByCategory(hashCat);
    } else if(hashCat==="all"){
      filterByCategory("all");
    }
  }
  window.addEventListener("hashchange", function(){
    var hashCat = location.hash.replace("#","");
    if(hashCat==="headphones"||hashCat==="tws"||hashCat==="open"||hashCat==="all"){
      filterByCategory(hashCat);
    }
  });

  renderGrid();

  // Search
  var searchInput = document.getElementById("searchInput");
  var searchResults = document.getElementById("searchResults");
  var searchClear = document.getElementById("searchClear");
  var heroSearch = document.getElementById("heroSearch");

  function renderResults(query){
    var results = searchProducts(query).slice(0,6);
    if(!query.trim()){ searchResults.classList.remove("show"); return; }
    if(results.length===0){
      searchResults.innerHTML = '<div class="search-empty">No products found. Try a different search.</div>';
    } else {
      var html = "";
      for(var i=0;i<results.length;i++){
        var p = results[i];
        html += '<div class="search-result-item" data-id="'+p.id+'">' +
          '<img src="'+p.media[0].url+'" alt="'+p.name+'" />' +
          '<div><div class="sri-name">'+p.name+'</div><div class="sri-model">'+p.model+'</div></div>' +
          '<div class="sri-price">'+formatPrice(p.discountPrice)+'</div>' +
        '</div>';
      }
      searchResults.innerHTML = html;
      searchResults.querySelectorAll("[data-id]").forEach(function(item){
        item.addEventListener("click", function(){ goToDetails(this.getAttribute("data-id")); });
      });
    }
    searchResults.classList.add("show");
  }

  searchInput.addEventListener("input", function(e){
    var v = e.target.value;
    heroSearch.classList.toggle("has-value", !!v);
    renderResults(v);
  });
  searchInput.addEventListener("focus", function(){
    if(searchInput.value) renderResults(searchInput.value);
  });
  searchClear.addEventListener("click", function(){
    searchInput.value = "";
    heroSearch.classList.remove("has-value");
    searchResults.classList.remove("show");
    searchInput.focus();
  });
  document.addEventListener("click", function(e){
    if(!heroSearch.contains(e.target)) searchResults.classList.remove("show");
  });
}

/* ============= DETAILS PAGE ============= */
function initDetails(){
  var params = new URLSearchParams(window.location.search);
  var id = params.get("id");
  var product = id ? getProductById(id) : null;

  if(!product){
    document.getElementById("detailRoot").innerHTML =
      '<div class="empty-state"><h3>Product not found</h3><p>The product you\'re looking for doesn\'t exist or has been removed.</p>' +
      '<a href="index.html" class="btn btn-primary" style="margin-top:16px">Back to Products</a></div>';
    return;
  }

  var catLabel = { headphones:"Headphones", tws:"TWS Earbuds", open:"Open Earbuds" }[product.category];
  document.getElementById("breadcrumb").innerHTML =
    '<a href="index.html">Home</a><span class="sep">/</span>' +
    '<a href="index.html#'+product.category+'">'+catLabel+'</a><span class="sep">/</span>' +
    '<span>'+product.name+'</span>';

  var dp = discountPct(product);
  var save = product.regularPrice - product.discountPrice;
  var imgCount = 0, vidCount = 0;
  product.media.forEach(function(m){ if(m.type==="image") imgCount++; else vidCount++; });

  var slidesHTML = "", thumbsHTML = "";
  product.media.forEach(function(m, i){
    var active = i===0 ? " active" : "";
    var content = m.type==="image"
      ? '<img src="'+m.url+'" alt="'+product.name+' - '+m.caption+'" />'
      : '<video src="'+m.url+'" controls playsinline preload="metadata"></video>';
    slidesHTML += '<div class="gallery-slide'+active+'" data-index="'+i+'">'+content+'</div>';

    var thumbContent = m.type==="image"
      ? '<img src="'+m.url+'" alt="'+m.caption+'" loading="lazy" />'
      : '<video src="'+m.url+'" preload="metadata" muted></video>';
    thumbsHTML += '<div class="thumb'+active+'" data-index="'+i+'">'+thumbContent+
      '<span class="thumb-type">'+(m.type==="video"?"VIDEO":"IMG")+'</span></div>';
  });

  var specsHTML = "";
  product.specs.forEach(function(s){
    specsHTML += '<div class="spec-item"><span class="lbl">'+s.label+'</span><span class="val">'+s.value+'</span></div>';
  });

  document.getElementById("detailRoot").innerHTML =
    '<div class="detail-grid">' +
      '<div class="gallery">' +
        '<div class="gallery-main" id="galleryMain">' +
          slidesHTML +
          '<button class="gallery-nav prev" id="galPrev" aria-label="Previous">&#8249;</button>' +
          '<button class="gallery-nav next" id="galNext" aria-label="Next">&#8250;</button>' +
          '<span class="gallery-type-tag" id="galTypeTag">'+product.media[0].type+'</span>' +
          '<span class="gallery-counter" id="galCounter">1 / '+product.media.length+'</span>' +
        '</div>' +
        '<div class="gallery-thumbs" id="galleryThumbs">'+thumbsHTML+'</div>' +
      '</div>' +
      '<div class="detail-info">' +
        '<div class="detail-badges">' +
          (product.badge ? '<span class="badge primary">'+product.badge+'</span>' : '') +
          '<span class="badge '+(product.stock==="In Stock"?"success":"warning")+'">'+product.stock+'</span>' +
          '<span class="badge neutral">'+catLabel+'</span>' +
        '</div>' +
        '<h1>'+product.name+'</h1>' +
        '<div class="detail-model">Model: '+product.model+'</div>' +
        '<div class="detail-rating"><span class="stars">'+starsFor(product.rating)+'</span><span>'+product.rating+' / 5.0</span>' +
          '<span style="color:var(--text-dim)">|</span><span>'+imgCount+' image'+(imgCount!==1?"s":"")+' &middot; '+vidCount+' video'+(vidCount!==1?"s":"")+'</span></div>' +
        '<div class="detail-price"><span class="reg">'+formatPrice(product.regularPrice)+'</span><span class="now">'+formatPrice(product.discountPrice)+'</span>' +
          '<span class="save">Save '+formatPrice(save)+' ('+dp+'%)</span></div>' +
        '<div class="detail-description"><h3>Description</h3><p>'+product.description+'</p></div>' +
        '<div class="detail-description"><h3>Specifications</h3><div class="specs-grid">'+specsHTML+'</div></div>' +
        '<div class="buy-section"><h3>Buy this product</h3>' +
          '<p style="color:var(--text-muted);font-size:0.9rem;margin-bottom:8px">Click below to order via Messenger or WhatsApp. The product details will be sent automatically.</p>' +
          '<div class="buy-buttons">' +
            '<a href="#" class="buy-btn messenger" id="buyMessenger"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-10 9.8c0 2.9 1.3 5.5 3.4 7.3v3.6l3.2-1.8c.9.2 1.8.4 2.8.4a10 10 0 0 0 10-9.8A10 10 0 0 0 12 2Zm1 13.4-2.5-2.7-4.9 2.7 5.4-5.7 2.6 2.7 4.8-2.7-5.4 5.7Z"/></svg> Messenger</a>' +
            '<a href="#" class="buy-btn whatsapp" id="buyWhatsApp"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.5l-.7-1.7c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3c-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.2.7 3 .6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z"/></svg> WhatsApp</a>' +
          '</div>' +
          '<p class="buy-note">You\'ll be redirected to our official chat with product info pre-filled.</p>' +
        '</div>' +
      '</div>' +
    '</div>';

  // Gallery logic
  var slides = document.querySelectorAll(".gallery-slide");
  var thumbs = document.querySelectorAll(".thumb");
  var counter = document.getElementById("galCounter");
  var typeTag = document.getElementById("galTypeTag");
  var current = 0;

  function showSlide(i){
    slides.forEach(function(s, idx){ s.classList.toggle("active", idx===i); });
    thumbs.forEach(function(t, idx){ t.classList.toggle("active", idx===i); });
    counter.textContent = (i+1) + " / " + product.media.length;
    typeTag.textContent = product.media[i].type;
    current = i;
    slides.forEach(function(s, idx){
      var v = s.querySelector("video");
      if(v && idx!==i) v.pause();
    });
  }

  document.getElementById("galPrev").addEventListener("click", function(){ showSlide((current-1+product.media.length)%product.media.length); });
  document.getElementById("galNext").addEventListener("click", function(){ showSlide((current+1)%product.media.length); });
  thumbs.forEach(function(t){ t.addEventListener("click", function(){ showSlide(parseInt(t.getAttribute("data-index"))); }); });
  document.addEventListener("keydown", function(e){
    if(e.key==="ArrowLeft") showSlide((current-1+product.media.length)%product.media.length);
    if(e.key==="ArrowRight") showSlide((current+1)%product.media.length);
  });

  // Buy links
  var orderText = "Hello! I'm interested in buying this product from Monster Music BD:%0A%0A*Product:* " + product.name + "%0A*Model:* " + product.model + "%0A*Price:* " + formatPrice(product.discountPrice) + " (Regular: " + formatPrice(product.regularPrice) + ")%0A%0APlease share availability and delivery details.";
  document.getElementById("buyWhatsApp").href = "https://wa.me/8801601233212?text=" + orderText;
  document.getElementById("buyMessenger").href = "https://m.me/1169534989576842" + encodeURIComponent(product.model);

  // Related products
  var related = [];
  var otherCats = [];
  for(var i=0;i<PRODUCTS.length;i++){
    if(PRODUCTS[i].category===product.category && PRODUCTS[i].id!==product.id) related.push(PRODUCTS[i]);
    else if(PRODUCTS[i].category!==product.category) otherCats.push(PRODUCTS[i]);
  }
  var relatedList = related.slice(0,4);
  if(relatedList.length<4){
    for(var j=0;j<otherCats.length && relatedList.length<8;j++) relatedList.push(otherCats[j]);
  }

  var relatedGrid = document.getElementById("relatedGrid");
  relatedGrid.innerHTML = relatedList.map(productCardHTML).join("");
  relatedGrid.querySelectorAll("[data-id]").forEach(function(card){
    card.addEventListener("click", function(){
      window.location.href = "details.html?id=" + this.getAttribute("data-id");
    });
  });
}

/* ============= BOOTSTRAP ============= */
document.addEventListener("DOMContentLoaded", function(){
  initNavToggle();
  initHeaderScroll();
  initPolicies();
  setYear();

  if(document.getElementById("heroSearch")) initHome();
  else if(document.getElementById("detailRoot")) initDetails();
});
