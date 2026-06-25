export const PRESCRIPTIONS = [
  {
    "id": "RX-001",
    "isValid": false,
    "difficulty": "medium",
    "category": "cardiology-interaction",
    "dr": "دکتر نادری",
    "spec": "قلب و عروق",
    "patient": "خانم ۶۴ ساله؛ فشار خون و نارسایی قلبی؛ کراتینین مرزی",
    "items": [
      {
        "name": "Tab Losartan 50 mg",
        "instruction": "روزی یک عدد صبح‌ها"
      },
      {
        "name": "Tab Enalapril 5 mg",
        "instruction": "روزی دو بار، هر ۱۲ ساعت"
      },
      {
        "name": "Tab Spironolactone 25 mg",
        "instruction": "روزی یک عدد"
      },
      {
        "name": "Tab Furosemide 40 mg",
        "instruction": "صبح‌ها یک عدد"
      }
    ],
    "error": "ترکیب ACEI و ARB همراه اسپیرونولاکتون می‌تواند خطر هایپرکالمی و افت عملکرد کلیه را بالا ببرد.",
    "teachingPoint": "همزمانی مهارکننده‌های RAAS به‌خصوص با داروهای نگهدارنده پتاسیم نیازمند پایش جدی پتاسیم و کراتینین است."
  },
  {
    "id": "RX-002",
    "isValid": true,
    "difficulty": "easy",
    "category": "respiratory-common-cold",
    "dr": "دکتر آریا",
    "spec": "عمومی",
    "patient": "آقای ۲۸ ساله؛ سرماخوردگی ویروسی، بدون بیماری زمینه‌ای",
    "items": [
      {
        "name": "Tab Acetaminophen 500 mg",
        "instruction": "در صورت تب یا درد، هر ۶ تا ۸ ساعت یک عدد"
      },
      {
        "name": "Tab Cetirizine 10 mg",
        "instruction": "شب‌ها یک عدد"
      },
      {
        "name": "Spray Sodium Chloride 0.65%",
        "instruction": "هر ۶ ساعت، دو پاف در هر سوراخ بینی"
      }
    ],
    "error": null,
    "teachingPoint": "در سرماخوردگی ویروسی، درمان حمایتی و پرهیز از آنتی‌بیوتیک غیرضروری اهمیت دارد."
  },
  {
    "id": "RX-003",
    "isValid": false,
    "difficulty": "hard",
    "category": "psychiatry-serotonin",
    "dr": "دکتر فرهمند",
    "spec": "روانپزشکی",
    "patient": "خانم ۳۵ ساله؛ افسردگی و میگرن؛ شکایت از درد شدید گردن",
    "items": [
      {
        "name": "Cap Fluoxetine 20 mg",
        "instruction": "صبح‌ها یک عدد"
      },
      {
        "name": "Tab Tramadol 50 mg",
        "instruction": "در صورت درد، هر ۸ ساعت یک عدد"
      },
      {
        "name": "Tab Sumatriptan 50 mg",
        "instruction": "در شروع حمله میگرن یک عدد"
      }
    ],
    "error": "فلوکستین همراه ترامادول و سوماتریپتان خطر سندرم سروتونین و تشنج را افزایش می‌دهد.",
    "teachingPoint": "ترکیب چند داروی سروتونرژیک، حتی اگر هرکدام به‌تنهایی رایج باشند، می‌تواند خطرناک شود."
  },
  {
    "id": "RX-004",
    "isValid": true,
    "difficulty": "medium",
    "category": "gi-hpylori",
    "dr": "دکتر بهرامی",
    "spec": "گوارش",
    "patient": "آقای ۴۲ ساله؛ تست H. pylori مثبت؛ حساسیت دارویی ندارد",
    "items": [
      {
        "name": "Cap Omeprazole 20 mg",
        "instruction": "نیم ساعت قبل صبحانه و شام"
      },
      {
        "name": "Tab Amoxicillin 1 g",
        "instruction": "هر ۱۲ ساعت"
      },
      {
        "name": "Tab Clarithromycin 500 mg",
        "instruction": "هر ۱۲ ساعت"
      },
      {
        "name": "Tab Bismuth Subcitrate 120 mg",
        "instruction": "روزی چهار بار طبق دستور پزشک"
      }
    ],
    "error": null,
    "teachingPoint": "در درمان H. pylori توجه به سابقه مصرف ماکرولیدها، مقاومت منطقه‌ای و تکمیل دوره درمان مهم است."
  },
  {
    "id": "RX-005",
    "isValid": false,
    "difficulty": "medium",
    "category": "pregnancy-contraindication",
    "dr": "دکتر کیانی",
    "spec": "زنان و زایمان",
    "patient": "خانم ۲۹ ساله؛ بارداری ۱۰ هفته؛ آکنه شدید",
    "items": [
      {
        "name": "Cap Isotretinoin 20 mg",
        "instruction": "روزی یک عدد بعد غذا"
      },
      {
        "name": "Tab Folic Acid 1 mg",
        "instruction": "روزی یک عدد"
      },
      {
        "name": "Gel Clindamycin 1%",
        "instruction": "شب‌ها روی ضایعات"
      }
    ],
    "error": "ایزوترتینوئین در بارداری ممنوع است و خطر تراتوژنیسیته بسیار بالا دارد.",
    "teachingPoint": "در زنان در سن باروری، ایزوترتینوئین نیازمند بررسی بارداری، پیشگیری مؤثر و آموزش دقیق است."
  },
  {
    "id": "RX-006",
    "isValid": true,
    "difficulty": "easy",
    "category": "pediatrics-otitis",
    "dr": "دکتر حیدری",
    "spec": "کودکان",
    "patient": "کودک ۵ ساله؛ اوتیت میانی حاد؛ بدون حساسیت به پنی‌سیلین",
    "items": [
      {
        "name": "Susp Amoxicillin 400 mg/5 mL",
        "instruction": "طبق وزن کودک، هر ۱۲ ساعت"
      },
      {
        "name": "Syr Acetaminophen 160 mg/5 mL",
        "instruction": "در صورت تب طبق وزن کودک"
      },
      {
        "name": "Drop Sodium Chloride Nasal",
        "instruction": "هر ۶ ساعت چند قطره در بینی"
      }
    ],
    "error": null,
    "teachingPoint": "در کودکان، دوز بسیاری از داروها باید بر اساس وزن محاسبه شود و نسخه بدون وزن بیمار کامل نیست."
  },
  {
    "id": "RX-007",
    "isValid": false,
    "difficulty": "hard",
    "category": "anticoagulant-bleeding",
    "dr": "دکتر صبوری",
    "spec": "ارتوپدی",
    "patient": "آقای ۷۰ ساله؛ مصرف‌کننده وارفارین به علت AF؛ درد زانو",
    "items": [
      {
        "name": "Tab Warfarin 5 mg",
        "instruction": "طبق برنامه قبلی"
      },
      {
        "name": "Tab Ibuprofen 400 mg",
        "instruction": "هر ۸ ساعت بعد غذا"
      },
      {
        "name": "Tab Aspirin 80 mg",
        "instruction": "روزی یک عدد"
      },
      {
        "name": "Cap Omeprazole 20 mg",
        "instruction": "صبح ناشتا"
      }
    ],
    "error": "وارفارین همراه NSAID و آسپرین خطر خونریزی گوارشی و سیستمیک را به‌طور قابل توجهی افزایش می‌دهد.",
    "teachingPoint": "وجود PPI ریسک خونریزی را صفر نمی‌کند؛ در بیمار ضدانعقاد باید انتخاب ضد درد با احتیاط انجام شود."
  },
  {
    "id": "RX-008",
    "isValid": true,
    "difficulty": "medium",
    "category": "endocrine-diabetes",
    "dr": "دکتر صالحی",
    "spec": "غدد",
    "patient": "آقای ۵۲ ساله؛ دیابت نوع ۲؛ eGFR طبیعی؛ اضافه وزن",
    "items": [
      {
        "name": "Tab Metformin 500 mg",
        "instruction": "بعد از شام یک عدد، سپس طبق تحمل افزایش یابد"
      },
      {
        "name": "Tab Empagliflozin 10 mg",
        "instruction": "صبح‌ها یک عدد"
      },
      {
        "name": "Cap Vitamin D3 50000 IU",
        "instruction": "هفته‌ای یک عدد به مدت ۸ هفته"
      }
    ],
    "error": null,
    "teachingPoint": "متفورمین بهتر است با غذا شروع شود تا عوارض گوارشی کمتر شود؛ SGLT2ها نیازمند آموزش درباره کم‌آبی و عفونت ادراری هستند."
  },
  {
    "id": "RX-009",
    "isValid": false,
    "difficulty": "medium",
    "category": "renal-dose",
    "dr": "دکتر میرزایی",
    "spec": "عفونی",
    "patient": "خانم ۷۶ ساله؛ نارسایی کلیه مزمن؛ عفونت ادراری",
    "items": [
      {
        "name": "Tab Nitrofurantoin 100 mg",
        "instruction": "هر ۱۲ ساعت به مدت ۵ روز"
      },
      {
        "name": "Tab Phenazopyridine 100 mg",
        "instruction": "روزی سه بار بعد غذا، دو روز"
      },
      {
        "name": "Cap Cranberry 500 mg",
        "instruction": "روزی یک عدد"
      }
    ],
    "error": "نیتروفورانتوئین در کاهش قابل توجه عملکرد کلیه انتخاب مناسبی نیست و اثربخشی/ایمنی آن مشکل‌ساز می‌شود.",
    "teachingPoint": "در سالمندان و بیماران کلیوی، قبل از انتخاب آنتی‌بیوتیک باید eGFR و محل عفونت بررسی شود."
  },
  {
    "id": "RX-010",
    "isValid": true,
    "difficulty": "easy",
    "category": "dermatology-fungal",
    "dr": "دکتر جلالی",
    "spec": "پوست",
    "patient": "آقای ۳۱ ساله؛ تینیا پدیس خفیف؛ بدون زخم یا دیابت",
    "items": [
      {
        "name": "Cream Clotrimazole 1%",
        "instruction": "روزی دو بار روی محل ضایعه به مدت ۲ تا ۴ هفته"
      },
      {
        "name": "Powder Miconazole",
        "instruction": "روزانه داخل کفش و بین انگشتان در صورت تعریق"
      }
    ],
    "error": null,
    "teachingPoint": "در عفونت قارچی پا، خشک نگه داشتن پا و ادامه درمان چند روز بعد از بهبود ظاهری به کاهش عود کمک می‌کند."
  },
  {
    "id": "RX-011",
    "isValid": false,
    "difficulty": "hard",
    "category": "qt-prolongation",
    "dr": "دکتر پارسا",
    "spec": "اورژانس",
    "patient": "خانم ۶۰ ساله؛ تهوع، سابقه آریتمی و پتاسیم پایین",
    "items": [
      {
        "name": "Tab Azithromycin 500 mg",
        "instruction": "روز اول یک عدد، سپس روزانه"
      },
      {
        "name": "Tab Ondansetron 4 mg",
        "instruction": "هر ۸ ساعت در صورت تهوع"
      },
      {
        "name": "Tab Hydrochlorothiazide 25 mg",
        "instruction": "صبح‌ها یک عدد"
      }
    ],
    "error": "آزیترومایسین و اندانسترون می‌توانند QT را طولانی کنند؛ هیپوکالمی ناشی از تیازید ریسک آریتمی را بیشتر می‌کند.",
    "teachingPoint": "ریسک QT فقط به یک دارو وابسته نیست؛ زمینه بیمار، الکترولیت‌ها و ترکیب داروها تعیین‌کننده‌اند."
  },
  {
    "id": "RX-012",
    "isValid": true,
    "difficulty": "medium",
    "category": "hypertension-basic",
    "dr": "دکتر نیک‌روش",
    "spec": "داخلی",
    "patient": "آقای ۴۸ ساله؛ فشار خون مرحله ۱؛ بدون دیابت یا CKD",
    "items": [
      {
        "name": "Tab Amlodipine 5 mg",
        "instruction": "روزی یک عدد عصرها"
      },
      {
        "name": "Tab Hydrochlorothiazide 12.5 mg",
        "instruction": "صبح‌ها یک عدد"
      },
      {
        "name": "Tab Acetaminophen 500 mg",
        "instruction": "در صورت سردرد، هر ۸ ساعت"
      }
    ],
    "error": null,
    "teachingPoint": "در درمان فشار خون، انتخاب ترکیب منطقی و پایش ادم، فشار خون و الکترولیت‌ها اهمیت دارد."
  },
  {
    "id": "RX-013",
    "isValid": false,
    "difficulty": "medium",
    "category": "thyroid-absorption",
    "dr": "دکتر یوسفی",
    "spec": "غدد",
    "patient": "خانم ۴۴ ساله؛ کم‌کاری تیروئید و کم‌خونی فقر آهن",
    "items": [
      {
        "name": "Tab Levothyroxine 100 mcg",
        "instruction": "صبح ناشتا همراه قرص آهن"
      },
      {
        "name": "Tab Ferrous Sulfate 325 mg",
        "instruction": "صبح ناشتا همراه لووتیروکسین"
      },
      {
        "name": "Tab Calcium Carbonate 500 mg",
        "instruction": "بعد صبحانه"
      }
    ],
    "error": "آهن و کلسیم جذب لووتیروکسین را کاهش می‌دهند و باید با فاصله زمانی مناسب مصرف شوند.",
    "teachingPoint": "دستور مصرف به اندازه نام دارو مهم است؛ تداخلات جذبی با تغییر زمان مصرف قابل پیشگیری‌اند."
  },
  {
    "id": "RX-014",
    "isValid": true,
    "difficulty": "medium",
    "category": "migraine-acute",
    "dr": "دکتر رسولی",
    "spec": "مغز و اعصاب",
    "patient": "خانم ۲۶ ساله؛ میگرن اپیزودیک؛ باردار نیست؛ SSRI مصرف نمی‌کند",
    "items": [
      {
        "name": "Tab Naproxen 250 mg",
        "instruction": "در شروع سردرد، یک تا دو عدد بعد غذا"
      },
      {
        "name": "Tab Sumatriptan 50 mg",
        "instruction": "در حمله شدید، یک عدد؛ در صورت نیاز طبق دستور پزشک تکرار شود"
      },
      {
        "name": "Tab Metoclopramide 10 mg",
        "instruction": "در صورت تهوع، یک عدد"
      }
    ],
    "error": null,
    "teachingPoint": "در میگرن، مصرف زودهنگام داروی حمله و جلوگیری از مصرف بیش از حد مسکن‌ها برای پیشگیری از سردرد ناشی از دارو مهم است."
  },
  {
    "id": "RX-015",
    "isValid": false,
    "difficulty": "hard",
    "category": "statin-macrolide",
    "dr": "دکتر شایان",
    "spec": "عفونی",
    "patient": "آقای ۵۸ ساله؛ پنومونی خفیف؛ مصرف‌کننده داروی چربی خون",
    "items": [
      {
        "name": "Tab Simvastatin 40 mg",
        "instruction": "شب‌ها یک عدد طبق روال قبلی"
      },
      {
        "name": "Tab Clarithromycin 500 mg",
        "instruction": "هر ۱۲ ساعت"
      },
      {
        "name": "Tab Acetaminophen 500 mg",
        "instruction": "در صورت تب"
      }
    ],
    "error": "کلاریترومایسین می‌تواند سطح سیمواستاتین را بالا ببرد و خطر میوپاتی/رابدومیولیز را افزایش دهد.",
    "teachingPoint": "در نسخه آنتی‌بیوتیک، داروهای مزمن بیمار مثل استاتین‌ها نباید نادیده گرفته شوند."
  },
  {
    "id": "RX-016",
    "isValid": true,
    "difficulty": "easy",
    "category": "allergy-rhinitis",
    "dr": "دکتر کامیاب",
    "spec": "گوش، حلق و بینی",
    "patient": "آقای ۳۳ ساله؛ رینیت آلرژیک فصلی؛ بدون آسم شدید",
    "items": [
      {
        "name": "Spray Fluticasone Nasal",
        "instruction": "روزی یک بار، هر سوراخ بینی یک پاف"
      },
      {
        "name": "Tab Loratadine 10 mg",
        "instruction": "روزی یک عدد"
      },
      {
        "name": "Spray Saline Nasal",
        "instruction": "چند بار در روز در صورت گرفتگی"
      }
    ],
    "error": null,
    "teachingPoint": "اسپری کورتونی بینی در رینیت آلرژیک مؤثر است اما تکنیک صحیح مصرف، اثر درمان را تعیین می‌کند."
  },
  {
    "id": "RX-017",
    "isValid": false,
    "difficulty": "medium",
    "category": "gout-renal-nsaid",
    "dr": "دکتر شهریاری",
    "spec": "روماتولوژی",
    "patient": "آقای ۶۸ ساله؛ حمله حاد نقرس؛ زخم معده فعال و CKD",
    "items": [
      {
        "name": "Tab Indomethacin 50 mg",
        "instruction": "روزی سه بار بعد غذا"
      },
      {
        "name": "Tab Allopurinol 300 mg",
        "instruction": "شروع از امروز، روزی یک عدد"
      },
      {
        "name": "Cap Omeprazole 20 mg",
        "instruction": "صبح ناشتا"
      }
    ],
    "error": "NSAID قوی در زخم معده فعال و CKD پرخطر است؛ شروع/تغییر آلوپورینول در حمله حاد نیز باید با احتیاط انجام شود.",
    "teachingPoint": "در نقرس، درمان حمله حاد و درمان کاهش اورات دو موضوع جدا هستند و شرایط کلیه/گوارش انتخاب دارو را تغییر می‌دهد."
  },
  {
    "id": "RX-018",
    "isValid": true,
    "difficulty": "medium",
    "category": "iron-deficiency",
    "dr": "دکتر مهران",
    "spec": "داخلی",
    "patient": "خانم ۳۸ ساله؛ کم‌خونی فقر آهن؛ بدون بارداری؛ یبوست خفیف",
    "items": [
      {
        "name": "Tab Ferrous Sulfate 325 mg",
        "instruction": "یک روز در میان، صبح با یک لیوان آب یا آبمیوه"
      },
      {
        "name": "Tab Folic Acid 1 mg",
        "instruction": "روزی یک عدد"
      },
      {
        "name": "Syr Lactulose",
        "instruction": "در صورت یبوست طبق نیاز"
      }
    ],
    "error": null,
    "teachingPoint": "مصرف آهن یک‌روزدرمیان در برخی بیماران تحمل گوارشی را بهتر می‌کند و جذب را قابل قبول نگه می‌دارد."
  },
  {
    "id": "RX-019",
    "isValid": false,
    "difficulty": "hard",
    "category": "cns-depression",
    "dr": "دکتر وفایی",
    "spec": "روانپزشکی",
    "patient": "آقای ۵۵ ساله؛ بی‌خوابی، کمردرد؛ سابقه مصرف الکل گهگاهی",
    "items": [
      {
        "name": "Tab Alprazolam 0.5 mg",
        "instruction": "شب‌ها یک عدد"
      },
      {
        "name": "Cap Pregabalin 75 mg",
        "instruction": "شب‌ها یک عدد"
      },
      {
        "name": "Tab Codeine/Acetaminophen",
        "instruction": "در صورت درد، هر ۸ ساعت"
      },
      {
        "name": "Tab Cyclobenzaprine 10 mg",
        "instruction": "شب‌ها یک عدد"
      }
    ],
    "error": "تجمع داروهای مضعف CNS خطر خواب‌آلودگی شدید، افت تنفس، سقوط و حوادث را بالا می‌برد.",
    "teachingPoint": "پلی‌فارماسی با داروهای آرام‌بخش و ضد درد مخدر باید به‌خصوص در میانسالان و سالمندان جدی گرفته شود."
  },
  {
    "id": "RX-020",
    "isValid": true,
    "difficulty": "easy",
    "category": "supplement-basic",
    "dr": "دکتر راد",
    "spec": "عمومی",
    "patient": "خانم ۳۰ ساله؛ کمبود ویتامین D؛ بدون سنگ کلیه یا هایپرکلسمی",
    "items": [
      {
        "name": "Pearl Vitamin D3 50000 IU",
        "instruction": "هفته‌ای یک عدد به مدت ۸ هفته"
      },
      {
        "name": "Tab Calcium-D",
        "instruction": "روزی یک عدد همراه غذا، در صورت دریافت ناکافی لبنیات"
      },
      {
        "name": "Cap Omega-3 1000 mg",
        "instruction": "روزی یک عدد بعد غذا"
      }
    ],
    "error": null,
    "teachingPoint": "مکمل‌ها هم باید با سابقه بیمار سنجیده شوند؛ در مصرف کلسیم، سابقه سنگ کلیه و هایپرکلسمی اهمیت دارد."
  },
  {
    "id": 21,
    "dr": "دکتر اسدی",
    "spec": "گوش و حلق و بینی",
    "items": [
      "آموکسی‌سیلین ۵۰۰",
      "استامینوفن ۵۰۰"
    ],
    "isValid": true,
    "explanation": "درمان روتین عفونت و درد."
  },
  {
    "id": 22,
    "dr": "دکتر مرادی",
    "spec": "چشم‌پزشکی",
    "items": [
      "قطره کلرامفنیکل",
      "اشک مصنوعی"
    ],
    "isValid": true,
    "explanation": "درمان عفونت باکتریایی چشم و خشکی."
  },
  {
    "id": 23,
    "dr": "دکتر ناصری",
    "spec": "روماتولوژی",
    "items": [
      "متوترکسات",
      "اسید فولیک"
    ],
    "isValid": true,
    "explanation": "مکمل فولیک اسید برای کاهش عوارض جانبی متوترکسات ضروری است."
  },
  {
    "id": 24,
    "dr": "دکتر حسینی",
    "spec": "داخلی",
    "items": [
      "امپرازول ۲۰",
      "شربت آلومینیوم ام‌جی"
    ],
    "isValid": true,
    "explanation": "پروتکل استاندارد کنترل اسید معده."
  },
  {
    "id": 25,
    "dr": "دکتر کیانی",
    "spec": "ارتوپدی",
    "items": [
      "ناپروکسن ۲۵۰",
      "پانتوپرازول ۲۰"
    ],
    "isValid": true,
    "explanation": "تجویز پانتوپرازول برای محافظت معده در برابر NSAID."
  },
  {
    "id": 26,
    "dr": "دکتر نیک‌بین",
    "spec": "زنان و زایمان",
    "items": [
      "کپسول فرفولیک",
      "ویتامین ث ۵۰۰"
    ],
    "isValid": true,
    "explanation": "ویتامین ث جذب آهن را در مکمل فرفولیک بهبود می‌بخشد."
  },
  {
    "id": 27,
    "dr": "دکتر صبوری",
    "spec": "قلب و عروق",
    "items": [
      "آتورواستاتین ۲۰",
      "آسپرین ۸۰"
    ],
    "isValid": true,
    "explanation": "ترکیب استاندارد برای پیشگیری از حوادث قلبی."
  },
  {
    "id": 28,
    "dr": "دکتر جاوید",
    "spec": "ریه",
    "items": [
      "اسپری سالبوتامول",
      "اسپری فلوتیکازون"
    ],
    "isValid": true,
    "explanation": "ترکیب گشادکننده برونش و کورتون استنشاقی."
  },
  {
    "id": 29,
    "dr": "دکتر کریمی",
    "spec": "غدد",
    "items": [
      "لووتیروکسین ۱۰۰",
      "کلسیم دی"
    ],
    "isValid": true,
    "explanation": "در صورت رعایت فاصله زمانی در مصرف، مانعی ندارد."
  },
  {
    "id": 30,
    "dr": "دکتر پارسا",
    "spec": "پوست",
    "items": [
      "پماد هیدروکورتیزون",
      "لوسیون کالامین"
    ],
    "isValid": true,
    "explanation": "درمان التهاب و خارش موضعی."
  },
  {
    "id": 31,
    "dr": "دکتر امینی",
    "spec": "قلب و عروق",
    "items": [

