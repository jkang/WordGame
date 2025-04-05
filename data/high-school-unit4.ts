import type { VocabularyWord } from "@/types/vocabulary"


// Word List 04 Data (derived from OCR of pages 25-33)
export const highSchoolUnit4: VocabularyWord[] = [
  // Page 25
  {
    word: "pure",
    pronunciation: "/ pjuə(r) /",
    partOfSpeech: "adj.",
    definition: "纯的;纯真的;干净的",
    wordRootMemory: "", // OCR didn't capture a specific memory aid, only related word
    examples: ["pure science 纯科学(有别于应用科学)"],
    usageNotes: [
        "pure water 纯净水",
        "pure gold 纯金",
        "pure coincidence 纯属巧合"
        ],
    relatedWords: ["purely(adv. 纯粹地;完全地)"],
  },
  {
    word: "wealthy",
    pronunciation: "/ 'welθi /",
    partOfSpeech: "adj.",
    definition: "富有的",
    wordRootMemory: "联想记忆:光富有(wealthy)是不够的,还要健康 (healthy)",
    examples: ["Susan lives in a wealthy city on the East Coast of the USA. 苏珊住在美国东海岸一个富裕的城市。"],
    usageNotes: [
        "Often implies having significant assets beyond just income.",
        "Synonyms include 'rich', 'affluent'."
        ],
  },
  {
    word: "duty",
    pronunciation: "/ 'djuːti /",
    partOfSpeech: "n.",
    definition: "责任;义务;税",
    wordRootMemory: "", // No memory aid in OCR text
    examples: ["It is our duty to protect the environment. 保护环境是我们的责任。", "He paid the customs duty on the imported goods. 他支付了进口商品的关税。"],
    usageNotes: [
      "1. on duty 值班,值日",
      "2. off duty 下班",
      "3. a sense of duty 责任感",
      "4. duty free 免税",
    ],
    relatedWords: ["dutiful(adj. 顺从的;尽职的)"],
  },
  {
    word: "attend",
    pronunciation: "/ ə'tend /",
    partOfSpeech: "v.",
    definition: "出席,参加;注意,专心; 看护,照料",
    wordRootMemory: "词根记忆:at( 表加强)+tend(伸展)→延伸 (服务)→看护",
    examples: ["I have to attend a senior staff meeting, which may last about two hours. 我要参加一个高级职员会议,可能要持续约两个小时。(2017年全国卷 1)", "She hadn't been attending during the lesson. 上课时她一直不专心。", "Tom was ready to attend to everybody's business but his own. 汤姆乐于助人却忽略了自己。"],
    usageNotes: [
        "attend sth. 出席某活动 (e.g., meeting, school, church)",
        "attend to sb./sth. 照料；处理: Please attend to this matter immediately. 请立即处理这件事。"
        ],
  },
  {
    word: "mainland",
    pronunciation: "/ 'meɪnlænd /",
    partOfSpeech: "n.",
    definition: "大陆",
    wordRootMemory: "组合词: main(主要的)+land(陆地)→大陆",
    examples: ["the Antarctic mainland 南极洲大陆", "Many tourists travel from the islands to the mainland. 许多游客从岛屿去大陆旅行。"],
    usageNotes: [
        "Often used to refer to the main part of a country or continent, excluding islands.",
        "e.g., mainland China 中国大陆"
        ],
  },
  {
    word: "routine",
    pronunciation: "/ ruː'tiːn /",
    partOfSpeech: "n./adj.", // OCR text shows n. and adj. usage in examples/memory aid
    definition: "常规,日常事务 adj. 常规的",
    wordRootMemory: "联想记忆:日常事务 (routine) 就是按常规路线 (route) 走",
    examples: ["a routine medical examination 常规体检", "Getting up early is part of my daily routine. 早起是我日常作息的一部分。"],
    usageNotes: [
        "daily routine 日常事务",
        "routine check 例行检查",
        "Can be a noun or adjective."
        ],
  },
  {
    word: "injure",
    pronunciation: "/ 'ɪndʒə(r) /",
    partOfSpeech: "vt.",
    definition: "损害;伤害",
    wordRootMemory: "词根记忆: in(不)+jur(法律)+e→法律不允许随意伤害人→伤害",
    examples: ["A month before my first marathon, one of my ankles was injured and this meant not running for two weeks, leaving me only two weeks to train. 在我第一次参加马拉松的前一个月,我的一只脚踝受伤了。这意味着我两个星期不能跑步,只留给我两个星期的时间去训练。(2018年北京卷)"],
    usageNotes: [
        "injure sb./sth. 伤害某人/某物",
        "be injured 受伤: He was badly injured in the accident. 他在事故中受了重伤。"
        ],
    relatedWords: ["injury(n. 损伤;受伤处)"],
  },

  // Page 26
  {
    word: "resemble",
    pronunciation: "/ rɪ'zembl /",
    partOfSpeech: "vt.",
    definition: "像,类似",
    wordRootMemory: "词根记忆:re(一再)+sembl(一样)+e→再怎么都一样→像,类似",
    examples: ["He strongly resembles his mother. 他与他的母亲非常像。"],
    usageNotes: [
        "Used to point out similarity in appearance or character.",
        "Does not typically take the continuous form.",
        "Takes a direct object without a preposition: resemble sb./sth. (NOT resemble to/with sb./sth.)"
        ],
  },
  {
    word: "typhoon",
    pronunciation: "/ taɪ'fuːn /",
    partOfSpeech: "n.",
    definition: "台风",
    wordRootMemory: "发音记忆:音似“台风”",
    examples: ["violent typhoon 强台风", "The village was destroyed by the typhoon. 村庄被台风摧毁了。"],
    usageNotes: [
        "A type of tropical cyclone occurring in the western Pacific or Indian oceans.",
        "Similar terms: hurricane (Atlantic/Northeast Pacific), cyclone (South Pacific/Indian Ocean)."
        ],
  },
  {
    word: "remind",
    pronunciation: "/ rɪ'maɪnd /",
    partOfSpeech: "vt.",
    definition: "提醒,使记起",
    wordRootMemory: "词根记忆:re(重新)+mind(头脑,思想)→重新浮现在脑海中→提醒,使记起",
    examples: ["Her dad reminded her that sugary treats were bad for her teeth. 她的爸爸提醒她,甜食对她的牙齿有害。(2019年北京卷)", "Please remind me to call him tomorrow. 请提醒我明天给他打电话。"],
    usageNotes: [
        "remind sb. of sth. 使某人想起某事: This song reminds me of my childhood. 这首歌让我想起了我的童年。",
        "remind sb. to do sth. 提醒某人去做某事",
        "remind sb. that... 提醒某人...",
    ],
  },
  {
    word: "pollute",
    pronunciation: "/ pə'luːt /",
    partOfSpeech: "vt.",
    definition: "污染",
    wordRootMemory: "", // No memory aid in OCR text
    examples: ["You've heard that plastic is polluting the oceans—between 4.8 and 12.7 million tonnes enter ocean ecosystems every year. 你听说过,塑料在污染海洋,每年有480万到1270万吨塑料进入海洋生态系统。(2021年全国乙卷)", "Factory waste can pollute rivers. 工厂废物会污染河流。"],
    usageNotes: [
        "pollute sth. (e.g., air, water, environment)",
        "Related noun: pollution 污染",
        "Related adjective: polluted 被污染的"
        ],
  },
  {
    word: "alike",
    pronunciation: "/ ə'laɪk /",
    partOfSpeech: "adj./adv.",
    definition: "相像的,相似的 adv. 相似地;以同样的方式",
    wordRootMemory: "词根记忆: a(表加强)+like(相似的)→非常相似→相同的,相似的",
    examples: ["The twins look alike, but they don't act alike. 这对双胞胎长得很像,但举止却不像。", "Big people, little people, black people, white people—we treat them all alike. 大人物、小人物、黑人、白人——我们都一视同仁。"],
    usageNotes: [
        "Used as an adjective (predicative only, after a linking verb) or adverb.",
        "e.g., They think alike. 他们想法一致。(adv.)",
        "e.g., The two brothers are very alike. 这两兄弟非常相像。(adj.)",
        "Unlike 'similar', 'alike' usually appears after the nouns it describes or modifies a verb/clause."
        ],
    relatedWords: ["similar(adj. 相似的); unlike(adj./prep. 不像,与………不同)"],
  },
  {
    word: "stadium",
    pronunciation: "/ 'steɪdiəm /",
    partOfSpeech: "n.",
    definition: "(露天)体育场",
    wordRootMemory: "词根记忆: stad(站)+ium(场所)→站着看比赛的地方→(露天)体育场",
    examples: ["A new stadium has been built for the Olympic Games. 为奥运会建造了一座新体育场。", "The football match will be held at the national stadium. 足球赛将在国家体育场举行。"],
    usageNotes: ["A large structure for open-air sports or entertainments.", "e.g., football stadium, Olympic stadium"],
  },
  {
    word: "decrease",
    pronunciation: "/ 'diːkriːs / n. / dɪ'kriːs / v.", // Combined pronunciations
    partOfSpeech: "n./v.",
    definition: "n. 减小;减少 v. 减小;减少",
    wordRootMemory: "词根记忆:de(向下)+crease(增长)→负增长→减少;减小\n联想记忆: 和 increase(n./v. 增加)一起记",
    examples: ["The birth rate in Europe has been in a steady decrease since the 1960s. 20 世纪60年代以来,欧洲的人口出生率持续下降。(n.)", "The number of students decreased last year. 学生数量去年减少了。(v.)"],
    usageNotes: [
        "Can be a noun or a verb.",
        "decrease by + amount 减少了多少: Population decreased by 5%. 人口减少了5%。",
        "decrease to + amount 减少到多少: Population decreased to 1 million. 人口减少到100万。",
        "Opposite of increase."
        ],
  },

  // Page 27
  {
    word: "seem",
    pronunciation: "/ siːm /",
    partOfSpeech: "link. v.", // Using specific type from OCR
    definition: "似乎,好像",
    wordRootMemory: "", // No memory aid in OCR text
    examples: ["It seems cruel not to give some money to beggars. 不给乞丐点钱似乎很残忍。", "I seem to hear a voice in the distance. 我好像听到远处有说话声。", "It seems that she's gone away. 她好像已经走了。", "It seemed as if no one cared. 看起来好像没人在意。", "He seems like a nice guy. 他看上去像是个不错的家伙。"], // Combined examples from usage notes
    usageNotes: [
        "1. seem + adj./n.: It seems difficult. 这似乎很难。",
        "2. seem + to do/be: He seems to be happy. 他似乎很高兴。",
        "3. It seems/seemed that...: It seems that it will rain. 看来要下雨了。",
        "4. seem like...: It seems like a good idea. 这好像是个好主意。"
        ],
  },
  {
    word: "regular",
    pronunciation: "/ 'regjələ(r) /",
    partOfSpeech: "adj.",
    definition: "规则的;经常的",
    wordRootMemory: "", // No memory aid in OCR text
    example: "the train's regular schedule 火车的常规时刻表 // He makes regular visits to his parents. 他定期去看望父母。",
    usageNotes: [
        "regular customer 常客",
        "regular basis 定期地",
        "regular exercise 定期锻炼",
        "Opposite: irregular"
        ],
    relatedWords: ["regularly(adv. 有规律地;经常地)"],
  },
  {
    word: "anniversary",
    pronunciation: "/ ˌænɪ'vɜːsəri /",
    partOfSpeech: "n.",
    definition: "周年纪念",
    wordRootMemory: "词根记忆:anni(年)+vers(转)+ary→每年都会转到的日子→周年纪念",
    example: "My parents were in Europe on their fiftieth wedding anniversary. 我父母在欧洲度过了他们的结婚50周年纪念日。 // Today is the anniversary of their first date. 今天是他们第一次约会的周年纪念日。",
    usageNotes: [
        "wedding anniversary 结婚纪念日",
        "the 10th anniversary of the event 事件十周年纪念",
        "celebrate an anniversary 庆祝周年纪念"
        ],
  },
  {
    word: "fuel",
    pronunciation: "/ 'fjuːəl /",
    partOfSpeech: "n.",
    definition: "燃料",
    wordRootMemory: "", // No memory aid in OCR text
    example: "Gas and coal are fuels. 煤气和煤都是燃料。 // The car ran out of fuel. 汽车没油了。",
    usageNotes: [
        "Can be a noun (countable or uncountable).",
        "Types: fossil fuels 化石燃料, nuclear fuel 核燃料",
        "Can also be a verb (to fuel sth.): His words fueled her anger. 他的话火上浇油。"
        ],
  },
  {
    word: "strait",
    pronunciation: "/ streɪt /",
    partOfSpeech: "n.",
    definition: "海峡",
    wordRootMemory: "", // No memory aid in OCR text
    example: "Crossing the strait alone is dangerous. 独自穿越海峡很危险。 // The ship sailed through the strait. 轮船驶过海峡。",
    usageNotes: [
        "A narrow passage of water connecting two larger bodies of water.",
        "Often used in geographical names, e.g., the Strait of Gibraltar 直布罗陀海峡.",
        "Can also mean a difficult situation (usually plural: straits): in dire straits 处境艰难。"
        ],
  },
  {
    word: "cube",
    pronunciation: "/ kjuːb /",
    partOfSpeech: "n.",
    definition: "立方体",
    wordRootMemory: "", // No memory aid in OCR text
    example: "Add two ice cubes to the drink. 在饮料里加两块冰块。 // 3 cubed (3³) is 27. 3的立方是27。",
    usageNotes: [
        "A solid shape with six equal square sides.",
        "ice cube 冰块",
        "sugar cube 方糖",
        "As a verb: to cube a number 求某数的立方"
        ],
    relatedWords: ["cubic(adj. 立方体的)"],
  },
  {
    word: "over",
    pronunciation: "/ 'əʊvə(r) /",
    partOfSpeech: "prep./adv./adj.",
    definition: "prep. 在…之上;超过; 在…期间 adv. 越过 adj. 完了的,结束的",
    wordRootMemory: "", // No memory aid in OCR text
    example: "The lamp hung over the table. 那盏灯悬挂在桌子上方。 // Do you think it's going to rain over the weekend? 你认为周末会一直下雨吗? // The meeting is over. 会议结束了。",
    usageNotes: [
        "1. all over 浑身; 全部",
        "2. over and over again 一而再、再而三地",
        "3. turn over 翻转;移交",
        "4. take over 接管"
        ],
  },
  {
    word: "considerate",
    pronunciation: "/ kən'sɪdərət /",
    partOfSpeech: "adj.",
    definition: "体贴的,考虑周到的,替人着想的",
    wordRootMemory: "联想记忆: consider(考虑)+ate →考虑很多的→体贴的,考虑周到的",
    example: "The boss was always considerate towards every employee. 那个老板总是为每个员工着想。 // It was considerate of you to bring flowers. 你带花来真是太体贴了。",
    usageNotes: [
        "Thoughtful of the rights and feelings of others.",
        "be considerate of/towards sb. 体谅某人",
        "Opposite: inconsiderate"
        ],
  },

  // Page 28
  {
    word: "speak",
    pronunciation: "/ spiːk /",
    partOfSpeech: "v.",
    definition: "(spoke, spoken, speaking) 说,讲;谈话;发言",
    wordRootMemory: "", // No memory aid in OCR text
    example: "Can you speak English? 你会讲英语吗? // She spoke quietly. 她轻声说话。 // He spoke about his travels. 他谈论了他的旅行。",
    usageNotes: [
        "1. speak to/with sb. (about sth.) 与某人谈论某事",
        "2. speak + language: speak Chinese 说中文",
        "3. speak out 大声说出；公开表态",
        "4. generally speaking 一般来说"
        ],
  },
  {
    word: "purchase",
    pronunciation: "/ 'pɜːtʃəs /",
    partOfSpeech: "n./vt.",
    definition: "购买",
    wordRootMemory: "", // No memory aid in OCR text
    example: "I encourage readers to go to their local library when they can't afford to purchase a book. 我鼓励读者在买不起书时去他们当地的图书馆。(2020年全国卷 2) // He gave his son some money for the purchase of his school books. 他给儿子一些钱买课本。",
    usageNotes: [
        "Often used in formal or business contexts (more formal than 'buy').",
        "make a purchase 购买 (noun)",
        "purchase sth. from... 从...购买某物 (verb)"
        ],
  },
  {
    word: "master",
    pronunciation: "/ 'mɑːstə(r) /",
    partOfSpeech: "vt./n.",
    definition: "vt. 精通,掌握 n. 主人;硕士",
    wordRootMemory: "", // No memory aid in OCR text
    example: "People should work harder to master computer use. 人们应该更努力地学习使用计算机。// the master's degree 硕士学位 // She quickly mastered the new software. 她很快掌握了新软件。",
    usageNotes: [
        "master a skill/language/subject 掌握一项技能/语言/学科",
        "master's degree 硕士学位",
        "old master (艺术)大师"
        ],
  },
  {
    word: "object",
    pronunciation: "/ 'ɒbdʒɪkt / n. / əb'dʒekt / v.", // Combined pronunciations
    partOfSpeech: "n./v.",
    definition: "n. 物体;目标;宾语 v. 反对",
    wordRootMemory: "词根记忆:ob(反)+ject(扔)→反向扔→反对",
    example: "He can draw without looking at the object he draws. 他不看实物就能把要画的东西画出来。(n.) // Many people object to the new plan. 许多人反对这项新计划。(v.)",
    usageNotes: [
        "object to (doing) sth. 反对(做)某事: I strongly object to your suggestion. 我强烈反对你的提议。",
        "Pronunciation differs between noun ('OB-ject') and verb ('ob-JECT')."
        ],
    relatedWords: ["objection(n. 反对,抗议)"],
  },
  {
    word: "starvation",
    pronunciation: "/ stɑː'veɪʃn /",
    partOfSpeech: "n. [U]",
    definition: "饥饿;饿死",
    wordRootMemory: "来自 starve(vi. 挨饿)",
    example: "Millions of people will face starvation next year as a result of the flood. 由于洪水,数百万人明年将要面临挨饿的困境。 // Many animals died of starvation during the drought. 许多动物在干旱期间饿死了。",
    usageNotes: [
        "Suffix -ation often indicates a state or process.",
        "die of starvation 死于饥饿",
        "Related verb: starve (to death) 饿死"
        ],
  },
  {
    word: "fond",
    pronunciation: "/ fɒnd /",
    partOfSpeech: "adj.",
    definition: "喜爱的,爱好的",
    wordRootMemory: "", // No memory aid in OCR text
    example: "Tom is extremely fond of pointing out others' mistakes. 汤姆特别喜欢挑别人的毛病。 // She is fond of animals. 她喜欢动物。",
    usageNotes: [
        "be fond of sb./sth./doing sth. 喜爱某人/某物/做某事",
        "Implies affection or liking, often developed over time.",
        "fond farewell 深情的告别",
        "fond memories 美好的回忆"
        ],
  },
  {
    word: "staff",
    pronunciation: "/ stɑːf /",
    partOfSpeech: "n.",
    definition: "全体职员",
    wordRootMemory: "", // No memory aid in OCR text
    example: "the staff of a school 学校的教职员工 // All the staff were helpful. 所有的员工都很乐于助人。",
    usageNotes: [
        "Usually treated as a collective noun (singular or plural verb depending on focus).",
        "e.g., The staff is small. (as a unit) 员工人数不多。",
        "e.g., The staff are on strike. (as individuals) 员工们在罢工。",
        "teaching staff 教职员工; medical staff 医务人员"
        ],
  },
  {
    word: "package",
    pronunciation: "/ 'pækɪdʒ /",
    partOfSpeech: "n.",
    definition: "(尤指包装好或密封的)一包,一袋,一盒;包裹",
    wordRootMemory: "", // No memory aid in OCR text
    example: "John asked his little boy to buy him a package of cigars in the near shop. 约翰叫他的小儿子在附近的商店给他买一包香烟。 // I received a package in the mail today. 我今天收到了一个邮寄的包裹。",
    usageNotes: [
        "a package of cookies 一包饼干",
        "package holiday 包价旅游",
        "package deal 一揽子交易",
        "Also a verb: to package goods 把货物包装起来"
        ],
  },
  {
    word: "straightforward",
    pronunciation: "/ ˌstreɪt'fɔːwəd /",
    partOfSpeech: "adj.",
    definition: "坦率的;容易的,易懂的",
    wordRootMemory: "组合词: straight(直的)+forward(向前的)→直截了当的→坦率的",
    example: "I have always been honest and straightforward. 我一直都正直、坦率。 // The instructions were straightforward and easy to follow. 说明简单明了，易于遵守。",
    usageNotes: [
        "Meaning 1: Honest and open.",
        "Meaning 2: Simple and easy to understand or do.",
        "straightforward answer/explanation 坦率的回答/简单的解释",
        ],
  },

  // Page 29
  {
    word: "guilty",
    pronunciation: "/ 'gɪlti /",
    partOfSpeech: "adj.",
    definition: "有罪的,犯法的;内疚的",
    wordRootMemory: "", // No memory aid in OCR text
    example: "I felt guilty about lying to you. 对你撒了谎,我感到很内疚。 // The jury found him guilty of murder. 陪审团判他犯有谋杀罪。",
    usageNotes: [
        "feel guilty about sth./doing sth. 对某事感到内疚",
        "be found guilty (of a crime) 被判有罪",
        "plead guilty 认罪",
        "Opposite: innocent"
        ],
  },
  {
    word: "exercise",
    pronunciation: "/ 'eksəsaɪz /",
    partOfSpeech: "n./v.",
    definition: "n. [C] 练习; [U] 锻炼 v. 锻炼",
    wordRootMemory: "", // No memory aid in OCR text
    example: "physical exercise 体育锻炼 // If you exercise out of doors, your body will learn to breathe more deeply... (2019年全国卷 1) // You should exercise regularly to stay healthy. 你应该经常锻炼以保持健康。",
    usageNotes: [
        "do/take some exercise 锻炼",
        "physical exercise 体育锻炼; mental exercise 脑力练习",
        "grammar exercises 语法练习",
        "exercise caution/patience 行使谨慎/耐心 (formal)"
        ],
  },
  {
    word: "Antarctic",
    pronunciation: "/ æn'tɑːktɪk /",
    partOfSpeech: "adj./n.",
    definition: "adj. 南极的 n. 南极地区",
    wordRootMemory: "词根记忆:ant(相反)+arctic(北极的)→北极的反面→南极的",
    example: "Antarctic explorers have many strange experiences there. 南极探险者在南极有很多奇怪的经历。 // Penguins live in the Antarctic. 企鹅生活在南极地区。",
    usageNotes: [
        "Refers to the South Pole region (continent Antarctica).",
        "the Antarctic (noun) 南极地区",
        "Antarctic Treaty 南极条约",
        "Opposite: Arctic (North Pole region)"
        ],
  },
  {
    word: "ever",
    pronunciation: "/ 'evə(r) /",
    partOfSpeech: "adv.",
    definition: "曾经;无论何时",
    wordRootMemory: "", // No memory aid in OCR text
    example: "I would never ever come to this restaurant again. The food is terrible! 我以后再也不会来这家饭店了,饭菜太难吃了! // Have you ever been to Japan? 你曾经去过日本吗?",
    usageNotes: [
        "Often used in questions and negative statements with present perfect.",
        "Used for emphasis: best film ever 看过的最好的电影; worse than ever 前所未有地糟糕。",
        "Comparative forms: ever-increasing 不断增加的",
        "See related words in OCR: however, whatever, whenever, etc."
        ],
  },
  {
    word: "currency",
    pronunciation: "/ 'kʌrənsi /",
    partOfSpeech: "n.",
    definition: "货币",
    wordRootMemory: "词根记忆: curr(跑)+ency→正在跑的,流通的→货币",
    example: "While money is indeed wonderful and necessary, rereading an author's work is the highest currency a reader can pay them. (2020年全国卷 1) // What is the currency used in Japan? 日本使用的货币是什么？",
    usageNotes: [
        "The system of money used in a particular country.",
        "foreign currency 外币; local currency 当地货币",
        "exchange currency 兑换货币",
        "Can also mean the state of being accepted or used: an idea gaining currency. 一个逐渐被接受的想法。"
        ],
  },
  {
    word: "hall",
    pronunciation: "/ hɔːl /",
    partOfSpeech: "n.",
    definition: "大厅,礼堂;门厅,过道",
    wordRootMemory: "联想记忆:在大厅 (hall) 里踢球 (ball)",
    example: "the Town Hall = the City Hall 市政厅 // There are three dining halls on campus. 校园里有三个食堂。 // We waited in the entrance hall. 我们在门厅等候。",
    usageNotes: [
        "concert hall 音乐厅",
        "dining hall 餐厅",
        "entrance hall 门厅",
        "hall of residence (BrE) / dormitory (AmE) 学生宿舍楼"
        ],
  },
  {
    word: "innocent",
    pronunciation: "/ 'ɪnəsnt /",
    partOfSpeech: "adj.",
    definition: "清白的,无辜的;纯真的,天真无邪的",
    wordRootMemory: "词根记忆: in(无)+noc(伤害)+ent(……的)→无害的→纯真的",
    example: "I'm innocent. 我是无辜的。 // He claims to be innocent of the crime. 他声称自己没有犯那项罪行。 // She has an innocent face. 她有一张天真无邪的脸。",
    usageNotes: [
        "innocent until proven guilty 无罪推定",
        "innocent mistake/remark 无心的错误/话语",
        "Not guilty of a crime.",
        "Opposite: guilty"
        ],
    relatedWords: ["innocence(n. 清白; 纯真)"],
  },

  // Page 30
  {
    word: "parking",
    pronunciation: "/ 'pɑːkɪŋ /",
    partOfSpeech: "n. [U]",
    definition: "停车",
    wordRootMemory: "", // No memory aid in OCR text
    example: "All the parking spaces of this shopping mall were taken. 这个购物中心的停车位已经满了。 // Finding parking in the city center can be difficult. 在市中心找停车位可能很难。",
    usageNotes: [
        "parking lot / car park 停车场",
        "parking space/spot 停车位",
        "parking ticket 违停罚单",
        "no parking 禁止停车"
        ],
  },
  {
    word: "rubbish",
    pronunciation: "/ 'rʌbɪʃ /",
    partOfSpeech: "n. [U]",
    definition: "垃圾;废物",
    wordRootMemory: "", // No memory aid in OCR text
    example: "The corner of the room was littered with rubbish. 这间房间的角落里堆着垃圾。 // Please put the rubbish in the bin. 请把垃圾扔进垃圾桶。",
    usageNotes: [
        "Mainly British English for 'trash' or 'garbage'.",
        "Can also mean nonsense or something of poor quality.",
        "talk rubbish 胡说八道",
        "rubbish bin 垃圾桶"
        ],
  },
  {
    word: "freeway",
    pronunciation: "/ 'friːweɪ /",
    partOfSpeech: "n.",
    definition: "高速公路",
    wordRootMemory: "组合词: free(自由)+way(道路)→车辆通行无阻→高速公路",
    example: "A freeway runs through the village. 一条高速公路穿过那个村庄。 // Traffic on the freeway was heavy this morning. 今天早上高速公路上的交通很拥挤。",
    usageNotes: [
        "Mainly US English for a major road with multiple lanes and no tolls.",
        "Similar to 'motorway' in British English."
        ],
  },
  {
    word: "extension",
    pronunciation: "/ ɪk'stenʃn /",
    partOfSpeech: "n.",
    definition: "伸展,延伸",
    wordRootMemory: "词根记忆:ex(出)+tens(伸展)+ion →伸展",
    example: "Tools are extensions of human hands. 工具是人类双手的延伸。 // We are building an extension to our house. 我们正在给房子加盖一部分。",
    usageNotes: [
        "extension cord 延长线",
        "get an extension on a deadline 获得延期",
        "telephone extension 电话分机",
        "Related verb: extend 延伸；延长"
        ],
  },
  {
    word: "reasonable",
    pronunciation: "/ 'riːznəbl /",
    partOfSpeech: "adj.",
    definition: "(决定或行动)合理的;(期望或解释)有道理的;通情达理的",
    wordRootMemory: "", // No memory aid in OCR text
    example: "Now it's not reasonable to sell the new houses at a high price in some big cities. 目前,在一些大城市以高价卖新房是不合理的。 // She seems like a reasonable person. 她看起来像个通情达理的人。",
    usageNotes: [
        "reasonable price/offer 合理的价格/提议",
        "reasonable explanation/excuse 合理的解释/借口",
        "be reasonable 通情达理",
        "Opposite: unreasonable"
        ],
  },
  {
    word: "available",
    pronunciation: "/ ə'veɪləbl /",
    partOfSpeech: "adj.",
    definition: "有空的;可得到的,可用的",
    wordRootMemory: "词根记忆: a(表加强)+vail(价值)+able(有…性质的)→有价值的→可用的",
    example: "Is Dr. Black available? I'd like to talk to him. 布莱克医生有空吗?我想跟他谈一谈。// Lockers are available to store any belongings during your visit. (2017年全国卷1) // Tickets are available online. 票可以在网上买到。",
    usageNotes: [
        "Able to be used, obtained, or free to do something.",
        "available resources 可用资源",
        "be available for comment 可以发表评论",
        "Check availability 查询是否有空/有货"
        ],
  },
  {
    word: "plus",
    pronunciation: "/ plʌs /",
    partOfSpeech: "prep.",
    definition: "加,加上",
    wordRootMemory: "", // No memory aid in OCR text
    example: "The cost is 20 yuan, plus 12 yuan for postage. 费用为20元,另加12元的邮费。// Six plus two equals eight. 6加2等于8。 // The job requires experience, plus a willingness to travel. 这项工作需要经验，外加愿意出差。",
    usageNotes: [
        "Used in arithmetic (2 + 2 = 4).",
        "Can also mean 'in addition to' as a conjunction or preposition.",
        "Used informally to mean 'and also': It's raining, plus I feel tired. 下雨了，而且我感觉很累。",
        "Opposite: minus (-)"
        ],
  },
  {
    word: "outstanding",
    pronunciation: "/ aʊt'stændɪŋ /",
    partOfSpeech: "adj.",
    definition: "突出的,显著的;杰出的",
    wordRootMemory: "联想记忆: out(超出)+stand(站)+ing →站出来的→鹤立鸡群的→突出的",
    example: "He is an outstanding politician. 他是一名杰出的政治家。 // She has outstanding talent. 她有杰出的才能。",
    usageNotes: [
        "Meaning 1: Extremely good; excellent.",
        "Meaning 2: Not yet paid, solved, or dealt with.",
        "outstanding performance/achievement 杰出的表现/成就",
        "outstanding debt/balance 未偿还的债务/余额"
        ],
  },
  {
    word: "champion",
    pronunciation: "/ 'tʃæmpiən /",
    partOfSpeech: "n.",
    definition: "冠军,优胜者",
    wordRootMemory: "", // No memory aid in OCR text
    example: "the boxing champion of the world 世界拳击冠军 // She is the reigning Olympic champion. 她是现任奥运冠军。",
    usageNotes: [
        "world champion 世界冠军",
        "defending champion 卫冕冠军",
        "Also a verb: to champion a cause/rights 支持一项事业/权利"
        ],
  },

  // Page 31
  {
    word: "experiment",
    pronunciation: "/ ɪk'sperɪmənt /",
    partOfSpeech: "n.",
    definition: "实验",
    wordRootMemory: "", // No memory aid in OCR text
    example: "The result of the experiment was very good. 实验的结果非常理想。 // Scientists are conducting experiments to test the theory. 科学家们正在进行实验来检验这个理论。",
    usageNotes: [
        "do/conduct/carry out an experiment 做实验",
        "experiment on/with sth. 用...做实验",
        "scientific experiment 科学实验",
        "Also a verb: to experiment with new methods 试验新方法"
        ],
  },
  {
    word: "can", // Modal verb
    pronunciation: "/ kæn /",
    partOfSpeech: "modal v.",
    definition: "可能;能够;可以",
    wordRootMemory: "", // No memory aid in OCR text
    example: "Can you drive a car? 你会开车吗? // Can it be true? 这是真的吗? // Today is Sunday. He can't be at school today. 今天是星期天,他不可能去上学。 // You can use my car. 你可以用我的车。", // Combined examples from usage notes
    usageNotes: [
      "1. Ability: I can swim. 我会游泳。",
      "2. Possibility: It can be cold here. 这里可能会很冷。",
      "3. Permission (informal): Can I go now? 我现在可以走了吗？",
      "Cannot / Can't (negative form)"
    ],
  },
  {
    word: "steady",
    pronunciation: "/ 'stedi /",
    partOfSpeech: "adj.",
    definition: "稳固的;平稳的",
    wordRootMemory: "联想记忆:什么事情都做好准备 (ready),后面做起来才会平稳 (steady)",
    example: "Keep the camera steady while you take a picture. 拍照时让相机保持平稳。 // The boat remained steady in the water. 船在水中保持平稳。",
    usageNotes: [
        "steady job/income 稳定的工作/收入",
        "steady pace/progress 稳定的步伐/进展",
        "Hold it steady. 拿稳了。",
        "Also a verb: to steady oneself/sth. 使...稳定"
        ],
  },
  {
    word: "debate",
    pronunciation: "/ dɪ'beɪt /",
    partOfSpeech: "n./v.", // OCR shows n. [C, U] and v.
    definition: "n. [C, U] 讨论,辩论 v. 讨论,辩论",
    wordRootMemory: "词根记忆:de(表加强)+bat(打,击)+e→强烈打击→讨论,辩论",
    example: "After years of heated debate, gray wolves were reintroduced... (2017年全国卷 3) // Scientists were debating whether an asteroid was about to hit the Earth. // They debated the issue for hours. 他们就这个问题辩论了好几个小时。",
    usageNotes: [
        "heated debate 激烈的辩论",
        "public debate 公开辩论",
        "debate team 辩论队",
        "debate sth./whether... 辩论某事/是否..."
        ],
  },
  {
    word: "can", // Noun - tin
    pronunciation: "/ kæn /",
    partOfSpeech: "(英 tin) n.",
    definition: "罐头;铁罐;垃圾桶",
    wordRootMemory: "", // No memory aid in OCR text
    example: "I ate a can of beans for supper. 晚饭我吃了一罐青豆。 // Throw the empty can in the recycling bin. 把空罐子扔到回收箱里。",
    usageNotes: [
        "can of soup/soda/beans 一罐汤/苏打水/豆子",
        "tin can (BrE) / can (AmE) 金属罐",
        "watering can 喷壶",
        "trash can / dustbin 垃圾桶"
        ],
  },
  {
    word: "apparent",
    pronunciation: "/ ə'pærənt /",
    partOfSpeech: "adj.",
    definition: "明显的,清楚的",
    wordRootMemory: "联想记忆:ap+parent(父母)→父母对我们的爱很清楚→清楚的",
    example: "It was apparent that he knew nothing about how to repair cars. 很明显,他对如何修理小汽车一无所知。 // The reason for his anger was not apparent. 他生气的原因不明显。",
    usageNotes: [
        "Clearly visible or understood; obvious.",
        "apparent reason/danger 明显的理由/危险",
        "It became apparent that... 很明显...",
        ],
    relatedWords: ["apparently(adv. 明显地)"],
  },

  // Page 32
  {
    word: "comb",
    pronunciation: "/ kəʊm /",
    partOfSpeech: "vt./n.",
    definition: "vt. 梳 n. 梳子",
    wordRootMemory: "", // No memory aid in OCR text
    example: "Have you combed your hair? 你梳头了吗? // She ran a comb through her hair. 她用梳子梳理了一下头发。",
    usageNotes: [
        "comb one's hair 梳头 (verb)",
        "Use a comb 使用梳子 (noun)",
        "fine-tooth comb 细齿梳子 (also fig. search thoroughly)",
        "The 'b' is silent."
        ],
  },
  {
    word: "optimistic",
    pronunciation: "/ ˌɒptɪ'mɪstɪk /",
    partOfSpeech: "adj.",
    definition: "乐观的",
    wordRootMemory: "词根记忆:optim(最好)+istic(…的)→什么都往最好处想的→乐观的",
    example: "We should be optimistic about our future. 我们应该对自己的未来持乐观态度。 // Despite the difficulties, she remains optimistic. 尽管困难重重，她仍然保持乐观。",
    usageNotes: [
        "Hoping or believing that good things will happen.",
        "be optimistic about sth. 对某事保持乐观",
        "optimistic view/outlook 乐观的看法/前景",
        "Opposite: pessimistic"
        ],
    relatedWords: ["pessimistic(adj. 悲观的)"],
  },
  {
    word: "sight",
    pronunciation: "/ saɪt /",
    partOfSpeech: "n.",
    definition: "[U] 视力;视野; [C] 看见的事物;风景",
    wordRootMemory: "联想记忆:看风景 (sight) 要找对 (right) 地方",
    example: "The handsome young man fell in love with the pretty girl at first sight. // There is no one in sight. // The Grand Canyon is an amazing sight. 大峡谷是令人惊叹的景象。",
    usageNotes: [
        "at first sight 乍一看；初见时",
        "catch sight of 看见; lose sight of 看不见；忽略",
        "in sight 在视野内; out of sight 在视野外",
        "good/poor sight 视力好/差"
        ],
    relatedWords: ["sightless(adj. 盲的,看不见的)"],
  },
  {
    word: "debt",
    pronunciation: "/ det /",
    partOfSpeech: "n.",
    definition: "债务,欠款",
    wordRootMemory: "", // No memory aid in OCR text
    example: "He is heavily in debt. 他负债累累。 // The company is trying to reduce its debt. 公司正试图减少债务。",
    usageNotes: [
        "in debt 欠债; out of debt 不欠债",
        "pay off a debt 还清债务",
        "national debt 国债",
        "The 'b' is silent."
        ],
  },
  {
    word: "curriculum",
    pronunciation: "/ kə'rɪkjələm /",
    partOfSpeech: "n.",
    definition: "课程",
    wordRootMemory: "词根记忆:curr(跑)+iculum →课的流动、安排→课程",
    example: "Maths is an intrinsic part of the school curriculum. 数学是学校课程的固有组成部分。 // The university offers a broad curriculum. 这所大学提供广泛的课程。",
    usageNotes: [
        "The subjects comprising a course of study in a school or college.",
        "school curriculum 学校课程",
        "national curriculum 国家课程",
        "extracurricular activities 课外活动"
        ],
  },
  {
    word: "shout",
    pronunciation: "/ ʃaʊt /",
    partOfSpeech: "n./v.", // OCR shows n. [C] and v.
    definition: "n. [C] 喊,高声呼喊 v. 呼喊,呼叫",
    wordRootMemory: "联想记忆:你再大叫 (shout), 我就出去 (out)",
    example: "The angry boss shouted at his secretary to shut the window. // Don't shout, I can hear you. 别喊，我能听见。", // Example added
    usageNotes: [
        "shout at sb. (angrily) 对某人喊叫",
        "shout to sb. (to be heard) 对某人(大声)喊话",
        "shout for help 大声呼救",
        "give a shout 发出喊声"
        ],
  },
];

