/*!
 * AkihiroLabs POS — js/i18n.js
 * Translations (English / Burmese) and formatting helpers.
 * https://github.com/AkihiroZayar/POS-SYTEM
 */
// ── i18n ────────────────────────────────────────────────────
var TR={
  en:{app:'POS System',dash:'Dashboard',pos:'POS',tabs:'Tabs',inv:'Inventory',rep:'Reports',stf:'Staff',sett:'Settings',
    srch:'Search products…',cart:'Cart',clr:'Clear',emp:'Tap a product to add',
    sub:'Subtotal',tot:'Total',ins:'Stock:{n}',low:'Only {n} left',oos:'Out of stock',
    aprod:'Add product',eprod:'Edit product',nprod:'New product',nm:'Name',pr:'Price (Ks)',st:'Stock',cat:'Category',
    sv:'Save',cn:'Cancel',dl:'Delete',tr:"Today's revenue",to:"Today's orders",perr:'Period revenue',pero:'Period orders',
    rec:'Recent sales',nos:'No sales yet',dcsv:'Export CSV',dpdf:'Export PDF',pby:'Payment',
    astf:'Add staff',estf:'Edit staff',nstf:'New staff',pin:'PIN (4 digits)',rl:'Role',adm:'Admin',cas:'Cashier',
    sel:'Who are you?',epin:'Enter PIN for',bk:'Back',lgo:'Log out',wpin:'Wrong PIN',sby:'Staff',
    psal:'Product breakdown',pnm:'Product',qty:'Qty',rv:'Revenue',catex:'e.g. Drinks, Bar Snacks',
    fr:'From',tw:'To',alt:'All time',tdy:'Today',ini:'Initials',cpin:'New PIN (blank=keep)',
    cashRec:'Cash received',change:'Change',short:'Still needs',exact:'Exact',confirmPay:'Confirm Payment',dev:'Developed by',
    hasSizes:'Has sizes',addSize:'+ Add size',sizeName:'Size label',sizePrice:'Price (Ks)',pickSize:'Choose size',sizes:'Sizes',minStk:'Min stock alert',
    newTab:'New Tab',openTabs:'Open Tabs',noTabs:'No open tabs',tabName:'Customer name',saveTab:'Save Tab',chargeTab:'Charge & Close',openTab:'Open',
    lowStock:'Low Stock',topItems:'Top selling today',quickActs:'Quick actions',newSale:'New Sale',
    backupData:'Backup JSON',restoreData:'Restore JSON',
    storeName:'Store name',addr:'Address',phone:'Phone',
    hhOn:'Happy hour',hhDiscount:'Discount %',hhStart:'Start time',hhEnd:'End time',hhCats:'Apply to',
    bizSet:'Business',hhSet:'Happy Hour',bkpSet:'Backup & Restore'},
  my:{app:'POS စနစ်',dash:'ပင်မစာမျက်နှာ',pos:'ရောင်းချမှု',tabs:'အကြွေးစာရင်း',inv:'ကုန်ပစ္စည်း',rep:'အစီရင်ခံစာ',stf:'ဝန်ထမ်း',sett:'ဆက်တင်',
    srch:'ကုန်ပစ္စည်းရှာ…',cart:'ခြင်းတောင်း',clr:'ဖျက်',emp:'ကုန်ပစ္စည်းထည့်ရန် နှိပ်ပါ',
    sub:'စုစုပေါင်း',tot:'ကျသင့်ငွေ',ins:'လက်ကျန်:{n}',low:'{n} ခုသာ ကျန်',oos:'ပစ္စည်းပြတ်',
    aprod:'ကုန်ထည့်',eprod:'ကုန်ပြင်',nprod:'ကုန်ပစ္စည်းအသစ်',nm:'အမည်',pr:'ဈေးနှုန်း (Ks)',st:'အရေအတွက်',cat:'အမျိုးအစား',
    sv:'သိမ်း',cn:'မလုပ်တော့',dl:'ဖျက်',tr:'ယနေ့ဝင်ငွေ',to:'ယနေ့အော်ဒါ',perr:'ကာလဝင်ငွေ',pero:'ကာလအော်ဒါ',
    rec:'မကြာသေးမီ ရောင်းချမှု',nos:'ရောင်းချမှု မရှိ',dcsv:'CSV',dpdf:'PDF',pby:'ငွေပေးချေမှု',
    astf:'ဝန်ထမ်းထည့်',estf:'ဝန်ထမ်းပြင်',nstf:'ဝန်ထမ်းအသစ်',pin:'PIN (၄ လုံး)',rl:'တာဝန်',adm:'မန်နေဂျာ',cas:'ငွေကိုင်',
    sel:'မည်သူဆိုလဲ?',epin:'PIN ထည့်ပါ —',bk:'နောက်သို့',lgo:'ထွက်',wpin:'PIN မှားသည်',sby:'ဝန်ထမ်း',
    psal:'ကုန်ပစ္စည်းအနှစ်ချုပ်',pnm:'ကုန်ပစ္စည်း',qty:'အရေ',rv:'ဝင်ငွေ',catex:'ဥပမာ - အချိုရည်',
    fr:'စတင်',tw:'ကုန်',alt:'အားလုံး',tdy:'ယနေ့',ini:'အတိုကောက်',cpin:'PIN အသစ်',
    cashRec:'လက်ခံငွေ',change:'အမ်းငွေ',short:'လိုနေ',exact:'အတိ',confirmPay:'ငွေပေးချေမည်',dev:'ဖန်တီးသူ',
    hasSizes:'အရွယ်အစားများ ရှိ',addSize:'+ ထည့်',sizeName:'အရွယ်',sizePrice:'ဈေး',pickSize:'အရွယ်ရွေးပါ',sizes:'အရွယ်',minStk:'အနည်းဆုံး',
    newTab:'အကြွေးဖွင့်',openTabs:'အကြွေးများ',noTabs:'အကြွေး မရှိ',tabName:'ဖောက်သည်',saveTab:'သိမ်း',chargeTab:'ငွေပေး & ပိတ်',openTab:'ဖွင့်',
    lowStock:'လက်ကျန်နည်း',topItems:'ယနေ့ ထိပ်တန်း',quickActs:'မြန်ဆန်ရွေးချယ်မှု',newSale:'ရောင်းချ',
    backupData:'Backup',restoreData:'Restore',
    storeName:'ဆိုင်အမည်',addr:'လိပ်စာ',phone:'ဖုန်း',
    hhOn:'Happy Hour',hhDiscount:'လျှော့ %',hhStart:'စတင်',hhEnd:'ကုန်',hhCats:'အမျိုးအစား',
    bizSet:'ဆိုင်',hhSet:'Happy Hour',bkpSet:'Backup & Restore'}
};
var lang='en';
function t(k,v){
  var s=(TR[lang][k]||TR.en[k]||k);
  if(v)Object.keys(v).forEach(function(x){s=s.replace('{'+x+'}',v[x]);});
  return s;
}
function ks(n){return n.toLocaleString()+' Ks';}
